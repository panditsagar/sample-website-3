import Link from "next/link";
import { Accordion, AccordionItem, Carousel, Counter, DemoForm, Gallery, VideoLink } from "@/components/interactive";

export const metadata = { title: "Book appointment | Lifeon" };

export default function BookAppointmentPage() {
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
                        <h1 className="text-anime-style-3" data-cursor="-opaque">Book appointment</h1>
                        <nav className="wow fadeInUp">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><Link href="/">home</Link></li>
                                <li className="breadcrumb-item active" aria-current="page">Book appointment</li>
                            </ol>
                        </nav>
                    </div>
                    {/* Page Header Box End */}
                </div>
            </div>
        </div>
    </div>
    {/* Page Header Section End */}

    {/* Page Book Appointment Start */}
    <div className="page-book-appointment">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-xl-6">
                    {/* Book Appointment Content Start */}
                    <div className="book-appointment-content">
                        {/* Section Title Start */}
                        <div className="section-title section-title-center">
                            <span className="section-sub-title wow fadeInUp">Book Appointment</span>
                            <h2 className="text-anime-style-3" data-cursor="-opaque">Schedule your strategy session today</h2>
                            <p className="wow fadeInUp">Personalized insights, you'll leave the session with practical strategies and a clear direction to move forward confidently in your personal.</p>
                        </div>
                        {/* Section Title End */}

                        {/* Working Hour Box Start */}
                        <div className="working-hour-box wow fadeInUp">
                            <h3>Working Hours:</h3>
                            <ul>
                                <li><span>Monday - Friday:</span>9:00 AM - 6:00 PM</li>
                                <li><span>Saturday:</span>10:00 AM - 3:00 PM</li>
                                <li><span>Sunday:</span>Closed</li>
                            </ul>
                        </div>
                        {/* Working Hour Box End */}
                    </div>
                    {/* Book Appointment Content End */}
                </div>

                <div className="col-xl-6">
                    {/* Book Appointment Form Box Start */}
                    <div className="book-appointment-form-box">
                        {/* Book Appointment Form Content Start */}
                        <div className="book-appointment-form-content wow fadeInUp">
                            <p>Schedule your strategy session today and take the first step toward achieving your personal and professional goals. During this session, we'll explore your challenges, clarify your vision.</p>
                        </div>
                        {/* Book Appointment Form Content End */}

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
                                        <textarea name="message" className="form-control" id="message" rows="3" placeholder="Message" aria-label="Message"></textarea>
                                        <div className="help-block with-errors"></div>
                                    </div>

                                    <div className="col-md-12">
                                        <div className="appointment-form-btn">
                                            <button type="submit" className="btn-default"><span>Submit Message</span></button>
                                            
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
    {/* Page Book Appointment End */}

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

    {/* Our Benefit Section Start */}
    <div className="our-benefit">
        <div className="container">
            <div className="row section-row">
                <div className="col-xl-12">
                    {/* Section Title Start */}
                    <div className="section-title section-title-center">
                        <span className="section-sub-title wow fadeInUp">Our Benefits</span>
                        <h2 className="text-anime-style-3" data-cursor="-opaque">Benefits of our coaching</h2>
                        <p className="wow fadeInUp">Our coaching provides the guidance, clarity, and support you need to achieve meaningful personal and professional growth through personalized strategies.</p>
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
                    <div className="benefits-item wow fadeInUp">
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
                    <div className="benefits-item wow fadeInUp">
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
