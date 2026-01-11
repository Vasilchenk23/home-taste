import "./App.css";
import Table from "./components/Table";
import Footer from "./components/Footer";
import { Analytics } from "@vercel/analytics/react";
import Snowfall from "react-snowfall";

function App() {
  return (
    <>
      <Snowfall
        style={{
          position: "fixed",
          width: "100vw",
          height: "100vh",
          zIndex: 9999,
        }}
        snowflakeCount={50}
        radius={[0.5, 3.0]}
        speed={[0.5, 2.5]}
        wind={[-0.5, 2.0]}
      />
      <img src="./img/logo.jpg" alt="logo" className="full-width-image" />
      <h1 className="menu-title">Меню</h1>
      <Table />
      <Footer />
      <Analytics />
    </>
  );
}

export default App;
