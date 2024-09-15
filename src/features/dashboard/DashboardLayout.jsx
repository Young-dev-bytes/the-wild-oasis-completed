import styled from "styled-components";
import Spinner from "../../ui/Spinner";
import { useRecentStays } from "./useRecentStays";
import { useRecentBookings } from "./useRecentBookings";
import Stats from "./Stats";
import useCabins from "../cabins/useCabins";
import SalesChart from "./SalesChart";
import DurationChart from "./DurationChart";

const StyledDashboardLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto 34rem auto;
  gap: 2.4rem;
`;

function DashboardLayout() {
  const { isLoading: isLoadingRecentBookings, bookings } = useRecentBookings();
  const {
    isLoading: isLoadingRecentStays,
    stays,
    confirmedStays,
    numDays,
  } = useRecentStays();
  const { isLoading: isLoadingCabins, cabins } = useCabins();
  if (isLoadingRecentBookings || isLoadingRecentStays || isLoadingCabins)
    return <Spinner />;

  console.log(bookings, stays, confirmedStays);
  return (
    <StyledDashboardLayout>
      <Stats
        bookings={bookings}
        confirmedStays={confirmedStays}
        numDays={numDays}
        cabinCount={cabins.length}
      />
      <div>test Young forward</div>
      <DurationChart confirmedStays={confirmedStays} />
      <SalesChart bookings={bookings} numDays={numDays} />
    </StyledDashboardLayout>
  );
}

export default DashboardLayout;
