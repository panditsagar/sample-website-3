import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import { Accordion, AccordionItem, Carousel, Counter, DemoForm, Gallery, VideoLink } from "@/components/interactive";

export const metadata = { title: "Executive leadership coaching | Lifeon" };

export default function ServiceSinglePage() {
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
                        <AnimatedText as="h1" className="text-anime-style-3" data-cursor="-opaque">Executive leadership coaching</AnimatedText>
                        <nav className="wow fadeInUp">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><Link href="/">home</Link></li>
                                <li className="breadcrumb-item"><Link href="/services">Services</Link></li>
                                <li className="breadcrumb-item active" aria-current="page">Executive leadership coaching</li>
                            </ol>
                        </nav>
                    </div>
                    {/* Page Header Box End */}
                </div>
            </div>
        </div>
    </div>
    {/* Page Header Section End */}

    {/* Page Service Single Start */}
    <div className="page-service-single">
        <div className="container">
            <div className="row">
                <div className="col-lg-4">
                    {/* Page Single Sidebar Start */}
                    <div className="page-single-sidebar">
                        {/* Page Category List Start */}
                        <div className="page-category-list wow fadeInUp">
                            <h2 className="page-category-list-title">Explore Our services</h2>
                            <ul>
                                <li><a href="#">Economy Car Rental</a></li>
                                <li><a href="#">Self-Drive Car Rental</a></li>
                                <li><a href="#">Event Car Rental</a></li>
                                <li><a href="#">Corporate Car Rental </a></li>
                                <li><a href="#">Local City Rentals</a></li>
                            </ul>
                        </div>
                        {/* Page Category List End */}
                        
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
                    {/* Service Single Content Start */}
                    <div className="service-single-content">
                        {/* Page Single Image Start */}
                        <div className="page-single-image">
                            <figure className="image-anime reveal">
                                <img src="/images/service-single-image.jpg" alt="" />
                            </figure>
                        </div>
                        {/* Page Single Image End */}
                        
                        {/* Service Entry Start */}
                        <div className="service-entry">
                            <p className="wow fadeInUp">Executive Leadership Coaching is designed for leaders, executives, entrepreneurs, and professionals who want to strengthen their leadership capabilities and create meaningful impact within their organizations. This coaching program focuses on enhancing strategic thinking, improving communication, and developing the confidence needed to lead teams effectively in today's fast-changing business environment.</p>
                            <p className="wow fadeInUp" data-wow-delay="0.2s">Our personalized coaching approach helps you identify leadership strengths, overcome challenges, and develop practical strategies to guide your team and organization toward sustainable success.</p>
                            
                            {/* Service Entry Info Start */}
                            <div className="service-entry-info-box">
                                <AnimatedText as="h2" className="text-anime-style-3">What you will gain this coaching</AnimatedText>
                                <p className="wow fadeInUp">Our coaching process is designed to help leaders develop the skills needed to manage complex challenges while maintaining focus on their strategic goals.</p>
                                
                                {/* Service Entry Benefit Box Start */}
                                <div className="service-benefit-box wow fadeInUp" data-wow-delay="0.2s">
                                    <h3>Key benefits include:</h3>
                                    <ul>
                                        <li>Improved leadership confidence &amp; presence</li>
                                        <li>Stronger communication &amp; team collaboratin</li>
                                        <li>Better decision-making &amp; strategic thinking</li>
                                        <li>Increased productivity &amp; performance</li>
                                    </ul>
                                </div>
                                {/* Service Entry Benefit Box End */}
                            </div>
                            {/* Service Entry Info End */}

                            {/* Service Focus Box Start */}
                            <div className="service-focus-box">
                                <AnimatedText as="h2" className="text-anime-style-3">Key areas of focus</AnimatedText>
                                <p className="wow fadeInUp">Our coaching focuses on the essential leadership skills needed to succeed in today's dynamic professional environment. We help you strengthen strategic thinking, improve communication, enhance team management abilities, and develop emotional intelligence. </p>
                                
                                {/* Service Focus Item List Start */}
                                <div className="service-focus-item-list">
                                    {/* Service Focus Item Start */}
                                    <div className="service-focus-item">
                                        <div className="service-focus-image">
                                            <figure className="image-anime reveal">
                                                <img src="/images/service-focus-image-1.jpg" alt="" />
                                            </figure>
                                        </div>
                                        <div className="service-focus-content-box wow fadeInUp">
                                            <div className="service-focus-item-header">
                                                <div className="icon-box">
                                                    <img src="/images/icon-service-focus-item-1.svg" alt="" />
                                                </div>
                                                <div className="service-focus-item-title">
                                                    <h3>Leadership Development</h3>
                                                </div>
                                            </div>
                                            <div className="service-focus-item-content">
                                                <p>Build the core leadership skills required to inspire, guide, and support high-performing teams.</p>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Service Focus Item End */}
                                    
                                    {/* Service Focus Item Start */}
                                    <div className="service-focus-item">
                                        <div className="service-focus-image">
                                            <figure className="image-anime reveal">
                                                <img src="/images/service-focus-image-2.jpg" alt="" />
                                            </figure>
                                        </div>
                                        <div className="service-focus-content-box wow fadeInUp" data-wow-delay="0.2s">
                                            <div className="service-focus-item-header">
                                                <div className="icon-box">
                                                    <img src="/images/icon-service-focus-item-2.svg" alt="" />
                                                </div>
                                                <div className="service-focus-item-title">
                                                    <h3>Effective Communication</h3>
                                                </div>
                                            </div>
                                            <div className="service-focus-item-content">
                                                <p>Build the core leadership skills required to inspire, guide, and support high-performing teams.</p>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Service Focus Item End */}
                                </div>
                                {/* Service Focus Item List End */}
                            </div>
                            {/* Service Focus Box End */}

                            {/* Service Process Box Start */}
                            <div className="service-process-box">
                                <AnimatedText as="h2" className="text-anime-style-3">Our coaching process</AnimatedText>
                                <p className="wow fadeInUp">Our coaching process is designed to provide clear guidance, practical strategies, and continuous support throughout your growth journey.</p>
                                
                                {/* Service Process Body Box Start */}
                                <div className="service-process-body-box">
                                    {/* Service Process Item List Start */}
                                    <div className="service-process-item-list">
                                        {/* Service Process Item Start */}
                                        <div className="service-process-item wow fadeInUp">
                                            <div className="service-process-item-no">
                                                <span>01</span>
                                            </div>
                                            <div className="service-process-item-content">
                                                <h3>Initial Assessment</h3>
                                                <p>We begin by understanding your leadership style &amp; the challenges you face.</p>
                                            </div>
                                        </div>
                                        {/* Service Process Item End */}
                                        
                                        {/* Service Process Item Start */}
                                        <div className="service-process-item wow fadeInUp" data-wow-delay="0.2s">
                                            <div className="service-process-item-no">
                                                <span>02</span>
                                            </div>
                                            <div className="service-process-item-content">
                                                <h3>Guided Coaching Session</h3>
                                                <p>We begin by understanding your leadership style &amp; the challenges you face.</p>
                                            </div>
                                        </div>
                                        {/* Service Process Item End */}
                                        
                                        {/* Service Process Item Start */}
                                        <div className="service-process-item wow fadeInUp" data-wow-delay="0.4s">
                                            <div className="service-process-item-no">
                                                <span>03</span>
                                            </div>
                                            <div className="service-process-item-content">
                                                <h3>Progress Evaluation</h3>
                                                <p>We begin by understanding your leadership style &amp; the challenges you face.</p>
                                            </div>
                                        </div>
                                        {/* Service Process Item End */}
                                    </div>
                                    {/* Service Process Item List End */}
                                    
                                    {/* Service Process Video Image Start */}
                                    <div className="service-process-video-image wow fadeInUp">
                                        <figure className="image-anime">
                                            <img src="/images/service-process-video-image.jpg" alt="" />
                                        </figure>
                                        <div className="video-play-button">
                                            <VideoLink href="https://www.youtube.com/watch?v=Y-x0efG1seA" className="popup-video bg-effect" data-cursor-text="Play">
                                                <i className="fa-solid fa-play"></i>
                                            </VideoLink>
                                        </div>
                                    </div>
                                    {/* Service Process Video Image End */}
                                </div>
                                {/* Service Process Body Box End */}
                            </div>
                            {/* Service Process Box End */}
                        </div>
                        {/* Service Entry End */}

                        {/* Page Single FAQs Start */}
                        <div className="page-single-faqs">
                            {/* Section Title Start */}
                            <div className="section-title">
                                <AnimatedText as="h2" className="text-anime-style-3" data-cursor="-opaque">Frequently asked questions</AnimatedText>
                            </div>
                            {/* Section Title End */}
                            
                            {/* FAQ Accordion Start */}
                            <Accordion className="faq-accordion" id="accordion">
                                {/* FAQ Item Start */}
                                <AccordionItem className="accordion-item wow fadeInUp" id="collapse1" headingId="heading1" title={"1. How can coaching help me grow personally?"} defaultOpen>
                                        <div className="accordion-body">
                                            <p>Coaching helps you gain clarity about your goals, values, and purpose so you can move forward with confidence and direction.</p>
                                        </div>
                                    </AccordionItem>
                                {/* FAQ Item End */}

                                {/* FAQ Item Start */}
                                <AccordionItem className="accordion-item wow fadeInUp" id="collapse2" headingId="heading2" title={"2. How does coaching improve business performance?"} data-wow-delay="0.2s">
                                        <div className="accordion-body">
                                            <p>Coaching helps you gain clarity about your goals, values, and purpose so you can move forward with confidence and direction.</p>
                                        </div>
                                    </AccordionItem>
                                {/* FAQ Item End */}

                                {/* FAQ Item Start */}
                                <AccordionItem className="accordion-item wow fadeInUp" id="collapse3" headingId="heading3" title={"3. How often are coaching sessions conducted?"} data-wow-delay="0.4s">
                                        <div className="accordion-body">
                                            <p>Coaching helps you gain clarity about your goals, values, and purpose so you can move forward with confidence and direction.</p>
                                        </div>
                                    </AccordionItem>
                                {/* FAQ Item End */}

                                {/* FAQ Item Start */}
                                <AccordionItem className="accordion-item wow fadeInUp" id="collapse4" headingId="heading4" title={"4. How do you track progress and performance?"} data-wow-delay="0.6s">
                                        <div className="accordion-body">
                                            <p>Coaching helps you gain clarity about your goals, values, and purpose so you can move forward with confidence and direction.</p>
                                        </div>
                                    </AccordionItem>
                                {/* FAQ Item End */}

                                {/* FAQ Item Start */}
                                <AccordionItem className="accordion-item wow fadeInUp" id="collapse5" headingId="heading5" title={"5. Do you provide support between sessions?"} data-wow-delay="0.8s">
                                        <div className="accordion-body">
                                            <p>Coaching helps you gain clarity about your goals, values, and purpose so you can move forward with confidence and direction.</p>
                                        </div>
                                    </AccordionItem>
                                {/* FAQ Item End */}
                            </Accordion>
                            {/* FAQ Accordion End */}
                        </div>
                        {/* Page Single FAQs End */}
                    </div>
                    {/* Service Single Content End */}
                </div>
            </div>
        </div>
    </div>
    {/* Page Service Single End */}

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
