import LogoWhiteImg from "../../../assets/images/logo/logo-white.svg";
function FooterBottom() {
	return (
		<>
			<div className="col-lg-2">
				<div className="aximo-footer-logo">
					<a href="">
						<img src={LogoWhiteImg} alt="Logo" />
					</a>
				</div>
			</div>
			<div className="col-lg-10">
				<div className="aximo-copywright one">
					<p> &copy; Copyright 2025, All Rights Reserved by Slate</p>
				</div>
			</div>
		</>
	);
}

export default FooterBottom;
