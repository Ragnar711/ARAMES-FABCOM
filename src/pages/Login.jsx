import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import style from '../styles/Login.module.css'
import axios from 'redaxios'
import back from '../assets/back.png'
import logo from '../assets/logo2.png'

const Login = () => {
    const [matricule, setMatricule] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    useEffect(() => {
        const session = sessionStorage.getItem('user')
        if (session) {
            navigate('/dashboard')
        }
    }, [navigate])

    const handleLogin = async () => {
        try {
            const res = await axios.post(
                'http://localhost:3000/api/v1/signin',
                {
                    matricule,
                    motDePasse: password,
                }
            )
            if (res.data) {
                sessionStorage.setItem('user', JSON.stringify(res.data))
                navigate('/dashboard')
            }
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <main id={style.main}>
            <div className={style.imgBack}>
                <img src={back} alt="" />
            </div>
            <section id={style.section} className="blocLogin">
                <div>
                    <img src={logo} alt="" className={style.logo2} />
                    <p className={style.pBinevenue}>
                        Bienvenue dans l'ère digital 4.0 avec ARAMES
                    </p>

                    <form
                        id={style.form}
                        onSubmit={(e) => {
                            e.preventDefault()
                            handleLogin()
                        }}
                    >
                        <div>
                            <div className={style['input-div']}>
                                <label> Login</label>
                                <input
                                    type="text"
                                    placeholder="Enter Login"
                                    value={matricule}
                                    onChange={(e) =>
                                        setMatricule(e.target.value)
                                    }
                                />
                            </div>
                            <div className={style['input-div']}>
                                <label> Password</label>
                                <input
                                    type="password"
                                    placeholder="Enter Mot de passe"
                                    value={password}
                                    onChange={(e) =>
                                        setPassword(e.target.value)
                                    }
                                />
                            </div>
                            <button>Accéder</button>
                        </div>
                    </form>
                </div>
            </section>
        </main>
    )
}

export default Login
