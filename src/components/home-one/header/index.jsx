/* eslint-disable for-direction */
import DesktopNav from "../../common/navigation/desktop-nav/DesktopNav";
import Dropdown from "../../common/navigation/desktop-nav/Dropdown";
import DropdownItem from "../../common/navigation/desktop-nav/DropdownItem";
import NavItem from "../../common/navigation/desktop-nav/NavItem";
import { menuItemsData } from "../../common/navigation/mobile-nav/menuItemsData";
import MobileNavbar from "../../common/navigation/mobile-nav/MobileNavbar";
import HeaderButton from "./HeaderButton";
import HeaderLogo from "./HeaderLogo";

function Header() {
	return (
		<header className="site-header aximo-header-section aximo-header1 dark-bg" id="sticky-menu">
			<div className="container">
				<nav className="navbar site-navbar">
					<HeaderLogo />
					<div className="menu-block-wrapper">
						<DesktopNav>
							<NavItem url="/">Home</NavItem>							
							<NavItem url="about-us">About Us</NavItem>
							<NavItem url="pricing">Products</NavItem>
							{/**
							<NavItem dropdown title="Services">
								<Dropdown>
									<DropdownItem url="pricing">Products</DropdownItem>
									<DropdownItem dropdown title="Service">
										<Dropdown noShape>
											<DropdownItem url="service">Service</DropdownItem>
											<DropdownItem url="single-service">Service Details</DropdownItem>
										</Dropdown>
									</DropdownItem>
									<DropdownItem dropdown title="Utility">
										<Dropdown noShape>
											<DropdownItem url="faq">FAQ</DropdownItem>
											<DropdownItem url="error-page">Error Page</DropdownItem>
											<DropdownItem url="testimonial">Testimonial</DropdownItem>
											<DropdownItem url="coming-soon">Coming Soon</DropdownItem>
										</Dropdown>
									</DropdownItem>
									<DropdownItem dropdown title="Account">
										<Dropdown noShape>
											<DropdownItem url="sign-up">Sign Up</DropdownItem>
											<DropdownItem url="sign-in">Sign In</DropdownItem>
											<DropdownItem url="reset-password">Reset Password</DropdownItem>
										</Dropdown>
									</DropdownItem>
								</Dropdown>
							</NavItem>
							**/}
							<NavItem url="blog">Blog</NavItem>
							{/**
							<NavItem dropdown title="Blog">
								<Dropdown>
									<DropdownItem url="blog">Our Blog</DropdownItem>
									<DropdownItem url="blog-grid">Blog Grid</DropdownItem>
									<DropdownItem url="single-blog">Blog Details</DropdownItem>
								</Dropdown>
							</NavItem>
							**/}
						</DesktopNav>
					</div>
					<HeaderButton />

					<MobileNavbar menuItemsData={menuItemsData} title="Slate" />
				</nav>
			</div>
		</header>
	);
}

export default Header;
