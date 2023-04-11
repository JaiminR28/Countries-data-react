import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./components/Card/card.component";
import CardList from "./components/card-list/card-list.component";

import "./App.css";
import SearchBox from "./components/Search-field/search-box.component";

function App() {
	const [searchField, setSearchField] = useState("");
	const [Title, setTitle] = useState();
	const [countries, setCountries] = useState([]);
	const [filteredCountries, setFilteredCountries] = useState(countries);

	useEffect(() => {
		fetch("https://restcountries.com/v3.1/all")
			.then((response) => response.json())
			.then((data) => {
				setCountries(data);
			});
	}, []);

	useEffect(() => {
		setFilteredCountries(countries);
	}, [countries]);
	return (
		<div className="App">
			<header className="App-header">
				<div className="Heading--box">
					<h1 className="Heading">World Countries Data</h1>
					<h3 className="Total--countries">
						Currently We have Num Countries
					</h3>
					<h4 className="total--results">
						Num satisfies the search criteria
					</h4>
				</div>
				<SearchBox></SearchBox>
			</header>
			<main>
				<CardList countries={countries} />
			</main>
		</div>
	);
}

export default App;
