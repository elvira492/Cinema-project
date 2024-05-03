import { Outlet } from "react-router-dom";
import "./App.css";

import Layout from "./components/Layout";
// statt Layout importieren = Header und Footer importieren

function App() {
  return (
    <>
      {/* Header */}
      <Layout>
        {/* aktives Kind: Outlet */}
        <Outlet />
      </Layout>
      {/* Footer */}
    </>
  );
}

export default App;
