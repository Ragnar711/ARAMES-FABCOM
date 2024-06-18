import { useRef, useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAlert } from 'react-alert'
import { AiOutlineUser } from 'react-icons/ai'
import { MdMail } from 'react-icons/md'
import { FaLock } from 'react-icons/fa'
import style from '../styles/Login.module.css'
import { context } from '../App'

const Login = () => {
    const matriculeRef = useRef(null)
    const passwordRef = useRef(null)
    const alert = useAlert()
    const { dispatch } = useContext(context)
    const navigate = useNavigate()
    useEffect(() => {
        const session = sessionStorage.getItem('user')
        if (session) {
            navigate('/dashboard')
        }
    }, [navigate])

    const connect = async () => {
        dispatch({ type: 'LOADING_ON' })
        if (!matriculeRef.current.value || !passwordRef.current.value) {
            sessionStorage.setItem('user', 'test')
            navigate('/dashboard')
        } else {
            alert.error('Matricule ou mot de passe est incorrecte')
        }

        dispatch({ type: 'LOADING_OFF' })
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
                            <div
                                className={style['input-div']}
                                onClick={() => {
                                    matriculeRef.current.focus()
                                }}
                            >
                                <MdMail
                                    value={{
                                        backgoundColor: 'blue',
                                        size: '50px',
                                    }}
                                />
                                <input
                                    type="text"
                                    placeholder="Matricule"
                                    ref={matriculeRef}
                                />
                            </div>
                            <div
                                className={style['input-div']}
                                onClick={() => {
                                    passwordRef.current.focus()
                                }}
                            >
                                <FaLock />
                                <input
                                    type="password"
                                    placeholder="Mot de passe"
                                    ref={passwordRef}
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
