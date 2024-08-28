import home from '../assets/horloge.png'
import roue from '../assets/of.png'
import roues from '../assets/alerte.png'
import historique from '../assets/NC.png'
import rapport from '../assets/histo.png'
import planning from '../assets/MI.png'


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
                    <ListItemText primary="Tableau de bord" />
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
                    <ListItemText primary="Lancement OF" />
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
                    <ListItemText primary="Déclaration alerte" />
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
                    <ListItemText primary="Déclaration NC" />
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
                    <ListItemText primary="Historique" />
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
                    <ListItemText primary="Maintenance  1er Niv" />
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
