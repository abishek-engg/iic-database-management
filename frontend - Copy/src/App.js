import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import Navbar from "./components/Navbar";
import EventCenter from "./pages/EventCenter";
import EventTracker from "./pages/EventTracker";
import Home from "./pages/Main";
import Login from "./pages/Login";
import CreateEvent from "./pages/CreateEvent";
import Report from "./pages/Report";
import ReportForm from "./pages/ReportForm";
import SelfDriven from "./pages/SelfDriven";
import SelfDrivenForm from "./pages/SelfDrivenFrom";
import Dashboard from "./pages/Dashboard";
import AdminTracker from "./pages/AdminTracker";
import AdminSelf from "./pages/AdminSelf"
import AdminReport from "./pages/AdminReport"
import AdminDashboard from "./pages/AdminDashboard";



const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Login />} />
      <Route end path="/user" element={<Navbar />}>
        <Route exact index element={<Home />} /> {/* Default route for /user */}
        <Route exact path="eventcenter" element={<EventCenter />} />
        <Route path="eventtracker" element={<EventTracker />} />
        <Route path="eventtracker/createevent" element={<CreateEvent />} />
        <Route path="selfdriven" element={<SelfDriven/>} />
        <Route path="selfdriven/newselfdriven" element={<SelfDrivenForm/>} />
        <Route path="report" element={<Report />} />
        <Route path="report/reportform" element={<ReportForm />} />
        <Route path="dashboard" element={<Dashboard/>} />
      </Route>
      <Route end path="/admin" element={<Navbar />}>
        <Route exact index element={<Home />} /> 
        <Route path="eventtracker" element={<AdminTracker/>} />
        <Route path="selfdriven" element={<AdminSelf/>} />
        <Route path="report" element={<AdminReport/>} />
        <Route path="dashboard" element={<AdminDashboard/>} />

      </Route>
    </>
  )
);

function App() {

  
  return <RouterProvider router={router} />;
}

export default App;
