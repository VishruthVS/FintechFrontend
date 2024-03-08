// components/Card.jsx

const CardStyle = ({ logo, title, description, chain }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex items-center mb-4">
        {logo && <img src={logo} alt={title} className="h-8 w-8 mr-2" />}
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>
      <p className="text-gray-600 mb-4">{description}</p>
      {chain && <p className="text-sm text-gray-500">Chains: {chain}</p>}
      <a href="#" className="text-blue-500 hover:text-blue-700 font-semibold">
        Learn More
      </a>
    </div>
  );
};

export default CardStyle;
