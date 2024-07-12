import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Home from "./pages/Home";
import Navebar from "./pages/Navebar";

function App() {
  return (
    <>
      <Navebar />
      <Home backgroundColor={'white'} />
    </>
  );
}

export default App;
