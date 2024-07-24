import { useState } from "react";
import Create from "./components/Create";
import Show from "./components/Show";

import css from "./App.module.css";

const App = () => {
    const [users, setusers] = useState([]);
    return (
        <div>
            <h1 className={`${css.heading} ${css.weight} `}>Todo App</h1>
            <Create users={users} setusers={setusers} />
            <hr className="h-[5px] bg-black " />
            <Show users={users} setusers={setusers} />
        </div>
    );
};

export default App;
