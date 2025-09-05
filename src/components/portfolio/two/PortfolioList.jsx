import Portfolio1Img from "../../../assets/images/portfolio/laptop.png";
import Portfolio2Img from "../../../assets/images/portfolio/Tab.png";
import Portfolio3Img from "../../../assets/images/portfolio/p_3.png";
import Portfolio4Img from "../../../assets/images/portfolio/p_4.png";
import Portfolio5Img from "../../../assets/images/portfolio/p_5.png";
import Portfolio6Img from "../../../assets/images/portfolio/ups.png";
import Portfolio7Img from "../../../assets/images/portfolio/p_7.png";
import Portfolio8Img from "../../../assets/images/portfolio/p_8.png";
import FadeInStagger from "../../animation/FadeInStagger";
import PortfolioCard from "./PortfolioCard";

const portfolioListData = [
	{
		id: crypto.randomUUID(),
		title: "Slate Laptop",
		description: "Developing the look and feel of physical products, aesthetics, and functionality.",
		img: Portfolio1Img,
		url: "/slate-laptop",
		
	},
	{
		id: crypto.randomUUID(),
		title: "Slate Tablet",
		description: "Creating or refreshing a companys logo and developing a cohesive visual identity.",
		img: Portfolio2Img,
		url: "/slate-tablet",
	},
	{
		id: crypto.randomUUID(),
		title: "Slate Phone",
		description: "Designing the UI/UX for mobile apps and web applications to ensure usability & engagement.",
		img: Portfolio3Img,
		url: "/slate-phone",
	},
	{
		id: crypto.randomUUID(),
		title: "Slate Powerbank",
		description: "Creating packaging solutions for products that not only protect attract customers on store.",
		img: Portfolio4Img,
		url: "/slate-powerbank",
	},
	{
		id: crypto.randomUUID(),
		title: "Desktop (All-in-one & Tower)",
		description:
			"Designing trade show booths, exhibition spaces, and immersive installations for events and conferences.",
		img: Portfolio5Img,
		url: "/slate-desktop",	
	},
	{
		id: crypto.randomUUID(),
		title: "UPS",
		description:
			"Designing trade show booths, exhibition spaces, and immersive installations for events and conferences.",
		img: Portfolio6Img,
		url:"/slate-ups"
	},
	{
		id: crypto.randomUUID(),
		title: "Slate Gadgets",
		description:
			"Developing creative concepts for print, digital, and video advertising campaigns, including ad design and copywriting",
		img: Portfolio7Img,
		url: "/slate-gadget",
	},
	{
		id: crypto.randomUUID(),
		title: "Slate VR",
		description:
			"Designing and building user-friendly websites that are visually appealing and responsive to different devices.",
		img: Portfolio8Img,
		url: "/slate-laptop",
	},
];
function PortfolioList() {
	return (
		<div className="section aximo-project-page aximo-section-padding5">
			<div className="container">
				<div className="row">
					{portfolioListData.map((portfolio, index) => (
						<FadeInStagger className="col-lg-6" key={portfolio.id} index={index}>
							<PortfolioCard portfolio={portfolio} />
						</FadeInStagger>
					))}
				</div>
			</div>
		</div>
	);
}

export default PortfolioList;
