import Story from "../components/about/story";
import BreadCrumb from "../components/common/Breadcrumb";
import About from "../components/home-one/about";
import AutoSlider from "../components/home-one/auto-slider";
import Teams from "../components/home-one/teams";
// Teams images
import Team1Img from "../assets/images/team/team1.png";
import Team2Img from "../assets/images/team/team2.png";
import Team3Img from "../assets/images/team/team3.png";
import Team4Img from "../assets/images/team/team4.png";

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
		name: "Gold Samuel",
		designation: "Project Auditor",
		img: Team3Img,
	},
	{
		id: crypto.randomUUID(),
		name: "Ife Rotimi",
		designation: "Web Developer",
		img: Team4Img,
	},
];

function AboutUs() {
	return (
		<>
			<BreadCrumb title="About Us" />
			<About />
			<Story />
			<AutoSlider />
			<Teams teams={teamsData} />
		</>
	);
}

export default AboutUs;
