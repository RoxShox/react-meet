import React from 'react'

const GroupList = ({ items, contentProp, valueProp, onItemSelect, selectedItem }) => {
	if (!Array.isArray(items)) {
		return (
			<ul className="list-group">
				{Object.keys(items).map(item => (
					<li
						onClick={() => onItemSelect(items[item])}
						key={items[item][contentProp]}
						className={'list-group-item' + (items[item] === selectedItem ? ' active' : '')}
						role="button">
						{items[item][valueProp]}
					</li>
				))}
			</ul>
		)
	}
	return (
		<ul className="list-group">
			{items.map(item => (
				<li
					onClick={() => onItemSelect(item)}
					key={items[contentProp]}
					className={'list-group-item' + (item === selectedItem ? ' active' : '')}
					role="button">
					{item[valueProp]}
				</li>
			))}
		</ul>
	)
}

GroupList.defaultProps = {
	contentProp: '_id',
	valueProp: 'name',
}

export default GroupList
