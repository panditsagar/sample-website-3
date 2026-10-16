import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import { Accordion, AccordionItem, Carousel, Counter, DemoForm, Gallery, VideoLink } from "@/components/interactive";

export const metadata = { title: "About us | Lifeon" };

export default function AboutPage() {
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
                        <AnimatedText as="h1" className="text-anime-style-3" data-cursor="-opaque">About us</AnimatedText>
                        <nav className="wow fadeInUp">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><Link href="/">home</Link></li>
                                <li className="breadcrumb-item active" aria-current="page">About us</li>
                            </ol>
                        </nav>
                    </div>
                    {/* Page Header Box End */}
                </div>
            </div>
        </div>
    </div>
    {/* Page Header Section End */}

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
                            <AnimatedText as="h2" className="text-anime-style-3" data-cursor="-opaque">Empowering growth in life and business</AnimatedText>
                            <p className="wow fadeInUp" data-wow-delay="0.2s">We help individuals and entrepreneurs unlock their true potential by aligning personal clarity with professional strategy.</p>
                        </div>
                        {/* Section Title End */}
                        
                        {/* About Us Item List Start */}
                        <div className="about-us-item-list wow fadeInUp" data-wow-delay="0.4s">
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
                        <div className="about-us-body wow fadeInUp" data-wow-delay="0.6s">
                            {/* About Us Body Item Start */}
                            <div className="about-us-body-item">
                                <h3>“We empower ambitious individuals and entrepreneurs to gain clarity, build confidence, and create lasting success in life and business.”</h3>
                            </div>
                            {/* About Us Body Item End */}
                        </div>
                        {/* About Us Body End */}

                        {/* About Us Button Start */}
                        <div className="about-us-btn wow fadeInUp" data-wow-delay="0.8s">
                            <Link href="/contact" className="btn-default">Contact Us Now</Link>
                        </div>
                        {/* About Us Button End */}
                    </div>
                    {/* About Us Content End */}
                </div>
            </div>
        </div>
    </div>
    {/* About Us Section End */}

   {/* Our Approach Section Start */}
    <div className="our-approach bg-section dark-section">
        <div className="container">
            <div className="row section-row">
                <div className="col-xl-12">
                    {/* Section Title Start */}
                    <div className="section-title section-title-center">
                        <span className="section-sub-title wow fadeInUp">Our Approach</span>
                        <AnimatedText as="h2" className="text-anime-style-3" data-cursor="-opaque">Our proven coaching method</AnimatedText>
                        <p className="wow fadeInUp" data-wow-delay="0.2s">Our proven coaching method combines practical strategies, mindset development, and personalized guidance to help you achieve meaningful results.</p>
                    </div>
                    {/* Section Title End */}
                </div>
            </div>

            <div className="row">
                <div className="col-lg-12">
                    {/* Approach Content Box Start */}
                    <div className="approach-content-box">
                        {/* Approach Image Start */}
                        <div className="approach-image">
                            <figure>
                                <img src="/images/approach-image.jpg" alt="" />
                            </figure>
                        </div>
                        {/* Approach Image End */}

                        {/* Approach Item List Start */}
                        <div className="approach-item-list">
                            {/* Approch item Start */}
                            <div className="approach-item wow fadeInUp">
                                <div className="icon-box">
                                    <img src="/images/icon-approach-item-1.svg" alt="" />
                                </div>
                                <div className="approach-item-content">
                                    <h3>Our Mission</h3>
                                    <p>Our mission is to empower professionals unlock their full potential through.</p>
                                </div>
                            </div>
                            {/* Approch item End */}

                            {/* Approch item Start */}
                            <div className="approach-item wow fadeInUp" data-wow-delay="0.2s">
                                <div className="icon-box">
                                    <img src="/images/icon-approach-item-2.svg" alt="" />
                                </div>
                                <div className="approach-item-content">
                                    <h3>Our Vision</h3>
                                    <p>Our vision is to empower professionals unlock their full potential through.</p>
                                </div>
                            </div>
                            {/* Approch item End */}

                            {/* Approch item Start */}
                            <div className="approach-item wow fadeInUp" data-wow-delay="0.4s">
                                <div className="icon-box">
                                    <img src="/images/icon-approach-item-3.svg" alt="" />
                                </div>
                                <div className="approach-item-content">
                                    <h3>Our Goals</h3>
                                    <p>Our goal is to empower professionals unlock their full potential through.</p>
                                </div>
                            </div>
                            {/* Approch item End */}
                        </div>
                        {/* Approach Item List End */}
                    </div>
                    {/* Approach Content Box End */}
                </div>
            </div>
        </div>
    </div>
   {/* Our Approach Section End */}

    {/* Our Benefit Section Start */}
    <div className="our-benefit">
        <div className="container">
            <div className="row section-row">
                <div className="col-xl-12">
                    {/* Section Title Start */}
                    <div className="section-title section-title-center">
                        <span className="section-sub-title wow fadeInUp">Our Benefits</span>
                        <AnimatedText as="h2" className="text-anime-style-3" data-cursor="-opaque">Benefits of our coaching</AnimatedText>
                        <p className="wow fadeInUp" data-wow-delay="0.2s">Our coaching provides the guidance, clarity, and support you need to achieve meaningful personal and professional growth through personalized strategies.</p>
                    </div>
                    {/* Section Title End */}
                </div>
            </div>

            <div className="row">
                <div className="col-xl-4 col-md-6">
                    {/* Benefits Item Start */}
                    <div className="benefits-item wow fadeInUp">
                        {/* Benefits Item Header Start */}
                        <div className="benefit-item-header">
                            <div className="icon-box">
                                <img src="/images/icon-benefit-item-1.svg" alt="" />
                            </div>
                            <div className="benefit-item-content">
                                <h2>Work Life Balance</h2>
                                <p>Achieving work-life balance means creating harmony between your professional.</p>
                            </div>
                        </div>
                        {/* Benefits Item Header End */}

                        {/* Benefits Item List Start */}
                        <div className="benefit-item-list">
                            <ul>
                                <li>Better Time Management</li>
                                <li>Improved Mental Wellbeing</li>
                                <li>Balanced Professional Growth</li>
                            </ul>
                        </div>
                        {/* Benefits Item List End */}
                    </div>
                    {/* Benefits Item End */}
                </div>

                <div className="col-xl-4 col-md-6">
                    {/* Benefits Item Start */}
                    <div className="benefits-item wow fadeInUp" data-wow-delay="0.2s">
                        {/* Benefits Item Header Start */}
                        <div className="benefit-item-header">
                            <div className="icon-box">
                                <img src="/images/icon-benefit-item-2.svg" alt="" />
                            </div>
                            <div className="benefit-item-content">
                                <h2>Strategic Life Planning</h2>
                                <p>Achieving work-life balance means creating harmony between your professional.</p>
                            </div>
                        </div>
                        {/* Benefits Item Header End */}

                        {/* Benefits Item List Start */}
                        <div className="benefit-item-list">
                            <ul>
                                <li>Smart Decision-Making Framework</li>
                                <li>Actionable Step-by-Step Plans</li>
                                <li>Overcoming Strategic Obstacles</li>
                            </ul>
                        </div>
                        {/* Benefits Item List End */}
                    </div>
                    {/* Benefits Item End */}
                </div>

                <div className="col-xl-4 col-md-6">
                    {/* Benefits Item Start */}
                    <div className="benefits-item wow fadeInUp" data-wow-delay="0.4s">
                        {/* Benefits Item Header Start */}
                        <div className="benefit-item-header">
                            <div className="icon-box">
                                <img src="/images/icon-benefit-item-3.svg" alt="" />
                            </div>
                            <div className="benefit-item-content">
                                <h2>Personal Growth Journey</h2>
                                <p>Achieving work-life balance means creating harmony between your professional.</p>
                            </div>
                        </div>
                        {/* Benefits Item Header End */}

                        {/* Benefits Item List Start */}
                        <div className="benefit-item-list">
                            <ul>
                                <li>Smart Decision-Making Framework</li>
                                <li>Actionable Step-by-Step Plans</li>
                                <li>Overcoming Strategic Obstacles</li>
                            </ul>
                        </div>
                        {/* Benefits Item List End */}
                    </div>
                    {/* Benefits Item End */}
                </div>

                <div className="col-lg-12">
                    {/* Section Footer Text Start */}
                    <div className="section-footer-text section-satisfy-img wow fadeInUp" data-wow-delay="0.2s">
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
                        <p>From Clear Vision to Confident Action - <Link href="/contact">Let's Build Your Success Together!</Link></p>
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
    {/* Our Benefit Section End */}

    {/* Intro Video Section Start */}
    <div className="intro-video bg-section dark-section parallaxie">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    {/* Intro Video Body Start */}
                    <div className="intro-video-body">
                        {/* Video Play Button Start */}
                        <div className="video-play-button wow fadeInUp">
                            <VideoLink href="https://www.youtube.com/watch?v=Y-x0efG1seA" className="popup-video bg-effect" data-cursor-text="Play">
                                <i className="fa-solid fa-play"></i>
                            </VideoLink>
                        </div>
                        {/* Video Play Button End */}

                        {/* Intro Video Content Start */}
                        <div className="intro-video-content">
                            {/* Section Title Start */}
                            <div className="section-title section-title-center">
                                <AnimatedText as="h2" className="text-anime-style-3" data-cursor="-opaque">Watch how we guide clients toward real growth</AnimatedText>
                                <p className="wow fadeInUp" data-wow-delay="0.2s">Watch how our coaching approach helps clients gain clarity, build confidence, and take meaningful steps toward their goals.</p>
                            </div>
                            {/* Section Title End */}

                            {/* Intro Video Button Start */}
                            <div className="intro-video-btn wow fadeInUp" data-wow-delay="0.4s">
                                <Link href="/contact" className="btn-default btn-highlighted">Get Consultation</Link>
                            </div>
                            {/* Intro Video Button End */}
                        </div>
                        {/* Intro Video Content End */}
                    </div>
                    {/* Intro Video Body End */}
                </div>
            </div>
        </div>

        {/* Intro Video Contact Box Start */}
        <div className="intro-video-contact-box">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        {/* Intro Video Contact Content Start */}
                        <div className="intro-video-contact-content-box">
                            {/* Intro Video Contact Title Start */}
                            <div className="intro-video-contact-title">
                                <h2>Have a questions? Call us today!</h2>
                            </div>
                            {/* Intro Video Contact Title End */}
                            
                            {/* Intro Video Contact List Start */}
                            <div className="intro-video-contact-list">
                                {/* Intro Video Contact Item Start */}
                                <div className="intro-video-contact-item">
                                    <div className="icon-box">
                                        <img src="/images/icon-headphone-white.svg" alt="" />
                                    </div>
                                    <div className="intro-video-contact-content">
                                        <p>24/7 Support!</p>
                                        <h3><a href="tel:123456789">(+123) 456 789</a></h3>
                                    </div>
                                </div>
                                {/* Intro Video Contact Item End */}

                                {/* Intro Video Contact Item Start */}
                                <div className="intro-video-contact-item">
                                    <div className="icon-box">
                                        <img src="/images/icon-mail-white.svg" alt="" />
                                    </div>
                                    <div className="intro-video-contact-content">
                                        <p>E-mail Us!</p>
                                        <h3><a href="mailto:info@domainname.com">info@domainname.com</a></h3>
                                    </div>
                                </div>
                                {/* Intro Video Contact Item End */}
                            </div>
                            {/* Intro Video Contact List End */}
                        </div>
                        {/* Intro Video Contact Content End */}
                    </div>
                </div>
            </div>
        </div>
        {/* Intro Video Contact Box End */}
    </div>
    {/* Intro Video Section End */}

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
                            <AnimatedText as="h2" className="text-anime-style-3" data-cursor="-opaque">Proven expertise in life and business coaching</AnimatedText>
                            <p className="wow fadeInUp" data-wow-delay="0.2s">With years of hands-on experience guiding individuals, entrepreneurs, and leaders, we bring practical insight and results-driven strategies.</p>
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
                        <div className="expertise-btn wow fadeInUp" data-wow-delay="0.4s">
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
                            <AnimatedText as="h2" className="text-anime-style-3" data-cursor="-opaque">How our coaching process delivers results</AnimatedText>
                            <p className="wow fadeInUp" data-wow-delay="0.2s">Our coaching process is structured, personalized, and action-oriented to measurable progress we begin by gaining deep clarity on your goals.</p>
                        </div>
                        {/* Section Title End */}

                        {/* How Work Button Start */}
                        <div className="how-work-btn wow fadeInUp" data-wow-delay="0.4s">
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
                        <div className="how-work-item wow fadeInUp" data-wow-delay="0.2s">
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
                        <div className="how-work-item wow fadeInUp" data-wow-delay="0.4s">
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

    {/* Our Team Section Start */}
    <div className="our-team">
        <div className="container">
            <div className="row section-row">
                <div className="col-xl-12">
                    {/* Section Title Start */}
                    <div className="section-title section-title-center">
                        <span className="section-sub-title wow fadeInUp">Our Team</span>
                        <AnimatedText as="h2" className="text-anime-style-3" data-cursor="-opaque">Meet the coaching experts</AnimatedText>
                        <p className="wow fadeInUp" data-wow-delay="0.2s">Meet the passionate professionals dedicated to guiding your personal and professional growth our coaching experts bring experience, insight.</p>
                    </div>
                    {/* Section Title End */}
                </div>
            </div>

            <div className="row">
                <div className="col-xl-4 col-md-6">
                    {/* Team Item Start */}
                    <div className="team-item wow fadeInUp">
                        <div className="team-item-image">
                            <Link href="/team-single" data-cursor-text="View">
                                <figure>
                                    <img src="/images/team-1.jpg" alt="" />
                                </figure>
                            </Link>
                        </div>
                        <div className="team-item-body">
                            <div className="team-social-list">
                                <ul>
                                    <li><a href="#"><i className="fa-brands fa-pinterest-p"></i></a></li>
                                    <li><a href="#"><i className="fa-brands fa-x-twitter"></i></a></li>
                                    <li><a href="#"><i className="fa-brands fa-facebook-f"></i></a></li>
                                    <li><a href="#"><i className="fa-brands fa-instagram"></i></a></li>
                                </ul>
                            </div>
                            <div className="team-item-content">
                                <h2><Link href="/team-single">Emma Carter</Link></h2>
                                <p>Founder &amp; Lead Coach</p>
                            </div>
                        </div>
                    </div>
                    {/* Team Item End */}
                </div>

                <div className="col-xl-4 col-md-6">
                    {/* Team Item Start */}
                    <div className="team-item wow fadeInUp" data-wow-delay="0.2s">
                        <div className="team-item-image">
                            <Link href="/team-single" data-cursor-text="View">
                                <figure>
                                    <img src="/images/team-2.jpg" alt="" />
                                </figure>
                            </Link>
                        </div>
                        <div className="team-item-body">
                            <div className="team-social-list">
                                <ul>
                                    <li><a href="#"><i className="fa-brands fa-pinterest-p"></i></a></li>
                                    <li><a href="#"><i className="fa-brands fa-x-twitter"></i></a></li>
                                    <li><a href="#"><i className="fa-brands fa-facebook-f"></i></a></li>
                                    <li><a href="#"><i className="fa-brands fa-instagram"></i></a></li>
                                </ul>
                            </div>
                            <div className="team-item-content">
                                <h2><Link href="/team-single">Daniel Brooks</Link></h2>
                                <p>Personal Development Coach</p>
                            </div>
                        </div>
                    </div>
                    {/* Team Item End */}
                </div>

                <div className="col-xl-4 col-md-6">
                    {/* Team Item Start */}
                    <div className="team-item wow fadeInUp" data-wow-delay="0.4s">
                        <div className="team-item-image">
                            <Link href="/team-single" data-cursor-text="View">
                                <figure>
                                    <img src="/images/team-3.jpg" alt="" />
                                </figure>
                            </Link>
                        </div>
                        <div className="team-item-body">
                            <div className="team-social-list">
                                <ul>
                                    <li><a href="#"><i className="fa-brands fa-pinterest-p"></i></a></li>
                                    <li><a href="#"><i className="fa-brands fa-x-twitter"></i></a></li>
                                    <li><a href="#"><i className="fa-brands fa-facebook-f"></i></a></li>
                                    <li><a href="#"><i className="fa-brands fa-instagram"></i></a></li>
                                </ul>
                            </div>
                            <div className="team-item-content">
                                <h2><Link href="/team-single">Sophia Martinez</Link></h2>
                                <p>Life Transformation Coach</p>
                            </div>
                        </div>
                    </div>
                    {/* Team Item End */}
                </div>

                <div className="col-lg-12">
                    {/* Section Footer Text Start */}
                    <div className="section-footer-text section-satisfy-img wow fadeInUp" data-wow-delay="0.6s">
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
                        <p>Let's make something great work together. <Link href="/contact">Get Free Quote</Link></p>
                    </div>
                    {/* Section Footer Text End */}
                </div>
            </div>
        </div>
    </div>
    {/* Our Team Section End */}

    {/* Our Testimonials Section Start */}
    <div className="our-testimonials bg-section">
        <div className="container">
            <div className="row section-row">
                <div className="col-lg-12">
                    {/* Section Title Start */}
                    <div className="section-title section-title-center">
                        <span className="section-sub-title wow fadeInUp">Testimonials</span>
                        <AnimatedText as="h2" className="text-anime-style-3" data-cursor="-opaque">Client voices celebrating real transformation</AnimatedText>
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
                    <div className="testimonial-slider wow fadeInUp" data-wow-delay="0.2s">
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
                    <div className="section-footer-text section-satisfy-img wow fadeInUp" data-wow-delay="0.4s">
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
                            <AnimatedText as="h2" className="text-anime-style-3" data-cursor="-opaque">Common questions about our coaching process</AnimatedText>
                        </div>
                        {/* Section Title End */}

                        {/* Faqs Body Start */}
                        <div className="faqs-content-list wow fadeInUp" data-wow-delay="0.2s">
                            <ul>
                                <li>Mindset transformation to overcome fear and self doubt</li>
                                <li>Strategic business planning for sustainable long term growth</li>
                                <li>Mindset transformation to overcome fear and self doubt</li>
                            </ul>
                        </div>
                        {/* Faqs Body End */}

                        {/* FAQ'S Content Button Start */}
                        <div className="faqs-content-btn wow fadeInUp" data-wow-delay="0.4s">
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
                        <AccordionItem className="accordion-item wow fadeInUp" id="collapse2" headingId="heading2" title={"2. How does coaching improve business performance?"} data-wow-delay="0.2s">
                                <div className="accordion-body">
                                    <p>Coaching helps you gain clarity about your goals, values, and purpose so you can move forward with confidence and direction. </p>
                                </div>
                            </AccordionItem>
                        {/* FAQ Item End */}

                        {/* FAQ Item Start */}
                        <AccordionItem className="accordion-item wow fadeInUp" id="collapse3" headingId="heading3" title={"3. How often are coaching sessions conducted?"} data-wow-delay="0.4s">
                                <div className="accordion-body">
                                    <p>Coaching helps you gain clarity about your goals, values, and purpose so you can move forward with confidence and direction. </p>
                                </div>
                            </AccordionItem>
                        {/* FAQ Item End */}

                        {/* FAQ Item Start */}
                        <AccordionItem className="accordion-item wow fadeInUp" id="collapse4" headingId="heading4" title={"4. How do you track progress and performance?"} data-wow-delay="0.6s">
                                <div className="accordion-body">
                                    <p>Coaching helps you gain clarity about your goals, values, and purpose so you can move forward with confidence and direction. </p>
                                </div>
                            </AccordionItem>
                        {/* FAQ Item End */}

                        {/* FAQ Item Start */}
                        <AccordionItem className="accordion-item wow fadeInUp" id="collapse5" headingId="heading5" title={"5. Do you provide support between sessions?"} data-wow-delay="0.8s">
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
