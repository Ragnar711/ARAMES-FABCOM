import { MdError } from "react-icons/md";
import { AiFillCloseCircle } from "react-icons/ai";
import { GoAlert } from "react-icons/go";
import { TbNetwork } from "react-icons/tb";
import { TiTick } from "react-icons/ti";
import { FaServer } from "react-icons/fa";
import { HiBell } from "react-icons/hi";

const getType = (type) => {
    switch (type) {
        case "error":
            return [
                "#900",
                <MdError
                    key={Math.random()}
                    style={{ ...this, fontSize: "40px" }}
                />,
            ];
        case "info":
            return [
                "orange",
                <GoAlert
                    key={Math.random()}
                    style={{ ...this, fontSize: "40px" }}
                />,
            ];
        case "success":
            return [
                "green",
                <TiTick
                    key={Math.random()}
                    style={{ ...this, fontSize: "50px" }}
                />,
            ];
        case "network":
            return [
                "darkgray",
                <TbNetwork
                    key={Math.random()}
                    style={{ ...this, fontSize: "50px" }}
                />,
            ];
        case "server":
            return [
                "darkgray",
                <FaServer
                    key={Math.random()}
                    style={{ ...this, fontSize: "30px" }}
                />,
            ];
        default:
            return [
                "darkgray",
                <HiBell
                    key={Math.random()}
                    style={{ ...this, fontSize: "30px" }}
                />,
            ];
    }
};

const styles = {
    color: "white",
    width: "fit-content",
    minWidth: "400px",
    maxWidth: "100vw",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    fontSize: "10px",
    fontFamily: "Arial",
    padding: "10px 30px",
    borderRadius: "5px",
};

const Alert = ({ message, style, options, close }) => {
    const [type, msg] = message.split(":");
    return (
        <div
            style={{
                ...style,
                ...styles,
                backgroundColor: getType(options.type)[0],
            }}
        >
            {getType(msg ? type : options.type)[1]}
            <h1 style={{ margin: "10px 30px" }}>{msg ?? type}</h1>
            <AiFillCloseCircle
                onClick={() => {
                    close();
                }}
                style={{ ...this, fontSize: "35px" }}
            />
        </div>
    );
};

export default Alert;
