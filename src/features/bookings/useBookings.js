import { useSearchParams } from "react-router-dom";
import { getBookings } from "../../services/apiBookings";
import { useQuery } from "@tanstack/react-query";

export default function useBookings() {
  const [searchParams] = useSearchParams();
  // FILTER
  const filterValue = searchParams.get("status");
  const filter =
    !filterValue || filterValue === "all"
      ? null
      : // : { field: "totalPrice", value: 5200, method: "gte" };
        { field: "status", value: filterValue };

  // SORTBY
  const sortByRaw = searchParams.get("sortBy") || "startDate-desc";
  const [field, direction] = sortByRaw.split("-");
  const sortBy = { field, direction };

  // PAGINATION
  const page = !searchParams.get("page") ? 1 : Number(searchParams.get("page"));

  const { isLoading, data: { data: bookings, count } = {} } = useQuery({
    queryKey: ["bookings", filter, sortBy, page],
    // queryFn: fetch("xxx"),
    queryFn: () => getBookings({ filter, sortBy, page }),
  });
  return { isLoading, bookings, count };
}
