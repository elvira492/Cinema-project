import { NavLink } from "react-router-dom";

const Navigation = () => {
  const items = [
    { name: "Home", to: "/", id: 1 },
    { name: "Program", to: "/program", id: 2 },
    { name: "About Us", to: "/about-us", id: 3 },
    { name: "Contact", to: "/contact", id: 4 },
    { name: "User", to: "/user", id: 5 },
    { name: "Cart", to: "/cart", id: 6 },
  ];
  return (
    <nav>
      <ul>
        {items.map((item) => {
          return (
            <li key={item.id}>
              <NavLink to={item.to}>{item.name}</NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navigation;
