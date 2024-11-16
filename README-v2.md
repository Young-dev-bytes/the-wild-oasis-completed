```jsx
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          element={
            <>
              <h1>Young</h1>
              <Outlet />
            </>
          }
        >
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="bookings" element={<Bookings />} />
          <Route path="cabins" element={<Cabins />} />
          <Route path="users" element={<Users />} />
          <Route path="settings" element={<Settings />} />
          <Route path="account" element={<Account />} />
          <Route path="login" element={<Login />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const router = createBrowserRouter([
  {
    element: (
      <>
        <h1>Young</h1>
        <Outlet />
      </>
    ),
    children: [
      { path: "/", element: <Dashboard /> },
      { path: "dashboard", element: <Dashboard /> },
      { path: "bookings", element: <Bookings /> },
      { path: "cabins", element: <Cabins /> },
      { path: "users", element: <Users /> },
      { path: "settings", element: <Settings /> },
      { path: "account", element: <Account /> },
      { path: "login", element: <Login /> },
      { path: "*", element: <PageNotFound /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
```
