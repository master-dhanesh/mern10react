import { useState } from "react";

const App = () => {
    const [username, setusername] = useState("John Doe");

    const EventHandler = (x) => {
        setusername(x);
    };

    return (
        <div>
            <h1>Homepage</h1>
            <h2>{username}</h2>
            {/* <button onClick={EventHandler}>Change username</button> */}
            <button onClick={() => EventHandler("Shivan Shah")}>
                Change Username
            </button>
        </div>
    );
};

export default App;
