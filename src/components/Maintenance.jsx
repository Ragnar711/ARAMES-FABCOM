import { GrHostMaintenance } from "react-icons/gr";

const Maintenance = () => {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                height: "100vh",
                backgroundColor: "#f5f5f5",
                color: "#333",
                fontFamily: "Arial, sans-serif",
            }}
        >
            <GrHostMaintenance size={100} />
            <h1 style={{ fontSize: "1rem", marginBlock: "1rem" }}>
                Nous sommes en maintenance.
            </h1>
            <p style={{ fontSize: "0.6rem", textAlign: "center" }}>
                Veuillez revenir plus tard. Nous nous excusons pour tout
                inconvénient causé.
            </p>
        </div>
    );
};

export default Maintenance;
