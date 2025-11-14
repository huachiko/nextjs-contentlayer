const questions = require('../../data/questions');

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { topic, previousQuestions = [] } = req.body;

    if (!topic) {
      return res.status(400).json({ error: 'Topic is required' });
    }

    // Map route topics to question bank topics
    const topicMapping = {
      'quadratic-functions': 'Quadratic Equations',
      'Quadratic functions': 'Quadratic Equations',
      'equations-inequalities': 'Equations and Inequalities',
      'Equations and inequalities': 'Equations and Inequalities',
      'surds': 'Surds',
      'Surds': 'Surds',
      'polynomials-partial-fractions': 'Polynomials and Partial Fractions',
      'Polynomials and Partial Fractions': 'Polynomials and Partial Fractions',
      'exponential-logarithmic': 'Exponential and Logarithmic Functions',
      'Exponential and Logarithmic Functions': 'Exponential and Logarithmic Functions',
      'coordinate-geometry': 'Coordinate Geometry',
      'Coordinate Geometry': 'Coordinate Geometry',
      'circles': 'Circles',
      'Circles': 'Circles',
      'straight-line-graphs': 'Applications of Straight Line Graphs',
      'Applications of Straight Line Graphs': 'Applications of Straight Line Graphs',
      'trigonometric-functions': 'Trigonometric Functions',
      'Trigonometric Functions': 'Trigonometric Functions',
      'trigonometric-identities': 'Trigonometric Identities and Equations',
      'Trigonometric Identities and Equations': 'Trigonometric Identities and Equations',
      'differentiation': 'Differentiation',
      'Differentiation': 'Differentiation',
      'tangents-normals': 'Tangents, Normals and Rates of Change',
      'Tangents, Normals and Rates of Change': 'Tangents, Normals and Rates of Change',
      'maxima-minima': 'Maxima and Minima',
      'Maxima and Minima': 'Maxima and Minima',
      'trig-exp-log-diff': 'Differentiation of Trigonometric, Exponential and Logarithmic Functions',
      'Differentiation of Trigonometric, Exponential and Logarithmic Functions': 'Differentiation of Trigonometric, Exponential and Logarithmic Functions',
      'integration': 'Integration',
      'Integration': 'Integration',
      'applications-integration': 'Applications of Integration',
      'Applications of Integration': 'Applications of Integration',
      'kinematics': 'Kinematics',
      'Kinematics': 'Kinematics'
    };

    const mappedTopic = topicMapping[topic] || topic;

    // Get all questions for this topic from the question bank
    const topicQuestions = questions.filter(q => q.topic === mappedTopic);

    if (topicQuestions.length === 0) {
      return res.status(400).json({ 
        error: `No example questions found for topic: ${mappedTopic}`,
        availableTopics: [...new Set(questions.map(q => q.topic))]
      });
    }

    // Function to convert LaTeX to plain text
    const latexToPlainText = (text) => {
      return text
        // Fractions: \frac{a}{b} -> (a/b)
        .replace(/\\frac\{([^}]+)\}\{([^}]+)\}/g, '($1/$2)')
        // Square roots: \sqrt{x} -> √(x)
        .replace(/\\sqrt\{([^}]+)\}/g, '√($1)')
        // Superscripts: x^2 or x^{2} -> x²
        .replace(/\^(\d)/g, (match, p1) => '⁰¹²³⁴⁵⁶⁷⁸⁹'[p1] || `^${p1}`)
        .replace(/\^\{([^}]+)\}/g, '^($1)')
        // Subscripts: x_2 -> x₂
        .replace(/_(\d)/g, (match, p1) => '₀₁₂₃₄₅₆₇₈₉'[p1] || `_${p1}`)
        .replace(/_{([^}]+)}/g, '_($1)')
        // Greek letters
        .replace(/\\pi/g, 'π')
        .replace(/\\theta/g, 'θ')
        .replace(/\\alpha/g, 'α')
        .replace(/\\beta/g, 'β')
        .replace(/\\gamma/g, 'γ')
        .replace(/\\delta/g, 'δ')
        // Math operators
        .replace(/\\times/g, '×')
        .replace(/\\div/g, '÷')
        .replace(/\\pm/g, '±')
        .replace(/\\leq/g, '≤')
        .replace(/\\geq/g, '≥')
        .replace(/\\neq/g, '≠')
        .replace(/\\approx/g, '≈')
        // Trigonometric functions
        .replace(/\\sin/g, 'sin')
        .replace(/\\cos/g, 'cos')
        .replace(/\\tan/g, 'tan')
        .replace(/\\sec/g, 'sec')
        .replace(/\\cot/g, 'cot')
        // Logarithms: \log_a b -> log_a(b)
        .replace(/\\log_\{?(\w+)\}?\s*\(?([^)]+)\)?/g, 'log_$1($2)')
        .replace(/\\log/g, 'log')
        .replace(/\\ln/g, 'ln')
        // Remove remaining LaTeX commands
        .replace(/\\text\{([^}]+)\}/g, '$1')
        .replace(/\\mathrm\{([^}]+)\}/g, '$1')
        // Clean up extra spaces and newlines
        .replace(/\s+/g, ' ')
        .trim();
    };

    // Randomly select 3-5 questions as examples (increased from 2-3)
    const numExamples = Math.min(5, topicQuestions.length);
    const shuffled = [...topicQuestions].sort(() => 0.5 - Math.random());
    const selectedExamples = shuffled.slice(0, numExamples);

    // Format examples for the prompt with LaTeX converted to plain text
    const exampleText = selectedExamples
      .map((q, idx) => {
        const plainQuestion = latexToPlainText(q.question);
        return `Example ${idx + 1}: ${plainQuestion.replace(/\n/g, ' ')}`;
      })
      .join('\n\n');

    // Add variety instructions based on number of examples
    const varietyInstructions = [
      "Use different numerical values and coefficients",
      "Vary the context (real-world applications, pure math, or word problems)",
      "Change the specific sub-topic within this main topic",
      "Use different letter variables (x, y, t, θ, etc.)",
      "Adjust the complexity while maintaining O-Level standard"
    ];
    
    // Randomly select 2-3 variety instructions
    const selectedInstructions = varietyInstructions
      .sort(() => 0.5 - Math.random())
      .slice(0, 3)
      .join('. ') + '.';

    // Temperature variation for more creativity
    const temperature = 0.8 + (Math.random() * 0.4); // 0.8 to 1.2 for maximum variety

    // Create a summary of previous questions to avoid repetition
    let avoidanceInstructions = '';
    if (previousQuestions.length > 0) {
      const previousSummaries = previousQuestions
        .slice(-5) // Last 5 questions
        .map((q, idx) => `Previous Q${idx + 1}: ${q.substring(0, 100)}...`)
        .join('\n');
      
      avoidanceInstructions = `\n\nPREVIOUSLY GENERATED QUESTIONS (DO NOT REPEAT THESE):
${previousSummaries}

You MUST generate a question that is COMPLETELY DIFFERENT from all previous questions above. Use different:
- Mathematical approach/technique
- Context (if one was real-world, make this pure math, or vice versa)
- Numbers and coefficients
- Variables and notation
- Sub-topic focus within ${mappedTopic}`;
    }

    const response = await fetch('https://api.deepseek.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.DEEPSEEK_API_KEY}`,
      },
      body: JSON.stringify({
        model: 'deepseek-chat',
        messages: [
          {
            role: 'system',
            content: `You are creating Singapore O-Level Additional Mathematics questions. Study these real O-Level examples from past papers:

${exampleText}

Generate a NEW, COMPLETELY UNIQUE question following O-Level standards. 

CRITICAL - Each question MUST be completely different:
${selectedInstructions}

Use plain mathematical notation (no LaTeX):
- Use Unicode superscripts: x² x³ (not x^2)
- Use √ for square root (not \\sqrt)
- Use proper fractions like (a/b) or Unicode ½ ¾
- Use symbols: π θ ≤ ≥ ≠ ± ×
- Keep it exam-quality and readable
${avoidanceInstructions}

Return only JSON:
{"question":"text","parts":[{"label":"(a)","text":"part a"}],"solution":{"steps":[{"step":1,"description":"desc","work":"work"}],"answers":[{"part":"(a)","answer":"ans"}]}}`
          },
          {
            role: 'user',
            content: `Generate a COMPLETELY UNIQUE ${mappedTopic} question that is TOTALLY DIFFERENT from ALL examples and previous questions. Be highly creative and original.`
          }
        ],
        temperature: temperature,
        max_tokens: 1500,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('Deepseek API error:', errorData);
      return res.status(response.status).json({
        error: 'Failed to generate question',
        details: errorData
      });
    }

    const data = await response.json();
    const generatedContent = data.choices[0].message.content;

    let questionData;
    try {
      const cleanedContent = generatedContent
        .replace(/```json\n?/g, '')
        .replace(/```\n?/g, '')
        .trim();
      
      questionData = JSON.parse(cleanedContent);
    } catch (parseError) {
      console.error('Failed to parse generated content:', generatedContent);
      return res.status(500).json({
        error: 'Invalid response format from AI',
        content: generatedContent
      });
    }

    return res.status(200).json({
      success: true,
      question: questionData
    });

  } catch (error) {
    console.error('Error generating question:', error);
    return res.status(500).json({
      error: 'Internal server error',
      message: error.message
    });
  }
}