import javaIcon from '../assets/img/java.png';
import JavaScriptIcon from '../assets/img/js.png';
import HTMlIcon from '../assets/img/html-5.png';
import CssIcon from '../assets/img/css-3.png';
import SassIcon from '../assets/img/sass.png';
import ReactBootstrapIcon from '../assets/img/react-bootstrap.png';
import ReactIcon from '../assets/img/atom.png';
import MongoDBIcon from '../assets/img/mongodb.png';
import MySQL from '../assets/img/MySQL-Logo.png';
import SpringBoot from '../assets/img/springboot.png';
import Hibernate from '../assets/img/Hiberate.png';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
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
              <p>
                Frontend Development | Backend Development | UI/UX Designing
              </p>
              <h2>Technology Stack</h2>
              <Carousel
                responsive={responsive}
                infinite={true}
                autoPlay='true'
                className='owl-carousel owl-theme skill-slider'
              >
                <div className='item'>
                  <img src={javaIcon} alt='java' />
                  <h5>Java</h5>
                </div>
                <div className='item'>
                  <img src={JavaScriptIcon} alt='JavaScript' />
                  <h5>JavaScript</h5>
                </div>
                <div className='item'>
                  <img src={HTMlIcon} alt='HTML' />
                  <h5>HTML</h5>
                </div>
                <div className='item'>
                  <img src={CssIcon} alt='CSS' />
                  <h5>CSS</h5>
                </div>
                <div className='item'>
                  <img src={SassIcon} alt='CSS' />
                  <h5>Sass</h5>
                </div>
                <div className='item'>
                  <img src={ReactIcon} alt='React' />
                  <h5>React</h5>
                </div>
                <div className='item'>
                  <img src={ReactBootstrapIcon} alt='Bootstrap' />
                  <h5>React Bootstrap</h5>
                </div>
                <div className='item'>
                  <img src={MySQL} alt='SQLite' />
                  <h5>MySQL</h5>
                </div>
                <div className='item'>
                  <img src={MongoDBIcon} alt='MongoDB' />
                  <h5>MongoDB</h5>
                </div>
                <div className='item'>
                  <img src={SpringBoot} alt='MongoDB' />
                  <h5>Spring Boot</h5>
                </div>
                <div className='item'>
                  <img src={Hibernate} alt='MongoDB' />
                  <h5>Hibernate</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img
        className='background-image-left'
        src={colorSharp}
        alt='background'
      />
    </section>
  );
};
