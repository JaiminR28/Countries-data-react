import "./card.styles.css";

const Card = ({ country }) => {
	// const { img, name, capital, langugaes, population, currency } = country;
	console.log(country);
	const { flags, name, capital, languages, population, currencies } = country;
	console.log(flags, name, currencies);

	return (
		<article>
			<div class="article-wrapper">
				<figure>
					<img src={flags.png} alt={flags.alt} />
				</figure>
				<div class="article-body">
					<h2>{name.common}</h2>
					<div class="country--info--block">
						<div class="country--info">
							<h3>Capital:</h3>
							<p>Delhi</p>
						</div>
						<div class="country--info">
							<h3>languages:</h3>
							<p>Hindi, English, Gujarati</p>
						</div>
						<div class="country--info">
							<h3>Population:</h3>
							<p>130,000,000,000</p>
						</div>
						<div class="country--info">
							<h3>Currency:</h3>
							<p>Rupee</p>
						</div>
					</div>
				</div>
			</div>
		</article>
	);
};

export default Card;
