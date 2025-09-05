import Single1Img from "../../../../assets/images/portfolio/ups.png";
import Single2Img from "../../../../assets/images/portfolio/p_ups.png";
//import Star2Img from "../../../../assets/images/v1/star2.png";
import FadeInRight from "../../../../components/animation/FadeInRight";
import FadeInUp from "../../../../components/animation/FadeInLeft";
import ArrowRightImg from "../../../../assets/images/icon/arrow-right.svg";
const projectResolveSteps = [
    {
        id: crypto.randomUUID(),
        title: "SLATE UPS650",
        text: "The UPS-650VA is the perfect entry-level solution for personal use and small offices. Provides backup power for essential devices like routers, PCs and small electronics. Sleek, modern artifact-inspired design that blends into your home or office decor ",
    },
    {
        id: crypto.randomUUID(),
        title: "SLATE UPS-1000",
        text: "The UPS-1000VA is built for professionals who rely on uninterrupted workflow. Keeps desktops, POS systems CCTV and routers running during outages. Intelligent auto-voltage regulation for steady power flow. ",
    },
    {
        id: crypto.randomUUID(),
        title: "SLATE UPS-2000",
        text: "The UPS-2000VA is designed for businesses that can't afford downtime. Supports multiple desktops, servers and critical equipment simultaneously. Long-lasting power backup with intelligent battery management. ",
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
                                    Slate UPS Series	
                                    </span>
                                </h2>
                                <p>
                                    <b>RELIABLE POWER, SLATE PROTECTION</b><br/>
                                    Power outages can strike at any moment, but with Slate Technology UPS, your devices and data are always protected. 
                                    Designed for homes, offices and enterprises, our UPS systems combine modern design, intelligent voice alerts and 
                                    reliable backup performance to keep zou powered without interruption.
                                    
                                     <a href=""> Read more<img src={ArrowRightImg} alt="arrow right" /></a>
                                </p>
                                
                                <div className="aximo-resolve-project-wrap">
                                    {projectResolveSteps.map((item, index) => (
                                        <div key={item.id} className="aximo-resolve-project-item">
                                            <h3>
                                                {index + 1}. {item.title}:
                                            </h3>
                                            <p>{item.text} <a href="/ups-capacities"> check product specification</a></p>
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
