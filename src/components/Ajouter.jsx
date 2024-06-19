import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import style from "../styles/Ajouter.module.css";

const AddUserPage = () => {
    const [matricule, setMatricule] = useState("");
    const [password, setPassword] = useState("");

    const handleMatriculeChange = (e) => {
        setMatricule(e.target.value);
    };

    const handleLogin = () => {};
    const [showPassword, setShowPassword] = useState(false);
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    return (
        <div className={style.addUser}>
            <h3>Ajouter un utilisateur</h3>
            <form className={style.formUser}>
                <div className={style.LabelInput}>
                    <label>Matricule:</label>
                    <input
                        type="text"
                        value={matricule}
                        onChange={handleMatriculeChange}
                    />
                </div>
                <div className={style.LabelInput}>
                    <label htmlFor="password">Mot de passe</label>
                    <div className="password-input-wrapper">
                        <input
                            className={style.inputAdduser}
                            type={showPassword ? "text" : "password"}
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <span
                            className="password-toggle-icon"
                            onClick={togglePasswordVisibility}
                        >
                            {showPassword ? <FaEyeSlash /> : <FaEye />}
                        </span>
                    </div>
                </div>
                <div className={style.LabelInput}>
                    <label>Confirmer le mot de passe:</label>
                    <input type="password" />
                </div>
                <div className={style.LabelInput}>
                    <label>Catégorie:</label>
                    <select>
                        <option>Admin</option>
                        <option>Opérateur</option>
                    </select>
                </div>
                <button type="button" onClick={handleLogin}>
                    Ajouter
                </button>
            </form>
        </div>
    );
};
export default AddUserPage;
