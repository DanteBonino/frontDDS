import Footer, { contactLinks } from "../footer/Footer"

const ConstantFooter = ({pageClassname}) => {
    return (
        <Footer pageClassname={pageClassname} modeClass={"constant"} mobileLinks={contactLinks} />
    )
}

export default ConstantFooter

/* 
"mobileContactLink"
*/