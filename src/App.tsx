import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./componenets/HomePage";
import LoginPage from './componenets/LoginPage';
import NotFound from "./componenets/NotFound";
import SignUp from './componenets/SignUp';
// import Dashboard from "./componenets/Dashboard";
// import Timer from "./componenets/Board/Timer";
// import WorkOutAssist from "./componenets/Board/WorkOutAssist";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <NotFound />
  },
  {
    path: "/login",
    element: <LoginPage />
  },
  {
    path: "/signup",
    element: <SignUp />
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
      {/* <HomePage /> */}
      {/* <LoginPage /> */}
      {/* <SignUp /> */}
      {/* <Dashboard /> */}
      {/* <Timer /> */}
      {/* <WorkOutAssist /> */}
    </>
  );
}

export default App;
