import { BounceLoader } from "react-spinners"
import "./Loader.css"
import { rojo } from "../../utils/utils"

const Loader = ({loader}) => {
    return (
        <div className="loader">
            {loader}
        </div>
    )
}

export default Loader