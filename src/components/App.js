import React, {useState} from "react";
import Nav from "./Nav";
import HogList from "./HogList";
import Filter from "./Filter";
import Sort from "./Sort";

import hogs from "../porkers_data";

function App() {
	const [selectedSort, setSelectedSort] = useState("original")
	const [filterGreased, setFilterGreased] = useState(false)

	return (
		<div className="App">
			<Nav />
			<Sort onSortChange={setSelectedSort}/>
			<Filter filterGreased={filterGreased} onfilterGreased={setFilterGreased}/>
			<HogList hogArray={hogs} filterGreased={filterGreased} selectedSort={selectedSort}/>
		</div>
	);
}

export default App;