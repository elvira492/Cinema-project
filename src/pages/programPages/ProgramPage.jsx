import { Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";

const items = [
  { name: "Today", to: "/program", id: 1 },
  { name: "Tomorrow", to: "/program/tomorrow", id: 2 },
  { name: "This Week", to: "/program/week", id: 3 },
];

const ProgramPage = () => {
  return (
    <div>
      <h1>ProgramPage</h1>
      <u className={"flex justify-center items-center p-2"}>
        {items.map((item) => {
          return (
            <li key={item.id}>
              <NavLink to={item.to}>{item.name}</NavLink>
            </li>
          );
        })}
      </u>
      <Outlet />
    </div>
  );
};

export default ProgramPage;
