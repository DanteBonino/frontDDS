import "./GoBackNavbar.css"
import { Link } from "react-router-dom";
import BrandedNavbar from "../genericNavbar/genericNavbar"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const GoBackNavbar = () =>{
    return(
        <BrandedNavbar pageClassname="alojamientoPage">
            <Link to={"/"} className="backToHomeArrow">
                <ArrowBackIcon />
            </Link>
        </BrandedNavbar>
    )
}

export default GoBackNavbar