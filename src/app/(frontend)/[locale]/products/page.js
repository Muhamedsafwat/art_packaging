const ProductDetails = ({ product }) => {
  return (
    <div className="p-5 bg-gray-100 rounded-lg mt-5">
      <h2 className="text-xl font-bold">{product.TitleEn}</h2>
      <img
        src={product.image}
        alt={product.Title}
        className="w-32 h-32 object-cover mt-3"
      />
      <ul className="mt-3">
        {product.element.map((el, index) => (
          <li key={index} className="border-b p-2">
            <img
              src={el.image}
              alt={el.Title}
              className="w-16 h-16 inline-block mr-2"
            />
            <span>
              {el.Title} - {el.Description}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductDetails;
