export const formDataMapper = (payload) => {

    const rangeSM = payload.rangeStockMarket
    const rangePE = payload.rangePrivateEquility
    const rangeRE = payload.rangeRealEstate
    return {
        withdrawls: payload.withdrawls,
        deposit: payload.deposit,
        inflation: payload.inflation,
        rangeStockMarket: rangeSM,
        minStockMarket: rangeSM[0] === 0 ? 0 : parseInt(rangeSM[0]),
        maxStockMarket: parseInt(rangeSM[1]),
        rangePrivateEquility: rangePE,
        minPrivateEquility: rangePE[0] === 0 ? 0 : parseInt(rangePE[0]),
        maxPrivateEquility: parseInt(rangePE[1]),
        rangeRealEstate: rangeRE,
        minRealEstate: rangeRE[0] === 0 ? 0 : parseInt(rangeRE[0]),
        maxRealEstate: parseInt(rangeRE[1]),
    }
}

export const plainData = () => {
    return {
        withdrawls: '',
        deposit: '',
        inflation: '',
        rangeStockMarket: [0, 100],
        minStockMarket: 0,
        maxStockMarket: 100,
        rangePrivateEquility: [0, 100],
        minPrivateEquility: 0,
        maxPrivateEquility: 100,
        rangeRealEstate: [0, 100],
        minRealEstate: 0,
        maxRealEstate: 100,
    }
}

export const resetValue = (setValue) => {
    setValue('withdrawls', '')
    setValue('deposit', '')
    setValue('inflation', '')
    setValue('rangeStockMarket', [0, 100])
    setValue('minStockMarket', 0)
    setValue('maxStockMarket', 100)
    setValue('rangePrivateEquility', [0, 100])
    setValue('minPrivateEquility', 0)
    setValue('maxPrivateEquility', 100)
    setValue('rangeRealEstate', [0, 100])
    setValue('minRealEstate', 0)
    setValue('maxRealEstate', 100)
}