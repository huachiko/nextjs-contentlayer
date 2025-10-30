import { getIronSession } from 'iron-session';

const sessionOptions = {
  password: process.env.SESSION_SECRET || 'complex_password_at_least_32_characters_long',
  cookieName: 'amath_session',
  cookieOptions: {
    secure: process.env.NODE_ENV === 'production',
  },
};

export async function getSession(req, res) {
  const session = await getIronSession(req, res, sessionOptions);
  return session;
}

export function withSessionRoute(handler) {
  return async function (req, res) {
    req.session = await getSession(req, res);
    return handler(req, res);
  };
}