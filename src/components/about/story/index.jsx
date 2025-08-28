import Star2Img from "../../../assets/images/v1/star2.png";
import StoryContent from "./StoryContent";
import StoryPhotos from "./StoryPhotos";
function Story() {
	return (
		<div className="section aximo-section-padding6">
			<div className="container">
				<div className="aximo-section-title center title-description">
					<h2>
						<span className="aximo-title-animation">
							Built for Leaders
							<span className="aximo-title-icon">
							{/**	<img src={Star2Img} alt="star" />**/}
							</span><br/>
						</span>
						Designed for the Future
					</h2>
					<p>
						At Slate Technology, we believe technolgy should not only keep pace with the future
						it should define it. Founded on a vision to empower leaders, innovators 
						and high achievers, we design and deliver products that merge cutting-edge 
						innovation with timeless sophistication
					</p>
				</div>

				<StoryPhotos />

				<div className="aximo-story-content">
					<StoryContent />
				</div>
			</div>
		</div>
	);
}

export default Story;
