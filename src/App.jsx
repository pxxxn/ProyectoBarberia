import { useState } from "react";
import Login from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword";

function App() {
  const [view, setView] = useState("login");

  return (
    <>
      {view === "login" && (
        <Login onForgotPassword={() => setView("forgot")} />
      )}
      {view === "forgot" && (
        <ForgotPassword onBack={() => setView("login")} />
      )}
    </>
  );
}

export default App;
