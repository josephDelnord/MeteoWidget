// de base avec next tous les composants sont executé coté serveur,
// le JSX est rendu dans une page avant d'etre envoyé au client

import Link from "next/link";
import LikeBtn from "./LikeBtn";

// un composant server peut etre async
async function MeteoCard({ city }: { city: string }) {
	// attention les console.log sont dans le terminal coté serveur et non dans le navigateur du client
	console.log("execution composant MeteoCard");
	// on veut au premier rendu du composant aller chercher la temperature sur l'API
	// https://api.openweathermap.org/data/2.5/weather?q=montpellier&appid=47840f4f526d9cc69b4b575c52495860&units=metric
	const API_KEY = process.env.API_KEY;
	const result = await fetch(
		`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`,
	);
	const data = await result.json();

	const temp = data.main.temp;
	return (
		<div className="border m-6 rounded-xl p-6 bg-sky-200 bg-opacity-60">
			<LikeBtn />
			<div className="font-bold">{city}</div>
			<div>{temp}°C</div>
			<Link href={`/city/${city}`}>Voir + de détails</Link>
		</div>
	);
}

export default MeteoCard;
