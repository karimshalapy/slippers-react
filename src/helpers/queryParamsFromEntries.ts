export const queryParamsFromEntries = (entries: [string, string | null | undefined][]) => (
    entries.filter(item => item[1])
        .map(item => item.join("="))
        .join("&")
)
export default queryParamsFromEntries