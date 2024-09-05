
import { FaHistory } from "react-icons/fa";
import { IoTimerSharp } from "react-icons/io5";
import { FaFileSignature } from "react-icons/fa";
import { MdNotificationAdd } from "react-icons/md";
import { MdFileCopy } from "react-icons/md";

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
            <Tooltip title="Tableau de board" placement="right">
                <ListItem component={Link} to="/dashboard">
                    <ListItemIcon>
                    <IoTimerSharp style={{ color: 'white'}} />
                    </ListItemIcon>
                    <ListItemText primary="Tableau de bord" />
                </ListItem>
            </Tooltip>
            <Tooltip title="OF" placement="right">
                <ListItem component={Link} to="/of">
                    <ListItemIcon>
                    <FaFileSignature style={{ color: 'white'}} />
                    </ListItemIcon>
                    <ListItemText primary="Lancement OF" />
                </ListItem>
            </Tooltip>
            <Tooltip title="Déclaration alerte" placement="right">
                <ListItem component={Link} to="/machine/alerte">
                    <ListItemIcon>
                    <MdNotificationAdd  style={{ color: 'white'}}/>
                    </ListItemIcon>
                    <ListItemText primary="Déclaration alerte" />
                </ListItem>
            </Tooltip>
            <Tooltip title="Déclaration NC" placement="right">
                <ListItem component={Link} to="/NC">
                    <ListItemIcon>
                    <MdFileCopy   style={{ color: 'white'}}/>
                    </ListItemIcon>
                    <ListItemText primary="Déclaration NC" />
                </ListItem>
            </Tooltip>
            <Tooltip title="Historique" placement="right">
                <ListItem component={Link} to="/historique">
                    <ListItemIcon>
                    <FaHistory style={{ color: 'white'}} />
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
