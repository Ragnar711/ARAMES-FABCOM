import { useContext } from 'react'
import { IoMdArrowRoundBack } from 'react-icons/io'

import ThemeToggle from './ThemeToggle'
import { context } from '../../utils/context'

import style from '../../styles/Dashboard.module.css'

function Header() {
    const { state } = useContext(context)

    const handleBackClick = () => {
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
                <ThemeToggle />
                <div id={style.ManagerIcon}>
                    <button id={style.buttonManager}>MA</button>
                </div>
            </header>
        </div>
    )
}

export default Header
