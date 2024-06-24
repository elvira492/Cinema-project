import { NavLink } from "react-router-dom";
import Layout from "../components/Layout";

const NotFoundPage = () => {
  return (
    <Layout>
      <div className=" h-64 color1 flex flex-col justify-center items-center ">
        <h1 className="text-xl pb-4">404 Not Found!</h1>
        <p>
          Sorry, please return to the{" "}
          <NavLink
            to="/"
            className="text-red-300 p-1 border-2 border-bg-stone-400 rounded-md hover:bg-stone-400 hover:text-red-500"
          >
            {" "}
            Homepage
          </NavLink>
        </p>
      </div>
    </Layout>
  );
};

export default NotFoundPage;
