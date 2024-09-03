export const calculateAverageKPI = (data, kpi) => {
    let total = 0
    for (const machine of data) {
        total += machine?.data?.KPIs?.[kpi] ?? 0
    }
    return total / data.length
}
