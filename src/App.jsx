import { useState } from "react";

const App = () => {
    const [username, setusername] = useState("");
    const [gender, setgender] = useState("male");

    const [users, setusers] = useState([]);

    const SubmitHandler = (e) => {
        e.preventDefault();
        // console.log(e.target.username.value);
        const newuser = { username, gender };

        const copyUsers = [...users];
        copyUsers.push(newuser);
        setusers(copyUsers);

        // setusers([...users,newuser])

        setusername("");
        setgender("male");
    };

    // console.log(users);
    return (
        <div>
            <form
                onSubmit={SubmitHandler}
                className="w-[80%] mx-auto p-5 my-10 bg-zinc-100"
            >
                <h1 className="text-3xl mb-5">React Form</h1>

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

            <hr className="h-[5px] bg-black " />
            <ol>
                {users.length > 0
                    ? users.map((user, index) => (
                          <li key={index}>{user.username}</li>
                      ))
                    : "No User Found"}
            </ol>
        </div>
    );
};

export default App;
