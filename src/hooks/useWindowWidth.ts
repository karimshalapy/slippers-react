import { useEffect, useState } from 'react'

// Hook
export const useWindowWidth = () => {

    const [windowWidth, setWindowWidth] = useState<number | undefined>()

    useEffect(() => {
        // Handler to call on window resize
        const handleResize = () => {
            // Set window width/height to state
            setWindowWidth(window.innerWidth)
        }

        // Add event listener
        window.addEventListener("resize", handleResize)

        // Call handler right away so state gets updated with initial window size
        handleResize()

        // Remove event listener on cleanup
        return () => window.removeEventListener("resize", handleResize)
    }, []) // Empty array ensures that effect is only run on mount

    return windowWidth
}

export default useWindowWidth