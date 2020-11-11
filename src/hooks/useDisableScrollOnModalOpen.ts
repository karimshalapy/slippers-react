import { useEffect } from "react"

export const useDisableScrollOnModalOpen = (condition: boolean) => {

    const disableScrollOnModalOpen = condition
        ?
        () => {
            document.body.style.overflow = 'hidden'
            return () => {
                document.body.style.overflow = 'auto'
            }
        }
        : () => { }
    useEffect(disableScrollOnModalOpen, [])
}

export default useDisableScrollOnModalOpen