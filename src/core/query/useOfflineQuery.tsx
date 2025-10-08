import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";

// Generic Tanstack query hook that works with any resource

export const useOfflineQuery = ({
  key,
  getLocal,
  getRemote,
  saveLocal,
  staleTime,
}: {
  key: string[];
  getLocal: () => Promise<any>;
  getRemote: () => Promise<any>;
  saveLocal: (arg0: any) => Promise<any>;
  staleTime?: number;
}) => {
  const [localData, setLocalData] = useState<any>();

  useEffect(() => {
    getLocal().then((data) => {
      if (data?.length) setLocalData(data);
    });
  }, [getLocal]);

  return useQuery({
    queryKey: key,
    queryFn: async () => {
      const remoteData = await getRemote();
      await saveLocal(remoteData);
      return remoteData;
    },
    initialData: localData,
    staleTime: staleTime ?? 1000 * 10, // 5 min default
  });
};
