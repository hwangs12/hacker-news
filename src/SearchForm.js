import React from "react";
import { useGlobalContext } from "./context";

const SearchForm = () => {
	const { state, dispatch, HANDLE_SEARCH } = useGlobalContext();

	return (
		<form className="search-form">
			<h2>search hacker news</h2>
			<input
				type="text"
				className="form-input"
				value={state.query}
				onChange={(e) =>
					dispatch({ type: HANDLE_SEARCH, payload: e.target.value })
				}
			/>
		</form>
	);
};

export default SearchForm;
