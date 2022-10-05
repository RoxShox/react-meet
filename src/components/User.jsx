import React from 'react'
import Favourites from './Favourites'
import Qualitie from './Qualitie'

const User = ({ _id, name, qualities, profession, rate, completedMeetings, handleDelete }) => {
	return (
		<>
			<tr key={_id}>
				<td>{name}</td>
				<td>
					{qualities.map(qual => (
						<Qualitie key={qual._id} {...qual} />
					))}
				</td>
				<td>{profession.name}</td>
				<td>{completedMeetings}</td>
				<td>{rate}</td>
				<td>
					<Favourites />
				</td>
				<td>
					{/* {' '}
					<button onClick={() => handleDelete(_id)} className={'btn btn-danger'}>
						Удалить
					</button> */}
				</td>
			</tr>
		</>
	)
}

export default User
