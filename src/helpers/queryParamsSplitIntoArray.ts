export const queryParamsSplitIntoArray = (params: string) => (
    params.substring(1)
        .split("&")
        .map((item: string) => item.split("="))
)
export default queryParamsSplitIntoArray