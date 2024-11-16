import { getSettings } from "../../services/apiSettings";
import { useQuery } from "@tanstack/react-query";

export default function useSettings() {
  const {
    isLoading,
    data: settings,
    error,
  } = useQuery({
    queryKey: ["settings"],
    // queryFn: fetch("xxx"),
    queryFn: getSettings,
  });
  return { isLoading, settings, error };
}
