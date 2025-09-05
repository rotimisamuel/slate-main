import Single1Img from "../../../../assets/images/portfolio/Tab.png";
import Single2Img from "../../../../assets/images/portfolio/p_single2.png";
//import Star2Img from "../../../../assets/images/v1/star2.png";
import FadeInRight from "../../../../components/animation/FadeInRight";
import FadeInUp from "../../../../components/animation/FadeInLeft";
import ArrowRightImg from "../../../../assets/images/icon/arrow-right.svg";
const projectResolveSteps = [
    {
        id: crypto.randomUUID(),
        title: "CLASSIC Tablet",
        text: " This tablet is built to be durable, reliable, and student-friendly — a study partner that never fails, battery-life longevity",
    },
    {
        id: crypto.randomUUID(),
        title: "BUSINESS Tablet",
        text: "The Business Tablet is built for productivity. it's not just a tablet-it's your portable office, Enterprise-grade security features to protect your data.",
    },
    {
        id: crypto.randomUUID(),
        title: "ELITE Tablet",
        text: "Elite Tablet is designed for C-Suite executive, luxury brand creative director, elite tech enthusiast, Encrypted data vault — top-level business security. Not just a tool, but a symbol of status ",
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
                                    Slate Tablet Series	
                                    </span>
                                </h2>
                                <p>
                                    <b>Slate Tablet - Work, Create and Inspire Anzwhere</b><br/>
                                    Our tablets are designed for managers, consultants and entrepreneurs who need flexibility without compromise. Lightweight and portable with premium finishing.
                                   works perfectly as a bridge between phone and laptop
                                     <a href=""> Read more<img src={ArrowRightImg} alt="arrow right" /></a>
                                </p>
                                
                                <div className="aximo-resolve-project-wrap">
                                    {projectResolveSteps.map((item, index) => (
                                        <div key={item.id} className="aximo-resolve-project-item">
                                            <h3>
                                                {index + 1}. {item.title}:
                                            </h3>
                                            <p>{item.text} <a href="/tablet-spec"> check product specification</a></p>
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
