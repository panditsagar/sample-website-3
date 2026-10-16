import Link from "next/link";
import { Accordion, AccordionItem, Carousel, Counter, DemoForm, Gallery, VideoLink } from "@/components/interactive";

export const metadata = { title: "Lifeon — Life and Business Coaching" };

export default function IndexPage() {
return (<>

    {/* Preloader Start */}
	
	{/* Preloader End */}

    {/* Header Start */}
	
	{/* Header End */}

    {/* Hero Section Start */}
    <div className="hero dark-section parallaxie">
        <div className="container">
            <div className="row align-items-start">
                <div className="col-xl-7">
                    {/* Hero Content Start */}
                    <div className="hero-content">
                        {/* Section Title Start */}
                        <div className="section-title">
                            <span className="section-sub-title wow fadeInUp">Where Vision Meets Action.</span>
                            <h1 className="text-anime-style-3" data-cursor="-opaque">Unlock your full potential and achieve success</h1>
                            <p className="wow fadeInUp">We help you identify your strengths, overcome limiting beliefs, and create a focused strategy that aligns with your personal and professional goals.</p>
                        </div>
                        {/* Section Title End */}

                        {/* Hero Content Body Start */}
                        <div className="hero-content-body wow fadeInUp">
                            {/* Hero Button Start */}
                            <div className="hero-btn">
                                <Link href="/book-appointment" className="btn-default">Book Appointment</Link>
                            </div>
                            {/* Hero Button End */}
                            
                            {/* Hero Client Box Start */}
                            <div className="hero-client-box">
                                {/* Satisfy Client Images Start */}
                                <div className="satisfy-client-images">
                                    <div className="satisfy-client-image">
                                        <figure className="image-anime">
                                            <img src="/images/author-1.jpg" alt="" />
                                        </figure>
                                    </div>
                                    <div className="satisfy-client-image">
                                        <figure className="image-anime">
                                            <img src="/images/author-2.jpg" alt="" />
                                        </figure>
                                    </div>
                                    <div className="satisfy-client-image">
                                        <figure className="image-anime">
                                            <img src="/images/author-3.jpg" alt="" />
                                        </figure>
                                    </div>
                                    <div className="satisfy-client-image add-more">
                                        <i className="fa fa-solid fa-plus"></i>
                                    </div>
                                </div>
                                {/* Satisfy Client Images End */}

                                {/* Hero Client Content Start */}
                                <div className="hero-client-content">
                                    <h2>We have 20k+ Client</h2>
                                    <p>Word - Wide</p>
                                </div>
                                {/* Hero Client Content End */}
                            </div>
                            {/* Hero Client Box End */}
                        </div>
                        {/* Hero Content Body End */}
                    </div>
                    {/* Hero Content End */}
                </div>
                    
                <div className="col-xl-5">
                    {/* Hero Info Box Start */}
                    <div className="hero-info-box wow fadeInUp">
                        {/* Hero Info Box Header Start */}
                        <div className="hero-info-box-header">
                            <p>“Empowering you to achieve clarity, confidence, and success”.</p>
                        </div>
                        {/* Hero Info Box Header End */}

                        {/* Hero Info Box Body Start */}
                        <div className="hero-info-box-body">
                            {/* Hero Info Client Review Box Start */}
                            <div className="hero-info-client-review-box">
                                {/* Satisfy Client Images Start */}
                                <div className="satisfy-client-images">
                                    <div className="satisfy-client-image">
                                        <figure className="image-anime">
                                            <img src="/images/author-1.jpg" alt="" />
                                        </figure>
                                    </div>
                                    <div className="satisfy-client-image">
                                        <figure className="image-anime">
                                            <img src="/images/author-2.jpg" alt="" />
                                        </figure>
                                    </div>
                                    <div className="satisfy-client-image">
                                        <figure className="image-anime">
                                            <img src="/images/author-3.jpg" alt="" />
                                        </figure>
                                    </div>
                                    <div className="satisfy-client-image add-more">
                                        <i className="fa fa-solid fa-plus"></i>
                                    </div>
                                </div>
                                {/* Satisfy Client Images End */}

                                <div className="satisfy-client-content">
                                    <p>From over 2600 Reviews</p>
                                </div>
                            </div>
                            {/* Hero Info Client Review Box End */}

                            {/* Hero Info Box Rating Start */}
                            <div className="hero-info-box-rating">
                                <h2>4.9/5 Rating</h2>
                                <span className="hero-info-rating-star">
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                </span>
                            </div>
                            {/* Hero Info Box Rating End */}
                        </div>
                        {/* Hero Info Box Body End */}
                    </div>
                    {/* Hero Info Box End */}
                </div>
            </div>
        </div>
    </div>
    {/* Hero Section End */}

    {/* About Us Section Start */}
    <div className="about-us">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-xl-6">
                    {/* About Us Image Box Start */}
                    <div className="about-us-image-box wow fadeInUp">
                        {/* About Us Image Box 1 Start */}
                        <div className="about-us-image-box-1">
                            {/* Happy Customer Review Box Start */}
                            <div className="happy-customer-review-box">
                                {/* Happy Customer Review Item Start */}
                                <div className="happy-customer-review-item">
                                    {/* Hero Info Rating Star Start */}
                                    <div className="hero-info-rating-star">
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                </div>
                                {/* Hero Info Rating Star End */}

                                {/* Happy Customer Review Content Start */}
                                <div className="happy-customer-review-content">
                                    <p>Happy Customer Reviews 5000+</p>
                                </div>
                                {/* Happy Customer Review Content End */}

                                {/* Satisfy Client Images Start */}
                                <div className="satisfy-client-images">
                                    <div className="satisfy-client-image">
                                        <figure className="image-anime">
                                            <img src="/images/author-1.jpg" alt="" />
                                        </figure>
                                    </div>
                                    <div className="satisfy-client-image">
                                        <figure className="image-anime">
                                            <img src="/images/author-2.jpg" alt="" />
                                        </figure>
                                    </div>
                                    <div className="satisfy-client-image">
                                        <figure className="image-anime">
                                            <img src="/images/author-3.jpg" alt="" />
                                        </figure>
                                    </div>
                                    <div className="satisfy-client-image add-more">
                                        <i className="fa fa-solid fa-plus"></i>
                                    </div>
                                </div>
                                {/* Satisfy Client Images End */}
                                </div>
                            </div>
                            {/* Happy Customer Review Box End */}

                            {/* About Us Image Start */}
                            <div className="about-us-image">
                                <figure className="image-anime">
                                    <img src="/images/about-us-image-1.jpg" alt="" />
                                </figure>
                            </div>
                            {/* About Us Image End */}
                        </div>
                        {/* About Us Image Box 1 End */}

                        {/* About Us Image Box 2 Start */}
                        <div className="about-us-image-box-2">
                            {/* About Us Image Start */}
                            <div className="about-us-image">
                                <figure className="image-anime">
                                    <img src="/images/about-us-image-2.jpg" alt="" />
                                </figure>
                            </div>
                            {/* About Us Image End */}
                        </div>
                        {/* About Us Image Box 2 End */}
                    </div>
                    {/* About Us Image Box End */}
                </div>

                <div className="col-xl-6">
                    {/* About Us Content Start */}
                    <div className="about-us-content">
                        {/* Section Title Start */}
                        <div className="section-title">
                            <span className="section-sub-title wow fadeInUp">About Us</span>
                            <h2 className="text-anime-style-3" data-cursor="-opaque">Empowering growth in life and business</h2>
                            <p className="wow fadeInUp">We help individuals and entrepreneurs unlock their true potential by aligning personal clarity with professional strategy.</p>
                        </div>
                        {/* Section Title End */}
                        
                        {/* About Us Item List Start */}
                        <div className="about-us-item-list wow fadeInUp">
                            {/* About Us Item Start */}
                            <div className="about-us-item">
                                <div className="icon-box">
                                    <img src="/images/icon-about-us-item-1.svg" alt="" />
                                </div>
                                <div className="about-us-item-content">
                                    <h3>Business Support</h3>
                                    <p>We provide strategic business support designed.</p>
                                </div>
                            </div>
                            {/* About Us Item End */}

                            {/* About Us Item Start */}
                            <div className="about-us-item">
                                <div className="icon-box">
                                    <img src="/images/icon-about-us-item-2.svg" alt="" />
                                </div>
                                <div className="about-us-item-content">
                                    <h3>Clear Goal Roadmap</h3>
                                    <p>We provide strategic business support designed.</p>
                                </div>
                            </div>
                            {/* About Us Item End */}
                        </div>
                        {/* About Us Item List End */}

                        {/* About Us Body Start */}
                        <div className="about-us-body wow fadeInUp">
                            {/* About Us Body Item Start */}
                            <div className="about-us-body-item">
                                <h3>“We empower ambitious individuals and entrepreneurs to gain clarity, build confidence, and create lasting success in life and business.”</h3>
                            </div>
                            {/* About Us Body Item End */}
                        </div>
                        {/* About Us Body End */}

                        {/* About Us Button Start */}
                        <div className="about-us-btn wow fadeInUp">
                            <Link href="/about" className="btn-default">More About Us</Link>
                        </div>
                        {/* About Us Button End */}
                    </div>
                    {/* About Us Content End */}
                </div>
            </div>
        </div>
    </div>
    {/* About Us Section End */}

    {/* Our Services Section Start */}
    <div className="our-services bg-section dark-section">
        <div className="container">
            <div className="row section-row">
                <div className="col-xl-12">
                    {/* Section Title Start */}
                    <div className="section-title section-title-center">
                        <span className="section-sub-title wow fadeInUp">Our Services</span>
                        <h2 className="text-anime-style-3" data-cursor="-opaque">Insuranc service that keep you protect &amp; confident</h2>
                        <p className="wow fadeInUp">Our strategic growth services are designed to help you scale with clarity, confidence, and purpose we work closely with you to identify opportunities, strengthen</p>
                    </div>
                    {/* Section Title End */}
                </div>
            </div>

            <div className="row">
                <div className="col-xl-4 col-md-6">
                    {/* Service Item Start */}
                    <div className="service-item wow fadeInUp">
                        {/* Service Item Header Start */}
                        <div className="service-item-header">
                            <div className="icon-box">
                                <img src="/images/icon-service-1.svg" alt="" />
                            </div>
                            <div className="service-item-title">
                                <h2><Link href="/service-single">Business Strategy Development</Link></h2> 
                            </div>
                        </div>
                        {/* Service Item Header End */}
                        
                        {/* Service Item Body Start */}
                        <div className="service-item-body">
                            <div className="service-item-content">
                                <p>Our Business Strategy Development is designed to help you scale strategically, increase profitability.</p>
                            </div>
                            <div className="service-item-btn">
                                <Link href="/service-single" className="readmore-btn">Read More</Link>
                            </div>
                        </div>
                        {/* Service Item Body End */}
                    </div>
                    {/* Service Item End */}
                </div>
                
                <div className="col-xl-4 col-md-6">
                    {/* Service Item Start */}
                    <div className="service-item wow fadeInUp">
                        {/* Service Item Header Start */}
                        <div className="service-item-header">
                            <div className="icon-box">
                                <img src="/images/icon-service-2.svg" alt="" />
                            </div>
                            <div className="service-item-title">
                                <h2><Link href="/service-single">Executive Leadership Coaching</Link></h2> 
                            </div>
                        </div>
                        {/* Service Item Header End */}
                        
                        {/* Service Item Body Start */}
                        <div className="service-item-body">
                            <div className="service-item-content">
                                <p>Our Business Strategy Development is designed to help you scale strategically, increase profitability.</p>
                            </div>
                            <div className="service-item-btn">
                                <Link href="/service-single" className="readmore-btn">Read More</Link>
                            </div>
                        </div>
                        {/* Service Item Body End */}
                    </div>
                    {/* Service Item End */}
                </div>

                <div className="col-xl-4 col-md-6">
                    {/* Service Item Start */}
                    <div className="service-item wow fadeInUp">
                        {/* Service Item Header Start */}
                        <div className="service-item-header">
                            <div className="icon-box">
                                <img src="/images/icon-service-3.svg" alt="" />
                            </div>
                            <div className="service-item-title">
                                <h2><Link href="/service-single">Mindset &amp; Confidence Training</Link></h2> 
                            </div>
                        </div>
                        {/* Service Item Header End */}
                        
                        {/* Service Item Body Start */}
                        <div className="service-item-body">
                            <div className="service-item-content">
                                <p>Our Business Strategy Development is designed to help you scale strategically, increase profitability.</p>
                            </div>
                            <div className="service-item-btn">
                                <Link href="/service-single" className="readmore-btn">Read More</Link>
                            </div>
                        </div>
                        {/* Service Item Body End */}
                    </div>
                    {/* Service Item End */}
                </div>

                <div className="col-lg-12">
                    {/* Section Footer Text Start */}
                    <div className="section-footer-text wow fadeInUp"> 
                        <p><span>Free</span>Let's make something great work together. <Link href="/services">View all services</Link></p>
                    </div>
                    {/* Section Footer Text End */}
                </div>
            </div>
        </div>
    </div>
    {/* Our Service Section End */}

    {/* Our Expertise Section Start */}
    <div className="our-expertise">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-xl-6">
                    {/* Expertise Content Start */}
                    <div className="expertise-content">
                        {/* Section Title Start */}
                        <div className="section-title">
                            <span className="section-sub-title wow fadeInUp">Our Expertise</span>
                            <h2 className="text-anime-style-3" data-cursor="-opaque">Proven expertise in life and business coaching</h2>
                            <p className="wow fadeInUp">With years of hands-on experience guiding individuals, entrepreneurs, and leaders, we bring practical insight and results-driven strategies.</p>
                        </div>
                        {/* Section Title End */}

                        {/* Expertise Body Start */}
                        <div className="expertise-body">
                            {/* Skills Progress Bar Start */}
                            <div className="skills-progress-bar">
                                {/* Skill Item Start */}
                                <div className="skillbar" data-percent="95%">
                                    <div className="skill-data">
                                        <div className="skill-title">Clarity of Goals</div>
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
                                <div className="skillbar" data-percent="92%">
                                    <div className="skill-data">
                                        <div className="skill-title">Action Plan Execution</div>
                                        <div className="skill-no">92%</div>
                                    </div>
                                    <div className="skill-progress">
                                        <div className="count-bar"></div>
                                    </div>
                                </div>
                                {/* Skill Item End */}
                            </div>
                            {/* Skills Progress Bar End */}
                        </div>
                        {/* Expertise Body End */}

                        {/* Expertise Button Start */}
                        <div className="expertise-btn wow fadeInUp">
                            <Link href="/contact" className="btn-default">contact us</Link>
                        </div>
                        {/* Expertise Button End */}
                    </div>
                    {/* Expertise Content End */}
                </div>

                <div className="col-xl-6">
                    {/* Expertise Image Box Start */}
                    <div className="expertise-image-box">
                        {/* Expertise Image Box 1 Start */}
                        <div className="expertise-image-box-1">
                            {/* Expertise Image Start */}
                            <div className="expertise-image">
                                <figure className="image-anime reveal">
                                    <img src="/images/expertise-image-1.jpg" alt="" />
                                </figure>
                            </div>
                            {/* Expertise Image End */}
                        </div>
                        {/* Expertise Image Box 1 End */}

                        {/* Expertise Image Box 2 Start */}
                        <div className="expertise-image-box-2">
                            {/* Experience Circle Start */}
                            <div className="experience-circle">
                                <img src="/images/experience-circle.svg" alt="" />
                            </div>
                            {/* Experience Circle End */}

                            {/* Expertise Image Start */}
                            <div className="expertise-image">
                                <figure className="image-anime reveal">
                                    <img src="/images/expertise-image-2.jpg" alt="" />
                                </figure>
                            </div>
                            {/* Expertise Image End */}
                        </div>
                        {/* Expertise Image Box 2 End */}
                    </div>
                    {/* Expertise Image Box End */}
                </div>
            </div>
        </div>
    </div>
    {/* Our Expertise Section End */}

    {/* Why Choose Us Section Start */}
    <div className="why-choose-us bg-section">
        <div className="container">
            <div className="row section-row">
                <div className="col-xl-12">
                    {/* Section Title Start */}
                    <div className="section-title section-title-center">
                        <span className="section-sub-title wow fadeInUp">Why Choose Us</span>
                        <h2 className="text-anime-style-3" data-cursor="-opaque">Why choose our coaching</h2>
                        <p className="wow fadeInUp">We combine proven strategies with personalized guidance to help you achieve real, measurable results our coaching is tailored to your unique goals.</p>
                    </div>
                    {/* Section Title End */}
                </div>
            </div>

            <div className="row">
                <div className="col-xl-4 col-md-6">
                    {/* Why Choose Item Start */}
                    <div className="why-choose-item wow fadeInUp">
                        {/* Why Choose Item Image Start */}
                        <div className="why-choose-item-image">
                            <figure>
                                <img src="/images/why-choose-image-1.jpg" alt="" />
                            </figure>
                        </div>
                        {/* Why Choose Item Image End */}

                        {/* Why Choose Item Content Start */}
                        <div className="why-choose-item-content">
                            <h3>Lives Transformed</h3>
                            <div className="why-choose-content-image">
                                <img src="/images/why-choose-content-image.png" alt="" />
                            </div>
                        </div>
                        {/* Why Choose Item Content End */}
                    </div>
                    {/* Why Choose Item End */}
                </div>

                <div className="col-xl-4 col-md-6">
                    {/* Why Choose Image Start */}
                    <div className="why-choose-image wow fadeInUp">
                        <figure className="image-anime">
                            <img src="/images/why-choose-image-2.jpg" alt="" />
                        </figure>
                    </div>
                    {/* Why Choose Image End */}
                </div>

                <div className="col-xl-4 col-md-6">
                    {/* Why Choose Cta Item Start */}
                    <div className="why-choose-cta-item wow fadeInUp">
                        <div className="why-choose-cta-item-image">
                            <figure>
                                <img src="/images/why-choose-image-3.jpg" alt="" />
                            </figure>
                        </div>

                        <div className="why-choose-cta-body">
                            <div className="icon-box">
                                <img src="/images/icon-why-choose-cta.svg" alt="" />
                            </div>

                            <div className="why-choose-cta-content">
                                <p>Virtual Consultation</p>
                                <h2>Get Online Face to Face Virtual Therapy </h2>

                                <div className="why-choose-cta-btn">
                                    <Link href="/contact" className="btn-default">Get Consultation</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Why Choose Cta Item End */}
                </div>

                <div className="col-lg-12">
                    {/* Why Choose Slider Start */}
                    <div className="why-choose-slider-box wow fadeInUp">
                        {/* Why Choose Slider Content Start */}
                        <div className="why-choose-slider-content">
                            <hr />
                            Trusted By
                            <hr />
                        </div>
                        {/* Why Choose Slider Content End */}
                        
                        {/* Why Choose Logo Slider Start */}
                        <div className="why-choose-logo-slider">
                            <Carousel variant="logos">
                                    {/* Why Choose Logo Start */}
                                    <div className="swiper-slide">
                                        <div className="why-choose-logo">
                                            <img src="/images/why-choose-logo-1.svg" alt="" />
                                        </div>
                                    </div>
                                    {/* Why Choose Logo End */}

                                    {/* Why Choose Logo Start */}
                                    <div className="swiper-slide">
                                        <div className="why-choose-logo">
                                            <img src="/images/why-choose-logo-2.svg" alt="" />
                                        </div>
                                    </div>
                                    {/* Why Choose Logo End */}

                                    {/* Why Choose Logo Start */}
                                    <div className="swiper-slide">
                                        <div className="why-choose-logo">
                                            <img src="/images/why-choose-logo-3.svg" alt="" />
                                        </div>
                                    </div>
                                    {/* Why Choose Logo End */}

                                    {/* Why Choose Logo Start */}
                                    <div className="swiper-slide">
                                        <div className="why-choose-logo">
                                            <img src="/images/why-choose-logo-4.svg" alt="" />
                                        </div>
                                    </div>
                                    {/* Why Choose Logo End */}

                                    {/* Why Choose Logo Start */}
                                    <div className="swiper-slide">
                                        <div className="why-choose-logo">
                                            <img src="/images/why-choose-logo-2.svg" alt="" />
                                        </div>
                                    </div>
                                    {/* Why Choose Logo End */}
                                </Carousel>
                        </div>
                        {/* Why Choose Logo Slider End */}
                    </div>
                    {/* Why Choose Slider End */}
                </div>
            </div>
        </div>
    </div>
    {/* Why Choose Us Section End */}

    {/* Our Case Study Section Start */}
    <div className="our-case-study">
        <div className="container">
            <div className="row section-row">
                <div className="col-xl-12">
                    {/* Section Title Start */}
                    <div className="section-title section-title-center">
                        <span className="section-sub-title wow fadeInUp">Case Study's</span>
                        <h2 className="text-anime-style-3" data-cursor="-opaque">Success stories that inspire meaningful growth</h2>
                    </div>
                    {/* Section Title End */}
                </div>
            </div>

            <div className="row">
                <div className="col-xl-4 col-md-6">
                    {/* Case Study Item Start */}
                    <div className="case-study-item wow fadeInUp">
                        {/* Case Study Item Image Start */}
                        <div className="case-study-item-image">
                            <Link href="/case-study-single" data-cursor-text="View">
                                <figure>
                                    <img src="/images/case-study-1.jpg" alt="" />
                                </figure>
                            </Link>
                        </div>
                        {/* Case Study Item Image End */}

                        {/* Case Study Item Contant Start */}
                        <div className="case-study-item-contant">
                            <ul>
                                <li><a href="#">Growth</a></li>
                                <li><a href="#">Focus</a></li>
                            </ul>
                            <h2><Link href="/case-study-single">From Stuck to Scalable</Link></h2>
                        </div>
                        {/* Case Study Item Contant End */}
                    </div>
                    {/* Case Study Item End */}
                </div>

                <div className="col-xl-4 col-md-6">
                    {/* Case Study Item Start */}
                    <div className="case-study-item wow fadeInUp">
                        {/* Case Study Item Image Start */}
                        <div className="case-study-item-image">
                            <Link href="/case-study-single" data-cursor-text="View">
                                <figure>
                                    <img src="/images/case-study-2.jpg" alt="" />
                                </figure>
                            </Link>
                        </div>
                        {/* Case Study Item Image End */}

                        {/* Case Study Item Contant Start */}
                        <div className="case-study-item-contant">
                            <ul>
                                <li><a href="#">Success</a></li>
                                <li><a href="#">Vision</a></li>
                            </ul>
                            <h2><Link href="/case-study-single">Clarity to Consistent Results</Link></h2>
                        </div>
                        {/* Case Study Item Contant End */}
                    </div>
                    {/* Case Study Item End */}
                </div>

                <div className="col-xl-4 col-md-6">
                    {/* Case Study Item Start */}
                    <div className="case-study-item wow fadeInUp">
                        {/* Case Study Item Image Start */}
                        <div className="case-study-item-image">
                            <Link href="/case-study-single" data-cursor-text="View">
                                <figure>
                                    <img src="/images/case-study-3.jpg" alt="" />
                                </figure>
                            </Link>
                        </div>
                        {/* Case Study Item Image End */}

                        {/* Case Study Item Contant Start */}
                        <div className="case-study-item-contant">
                            <ul>
                                <li><a href="#">Clarity</a></li>
                                <li><a href="#">Mindset</a></li>
                            </ul>
                            <h2><Link href="/case-study-single">The High-Performance Reset</Link></h2>
                        </div>
                        {/* Case Study Item Contant End */}
                    </div>
                    {/* Case Study Item End */}
                </div>

                <div className="col-lg-12">
                    {/* Section Footer Text Start */}
                    <div className="section-footer-text section-satisfy-img wow fadeInUp">
                        {/* Satisfy Client Images Start */}
                        <div className="satisfy-client-images">
                            <div className="satisfy-client-image">
                                <figure className="image-anime">
                                    <img src="/images/author-1.jpg" alt="" />
                                </figure>
                            </div>
                            <div className="satisfy-client-image add-more">
                                <img src="/images/icon-phone-white.svg" alt="" />
                            </div>
                        </div>
                        {/* Satisfy Client Images End */}    
                        <p>Let's make something great work together. <Link href="/case-study">View all case-study.</Link></p>
                    </div>
                    {/* Section Footer Text End */}
                </div>
            </div>
        </div>
    </div>
    {/* Our Case Study Section End */}

    {/* How It Work Section Start */}
    <div className="how-it-work dark-section bg-section">
        <div className="container">
            <div className="row">
                <div className="col-xl-6">
                    {/* How Work Content Start */}
                    <div className="how-work-content">
                        {/* Section Title Start */}
                        <div className="section-title section-title-center">
                            <span className="section-sub-title wow fadeInUp">How It Work</span>
                            <h2 className="text-anime-style-3" data-cursor="-opaque">How our coaching process delivers results</h2>
                            <p className="wow fadeInUp">Our coaching process is structured, personalized, and action-oriented to measurable progress we begin by gaining deep clarity on your goals.</p>
                        </div>
                        {/* Section Title End */}

                        {/* How Work Button Start */}
                        <div className="how-work-btn wow fadeInUp">
                            <Link href="/contact" className="btn-default btn-highlighted">Get Consultation</Link>
                        </div>
                        {/* How Work Button End */}
                    </div>
                    {/* How Work Content End */}
                </div>

                <div className="col-xl-6">
                    {/* How It Work image Start */}
                    <div className="how-it-work-image">
                        <figure className="image-anime reveal">
                            <img src="/images/how-it-work-image.jpg" alt="" />
                        </figure>
                    </div>
                    {/* How It Work image End */}
                </div>

                <div className="col-xl-12">
                    {/* How Work Item List Start */}
                    <div className="how-work-item-list">
                        {/* How Work Item Start */}
                        <div className="how-work-item wow fadeInUp">
                            {/* How Work Item Header Start */}
                            <div className="how-work-item-header">
                                <div className="icon-box">
                                    <img src="/images/icon-how-work-item-1.svg" alt="" />
                                </div>
                                <div className="how-work-item-title">
                                    <p>step - 01</p>
                                    <h3>Discovery and Clarity</h3>
                                </div>
                            </div>
                            {/* How Work Item Header End */}

                            {/* How Work Item Body Start */}
                            <div className="how-work-item-body">
                                <p>We begin with a deep discovery understand your goals, challenges, vision,</p>
                            </div>
                            {/* How Work Item Body End */}
                        </div>
                        {/* How Work Item End */}

                        {/* How Work Item Start */}
                        <div className="how-work-item wow fadeInUp">
                            {/* How Work Item Header Start */}
                            <div className="how-work-item-header">
                                <div className="icon-box">
                                    <img src="/images/icon-how-work-item-2.svg" alt="" />
                                </div>
                                <div className="how-work-item-title">
                                    <p>step - 02</p>
                                    <h3>Strategic Roadmap Creation</h3>
                                </div>
                            </div>
                            {/* How Work Item Header End */}

                            {/* How Work Item Body Start */}
                            <div className="how-work-item-body">
                                <p>We begin with a deep discovery understand your goals, challenges, vision,</p>
                            </div>
                            {/* How Work Item Body End */}
                        </div>
                        {/* How Work Item End */}

                        {/* How Work Item Start */}
                        <div className="how-work-item wow fadeInUp">
                            {/* How Work Item Header Start */}
                            <div className="how-work-item-header">
                                <div className="icon-box">
                                    <img src="/images/icon-how-work-item-3.svg" alt="" />
                                </div>
                                <div className="how-work-item-title">
                                    <p>step - 03</p>
                                    <h3>Focused Coaching Sessions</h3>
                                </div>
                            </div>
                            {/* How Work Item Header End */}

                            {/* How Work Item Body Start */}
                            <div className="how-work-item-body">
                                <p>We begin with a deep discovery understand your goals, challenges, vision,</p>
                            </div>
                            {/* How Work Item Body End */}
                        </div>
                        {/* How Work Item End */}
                    </div>
                    {/* How Work Item List End */}
                </div>
            </div>
        </div>
    </div>
    {/* How It Work Section End */}

    {/* Our Pricing Section Start */}
    <div className="our-pricing">
        <div className="container">
            <div className="row section-row">
                <div className="col-lg-12">
                    {/* Section Title Start */}
                    <div className="section-title section-title-center">
                        <span className="section-sub-title wow fadeInUp">Our Pricing Plans</span>
                        <h2 className="text-anime-style-3" data-cursor="-opaque">Choose the plan that fits</h2>
                        <p className="wow fadeInUp">Get clear, value-driven pricing with coaching plans designed to support your personal and professional growth every step of the way.</p>
                    </div>
                    {/* Section Title End */}
                </div>
            </div>

            <div className="row">
                <div className="col-xl-4 col-md-6">
                    {/* Pricing Item Start */}
                    <div className="pricing-item wow fadeInUp">
                        {/* Pricing Item Header Start */}
                        <div className="pricing-item-content">
                            <h2>Starter Growth</h2>
                            <p>Perfect for individuals seeking clarity.</p>
                        </div>
                        {/* Pricing Item Header End */}

                        {/* Pricing Item Body Start */}
                        <div className="pricing-item-body">
                            {/* Pricing Item Price Start */}
                            <div className="pricing-item-price">
                                <h2>$149.00</h2>
                                <p>/ Monthly</p>
                            </div>
                            {/* Pricing Item Price End */}

                            {/* Pricing Item Button Start */}
                            <div className="pricing-item-btn">
                                <Link href="/contact" className="btn-default">Get Stated</Link>
                            </div>
                            {/* Pricing Item Button End */}
                        </div>
                        {/* Pricing Item Body End */}
                            
                        {/* Pricing Item List Start */}
                        <div className="pricing-item-list">
                            <h3>What's included:</h3>
                            <ul>
                                <li>Email Support Between Sessions</li>
                                <li>Weekly Private Coaching Sessions</li>
                                <li>Quartery Deep Dive Strategy Review</li>
                            </ul>
                        </div>
                        {/* Pricing Item List End */}                      
                    </div>
                    {/* Pricing Item End */}
                </div>

                <div className="col-xl-4 col-md-6">
                    {/* Pricing Item Start */}
                    <div className="pricing-item wow fadeInUp">
                        {/* Pricing Item Header Start */}
                        <div className="pricing-item-content">
                            <h2>Professional Success</h2>
                            <p>Perfect for individuals seeking clarity.</p>
                        </div>
                        {/* Pricing Item Header End */}

                        {/* Pricing Item Body Start */}
                        <div className="pricing-item-body">
                            {/* Pricing Item Price Start */}
                            <div className="pricing-item-price">
                                <h2>$299.00</h2>
                                <p>/ Monthly</p>
                            </div>
                            {/* Pricing Item Price End */}

                            {/* Pricing Item Button Start */}
                            <div className="pricing-item-btn">
                                <Link href="/contact" className="btn-default">Get Stated</Link>
                            </div>
                            {/* Pricing Item Button End */}
                        </div>
                        {/* Pricing Item Body End */}
                            
                        {/* Pricing Item List Start */}
                        <div className="pricing-item-list">
                            <h3>What's included:</h3>
                            <ul>
                                <li>Email Support Between Sessions</li>
                                <li>Weekly Private Coaching Sessions</li>
                                <li>Quartery Deep Dive Strategy Review</li>
                            </ul>
                        </div>
                        {/* Pricing Item List End */}                      
                    </div>
                    {/* Pricing Item End */}
                </div>

                <div className="col-xl-4 col-md-6">
                    {/* Pricing Item Start */}
                    <div className="pricing-item wow fadeInUp">
                        {/* Pricing Item Header Start */}
                        <div className="pricing-item-content">
                            <h2>Elite Transformation</h2>
                            <p>Perfect for individuals seeking clarity.</p>
                        </div>
                        {/* Pricing Item Header End */}

                        {/* Pricing Item Body Start */}
                        <div className="pricing-item-body">
                            {/* Pricing Item Price Start */}
                            <div className="pricing-item-price">
                                <h2>$599.00</h2>
                                <p>/ Monthly</p>
                            </div>
                            {/* Pricing Item Price End */}

                            {/* Pricing Item Button Start */}
                            <div className="pricing-item-btn">
                                <Link href="/contact" className="btn-default">Get Stated</Link>
                            </div>
                            {/* Pricing Item Button End */}
                        </div>
                        {/* Pricing Item Body End */}
                            
                        {/* Pricing Item List Start */}
                        <div className="pricing-item-list">
                            <h3>What's included:</h3>
                            <ul>
                                <li>Email Support Between Sessions</li>
                                <li>Weekly Private Coaching Sessions</li>
                                <li>Quartery Deep Dive Strategy Review</li>
                            </ul>
                        </div>
                        {/* Pricing Item List End */}                      
                    </div>
                    {/* Pricing Item End */}
                </div>

                <div className="col-lg-12">
                    {/* Pricing Benifit List Start */}
                    <div className="pricing-benefit-list wow fadeInUp">
                        <ul>
                            <li><img src="/images/icon-pricing-benefit-1.svg" alt="" />Get 30 day free trial</li>
                            <li><img src="/images/icon-pricing-benefit-2.svg" alt="" />No any hidden fee pay</li>
                            <li><img src="/images/icon-pricing-benefit-3.svg" alt="" />You can cancel anytime </li>
                        </ul>
                    </div>
                    {/* Pricing Benifit List End */}
                </div>
            </div>
        </div>
    </div>
    {/* Our Pricing Section End */}

    {/* Our Testimonials Section Start */}
    <div className="our-testimonials bg-section">
        <div className="container">
            <div className="row section-row">
                <div className="col-lg-12">
                    {/* Section Title Start */}
                    <div className="section-title section-title-center">
                        <span className="section-sub-title wow fadeInUp">Testimonials</span>
                        <h2 className="text-anime-style-3" data-cursor="-opaque">Client voices celebrating real transformation</h2>
                    </div>
                    {/* Section Title End */}
                </div>
            </div>

            <div className="row">
                <div className="col-xl-4 col-md-6">
                    {/* Testimonials Image Box Start */}
                    <div className="testimonials-image-box wow fadeInUp">
                        {/* Testimonials Image Start */}
                        <div className="testimonials-image">
                            <figure className="image-anime">
                                <img src="/images/testimonials-image.jpg" alt="" />
                            </figure>
                        </div>
                        {/* Testimonials Image End */}

                        {/* Testimonials Review Box Start */}
                        <div className="testimonials-review-box">
                            {/* Testimonials Review Box Header Start */}
                            <div className="testimonials-review-box-header">
                                <div className="icon-box">
                                    <img src="/images/icon-google.svg" alt="" />
                                </div>
                                <div className="testimonials-review-header-content">
                                    <h2><Counter className="counter" value={"4.9"} />/5</h2>
                                        <span className="google-rating-star"><i className="fa fa-solid fa-star"></i><i className="fa fa-solid fa-star"></i><i className="fa fa-solid fa-star"></i><i className="fa fa-solid fa-star"></i><i className="fa fa-solid fa-star"></i></span>
                                </div>
                            </div>
                            {/* Testimonials Review Box Header End */}

                            {/* Testimonials Review Box Body Start */}
                            <div className="testimonials-review-body">
                                <p>Our 120k Happy Customer</p>
                            </div>
                            {/* Testimonials Review Box Body End */}
                        </div>
                        {/* Testimonials Review Box End */}
                    </div>
                    {/* Testimonials Image Box End */}
                </div>            

                <div className="col-xl-8 col-md-6">
                    {/* Testimonial Slider Start */}
                    <div className="testimonial-slider wow fadeInUp">
                        <Carousel variant="testimonials">
                                {/* Testimonial Slide Start */}
                                <div className="swiper-slide">
                                    {/* Testimonial Item Start */}
                                    <div className="testimonial-item">
                                        <div className="testimonial-item-header">
                                            <div className="testimonial-item-rating">
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                            </div>
                                            <div className="testimonial-item-content">
                                                <p>“The practical tools &amp; mindset shifts I gain during coach helped me become a more effective leader &amp; communicator. I highly recommend this coaching to anyone seeking real growth.”</p>
                                            </div>
                                        </div>
                                        <div className="testimonial-item-author">
                                            <div className="testimonial-item-author-image">
                                                <figure className="image-anime">
                                                    <img src="/images/author-1.jpg" alt="" />
                                                </figure>
                                            </div>
                                            <div className="testimonial-item-author-content">
                                                <h2>Emily Rodriguez</h2>
                                                <p>Career Professional</p>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Testimonial Item End */}
                                </div>
                                {/* Testimonial Slide End */}

                                {/* Testimonial Slide Start */}
                                <div className="swiper-slide">
                                    {/* Testimonial Item Start */}
                                    <div className="testimonial-item">
                                        <div className="testimonial-item-header">
                                            <div className="testimonial-item-rating">
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                            </div>
                                            <div className="testimonial-item-content">
                                                <p>“The practical tools &amp; mindset shifts I gain during coach helped me become a more effective leader &amp; communicator. I highly recommend this coaching to anyone seeking real growth.”</p>
                                            </div>
                                        </div>
                                        <div className="testimonial-item-author">
                                            <div className="testimonial-item-author-image">
                                                <figure className="image-anime">
                                                    <img src="/images/author-2.jpg" alt="" />
                                                </figure>
                                            </div>
                                            <div className="testimonial-item-author-content">
                                                <h2>Olivia Bennett</h2>
                                                <p>Small Business Owner</p>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Testimonial Item End */}
                                </div>
                                {/* Testimonial Slide End */}

                                {/* Testimonial Slide Start */}
                                <div className="swiper-slide">
                                    {/* Testimonial Item Start */}
                                    <div className="testimonial-item">
                                        <div className="testimonial-item-header">
                                            <div className="testimonial-item-rating">
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                            </div>
                                            <div className="testimonial-item-content">
                                                <p>“The practical tools &amp; mindset shifts I gain during coach helped me become a more effective leader &amp; communicator. I highly recommend this coaching to anyone seeking real growth.”</p>
                                            </div>
                                        </div>                                        
                                        <div className="testimonial-item-author">
                                            <div className="testimonial-item-author-image">
                                                <figure className="image-anime">
                                                    <img src="/images/author-3.jpg" alt="" />
                                                </figure>
                                            </div>
                                            <div className="testimonial-item-author-content">
                                                <h2>Jane Cooper</h2>
                                                <p>Founder &amp; Lead Coach</p>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Testimonial Item End */}
                                </div>
                                {/* Testimonial Slide End */}
                            </Carousel>
                    </div>
                    {/* Testimonial Slider End */}
                </div>

                <div className="col-lg-12">
                    {/* Section Footer Text Start */}
                    <div className="section-footer-text section-satisfy-img wow fadeInUp">
                        {/* Satisfy Client Images Start */}
                        <div className="satisfy-client-images">
                            <div className="satisfy-client-image">
                                <figure className="image-anime">
                                    <img src="/images/author-1.jpg" alt="" />
                                </figure>
                            </div>
                            <div className="satisfy-client-image add-more">
                                <img src="/images/icon-phone-white.svg" alt="" />
                            </div>
                        </div>
                        {/* Satisfy Client Images End */}
                        <p>Where smart design and clean energy come together powerfully - <Link href="/testimonials">View all reviews</Link></p>
                        <ul>
                            <li><Counter className="counter" value={"4.9"} />/5</li>
                            <li>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                            </li>
                            <li>Over 4200 Reviews</li>
                        </ul>
                    </div>
                    {/* Section Footer Text End */}
                </div>
            </div>
        </div>
    </div>
    {/* Our Testimonials Section End */}

    {/* Our FAQ'S Section Start */}
    <div className="our-faqs">
        <div className="container">
            <div className="row">
                <div className="col-xl-6">
                    {/* FAQ'S Content Start */}
                    <div className="faqs-content">
                        {/* Section Title Start */}
                        <div className="section-title">
                            <span className="section-sub-title wow fadeInUp">Frequently Asked Questions</span>
                            <h2 className="text-anime-style-3" data-cursor="-opaque">Common questions about our coaching process</h2>
                        </div>
                        {/* Section Title End */}

                        {/* Faqs Body Start */}
                        <div className="faqs-content-list wow fadeInUp">
                            <ul>
                                <li>Mindset transformation to overcome fear and self doubt</li>
                                <li>Strategic business planning for sustainable long term growth</li>
                                <li>Mindset transformation to overcome fear and self doubt</li>
                            </ul>
                        </div>
                        {/* Faqs Body End */}

                        {/* FAQ'S Content Button Start */}
                        <div className="faqs-content-btn wow fadeInUp">
                            <Link href="/faqs" className="btn-default">View All Questions</Link>
                        </div>
                        {/* FAQ'S Content Button End */}
                    </div>
                    {/* FAQ'S Content End */}
                </div>

                <div className="col-xl-6">
                    {/* FAQ Accordion Start */}
                    <Accordion className="faq-accordion" id="accordion">
                        {/* FAQ Item Start */}
                        <AccordionItem className="accordion-item wow fadeInUp" id="collapse1" headingId="heading1" title={"1. How can coaching help me grow personally?"} defaultOpen>
                                <div className="accordion-body">
                                    <p>Coaching helps you gain clarity about your goals, values, and purpose so you can move forward with confidence and direction. </p>
                                </div>
                            </AccordionItem>
                        {/* FAQ Item End */}

                        {/* FAQ Item Start */}
                        <AccordionItem className="accordion-item wow fadeInUp" id="collapse2" headingId="heading2" title={"2. How does coaching improve business performance?"}>
                                <div className="accordion-body">
                                    <p>Coaching helps you gain clarity about your goals, values, and purpose so you can move forward with confidence and direction. </p>
                                </div>
                            </AccordionItem>
                        {/* FAQ Item End */}

                        {/* FAQ Item Start */}
                        <AccordionItem className="accordion-item wow fadeInUp" id="collapse3" headingId="heading3" title={"3. How often are coaching sessions conducted?"}>
                                <div className="accordion-body">
                                    <p>Coaching helps you gain clarity about your goals, values, and purpose so you can move forward with confidence and direction. </p>
                                </div>
                            </AccordionItem>
                        {/* FAQ Item End */}

                        {/* FAQ Item Start */}
                        <AccordionItem className="accordion-item wow fadeInUp" id="collapse4" headingId="heading4" title={"4. How do you track progress and performance?"}>
                                <div className="accordion-body">
                                    <p>Coaching helps you gain clarity about your goals, values, and purpose so you can move forward with confidence and direction. </p>
                                </div>
                            </AccordionItem>
                        {/* FAQ Item End */}

                        {/* FAQ Item Start */}
                        <AccordionItem className="accordion-item wow fadeInUp" id="collapse5" headingId="heading5" title={"5. Do you provide support between sessions?"}>
                                <div className="accordion-body">
                                    <p>Coaching helps you gain clarity about your goals, values, and purpose so you can move forward with confidence and direction. </p>
                                </div>
                            </AccordionItem>
                        {/* FAQ Item End */}
                    </Accordion>
                    {/* FAQ Accordion End */}
                </div>
            </div>
        </div>
    </div>
    {/* Our FAQ'S Section End */}

    {/* Our Book Appointment Section Start */}
    <div className="our-book-appointment bg-section dark-section parallaxie">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    {/* Book Appointment Image Start */}
                    <div className="book-appointment-image">
                        <figure>
                            <img src="/images/book-appointment-image.jpg" alt="" />
                        </figure>
                    </div>
                    {/* Book Appointment Image End */}

                    {/* Book Appointment Form Box Start */}
                    <div className="book-appointment-form-box">
                        {/* Section Title Start */}
                        <div className="section-title">
                            <span className="section-sub-title wow fadeInUp">Book Appointment</span>
                            <h2 className="text-anime-style-3" data-cursor="-opaque">Schedule your strategy session today</h2>
                        </div>
                        {/* Section Title End */}

                        {/* Book Apoointment Form Start */}
                        <div className="book-appointment-form wow fadeInUp">
                            <DemoForm id="appointmentForm" action="#" method="POST">
                                <div className="row">                                
                                    <div className="form-group col-md-6 mb-4">
                                        <input type="text" name="fname" className="form-control" id="fname" placeholder="First Name" required aria-label="First Name" />
                                        <div className="help-block with-errors"></div>
                                    </div>
                                    
                                    <div className="form-group col-md-6 mb-4">
                                        <input type="text" name="lname" className="form-control" id="lname" placeholder="Last Name" required aria-label="Last Name" />
                                        <div className="help-block with-errors"></div>
                                    </div>

                                    <div className="form-group col-md-6 mb-4">
                                        <input type="text" name="phone" className="form-control" id="phone" placeholder="Phone Number" required aria-label="Phone Number" />
                                        <div className="help-block with-errors"></div>
                                    </div>                           
                                                                        
                                    <div className="form-group col-md-6 mb-4">
                                        <select name="treatment" className="form-control form-select" defaultValue="" id="treatment" required aria-label="treatment">
                                            <option value="" disabled>Select Treatment</option>
                                            <option value="business_strategy_development">Business Strategy Development</option>
                                            <option value="executive_leadership_coaching">Executive Leadership Coaching</option>
                                            <option value="mindset_confidence_training">Mindset and Confidence Training</option>
                                            <option value="personal_development_coaching">Personal Development Coaching</option>
                                            <option value="startup_entrepreneur_coaching">Startup &amp; Entrepreneur Coaching</option>
                                            <option value="goal_setting_strategy_coaching">Goal Setting &amp; Strategy Coaching</option>
                                        </select>
                                        <div className="help-block with-errors"></div>
                                    </div>

                                    <div className="form-group col-md-12 mb-4">
                                        <textarea name="message" className="form-control" id="message" rows="5" placeholder="Message" aria-label="Message"></textarea>
                                        <div className="help-block with-errors"></div>
                                    </div>

                                    <div className="col-md-12">
                                        <div className="appointment-form-btn">
                                            <button type="submit" className="btn-default btn-highlighted"><span>Submit Message</span></button>
                                            
                                        </div>
                                    </div>
                                </div>
                            </DemoForm>
                        </div>
                        {/* Book Apoointment Form End */}
                    </div>
                    {/* Book Appointment Form Box End */}
                </div>
            </div>
        </div>
    </div>
    {/* Our Book Appointment Section End */}

    {/* Our Blog Section Start */}
    <div className="our-blog">
        <div className="container">
            <div className="row section-row align-items-center">
                <div className="col-xl-6">
                    {/* Section Title Start */}
                    <div className="section-title">
                        <span className="section-sub-title wow fadeInUp">Latest Blogs</span>
                        <h2 className="text-anime-style-3" data-cursor="-opaque">Insights, trend and updates from the solar industry</h2>
                    </div>
                    {/* Section Title End */}
                </div>

                <div className="col-xl-6">
                    {/* Section Content Button Start */}
                    <div className="section-content-btn">
                        {/* Section Title Content Start */}
                        <div className="section-title-content wow fadeInUp">
                            <p>Stay up to date with in-depth insights, emerging trends, and important updates from the solar industry. Our articles cover everything from new.</p>
                        </div>
                        {/* Section Title Content End */}

                        {/* Section Button Start */}
                        <div className="section-btn wow fadeInUp">
                            <Link href="/blog" className="btn-default">View All Blogs</Link>
                        </div>
                        {/* Section Button End */}
                    </div>
                    {/* Section Content Button End */}
                </div>
            </div>

            <div className="row">
                <div className="col-xl-4 col-md-6">
                    {/* Post Item Start */}
                    <div className="post-item wow fadeInUp">
                        {/* Post Featured Image Start*/}
                        <div className="post-featured-image">
                            <Link href="/blog-single" data-cursor-text="View">
                                <figure>
                                    <img src="/images/post-1.jpg" alt="" />
                                </figure>    
                            </Link>                            
                        </div>
                        {/* Post Featured Image End */}

                        {/* Post Item Body Start */}
                        <div className="post-item-body">
                            {/* Post Item Content Start */}
                            <div className="post-item-content">
                                <h2><Link href="/blog-single">Overcoming Self-Doubt in Your Career Journey</Link></h2>
                            </div>
                            {/* Post Item Content End */}
                            
                            {/* Post Readmore Button Start*/}
                            <div className="post-item-btn">
                                <Link href="/blog-single" className="readmore-btn">read more</Link>
                            </div>
                            {/* Post Readmore Button End*/}
                        </div>
                        {/* Post Item Body End */}
                    </div>
                    {/* Post Item End */}
                </div>

                <div className="col-xl-4 col-md-6">
                    {/* Post Item Start */}
                    <div className="post-item wow fadeInUp">
                        {/* Post Featured Image Start*/}
                        <div className="post-featured-image">
                            <Link href="/blog-single" data-cursor-text="View">
                                <figure>
                                    <img src="/images/post-2.jpg" alt="" />
                                </figure>    
                            </Link>                            
                        </div>
                        {/* Post Featured Image End */}

                        {/* Post Item Body Start */}
                        <div className="post-item-body">
                            {/* Post Item Content Start */}
                            <div className="post-item-content">
                                <h2><Link href="/blog-single">How to Create a Balanced Work-Life Routine</Link></h2>
                            </div>
                            {/* Post Item Content End */}
                            
                            {/* Post Readmore Button Start*/}
                            <div className="post-item-btn">
                                <Link href="/blog-single" className="readmore-btn">read more</Link>
                            </div>
                            {/* Post Readmore Button End*/}
                        </div>
                        {/* Post Item Body End */}
                    </div>
                    {/* Post Item End */}
                </div>

                <div className="col-xl-4 col-md-6">
                    {/* Post Item Start */}
                    <div className="post-item wow fadeInUp">
                        {/* Post Featured Image Start*/}
                        <div className="post-featured-image">
                            <Link href="/blog-single" data-cursor-text="View">
                                <figure>
                                    <img src="/images/post-3.jpg" alt="" />
                                </figure>    
                            </Link>                            
                        </div>
                        {/* Post Featured Image End */}

                        {/* Post Item Body Start */}
                        <div className="post-item-body">
                            {/* Post Item Content Start */}
                            <div className="post-item-content">
                                <h2><Link href="/blog-single">5 Daily Habits That Improve Personal Growth</Link></h2>
                            </div>
                            {/* Post Item Content End */}
                            
                            {/* Post Readmore Button Start*/}
                            <div className="post-item-btn">
                                <Link href="/blog-single" className="readmore-btn">read more</Link>
                            </div>
                            {/* Post Readmore Button End*/}
                        </div>
                        {/* Post Item Body End */}
                    </div>
                    {/* Post Item End */}
                </div>
            </div>
        </div>
    </div>
    {/* Our Blog Section End */}

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
