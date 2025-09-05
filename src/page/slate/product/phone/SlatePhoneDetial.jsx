import Single1Img from "../../../../assets/images/portfolio/phone1.png";
import Single2Img from "../../../../assets/images/portfolio/p_single2.png";
import Star2Img from "../../../../assets/images/v1/star2.png";
import FadeInRight from "../../../../components/animation/FadeInRight";
import FadeInUp from "../../../../components/animation/FadeInLeft";
import ArrowRightImg from "../../../../assets/images/icon/arrow-right.svg";
const projectResolveSteps = [
	{
		id: crypto.randomUUID(),
		title: "SLATE FLEX",
		text: "Slate Flex, designed for those Who leaves home early in the morning, comes back late nights and needs a phone that last all day.  ",
	},
	{
		id: crypto.randomUUID(),
		title: "SLATE NOVA",
		text: "Slate Nova is designed for the creators who bend tech to their vibe not the other way around (Style meets power built for your everyday grind and glow",
	},
	{
		id: crypto.randomUUID(),
		title: "SLATE ELITE",
		text: "Designed Beyond premium, beyond boundaries, Designed for excellence, power, class and control in your palm.",
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
									<b>SLATE PHONE</b><br/>
									Stay connected with Slate Phones, designed for clarity, 
									style and intelligence. Featuring long-lasting batteries, 
									crystal- clear cameras, advanced audio that isolates noise in crowded
									 spaces and customizable voice tone for calls
									 <a href=""> Read more<img src={ArrowRightImg} alt="arrow right" /></a>
								</p>
								
								<div className="aximo-resolve-project-wrap">
									{projectResolveSteps.map((item, index) => (
										<div key={item.id} className="aximo-resolve-project-item">
											<h3>
												{index + 1}. {item.title}:
											</h3>
											<p>{item.text} <a href="/phone-spec"> check product specification</a></p>
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
