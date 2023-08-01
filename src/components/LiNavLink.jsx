import { NavLink } from "react-router-dom";

export function LiNavLink({ name, path }) {
  return (
    <li className="nav-item">
      <NavLink className="nav-link nav-link-lateral" to={path}>
        {name}
      </NavLink>
    </li>
  );
}
