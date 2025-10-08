// Generic Tanstack Mutation query hook that works with any resource
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useOfflineMutation = ({
  key,
  updateLocal,
  updateRemote,
  // resourceType,
}) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (payload) => {
      await updateLocal(payload);
      queryClient.setQueryData(key, payload);

      try {
        const updated = await updateRemote(payload);
        await updateLocal(updated);
        return updated;
      } catch (err) {
        return payload;
      }
    },
  });
};
