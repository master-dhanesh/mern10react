import { useContext } from "react";
import { todocontext } from "../context/TodoContext";
import { Link, Outlet } from "react-router-dom";

const Show = () => {
    const [users, setusers] = useContext(todocontext);
    // const users = props.users;
    // const setusers = props.setusers;

    const DeleteHandler = (index) => {
        const copyusers = [...users];
        copyusers.splice(index, 1);
        setusers(copyusers);
    };

    const mystyle = {
        marginBottom: "10px",
        marginLeft: "20px",
        fontSize: "20px",
        cursor: "pointer",
    };
    return (
        <>
            <h1>{import.meta.env.VITE_LIST_HEADING}</h1>
            <ol>
                {users.length > 0 ? (
                    users.map((user, index) => (
                        <li style={mystyle} key={index}>
                            <Link to={`/show/${index}`}>
                                {user.username} &nbsp;
                            </Link>
                            <span onClick={() => DeleteHandler(index)}>❌</span>
                        </li>
                    ))
                ) : (
                    <h1
                        style={{
                            fontSize: "30px",
                            textAlign: "center",
                            color: "tomato",
                            marginTop: "20px",
                        }}
                    >
                        No User Found
                    </h1>
                )}
            </ol>
            <Link className="ml-10 text-blue-500 text-s" to="/create">
                Go To Create
            </Link>
            <hr />
            <Outlet />
        </>
    );
};

export default Show;
