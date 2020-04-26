
module.exports = (pool) => pool.query(`
CREATE TABLE IF NOT EXISTS "guilds" (
  id TEXT PRIMARY KEY NOT NULL UNIQUE,
  prefix VARCHAR(10) NOT NULL DEFAULT 'm!',
  "weebGreetings" TEXT
);

CREATE TABLE IF NOT EXISTS members (
  id TEXT PRIMARY KEY NOT NULL,
  guild TEXT NOT NULL,
  points BIGINT DEFAULT 0,
  level INTEGER DEFAULT 0
);

CREATE TABLE IF NOT EXISTS bot (
  id TEXT PRIMARY KEY NOT NULL UNIQUE,
  "guildBlacklist" TEXT[],
  "userBlacklist" TEXT[]
);
`);
