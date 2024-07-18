import home from '../assets/home.png'
import roue from '../assets/roue.png'
import roues from '../assets/roues.png'
import historique from '../assets/his.png'
import rapport from '../assets/rapport.png'
import planning from '../assets/iconPl.png'
import {
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Tooltip,
} from '@mui/material'
import { ExitToApp } from '@mui/icons-material'
import { Link, useNavigate } from 'react-router-dom'

const Links = () => {
    const navigate = useNavigate()

    const handleLogout = () => {
        delete window.sessionStorage.user
        setTimeout(() => {
            navigate('/')
        }, 1)
    }
    return (
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
                <ListItem component={Link} to="/uap/UAP-Extrusion">
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
                <ListItem component={Link} to="/machine/Macchi-1">
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
            <Tooltip title="Management 4.0" placement="right">
                <ListItem component={Link} to="/management">
                    <ListItemIcon>
                        <img
                            src={rapport}
                            alt="management"
                            style={{
                                width: '35px',
                                height: 'auto',
                            }}
                        />
                    </ListItemIcon>
                    <ListItemText primary="Management 4.0" />
                </ListItem>
            </Tooltip>
            <Tooltip title="Planification" placement="right">
                <ListItem component={Link} to="/planification">
                    <ListItemIcon>
                        <img
                            src={planning}
                            alt="planification"
                            style={{
                                width: '35px',
                                height: 'auto',
                            }}
                        />
                    </ListItemIcon>
                    <ListItemText primary="Planification" />
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
    )
}

export default Links
