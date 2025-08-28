import Star3Img from "../../../assets/images/v1/star3.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

const sliderData = [
	{
		id: crypto.randomUUID(),
		title: "Slate Laptop Series",
		img: Star3Img,
	},
	{
		id: crypto.randomUUID(),
		title: "Buy Now Pay Gradually",
		img: Star3Img,
	},
	{
		id: crypto.randomUUID(),
		title: "Slate Phone Series",
		img: Star3Img,
	},
	{
		id: crypto.randomUUID(),
		title: "Slate Power Bank",
		img: Star3Img,
	},
	{
		id: crypto.randomUUID(),
		title: "Slate Tab",
		img: Star3Img,
	},
	{
		id: crypto.randomUUID(),
		title: "Slate Desktop",
		img: Star3Img,
	},
	{
		id: crypto.randomUUID(),
		title: "Slate UPS",
		img: Star3Img,
	},
	{
		id: crypto.randomUUID(),
		title: "Let's create new experiences",
		img: Star3Img,
	},
	{
		id: crypto.randomUUID(),
		title: "Slate : your Catalyst for constant Evolution ",
		img: Star3Img,
	},
	{
		id: crypto.randomUUID(),
		title: "Slate your journey forward start here",
		img: Star3Img,
	},
	{
		id: crypto.randomUUID(),
		title: "Slate: Technology that grow with you",
		img: Star3Img,
	},
	{
		id: crypto.randomUUID(),
		title: "Let's create new experiences",
		img: Star3Img,
	},
	{
		id: crypto.randomUUID(),
		title: "Let's create new experiences",
		img: Star3Img,
	},
	{
		id: crypto.randomUUID(),
		title: "Let's create new experiences",
		img: Star3Img,
	},
	{
		id: crypto.randomUUID(),
		title: "Let's create new experiences",
		img: Star3Img,
	},
	{
		id: crypto.randomUUID(),
		title: "Let's create new experiences",
		img: Star3Img,
	},
	{
		id: crypto.randomUUID(),
		title: "Let's create new experiences",
		img: Star3Img,
	},
	{
		id: crypto.randomUUID(),
		title: "Let's create new experiences",
		img: Star3Img,
	},
	{
		id: crypto.randomUUID(),
		title: "Let's create new experiences",
		img: Star3Img,
	},
	{
		id: crypto.randomUUID(),
		title: "Let's create new experiences",
		img: Star3Img,
	},
	{
		id: crypto.randomUUID(),
		title: "Let's create new experiences",
		img: Star3Img,
	},
	{
		id: crypto.randomUUID(),
		title: "Let's create new experiences",
		img: Star3Img,
	},
];

const swiperSettings = {
	centeredSlides: true,
	speed: 6000,
	autoplay: {
		delay: 1,
	},
	loop: true,
	slidesPerView: "auto",
	allowTouchMove: false,
	modules: [Autoplay],
	// slidesPerView: 1,
	// breakpoints: {
	// 	1200: {
	// 		slidesPerView: 2,
	// 	},
	// 	1400: {
	// 		slidesPerView: 2.5,
	// 	},
	// },
};

function AutoSlider() {
	return (
		<div className="aximo-auto-slider-section">
			<div className="swiper aximo-auto-slider">
				{
					<Swiper {...swiperSettings}>
						{sliderData.map((item) => (
							<SwiperSlide key={item.id}>
								<div className="aximo-auto-slider-item">
									<h3>{item.title}</h3>
									<img src={item.img} alt={item.title} />
								</div>
							</SwiperSlide>
						))}
					</Swiper>
				}
			</div>
		</div>
	);
}

export default AutoSlider;
