import { useState, useRef, useEffect } from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import AccountCircle from '@mui/icons-material/AccountCircle'
import { MenuItem, Typography, Menu } from '@mui/material'
import ExitToAppIcon from '@mui/icons-material/ExitToApp'
import logo from '../assets/logo2.png'
import profile from '../assets/profile.png'
import { useNavigate } from 'react-router-dom'
import { IoMdArrowRoundBack } from 'react-icons/io'
import { location } from '../utils/getTitle'
import style from '../styles/Header.module.css'

export default function Header() {
    const [auth, setAuth] = useState(localStorage.getItem('token') === '')
    const [anchorEl, setAnchorEl] = useState(null)
    const menuRef = useRef(null)
    const title = location()

    const navigate = useNavigate()

    const handleLogout = () => {
        delete window.sessionStorage.user
        setTimeout(() => {
            navigate('/')
        }, 1)
    }

    const handleBackClick = () => {
        if (window.location.pathname == '/dashboard') {
            sessionStorage.removeItem('user')
        }
        window.history.back()
    }

    useEffect(() => {
        localStorage.getItem('token') ? setAuth(true) : setAuth(false)
    }, [auth])

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget)
    }

    const handleClose = () => {
        setAnchorEl(null)
    }

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar
                sx={{
                    backgroundColor: '#D9D9D9',
                    position: 'fixed',
                    zIndex: 6,
                    top: '0',
                }}
            >
                <Toolbar>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1 }}
                        className={style.typography}
                    >
                        <img
                            src={logo}
                            alt="AradisLogo"
                            className={style.logo}
                        />
                        <IoMdArrowRoundBack
                            color="black"
                            onClick={() => handleBackClick()}
                            className={style.backIcon}
                        />
                        <h1 className={style.title}>{title}</h1>
                    </Typography>
                    <div>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleMenu}
                            color="black"
                        >
                            <AccountCircle />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorEl}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                            ref={menuRef}
                        >
                            <div className={style.profileContainer}>
                                <div className={style.profile}>
                                    <img
                                        src={profile}
                                        alt="profile"
                                        className={style.profileImage}
                                    />
                                    <p className={style.profileText}>
                                        Bonjour,{' '}
                                        {`${
                                            localStorage.getItem('nom') ??
                                            'admin'
                                        } `}
                                        👋
                                    </p>
                                </div>
                                <MenuItem
                                    onClick={handleLogout}
                                    className={style.menuItem}
                                    style={{
                                        fontSize: '15px',
                                    }}
                                >
                                    <ExitToAppIcon className={style.exitIcon} />
                                    Se déconnecter
                                </MenuItem>
                            </div>
                        </Menu>
                    </div>
                </Toolbar>
            </AppBar>
        </Box>
    )
}
