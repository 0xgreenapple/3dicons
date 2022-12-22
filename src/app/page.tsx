import Layout from "../components/layout"
import Footer from "../components/footer";
import Header from "../components/header";
import AllIcons from "../components/all-icons";
import InAction from "../components/in-action";
import KnowMore from "../components/know-more";
import Annouce from "../components/announce";
import Modal from 'react-modal';
import {getSortedPostsData} from "../templates/icons-list";
import { GetStaticProps, GetStaticPaths, GetServerSideProps } from 'next'
import Downloader from "../components/Modal";
import Link from 'next/link';

// "/" landing page main page for the website
export default function Landing(){
    return(
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
                    <a className="btn btn-outline" href="https://twitter.com/intent/tweet?text=Design%20awesome%20landing%20page%2C%20mockup%2C%20social%20media%20post%20or%20presentation%20with%20%233dicons%20-%20an%20open-source%203d%20icons%20library.%20https%3A//3dicons.co%20by%20@realvjy">Show Love<img src="/twitter.svg" /></a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>

        </section>
        <Header/>
        <AllIcons />
        <InAction />
        <KnowMore />
        <Footer />
        </>
    ) 
}

