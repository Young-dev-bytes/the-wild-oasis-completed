import { Toaster } from "react-hot-toast";
import { DarkModeProvider } from "./context/DarkModeProvider";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import TestRenderProps from "./test/TestRenderProps";
import GlobalStyles from "./styles/GlobalStyles";
import PageNotFound from "./pages/PageNotFound";
import Dashboard from "./pages/Dashboard";
import Bookings from "./pages/Bookings";
import Settings from "./pages/Settings";
import AppLayout from "./ui/AppLayout";
import Account from "./pages/Account";
import Cabins from "./pages/Cabins";
import Users from "./pages/Users";
import Login from "./pages/Login";
import TestHOC from "./test/TestHOC";
import Booking from "./pages/Booking";
import Checkin from "./pages/Checkin";
import TestCounter from "./test/TestCounter";
import ProtectedRoute from "./ui/ProtectedRoute";
import TopNotice from "./ui/TopNotice";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // Default stale time of 10 minutes
      staleTime: 10 * 60 * 1000,
      // Add caching for better performance
      cacheTime: 15 * 60 * 1000,
      // Retry failed requests 2 times
      retry: 2,
      // Refetch on window focus
      refetchOnWindowFocus: true,
      // Refetch on reconnect
      refetchOnReconnect: true,
    },
  },
});

function App() {
  return (
    <DarkModeProvider>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={true} />
        <GlobalStyles />
        <BrowserRouter>
          <Routes>
            <Route
              element={
                <ProtectedRoute>
                  <TopNotice />
                  <AppLayout />
                </ProtectedRoute>
              }
            >
              {/* <Route index element={<Dashboard />} /> */}
              <Route index element={<Navigate replace to="/dashboard" />} />
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="bookings" element={<Bookings />} />
              <Route path="bookings/:bookingId" element={<Booking />} />
              <Route path="checkin/:bookingId" element={<Checkin />} />
              <Route path="cabins" element={<Cabins />} />
              <Route path="users" element={<Users />} />
              <Route path="settings" element={<Settings />} />
              <Route path="account" element={<Account />} />
            </Route>
            <Route path="login" element={<Login />} />
            <Route path="*" element={<PageNotFound />} />
            <Route path="testhoc" element={<TestHOC />} />
            <Route path="testrenderprops" element={<TestRenderProps />} />
            <Route path="testcounter" element={<TestCounter />} />
            {/* <Route path="designrule" element={<WebDesignRule />} /> */}
          </Routes>
        </BrowserRouter>
        <Toaster
          position="top-center"
          gutter={12}
          containerStyle={{ margin: "8px" }}
          toastOptions={{
            // Define default options
            duration: 5000,
            style: {
              fontSize: "16px",
              maxWidth: "500px",
              padding: "16px 24px",
              background: "var(--color-grey-0)",
              color: "var(--color-grey-700)",
            },

            // Default options for specific types
            success: {
              duration: 3000,
              theme: {
                primary: "green",
                secondary: "black",
              },
            },
            error: {
              duration: 5000,
              theme: {
                primary: "green",
                secondary: "black",
              },
            },
          }}
        />
      </QueryClientProvider>
    </DarkModeProvider>
  );
}

export default App;
