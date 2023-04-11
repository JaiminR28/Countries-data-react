import "./card.styles.css";

const Card = ({ country }) => {
	// const { img, name, capital, langugaes, population, currency } = country;
	const { flags, name, capital, languages, population, currencies } = country;

	let allCurrencies = "";
	for (let x in currencies) {
		allCurrencies += x + ", ";
	}

	let allLangugaes = "";
	for (let x in languages) {
		allLangugaes += languages[x] + " ";
	}

	return (
		<article>
			<div className="article-wrapper">
				<figure>
					<img src={flags.png} alt={flags.alt} />
				</figure>
				<div className="article-body">
					<h2>{name.common}</h2>
					<div className="country--info--block">
						<div className="country--info">
							<h3>Capital:</h3>
							<p>{capital}</p>
						</div>
						<div className="country--info">
							<h3>languages:</h3>
							<p>{allLangugaes}</p>
						</div>
						<div className="country--info">
							<h3>Population:</h3>
							<p>{population}</p>
						</div>
						<div className="country--info">
							<h3>Currency:</h3>
							<p>{allCurrencies}</p>
						</div>
					</div>
				</div>
			</div>
		</article>
	);
};

export default Card;
