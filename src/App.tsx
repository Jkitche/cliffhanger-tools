import React from "react";
import "./App.css";
import Bars from "./Bars.json";
import Progress from "./Progress/Progress";

const App: React.FC = (): React.ReactElement => {
	const progressList: React.ReactElement[] = [];

	Bars.forEach((bar: any, index: number): void => {
		const { color, progress } = bar;
		progressList.push(
			<Progress
				id={`${index}`}
				key={index}
				color={color}
				progress={progress}
			/>
		);
	});

	return <div className="App">{progressList}</div>;
};

export default App;
