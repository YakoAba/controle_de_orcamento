import cookie from 'cookie';
import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const cookies = cookie.parse(req.headers.cookie || '');
  const logCookie = cookies.log || '';

  let userStatus = '';
  if (logCookie === 'admin') {
    userStatus = 'admin';
  } else if (logCookie === 'user') {
    userStatus = 'user';
  }

  res.status(200).json({ userStatus });
}
