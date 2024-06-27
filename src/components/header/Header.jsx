import { useContext } from 'react'
import { IoMdArrowRoundBack } from 'react-icons/io'

import { context } from '../../utils/context'

import style from '../../styles/Dashboard.module.css'

function Header() {
    const { state } = useContext(context)

    const handleBackClick = () => {
        if (window.location.pathname == '/dashboard') {
            sessionStorage.removeItem('user')
        }
        window.history.back()
    }

    return (
        <div id="header-parent">
            <header id="header">
                <IoMdArrowRoundBack
                    className="arrow"
                    onClick={() => handleBackClick()}
                />
                <h1 className="titre">{state.title}</h1>
                <div id={style.ManagerIcon}>
                    <button id={style.buttonManager}>MA</button>
                </div>
            </header>
        </div>
    )
}

export default Header
