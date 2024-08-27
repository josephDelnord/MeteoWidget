import Link from "next/link";

function Menu() {
	return (
		<nav className="bg-teal-400 p-6">
			<Link href="/" className="mr-6 hover:text-white hover:font-bold">
				Acceuil
			</Link>
			<Link href="/about" className="mr-6 hover:text-white hover:font-bold">
				About us
			</Link>
		</nav>
	);
}

export default Menu;
