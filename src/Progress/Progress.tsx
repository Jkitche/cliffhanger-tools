import LinearProgress from "@material-ui/core/LinearProgress";
import { lighten, makeStyles, withStyles } from "@material-ui/core/styles";
import React from "react";

const useStyles = makeStyles((theme: any) => ({
	margin: {
		margin: theme.spacing(1),
	},
	root: {
		flexGrow: 1,
	},
}));

interface IProgressProps {
	id: string;
	color: string;
	progress: number;
}

const Progress: React.FC<IProgressProps> = (
	props: IProgressProps
): React.ReactElement => {
	const classes = useStyles(props);
	const { color, progress } = props;

	const BorderLinearProgress = withStyles({
		bar: {
			backgroundColor: `${color}`,
			borderRadius: 20,
		},
		root: {
			backgroundColor: lighten(`${color}`, 0.5),
			borderRadius: 20,
			height: 10,
		},
	})(LinearProgress);

	const id = `simple-popover-${props.id}`;

	return (
		<div
			style={{
				cursor: "pointer",
				margin: "30px",
			}}
		>
			<BorderLinearProgress
				aria-describedby={id}
				className={classes.margin}
				variant="determinate"
				color="secondary"
				value={progress}
				style={{ width: "500px" }}
			/>
		</div>
	);
};

export default Progress;
