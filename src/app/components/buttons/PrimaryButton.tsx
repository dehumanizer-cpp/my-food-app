
interface ButtonProps{
    value:string
}

export default function PrimaryButton({value} : ButtonProps){

    return(
        <button className="text-white bg-black w-[50%] font-montserrat text-xl py-2 rounded-md hover:bg-orange-500 transition duration-200 hover:translate-x-5">{value}</button>
    )
}