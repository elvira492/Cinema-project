import { Outlet } from "react-router-dom";
import "./App.css";

import Layout from "./components/Layout";
import ScrollToTop from "./utils/ScrollToTop";
// statt Layout importieren = Header und Footer importieren

function App() {
  return (
    <>
      {/* Header */}
      <Layout>
        <ScrollToTop />
        {/* aktives Kind: Outlet */}
        <Outlet />
      </Layout>
      {/* Footer */}
    </>
  );
}

export default App;
