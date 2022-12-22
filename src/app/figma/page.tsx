import * as React from "react"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Annouce from "../../components/announce"
import Footer from "../../components/footer"
import Link from "next/link";
export default function Figma() {
  
return (
    <>
        <Annouce />
        <section className="navbar">
            <div className="container">
                <nav>
                    <div className="logo">
                        <Link href="/"><img src="/3dicons.png" /></Link>
                    </div>
                    <div className="menu">
                        <ul>

                            <li><Link href="/about" className="btn btn-text">about</Link></li>
                            <li><Link href="/figma" className="btn btn-text">figma</Link></li>
                            <li><Link href="https://www.buymeacoffee.com/realvjy" className="btn btn-text">donate</Link></li>
                            <li>
                                <Link target="_blank" className="btn btn-outline" href="https://twitter.com/intent/tweet?text=Design%20awesome%20landing%20page%2C%20mockup%2C%20social%20media%20post%20or%20presentation%20with%20%233dicons%20-%20an%20open-source%203d%20icons%20library.%20https%3A//3dicons.co%20by%20@realvjy">Show Love<img src="/twitter.svg" /></Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </section>
        <section className="figma-section">
            <div className="fig-img">
                <img src="/fig-1.png" />
            </div>
            <div className="fig-text fig-head">
                <div className="content-wrapper">
                    <img src="/3d-fig-plugin.png" />
                    <p>Now you can add 3dicons directly to your design from the plugin. And yes, you can search as well.</p>
                    <div className="fig-btn-box">
                        <Link target="_blank" href="https://bit.ly/3dicons-figma" className="btn fig-btn-f">
                            <img src="/figma.svg" /> <span>Install it now on Figma</span>
                        </Link>
                        <Link target="_blank" href="https://www.buymeacoffee.com/realvjy" className="btn fig-btn-o">
                            <img src="/bmc.svg" /> <span>Donate & Support</span>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
        <section className="figma-section">
            <div className="fig-text fig-search">
                <div className="content-wrapper">
                    <img src="/search.png" className="search-icon" />
                    <h3>Search</h3>
                    <p>You can search icons with any related keyword and it works like a charm. After searching, you can add icons in any color or camera angle. Keep designing and add 3dicons .</p>

                </div>
            </div>
            <div className="fig-video">
                <video autoPlay muted loop src="/search-3dicons.mp4">
                    <source src="/search-3dicons.mp4"
                        type="video/mp4" />
                </video>
            </div>

        </section>
        <section className="figma-section">
            <div className="fig-text fig-open">
                <div className="content-wrapper">
                    <img src="/heart-1.png" /><img src="/heart-2.png" /> <img src="/heart-3.png" />
                    <h3>Open Source</h3>
                    <p>Yes, since everything about this project is shared publicly. You can grab the source code for this plugin on github. You are free to contribute or create your own plugin using it.</p>
                    <div className="fig-btn-box">
                        <Link  target="_blank"href="https://github.com/realvjy/3dicons-figma"  className="btn fig-btn-f">
                            <img src="/github.svg" /> <span>Check it on Github</span>
                        </Link>
                        <Link target="_blank" href="https://www.buymeacoffee.com/realvjy"  className="btn fig-btn-o">
                            <img src="/bmc.svg" /> <span>Donate & Support</span>
                        </Link>
                    </div>
                </div>
            </div>

        </section>
        <Footer />
    </>
)
}

