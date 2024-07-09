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
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'flex-start',
                            gap: '25px',
                        }}
                    >
                        <img
                            src={logo}
                            alt="AradisLogo"
                            style={{ width: '7%', height: 'auto' }}
                        />
                        <IoMdArrowRoundBack
                            color="black"
                            onClick={() => handleBackClick()}
                            style={{
                                width: '30px',
                                height: 'auto',
                                cursor: 'pointer',
                            }}
                        />
                        <h1
                            style={{
                                fontSize: '24px',
                                fontWeight: 'bold',
                                color: '#333',
                                margin: 0,
                            }}
                        >
                            {title}
                        </h1>
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
                            <div
                                className="popup-profile"
                                style={{
                                    padding: '10px',
                                    backgroundColor: '#fff',
                                    borderRadius: '8px',
                                    width: '200px',
                                }}
                            >
                                <div
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                    }}
                                >
                                    <img
                                        src={profile}
                                        alt="profile"
                                        className="profile"
                                        style={{
                                            width: '60px',
                                            height: '60px',
                                            borderRadius: '50%',
                                            marginRight: '10px',
                                        }}
                                    />
                                    <div className="profileContents">
                                        <p
                                            className="name"
                                            style={{
                                                fontSize: '16px',
                                                fontWeight: 'bold',
                                                margin: 0,
                                            }}
                                        >
                                            Bonjour,{' '}
                                            {localStorage.getItem('nom')}👋
                                        </p>
                                        <p
                                            style={{
                                                fontSize: '14px',
                                                color: '#666',
                                                margin: 0,
                                            }}
                                        >
                                            {localStorage.getItem('email')}
                                        </p>
                                    </div>
                                </div>
                                <MenuItem
                                    onClick={handleLogout}
                                    style={{
                                        fontSize: '14px',
                                        color: '#333',
                                        paddingTop: '10px',
                                        marginTop: '12px',
                                    }}
                                >
                                    <ExitToAppIcon
                                        style={{
                                            fontSize: '18px',
                                            marginRight: '5px',
                                            color: '#888',
                                        }}
                                    />
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
