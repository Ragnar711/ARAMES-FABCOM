import { useRef, useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Nav from 'react-bootstrap/Nav'
import '../styles/SideBar.css'
import roue from '../assets/roue.png'
import home from '../assets/home.png'
import historique from '../assets/his.png'
import roues from '../assets/roues.png'
import Planification from '../assets/iconPl.png'
import rapport from '../assets/rapport.png'
import closeIcon from '../assets/iconClose.png'
import matiere from '../assets/recette.png'
import quitter from '../assets/logout.png'
import file from '../assets/file.png'
import menu from '../assets/humberguer.png'
import logo from '../assets/logo2.png'
import { context } from '../utils/context'

function SideBar() {
    const [isHistoriqueDeactivated, setIsHistoriqueDeactivated] =
        useState(false)

    const sideBarRef = useRef()

    const { dispatch } = useContext(context)

    const navigate = useNavigate()

    useEffect(() => {
        const session = sessionStorage.getItem('user')
        if (!session) {
            navigate('/login')
        }
        setIsHistoriqueDeactivated(true)
    }, [navigate])

    return (
        <Nav
            variant="pills"
            defaultActiveKey="/home"
            className="flex-column close-nav"
            ref={sideBarRef}
        >
            <img
                className="closeIcon"
                src={closeIcon}
                onClick={() => {
                    sideBarRef.current.classList.add('close-nav')
                    document
                        .querySelector('#subroot > section')
                        .classList.add('close-section')
                }}
                alt="close"
            />
            <img
                src={menu}
                onClick={() => {
                    sideBarRef.current.classList.remove('close-nav')
                    document
                        .querySelector('#subroot > section')
                        .classList.remove('close-section')
                }}
                className="openIcon"
                alt="icon"
            />
            <div id="logo" onClick={() => navigate('/')}></div>
            <div className="column-Link">
                <img src={logo} className="logo" alt="logo" />
                <Nav.Item>
                    <Link
                        className="nav-link"
                        to="/dashboard"
                        onClick={() => {
                            dispatch({
                                type: 'CHANGE_TITLE',
                                payload: 'Résultat usine',
                            })
                            sideBarRef.current.classList.add('close-nav')
                            document
                                .querySelector('#subroot > section')
                                .classList.add('close-section')
                        }}
                    >
                        <img src={home} alt="home" />{' '}
                        <span className="spanItem">Usine</span>
                    </Link>
                </Nav.Item>
                <Nav.Item>
                    <Link
                        className="nav-link"
                        to="/uap/UAP-Assemblage"
                        onClick={() => {
                            dispatch({
                                type: 'CHANGE_TITLE',
                                payload: 'UAP/Section',
                            })
                            sideBarRef.current.classList.add('close-nav')
                            document
                                .querySelector('#subroot > section')
                                .classList.add('close-section')
                        }}
                    >
                        <img className="IconsNav" src={roue} alt="roue" />
                        <span className="spanItem">Section</span>
                    </Link>
                </Nav.Item>
                <Nav.Item>
                    <Link
                        className="nav-link"
                        to="/machine/machine6"
                        onClick={() => {
                            dispatch({
                                type: 'CHANGE_TITLE',
                                payload: 'Résultat machine',
                            })
                            sideBarRef.current.classList.add('close-nav')
                            document
                                .querySelector('#subroot > section')
                                .classList.add('close-section')
                        }}
                    >
                        <img src={roues} alt="roues" />
                        <span className="spanItem">Machine</span>
                    </Link>
                </Nav.Item>
                <Nav.Item>
                    <Link
                        className={`nav-link`}
                        to="/historique"
                        onClick={() => {
                            dispatch({
                                type: 'CHANGE_TITLE',
                                payload: 'Historique des résultats',
                            })
                            sideBarRef.current.classList.add('close-nav')
                            document
                                .querySelector('#subroot > section')
                                .classList.add('close-section')
                        }}
                    >
                        <img src={historique} alt="historique" />
                        <span className="spanItem">Historique</span>
                    </Link>
                </Nav.Item>
                <Nav.Item>
                    <Link
                        className={`nav-link ${
                            window.screen.width < 1080 ? 'deactivated-link' : ''
                        }`}
                        to="/management"
                        onClick={() => {
                            dispatch({
                                type: 'CHANGE_TITLE',
                                payload: 'Management 4.0',
                            })
                            sideBarRef.current.classList.add('close-nav')
                            document
                                .querySelector('#subroot > section')
                                .classList.add('close-section')
                        }}
                    >
                        <img src={rapport} alt="rapport" />
                        <span className="spanItem">Manag 4.0</span>
                    </Link>
                </Nav.Item>
                <Nav.Item>
                    <Link
                        className={`nav-link ${
                            isHistoriqueDeactivated ? 'deactivated-link' : ''
                        }`}
                        to="/Planification"
                        onClick={() => {
                            if (!isHistoriqueDeactivated) {
                                dispatch({
                                    type: 'CHANGE_TITLE',
                                    payload: 'Planification prod ',
                                })
                            }
                            sideBarRef.current.classList.add('close-nav')
                            document
                                .querySelector('#subroot > section')
                                .classList.add('close-section')
                        }}
                    >
                        <img src={Planification} alt="plannification" />
                        <span className="spanItem">Planification</span>
                    </Link>
                </Nav.Item>
                <Nav.Item>
                    <Link
                        className={`nav-link ${
                            isHistoriqueDeactivated ? 'deactivated-link' : ''
                        }`}
                        to="/Recette"
                        onClick={() => {
                            if (!isHistoriqueDeactivated) {
                                dispatch({
                                    type: 'CHANGE_TITLE',
                                    payload: 'Recette / Article ',
                                })
                            }
                            sideBarRef.current.classList.add('close-nav')
                            document
                                .querySelector('#subroot > section')
                                .classList.add('close-section')
                        }}
                    >
                        <img src={file} alt="file" />
                        <span className="spanItem">Recette</span>
                    </Link>
                </Nav.Item>
                <Nav.Item>
                    <Link
                        className={`nav-link ${
                            isHistoriqueDeactivated ? 'deactivated-link' : ''
                        }`}
                        to="/Fmts"
                        onClick={() => {
                            if (!isHistoriqueDeactivated) {
                                dispatch({
                                    type: 'CHANGE_TITLE',
                                    payload: 'Flow material tracking system',
                                })
                            }
                            sideBarRef.current.classList.add('close-nav')
                            document
                                .querySelector('#subroot > section')
                                .classList.add('close-section')
                        }}
                    >
                        <img src={matiere} alt="fmts" />
                        <span className="spanItem">FMTS</span>
                    </Link>
                </Nav.Item>
            </div>
            <Nav.Item id="logout">
                <Link
                    className="nav-link"
                    onClick={() => {
                        delete window.sessionStorage.user
                        setTimeout(() => {
                            navigate('/')
                        }, 1)
                    }}
                >
                    <img src={quitter} alt="quitter" />
                    <span className="spanItem">Quitter</span>
                </Link>
            </Nav.Item>
        </Nav>
    )
}

export default SideBar
