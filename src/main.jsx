import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import TodoContext from "./context/TodoContext.jsx";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
    <BrowserRouter>
        <TodoContext>
            <App />
        </TodoContext>
    </BrowserRouter>
);
