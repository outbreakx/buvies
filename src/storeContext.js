import React, { createContext, useState, useContext } from "react";

export const StoreContext = createContext();

const StoreProvider = (props) => {
	const [genres, setGenres] = useState([]);
	const [filter, setFilter] = useState(0);
	const [searchContent, setSearchContent] = useState("");

	const storeData = {
		genres, setGenres,
		filter, setFilter,
		searchContent, setSearchContent
	};
	return <StoreContext.Provider value={storeData} {...props}/>;
}

const useStoreContext = () => {
	return useContext(StoreContext);
}

export {StoreProvider, useStoreContext};