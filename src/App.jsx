import { useState } from "react";
import Create from "./components/Create";
import Show from "./components/Show";
const App = () => {
    const [users, setusers] = useState([]);
    return (
        <div>
            <Create users={users} setusers={setusers} />
            <hr className="h-[5px] bg-black " />
            <Show users={users} setusers={setusers} />
        </div>
    );
};

export default App;
