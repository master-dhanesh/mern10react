import { NavLink } from "react-router-dom";

const Nav = () => {
    return (
        <nav className="my-5 justify-center flex gap-x-5">
            <NavLink
                style={(n) => ({
                    textDecoration: n.isActive ? "underline" : "initial",
                })}
                className={(n) => (n.isActive ? "text-red-500" : "")}
                to="/"
            >
                Home
            </NavLink>
            <NavLink
                style={(n) => ({
                    textDecoration: n.isActive ? "underline" : "initial",
                })}
                className={(n) => (n.isActive ? "text-red-500" : "")}
                to="/create"
            >
                Create
            </NavLink>
            <NavLink
                style={(n) => ({
                    textDecoration: n.isActive ? "underline" : "initial",
                })}
                className={(n) => (n.isActive ? "text-red-500" : "")}
                to="/show"
            >
                Show
            </NavLink>
        </nav>
    );
};

export default Nav;
