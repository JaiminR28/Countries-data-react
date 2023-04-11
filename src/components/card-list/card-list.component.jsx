import "./card-list.styles.css";
import Card from "../Card/card.component";
import "./card-list.styles.css";

const CardList = ({ countries }) => {
	return (
		<div className="card--list">
			{countries.map((country) => {
				// console.log(country);
				return <Card country={country} />;
			})}
		</div>
	);
};

export default CardList;
