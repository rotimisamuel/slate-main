import BreadCrumb from "../../../../components/common/Breadcrumb";
import AutoSlider from "../../../../components/home-one/auto-slider";
import Testimonial from "../../../../components/home-one/testimonial";
import PricingFaq from "../../../../components/pricing/PricingFaq";
import TabletPricingPlan from "./TabletPricingPlan"
//import PricingPlan from "../../../../components/pricing/PricingPlan.jsx";
function Tablet() {
	return (
		<>
			<BreadCrumb title="Tablet Specifications " />{/**Pricing */}
			<TabletPricingPlan/>
			<Testimonial />
			<AutoSlider />
			<PricingFaq />
		</>
	);
}

export default Tablet;
