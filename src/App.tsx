import React from "react";
import "./App.css";
import Progress from "./Progress/Progress";

const getQueryStringValue = (key: string): string => {
	return decodeURIComponent(
		window.location.search.replace(
			new RegExp(
				"^(?:.*[&\\?]" +
					encodeURIComponent(key).replace(/[.+*]/g, "\\$&") +
					"(?:\\=([^&]*))?)?.*$",
				"i"
			),
			"$1"
		)
	);
};

const App: React.FC = (): React.ReactElement => {
	const progressList = [];

	for (let i = 1; i <= 50; i++) {
		const queryValue = getQueryStringValue(`prog${i}`);
		if (queryValue && queryValue.length) {
			const [color, progress] = queryValue.split(",");
			progressList.push(
				<Progress
					id={`${i}`}
					key={i}
					color={`#${color}`}
					progress={parseInt(progress, 10)}
				/>
			);
		}
	}

	return (
		<div className="App">
			{progressList}
		</div>
	);
};

export default App;
