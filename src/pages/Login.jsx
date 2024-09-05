import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAlert } from 'react-alert'
import style from '../styles/Login.module.css'
import back from '../assets/back.png'
import logo from '../assets/logo2.png'

const Login = () => {
    const [matricule, setMatricule] = useState('')
    const [password, setPassword] = useState('')
    const alert = useAlert()
    const navigate = useNavigate()

    useEffect(() => {
        const session = sessionStorage.getItem('user')
        if (session) {
            navigate('/dashboard')
        }
    }, [navigate])

    const connect = async () => {
        if (matricule === '9898' && password === '1234') {
            sessionStorage.setItem('user', 'user')
            navigate('/dashboard')
        } else {
            alert.error('Matricule ou mot de passe est incorrecte')
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
                    <p className={style.pBienvenue}>
                        Bienvenue dans l&apos;ère digital 4.0 avec ARAMES
                    </p>

                    <form
                        id={style.form}
                        onSubmit={(e) => {
                            e.preventDefault()
                            connect()
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
                                <label> PassWord</label>
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
