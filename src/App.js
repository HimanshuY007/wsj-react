import { useRef, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Headlines from "./components/Headlines";
function App() {
  const upBar = useRef();
  useEffect(() => {
    window.addEventListener("scroll", (e) => {
      if (window.scrollY > 90) {
        upBar.current.style.transform = "translateY(0)";
      } else {
        upBar.current.style.transform = "translateY(-100%)";
      }
    });
  }, []);
  return (
    <>
      <div className="hiddenbar" ref={upBar}>
        <Navbar />
      </div>
      <Navbar />
      <Headlines />
    </>
  );
}

export default App;
