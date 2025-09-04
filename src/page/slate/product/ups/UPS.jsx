import BreadCrumb from "../../../../components/common/Breadcrumb";
import AutoSlider from "../../../../components/home-one/auto-slider";
import Testimonial from "../../../../components/home-one/testimonial";
import PricingFaq from "../../../../components/pricing/PricingFaq";
import UPSPricingPlan from "./UPSPricingPlan"
//import PricingPlan from "../../../../components/pricing/PricingPlan.jsx";
function UPS() {
	return (
		<>
			<BreadCrumb title="UPS Capacities " />{/**Pricing */}
			<UPSPricingPlan/>
			<Testimonial />
			<AutoSlider />
			<PricingFaq />
		</>
	);
}

export default UPS;
