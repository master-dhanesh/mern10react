import { Route, Routes } from "react-router-dom";
import Create from "./components/Create";
import Show from "./components/Show";
import Home from "./components/Home";
import Nav from "./components/Nav";

const App = () => {
    return (
        <div>
            <Nav />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/create" element={<Create />} />
                <Route path="/show" element={<Show />} />
            </Routes>
        </div>
    );
};

export default App;
