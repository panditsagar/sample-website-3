import Link from "next/link";
import { Accordion, AccordionItem, Carousel, Counter, DemoForm, Gallery, VideoLink } from "@/components/interactive";

export default function SiteFooter() {
return (<footer className="main-footer bg-section dark-section">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-12">
                    {/* Footer Header Start */}
                    <div className="footer-header">
                        {/* Section Title Start */}
                        <div className="section-title">
                            <h2 className="text-anime-style-3" data-cursor="-opaque">Sign up for newsletter</h2>
                            <p className="wow fadeInUp">Subscribe to our newsletter for expert insights, growth.</p>
                        </div>
                        {/* Section Title End */}

                        {/* Footer Newsletter Form Start */}
                        <div className="footer-newsletter-form">
                            <DemoForm id="newslettersForm" action="#" method="POST">
                                <div className="form-group">
                                    <input type="email" name="mail" className="form-control" id="mail" placeholder="Enter Your E-mail" required aria-label="Enter Your E-mail" />
                                    <button type="submit" className="newsletter-btn" aria-label="Subscribe to the newsletter"><img src="/images/arrow-white.svg" alt="" /></button>
                                </div>
                            </DemoForm>
                        </div>
                        {/* Footer Newsletter Form End */}
                    </div>
                    {/* Footer Header End */}
                </div>

                <div className="col-xl-4">
                    {/* About Footer Start */}
                    <div className="about-footer">
                        {/* Footer Logo Start */}
                        <div className="footer-logo">
                            <img src="/images/logo.svg" alt="" />
                        </div>
                        {/* Footer Logo End */}

                        {/* About footer Content Start */}
                        <div className="about-footer-content">
                            <p>We empower ambitious individuals and entrepreneurs to gain clarity.</p>
                        </div>
                        {/* About footer Content End */}

                        {/* Footer Social Links Start  */}
                        <div className="footer-social-links">
                            <ul>
                                <li><a href="#"><i className="fa-brands fa-pinterest-p"></i></a></li>
                                <li><a href="#"><i className="fa-brands fa-x-twitter"></i></a></li>
                                <li><a href="#"><i className="fa-brands fa-facebook-f"></i></a></li>
                                <li><a href="#"><i className="fa-brands fa-instagram"></i></a></li>
                            </ul>
                        </div>
                        {/* Footer Social Links End  */}
                    </div>
                    {/* About Footer End */}
                </div>

                <div className="col-xl-8">
                    {/* Footer Links Box Start */}
                    <div className="footer-links-box">
                        {/* Footer Links Start */}
                        <div className="footer-links footer-quick-links">
                            <h2>Quick Links</h2>
                            <ul>
                                <li><Link href="/">Home</Link></li>
                                <li><Link href="/about">About Us</Link></li>
                                <li><Link href="/services">Our Services</Link></li>
                                <li><Link href="/blog">Blog</Link></li>
                                <li><Link href="/contact">Contact Us</Link></li>
                            </ul>
                        </div>
                        {/* Footer Links End */}

                        {/* Footer Links Start */}
                        <div className="footer-links footer-service-links">
                            <h2>Our Services</h2>
                            <ul>
                                <li><Link href="/service-single">Business Strategy Development</Link></li>
                                <li><Link href="/service-single">Executive Leadership Coaching</Link></li>
                                <li><Link href="/service-single">Personal Development Coaching</Link></li>
                                <li><Link href="/service-single">Startup &amp; Entrepreneur Coaching</Link></li>
                                <li><Link href="/service-single">Goal Setting &amp; Strategy Coaching</Link></li>
                            </ul>
                        </div>
                        {/* Footer Links End */}

                        {/* Footer Links Start */}
                        <div className="footer-links footer-support-links">
                            <h2>Helpful Links</h2>
                            <ul>
                                <li><a href="#">Support</a></li>
                                <li><a href="#">Privacy Policy</a></li>
                                <li><Link href="/faqs">FAQs</Link></li>
                                <li><a href="#">Refund Policy</a></li>
                                <li><a href="#">Terms &amp; Conditions</a></li>
                            </ul>
                        </div>
                        {/* Footer Links End */}
                    </div>
                    {/* Footer Body End */}
                </div>

                <div className="col-lg-12">
                    {/* Footer Copyright Text Start */}
                    <div className="footer-copyright-text">
                        <p>Copyright © 2026 All Rights Reserved.</p>
                    </div>
                    {/* Footer Copyright Text End */}
                </div>
            </div>
        </div>
    </footer>);
}
