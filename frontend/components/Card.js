"use client"

import Image from "next/image";
import Link from "next/link";

const Card = ({ logo, title, description, chain, url }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex items-center mb-4">
        {logo && <Image src={logo} alt={title} className="h-20 w-20 mr-2" width={100} height={100} />}
        <p className="text-lg font-semibold">{title}</p>
      </div>
      <div>
        <p className="text-gray-600 mb-4">{description}</p>
        {chain && <p className="text-sm text-gray-500">Chain: {chain}</p>}
        <Link href={url} className="text-blue-500 hover:text-blue-700 font-semibold"><button>Go to Faucet</button></Link>
      </div>
    </div>
  );
};

export default Card;