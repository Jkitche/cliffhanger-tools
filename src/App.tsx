import { Button, Grid } from "@material-ui/core";
import React from "react";
import "./App.css";
import Progress from "./Progress/Progress";

const App: React.FC = (): React.ReactElement => {
	const [numProgress, setNumProgress] = React.useState(3);
	const progressList = [];
	for (let i = 0; i < numProgress; i++) {
		progressList.push(<Progress id={`${i}`} />);
	}
	return (
		<div className="App">
			{progressList}
			<Grid container justify="space-evenly" style={{ width: 558 }}>
				<Grid item>
					<Button
						color="primary"
						variant="contained"
						onClick={(): void => {
							setNumProgress(numProgress - 1);
						}}
					>
						-
					</Button>
				</Grid>
				<Grid item>
					<Button
						color="primary"
						variant="contained"
						onClick={(): void => {
							setNumProgress(numProgress + 1);
						}}
					>
						+
					</Button>
				</Grid>
			</Grid>
		</div>
	);
};

export default App;
