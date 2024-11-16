import { useParams } from "react-router-dom";
import { getBooking } from "../../services/apiBookings";
import { useQuery } from "@tanstack/react-query";

export default function useBooking() {
  const { bookingId } = useParams();
  console.log("bookingId", bookingId);
  const {
    isLoading,
    data: booking,
    error,
  } = useQuery({
    queryKey: ["booking", bookingId],
    // queryFn: fetch("xxx"),
    queryFn: () => getBooking(bookingId),
    retry: false,
  });
  return { isLoading, booking, error };
}
