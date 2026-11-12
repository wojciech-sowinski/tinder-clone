require('dotenv').config();

const cookieKeys = (process.env.COOKIE_KEYS || 'dev-key-change-me')
  .split(',')
  .map((k) => k.trim())
  .filter(Boolean);

exports.module = {
    serverPort: Number(process.env.SERVER_PORT) || 5000,
    cookieKeys: cookieKeys.length ? cookieKeys : ['dev-key-change-me'],
    cookieMaxAge: 24 * 60 * 60 * 1000,
    cookieSessionName: process.env.COOKIE_SESSION_NAME || 'authsession',
    mongoDbUrl: process.env.MONGODB_URI || process.env.MONGO_DB_URL || '',
};
