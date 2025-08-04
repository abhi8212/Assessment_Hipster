'use client';
import { Product } from '@/redux/slices/productSlice';
import { RootState } from '@/redux/store';
import Image from 'next/image';
import { useSelector } from 'react-redux';


interface Props {
  product: Product;
}

export default function ProductCard({ product }: Props) {
    const theme = useSelector((state: RootState) => state.theme.current);
  
  return (
    // <div className="bg-white rounded-2xl shadow-md hover:shadow-2xl border border-gray-200 hover:border-black transform hover:-translate-y-1 transition-all duration-300 p-3 w-full max-w-sm mx-auto h-full flex flex-col justify-between">
    <div
      className={`rounded-2xl border shadow-md transition-all duration-500 p-4  text-gray-500
        ${theme === 'dark'
          ? 'bg-gray-800 text-white font-serif font-bold border-gray-600 hover:shadow-lg'
          : 'bg-white text-black border-gray-200 hover:shadow-xl'}
      `}>
      <Image
        src={product.image}
        alt={product.title}
        width={150}
        height={150}
        className="object-contain mx-auto rounded-md h-40"
      />
      <div className="mt-4 flex flex-col flex-grow">
        <p className="font-bold text-sm  line-clamp-2">{product.title}</p>
        <p className="text-xs  mt-1">{product.category}</p>
        {/* ⭐ Rating */}
        <div className="flex items-center text-xs text-yellow-500 mt-2">
          <span className="mr-1">⭐</span>
          <span>{product.rating.rate}</span>
          <span className="ml-2 ">({product.rating.count})</span>
        </div>

        <p className="font-semibold text-lg mt-2 text-blue-600">${product.price}</p>
        <span className="text-sm mt-1 flex-grow line-clamp-2">
          {product.description}
        </span>

        <button className="mt-4 bg-blue-600 text-white py-1.5 rounded-md hover:bg-blue-700 transition">
          Add to Cart
        </button>
      </div>
    </div>
  );
}
