import Link from "next/link";
import { Accordion, AccordionItem, Carousel, Counter, DemoForm, Gallery, VideoLink } from "@/components/interactive";

export const metadata = { title: "Frequently asked questions | Lifeon" };

export default function FaqsPage() {
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
                        <h1 className="text-anime-style-3" data-cursor="-opaque">Frequently asked questions</h1>
                        <nav className="wow fadeInUp">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><Link href="/">home</Link></li>
                                <li className="breadcrumb-item active" aria-current="page">FAQ's</li>
                            </ol>
                        </nav>
                    </div>
                    {/* Page Header Box End */}
                </div>
            </div>
        </div>
    </div>
    {/* Page Header Section End */}

    {/* Page Faqs Start */}
    <div className="page-faqs">
        <div className="container">
            <div className="row">
                <div className="col-lg-4">
                    {/* Page Single Sidebar Start */}
                    <div className="page-single-sidebar">
                        {/* Page Category List Start */}
                        <div className="page-category-list wow fadeInUp">
                            <ul>
                                <li><a href="#faq_1">General coaching questions</a></li>
                                <li><a href="#faq_2">Coaching process questions</a></li>
                                <li><a href="#faq_3">Session &amp; format questions</a></li>
                                <li><a href="#faq_4">Pricing &amp; packages questions</a></li>
                                <li><a href="#faq_5">Result &amp; expectations questions</a></li>
                            </ul>
                        </div>
                        {/* Page Category List End */}

                        {/* Sidebar CTA Box Start */}
                        <div className="sidebar-cta-box wow fadeInUp">
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
                    {/* Page FAQs Catagery Start */}
                    <div className="page-faqs-catagery">
                        {/* FAQs section start */}
                        <div className="page-single-faqs" id="faq_1">
                            {/* Section Title Start */}
                            <div className="section-title">
                                <h2 className="text-anime-style-2" data-cursor="-opaque">General coaching questions</h2>
                            </div>
                            {/* Section Title End */}

                            {/* FAQ Accordion Start */}
                            <Accordion className="faq-accordion our-faq-accordion" id="accordion">
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
                        {/* FAQs section End */}

                        {/* FAQs section start */}
                        <div className="page-single-faqs" id="faq_2">
                            {/* Section Title Start */}
                            <div className="section-title">
                                <h2 className="text-anime-style-2" data-cursor="-opaque">Coaching process questions</h2>
                            </div>
                            {/* Section Title End */}

                            {/* FAQ Accordion Start */}
                            <Accordion className="faq-accordion our-faq-accordion" id="accordion1">
                                {/* FAQ Item Start */}
                                <AccordionItem className="accordion-item wow fadeInUp" id="collapse6" headingId="heading6" title={"1. How does the coaching process work?"} defaultOpen>
                                        <div className="accordion-body">
                                            <p>Our coaching process begins with a discovery session, followed by a personalized growth plan. Regular coaching sessions help implement strategies, track progress, and achieve measurable results.</p>
                                        </div>
                                    </AccordionItem>
                                {/* FAQ Item End */}

                                {/* FAQ Item Start */}
                                <AccordionItem className="accordion-item wow fadeInUp" id="collapse7" headingId="heading7" title={"2. How long does a coaching program last?"}>
                                        <div className="accordion-body">
                                            <p>Our coaching process begins with a discovery session, followed by a personalized growth plan. Regular coaching sessions help implement strategies, track progress, and achieve measurable results.</p>
                                        </div>
                                    </AccordionItem>
                                {/* FAQ Item End */}

                                {/* FAQ Item Start */}
                                <AccordionItem className="accordion-item wow fadeInUp" id="collapse8" headingId="heading8" title={"3. How often are coaching sessions scheduled?"}>
                                        <div className="accordion-body">
                                            <p>Our coaching process begins with a discovery session, followed by a personalized growth plan. Regular coaching sessions help implement strategies, track progress, and achieve measurable results.</p>
                                        </div>
                                    </AccordionItem>
                                {/* FAQ Item End */}

                                {/* FAQ Item Start */}
                                <AccordionItem className="accordion-item wow fadeInUp" id="collapse9" headingId="heading9" title={"4. What goals can coaching help me achieve?"}>
                                        <div className="accordion-body">
                                            <p>Our coaching process begins with a discovery session, followed by a personalized growth plan. Regular coaching sessions help implement strategies, track progress, and achieve measurable results.</p>
                                        </div>
                                    </AccordionItem>
                                {/* FAQ Item End */}

                                {/* FAQ Item Start */}
                                <AccordionItem className="accordion-item wow fadeInUp" id="collapse10" headingId="heading10" title={"5. How do I know if coaching is right for me?"}>
                                        <div className="accordion-body">
                                            <p>Our coaching process begins with a discovery session, followed by a personalized growth plan. Regular coaching sessions help implement strategies, track progress, and achieve measurable results.</p>
                                        </div>
                                    </AccordionItem>
                                {/* FAQ Item End */}
                            </Accordion>
                            {/* FAQ Accordion End */}
                        </div>
                        {/* FAQs section End */}

                        {/* FAQs section start */}
                        <div className="page-single-faqs" id="faq_3">
                            {/* Section Title Start */}
                            <div className="section-title">
                                <h2 className="text-anime-style-2" data-cursor="-opaque">Session &amp; format questions</h2>
                            </div>
                            {/* Section Title End */}

                            {/* FAQ Accordion Start */}
                            <Accordion className="faq-accordion our-faq-accordion" id="accordion2">
                                {/* FAQ Item Start */}
                                <AccordionItem className="accordion-item wow fadeInUp" id="collapse11" headingId="heading11" title={"1. Are coaching sessions online or offline?"} defaultOpen>
                                        <div className="accordion-body">
                                            <p>Most coaching sessions are conducted online via video calls, allowing clients from around the world to participate.</p>
                                        </div>
                                    </AccordionItem>
                                {/* FAQ Item End */}

                                {/* FAQ Item Start */}
                                <AccordionItem className="accordion-item wow fadeInUp" id="collapse12" headingId="heading12" title={"2. How long is each coaching session?"}>
                                        <div className="accordion-body">
                                            <p>Most coaching sessions are conducted online via video calls, allowing clients from around the world to participate.</p>
                                        </div>
                                    </AccordionItem>
                                {/* FAQ Item End */}

                                {/* FAQ Item Start */}
                                <AccordionItem className="accordion-item wow fadeInUp" id="collapse13" headingId="heading13" title={"3. Do you offer group coaching programs?"}>
                                        <div className="accordion-body">
                                            <p>Most coaching sessions are conducted online via video calls, allowing clients from around the world to participate.</p>
                                        </div>
                                    </AccordionItem>
                                {/* FAQ Item End */}

                                {/* FAQ Item Start */}
                                <AccordionItem className="accordion-item wow fadeInUp" id="collapse14" headingId="heading14" title={"4. Do I need to prepare before a coaching session?"}>
                                        <div className="accordion-body">
                                            <p>Most coaching sessions are conducted online via video calls, allowing clients from around the world to participate.</p>
                                        </div>
                                    </AccordionItem>
                                {/* FAQ Item End */}

                                {/* FAQ Item Start */}
                                <AccordionItem className="accordion-item wow fadeInUp" id="collapse15" headingId="heading15" title={"5. Can coaching help improve my leadership skills?"}>
                                        <div className="accordion-body">
                                            <p>Most coaching sessions are conducted online via video calls, allowing clients from around the world to participate.</p>
                                        </div>
                                    </AccordionItem>
                                {/* FAQ Item End */}
                            </Accordion>
                            {/* FAQ Accordion End */}
                        </div>
                        {/* FAQs section End */}

                        {/* FAQs section start */}
                        <div className="page-single-faqs" id="faq_4">
                            {/* Section Title Start */}
                            <div className="section-title">
                                <h2 className="text-anime-style-2" data-cursor="-opaque">Pricing &amp; packages questions</h2>
                            </div>
                            {/* Section Title End */}
                            
                            {/* FAQ Accordion Start */}
                            <Accordion className="faq-accordion our-faq-accordion" id="accordion3">
                                {/* FAQ Item Start */}
                                <AccordionItem className="accordion-item wow fadeInUp" id="collapse16" headingId="heading16" title={"1. What coaching packages do you offer?"} defaultOpen>
                                        <div className="accordion-body">
                                            <p>We offer flexible coaching plans designed for individuals, professionals, entrepreneurs, and executives.</p>
                                        </div>
                                    </AccordionItem>
                                {/* FAQ Item End */}

                                {/* FAQ Item Start */}
                                <AccordionItem className="accordion-item wow fadeInUp" id="collapse17" headingId="heading17" title={"2. Do you offer a free consultation?"}>
                                        <div className="accordion-body">
                                            <p>We offer flexible coaching plans designed for individuals, professionals, entrepreneurs, and executives.</p>
                                        </div>
                                    </AccordionItem>
                                {/* FAQ Item End */}

                                {/* FAQ Item Start */}
                                <AccordionItem className="accordion-item wow fadeInUp" id="collapse18" headingId="heading18" title={"3. Can I upgrade my coaching plan later?"}>
                                        <div className="accordion-body">
                                            <p>We offer flexible coaching plans designed for individuals, professionals, entrepreneurs, and executives.</p>
                                        </div>
                                    </AccordionItem>
                                {/* FAQ Item End */}

                                {/* FAQ Item Start */}
                                <AccordionItem className="accordion-item wow fadeInUp" id="collapse19" headingId="heading19" title={"4. Is coaching suitable for entrepreneurs and startups?"}>
                                        <div className="accordion-body">
                                            <p>We offer flexible coaching plans designed for individuals, professionals, entrepreneurs, and executives.</p>
                                        </div>
                                    </AccordionItem>
                                {/* FAQ Item End */}

                                {/* FAQ Item Start */}
                                <AccordionItem className="accordion-item wow fadeInUp" id="collapse20" headingId="heading20" title={"5. Will coaching help with time management?"}>
                                        <div className="accordion-body">
                                            <p>We offer flexible coaching plans designed for individuals, professionals, entrepreneurs, and executives.</p>
                                        </div>
                                    </AccordionItem>
                                {/* FAQ Item End */}
                            </Accordion>
                            {/* FAQ Accordion End */}
                        </div>
                        {/* FAQs section End */}

                        {/* FAQs section start */}
                        <div className="page-single-faqs" id="faq_5">
                            {/* Section Title Start */}
                            <div className="section-title">
                                <h2 className="text-anime-style-3" data-cursor="-opaque">Result &amp; expectations questions</h2>
                            </div>
                            {/* Section Title End */}
                            
                            {/* FAQ Accordion Start */}
                            <Accordion className="faq-accordion our-faq-accordion" id="accordion4">
                                {/* FAQ Item Start */}
                                <AccordionItem className="accordion-item wow fadeInUp" id="collapse21" headingId="heading21" title={"1. How soon can I expect results from coaching?"} defaultOpen>
                                        <div className="accordion-body">
                                            <p>Results vary depending on commitment and goals, but many clients begin seeing improvements within the first few sessions.</p>
                                        </div>
                                    </AccordionItem>
                                {/* FAQ Item End */}

                                {/* FAQ Item Start */}
                                <AccordionItem className="accordion-item wow fadeInUp" id="collapse22" headingId="heading22" title={"2. Is coaching confidential?"}>
                                        <div className="accordion-body">
                                            <p>Results vary depending on commitment and goals, but many clients begin seeing improvements within the first few sessions.</p>
                                        </div>
                                    </AccordionItem>
                                {/* FAQ Item End */}

                                {/* FAQ Item Start */}
                                <AccordionItem className="accordion-item wow fadeInUp" id="collapse23" headingId="heading23" title={"3. What if I miss a coaching session?"}>
                                        <div className="accordion-body">
                                            <p>Results vary depending on commitment and goals, but many clients begin seeing improvements within the first few sessions.</p>
                                        </div>
                                    </AccordionItem>
                                {/* FAQ Item End */}

                                {/* FAQ Item Start */}
                                <AccordionItem className="accordion-item wow fadeInUp" id="collapse24" headingId="heading24" title={"4. What happens during the first coaching session?"}>
                                        <div className="accordion-body">
                                            <p>Results vary depending on commitment and goals, but many clients begin seeing improvements within the first few sessions.</p>
                                        </div>
                                    </AccordionItem>
                                {/* FAQ Item End */}

                                {/* FAQ Item Start */}
                                <AccordionItem className="accordion-item wow fadeInUp" id="collapse25" headingId="heading25" title={"5. How do I measure progress in coaching?"}>
                                        <div className="accordion-body">
                                            <p>Results vary depending on commitment and goals, but many clients begin seeing improvements within the first few sessions.</p>
                                        </div>
                                    </AccordionItem>
                                {/* FAQ Item End */}
                            </Accordion>
                            {/* FAQ Accordion End */}
                        </div>
                        {/* FAQs section End */}
                    </div> 
                    {/* Page FAQs Catagery End */}
                </div>
            </div>
        </div>
    </div>
    {/* Page Faqs End */}

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
