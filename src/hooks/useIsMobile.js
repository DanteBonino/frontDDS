import useScreenSize from "./useWindowsSize"

const useIsMobile = (breakpoint = 768) =>{
    const { width } = useScreenSize()
    return width <= breakpoint
}

export default useIsMobile