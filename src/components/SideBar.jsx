import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Tooltip,
} from '@mui/material'
import home from '../assets/home.png'
import roue from '../assets/roue.png'
import roues from '../assets/roues.png'
import historique from '../assets/his.png'

import { ExitToApp } from '@mui/icons-material'

import '../styles/sideNav.scss'
import profile from '../assets/profile.png'

const Sidebar = () => {
    const navigate = useNavigate()

    const [closeMenu, setCloseMenu] = useState(true)

    const handleCloseMenu = () => {
        setCloseMenu(!closeMenu)
    }

    const handleLogout = () => {
        delete window.sessionStorage.user
        setTimeout(() => {
            navigate('/')
        }, 1)
    }

    useEffect(() => {
        const session = sessionStorage.getItem('user')
        if (!session) {
            navigate('/login')
        }
    }, [navigate])

    return (
        <div className={closeMenu === false ? 'sidebar' : 'sidebar active'}>
            <div
                className={
                    closeMenu === false
                        ? 'burgerContainer'
                        : 'burgerContainer active'
                }
            >
                <div className="burgerTrigger" onClick={handleCloseMenu}></div>
                <div className="burgerMenu"></div>
            </div>
            <div
                className={
                    closeMenu === false
                        ? 'profileContainer'
                        : 'profileContainer active'
                }
            >
                <img src={profile} alt="profile" className="profile" />
                <div className="profileContents">
                    <p className="name">Bonjour, Admin 👋</p>
                </div>
            </div>
            <div
                className={
                    closeMenu === false
                        ? 'contentsContainer'
                        : 'contentsContainer active'
                }
            >
                <List>
                    <Tooltip title="Usine" placement="right">
                        <ListItem component={Link} to="/dashboard">
                            <ListItemIcon>
                                <img
                                    src={home}
                                    alt="usine"
                                    style={{
                                        width: '35px',
                                        height: 'auto',
                                    }}
                                />
                            </ListItemIcon>
                            <ListItemText primary="Usine" />
                        </ListItem>
                    </Tooltip>
                    <Tooltip title="UAP" placement="right">
                        <ListItem component={Link} to="/uap/UAP-Assemblage">
                            <ListItemIcon>
                                <img
                                    src={roue}
                                    alt="uap"
                                    style={{
                                        width: '35px',
                                        height: 'auto',
                                    }}
                                />
                            </ListItemIcon>
                            <ListItemText primary="UAP" />
                        </ListItem>
                    </Tooltip>
                    <Tooltip title="Machine" placement="right">
                        <ListItem
                            component={Link}
                            to="/machine/Ligne-d'assemblage-TBS"
                        >
                            <ListItemIcon>
                                <img
                                    src={roues}
                                    alt="machine"
                                    style={{
                                        width: '35px',
                                        height: 'auto',
                                    }}
                                />
                            </ListItemIcon>
                            <ListItemText primary="Machine" />
                        </ListItem>
                    </Tooltip>
                    <Tooltip title="Historique" placement="right">
                        <ListItem component={Link} to="/historique">
                            <ListItemIcon>
                                <img
                                    src={historique}
                                    alt="historique"
                                    style={{
                                        width: '35px',
                                        height: 'auto',
                                    }}
                                />
                            </ListItemIcon>
                            <ListItemText primary="Historique" />
                        </ListItem>
                    </Tooltip>
                    <Tooltip title="Se déconnecter" placement="right">
                        <ListItem className="logout" onClick={handleLogout}>
                            <ListItemIcon>
                                <ExitToApp style={{ color: 'lightgray' }} />
                            </ListItemIcon>
                            <ListItemText primary="Logout" />
                        </ListItem>
                    </Tooltip>
                </List>
            </div>
        </div>
    )
}

export default Sidebar
