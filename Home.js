import { Link } from 'react-router-dom';
import React from 'react'
import "./Home.css";
import Product from './Product';
import { Instagram, YouTube } from '@material-ui/icons';
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"></link>
function Home() {
    return (
        <div className='home'>

            <div className="home__container">
                <img className='home__image'
                    src="https://i.postimg.cc/ryRPB9Kb/25-by-12-5-inches-03.jpg">

                </img>
            </div>
            <div className="disp">
                <img className="disp__image"
                    src="https://i.postimg.cc/6pB9TWqx/2-E222441-3-FE3-4-FB9-BB60-ACEA70551-EF3.png">

                </img>
            </div>
            <div className="homee_title">
                <h2>
                    <u>Best Products</u>
                </h2>
            </div>

            <div className="home__row">

                <Product id="1" title="Friends Theme Album" price={3000} image="https://i.postimg.cc/8542qBwD/IMG-3942.jpg" rating={5} />
                <Product id="2" title="Trifold Card" price={3000} image="https://i.postimg.cc/nrMPN8CY/IMG-6222.jpg" rating={5} />
                <Product id="3" title="Open when Letter Box" price={3000} image="https://i.postimg.cc/7Pg9YZyG/IMG-4971.jpg" rating={5} />
                <Product id="4" title="3D Monogram Letter" price={3000} image="https://i.postimg.cc/qRmk8dP8/IMG-4218.jpg" rating={5} />


            </div>


            <div className="homee__row">
                <Link to='/album'>
                    <img className="Album"
                        src="https://i.postimg.cc/CMW5Mpbw/1.png">
                    </img>
                </Link>

            </div>


            <div className="homee__row">
                <Link to='/card'>
                    <img className="Card"
                        src="https://i.postimg.cc/vmHH2Ywt/2.png">
                    </img>



                </Link>

            </div>

            <div className="homee__row">
                <Link to='/monogram'>
                    <img className="Monogram"
                        src="https://i.postimg.cc/vZym97Pj/4.png">
                    </img>
                </Link>

            </div>

            <div className="homee__row">
                <Link to='/frame'>
                    <img className="Frame"
                        src="https://i.postimg.cc/nh1h1sgL/3.png">
                    </img>
                </Link>

            </div>


            <div className="Social">

                <h1>Contact Us</h1>
                <div className="cu">
                    <div className="as">
                        <pre><img className="social" src="https://i.postimg.cc/qR6YwVKs/logo-01.png"></img>
                            <h5>Craft_a_sea            Phone: +91 1111111111</h5></pre>
                        <pre> <h5>Mumbai, Ambernath      Email : Craftasea@gmail.com</h5></pre>
                    </div>
                </div>
                <div className="insta">
                    <a href="https://www.instagram.com/craft_a_sea/"><Instagram /></a>
                    <a href="https://www.youtube.com/channel/UCqvs-XiSUQJmxyCQCgiQCOQ"><YouTube /></a>
                </div>
            </div>

        </div>
    )
}
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
export default Home
