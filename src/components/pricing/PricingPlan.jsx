import { useState } from "react";
import StarImg from "../../assets/images/v1/star2.png";
import FadeInStagger from "../animation/FadeInStagger";
import PricingCard from "./PricingCard";
const pricingPlanData = [
	{
		id: crypto.randomUUID(),
		title: "SLATE INTRO Laptop",
		tag: "FEATURES",
		price: [
			{ id: 1, value: 399 },
			{
				id: 2,
				value: 499,
			},
		],
		description: "Our Laptop are built for students, professionals and creators who demand both speed and reliability. with slim designs, powerful processors, extended battery life and brilliant display, you can carry your office, classroom or studio anywhere",
		features: [
			"CPU: Intel Core i3 / AMD Ryzen 3 / 5",
			"GPU: Intel UHD Iris/ Vega",
			"Screen: 14inch HD (1366*768) TN, panel",
			"Wireless: Wi-Fi 6 / Bluetooth 5.1",
			"Sleek and durable built for everyday",
			"Custom Web Design",
			"Custom flash drive cartridge",
			"Testing and Quality Assurance",
		],
		highlighted: false,
	},
	{
		id: crypto.randomUUID(),
		title: "SLATE STANDARD",
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
			"Lightweight and portable with premium finishing",
			"CPU: Intel Core i3 / AMD Ryzen 3 / 5",
			"GPU: Intel UHD Iris/ Vega",
			"Strong battery and seamless connectivity",
			"STORAGE: 256GB SSD (NVMe optional)",
			"KEYBOARD: Backlit, ergonomic",
			"CONNECTIVITY: Wi-Fi 6 / Bluetooth 5.1",
			"SCREEN: 15.6inch FHD (1920 * 1020) IPS Anti-glare ",
			
		],
		highlighted: true,
	},
	{
		id: crypto.randomUUID(),
		title: "SLATE ULTRA LAPTOP",
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
			"CPU: Intel Core i5 / i7 / Ryzen 7",
			"GPU: Intel Iris Xe / NVIDIA MX 450 (optional )",
			"RAM: 16GB DDR4 / LPDDR5 (expandable to 32GB )",
			"KEYBOARD: split resistant, fingerprint lock.",
			"SCREEN: 15.1 / 16.1 inch FHD/QHD IPS wide view",
			"PORT: 2x USB-A, 2x USB-C, 1x HDMI, Thunderbolt",
			"KEYBOARD: split resistant, fingerprint lock.",
			
		],
		highlighted: false,
	},
];
function PricingPlan() {
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
						Pick from one of our Product
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
							<PricingCard plan={plan} frequency={frequency} />
						</FadeInStagger>
					))}
				</div>
			</div>
		</div>
	);
}
export default PricingPlan;
