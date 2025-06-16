# binance-data-api

A simple API for fetching historical data from Binance and saving it to a MongoDB database in a readable format.



Config:

File .env:
```
DB=mongodb://localhost:27017/collection
```
Start:
```
npm install
```
```
npm run dev
```

Endpoint
```
GET /data
```
Query:
```
symbol:string	- BTCUSDT
interval:string - 1d
startDate:string - 2025-05-16T00:00:00Z
endDate:string - 2025-06-16T00:00:00Z
limit:number - 200
```

Response example:
```json
{
  "formattedBinanceData": [
    {
      "openTime": "2025-05-16T00:00:00.000Z",
      "openPrice": "103763.71000000",
      "highestPrice": "104033.90000000",
      "lowestPrice": "103655.16000000",
      "closePrice": "103764.81000000",
      "volume": "805.54540000",
      "closeTime": "2025-05-16T00:59:59.999Z",
      "quoteAssetVlume": "83630005.00958770",
      "numberOfTrades": 172650,
      "takerBuyBaseVolume": "393.49786000",
      "takerBuyQuoteVolume": "40849490.72145540"
    }
  ]
}
```
