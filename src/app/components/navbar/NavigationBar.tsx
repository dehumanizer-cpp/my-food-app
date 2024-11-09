

export default function Navbar(){

    return (
        <nav className="">
            <ul className='flex gap-x-5 text-lg'>
                <li className="link-item"><a href="/">Home</a></li>
                <li className="link-item"><a href="/">About Us</a></li>
                <li className="link-item"><a href="/">Explore Foods</a></li>
                <li className="link-item"><a href="/">Reviews</a></li>
                <li className="link-item"><a href="/">FAQ</a></li>
            </ul>
        </nav>
    )
}