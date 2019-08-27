import fs from 'fs';
import jwt from 'jsonwebtoken';

const algorithm = 'RS256';
const iss = 'scoutbase-api'
const privateKey = fs.readFileSync('cert/private.key');
const publicKey = fs.readFileSync('cert/public.key');
const lifetime = 24 * 3600;

export const generateToken = (username: string) => {
  const now = Math.floor(Date.now() / 1000);
  const claims = {
    iat: now,
    exp: now + lifetime,
    iss,
    sub: username,
  };
  const token = jwt.sign(claims, privateKey, { algorithm });
  return token;
};

export const validateToken = (token: string): string => {
  const now = Math.floor(Date.now() / 1000);
  if (!token) { return ''; }

  try {
    const decoded: any = jwt.verify(token, publicKey, { algorithms: [algorithm] });
    if (typeof decoded !== 'object') { return ''; }
    return (decoded.iat < now && decoded.exp > now && decoded.iss === iss) ? decoded.sub : '';
  } catch (error) {
    return '';
  }
};
