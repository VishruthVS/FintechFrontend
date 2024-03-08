// pages/index.js
// import Card from "../components/Card";
import CardStyle from "@/components/Card";
const cards = [
  {
    logo: "/goerli-faucet.png",
    title: "Goerli Faucet",
    description: "An Ethereum testnet faucet powered by Alchemy.",
    chain: "Ethereum",
  },
  {
    logo: "/matic-supply.png",
    title: "Matic Supply",
    description:
      "Polygon faucet that sends a small amount of MATIC tokens to be used as transaction fees.",
    chain: "Polygon",
  },
  {
    logo: "/polygon-faucet.png",
    title: "Polygon Faucet",
    description:
      "Polygon Faucet is a tool that provides developers free testnet tokens for testing and development.",
    chain: "Polygon",
  },
  {
    logo: "/sol-faucet.png",
    title: "Sol Faucet",
    description: "A Solana testnet faucet provided by Alchemy.",
    chain: "Solana",
  },
  {
    logo: "/superchain-faucet.png",
    title: "Superchain Faucet",
    description:
      "Superchain Faucet provides testnet tokens for various blockchain networks.",
    chain: "Multi-chain",
  },
];

const Home = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Our Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {cards.map((card, index) => (
          <CardStyle
            key={index}
            logo={card.logo}
            title={card.title}
            description={card.description}
            chain={card.chain}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
