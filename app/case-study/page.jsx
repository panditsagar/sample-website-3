import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import { Accordion, AccordionItem, Carousel, Counter, DemoForm, Gallery, VideoLink } from "@/components/interactive";

export const metadata = { title: "Our case study | Lifeon" };

export default function CaseStudyPage() {
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
                        <AnimatedText as="h1" className="text-anime-style-3" data-cursor="-opaque">Our case study</AnimatedText>
                        <nav className="wow fadeInUp">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><Link href="/">home</Link></li>
                                <li className="breadcrumb-item active" aria-current="page">case study</li>
                            </ol>
                        </nav>
                    </div>
                    {/* Page Header Box End */}
                </div>
            </div>
        </div>
    </div>
    {/* Page Header Section End */}

    {/* Page Case Study Start */}
    <div className="page-case-study">
        <div className="container">
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
                    <div className="case-study-item wow fadeInUp" data-wow-delay="0.2s">
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
                    <div className="case-study-item wow fadeInUp" data-wow-delay="0.4s">
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

                <div className="col-xl-4 col-md-6">
                    {/* Case Study Item Start */}
                    <div className="case-study-item wow fadeInUp" data-wow-delay="0.6s">
                        {/* Case Study Item Image Start */}
                        <div className="case-study-item-image">
                            <Link href="/case-study-single" data-cursor-text="View">
                                <figure>
                                    <img src="/images/case-study-4.jpg" alt="" />
                                </figure>
                            </Link>
                        </div>
                        {/* Case Study Item Image End */}

                        {/* Case Study Item Contant Start */}
                        <div className="case-study-item-contant">
                            <ul>
                                <li><a href="#">Health</a></li>
                                <li><a href="#">Lifestyle</a></li>
                            </ul>
                            <h2><Link href="/case-study-single">Productivity Improvement Case</Link></h2>
                        </div>
                        {/* Case Study Item Contant End */}
                    </div>
                    {/* Case Study Item End */}
                </div>

                <div className="col-xl-4 col-md-6">
                    {/* Case Study Item Start */}
                    <div className="case-study-item wow fadeInUp" data-wow-delay="0.8s">
                        {/* Case Study Item Image Start */}
                        <div className="case-study-item-image">
                            <Link href="/case-study-single" data-cursor-text="View">
                                <figure>
                                    <img src="/images/case-study-5.jpg" alt="" />
                                </figure>
                            </Link>
                        </div>
                        {/* Case Study Item Image End */}

                        {/* Case Study Item Contant Start */}
                        <div className="case-study-item-contant">
                            <ul>
                                <li><a href="#">Goals</a></li>
                                <li><a href="#">Leadership</a></li>
                            </ul>
                            <h2><Link href="/case-study-single">Goal Achievement Journey</Link></h2>
                        </div>
                        {/* Case Study Item Contant End */}
                    </div>
                    {/* Case Study Item End */}
                </div>

                <div className="col-xl-4 col-md-6">
                    {/* Case Study Item Start */}
                    <div className="case-study-item wow fadeInUp" data-wow-delay="1s">
                        {/* Case Study Item Image Start */}
                        <div className="case-study-item-image">
                            <Link href="/case-study-single" data-cursor-text="View">
                                <figure>
                                    <img src="/images/case-study-6.jpg" alt="" />
                                </figure>
                            </Link>
                        </div>
                        {/* Case Study Item Image End */}

                        {/* Case Study Item Contant Start */}
                        <div className="case-study-item-contant">
                            <ul>
                                <li><a href="#">Energy</a></li>
                                <li><a href="#">Harmony</a></li>
                            </ul>
                            <h2><Link href="/case-study-single">Entrepreneur Success Story</Link></h2>
                        </div>
                        {/* Case Study Item Contant End */}
                    </div>
                    {/* Case Study Item End */}
                </div>
            </div>
        </div>
    </div>
    {/* Page Case Study End */}

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
