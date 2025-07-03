import { useLocation } from "react-router-dom"
import { DotSeparator } from "../../DotSeparator/DotSeparator.js"
import "./NavLinks.css"

export function esUltimoElemento(unIndice, unaLista){
    return unIndice == (unaLista.length - 1)
}

function NavLinks ({links, doted=false, linkClassname = ""}) {
    const { pathname } = useLocation()
    
    return links.map((link, index) =>
            <>
                <a className={`${linkClassname} ${pathname === link.link() ? "active-link" : ""}`} target={link.target()} key={index} href={link.link()}>{link.content}</a>
                {
                    doted && !esUltimoElemento(index, links) &&
                     <DotSeparator/>   
                }
            </>
        )

}

export default NavLinks