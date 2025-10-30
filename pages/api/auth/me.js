import { getSession } from '../../../lib/session';

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const session = await getSession(req, res);
    
    if (session.user) {
      return res.status(200).json({
        isLoggedIn: true,
        user: session.user
      });
    } else {
      return res.status(200).json({
        isLoggedIn: false,
        user: null
      });
    }
  } catch (error) {
    console.error('Session error:', error);
    return res.status(200).json({
      isLoggedIn: false,
      user: null
    });
  }
}