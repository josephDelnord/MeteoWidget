import MeteoCard from "@/components/MeteoCard";

export default function Home() {
	console.log("execution home");
	return (
		<div className="grid grid-cols-1 sm:grid-cols-2">
			{[
				"Paris",
				"Montpellier",
				"Marseille",
				"La Garenne-Colombes",
				"Rennes",
				"La Rochelle",
				"Montreal",
			].map((city) => (
				<MeteoCard city={city} key={city} />
			))}

			{/* 

			<MeteoCard city="Paris" />
			<MeteoCard city="Montpellier" />
			<MeteoCard city="Marseille" />
			<MeteoCard city="La Garenne-Colombes" /> */}
		</div>
	);
}
