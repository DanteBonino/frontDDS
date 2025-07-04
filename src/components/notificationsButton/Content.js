import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import { Badge } from '@mui/material';
const Content = ({cantidadNotificaciones}) => {
    return(
        <>
            <NotificationsNoneIcon sx={{color:"black"}}/>
            <Badge badgeContent={cantidadNotificaciones} overlap="circular" className="badge"/>
        </>
    )
}

export default Content