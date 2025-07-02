import React from "react";

const CategoryComp = ({ image, title }) => {
  return (
    <div className="flex-shrink-0">
      <div
        className="h-60 w-[440px] rounded-3xl bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <h2 className="mt-3 text-lg font-thin text-center">{title}</h2>
    </div>
  );
};

const Category = () => {
  const categories = [
    {
      image:
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/fb7eda3c-5ac8-4d05-a18f-1c2c5e82e36e/BLAZER+MID+%2777+VNTG.png",
      title: "Phantom Elite",
    },
    {
      image:
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/17c2ad2c-5d83-47dd-8a8e-525be63e1cec/LEGEND+10+ELITE+FG+LV8.png",
      title: "Legend 10 Elite",
    },
    {
      image:
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/79a35c4b-23ec-4d9e-a2f3-bb0049f96fbd/NIKE+DUNK+LOW+RETRO.png",
      title: "Dunk Low Retro",
    },
    {
      image:
        "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/6b9f0a5a-7dd0-4280-a41c-416e2aae03d0/custom-nike-blazer-mid-77-shoes-by-you.png",
      title: "Custom Blazer Mid",
    },
  ];

  return (
    <div className="">
      <h1 className="font-thin text-xl">Our Category List</h1>

      <div className="mt-6 w-full overflow-x-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
        <div className="flex space-x-6 w-max">
          {categories.map((item, index) => (
            <CategoryComp key={index} image={item.image} title={item.title} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Category;
