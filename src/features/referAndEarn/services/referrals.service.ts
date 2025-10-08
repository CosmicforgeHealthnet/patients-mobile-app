import { apiClient } from "@/src/core/api/client";

// get referrals
export const getReferrals = async () => {
  const res = await apiClient.get("/referrals/my-referrals");
  return res.data;
};

// get referral stats
export const getUserReferralStats = async () => {
  const res = await apiClient.get("/referrals/my-stats");
  return res.data;
};
