import React from 'react'
import TableBody from './TableBody'
import TableHeader from './TableHeader'
import Favourites from './Favourites'
import QulitiesList from './QulitiesList'
import Table from './Table'

const UsersTable = ({ users, handleDelete, onSort, currentSort }) => {
	const columns = {
		name: { path: 'name', name: 'Имя' },
		qualities: {
			name: 'Качество',
			component: user => <QulitiesList qualities={user.qualities} />,
		},
		professions: { path: 'profession.name', name: 'Профессия' },
		completedMeetings: { path: 'completedMeetings', name: 'Встретился, раз' },
		rate: { path: 'rate', name: 'Оценка' },
		favourites: { path: 'bookmark', name: 'Избранное', component: <Favourites /> },
		delete: {
			component: user => (
				<button onClick={() => handleDelete(user._id)} className={'btn btn-danger'}>
					Удалить
				</button>
			),
		},
	}

	return <Table onSort={onSort} currentSort={currentSort} columns={columns} data={users} />
}

export default UsersTable
