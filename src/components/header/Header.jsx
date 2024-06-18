import { useContext, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { IoLogOutSharp } from 'react-icons/io5'
import { AiOutlineClose } from 'react-icons/ai'
import { TiUserAdd } from 'react-icons/ti'

import { context } from '../../utils/context'

import style from '../../styles/Dashboard.module.css'

function Header() {
    const navigate = useNavigate()
    const [showDiv, setShowDiv] = useState(false)
    const [showInputs, setShowInputs] = useState(false)
    const { state } = useContext(context)
    const [userData, setUserData] = useState({
        nom: '',
        prenom: '',
        matricule: '',
        password: '',
        password2: '',
        service: 'operateur',
    })
    const [confirmPassword, setConfirmPassword] = useState(true)
    const handleClick = () => {
        setShowDiv(!showDiv)
    }
    const handleClick2 = () => {
        setShowInputs(!showInputs)
    }
    const handleInputClose = () => {
        setShowInputs(false)
    }
    const handleClickOutsidePopup = (e) => {
        if (
            e.target.id !==
            (style.inputContainer &&
                !e.target.closest(`#${style.inputContainer}`))
        ) {
            handleInputClose()
        }
    }
    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutsidePopup)
        const handleClickOutside = (event) => {
            if (!event.target.closest(`#${style.sousButton}`)) {
                setShowDiv(false)
            }
        }
        window.addEventListener('mousedown', handleClickOutside)
        return () => {
            document.removeEventListener('mousedown', handleClickOutsidePopup)
            window.removeEventListener('mousedown', handleClickOutside)
        }
    }, [])
    return (
        <div id="header-parent">
            <header id="header">
                <h1 className="titre">{state.title}</h1>
                <div id={style.ManagerIcon}>
                    <button id={style.buttonManager} onClick={handleClick}>
                        MA
                    </button>
                    {showDiv && (
                        <div id={style.sousButton}>
                            <span
                                id={style.buttonAjouter}
                                className={style.spanB}
                                onClick={handleClick2}
                            >
                                <TiUserAdd size={20} />
                                Ajouter utilisateur
                            </span>
                            <span
                                className={style.spanB}
                                onClick={() => {
                                    delete window.sessionStorage.user
                                    setTimeout(() => {
                                        navigate('/')
                                    }, 1)
                                }}
                            >
                                <IoLogOutSharp size={20} />
                                Déconnexion
                            </span>
                        </div>
                    )}
                    {showInputs && (
                        <div id={style.inputContainer}>
                            <button
                                id={style.btnClose}
                                onClick={handleInputClose}
                            >
                                <AiOutlineClose size={20} color="red" />
                            </button>
                            <h5 style={{ textAlign: 'center' }}>
                                Ajouter utilisateur
                            </h5>
                            <div className={style.labelInput}>
                                <label htmlFor="nom">Nom </label>
                                <input
                                    id="nom"
                                    style={{ width: '41%' }}
                                    type="text"
                                    placeholder="Nom"
                                    value={userData.nom}
                                    onChange={(e) =>
                                        setUserData({
                                            ...userData,
                                            nom: e.target.value,
                                        })
                                    }
                                />
                            </div>
                            <div className={style.labelInput}>
                                <label htmlFor="prenom">Prénom </label>
                                <input
                                    id="prenom"
                                    style={{ width: '41%' }}
                                    type="text"
                                    placeholder="Prénom"
                                    value={userData.prenom}
                                    onChange={(e) =>
                                        setUserData({
                                            ...userData,
                                            prenom: e.target.value,
                                        })
                                    }
                                />
                            </div>
                            <div className={style.labelInput}>
                                <label htmlFor="matricule">Matricule </label>
                                <input
                                    id="matricule"
                                    style={{ width: '41%' }}
                                    type="text"
                                    placeholder="Matricule"
                                    value={userData.matricule}
                                    onChange={(e) =>
                                        setUserData({
                                            ...userData,
                                            matricule: e.target.value,
                                        })
                                    }
                                />
                            </div>
                            <div className={style.labelInput}>
                                <label htmlFor="mdp"> Mot de passe </label>
                                <input
                                    id="mdp"
                                    style={{ width: '41%' }}
                                    type="password"
                                    placeholder="Mot de passe"
                                    value={userData.password}
                                    onChange={(e) => {
                                        setUserData({
                                            ...userData,
                                            password: e.target.value,
                                        })
                                        setConfirmPassword(
                                            userData.password2 ===
                                                e.target.value
                                        )
                                    }}
                                />
                            </div>
                            <div className={style.labelInput}>
                                <label htmlFor="cmdp">
                                    {' '}
                                    Confirmer votre Mot de passe{' '}
                                </label>
                                <input
                                    id="cmdp"
                                    style={{
                                        width: '41%',
                                        borderColor: confirmPassword
                                            ? 'green'
                                            : 'red',
                                    }}
                                    type="password"
                                    placeholder=" Confirmer votre mot de passe"
                                    value={userData.password2}
                                    onChange={(e) => {
                                        setUserData({
                                            ...userData,
                                            password2: e.target.value,
                                        })
                                        setConfirmPassword(
                                            userData.password === e.target.value
                                        )
                                    }}
                                />
                            </div>
                            <div className={style.labelInput}>
                                <label htmlFor="service"> Service </label>
                                <select
                                    id="service"
                                    style={{ width: '41%' }}
                                    placeholder="Service"
                                    value={userData.service}
                                    onChange={(e) =>
                                        setUserData({
                                            ...userData,
                                            service: e.target.value,
                                        })
                                    }
                                >
                                    <option value="operateur">Opérateur</option>
                                    <option value="production">
                                        Production
                                    </option>
                                    <option value="method">Méthode</option>
                                </select>
                            </div>
                            <button id={style.BtnAjouter}>Ajouter</button>
                        </div>
                    )}
                </div>
            </header>
        </div>
    )
}

export default Header
