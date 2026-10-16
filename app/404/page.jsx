import Link from "next/link";
import { Accordion, AccordionItem, Carousel, Counter, DemoForm, Gallery, VideoLink } from "@/components/interactive";

export const metadata = { title: "Page not found | Lifeon" };

export default function ErrorPage() {
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
                        <h1 className="text-anime-style-3" data-cursor="-opaque">Page not found</h1>
                        <nav className="wow fadeInUp">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><Link href="/">home</Link></li>
                                <li className="breadcrumb-item active" aria-current="page">404 Error Page</li>
                            </ol>
                        </nav>
                    </div>
                    {/* Page Header Box End */}
                </div>
            </div>
        </div>
    </div>
    {/* Page Header Section End */}

    {/* error Page start */}
    <div className="error-page">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="error-page-image wow fadeInUp">
                        <img src="/images/404-error-img.png" alt="" />
                    </div>
                    <div className="error-page-content">
                        <div className="section-title">
                            <h2 className="text-anime-style-3" data-cursor="-opaque">Oops! page not found</h2>
                        </div>
                        <div className="error-page-content-body">
                            <p className="wow fadeInUp">The page you are looking for does not exist.</p>
                            <Link className="btn-default wow fadeInUp" href="/">Back to Homepage</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* error Page end */}

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
