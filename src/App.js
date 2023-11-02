import Header from "./components/Header/Header.js";
import MainLayout from "./layouts/MainLayout/MainLayout.js";
import ComponentList from "./components/ComponentList/ComponentList.js";
import Example from "./components/Example/Example.js";
import Home from "./components/Home/Home.js";
import Footer from "./components/Footer/Footer.js";
import Installation from "./components/Installation/Installation.js";
import NotFound from "./components/NotFound/NotFound";
import LatestUpdates from "./components/LatestUpdates/LatestUpdates";
import ScrollToTop from "./helpers/ScrollToTop";
import { StateProvider } from "./context/StateProvider";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <StateProvider>
      <div className="pillow-ui-app">
        <ScrollToTop />
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/overview" element={<MainLayout />}>
            <Route path="installation" element={<Installation />} />
            <Route path="latest-updates" element={<LatestUpdates />} />
          </Route>
          <Route path="/components" element={<ComponentList />} />
          <Route path="/components/:id" element={<Example />} />

          <Route path="*" element={<NotFound />} />
        </Routes>

        <Footer />
      </div>
    </StateProvider>
  );
}

export default App;
