import About from "../../components/home-one/about";
import AutoSlider from "../../components/home-one/auto-slider";
import Hero from "../../components/home-one/hero";
import Projects from "../../components/home-one/projects";
import Services from "../../components/home-one/services";
import Teams from "../../components/home-one/teams";
import Testimonial from "../../components/home-one/testimonial";
import WhyChooseUs from "../../components/home-one/why-choose-us";

// Teams images
import Team1Img from "../../assets/images/team/team1.png";
import Team2Img from "../../assets/images/team/team2.png";
import Team3Img from "../../assets/images/team/team3.png";
import Team4Img from "../../assets/images/team/team4.png";

const servicesData = [
	{
		id: crypto.randomUUID(),
		title: "Slate Laptops",
		description:
			"Our Laptops are built for students, professionals and creators who demand both speed and reliability. with slim designs, shock absorbant, powerful processors, and long-lasting battery life.",
		icon: "icon-design-tools",
	},
	{
		id: crypto.randomUUID(),
		title: "Slate Phones",
		description:
			"Stayconnected with phones designed for clarity, style and intelligence. featuring long lasting batteries, crystal-clear cameras and advanced audio that isolated noise in crowded spaces. and customizable voice tones for calls.",
		icon: "icon-branding",
	},
	{
		id: crypto.randomUUID(),
		title: "Slate Power Banks",
		description:
			"Stay powered up with our Slate Power Banks, designed for efficiency and portability. Featuring fast charging capabilities and multiple device compatibility.",
		icon: "icon-web",
	},
	{
		id: crypto.randomUUID(),
		title: "Slate UPS",
		description:
			"Our UPS systems are more than just power backup, they are works of art. designed like modern home decor, they blend into offices, classrooms and homes, while ensuring your devices never go off during sudden power outages.",
		icon: "icon-design-thinking",
	},
];

const teamsData = [
	{
		id: crypto.randomUUID(),
		name: "Rotimi Samuel",
		designation: "CEO",
		img: Team1Img,
	},
	{
		id: crypto.randomUUID(),
		name: "Tamie Stephen",
		designation: "Project Manager",
		img: Team2Img,
	},
	{
		id: crypto.randomUUID(),
		name: "Martine Joy",
		designation: "Project Manager",
		img: Team3Img,
	},
	{
		id: crypto.randomUUID(),
		name: "Adam Straw",
		designation: "Web Developer",
		img: Team4Img,
	},
];

function HomeOne() {
	return (
		<>
			<Hero />
			<Services services={servicesData} />
			<About />
			<Projects />
			<WhyChooseUs />
			<Testimonial />
			<AutoSlider />
			<Teams teams={teamsData} />
		</>
	);
}

export default HomeOne;
