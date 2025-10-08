import {
  createReferralTable,
  createUserReferralStats,
} from "@/src/features/referAndEarn/db/referralTable";

const tables = [
  // referral Function Tables
  createReferralTable,
  createUserReferralStats,
];
export const initializeDatabase = async () => {
  try {
    Promise.all(tables.map((fn) => fn()));
    console.log("initialized tables");
  } catch (err) {
    console.error(" Error initializing DB", err);
  }
};
