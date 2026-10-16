import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import { Accordion, AccordionItem, Carousel, Counter, DemoForm, Gallery, VideoLink } from "@/components/interactive";

export const metadata = { title: "Daniel brooks | Lifeon" };

export default function TeamSinglePage() {
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
                        <AnimatedText as="h1" className="text-anime-style-3" data-cursor="-opaque">Daniel brooks</AnimatedText>
                        <nav className="wow fadeInUp">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><Link href="/">home</Link></li>
                                <li className="breadcrumb-item"><Link href="/team">team</Link></li>
                                <li className="breadcrumb-item active" aria-current="page">Daniel brooks</li>
                            </ol>
                        </nav>
                    </div>
                    {/* Page Header Box End */}
                </div>
            </div>
        </div>
    </div>
    {/* Page Header Section End */}

    {/* Page Team Single Start */}
    <div className="page-team-single">
        <div className="container">
            <div className="row">
                <div className="col-lg-4">
                    {/* Page Single Sidebar Start */}
                    <div className="page-single-sidebar">
                        {/* Team Single Image Start */}
                        <div className="team-single-image wow fadeInUp">
                            <figure className="image-anime">
                                <img src="/images/team-2.jpg" alt="" />
                            </figure>
                            <div className="member-social-list">
                                <ul>
                                    <li><a href="#"><i className="fa-brands fa-facebook-f"></i></a></li>
                                    <li><a href="#"><i className="fa-brands fa-dribbble"></i></a></li>
                                    <li><a href="#"><i className="fa-brands fa-instagram"></i></a></li>
                                    <li><a href="#"><i className="fa-brands fa-linkedin-in"></i></a></li>
                                </ul>
                            </div>
                        </div>
                        {/* Team Single Image End */}

                        {/* Sidebar CTA Box Start */}
                        <div className="sidebar-cta-box wow fadeInUp" data-wow-delay="0.25s">
                            {/* Sidebar CTA Box Image Start */}
                            <div className="sidebar-cta-box-image">
                                <figure className="image-anime">
                                    <img src="/images/sidebar-cta-box-image.jpg" alt="" />
                                </figure>
                            </div>
                            {/* Sidebar CTA Box Image End */}
                            
                            {/* Sidebar CTA Contact Item List Start */}
                            <div className="sidebar-cta-contact-item-list">
                                {/* Sidebar CTA Contact Item Start */}
                                <div className="sidebar-cta-contact-item">
                                    <div className="icon-box">
                                        <img src="/images/icon-headphone-white.svg" alt="" />
                                    </div>
                                    <div className="sidebar-cta-contact-item-content">
                                        <p>24/7 Support!</p>
                                        <h2><a href="tel:+123456789">(+123) 456-789</a></h2>
                                    </div>
                                </div>
                                {/* Sidebar CTA Contact Item End */}
                                
                                {/* Sidebar CTA Contact Item Start */}
                                <div className="sidebar-cta-contact-item">
                                    <div className="icon-box">
                                        <img src="/images/icon-mail-white.svg" alt="" />
                                    </div>
                                    <div className="sidebar-cta-contact-item-content">
                                        <p>E-mail Us!</p>
                                        <h2><a href="mailto:info@domainname.com">info@domainname.com</a></h2>
                                    </div>
                                </div>
                                {/* Sidebar CTA Contact Item End */}
                            </div>
                            {/* Sidebar CTA Contact Item List End */}
                        </div>
                        {/* Sidebar CTA Box End */}
                    </div>
                    {/* Page Single Sidebar End */}
                </div>

                <div className="col-lg-8">
                    {/* Team Single Content Start */}
                    <div className="team-single-content">
                        {/* Team Member About Start */}
                        <div className="team-member-about">
                            {/* Section Title Start */}
                            <div className="section-title">
                                <AnimatedText as="h2" className="text-anime-style-3" data-cursor="-opaque">About daniel brooks</AnimatedText>
                                <p className="wow fadeInUp">Daniel Brooks is a dedicated Business Strategy Coach with a passion for helping entrepreneurs, professionals, and business leaders achieve sustainable growth. With years of experience in business development and leadership coaching, Daniel focuses on guiding clients toward clearer strategies.</p>
                            </div>
                            {/* Section Title End */}                    

                            {/* Team Contact List Box Start */}
                            <div className="team-contact-list-box wow fadeInUp" data-wow-delay="0.2s">
                                <div className="team-contact-list-box-title">
                                    <h3>Contact Info:</h3>
                                </div>
                                {/* Team Contact List Item Start */}
                                <div className="team-contact-list-item">
                                    {/* Team Contact Item Start */}
                                    <div className="team-contact-item">
                                        <div className="icon-box">
                                            <img src="/images/icon-headphone-white.svg" alt="" />
                                        </div>
                                        <div className="team-contact-item-content">
                                            <h3>Contact us</h3>
                                            <p>+(123) 456-789</p>
                                        </div>
                                    </div>
                                    {/* Team Contact Item End */}

                                    {/* Team Contact Item Start */}
                                    <div className="team-contact-item">
                                        <div className="icon-box">
                                            <img src="/images/icon-mail-white.svg" alt="" />
                                        </div>
                                        <div className="team-contact-item-content">
                                            <h3>E-mail us</h3>
                                            <p>info@domain.com</p>
                                        </div>
                                    </div>
                                    {/* Team Contact Item End */}
                                </div>
                                {/* Team Contact List Item End */}
                                
                                {/* Team Contact List Item Start */}
                                <div className="team-contact-list-item">
                                    {/* Team Contact Item Start */}
                                    <div className="team-contact-item">
                                        <div className="icon-box">
                                            <img src="/images/icon-location-white.svg" alt="" />
                                        </div>
                                        <div className="team-contact-item-content">
                                            <h3>Location</h3>
                                            <p>101 Ipsum Boulevard, Valley, FL</p>
                                        </div>
                                    </div>
                                    {/* Team Contact Item End */}

                                    {/* Team Contact Item Start */}
                                    <div className="team-contact-item">
                                        <div className="icon-box">
                                            <img src="/images/icon-position.svg" alt="" />
                                        </div>
                                        <div className="team-contact-item-content">
                                            <h3>Position</h3>
                                            <p>Personal Development Coach</p>
                                        </div>
                                    </div>
                                    {/* Team Contact Item End */}
                                </div>
                                {/* Team Contact List Item End */}
                            </div>
                            {/* Team Contact List Box End */}
                        </div>
                        {/* Team Member About End */}

                        {/* Team Member Expertise Start */}
                        <div className="team-member-expertise">
                            {/* Section Title Start */}
                            <div className="section-title">
                                <AnimatedText as="h2" className="text-anime-style-3" data-cursor="-opaque">Areas of expertise</AnimatedText>
                                <p className="wow fadeInUp">Areas of Expertise reflect the key skills and knowledge Daniel brings to his coaching practice. His expertise focuses on business strategy, leadership development, productivity improvement, and goal-focused planning.</p>
                            </div>
                            {/* Section Title End */}

                            {/* Member Skills List Start */}
                            <div className="member-skill-list">
                                {/* Skills Progress Bar Start */}
                                <div className="skills-progress-bar">
                                    {/* Skill Item Start */}
                                    <div className="skillbar" data-percent="95%">
                                        <div className="skill-data">
                                            <div className="skill-title">Growth Planning</div>
                                            <div className="skill-no">95%</div>
                                        </div>
                                        <div className="skill-progress">
                                            <div className="count-bar"></div>
                                        </div>
                                    </div>
                                    {/* Skill Item End */}
                                </div>
                                {/* Skills Progress Bar End */}
                                
                                {/* Skills Progress Bar Start */}
                                <div className="skills-progress-bar">
                                    {/* Skill Item Start */}
                                    <div className="skillbar" data-percent="85%">
                                        <div className="skill-data">
                                            <div className="skill-title">Strategy Development</div>
                                            <div className="skill-no">85%</div>
                                        </div>
                                        <div className="skill-progress">
                                            <div className="count-bar"></div>
                                        </div>
                                    </div>
                                    {/* Skill Item End */}
                                </div>
                                {/* Skills Progress Bar End */}
                            </div>
                            {/* Member Skills List End */}
                        </div>
                        {/* Team Member Contact Details End */}

                        {/* Team Member About Experience Start */}
                        <div className="team-member-experience">
                            {/* Section Title Start */}
                            <div className="section-title">
                                <AnimatedText as="h2" className="text-anime-style-3" data-cursor="-opaque">My expertise / specialties</AnimatedText>
                                <p className="wow fadeInUp">With years of experience in the insurance industry, I specialize in providing personalized guidance and solutions tailored to each client's unique needs. My expertise covers policy advisory, claims assistance, risk assessment, and financial planning, ensuring that clients receive comprehensive support at every step.</p>
                            </div>
                            {/* Section Title End */}

                            {/* Member Experience Item List Start */}
                            <div className="member-experience-item-list">
                                {/* Member Experience Item Start */}
                                <div className="member-experience-item wow fadeInUp">
                                    <h3>Growth Path Consulting - Present </h3>
                                    <p>Senior Business Strategy Coach</p>
                                </div>
                                {/* Member Experience Item End */}

                                {/* Member Experience Item Start */}
                                <div className="member-experience-item wow fadeInUp" data-wow-delay="0.2s">
                                    <h3>Vision Edge Solutions - 2018 - 2021</h3>
                                    <p>Business Development Manager</p>
                                </div>
                                {/* Member Experience Item End */}

                                {/* Member Experience Item Start */}
                                <div className="member-experience-item wow fadeInUp" data-wow-delay="0.4s">
                                    <h3>Next Level Enterprises - 2016 - 2018</h3>
                                    <p>Leadership &amp; Strategy Consultant</p>
                                </div>
                                {/* Member Experience Item End */}

                                {/* Member Experience Item Start */}
                                <div className="member-experience-item wow fadeInUp" data-wow-delay="0.6s">
                                    <h3>Elevate Strategy Firm - 2010 - 2012</h3>
                                    <p>Business Strategy Manager</p>
                                </div>
                                {/* Member Experience Item End */}
                            </div>
                            {/* Member Experience Item List End */}
                        </div>
                        {/* Team Member About Experience End */}
 
                        {/* Contact Us Form Start */}
                        <div className="contact-us-form team-contact-form">
                            {/* Section Title Start */}
                            <div className="section-title">
                                <AnimatedText as="h2" className="text-anime-style-3" data-cursor="-opaque">Contact daniel today</AnimatedText>
                                <p className="wow fadeInUp">Reach out to Daniel today to start your journey toward clearer strategies and stronger business growth. Whether you need guidance, support.</p>
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
                    {/* Team Single Content End */}
                </div>
            </div>
        </div>
    </div>
    {/* Page Team Single End */}

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
