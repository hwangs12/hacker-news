import React from "react";
import { useGlobalContext } from "./context";

const Buttons = () => {
	const { state, dispatch, HANDLE_PAGE } = useGlobalContext();

	return (
		<div className="btn-container">
			<button
				onClick={() => dispatch({ type: HANDLE_PAGE, payload: "prev" })}
			>
				prev
			</button>
			<p>{`${parseInt(state.page) + 1} of 50`}</p>
			<button
				onClick={() => dispatch({ type: HANDLE_PAGE, payload: "next" })}
			>
				next
			</button>
		</div>
	);
};

export default Buttons;
