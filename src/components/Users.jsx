import { useEffect, useState } from "react";
import axios from "../utils/axios";

const Users = () => {
    const [users, setusers] = useState([]);
    const getuser = async () => {
        try {
            const response = await axios.get("/users");
            console.log(response.data);
            setusers(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    // useEffect(() => {
    //     console.log("User Mounted(ready to accept data from api/...)");
    //     getuser();

    //     return () => {
    //         console.log("User Unmounted(removed from view)");
    //     };
    // }, []);

    // useEffect(() => {
    //     // runs as the component is mounted/loaded in the view

    //     return () => {
    //         // runs when the component is unmounted/removed from the view
    //     };
    // }, []);

    // console.log("User Loaded(html/css loaded in view)");

    useEffect(() => {
        getuser();
    }, []);

    return (
        <div>
            <h1 className="mb-5 text-3xl">Calling API</h1>
            <button className="bg-red-400 px-5 py-3 rounded" onClick={getuser}>
                Call Users
            </button>
            <hr />
            <ul className="p-5">
                {users.map((user) => (
                    <li className="mb-3 p-3 bg-red-300 w-1/2" key={user.id}>
                        {user.name}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Users;
