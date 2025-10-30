// ==========================================
// FILE: pages/api/generate-question.js
// ==========================================

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
        error: 'No example questions found for topic: ' + mappedTopic,
        availableTopics: [...new Set(questions.map(q => q.topic))]
      });
    }

    // Function to convert LaTeX to plain text
    const latexToPlainText = (text) => {
      let result = text;
      
      // Fractions
      result = result.replace(/\\frac\{([^}]+)\}\{([^}]+)\}/g, '($1/$2)');
      
      // Square roots
      result = result.replace(/\\sqrt\{([^}]+)\}/g, 'sqrt($1)');
      
      // Superscripts
      result = result.replace(/\^(\d)/g, function(match, p1) {
        const superscripts = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
        const superMap = {
          '0': '\u2070', '1': '\u00B9', '2': '\u00B2', '3': '\u00B3',
          '4': '\u2074', '5': '\u2075', '6': '\u2076', '7': '\u2077',
          '8': '\u2078', '9': '\u2079'
        };
        return superMap[p1] || '^' + p1;
      });
      result = result.replace(/\^\{([^}]+)\}/g, '^($1)');
      
      // Subscripts
      result = result.replace(/_(\d)/g, function(match, p1) {
        const subMap = {
          '0': '\u2080', '1': '\u2081', '2': '\u2082', '3': '\u2083',
          '4': '\u2084', '5': '\u2085', '6': '\u2086', '7': '\u2087',
          '8': '\u2088', '9': '\u2089'
        };
        return subMap[p1] || '_' + p1;
      });
      result = result.replace(/_{([^}]+)}/g, '_($1)');
      
      // Greek letters
      result = result.replace(/\\pi/g, 'pi');
      result = result.replace(/\\theta/g, 'theta');
      result = result.replace(/\\alpha/g, 'alpha');
      result = result.replace(/\\beta/g, 'beta');
      result = result.replace(/\\gamma/g, 'gamma');
      result = result.replace(/\\delta/g, 'delta');
      
      // Math operators
      result = result.replace(/\\times/g, 'x');
      result = result.replace(/\\div/g, '/');
      result = result.replace(/\\pm/g, '+/-');
      result = result.replace(/\\leq/g, '<=');
      result = result.replace(/\\geq/g, '>=');
      result = result.replace(/\\neq/g, '!=');
      result = result.replace(/\\approx/g, '~=');
      
      // Trig functions
      result = result.replace(/\\sin/g, 'sin');
      result = result.replace(/\\cos/g, 'cos');
      result = result.replace(/\\tan/g, 'tan');
      result = result.replace(/\\sec/g, 'sec');
      result = result.replace(/\\cot/g, 'cot');
      
      // Logarithms
      result = result.replace(/\\log_\{?(\w+)\}?\s*\(?([^)]+)\)?/g, 'log_$1($2)');
      result = result.replace(/\\log/g, 'log');
      result = result.replace(/\\ln/g, 'ln');
      
      // Remove remaining LaTeX
      result = result.replace(/\\text\{([^}]+)\}/g, '$1');
      result = result.replace(/\\mathrm\{([^}]+)\}/g, '$1');
      
      // Clean up spaces
      result = result.replace(/\s+/g, ' ').trim();
      
      return result;
    };

    // Randomly select 3-5 questions as examples
    const numExamples = Math.min(5, topicQuestions.length);
    const shuffled = [...topicQuestions].sort(() => 0.5 - Math.random());
    const selectedExamples = shuffled.slice(0, numExamples);

    // Format examples
    const exampleText = selectedExamples
      .map((q, idx) => {
        const plainQuestion = latexToPlainText(q.question);
        return 'Example ' + (idx + 1) + ': ' + plainQuestion.replace(/\n/g, ' ');
      })
      .join('\n\n');

    // Variety instructions
    const varietyInstructions = [
      "Use different numerical values and coefficients",
      "Vary the context (real-world applications, pure math, or word problems)",
      "Change the specific sub-topic within this main topic",
      "Use different letter variables (x, y, t, theta, etc.)",
      "Adjust the complexity while maintaining O-Level standard"
    ];
    
    const selectedInstructions = varietyInstructions
      .sort(() => 0.5 - Math.random())
      .slice(0, 3)
      .join('. ') + '.';

    // Temperature variation
    const temperature = 0.8 + (Math.random() * 0.4);

    // Avoidance instructions
    let avoidanceInstructions = '';
    if (previousQuestions.length > 0) {
      const previousSummaries = previousQuestions
        .slice(-5)
        .map((q, idx) => 'Previous Q' + (idx + 1) + ': ' + q.substring(0, 100) + '...')
        .join('\n');
      
      avoidanceInstructions = '\n\nPREVIOUSLY GENERATED QUESTIONS (DO NOT REPEAT THESE):\n' +
        previousSummaries + '\n\n' +
        'You MUST generate a question that is COMPLETELY DIFFERENT from all previous questions above. Use different:\n' +
        '- Mathematical approach/technique\n' +
        '- Context (if one was real-world, make this pure math, or vice versa)\n' +
        '- Numbers and coefficients\n' +
        '- Variables and notation\n' +
        '- Sub-topic focus within ' + mappedTopic;
    }

    const systemMessage = 'You are creating Singapore O-Level Additional Mathematics questions. Study these real O-Level examples from past papers:\n\n' +
      exampleText + '\n\n' +
      'Generate a NEW, COMPLETELY UNIQUE question following O-Level standards.\n\n' +
      'CRITICAL - Each question MUST be completely different:\n' +
      selectedInstructions + '\n\n' +
      'Use plain mathematical notation (no LaTeX):\n' +
      '- Use simple text like x^2 for x squared\n' +
      '- Use sqrt() for square root\n' +
      '- Use proper fractions like (a/b)\n' +
      '- Use symbols: pi, theta, <=, >=, !=, +/-, x\n' +
      '- Keep it exam-quality and readable\n' +
      avoidanceInstructions + '\n\n' +
      'Return only JSON:\n' +
      '{"question":"text","parts":[{"label":"(a)","text":"part a"}],"solution":{"steps":[{"step":1,"description":"desc","work":"work"}],"answers":[{"part":"(a)","answer":"ans"}]}}';

    const userMessage = 'Generate a COMPLETELY UNIQUE ' + mappedTopic + ' question that is TOTALLY DIFFERENT from ALL examples and previous questions. Be highly creative and original.';

    const response = await fetch('https://api.deepseek.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + process.env.DEEPSEEK_API_KEY,
      },
      body: JSON.stringify({
        model: 'deepseek-chat',
        messages: [
          {
            role: 'system',
            content: systemMessage
          },
          {
            role: 'user',
            content: userMessage
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