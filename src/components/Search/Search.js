import { useState } from 'react';

import Input from "./Input/Input";
import Dropdown from "./Dropdown/Dropdown";

import useDebounce from "../../utils/useDebounce";

import './Search.styles.scss';

async function findRepos(text) {
	const response = await fetch(`https://api.github.com/search/repositories?q=${text}+in:name+in:description+org:kraftvaerk`);
	return await response.json();
}

const Search = () => {

	const [text, setText] = useState('');
	const [repos, setRepos] = useState([]);
	const [searching, setSearching] = useState(false);

	const handleInputChange = (value) => {
		setText(value);
		if (!value) {
			setRepos([]);
		}
	}

	const handleInputClear = () => {
		setText('');
		setRepos([]);
	}

	const handleCloseDropdown = () => {
		setRepos([]);
	}

	useDebounce(
		() => {
			if (text.length > 2) {
				setSearching(true);
				try {
					findRepos(text)
						.then(data => {
							setRepos(data.items.sort((a, b) => a.name.localeCompare(b.name)));
							setSearching(false);
						})
				} catch (error) {
					setSearching(false);
				}
			}
		},
		500,
		[text]
	);

	const showDropdown = Boolean(repos.length) && Boolean(text.length);

	return (
		<div className='search'>
			<Input
				text={text}
				onChange={handleInputChange}
				onClear={handleInputClear}
				searching={searching}
			/>
			<Dropdown list={repos} show={showDropdown} onClose={handleCloseDropdown} />
		</div>
	);
};

export default Search;