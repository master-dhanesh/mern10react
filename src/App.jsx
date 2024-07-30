import { Link, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Users from "./components/Users";
import Nav from "./components/Nav";

const App = () => {
    return (
        <div className="mt-10 mx-auto w-[80%] bg-zinc-200 p-10">
            <Nav />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/users" element={<Users />} />
            </Routes>
        </div>
    );
};

export default App;

// https://jsonplaceholder.typicode.com/users (api)
