import Footer, { mobileFooterLinks } from "../footer/Footer"

const VariableFooter = ({pageClassname}) => {
    return(
        <Footer pageClassname={pageClassname} modeClass="variable" mobileLinks={mobileFooterLinks} />
    )
}

export default VariableFooter