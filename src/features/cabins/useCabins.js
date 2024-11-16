import { getCabins } from "../../services/apiCabins";
import { useQuery } from "@tanstack/react-query";

export default function useCabins() {
  const { isLoading, data: cabins } = useQuery({
    queryKey: ["cabins"],
    // queryFn: fetch("xxx"),
    queryFn: getCabins,
  });
  return { isLoading, cabins };
}
