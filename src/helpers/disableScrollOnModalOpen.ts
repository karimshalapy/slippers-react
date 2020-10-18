export const disableScrollOnModalOpen = () => {
    document.body.style.overflow = 'hidden'
    return () => {
        document.body.style.overflow = 'auto'
    }
}
export default disableScrollOnModalOpen