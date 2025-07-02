import "./IconedButton.css"
import "../navbars/searchNavBar/Navbar.css"
import { emptyFn } from "../../utils/utils"

const IconedButton = ({icon, label, clase ="", onClick = emptyFn}) => {
    return (
        <button className={`iconedButton ${clase}`} onClick={onClick}>
              {icon}
              <span> {label} </span>
        </button>
    )
}

export default IconedButton