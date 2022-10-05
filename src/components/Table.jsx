import React from 'react'
import TableBody from './TableBody'
import TableHeader from './TableHeader'

const Table = ({ onSort, currentSort, columns, data, children }) => {
	return (
		<table className="table">
			{children || (
				<>
					<TableHeader onSort={onSort} currentSort={currentSort} columns={columns} />
					<TableBody columns={columns} data={data} />
				</>
			)}
		</table>
	)
}

export default Table
