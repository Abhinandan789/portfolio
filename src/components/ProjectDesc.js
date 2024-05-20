import { Col } from "react-bootstrap";

export const ProjectDesc = ({ title, info,link }) => {
  return (
    <Col size={6} sm={6} md={4}>
      <div className="proj-descbx">
        <div className="proj-info">
          <h4>{title}</h4>
          <span className="inform">{info}</span><br/>
          <span><a className="link-style" href={link}>{`Go to Project ->`}</a></span>

        </div>
      </div>
    </Col>
  );
};
