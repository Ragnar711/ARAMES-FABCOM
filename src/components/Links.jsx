import home from '../assets/home.png'
import roue from '../assets/roue.png'
import roues from '../assets/roues.png'
import historique from '../assets/his.png'
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
                <ListItem component={Link} to="/machine/Ligne-d'assemblage-TBS">
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
    )
}

export default Links
