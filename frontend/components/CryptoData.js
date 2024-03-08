// // components/CryptoData.js
// "use client";
// import { useEffect, useState } from "react";

// const CryptoData = () => {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch(
//           "https://cryptonews-api.com/api/v1/top-mention?&date=last7days&token=slkucolk0aeqcwkbhlkniihnffd8if4dqmkf7rnv"
//         );
//         const json = await response.json();
//         setData(json.data.all);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <div>
//       <h1 className="text-2xl font-bold mb-4">Crypto Mentions</h1>
//       <div className="grid grid-cols-4 gap-4">
//         {data.map((crypto) => (
//           <div key={crypto.ticker} className="border p-4 rounded-md">
//             <h2 className="text-xl font-semibold mb-2">{crypto.name}</h2>
//             <p>Ticker: {crypto.ticker}</p>
//             <p>Total Mentions: {crypto.total_mentions}</p>
//             <p>Positive Mentions: {crypto.positive_mentions}</p>
//             <p>Negative Mentions: {crypto.negative_mentions}</p>
//             <p>Neutral Mentions: {crypto.neutral_mentions}</p>
//             <p>Sentiment Score: {crypto.sentiment_score}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default CryptoData;
// components/CryptoNews.js
"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

const CryptoNews = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://cryptonews-api.com/api/v1/events?&page=1&token=slkucolk0aeqcwkbhlkniihnffd8if4dqmkf7rnv"
        );
        const json = await response.json();
        setNews(json.data || []); // Ensure news is initialized as an array
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Crypto News</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {Array.isArray(news) && news.length > 0 ? ( // Check if news is an array and has items
          news.map((item) => (
            <div key={item.event_id} className="border p-4 rounded-md">
              <h2 className="text-xl font-semibold mb-2">{item.event_name}</h2>
              <p>{item.event_text}</p>
              <p>Date: {item.date}</p>
              {item.tickers.length > 0 && (
                <p>
                  Tickers:{" "}
                  {item.tickers.map((ticker) => (
                    <span key={ticker}>{ticker} </span>
                  ))}
                </p>
              )}
              {item.image && (
                <div className="mt-4 rounded-md" style={{ maxWidth: "100%" }}>
                  <Image
                    src={item.image}
                    alt="News Image"
                    width={600}
                    height={400}
                  />
                </div>
              )}
            </div>
          ))
        ) : (
          <p>No news available</p> // Render a message if there are no news items
        )}
      </div>
    </div>
  );
};

export default CryptoNews;
