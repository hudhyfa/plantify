import React from "react";
import ProductCard from "@/components/ui/ProductCard";

export default function Products() {
  return (
    <div className="product-listing w-full min-h-screen p-3 bg-[#e4f5ee]">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-4">
        <ProductCard
          productImg="https://www.ugaoo.com/cdn/shop/files/DSC_82942.jpg?v=1696240355"
          productName="Bamboo plant"
          productPrice={5500}
        />
        <ProductCard
          productImg="https://www.ugaoo.com/cdn/shop/files/DSC_82942.jpg?v=1696240355"
          productName="Bamboo plant"
          productPrice={5500}
        />
        <ProductCard
          productImg="https://www.ugaoo.com/cdn/shop/files/DSC_82942.jpg?v=1696240355"
          productName="Bamboo plant"
          productPrice={5500}
        />
        <ProductCard
          productImg="https://www.ugaoo.com/cdn/shop/files/DSC_82942.jpg?v=1696240355"
          productName="Bamboo plant"
          productPrice={5500}
        />
        <ProductCard
          productImg="https://www.ugaoo.com/cdn/shop/files/DSC_82942.jpg?v=1696240355"
          productName="Bamboo plant"
          productPrice={5500}
        />
        <ProductCard
          productImg="https://www.ugaoo.com/cdn/shop/files/DSC_82942.jpg?v=1696240355"
          productName="Bamboo plant"
          productPrice={5500}
        />
        <ProductCard
          productImg="https://www.ugaoo.com/cdn/shop/files/DSC_82942.jpg?v=1696240355"
          productName="Bamboo plant"
          productPrice={5500}
        />
        {/* Add more ProductCard components as needed */}
      </div>
    </div>
  );
}