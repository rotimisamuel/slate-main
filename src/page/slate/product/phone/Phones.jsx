import BreadCrumb from "../../../../components/common/Breadcrumb";
import AutoSlider from "../../../../components/home-one/auto-slider";
import Testimonial from "../../../../components/home-one/testimonial";
import PricingFaq from "../../../../components/pricing/PricingFaq";
import PhonePricingPlan from "./PhonePricingPlan"
//import PricingPlan from "../../../../components/pricing/PricingPlan.jsx";
function Phones() {
	return (
		<>
			<BreadCrumb title="Phone Specifications " />{/**Pricing */}
			<PhonePricingPlan />
			<Testimonial />
			<AutoSlider />
			<PricingFaq />
		</>
	);
}

export default Phones;
