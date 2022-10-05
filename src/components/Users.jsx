import React, { useEffect, useState } from 'react'
import '../App.css'
import Pagination from './Pagination'
import SearchStatus from './SearchStatus'
import { paginate } from '../utils/paginate'
import GroupList from './GroupList'
import api from '../api'
import UsersTable from './UsersTable'
import _ from 'lodash'
import API from '../api'

const Users = () => {
	const [currentPage, setCurrentPage] = useState(1)
	const [professions, setProfessions] = useState()
	const [selectItem, setSelectItem] = useState()
	const [sortBy, setSortBy] = useState({ path: 'name', order: 'asc' })
	const pageSize = 8

	const [users, setUsers] = useState()

	useEffect(() => {
		API.users.fetchAll().then(data => setUsers(data))
	}, [])

	const handleDelete = id => {
		setUsers(users.filter(user => user._id !== id))
	}

	useEffect(() => {
		api.professions.fetchAll().then(data => setProfessions(data))
	}, [])
	useEffect(() => {
		setCurrentPage(1)
	}, [selectItem])

	const handlePageChange = pageIndex => {
		setCurrentPage(pageIndex)
	}

	const handleProfessionSelect = item => {
		setSelectItem(item)
	}
	const handleSort = item => {
		setSortBy(item)
		if (sortBy.order === 'asc') {
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
	const filteredUsers =
		selectItem && selectItem._id
			? users.filter(user => JSON.stringify(user.profession) === JSON.stringify(selectItem))
			: users
	const sortedUsers = _.orderBy(filteredUsers, [sortBy.path], [sortBy.order])
	const userCrop = paginate(sortedUsers, currentPage, pageSize)
	const clearFilter = () => {
		setSelectItem(null)
	}
	if (!users) {
		return <h2 style={{ textAlign: 'center' }}>Загрузка пользователей</h2>
	}
	return (
		<div className="d-flex">
			{professions && (
				<div className="d-flex flex-column flex-shrink-0 p-3">
					<GroupList
						selectedItem={selectItem}
						items={professions}
						onItemSelect={handleProfessionSelect}
					/>
					<button onClick={clearFilter}>Все профессии</button>
				</div>
			)}
			<div className="d-flex flex-column">
				<h2>
					<SearchStatus users={filteredUsers} />
				</h2>
				{filteredUsers.length > 0 && (
					<UsersTable
						users={userCrop}
						handleDelete={handleDelete}
						onSort={handleSort}
						currentSort={sortBy}
					/>
				)}
				<div className="d-flex justify-content-center">
					<Pagination
						itemsCount={filteredUsers.length}
						currentPage={currentPage}
						pageSize={pageSize}
						onPageChange={handlePageChange}
					/>
				</div>
			</div>
		</div>
	)
}

export default Users
