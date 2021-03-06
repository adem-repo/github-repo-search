import Icon from "./Icon/Icon";

const SpinnerIcon = props => (
	<Icon {...props}>
		<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path
				d="M9.9 0L9.7 1.01266C12.7 1.82278 15 4.55696 15 7.89873C15 11.8481 11.9 14.9873 8 14.9873C4.1 14.9873 1 11.8481 1 7.89873C1 4.55696 3.3 1.82278 6.3 1.01266L6.1 0C2.6 0.911392 0 4.1519 0 7.89873C0 12.3544 3.6 16 8 16C12.4 16 16 12.3544 16 7.89873C16 4.1519 13.4 0.911392 9.9 0Z"
				fill="#2F2F2F"/>
		</svg>
	</Icon>
);

export default SpinnerIcon;