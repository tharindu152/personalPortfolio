import { Container, Row, Col, Tab } from 'react-bootstrap';
import { ProjectCard } from './ProjectCard';
import projImg1 from '../assets/img/FoodYummy.jpg';
import projImg2 from '../assets/img/forkify.jpg';
import projImg3 from '../assets/img/tindog.jpg';
import colorSharp2 from '../assets/img/color-sharp2.png';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {
  const projects = [
    {
      title: 'Food Yummy',
      liveDemo: 'https://foodyummytharindu.netlify.app/',
      sourceCode: 'https://github.com/tharindu152/FoodYummyFrontEnd.git',
      imgUrl: projImg1,
    },
    {
      title: 'Forkify',
      liveDemo:
        'https://forkify-tharindu.netlify.app/#5ed6604591c37cdc054bcc13',
      sourceCode: 'https://github.com/tharindu152/forkify-app-tharindu',
      description: 'Design & Development',
      imgUrl: projImg2,
    },
    {
      title: 'Tindog',
      liveDemo: 'https://tindog-tharindu.netlify.app/',
      sourceCode: 'https://github.com/tharindu152/tindog.app',
      description: 'Design & Development',
      imgUrl: projImg3,
    },
  ];

  return (
    <section className='project' id='project'>
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? 'animate__animated animate__fadeIn' : ''
                  }
                >
                  <h2>Projects</h2>
                  <p>
                    Food Yummy is my own full stack development with the use of
                    MERN stack which includes a responsive UI. Frontend and
                    Backend of the application was deployed seperately. Rest of
                    the projects are test projects which were completed during
                    Web Develpment bootcamp.
                  </p>
                  <Tab.Container id='projects-tabs' defaultActiveKey='first'>
                    {/* <Nav
                      variant='pills'
                      className='nav-pills mb-5 justify-content-center align-items-center'
                      id='pills-tab'
                    >
                      <Nav.Item>
                        <Nav.Link eventKey='first'>Tab 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey='second'>Tab 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey='third'>Tab 3</Nav.Link>
                      </Nav.Item>
                    </Nav> */}
                    <Tab.Content
                      id='slideInUp'
                      className={
                        isVisible ? 'animate__animated animate__slideInUp' : ''
                      }
                    >
                      <Tab.Pane eventKey='first'>
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      {/* <Tab.Pane eventKey='section'>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Cumque quam, quod neque provident velit, rem
                          explicabo excepturi id illo molestiae blanditiis,
                          eligendi dicta officiis asperiores delectus quasi
                          inventore debitis quo.
                        </p>
                      </Tab.Pane>
                      <Tab.Pane eventKey='third'>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Cumque quam, quod neque provident velit, rem
                          explicabo excepturi id illo molestiae blanditiis,
                          eligendi dicta officiis asperiores delectus quasi
                          inventore debitis quo.
                        </p>
                      </Tab.Pane> */}
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img
        className='background-image-right'
        src={colorSharp2}
        alt='background'
      ></img>
    </section>
  );
};
