import BreadCrumb from "../../../../components/common/Breadcrumb";
import AutoSlider from "../../../../components/home-one/auto-slider";
import Testimonial from "../../../../components/home-one/testimonial";
import PricingFaq from "../../../../components/pricing/PricingFaq";
import PowerbankPricingPlan from "./PowerbankPricingPlan"
//import PricingPlan from "../../../../components/pricing/PricingPlan.jsx";
function Powerbank() {
	return (
		<>
			<BreadCrumb title="Phone Specifications " />{/**Pricing */}
			<PowerbankPricingPlan/>
			<Testimonial />
			<AutoSlider />
			<PricingFaq />
		</>
	);
}

export default Powerbank;
