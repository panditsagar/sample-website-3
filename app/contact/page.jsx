import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import { Accordion, AccordionItem, Carousel, Counter, DemoForm, Gallery, VideoLink } from "@/components/interactive";

export const metadata = { title: "Contact us | Lifeon" };

export default function ContactPage() {
return (<>

    {/* Preloader Start */}
	
	{/* Preloader End */}

    {/* Header Start */}
	
	{/* Header End */}

    {/* Page Header Section Start */}
    <div className="page-header parallaxie">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    {/* Page Header Box Start */}
                    <div className="page-header-box">
                        <AnimatedText as="h1" className="text-anime-style-3" data-cursor="-opaque">Contact us</AnimatedText>
                        <nav className="wow fadeInUp">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><Link href="/">home</Link></li>
                                <li className="breadcrumb-item active" aria-current="page">Contact us</li>
                            </ol>
                        </nav>
                    </div>
                    {/* Page Header Box End */}
                </div>
            </div>
        </div>
    </div>
    {/* Page Header Section End */}

    {/* Page Contact Us Start */}
    <div className="page-contact-us">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-xl-6">
                    {/* Contact Us Content Start */}
                    <div className="contact-us-content">
                        {/* Section Title Start */}
                        <div className="section-title section-title-center">
                            <span className="section-sub-title wow fadeInUp">Contact Us</span>
                            <AnimatedText as="h2" className="text-anime-style-3" data-cursor="-opaque">Contact our experts for guidance today</AnimatedText>
                            <p className="wow fadeInUp" data-wow-delay="0.2s">Our experienced coaches are here to provide the guidance and support you need to move forward with confidence.</p>
                        </div>
                        {/* Section Title End */}

                        {/* Contact Info List Start */}
                        <div className="contact-info-list">
                            {/* Contact Info List Title Start */}
                            <div className="contact-info-list-title wow fadeInUp">
                                <h3>Contact Info:</h3>
                            </div>
                            {/* Contact Info List Title End */}

                            {/* Conatct Info Item Start */}
                            <div className="contact-info-item wow fadeInUp" data-wow-delay="0.2s">
                                <div className="icon-box">
                                    <img src="/images/icon-headphone-white.svg" alt="" />
                                </div>
                                <div className="contact-info-item-content">
                                    <h3>Contact us</h3>
                                    <p><a href="tel:123456789">+(123) 456 - 789</a> or <a href="tel:123456789">+(123) 456 - 789</a></p>
                                </div>
                            </div>
                            {/* Conatct Info Item End */}

                            {/* Conatct Info Item Start */}
                            <div className="contact-info-item wow fadeInUp" data-wow-delay="0.4s">
                                <div className="icon-box">
                                    <img src="/images/icon-mail-white.svg" alt="" />
                                </div>
                                <div className="contact-info-item-content">
                                    <h3>E-mail us</h3>
                                    <p><a href="mailto:info@domainname.com">info@domainname.com</a> or <a href="mailto:info@domainname.com">info@domainname.com</a></p>
                                </div>
                            </div>
                            {/* Conatct Info Item End */}

                            {/* Conatct Info Item Start */}
                            <div className="contact-info-item wow fadeInUp" data-wow-delay="0.6s">
                                <div className="icon-box">
                                    <img src="/images/icon-location-white.svg" alt="" />
                                </div>
                                <div className="contact-info-item-content">
                                    <h3>Location</h3>
                                    <p>101 Ipsum Boulevard, Lorem Valley, FL 33101</p>
                                </div>
                            </div>
                            {/* Conatct Info Item End */}
                        </div>
                        {/* Contact Info List End */}
                    </div>
                    {/* Contact Us Content End */}
                </div>

                <div className="col-xl-6">
                    {/* Contact Us Form Start */}
                    <div className="contact-us-form">
                        {/* Section Title Start */}
                        <div className="section-title">
                            <AnimatedText as="h2" className="text-anime-style-3" data-cursor="-opaque">Let's get in touch</AnimatedText>
                            <p className="wow fadeInUp">We'd love to hear from you. Whether you have questions, ready to start your coaching journey, our team is here to help.</p>
                        </div>
                        {/* Section Title End */}

                        {/* Contact Form Start */}
                        <DemoForm id="contactForm" action="#" method="POST" className="contact-form wow fadeInUp" data-wow-delay="0.2s">
                            <div className="row">
                                <div className="form-group col-md-6 mb-4">
                                    <input type="text" name="fname" className="form-control" id="fname" placeholder="Enter First Name *" required aria-label="Enter First Name *" />
                                    <div className="help-block with-errors"></div>
                                </div>

                                <div className="form-group col-md-6 mb-4">
                                    <input type="text" name="lname" className="form-control" id="lname" placeholder="Enter Last Name *" required aria-label="Enter Last Name *" />
                                    <div className="help-block with-errors"></div>
                                </div>

                                <div className="form-group col-md-6 mb-4">
                                    <input type="text" name="phone" className="form-control" id="phone" placeholder="Enter Phone Number *" required aria-label="Enter Phone Number *" />
                                    <div className="help-block with-errors"></div>
                                </div>

                                <div className="form-group col-md-6 mb-4">
                                    <input type="email" name="email" className="form-control" id="email" placeholder="Enter Email Address *" required aria-label="Enter Email Address *" />
                                    <div className="help-block with-errors"></div>
                                </div>

                                <div className="form-group col-md-12 mb-5">
                                    <textarea name="message" className="form-control" id="message" rows="5" placeholder="Any Message..." aria-label="Any Message..."></textarea>
                                    <div className="help-block with-errors"></div>
                                </div>

                                <div className="col-md-12">
                                    <button type="submit" className="btn-default">submit Message</button>
                                    
                                </div>
                            </div>
                        </DemoForm>
                        {/* Contact Form End */}
                    </div>
                    {/* Contact Us Form End */}
                </div>
            </div>
        </div>
    </div>
    {/* Page Contact Us End */}

    {/* Google Map Start */}
    <div className="google-map">
        <div className="container">
            <div className="row section-row">
                <div className="col-lg-12">
                    {/* Section Title Start */}
                    <div className="section-title section-title-center">
                        <span className="section-sub-title wow fadeInUp">Our Location</span>
                        <AnimatedText as="h2" className="text-anime-style-3" data-cursor="-opaque">Let's connect, in person or online</AnimatedText>
                        <p className="wow fadeInUp" data-wow-delay="0.2s">Visit our office, give us a call, or send us a message however you prefer to connect, our team is always ready to discuss your project and answer your questions.</p>
                    </div>
                    {/* Section Title End */}
                </div>
            </div>

            <div className="row">
                <div className="col-lg-12">
                    {/* Google Map IFrame Start */}
                    <div className="google-map-iframe wow fadeInUp" data-wow-delay="0.4s">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d96737.10562045308!2d-74.08535042841811!3d40.739265258395164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sin!4v1703158537552!5m2!1sen!2sin" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Location map"></iframe>
                    </div>
                    {/* Google Map IFrame End */}
                </div>
            </div>
        </div>
    </div>
    {/* Google Map End */}

    {/* Main Footer Start */}
    
    {/* Main Footer End */}

    {/* Jquery Library File */}
    
    {/* Bootstrap js file */}
    
    {/* Validator js file */}
    
    {/* SlickNav js file */}
    
    {/* Swiper js file */}
    
    {/* Counter js file */}

    {/* Magnific js file */}
    
    {/* SmoothScroll */}
    
    {/* Parallax js */}
    
    {/* MagicCursor js file */}

    {/* Text Effect js file */}

    {/* YTPlayer js File */}
    
    {/* Wow js file */}
    
    {/* Main Custom js file */}

</>);
}
