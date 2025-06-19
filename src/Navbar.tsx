export default function Navbar() {
    return (

        <nav className="w-full fixed top-0 z-50 bg-black/30 backdrop-blur-md px-7">

            <div className="w-full mx-auto px-4 py-1 flex justify-between items-center text-white">


                <img src="logo.png" alt="logo" className="w-15 h-15 cursor-pointer" />


                <ul className="flex gap-8 text-sm sm:text-base">
                    <li>
                        <a href="#projects" className="hover:text-purple-400 transition">
                            Projects
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://www.linkedin.com/in/parthdadhich"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-purple-400 transition"
                        >
                            LinkedIn
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://drive.google.com/file/d/1NkkCWDTuUY11H6Lbgo1NAYsLGAEgqzQ3/view?usp=sharing"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-purple-400 transition"
                        >
                            Resume
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
