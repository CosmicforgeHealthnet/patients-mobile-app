import { useOfflineQuery } from "@/src/core/query/useOfflineQuery";
import {
  getLocalReferrals,
  getUserLocalReferralStats,
  saveReferrals,
  saveUserReferralStats,
} from "../repo/referralsRepo";
import {
  getReferrals,
  getUserReferralStats,
} from "../services/referrals.service";

//get user referrals
// export const useGetReferrals = () => {
//   return useQuery({
//     queryKey: ["my-referrals"],
//     queryFn: async () => {
//       // load local referrals firs
//       try {
//         // get remote referrals
//         const remoteReferrals = await getReferrals();

//         //   Save to local DB
//         await saveReferrals(remoteReferrals);

//         console.log("Local referrals:", localReferrals);
//         console.log("Remote referrals:", remoteReferrals);
//         return remoteReferrals;
//       } catch (err) {
//         const localReferrals = await getLocalReferrals();
//         return localReferrals;
//       }
//     },
//     staleTime: 1000 * 10,
//   });
// };

//get user referral stats
// export const useGetUserReferralStats = () => {
//   return useQuery({
//     queryKey: ["my-referral-stats"],
//     queryFn: async () => {
//       try {
//         // Attempt to get remote data first
//         const remoteData = await getUserReferralStats();

//         // Save to local DB for offline use
//         await saveUserReferralStats(remoteData);

//         return remoteData;
//       } catch (err) {
//         // If offline or fetch fails, fallback to local DB
//         const localData = await getUserLocalReferralStats();
//         return localData;
//       }
//     },
//     staleTime: 1000 * 10, // optional, keeps cache for 10 seconds
//   });
// };

export const useGetReferrals = () =>
  useOfflineQuery({
    key: ["my-referral"],
    getLocal: getLocalReferrals,
    getRemote: getReferrals,
    saveLocal: saveReferrals,
  });

export const useGetUserReferralStats = () =>
  useOfflineQuery({
    key: ["my-referral-stats"],
    getLocal: getUserLocalReferralStats,
    getRemote: getUserReferralStats,
    saveLocal: saveUserReferralStats,
    staleTime: 100 * 10,
  });
