import BreadCrumb from "../../../../components/common/Breadcrumb";
import AutoSlider from "../../../../components/home-one/auto-slider";
import Testimonial from "../../../../components/home-one/testimonial";
import PricingFaq from "../../../../components/pricing/PricingFaq";
import DesktopPricingPlan from "./DesktopPricingPlan"
//import PricingPlan from "../../../../components/pricing/PricingPlan.jsx";
function Desktop() {
	return (
		<>
			<BreadCrumb title="Desktop Specifications " />{/**Pricing */}
			<DesktopPricingPlan/>
			<Testimonial />
			<AutoSlider />
			<PricingFaq />
		</>
	);
}

export default Desktop;
