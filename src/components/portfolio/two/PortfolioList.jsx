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
		description: "Portable, Sleek and Powerful.",
		img: Portfolio1Img,
		url: "/slate-laptop",
		
	},
	{
		id: crypto.randomUUID(),
		title: "Slate Tablet",
		description: "Flexibility for managers, consultants and entrepreneurs on the go.",
		img: Portfolio2Img,
		url: "/slate-tablet",
	},
	{
		id: crypto.randomUUID(),
		title: "Slate Phone",
		description: "Long-lasting, stylish and Smart.",
		img: Portfolio3Img,
		url: "/slate-phone",
	},
	{
		id: crypto.randomUUID(),
		title: "Slate Powerbank",
		description: "Rugged and reliable energy on the go.",
		img: Portfolio4Img,
		url: "/slate-powerbank",
	},
	{
		id: crypto.randomUUID(),
		title: "Desktop (All-in-one & Tower)",
		description:
			"For training centres, offices, studios and professionals.",
		img: Portfolio5Img,
		url: "/slate-desktop",	
	},
	{
		id: crypto.randomUUID(),
		title: "UPS",
		description:
			"Backups power that keeps zou connected.",
		img: Portfolio6Img,
		url:"/slate-ups"
	},
	{
		id: crypto.randomUUID(),
		title: "Slate Gadgets",
		description:
			"Shop Now, Own Now. Paz Your Way",
		img: Portfolio7Img,
		url: "/slate-gadget",
	},
	{
		id: crypto.randomUUID(),
		title: "Slate VR",
		description:
			"Affordable price with flexible installment plans.",
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
