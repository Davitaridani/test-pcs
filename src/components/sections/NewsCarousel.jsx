import React from 'react'
import { Container } from "react-bootstrap";
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { dataCarousel } from "../../contants";

const NewsCarousel = () => {

	return (
		<>

			<section className='sect-cardCarousel'>
				<Container>
					<div className="title">
						<h1>PCS News</h1>
					</div>
					<Swiper
						slidesPerView={1}
						spaceBetween={20}
						freeMode={true}
						pagination={{
							clickable: true,
						}}
						modules={[FreeMode, Pagination]}
						className="mySwiper"
					>
						{dataCarousel?.map((item, i) => (
							<SwiperSlide key={i}>
								<div className="card-swiper">
									<div className="content-header d-flex justify-content-between align-items-center">
										<div className="content-left-carousel d-flex align-items-center">
											<img src={item.imgUrl} alt="profile" className='img-fluid' />
											<p>{item.name}</p>
										</div>
										<div className="content-right-carousel text-end">
											<span>{item.day}</span>
											<p>{item.date}</p>
										</div>
									</div>
									<div className="content-body">
										<p>{item.text1}</p>
										<p>{item.text2}</p>
										<p>{item.text3}</p>
										<p>{item.text4}</p>
									</div>
								</div>
							</SwiperSlide>
						))}
					</Swiper>
				</Container>
			</section>

		</>
	)
}

export default NewsCarousel
