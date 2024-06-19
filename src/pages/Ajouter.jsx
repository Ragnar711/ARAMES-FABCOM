import { useState } from "react";

const AddUserPage = () => {
    const [matricule, setMatricule] = useState("");
    const [password, setPassword] = useState("");
    const handleMatriculeChange = (e) => {
        setMatricule(e.target.value);
    };
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };
    const handleLogin = () => {
        // Code pour gérer la soumission du formulaire, par exemple envoyer les données au serveur pour créer un nouvel utilisateur
        // Vous pouvez utiliser les valeurs de matricule et password dans cette fonction
    };
    return (
        <div>
            <h1>Ajouter un utilisateur</h1>
            <form>
                <div>
                    <label htmlFor="matricule">Matricule:</label>
                    <input
                        type="text"
                        id="matricule"
                        value={matricule}
                        onChange={handleMatriculeChange}
                    />
                </div>
                <div>
                    <label htmlFor="password">Mot de passe:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={handlePasswordChange}
                    />
                </div>
                <button type="button" onClick={handleLogin}>
                    Ajouter
                </button>
            </form>
        </div>
    );
};

export default AddUserPage;
