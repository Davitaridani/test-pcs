import React from 'react'
import { dataNotification } from "../../contants";

const Notification = () => {
	return (
		<>

			<h3></h3>

			{dataNotification?.map((item, i) => (
				<div className="d-flex align-items-center justify-content-between item-notif" key={i}>

					<div className="img-profile">
						<img src={item.imgUrl} alt="icon" className='img-fluid' />
					</div>
					<div className="items-text">
						<h5>{item.title}</h5>
						<p>{item.desc}</p>
					</div>
					<div className="date">
						<p>{item.date}</p>
					</div>
				</div>
			))}

		</>
	)
}

export default Notification
