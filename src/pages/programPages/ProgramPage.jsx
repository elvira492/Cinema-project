import { Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";

const items = [
  { name: "Today", to: "/program", id: 1 },
  { name: "Tomorrow", to: "/program/tomorrow", id: 2 },
  { name: "This Week", to: "/program/week", id: 3 },
];

const ProgramPage = () => {
  return (
    <div className="color1">
      <ul className={"flex flex-row justify-center items-center gap-x-8 p-4"}>
        {items.map((item) => {
          return (
            <li key={item.id} className="hover:underline">
              <NavLink to={item.to}>{item.name}</NavLink>
            </li>
          );
        })}
      </ul>
      <Outlet />
    </div>
  );
};

export default ProgramPage;
