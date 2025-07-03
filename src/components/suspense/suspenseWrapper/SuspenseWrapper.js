import { useState } from "react"
import { useLoader } from "../../../contexts/loaderContext/LoaderContext"

const SuspenseWrapper = ({children, suspenseElement, loading}) =>{

    return(
        <>
        {
            loading 
            ? suspenseElement
            : children
        }
        </>
    )
}

export default SuspenseWrapper