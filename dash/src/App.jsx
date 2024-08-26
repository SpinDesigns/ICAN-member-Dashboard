import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./components/dashboard/Dashboard";
import Login from "./components/login/Login";
import Payment from "./components/payment/Payment";
import Message from "./components/message/Message";
import Resources from "./components/resources/Resources";
import Settings from "./components/settings/Settings";
import SettingsNotification from "./components/settings/SettingsNotification";
import SettingsPassword from "./components/settings/SettingsPassword";
import SettingsOption from "./components/settings/SettingsOption";
import { UserProvider } from "./UserContext";
import ProtectedRoute from "./components/PrivateRoute";

function App() {
  return (
    <UserProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />

          {/* Protected Routes */}
          <Route element={<ProtectedRoute />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/message" element={<Message />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/settings" element={<Settings />} />
            <Route
              path="/settings/notification"
              element={<SettingsNotification />}
            />
            <Route path="/settings/password" element={<SettingsPassword />} />
            <Route path="/settings/option" element={<SettingsOption />} />
          </Route>
        </Routes>
      </Router>
       
    </UserProvider>
  );
}

export default App;
