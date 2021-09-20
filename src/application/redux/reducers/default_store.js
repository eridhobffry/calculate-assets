export const DefaultStore = {
    assets: {
        request: false,
        succeed: false,
        failed: false,
        requestFormPayload: {
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
        },
        responseFormPayload: null,
    },
    waitingScreen: {
        isVisible: false
    }
}