import { Col } from 'react-bootstrap';

export const ProjectCard = ({ title, sourceCode, imgUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className='proj-imgbx'>
        <img src={imgUrl} alt='url' />
        <div className='proj-txtx'>
          <h4>{title}</h4>

          <a href={sourceCode}>Source Code</a>
        </div>
      </div>
    </Col>
  );
};
