import { Link } from "react-router-dom";
import ShapeImg from "../../../assets/images/v1/shape1.png";
import StarImg from "../../../assets/images/v1/star.png";
import User1Img from "../../../assets/images/v1/user1.png";
import User2Img from "../../../assets/images/v1/user2.png";
import User3Img from "../../../assets/images/v1/user3.png";
import { FadeInStaggerTwo, FadeInStaggerTwoChildren } from "../../animation/FadeInStaggerTwo";
function HeroContent() {
	return (
		<div className="aximo-hero-content">
			<FadeInStaggerTwo>
				<FadeInStaggerTwoChildren>
					<h1>
						<span className="aximo-title-animation">
							Start Fresh
							{/**<img src={StarImg} alt="StarImg" />**/}
						</span>{" "}
						Start SLATE
					</h1>
				</FadeInStaggerTwoChildren>
				<FadeInStaggerTwoChildren>
					<p>
						{`At Slate we believe technology should be powerful, affordable and accessible to everyone. From students to CEOs, Slate is here to equip you
						with premium tech products and flexible payment options that fit your lifestyle and budget
						 `}
					</p>
				</FadeInStaggerTwoChildren>
				<FadeInStaggerTwoChildren>
					<div className="aximo-hero-user-wrap">
						<div className="aximo-hero-user-thumb">
							<div className="aximo-hero-user-thumb-item">
								<img src={User1Img} alt="User1Img" />
							</div>
							<div className="aximo-hero-user-thumb-item">
								<img src={User3Img} alt="User3Img" />
							</div>
							<div className="aximo-hero-user-thumb-item">
								<img src={User2Img} alt="User2Img" />
							</div>
						</div>
						<div className="aximo-hero-user-data">
							<p>Powering Ambition Through Technology</p>
						</div>
					</div>
				</FadeInStaggerTwoChildren>
				<FadeInStaggerTwoChildren>
					<Link className="aximo-call-btn" to="/contact-us">
						Request for a Slate device <i className="icon-call"></i>
					</Link>
					<div className="aximo-hero-shape">
						<img src={ShapeImg} alt="ShapeImg" />
					</div>
				</FadeInStaggerTwoChildren>
			</FadeInStaggerTwo>
		</div>
	);
}

export default HeroContent;
