import Link from "next/link";
import { Accordion, AccordionItem, Carousel, Counter, DemoForm, Gallery, VideoLink } from "@/components/interactive";

export const metadata = { title: "Our blog | Lifeon" };

export default function BlogPage() {
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
                        <h1 className="text-anime-style-3" data-cursor="-opaque">Our blog</h1>
                        <nav className="wow fadeInUp">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><Link href="/">home</Link></li>
                                <li className="breadcrumb-item active" aria-current="page">blog</li>
                            </ol>
                        </nav>
                    </div>
                    {/* Page Header Box End */}
                </div>
            </div>
        </div>
    </div>
    {/* Page Header Section End */}

    {/* Page Blog Start */}
    <div className="page-blog">
        <div className="container">
            <div className="row">
                <div className="col-xl-4 col-md-6">
                    {/* Post Item Start */}
                    <div className="post-item wow fadeInUp">
                        {/* Post Featured Image Start*/}
                        <div className="post-featured-image">
                            <Link href="/blog-single" data-cursor-text="View">
                                <figure className="image-anime">
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
                                <figure className="image-anime">
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
                                <figure className="image-anime">
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

                <div className="col-xl-4 col-md-6">
                    {/* Post Item Start */}
                    <div className="post-item wow fadeInUp">
                        {/* Post Featured Image Start*/}
                        <div className="post-featured-image">
                            <Link href="/blog-single" data-cursor-text="View">
                                <figure className="image-anime">
                                    <img src="/images/post-4.jpg" alt="" />
                                </figure>    
                            </Link>                            
                        </div>
                        {/* Post Featured Image End */}

                        {/* Post Item Body Start */}
                        <div className="post-item-body">
                            {/* Post Item Content Start */}
                            <div className="post-item-content">
                                <h2><Link href="/blog-single">How to Set Goals You Actually Follow Through On</Link></h2>
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
                                <figure className="image-anime">
                                    <img src="/images/post-5.jpg" alt="" />
                                </figure>    
                            </Link>                            
                        </div>
                        {/* Post Featured Image End */}

                        {/* Post Item Body Start */}
                        <div className="post-item-body">
                            {/* Post Item Content Start */}
                            <div className="post-item-content">
                                <h2><Link href="/blog-single">Mindset Shifts Every Entrepreneur Needs to Make</Link></h2>
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
                                <figure className="image-anime">
                                    <img src="/images/post-6.jpg" alt="" />
                                </figure>    
                            </Link>                            
                        </div>
                        {/* Post Featured Image End */}

                        {/* Post Item Body Start */}
                        <div className="post-item-body">
                            {/* Post Item Content Start */}
                            <div className="post-item-content">
                                <h2><Link href="/blog-single">From Overwhelmed Organize A Simple Planning System</Link></h2>
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

                <div className="col-lg-12">
                    {/* Page Pagination Start */}
                    <div className="page-pagination wow fadeInUp">
                        <ul className="pagination">
                            <li><a href="#"><i className="fa-solid fa-angle-left"></i></a></li>
                            <li className="active"><a href="#">1</a></li>
                            <li><a href="#">2</a></li>
                            <li><a href="#">3</a></li>
                            <li><a href="#"><i className="fa-solid fa-angle-right"></i></a></li>
                        </ul>
                    </div>
                    {/* Page Pagination End */}
                </div>
            </div>
        </div>
    </div>
    {/* Page Blog End */}

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
