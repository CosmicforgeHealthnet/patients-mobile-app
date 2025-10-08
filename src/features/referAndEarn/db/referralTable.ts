import db from "@/src/core/db";

// this are the user referrals table
export const createReferralTable = async () => {
  await db.execAsync(`
     CREATE TABLE IF NOT EXISTS referred_users (
    id TEXT PRIMARY KEY NOT NULL,
    username TEXT,
    role TEXT
  );

  CREATE TABLE IF NOT EXISTS referrals (
    id TEXT PRIMARY KEY NOT NULL,
    referredUser TEXT,
    status TEXT,
    verifiedAt TEXT,
    createdAt TEXT,
    FOREIGN KEY (referredUser) REFERENCES referred_users(id)
  )`);
};
export const dropTable = async () => {
  await db.execAsync(`DROP TABLE IF EXISTS stats`);
};

// user referral stats
export const createUserReferralStats = async () => {
  await db.execAsync(`
CREATE TABLE IF NOT EXISTS stats (
  id INTEGER PRIMARY KEY, -- single row ID
  currentDraw TEXT,
  currentDrawReferrals INTEGER,
  leaderboardPosition INTEGER,
  referralCode TEXT,
  referralLink TEXT,
  totalReferrals INTEGER
)`);
};
