import { useState } from "react";
//import StarImg from "../../../../assets/images/v1/icon/star2.png";
import FadeInStagger from "../../../../components/animation/FadeInStagger";
import DesktopPricingCard from "./DesktopPricingCard";

const pricingPlanData = [
    {
        id: crypto.randomUUID(),
        title: "LITE",
        tag: "FEATURES",
        price: [
            { id: 1, value: 399 },
            {
                id: 2,
                value: 499,
            },
        ],
        description: "The LITE is designed for training centres, students and offices that value simplicity and elegance. Slim design with minimal desk footprint",
        features: [
            "CPU: intel celeron N5105/ Pentium Silver",
            "GPU: integrated intel UHD Graphics",
            "RAM: 4 GB / 8GB DDR4",
            "STORAGE: 128 GB /256 GB (SATA or NVMe)",
            "SCREEN: 21.5inch or 23.8inch Full HD (1920x1080), IPS anti-glare panel",
            "Wireless: Wi-Fi 5 or 6, Bluetooth 5.2",
            "WEBCAM: 720p with privacy shutter + mic",
            "FINGERPRINT LOGIN: Built into power button (Windows Hello supported)",
            "PORT: 4x USB 3.0, 1x USB-C, HDMI Out, RJ45 LAN"
        ],
        highlighted: false,
    },
    {
        id: crypto.randomUUID(),
        title: "PRO",
        price: [
            { id: 1, value: 499 },
            {
                id: 2,
                value: 599,
            },
        ],
        description: "Dependable, sleek device that delivers power for personal use. Designed for managers, consultants and entrepreneurs who need flexibility without compromise",
        tag: "FEATURES",
        features: [
            "CPU: Intel core i5/ i7 (12th Gen) or AMD Ryzen 5 / 7",
            "GPU: integrated intel UHD Graphics/ optional NVIDIA GT 1030 or RTX 3050",
            "RAM: 8GB or 16GB DDR4/ DDR5 (up to 64GB)",
            "STORAGE: 512 GB NVMe SSD + optional 1 TB HDD",
            "NETWORKING: Ethernet, Wi-Fi 6, Bluetooth 5.2",
            "WEBCAM: External 1080p webcam (USB-C )",
            "SCREEN: 24inch or 27inch Full HD/ QHD, IPS, Slim bezel ",
            "PORT: 6x USB 3.0, 1x USB-C, VGA, HDMI, Audio in/out, SD reader",
            
        ],
        highlighted: true,
    },
    {
        id: crypto.randomUUID(),
        title: "PRO LITE",
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
            "CPU: Intel core i5/ i7 (12th Gen) or AMD Ryzen 5 / 7",
            "GPU: intel iris Xe/ integrated Vega/ NVIDIA MX550",
            "RAM: 16GB DDR4/ DDR5 (up to 64GB)",
            "STORAGE: 512 GB NVMe SSD (PCLe 4.0) + optional 1 TB HDD",
            "SCREEN: 23.8inch / 27inch full HD or QHD edge to edge touch screen",
            "PORT: 3x USB 3.0, 2x USB-C, HDMI Out, RJ45 LAN, Audio Combo Jack, SD slot",
            "WEBCAM: pop up IR cam with window hello + mic.",
            "FINGERPRINT: Fingerprint power button, ambient light sensor, magnetic port cover"
            
        ],
        highlighted: false,
    },
];
function DesktopPricingPlan() {
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
                        Pick from one of our Desktop
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
                            <DesktopPricingCard plan={plan} frequency={frequency} />
                        </FadeInStagger>
                    ))}
                </div>
            </div>
        </div>
    );
}
export default DesktopPricingPlan;
