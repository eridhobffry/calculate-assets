module.exports = ({
    Withdrawls,
    Deposit,
    Inflation,
    MinStockMarket,
    MaxStockMarket,
    MinPrivateEquity,
    MaxPrivateEquity,
    MinRealEstate,
    MaxRealEstate,
}) => {
    console.log('ER:: Withdrawls', Withdrawls)
    console.log('ER:: Deposit', Deposit)
    console.log('ER:: Inflation', Inflation)
    console.log('ER:: MinStockMarket', MinStockMarket)
    console.log('ER:: MaxStockMarket', MaxStockMarket)
    console.log('ER:: MinPrivateEquity', MinPrivateEquity)
    console.log('ER:: MaxPrivateEquity', MaxPrivateEquity)
    console.log('ER:: MinRealEstate', MinRealEstate)
    console.log('ER:: MaxRealEstate', MaxRealEstate)
    
    return {
        response: [
            {
                label: 'Stock Market',
                data: Math.floor(Math.random() * 100),
            },
            {
                label: 'Private Equity',
                data: Math.floor(Math.random() * 100),
            },
            {
                label: 'Real Estate',
                data: Math.floor(Math.random() * 100),
            },
        ]
    }
}