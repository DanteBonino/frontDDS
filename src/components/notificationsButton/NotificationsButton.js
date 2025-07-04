import ResponsiveDropdownButton from "../dropDownDrawerButton/DropDownDrawerButton"
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import Content from "./Content";

const NotificactionsButton = ({notificaciones}) => {
    return(
        <ResponsiveDropdownButton buttonContent={<Content cantidadNotificaciones={notificaciones.length}/>}>

        </ResponsiveDropdownButton>
    )
}