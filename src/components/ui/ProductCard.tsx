import React from "react";
import Image from "next/image";
import Button from "./Button"; // Assuming Button is in the same directory

interface IProductCard {
  productImg: string;
  productName: string;
  productPrice: number;
}

const ProductCard: React.FC<IProductCard> = ({
  productImg,
  productName,
  productPrice,
}) => {
  return (
    <div className="plant-card w-full max-w-[160px] sm:max-w-[200px] md:max-w-[240px] mx-auto bg-white rounded-md shadow-md overflow-hidden">
      <div className="plant-img relative w-full aspect-square">
        <Image
          src={productImg}
          alt={`${productName} image`}
          fill
          style={{ objectFit: "cover" }}
          className="rounded-t-md"
        />
      </div>
      <div className="p-2 md:p-3">
        <h5 className="text-sm md:text-base font-semibold truncate">{productName}</h5>
        <p className="text-xs md:text-sm text-gray-600 mt-1">${(productPrice / 100).toFixed(2)}</p>
        <div className="mt-2">
          <Button
            label="Add to Cart"
            buttonColor="bg-green-500"
            textColor="text-white"
            hoverColor="hover:bg-green-600"
            hoverTextColor="hover:text-white"
            // onClick={() => {/* Add to cart logic */}}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;