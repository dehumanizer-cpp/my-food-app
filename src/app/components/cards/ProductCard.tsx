import React from 'react';

interface ProductCardProps{
    imagePath?: string,
    title?: string,
    description?: string
    price?: string
}



export default function ProductCard({imagePath = '/images/christmas-1.jpg', title = 'Lorem Ipsum', description = 'Some descriptions for product card', price = '1550.5'}: ProductCardProps){
    return(
        <div className="w-[20rem] p-5 shadow-md flex flex-col items-center gap-y-3 rounded-xl hover:-translate-y-6 transition duration-300 bg-gray-400/10">
            <img src={imagePath} alt="Food image" className='w-full h-60 object-cover'/>
            <h1 className='font-montserrat font-bold text-2xl'>{title}</h1>
            <p className='font-quicksand'>{description}</p>
            <h1 className='font-montserrat text-2xl'>{price}</h1>
            <button className='bg-black hover:bg-black/70 w-full p-2 text-gray-100 font-montserrat font-semibold'>Order Now</button>
        </div>
    )
}