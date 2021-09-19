module.exports = ({
    Withdrawals,
    Deposits,
    Inflation,
    MinStockMarket,
    MaxStockMarket,
    MinPrivateEquity,
    MaxPrivateEquity,
    MinRealEstate,
    MaxRealEstate,
}) => {
    console.log('ER:: Withdrawals', Withdrawals)
    console.log('ER:: Deposits', Deposits)
    console.log('ER:: Inflation', Inflation)
    console.log('ER:: MinStockMarket', MinStockMarket)
    console.log('ER:: MaxStockMarket', MaxStockMarket)
    console.log('ER:: MinPrivateEquity', MinPrivateEquity)
    console.log('ER:: MaxPrivateEquity', MaxPrivateEquity)
    console.log('ER:: MinRealEstate', MinRealEstate)
    console.log('ER:: MaxRealEstate', MaxRealEstate)
    
    return {
        response: {
            stockMarket: Math.floor(Math.random() * 100),
            privateEquity: Math.floor(Math.random() * 100),
            realEstate: Math.floor(Math.random() * 100),
        }
    }
}