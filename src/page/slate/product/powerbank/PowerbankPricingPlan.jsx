import { useState } from "react";
//import StarImg from "../../../../assets/images/v1/icon/star2.png";
import FadeInStagger from "../../../../components/animation/FadeInStagger";
import PowerbankPricingCard from "./PowerbankPricingCard";

const pricingPlanData = [
    {
        id: crypto.randomUUID(),
        title: "SLATE MIN",
        tag: "FEATURES",
        price: [
            { id: 1, value: 399 },
            {
                id: 2,
                value: 499,
            },
        ],
        description: "",
        features: [
            "CAPACITY: 10,000mAh",
            "INPUT PORT: 1 USB-C PD(fast input), 1 micro-USB (legacy input)",
            "OUTPUT PORT: 2 USB-A (quick charge 3.0 + USB-C power ",
            "DISPLAY: minimal dot LED (4 steps bar + digital %)",
            "SAFETY FEATURES: overcharge protection,short-circuits protection, temperature control, auto cut-off",
         ],
        highlighted: false,
    },
    {
        id: crypto.randomUUID(),
        title: "SLATE MAX",
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
            "CAPACITY: 20000mAh",
            "INPUT PORT: 1 USB-C PD(fast input), 1 micro-USB (legacy input)",
            "OUTPUT PORT: 2 USB-A (quick charge 3.0 + 1 USB-C power",
            "DISPLAY: minimal dot LED (4 steps bar + digital %)",
            "SAFETY FEATURES: overcharge protection,short-circuits protection, temperature control, auto cut-off",
            
        ],
        highlighted: true,
    },
    {
        id: crypto.randomUUID(),
        title: "SLATE ULTRA",
        price: [
            { id: 1, value: 299 },
            {
                id: 2,
                value: 499,
            },
        ],
        description: " finish (slate colour),",
        tag: "FEATURES",
        features: [
            "CAPACITY: 30000mAh",
            "INPUT PORT: 1 USB-C PD(fast input), 1 micro-USB (legacy input)",
            "OUTPUT PORT: 3 USB-A (quick charge 3.0 + 1 USB-C power",
            "DISPLAY: Smart LED % display ",
            "SAFETY FEATURES: overcharge protection,short-circuits protection, temperature control, auto cut-off",
            
        ],
        highlighted: false,
    },
];
function PowerbankPricingPlan() {
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
                        Pick from one of our Power Bank
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
                            <PowerbankPricingCard plan={plan} frequency={frequency} />
                        </FadeInStagger>
                    ))}
                </div>
            </div>
        </div>
    );
}
export default PowerbankPricingPlan;
