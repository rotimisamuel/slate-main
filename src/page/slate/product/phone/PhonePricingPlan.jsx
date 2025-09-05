import { useState } from "react";
//import StarImg from "../../../../assets/images/v1/icon/star2.png";
import FadeInStagger from "../../../../components/animation/FadeInStagger";
import PhonePricingCard from "./PhonePricingCard";

const pricingPlanData = [
    {
        id: crypto.randomUUID(),
        title: "SLATE FLEX",
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
            "CPU: Media Tek Helio G37 / Uniscc T616 Octa core",
            "RAM: 4GB / 4 GB LPDDR4X",
            "SCREEN: 6.52 Inch HD + (1600 x720) IPS penal",
            "CAMERA: 13MP +2MP Depth",
            "WIRELESS: 4 LTE + Dual SIM",
            "OS: Android 14",
            "STORAGE: 64 GB eMMC (expandable via microSD to 256GB",
            "Security: Side mounted fingerprint + face ID",
            "BATTERY: 5000mAh, USB-C charging (10W)",
        ],
        highlighted: false,
    },
    {
        id: crypto.randomUUID(),
        title: "NOVA",
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
            "CPU: Qualcomm snapdragon 695 or Dimensity 6100+",
            "RAM: 8GB / 8 GB LPDDR4X",
            "CAMERA: Rear:64MP main + 8 MP Ultra- wide + 2MP macro, front: 16MP punch-hole",
            "STORAGE: 128GB / 256GB UFS 2.2",
            "OS: Android 14 ",
            "CONNECTIVITY: 5G + Wi-Fi 6 + Bluetooth 5.2",
            "SCREEN: 6.67 inch FHD + AMOLED 120Hz refresh rate",
            "BATTERY: 5000mAh USB-C fast charging (33W)",
            
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
        description: " ",
        tag: "FEATURES",
        features: [
            "CPU: Qualcomm snapdragon 8 Gen 2 / Media Tek Dimensity 9200+",
            "GPU: Intel Iris Xe / NVIDIA MX 450",
            "RAM: 16 GB LPDDR4X",
            "STORAGE: 256GB / 512GB UFS 4.0",
            "OS: Android 15",
            "SCREEN: 6.78 inch, 2k AMOLED, 144Hz, HDR10",
            "CAMERA: Rear-Triple AI camera (108 PM main + 12 MP Ultra-wide + 10 MP Telephoto ), front-32MP under-display",
            "BATTERY: 4800mAh, 65W superfast charging",
            
        ],
        highlighted: false,
    },
];
function PhonePricingPlan() {
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
                        Pick from one of our Phone
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
                            <PhonePricingCard plan={plan} frequency={frequency} />
                        </FadeInStagger>
                    ))}
                </div>
            </div>
        </div>
    );
}
export default PhonePricingPlan;
