import Star2Img from "../../../assets/images/v1/star2.png";
import Thumb1Img from "../../../assets/images/v1/t_thumb1.png";
import Thumb2Img from "../../../assets/images/v1/t_thumb2.png";
import Thumb3Img from "../../../assets/images/v1/t_thumb3.png";
import Thumb4Img from "../../../assets/images/v1/t_thumb4.png";
import FadeInStagger from "../../animation/FadeInStagger";
import TestimonialCard from "./TestimonialCard";

const testimonialsData = [
	{
		id: crypto.randomUUID(),
		rating: 5,
		title: "Game Changer!",
		description:
			"SLATE, made it possible to get my laptop for school and pay in small bits.",
		author: "Chiamaka",
		designation: "UNILAG",
		img: Thumb1Img,
	},
	{
		id: crypto.randomUUID(),
		rating: 4,
		title: "Reliable delivery. Excellent Support",
		description:
			"Their UPS saved our entire team during a power outage",
		author: "Tunde",
		designation: "Lead Software LTD",
		img: Thumb2Img,
	},
	{
		id: crypto.randomUUID(),
		rating: 5,
		title: "Innovative and professional",
		description:
			"I can't say enough good things about them. Their team is not only incredibly talented but also highly professional. Their innovative approach and dedication to our project.",
		author: "Chinadu Nkwa",
		designation: "CBT",
		img: Thumb3Img,
	},
	{
		id: crypto.randomUUID(),
		rating: 4,
		title: "Transformed our Institute",
		description:
			"Our partnership with Slate Technology has transformed our working style seamlessly. Their expertise and gedgets has elevated our  institute to a whole new level.",
		author: "Dr. Tolu,",
		designation: " ACM University",
		img: Thumb4Img,
	},
];

function Testimonial() {
	return (
		<div className="section aximo-section-padding3">
			<div className="container">
				<div className="aximo-section-title center">
					<h2>
						Clients are always
						<span className="aximo-title-animation">
							satisfied with us
							<span className="aximo-title-icon">
								{/**<img src={Star2Img} alt="Star2Img" />**/}
							</span>
						</span>
					</h2>
				</div>
				<div className="row">
					{testimonialsData.map((testimonial, index) => (
						<FadeInStagger index={index} className="col-lg-6" key={testimonial.id}>
							<TestimonialCard testimonial={testimonial} />
						</FadeInStagger>
					))}
				</div>
			</div>
		</div>
	);
}

export default Testimonial;
