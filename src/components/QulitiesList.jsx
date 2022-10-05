import React from 'react'
import Qualitie from './Qualitie'
const QulitiesList = ({ qualities }) => {
	return (
		<>
			{qualities.map(qual => (
				<Qualitie key={qual._id} {...qual} />
			))}
		</>
	)
}

export default QulitiesList
