import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import { Accordion, AccordionItem, Carousel, Counter, DemoForm, Gallery, VideoLink } from "@/components/interactive";

export const metadata = { title: "Our gallery | Lifeon" };

export default function ImageGalleryPage() {
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
                        <AnimatedText as="h1" className="text-anime-style-3" data-cursor="-opaque">Our gallery</AnimatedText>
                        <nav className="wow fadeInUp">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><Link href="/">home</Link></li>
                                <li className="breadcrumb-item active" aria-current="page">gallery</li>
                            </ol>
                        </nav>
                    </div>
                    {/* Page Header Box End */}
                </div>
            </div>
        </div>
    </div>
    {/* Page Header Section End */}

    {/* Photo Gallery Start */}
    <div className="page-gallery">
        <div className="container">
            {/* gallery section start */}
            <Gallery className="row gallery-items page-gallery-box">
                <div className="col-lg-4 col-6">
                    {/* Image Gallery start */}
                    <div className="photo-gallery wow fadeInUp">
                        <a href="/images/gallery-1.jpg" data-cursor-text="View">
                            <figure className="image-anime">
                                <img src="/images/gallery-1.jpg" alt="" />
                            </figure>
                        </a>
                    </div>
                    {/* Image Gallery end */}
                </div>

                <div className="col-lg-4 col-6">
                    {/* Image Gallery start */}
                    <div className="photo-gallery wow fadeInUp" data-wow-delay="0.2s">
                        <a href="/images/gallery-2.jpg" data-cursor-text="View">
                            <figure className="image-anime">
                                <img src="/images/gallery-2.jpg" alt="" />
                            </figure>
                        </a>
                    </div>
                    {/* Image Gallery end */}
                </div>

                <div className="col-lg-4 col-6">
                    {/* Image Gallery start */}
                    <div className="photo-gallery wow fadeInUp" data-wow-delay="0.4s">
                        <a href="/images/gallery-3.jpg" data-cursor-text="View">
                            <figure className="image-anime">
                                <img src="/images/gallery-3.jpg" alt="" />
                            </figure>
                        </a>
                    </div>
                    {/* Image Gallery end */}
                </div>

                <div className="col-lg-4 col-6">
                    {/* Image Gallery start */}
                    <div className="photo-gallery wow fadeInUp" data-wow-delay="0.6s">
                        <a href="/images/gallery-4.jpg" data-cursor-text="View">
                            <figure className="image-anime">
                                <img src="/images/gallery-4.jpg" alt="" />
                            </figure>
                        </a>
                    </div>
                    {/* Image Gallery end */}
                </div>

                <div className="col-lg-4 col-6">
                    {/* Image Gallery start */}
                    <div className="photo-gallery wow fadeInUp" data-wow-delay="0.8s">
                        <a href="/images/gallery-5.jpg" data-cursor-text="View">
                            <figure className="image-anime">
                                <img src="/images/gallery-5.jpg" alt="" />
                            </figure>
                        </a>
                    </div>
                    {/* Image Gallery end */}
                </div>

                <div className="col-lg-4 col-6">
                    {/* Image Gallery start */}
                    <div className="photo-gallery wow fadeInUp" data-wow-delay="1s">
                        <a href="/images/gallery-6.jpg" data-cursor-text="View">
                            <figure className="image-anime">
                                <img src="/images/gallery-6.jpg" alt="" />
                            </figure>
                        </a>
                    </div>
                    {/* Image Gallery end */}
                </div>
                
                <div className="col-lg-4 col-6">
                    {/* Image Gallery start */}
                    <div className="photo-gallery wow fadeInUp" data-wow-delay="1.2s">
                        <a href="/images/gallery-7.jpg" data-cursor-text="View">
                            <figure className="image-anime">
                                <img src="/images/gallery-7.jpg" alt="" />
                            </figure>
                        </a>
                    </div>
                    {/* Image Gallery end */}
                </div>

                <div className="col-lg-4 col-6">
                    {/* Image Gallery start */}
                    <div className="photo-gallery wow fadeInUp" data-wow-delay="1.4s">
                        <a href="/images/gallery-8.jpg" data-cursor-text="View">
                            <figure className="image-anime">
                                <img src="/images/gallery-8.jpg" alt="" />
                            </figure>
                        </a>
                    </div>
                    {/* Image Gallery end */}
                </div>

                <div className="col-lg-4 col-6">
                    {/* Image Gallery start */}
                    <div className="photo-gallery wow fadeInUp" data-wow-delay="1.6s">
                        <a href="/images/gallery-9.jpg" data-cursor-text="View">
                            <figure className="image-anime">
                                <img src="/images/gallery-9.jpg" alt="" />
                            </figure>
                        </a>
                    </div>
                    {/* Image Gallery end */}
                </div>
            </Gallery>
            {/* gallery section end */}
        </div>
    </div>
    {/* Photo Gallery End */}

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
