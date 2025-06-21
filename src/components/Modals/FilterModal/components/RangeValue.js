const RangeValue = ({labelName, value}) => {
    return(
        <div className="rangeValueContainer">
            <label className="rangeLabel">
                {labelName}
            </label>
            <button disabled={true} className="rangeInput">
                {`$ ${value}`}
            </button>
        </div>
    )
}

export default RangeValue