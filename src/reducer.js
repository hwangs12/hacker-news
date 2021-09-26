import {
	SET_LOADING,
	SET_STORIES,
	REMOVE_STORY,
	HANDLE_PAGE,
	HANDLE_SEARCH,
} from "./actions";

const reducer = (state, action) => {
	if (action.type === SET_LOADING) {
		return {
			...state,
			...action.payload,
		};
	}

	if (action.type === SET_STORIES) {
		return {
			...state,
			...action.payload,
		};
	}

	if (action.type === REMOVE_STORY) {
		const newStories = state.news.filter(
			(story) => story.objectID !== action.payload
		);

		return {
			...state,
			news: newStories,
		};
	}

	if (action.type === HANDLE_PAGE) {
		if (action.payload === "prev") {
			if (state.page === 0) {
				return {
					...state,
					page: 49,
				};
			}
			const prevPage = state.page - 1;
			return {
				...state,
				page: prevPage,
			};
		}

		if (action.payload === "next") {
			if (state.page === 49) {
				return {
					...state,
					page: 0,
				};
			}
			const nextPage = state.page + 1;
			return {
				...state,
				page: nextPage,
			};
		}
	}

	if (action.type === HANDLE_SEARCH) {
		return {
			...state,
			query: action.payload,
		};
	}
};
export default reducer;
