import React from 'react';

const SearchStatus = ({ users }) => {
	const renderPhrase = () => {
		if (users.length > 4 || users.length < 2) return 'Человек тусанёт';
		return 'человека тусанут';
	};

	return (
		<>
			<span className={'badge bg-' + (users.length > 0 ? 'primary' : 'danger')}>
				{users.length > 0
					? `${users.length} ${renderPhrase()} с тобой сегодня`
					: 'Никто с тобой не тусанёт'}
			</span>
		</>
	);
};

export default SearchStatus;
