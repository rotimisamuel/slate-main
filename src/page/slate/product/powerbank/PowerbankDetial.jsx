import Single1Img from "../../../../assets/images/portfolio/p_3.png";
import Single2Img from "../../../../assets/images/portfolio/p_single2.png";
//import Star2Img from "../../../../assets/images/v1/star2.png";
import FadeInRight from "../../../../components/animation/FadeInRight";
import FadeInUp from "../../../../components/animation/FadeInLeft";
import ArrowRightImg from "../../../../assets/images/icon/arrow-right.svg";
const projectResolveSteps = [
	{
		id: crypto.randomUUID(),
		title: "SLATE MIN- Compact, Lightweight, Everyday Power",
		text: "The MIN is perfect for students and everyday users who need a reliable backup without extra bulk",
	},
	{
		id: crypto.randomUUID(),
		title: "SLATE MAX- High-Capacity,  Durable, Smart features",
		text: "The MAX is designed for professionals and power users who can't afford downtime",
	},
	{
		id: crypto.randomUUID(),
		title: "SLATE ULTRA- Massive power, Travel-Ready, Multi-Device charging",
		text: "The ULTRA is for travellers, Engineers and responders who need all-day, all-week backup",
	},
];
function PortfolioDetails() {
	return (
		<div className="aximo-project-single-section">
			<div className="container">
				<FadeInUp className="aximo-project-single-thumb">
					<img src={Single1Img} alt="Single" />
				</FadeInUp>
				{/**<div className="aximo-project-info-wrap">
					<div className="aximo-project-info">
						<h3>Client:</h3>
						<p>Alfado Company,UK</p>
					</div>
					<div className="aximo-project-info">
						<h3>Date:</h3>
						<p>June</p>
					</div>
					<div className="aximo-project-info">
						<h3>Duration:</h3>
						<p>Two Months</p>
					</div>
					<div className="aximo-project-info">
						<h3>Cost:</h3>
						<p>50k USD</p>
					</div>
				</div>***/}
				<br/>
				<div className="aximo-project-single-wrap">
					<div className="row">
						<div className="col-lg-4 order-lg-2">
							<FadeInRight className="aximo-project-single-thumb2 ">
								<img src={Single2Img} alt="Single 2" />
							</FadeInRight>
						</div>
						<div className="col-lg-8">
							<div className="aximo-default-content m-right-gap">
								<h2>
									<span className="aximo-title-animation">
									Slate Phone Series	
									</span>
								</h2>
								<p>
									<b>SLATE POWER BANK</b><br/>
									Never get stranded with our rugged high-capacity power banks. Designed for travellers, entreneurs and field engineers. It's your reliable backup in any condition
									 <a href=""> Read more<img src={ArrowRightImg} alt="arrow right" /></a>
								</p>
								
								<div className="aximo-resolve-project-wrap">
									{projectResolveSteps.map((item, index) => (
										<div key={item.id} className="aximo-resolve-project-item">
											<h3>
												{index + 1}. {item.title}:
											</h3>
											<p>{item.text} <a href="/powerbank-capacities"> check product specification</a></p>
										</div>
									))}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default PortfolioDetails;
