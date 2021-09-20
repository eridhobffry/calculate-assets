import { theme } from "application/styles/theme"

export const assetPayloadMapper = (payload) => {
    return {
        Withdrawls: payload.withdrawls,
        Deposit: payload.deposit,
        Inflation: payload.inflation,
        MinStockMarket: payload.minStockMarket,
        MaxStockMarket: payload.maxStockMarket,
        MinPrivateEquity: payload.minPrivateEquility,
        MaxPrivateEquity: payload.maxPrivateEquility,
        MinRealEstate: payload.minRealEstate,
        MaxRealEstate: payload.maxRealEstate,
    }
}

export const chartDataMaker = (payload) => {
    const labels = []
    const data = []
    const backgroundColor = []
    // const opacities = ['00', '01','99','1D', 'E4']
    payload.forEach((e, i) => {
        labels.push(e.label)
        data.push(e.data)
        backgroundColor.push(theme.color.primary)
    })

    return {
        labels,
        datasets: [
            {
                label: 'The Values',
                data,
                backgroundColor
            }
        ]
}
}