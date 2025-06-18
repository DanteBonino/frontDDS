import "./LabeledIcon.css"

function LabeledIcon (icono, labelName){
    return(
        <div className="container">
            <label>
                {labelName}
            </label>
            {icono}
        </div>
    )
}

export default LabeledIcon