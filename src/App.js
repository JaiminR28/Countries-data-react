import React, { useState, useEffect } from "react";

import "./App.css";
import SearchBox from "./components/Search-field/search-box.component";

function App() {
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
		</div>
	);
}

export default App;
