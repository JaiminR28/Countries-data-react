import React, { useState, useEffect } from "react";
import CardList from "./components/card-list/card-list.component";

import "./App.css";
import SearchBox from "./components/Search-field/search-box.component";

function App() {
	const [searchField, setSearchField] = useState("");
	const [Title, setTitle] = useState(0);
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
		const newCountries = countries.filter((country) => {
			return country.name.common.toLowerCase().includes(searchField);
		});
		setFilteredCountries(newCountries);
		let Title =
			newCountries.length !== 250
				? `${newCountries.length} satisfied the search criteria`
				: "  ";
		setTitle(Title);
	}, [countries, searchField]);

	const searchCountry = (event) => {
		let searhFieldString = event.target.value.toLowerCase();
		setSearchField(searhFieldString);
	};

	return (
		<div className="App">
			<header className="App-header">
				<div className="Heading--box">
					<h1 className="Heading">World Countries Data</h1>
					<h3 className="Total--countries">
						Currently We have {countries.length} Countries
					</h3>
					<h4 className="total--results">{Title}</h4>
				</div>
				<SearchBox
					placeHolder={"Search countries by name , city and language"}
					onChangeHandler={searchCountry}
				></SearchBox>
			</header>
			<main>
				<CardList countries={filteredCountries} />
			</main>
		</div>
	);
}

export default App;
