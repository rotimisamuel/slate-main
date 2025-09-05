import Single1Img from "../../../../assets/images/portfolio/p_3.png";
import Single2Img from "../../../../assets/images/portfolio/p_single2.png";
//import Star2Img from "../../../../assets/images/v1/star2.png";
import FadeInRight from "../../../../components/animation/FadeInRight";
import FadeInUp from "../../../../components/animation/FadeInLeft";
import ArrowRightImg from "../../../../assets/images/icon/arrow-right.svg";
const projectResolveSteps = [
    {
        id: crypto.randomUUID(),
        title: "LITE (All-in-One Compact) Space-saving | Efficient | Reliable",
        text: " The LITE is designed for training centres, students and offices that value simplicity and elegance",
    },
    {
        id: crypto.randomUUID(),
        title: "PRO (Tower + Monitor) High performance | Expandable | Professional Use",
        text: "The PRO desktop is built for power users, developers and professionals who need serious computing strength",
    },
    {
        id: crypto.randomUUID(),
        title: "PRO LITE  (All in one Screnouch) Modern | Interactive | High-Tech",
        text: "The PRO LITE takes productivity to the next level with an all-in-one touchscreen experience",
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
                                    Slate Desktop	
                                    </span>
                                </h2>
                                <p>
                                    <b>SLATE DESKTOP</b><br/>
                                    From classrooms to offices to creative studios, our Slate Tech Desktop Series brings performance, elegance and reliability to every workspace. Whether zou need a compact all-in-one, a powerful tower setup or a touchscreen system, we've got you covered.
                                     <a href=""> Read more<img src={ArrowRightImg} alt="arrow right" /></a>
                                </p>
                                
                                <div className="aximo-resolve-project-wrap">
                                    {projectResolveSteps.map((item, index) => (
                                        <div key={item.id} className="aximo-resolve-project-item">
                                            <h3>
                                                {index + 1}. {item.title}:
                                            </h3>
                                            <p>{item.text} <a href="/desktop-spec"> check product specification</a></p>
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
