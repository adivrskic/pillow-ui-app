import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header.js";
import Layout from "./layouts/Layout/Layout.js";
import ComponentList from "./components/ComponentList/ComponentList.js";
import Example from "./components/Example/Example.js";
import Home from "./components/Home/Home.js";
import Footer from "./components/Footer/Footer.js";
import Installation from "./components/Installation/Installation.js";
import NotFound from "./components/NotFound/NotFound";
import LatestUpdates from "./components/LatestUpdates/LatestUpdates";
import "./styles/index.scss";

function App() {
  return (
    <div id="pillow-ui-app">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/overview" element={<Layout />}>
          <Route path="installation" element={<Installation />} />
          <Route path="latest-updates" element={<LatestUpdates />} />
        </Route>
        <Route path="/components" element={<Layout />}>
          <Route path="/components" element={<ComponentList />} />
          <Route path="/components/:id" element={<Example />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
