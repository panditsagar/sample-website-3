import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import { Accordion, AccordionItem, Carousel, Counter, DemoForm, Gallery, VideoLink } from "@/components/interactive";

export const metadata = { title: "Our team | Lifeon" };

export default function TeamPage() {
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
                        <AnimatedText as="h1" className="text-anime-style-3" data-cursor="-opaque">Our team</AnimatedText>
                        <nav className="wow fadeInUp">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><Link href="/">home</Link></li>
                                <li className="breadcrumb-item active" aria-current="page">team</li>
                            </ol>
                        </nav>
                    </div>
                    {/* Page Header Box End */}
                </div>
            </div>
        </div>
    </div>
    {/* Page Header Section End */}

    {/* Page Team Start */}
    <div className="page-team">
        <div className="container">
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

                <div className="col-xl-4 col-md-6">
                    {/* Team Item Start */}
                    <div className="team-item wow fadeInUp">
                        <div className="team-item-image">
                            <Link href="/team-single" data-cursor-text="View">
                                <figure>
                                    <img src="/images/team-4.jpg" alt="" />
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
                                <h2><Link href="/team-single">David Wilson</Link></h2>
                                <p>Startup &amp; Entrepreneur Coach</p>
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
                                    <img src="/images/team-5.jpg" alt="" />
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
                                <h2><Link href="/team-single">Isabella Rodriguez</Link></h2>
                                <p>Confidence &amp; Productivity Coach</p>
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
                                    <img src="/images/team-6.jpg" alt="" />
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
                                <h2><Link href="/team-single">James Anderson</Link></h2>
                                <p>Career Growth Coach</p>
                            </div>
                        </div>
                    </div>
                    {/* Team Item End */}
                </div>
            </div>
        </div>
    </div>
    {/* Page Team End */}

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
