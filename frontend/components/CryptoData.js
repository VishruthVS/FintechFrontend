// components/CryptoData.js
"use client";
import { useEffect, useState } from "react";

const CryptoData = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://cryptonews-api.com/api/v1/top-mention?&date=last7days&token=slkucolk0aeqcwkbhlkniihnffd8if4dqmkf7rnv"
        );
        const json = await response.json();
        setData(json.data.all);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Crypto Mentions</h1>
      <div className="grid grid-cols-4 gap-4">
        {data.map((crypto) => (
          <div key={crypto.ticker} className="border p-4 rounded-md">
            <h2 className="text-xl font-semibold mb-2">{crypto.name}</h2>
            <p>Ticker: {crypto.ticker}</p>
            <p>Total Mentions: {crypto.total_mentions}</p>
            <p>Positive Mentions: {crypto.positive_mentions}</p>
            <p>Negative Mentions: {crypto.negative_mentions}</p>
            <p>Neutral Mentions: {crypto.neutral_mentions}</p>
            <p>Sentiment Score: {crypto.sentiment_score}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CryptoData;
