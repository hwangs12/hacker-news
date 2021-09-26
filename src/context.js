import React, { useContext, useEffect, useReducer } from "react";

import {
	SET_LOADING,
	SET_STORIES,
	REMOVE_STORY,
	HANDLE_PAGE,
	HANDLE_SEARCH,
} from "./actions";
import reducer from "./reducer";

const API_ENDPOINT = "https://hn.algolia.com/api/v1/search?";

const initialState = { loading: false, news: [], page: 0, query: "" };

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState);

	useEffect(() => {
		const getUrl = async (page, query) => {
			try {
				dispatch({ type: SET_LOADING, payload: { loading: true } });
				const response = await fetch(
					`${API_ENDPOINT}query=${query}&page=${page}`
				);
				const data = await response.json();
				const news = data.hits;
				dispatch({ type: SET_STORIES, payload: { news: news } });
				dispatch({ type: SET_LOADING, payload: { loading: false } });
			} catch (error) {
				console.log(error);
				dispatch({ type: SET_LOADING, payload: { loading: false } });
			}
		};
		getUrl(state.page, state.query);
	}, [state.page, state.query]);
	console.log(state);
	return (
		<AppContext.Provider
			value={{
				HANDLE_SEARCH,
				HANDLE_PAGE,
				REMOVE_STORY,
				state,
				dispatch,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};
// make sure use
export const useGlobalContext = () => {
	return useContext(AppContext);
};

export { AppContext, AppProvider };
