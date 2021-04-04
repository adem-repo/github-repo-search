import RepoIcon from "../../../assets/images/icons/RepoIcon";

import useClickOutside from "../../../utils/useClickOutside";

import './Dropdown.styles.scss';
import { useRef } from "react";

const Dropdown = props => {

	const { list, show, onClose } = props;
	const ref = useRef(null);

	useClickOutside(ref, onClose);

	const mappedList = list.map(item => (
		<div className='list-item' key={item.id}>
			<RepoIcon />
			<span className='text'>{ item.name }</span>
		</div>
	));

	const classNames = ['dropdown'];
	if (show) {
		classNames.push('show')
	}

	return (
		<div ref={ref} className={classNames.join(' ')}>
			{ mappedList }
		</div>
	);
};

export default Dropdown;