import React from 'react'

const TableHeader = ({ onSort, currentSort, columns }) => {
	const handleSort = item => {
		if (currentSort.path === item) {
			onSort({ ...currentSort, order: currentSort.order === 'asc' ? 'desc' : 'asc' })
		} else {
			onSort({ path: item, order: 'asc' })
		}
	}
	const renderSortArrow = (selectSort, currentPath) => {
		if (currentPath === selectSort.path) {
			if (selectSort.order === 'asc') {
				return (
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="16"
						height="16"
						fill="currentColor"
						class="bi bi-caret-down-fill"
						viewBox="0 0 16 16">
						<path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
					</svg>
				)
			} else {
				return (
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="16"
						height="16"
						fill="currentColor"
						class="bi bi-caret-up-fill"
						viewBox="0 0 16 16">
						<path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z" />
					</svg>
				)
			}
		}

		return null
	}

	return (
		<thead>
			<tr>
				{Object.keys(columns).map(column => (
					<th
						key={column}
						onClick={columns[column].path ? () => handleSort(columns[column].path) : undefined}
						{...{ role: columns[column].path && 'button' }}>
						{columns[column].name} {renderSortArrow(currentSort, columns[column].path)}
					</th>
				))}
			</tr>
		</thead>
	)
}

export default TableHeader
