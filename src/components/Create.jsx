import { useContext, useState } from "react";
import { dummycontext, todocontext } from "../context/TodoContext";
import { useNavigate } from "react-router-dom";

const Create = () => {
    const navigate = useNavigate();

    const [users, setusers] = useContext(todocontext);
    const info = useContext(dummycontext);
    console.log(info);
    // const users = props.users;
    // const setusers = props.setusers;
    // const { users, setusers } = props;

    const [username, setusername] = useState("");
    const [gender, setgender] = useState("male");

    const SubmitHandler = (e) => {
        e.preventDefault();
        // console.log(e.target.username.value);
        const newuser = { username, gender };

        const copyUsers = [...users];
        copyUsers.push(newuser);
        setusers(copyUsers);

        // setusers([...users,newuser])

        // redirect to /show
        navigate("/show");

        setusername("");
        setgender("male");
    };

    return (
        <form
            onSubmit={SubmitHandler}
            className="w-[80%] mx-auto p-5 my-10 bg-zinc-100"
        >
            <h1 className="text-3xl mb-5">
                {import.meta.env.VITE_FORM_HEADING}
            </h1>

            <input
                name="username"
                type="text"
                placeholder="username"
                className="block mb-5 w-1/2 p-3 rounded"
                onChange={(e) => setusername(e.target.value)}
                value={username}
            />

            <label htmlFor="" className="block mb-5">
                <input
                    name="gender"
                    type="radio"
                    defaultValue="male"
                    onChange={(e) => setgender(e.target.value)}
                    checked={gender == "male" ? true : false}
                />
                Male &nbsp;
                <input
                    name="gender"
                    type="radio"
                    defaultValue="female"
                    onChange={(e) => setgender(e.target.value)}
                    checked={gender == "female" ? true : false}
                />
                Female
            </label>

            <button className="bg-black text-white px-5 py-2 rounded">
                Submit
            </button>
        </form>
    );
};

export default Create;
