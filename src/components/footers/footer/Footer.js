import "./Footer.css"
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import NavLinks from "./NavLinks";
import { DotSeparator } from "../../DotSeparator/DotSeparator";
import useIsMobile from "../../../hooks/useIsMobile";
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import LabeledIcon from "../../labeledIcon/LabeledIcon";
import { createCssClass } from "../../../utils/utils";
import { useModal } from "../../../contexts/modalContext/ModalContext";


class Link {
    constructor(text, path){
        this.content = text;
        this.href = path;
    }
}

class LocalLink extends Link {
    constructor(text, path){
        super(text, path)
    }

    link(){
        return `/${this.href}`
    }

    target(){
        return "_self"
    }
}

class ExternalLink extends Link {
    constructor(text, path){
        super(text, path)
    }

    link(){
        return `https://${this.href}.com`
    }

    target(){
        return "_blank"
    }
}

class SocialMediaLink extends ExternalLink {
    constructor(text, path){
        super(text, path)
    }

    link(){
        return super.link() + "/birbnb_arg      "
    }
}


export const infoLinks = [
    new LocalLink("Privacidad", "privacy_policy"),
    new LocalLink("Términos", "terms")
]

export const mobileFooterLinks = [
    new LocalLink(LabeledIcon(<SearchIcon fontSize="large"/>, "Descubrí"), ""),
    new LocalLink(LabeledIcon(<AccountCircleOutlinedIcon fontSize="large"/>, "Iniciar sesión"), "login")
]

export const contactLinks = [
    new SocialMediaLink( <InstagramIcon fontSize="small"/>,"instagram"),
    new SocialMediaLink(<XIcon fontSize="small"/>, "twitter")
]

const Footer = ({pageClassname = "", modeClass="", mobileLinks=[]}) => {
    const isMobile = useIsMobile(1024);
    const {isOpen} = useModal();

    function createClassWithModeClass(...classes){
        return createCssClass(...classes, modeClass)
    }

    function isVariable(unModo){
        return unModo == "variable"
    }

    return (
        <footer style={{display: isOpen && isVariable(modeClass) ? "none" : ""}} className={createClassWithModeClass("footer", pageClassname)}>
            <section className={createClassWithModeClass("footerInfo")}>
                <p> © 2025 Birbnb, Inc. </p>
                <DotSeparator/>   
                <NavLinks doted={true} links={infoLinks} linkClassname="infoLink"/>
            </section>
            <section className="footerContact">
                <NavLinks links={isMobile ?  mobileLinks : contactLinks} linkClassname={isVariable(modeClass) && isMobile ? "mobileContactLink" : "contactLink"}/>
            </section>
        </footer>
    )
}

export default Footer





