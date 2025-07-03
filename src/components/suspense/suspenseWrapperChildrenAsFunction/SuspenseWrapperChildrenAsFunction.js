import SuspenseWrapper from "../suspenseWrapper/SuspenseWrapper"

const SuspenseWrapperChildrenAsFunction = ({children, suspenseElement}) => {
    return(
        <SuspenseWrapper suspenseElement={suspenseElement}>
            {() => children}
        </SuspenseWrapper>
    )
}

export default SuspenseWrapperChildrenAsFunction