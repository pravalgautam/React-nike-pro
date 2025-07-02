import React from "react";
import { addToCart } from "../features/cart/cartSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Products = ({ image, title, price, rating, onClick }) => {
  return (
    <div className="w-full max-w-sm rounded-3xl border overflow-hidden shadow-sm bg-white transform transition-transform duration-300 hover:scale-105">
      <div
        className="h-48 w-full bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
      ></div>

      <div className="px-6">
        <h2 className="text-lg font-medium mb-2">{title}</h2>
        <p className="text-gray-600 mb-1">₹{price}</p>

        <div className="flex items-center gap-1 text-yellow-500">
          <h1>★</h1>
          <h1>★</h1>
          <h1>★</h1>
          <h1>★</h1>
        </div>

        <button
          className="p-2 px-4 bg-gray-700 rounded-full my-4"
          onClick={onClick}
        >
          <h1 className="text-white">Add to Cart</h1>
        </button>
      </div>
    </div>
  );
};

const OurProducts = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

 const products = [
  {
    id: 1,
    image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/1e2ce8a9-1452-455c-b637-beca735ab9ac/W+NIKE+DUNK+LOW+NEXT+NATURE.png",
    title: "Air Drift One",
    price: 12999,
  },
  {
    id: 2,
    image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/f6b1d444-802f-4aa0-9a3d-f4ebef06e386/AIR+MORE+UPTEMPO+LOW.png",
    title: "Zoom Blaze Max",
    price: 11499,
  },
  {
    id: 3,
    image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/79a35c4b-23ec-4d9e-a2f3-bb0049f96fbd/NIKE+DUNK+LOW+RETRO.png",
    title: "React Pulse Retro",
    price: 9999,
  },
  {
    id: 4,
    image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/51003f04-9402-4b04-8957-e1b950a12ae5/W+NIKE+COURT+VISION.png",
    title: "Court Vision Flex",
    price: 8499,
  },
  {
    id: 5,
    image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/8ee77bb3-262a-4933-9804-acc00c5ec2b4/W+AIR+MAX+ISLA+SANDAL+NL.png",
    title: "Phantom Nova Elite",
    price: 12999,
  },
  {
    id: 6,
    image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/7b2cb06b-723b-4e98-8605-a07cbea1651f/AIR+VAPORMAX+2023+FK.png",
    title: "Legend Aero 10X",
    price: 11499,
  },
  {
    id: 7,
    image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/3e0e6ed4-19bd-43d9-aafb-20caa5698d3f/NIKE+AIR+MAX+CIRRO+SLIDE.png",
    title: "Vibe Retro Glide",
    price: 9999,
  },
  {
    id: 8,
    image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/d595cef2-f74b-4c8e-8694-37e73af50f6c/MERCURIAL+VAPOR+1+RGN+SE+FG.png",
    title: "Blazer SkyCraft",
    price: 8499,
  },
  {
    id: 9,
    image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/d2f2c2a2-4f23-4a2e-afa7-762f341b1de0/W+AIR+ZOOM+ALPHAFLY+NEXT%25+3.png",
    title: "AlphaFly Phantom 3",
    price: 12999,
  },
  {
    id: 10,
    image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/4d457a16-5ea6-4c5b-9b0c-3e6cb09277c4/PRIME+96+EP.png",
    title: "Prime Strike Elite",
    price: 11499,
  },
  {
    id: 11,
    image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/1f8b243d-6b9f-4077-bdc1-0ba820a31dd4/JA+2++KOOLAID++EP.png",
    title: "Retro Volt Boost",
    price: 9999,
  },
  {
    id: 12,
    image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/1fa59f61-a6e7-4d4c-b2dc-aed4ef1a1a00/AIR+FORCE+1+%2707.png",
    title: "Blazer EvoForce",
    price: 8499,
  },
  {
    id: 13,
    image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/f4d8bedb-f17d-4327-b7d1-83be70881aea/WMNS+NIKE+AIR+RIFT.png",
    title: "Rift Edge Phantom",
    price: 12999,
  },
  {
    id: 14,
    image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/b84fd156-0300-44c6-9a71-2772493cfc9c/KD18+EP.png",
    title: "KD Ignite Pro",
    price: 11499,
  },
  {
    id: 15,
    image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/586e0ba3-d2a3-4cf3-b4cb-e97dd18a9efa/G.T.+CUT+3+EP.png",
    title: "Dunk Swift Retro",
    price: 9999,
  },
  {
    id: 16,
    image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/aad07f84-873d-492a-8c36-f5aa186ebad9/G.T.+CUT+3+EP.png",
    title: "Blazer X Motion",
    price: 8499,
  },
];


  return (
    <div className="px-4 sm:px-6 lg:px-16">
      <h1 className="text-center font-thin text-xl mt-20 mb-10">
        Our Products
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 place-items-center">
        {products.map((item, index) => (
          <Products
            key={index}
            image={item.image}
            title={item.title}
            price={item.price}
            onClick={() => {
              dispatch(addToCart(item));
              navigate("/cart");
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default OurProducts;
