import { Outlet } from "react-router-dom";
import "./App.css";
import Navebar from "./pages/Navebar";

function App() {
  return (
    <>
      <div className="bg-skin-color" data-theme="dark">
        <Navebar />
        <Outlet />
      </div>
    </>
  );
}

export default App;
