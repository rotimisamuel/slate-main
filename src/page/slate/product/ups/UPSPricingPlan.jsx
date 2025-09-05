import { useState } from "react";
//import StarImg from "../../../../assets/images/v1/icon/star2.png";
import FadeInStagger from "../../../../components/animation/FadeInStagger";
import UPSPricingCard from "./UPSPricingCard";

const pricingPlanData = [
    {
        id: crypto.randomUUID(),
        title: "SLATE UPS-650",
        tag: "FEATURES",
        price: [
            { id: 1, value: 399 },
            {
                id: 2,
                value: 499,
            },
        ],
        description: " ",
        features: [
            "CAPACITY: 650 VA",
            "RATE OUTPUT POWER (Watts): 360W",
            "IDEAL LOAD: 1 desktop + router",
            "BACKUP TIME: 15min -20min",
            "OUTPUT VOLTAGE REGULATION: plus minus 10%",
            "TRANSFER TIME: <10ms",
            "INPUT VOLTAGE RANGE:220 - 240V",
        ],
        highlighted: false,
    },
    {
        id: crypto.randomUUID(),
        title: "SLATE UPS-1000",
        price: [
            { id: 1, value: 499 },
            {
                id: 2,
                value: 599,
            },
        ],
        description: " ",
        tag: "FEATURES",
        features: [
            "CAPACITY: 1000VA",
            "IDEAL LOAD: 2 desktop + monitor",
            "RATE OUTPUT POWER (Watts): 600W",
            "BACKUP TIME: 20min -30min",
            "TRANSFER TIME: <10ms",
             "OUTPUT VOLTAGE REGULATION: plus minus 10%",
            "INPUT VOLTAGE RANGE:220 - 240V",
            
        ],
        highlighted: true,
    },
    {
        id: crypto.randomUUID(),
        title: "SLATE UPS-2000",
        price: [
            { id: 1, value: 299 },
            {
                id: 2,
                value: 499,
            },
        ],
        description: "Designed for the future, a machine that can keep up with their vision, Ultra- slim (under 12mm thick), approximately 1.2kg, titanium alloy chassis with matte finish (slate colour),",
        tag: "FEATURES",
        features: [
            "CAPACITY: 2000VA",
            "RATE OUTPUT POWER (Watts): 1200W",
             "BACKUP TIME: 35min - 45min",
            "TRANSFER TIME: <10ms",
             "OUTPUT VOLTAGE REGULATION: plus minus 10%",
            "INPUT VOLTAGE RANGE:220 - 240V",
            
        ],
        highlighted: false,
    },
];
function UPSPricingPlan() {
    const frequencies = [
        { id: 1, label: "Annually" },
        { id: 2, label: "Monthly" },
    ];

    const [frequency, setFrequency] = useState(frequencies[0]);

    function handleChange(e) {
        if (e.target.checked) {
            setFrequency(frequencies[1]);
        } else {
            setFrequency(frequencies[0]);
        }
    }

    return (
        <div className="section aximo-section-padding3">
            <div className="container">
                <div className="aximo-pricing-title">
                    <h2>
                        Pick from one of our UPS
                    {/**<span className="aximo-title-animation">
                            ready packages
                            <span className="aximo-title-icon">
                                <img src={StarImg} alt="star" />
                            </span>
                        </span>**/}
                    </h2>
                </div>
                <div className="pricing-btn">
                    <label>Billed monthly</label>
                    <div className="toggle-btn">
                        <input
                            className="form-check-input btn-toggle price-deck-trigger"
                            type="checkbox"
                            onChange={handleChange}
                        />
                    </div>
                    <label>Billed annually</label>
                </div>
                <div className="row" id="table-price-value">
                    {pricingPlanData.map((plan, index) => (
                        <FadeInStagger className="col-xl-4 col-md-6" key={plan.id} index={index}>
                            <UPSPricingCard plan={plan} frequency={frequency} />
                        </FadeInStagger>
                    ))}
                </div>
            </div>
        </div>
    );
}
export default UPSPricingPlan;
