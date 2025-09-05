import { useState } from "react";
//import StarImg from "../../../../assets/images/v1/icon/star2.png";
import FadeInStagger from "../../../../components/animation/FadeInStagger";
import TabletPricingCard from "./TabletPricingCard";

const pricingPlanData = [
    {
        id: crypto.randomUUID(),
        title: "CLASSIC",
        tag: "FEATURES",
        price: [
            { id: 1, value: 399 },
            {
                id: 2,
                value: 499,
            },
        ],
        description: "That device is lightweight, easy to carry and ready for note-taking, browsing, Value simplicity, battery longevity",
        features: [
            "CPU: Octa-core ARM Cortex-A76/A55 or Snapdragon 7 series",
            "RAM: 4GB",
            "STORAGE: 64GB",
            "Screen: 10.1 inch Full HD+ (1920x1200) or QHD+ IPS LCD",
            "OS: Android 14",
            "CONNECTIVITY: Wi-Fi 5, Bluetooth 5, 4G LTE (SIM), USB-C (charging + OTG)",
            "Sleek and durable built for everyday",
            "CAMERA: 13MP AF + LED flash, ",
        ],
        highlighted: false,
    },
    {
        id: crypto.randomUUID(),
        title: "BUSINESS",
        price: [
            { id: 1, value: 499 },
            {
                id: 2,
                value: 599,
            },
        ],
        description: "Slate Business Tab is designed for managers, consultants and entrepreneurs who need flexibility without compromise",
        tag: "FEATURES",
        features: [
            "CPU: Octa-core ARM Cortex-A76/A55 or Snapdragon 7 series",
            "RAM: 12GB",
            "STORAGE: 126GB",
            "OS: Android 14",
            "CONNECTIVITY: Wi-Fi 6, Bluetooth 5.1, 4G LTE (SIM + eSIM support)",
            "SCREEN: 11.1 inch Full HD+ (1920x1200) or QHD+ IPS LCD ",
            "BATTERY: 9000mAh",
            
        ],
        highlighted: true,
    },
    {
        id: crypto.randomUUID(),
        title: "ELITE",
        price: [
            { id: 1, value: 299 },
            {
                id: 2,
                value: 499,
            },
        ],
        description: "Designed for class, premium performance, high end design, Cutting-edge features, luxury.  ",
        tag: "FEATURES",
        features: [
            "CPU: Octa-core ARM Cortex-A76/A55 or Snapdragon 7 series",
            "RAM: 16GB DDR4 / LPDDR5 (expandable to 32GB )",
            "STORAGE: 256 GB",
            "OS: Android 14 ",
            "SCREEN: 12.4 Full HD+ (1920x1200) or QHD+ IPS LCD",
            "CONNECTIVITY: Wi-Fi 6E, 4G LTE (SIM + eSIM support, Bluetooth 5.3",
            "BATTERY: 1000mAh",
            
        ],
        highlighted: false,
    },
];
function TabletPricingPlan() {
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
                        Pick from one of our Tablets
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
                            <TabletPricingCard plan={plan} frequency={frequency} />
                        </FadeInStagger>
                    ))}
                </div>
            </div>
        </div>
    );
}
export default TabletPricingPlan;
