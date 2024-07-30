import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <nav className="flex justify-center gap-x-5">
            <Link to="/">Home</Link>
            <Link to="/users" className="ml-5">
                Users
            </Link>
        </nav>
    );
};

export default Nav;
