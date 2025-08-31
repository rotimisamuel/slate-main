import { useState } from "react";
import StarImg from "../../assets/images/v1/star2.png";
import FadeInStagger from "../animation/FadeInStagger";
import PricingCard from "./PricingCard";
const pricingPlanData = [
	{
		id: crypto.randomUUID(),
		title: "Slate Laptop",
		price: [
			{ id: 1, value: 399 },
			{
				id: 2,
				value: 499,
			},
		],
		description: "Our Laptop are built for students, professionals and creators who demand both speed and reliability. with slim designs, powerful processors, extended battery life and brilliant display, you can carry your office, classroom or studio anywhere",
		features: [
			"Consultation & Discovery",
			"Responsive Design",
			"Sleek and durable built for everyday",
			"Custom Web Design",
			"Testing and Quality Assurance",
		],
		highlighted: false,
	},
	{
		id: crypto.randomUUID(),
		title: "Tablet",
		price: [
			{ id: 1, value: 499 },
			{
				id: 2,
				value: 599,
			},
		],
		description: "Designed for managers, consultants and entrepreneurs who need flexibility without compromise",
		features: [
			"Lightweight and portable with premium finishing",
			"Ideal for presentations, note taking and digital creativity",
			"Strong battery and seamless connectivity",
			"works perfectly as a bridge between phone and laptop",
			"wireless keyboard ",
			
		],
		highlighted: true,
	},
	{
		id: crypto.randomUUID(),
		title: "Desktop (All-in-One & Tower)",
		price: [
			{ id: 1, value: 299 },
			{
				id: 2,
				value: 499,
			},
		],
		description: "From training centres to high-end offices, our desktops are designed to save space and deliver raw performance",
		features: [
			"All-in-One system CBT centres: neat, space-saving and cost effective",
			"Tower desktops built like artifacts: Stylish, powerful and ideal for programmers, architects, creative directors and reseacher",
			"High-speed processors and expandable storage for demanding tasks",
			
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
