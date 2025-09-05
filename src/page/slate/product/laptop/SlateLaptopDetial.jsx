import Single1Img from "../../../../assets/images/portfolio/laptop.png";
import Single2Img from "../../../../assets/images/portfolio/p_single2.png";
import Star2Img from "../../../../assets/images/v1/star2.png";
import FadeInRight from "../../../../components/animation/FadeInRight";
import FadeInUp from "../../../../components/animation/FadeInLeft";
import ArrowRightImg from "../../../../assets/images/icon/arrow-right.svg";
const projectResolveSteps = [
	{
		id: crypto.randomUUID(),
		title: "INTRO Laptop",
		text: "Slate Intro is designed for those who understand the need for proformance and durability, but require budget friendly laptop. ",
	},
	{
		id: crypto.randomUUID(),
		title: "STANDARD Laptop",
		text: "This is ideal for those need more than web browsing: coding, AutoCAD basics, Canvas, Adobe Suite, video editing (Premiere Pro, Davinci Resolve), UI/UX tools (Figma, XD) and large project files.",
	},
	{
		id: crypto.randomUUID(),
		title: "ULTRA Laptop",
		text: "Designed for those who demand the best in speed, graphics and performance, often working on complex projects or high-end creative work.",
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
									Slate Laptop Series	
									</span>
								</h2>
								<p>
									<b>AKINBOWALE: THE KING WHO BECAME A LEGEND. THE LEGEND WHO BECOME A LAPTOP</b><br/>
									In the ancient kingdom of Yoruba, where the sun kissed the earth and the rivers sang 
									with wisdom, there lived a warrior named Akin. He was no ordinary hunter. 
									When leopards stalked the villages, Akin faced them bare-handed. When drought scorched 
									the fields, Akin journeyed to the spirit world to beg for rain. His hands bore scars from 
									battles fought, but his heart carried the tenderness of a protector. He did not seek power
									 he sought provision for his people and protection for their dreams. 
									 <a href=""> Read more<img src={ArrowRightImg} alt="arrow right" /></a>
								</p>
								
								<div className="aximo-resolve-project-wrap">
									{projectResolveSteps.map((item, index) => (
										<div key={item.id} className="aximo-resolve-project-item">
											<h3>
												{index + 1}. {item.title}:
											</h3>
											<p>{item.text} <a href="/pricing"> product specification</a></p>
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
