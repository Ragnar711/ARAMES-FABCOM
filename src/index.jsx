import { positions, Provider } from "react-alert";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";

import "./styles/index.css";

import App from "./App";
import Alert from "./components/Alert";

const options = {
    timeout: 3000,
    position: positions.TOP_LEFT,
};

ReactDOM.createRoot(document.getElementById("root")).render(
    <BrowserRouter>
        <Provider template={Alert} {...options}>
            <App />
        </Provider>
    </BrowserRouter>
);
