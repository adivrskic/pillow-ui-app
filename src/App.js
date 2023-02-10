import "./styles/App.scss";
import Header from "./components/Header/Header.js";
import MainLayout from "./layouts/MainLayout/MainLayout.js";
import Examples from "./components/Examples/Examples.js";
import Home from "./components/Home/Home.js";
import Footer from "./components/Footer/Footer.js";
import Installation from "./components/Installation/Installation.js";
import NotFound from "./components/NotFound/NotFound";
import LatestUpdates from "./components/LatestUpdates/LatestUpdates";

import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="pillow-ui-app">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/overview" element={<MainLayout />}>
          <Route path="installation" element={<Installation />} />
          <Route path="latest-updates" element={<LatestUpdates />} />
        </Route>

        <Route path="/components" element={<Examples />} />

        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
