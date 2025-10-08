import db from "@/src/core/db";

// get local referrals
export const getLocalReferrals = async () => {
  const result = await db.getAllAsync(`
        SELECT r.*, u.username, u.role
        FROM referrals r
        JOIN referred_users u ON r.referredUser = u.id
        ORDER BY r.createdAt DESC
        `);
  return result;
};

// save referrals
export const saveReferrals = async (referrals) => {
  await db.withTransactionAsync(async () => {
    for (const ref of referrals) {
      const user = ref.referredUser;

      // insert referred user
      await db.runAsync(
        `INSERT OR REPLACE INTO referred_users (id, username,role)
                VALUES (?,?,?)`,
        [user.id, user.username, user.role]
      );

      // insert referral
      await db.runAsync(
        `INSERT OR REPLACE INTO referrals (id, referredUser, status, verifiedAt, createdAt)
         VALUES (?, ?, ?, ?, ?)`,
        [ref.id, user.id, ref.status, ref.verifiedAt, ref.createdAt]
      );
    }
  });
};

// get user referral stats
export const getUserLocalReferralStats = async () => {
  const result = await db.getAllAsync(`
        SELECT * FROM stats;
        `);
  return result[0];
};

// save user referral stats
export const saveUserReferralStats = async (referralStats) => {
  await db.withTransactionAsync(async () => {
    // insert stats
    await db.runAsync(
      `
            INSERT OR REPLACE INTO stats (
                id, currentDraw, currentDrawReferrals, leaderboardPosition, referralCode, referralLink, totalReferrals 

            )  VALUES (1, ?, ?, ?, ?, ?, ?)
            `,
      [
        referralStats.currentDraw,
        referralStats.currentDrawReferrals,
        referralStats.leaderboardPosition,
        referralStats.referralCode,
        referralStats.referralLink,
        referralStats.totalReferrals,
      ]
    );
  });
};
