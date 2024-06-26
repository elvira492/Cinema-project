import { Outlet } from "react-router-dom";
import { NavLink, useLocation } from "react-router-dom";

const items = [
  { name: "Today", to: "/program", id: 1 },
  { name: "Tomorrow", to: "/program/tomorrow", id: 2 },
  { name: "This Week", to: "/program/week", id: 3 },
];

const ProgramPage = () => {
  const location = useLocation();

  return (
    <div className="color1 pb-48">
      <ul className={"flex flex-row justify-center items-center gap-x-8 p-4"}>
        {items.map((item) => {
          return (
            <li key={item.id} className="hover:underline">
              <NavLink
                to={item.to}
                className={` ${
                  location.pathname === item.to ? "rose" : "text-white"
                }`}
              >
                {item.name}
              </NavLink>
            </li>
          );
        })}
      </ul>
      <Outlet />
    </div>
  );
};

export default ProgramPage;
