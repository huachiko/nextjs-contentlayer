export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { question, answer } = req.body;

  if (!question || !answer) {
    return res.status(400).json({ error: 'Question and answer are required' });
  }

  try {
    const response = await fetch('https://api.deepseek.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.DEEPSEEK_API_KEY}` 
      },
      body: JSON.stringify({
        model: 'deepseek-chat',
        messages: [
          {
            role: 'system',
            content: 'You are a Singapore O-Level Additional Mathematics tutor. Provide detailed step-by-step solutions to mathematical problems. Format your response clearly with numbered steps.'
          },
          {
            role: 'user',
            content: `Provide a detailed step-by-step solution for the following mathematics problem:\n\nQuestion: ${question}\n\nFinal Answer: ${answer}\n\nPlease explain each step clearly and show all working.`
          }
        ],
        temperature: 0.7,
        max_tokens: 1500
      })
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error?.message || 'API request failed');
    }

    const solution = data.choices[0].message.content;

    return res.status(200).json({ solution });

  } catch (error) {
    console.error('Error generating solution:', error);
    return res.status(500).json({ 
      error: 'Failed to generate solution',
      details: error.message 
    });
  }
}
