import './Icon.style.scss';

const Icon = props => {

	const { children, onClick, spin } = props;
	const classNames = ['icon-container'];

	if (onClick) {
		classNames.push('clickable-icon');
	}
	if (spin) {
		classNames.push('spin');
	}

	return (
		<div className={classNames.join(' ')} onClick={onClick}>
			{ children }
		</div>
	);
};

export default Icon;