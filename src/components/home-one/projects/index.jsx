import Star2Img from "../../../assets/images/v1/star2.png";
import Project1Img from "../../../assets/images/v1/project1.png";
import Project2Img from "../../../assets/images/v1/project2.png";
import Project3Img from "../../../assets/images/v1/project3.png";
import Project4Img from "../../../assets/images/v1/project4.png";
import ProjectCard from "./ProjectCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Mousewheel } from "swiper/modules";

const projectsData = [
	{
		id: crypto.randomUUID(),
		title: "Slate Laptop Series",
		description: "Built for students, Professionals and Creators who demand both speed and reliability. with slim all-metal designs, powerful processors, extended battery life and brilliant displays, you can carry your office your, classroon design ot business",
		img: Project1Img,
	},
	{
		id: crypto.randomUUID(),
		title: "Slate Power Bank",
		description: "Never get stranded with our rugged high-capacitz power bank. Designed for travellers, entrepreneurs and field engineers, it's your reliable backup in any condition",
		img: Project2Img,
	},
	{
		id: crypto.randomUUID(),
		title: "Slate Phone Series",
		description: "Stay connected with phones designed for clarity, style and intelligence. Featuring long lasting batteries, crystal- clear cameras advanced audio that isolated noise in crowded spaces,and customizable voice tones for calls",
		img: Project3Img,
	},
	{
		id: crypto.randomUUID(),
		title: "Slate Tab",
		description: "Our tablets are designed for students, managers, consultants and entrepreneurs who need flexibility without compromise.",
		img: Project4Img,
	},
	{
		id: crypto.randomUUID(),
		title: "Slate UPS -Smart Backup, smart Protection",
		description: "Our UPS system are more than just power backup, they are work of art. Designed like modern home decor, they blend into offices, classrooms and homes, while ensuring your devices never go off during sudden power outages.",
		img: Project1Img,
	},
	{
		id: crypto.randomUUID(),
		title: "Slate Desktop (All-in-One and Tower)",
		description: "From training centers to high end offices, our desktops are designed to save space and deliver raw performance",
		img: Project2Img,
	},
];

const swiperSettings = {
	spaceBetween: 24,
	direction: "horizontal",
	pagination: {
		clickable: true,
	},
	modules: [Pagination, Mousewheel],
	mousewheel: true,
	breakpoints: {
		640: {
			slidesPerView: 1,
		},
		900: {
			slidesPerView: 2,
		},
		1600: {
			slidesPerView: 3.5,
		},
	},
};
function Projects() {
	return (
		<div className="section dark-bg aximo-section-padding">
			<div className="container">
				<div className="aximo-section-title center light">
					<h2>
						Got Organized
						<span className="aximo-title-animation">
							Get SLATE
							<span className="aximo-title-icon">
								{/**<img src={Star2Img} alt="Star2Img" />**/}
							</span>
						</span>
					</h2>
				</div>
			</div>
			<div className="swiper aximo-project-slider">
				<Swiper {...swiperSettings}>
					{projectsData.map((project) => (
						<SwiperSlide key={project.id}>
							<ProjectCard project={project} />
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</div>
	);
}

export default Projects;
