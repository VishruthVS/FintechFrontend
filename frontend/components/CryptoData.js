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
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Image,
  Link,
} from "@nextui-org/react";
import { useEffect, useState } from "react";
import Loading from "./loading";

const CryptoNews = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://cryptonews-api.com/api/v1/events?&page=1&token=slkucolk0aeqcwkbhlkniihnffd8if4dqmkf7rnv"
        );
        const json = await response.json();
        setNews(json.data || []); // Ensure news is initialized as an array
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  if (loading) {
    return <Loading />; // Show loading UI if data is being fetched
  }
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Crypto News</h1>

      <div className="grid grid-cols-1 gap-4 ">
        {Array.isArray(news) && news.length > 0 ? (
          news.map((item) => (
            <Card
              key={item.event_id}
              className={`bg-gradient-to-r animate-spin-slow p-8 md:w-[60vw] mt-8 ml-4 shadow-2xl `}
            >
              {/* //max-w-[600px] */}
              <CardHeader className="flex gap-3">
                <Image
                  alt="news image"
                  height={80}
                  radius="sm"
                  src="/eth.svg"
                  width={80}
                />
                <div className="flex flex-col">
                  <p className="text-lg font-semibold">{item.event_name}</p>
                  <p className="text-small text-default-500">{item.date}</p>
                </div>
              </CardHeader>
              <Divider />
              <CardBody>
                <p>{item.event_text}</p>
                {item.tickers.length > 0 && (
                  <p>
                    Tickers:{" "}
                    {item.tickers.map((ticker) => (
                      <span key={ticker}>{ticker} </span>
                    ))}
                  </p>
                )}
              </CardBody>
              <Divider />
              <CardFooter>
                <Link isExternal showAnchorIcon href={item.source_url}>
                  Read more
                </Link>
              </CardFooter>
            </Card>
          ))
        ) : (
          <p>No news available</p>
        )}
      </div>
    </div>
  );
};

export default CryptoNews;
