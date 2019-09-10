import { Grid, Popover, TextField } from "@material-ui/core";
import LinearProgress from "@material-ui/core/LinearProgress";
import { lighten, makeStyles, withStyles } from "@material-ui/core/styles";
import React from "react";
import { SketchPicker } from "react-color";

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
}

const Progress: React.FC<IProgressProps> = (
	props: IProgressProps
): React.ReactElement => {
	const classes = useStyles(props);
	const [color, setColor] = React.useState("#000");
	const [progress, setProgress] = React.useState(50);
	const [anchorEl, setAnchorEl] = React.useState(null);

	const handleClick = (event: any): void => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = (): void => {
		setAnchorEl(null);
	};

	const open = Boolean(anchorEl);

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

	const updateProgress = (
		event: React.ChangeEvent<
			HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement
		>
	): void => {
		if (event.target && event.target.value) {
			setProgress(parseInt(event.target.value, 10));
		} else {
			setProgress(0);
		}
	};

	const updateColor = (newColor: any): void => {
		setColor(newColor.hex);
	};
	const id = open ? `simple-popover-${props.id}` : undefined;

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
				onClick={handleClick}
			/>
			<Popover
				id={id}
				open={open}
				anchorEl={anchorEl}
				onClose={handleClose}
				anchorOrigin={{
					horizontal: "center",
					vertical: "bottom",
				}}
				transformOrigin={{
					horizontal: "center",
					vertical: "top",
				}}
			>
				<Grid container justify="center">
					<Grid item>
						<TextField
							onChange={updateProgress}
							value={progress}
							variant="outlined"
							type="number"
							inputProps={{
								max: "100",
								min: "0",
								step: ".1",
								style: {
									padding: 5,
								},
							}}
						/>
					</Grid>
				</Grid>
				<SketchPicker onChangeComplete={updateColor} color={color} />
			</Popover>
		</div>
	);
};

export default Progress;
