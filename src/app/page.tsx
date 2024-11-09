import Image from "next/image";
import ProductCard from "./components/cards/ProductCard";
import PrimaryButton from "./components/buttons/PrimaryButton";

export default function Home() {
  return (
    
    <div className="shadow-md ">
      <article className="grid md:grid-cols-2 place-items-center py-10 gap-y-5 bg-gradient-to-r from-[#B2A59B] to-[#DED0B6] ">
        <section className="w-[90vw] md:max-w-[35vw] space-y-3">
          <h1 className="text-2xl text-center md:text-start md:text-5xl font-montserrat font-bold opacity-90">Savor the Flavor of Authentic Cuisine</h1>
          <p className="font-quicksand font-thin text-2xl opacity-80 ">Indulge in a culinary journey with our carefully crafted dishes, made from the freshest ingredients and time-honored recipes.</p>
        </section>
        <section className="w-[80vw] md:max-w-[25vw]">
            <img src="/images/hero-chicken.jpg" alt="Chicken image for hero section" className="object-cover  object-right-bottom rounded-lg"/>
        </section>
      </article>

      <article className="bg-[#345B63]">
        <section className="py-5 px-5 flex flex-col items-center gap-y-5">
          <h1 className="text-4xl md:text-[4rem] font-playfair">Explore Our Foods</h1>
          <p className="max-w-[50rem] font-montserrat text-lg text-center opacity-75">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea exercitationem aperiam dolore blanditiis optio cupiditate vero rerum facilis modi quo, tenetur hic tempore voluptas pariatur, aliquam adipisci ipsa enim possimus?</p>
          <div className="grid md:grid-cols-3 gap-y-5 md:gap-x-10 mt-10">
            <ProductCard imagePath="/images/food-1.jpg"/>
            <ProductCard imagePath="/images/food-2.jpg"/>
            <ProductCard imagePath="/images/food-3.jpg"/>
          </div>
        </section>
      </article>

      <article className="grid grid-rows-2 gap-y-5 bg-[#607274]">
        
        <section className="grid md:grid-cols-2 place-items-center py-5 gap-y-5 md:gap-y-0">
          <div className="order-2 md:order-1">
            <img src="/images/food-4.jpg" alt="Image of food" className="object-cover w-[70vw] h-[40vh] md:max-w-[30vw] rounded-xl" />
          </div>
          <div className="order-1 space-y-3 px-5 md:px-20">
            <h1 className="font-quicksand font-semibold text-5xl opacity-90">Why do we use it?</h1>
            <p className="text-lg font-montserrat opacity-80">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
            <PrimaryButton value="Get Started"></PrimaryButton>
          </div>
        </section>

        <section className="grid md:grid-cols-2 place-items-center py-5 gap-y-5 md:gap-y-0">
          <div className="order-2 md:order-1">
            <img src="/images/food-1.jpg" alt="Image of food" className="object-cover w-[70vw] h-[40vh] md:max-w-[30vw] rounded-xl" />
          </div>
          <div className="space-y-3 px-5 md:px-20">
            <h1 className="font-quicksand font-semibold text-5xl opacity-90">Where does it come from?</h1>
            <p className="text-lg font-montserrat opacity-80">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
            <PrimaryButton value="Get Started"></PrimaryButton>
          </div>
        </section>

      </article>
      
      <article>
        <section className="grid grid-rows-2 p-10 bg-gradient-to-r from-[#152D35] to-[#345B63] text-white/80">
          <h1 className="font-playfair text-[5rem] text-center">Opening Hours</h1>
          <div className="flex flex-col md:flex-row gap-y-5 md:gap-y-0 items-center justify-center gap-x-[40rem]">
            <div>
              <h1 className="font-montserrat text-[1.4rem]">Monday to Tuesday</h1>
              <p className="font-playfair text-[2rem]">09:00 am - 22:00 pm</p>
            </div>
            <div>
              <h1 className="font-montserrat text-[1.4rem]">Monday to Tuesday</h1>
              <p className="font-playfair text-[2rem]">09:00 am - 22:00 pm</p>
            </div>
          </div>
        </section>
      </article>
    </div>
  );
}
