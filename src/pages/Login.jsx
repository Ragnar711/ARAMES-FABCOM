import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { AiOutlineUser } from 'react-icons/ai'
import { MdMail } from 'react-icons/md'
import { FaLock } from 'react-icons/fa'
import style from '../styles/Login.module.css'
import axios from 'redaxios'

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

    const connect = async () => {
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
