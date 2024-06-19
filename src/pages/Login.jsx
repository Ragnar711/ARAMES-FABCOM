import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAlert } from 'react-alert'
import { AiOutlineUser } from 'react-icons/ai'
import { MdMail } from 'react-icons/md'
import { FaLock } from 'react-icons/fa'
import style from '../styles/Login.module.css'

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
            <section id={style.section} className="blocLogin">
                <div>
                    <form
                        id={style.form}
                        onSubmit={(e) => {
                            e.preventDefault()
                            connect()
                        }}
                    >
                        <AiOutlineUser
                            color="white"
                            size={100}
                            id={style['user-icon']}
                        />
                        <h1>Welcome to ARAMES</h1>
                        <div>
                            <div className={style['input-div']}>
                                <MdMail
                                    value={{
                                        backgoundColor: 'blue',
                                        size: '50px',
                                    }}
                                />
                                <input
                                    type="text"
                                    placeholder="Matricule"
                                    value={matricule}
                                    onChange={(e) =>
                                        setMatricule(e.target.value)
                                    }
                                />
                            </div>
                            <div className={style['input-div']}>
                                <FaLock />
                                <input
                                    type="password"
                                    placeholder="Mot de passe"
                                    value={password}
                                    onChange={(e) =>
                                        setPassword(e.target.value)
                                    }
                                />
                            </div>
                            <button>LOGIN</button>
                        </div>
                    </form>
                </div>
            </section>
        </main>
    )
}

export default Login
