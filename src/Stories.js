import React from "react";

import { useGlobalContext } from "./context";

const Stories = () => {
	const { REMOVE_STORY, state, dispatch } = useGlobalContext();
	const { loading, news } = state;

	if (loading) {
		return <div className="loading"></div>;
	}

	return (
		<section className="stories">
			{news.map((story) => {
				const {
					title,
					url,
					points,
					author,
					num_comments,
					objectID: id,
				} = story;
				return (
					<article key={id} className="story">
						<h4>{title}</h4>
						<p className="info">
							{`${points} points by `}
							<span>{`${author} | `}</span>
							{`${num_comments} comments`}
						</p>
						<div>
							<a
								href={url}
								className="read-link"
								target="_blank"
								rel="noopener noreferrer"
							>
								read more
							</a>
							<button
								className="remove-btn"
								onClick={() =>
									dispatch({
										type: REMOVE_STORY,
										payload: id,
									})
								}
							>
								remove
							</button>
						</div>
					</article>
				);
			})}
		</section>
	);
};

export default Stories;
