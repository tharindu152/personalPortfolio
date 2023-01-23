import javaIcon from '../assets/img/java.png';
import JavaScriptIcon from '../assets/img/js.png';
import HTMlIcon from '../assets/img/html-5.png';
import CssIcon from '../assets/img/css-3.png';
import BootstrapIcon from '../assets/img/bootstrap.png';
import jQueryIcon from '../assets/img/jquery-icon-21.jpg';
import MongooseIcon from '../assets/img/mongoose.png';
import ReactIcon from '../assets/img/atom.png';
import ExpressIcon from '../assets/img/express.png';
import NodeIcon from '../assets/img/nodejs.png';
import MongoDBIcon from '../assets/img/mongodb.png';
import SQLiteIcon from '../assets/img/sqlite-282687.webp';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from '../assets/img/arrow1.svg';
import arrow2 from '../assets/img/arrow2.svg';
import colorSharp from '../assets/img/color-sharp.png';

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className='skill' id='skills'>
      <div className='container'>
        <div className='row'>
          <div className='col-12'>
            <div className='skill-bx wow zoomIn'>
              <h2>Skills</h2>
              <p>Web Development | Web Design | UI/UX Design</p>
              <h2>Technology Stack</h2>
              <Carousel
                responsive={responsive}
                infinite={true}
                autoPlay='true'
                className='owl-carousel owl-theme skill-slider'
              >
                <div className='item'>
                  <img src={javaIcon} alt='Image' />
                  <h5>Java</h5>
                </div>
                <div className='item'>
                  <img src={JavaScriptIcon} alt='Image' />
                  <h5>JavaScript</h5>
                </div>
                <div className='item'>
                  <img src={HTMlIcon} alt='Image' />
                  <h5>HTML</h5>
                </div>
                <div className='item'>
                  <img src={CssIcon} alt='Image' />
                  <h5>CSS</h5>
                </div>
                <div className='item'>
                  <img src={jQueryIcon} alt='Image' />
                  <h5>jQuery</h5>
                </div>
                <div className='item'>
                  <img src={MongooseIcon} alt='Image' />
                  <h5>Mongoose</h5>
                </div>
                <div className='item'>
                  <img src={BootstrapIcon} alt='Image' />
                  <h5>Bootstrap</h5>
                </div>
                <div className='item'>
                  <img src={MongoDBIcon} alt='Image' />
                  <h5>MongoDB</h5>
                </div>
                <div className='item'>
                  <img src={ExpressIcon} alt='Image' />
                  <h5>Express</h5>
                </div>
                <div className='item'>
                  <img src={ReactIcon} alt='Image' />
                  <h5>React</h5>
                </div>
                <div className='item'>
                  <img src={NodeIcon} alt='Image' />
                  <h5>Node.js</h5>
                </div>
                <div className='item'>
                  <img src={SQLiteIcon} alt='Image' />
                  <h5>SQLite</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className='background-image-left' src={colorSharp} alt='Image' />
    </section>
  );
};
