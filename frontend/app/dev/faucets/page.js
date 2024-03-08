import Card from "@/components/Card";
import faucets from "@/assets/chains.json"

function Faucets() {
  return (
    <>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Testnet Faucets</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {faucets.map((chain, index) => (
            <Card key={index} title={chain.title} description={chain.description} chain={chain.chain} url={chain.url} logo={chain.logo} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Faucets;
