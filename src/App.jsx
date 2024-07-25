import Create from "./components/Create";
import Show from "./components/Show";
import css from "./App.module.css";

const App = () => {
    return (
        <div>
            <h1 className={`${css.heading} ${css.weight} `}>Todo App</h1>
            <Create />
            <hr className="h-[5px] bg-black " />
            <Show />
        </div>
    );
};

export default App;
