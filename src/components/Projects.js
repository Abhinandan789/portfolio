import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { useState } from "react";
import { ProjectCards } from "./ProjectCards";
import { ProjectDesc } from "./ProjectDesc";
import projImg1 from "./assets/img/space.png";
import projImg2 from "./assets/img/shopcart.png";
import projImg3 from "./assets/img/todo.png";
import colorSharp2 from "./assets/img/color-sharp2.png";
//import "animate.css";
import TrackVisibility from "react-on-screen";
export const Projects = () => {
  const project1 = {
    title: "Space Tourism",
    description: "using HTML, CSS and JavaScript",
    imgUrl: projImg1,
    link: "https://abhinandan789.github.io/space-travel/",
    info: (
      <>
        Made a space tourism website as a fun project showcasing information of
        various planets, moons and spacecrafts with a playful and interactive
        UI/UX design
        <br />
        Learnt various HTML & CSS concepts like Semantics, flexbox, grids, event
        management, etc.
      </>
    ),
  };
  const project2 = {
    title: "Shop Cart",
    description: "using ReactJS",
    imgUrl: projImg2,
    link: "https://abhinandan789.github.io/shopify/",
    info: (
      <>
        Made frontend portion of the Shopping website with features like
        authenticated login, curated item list, functional cart, etc.
        <br />
        Learnt various ReactJs concepts like State, Effects, Context, managing
        local storage of the browser, etc.
        <br />
        <br />
        Credentials to login into project
        <br />
        Username: kminchelle
        <br />
        Password: 0lelplR
        <br />
      </>
    ),
  };

  const project3 = {
    title: "To-do List",
    description: "using ReactJS",
    imgUrl: projImg3,
    link: "https://abhinandan789.github.io/todo-app/",
    info: (
      <>
        Made a todo list application using ReactJs with functionalities like add
        task, mark it completed, and view pending and complete tasks etc.
        <br />
        Learnt various React concepts like state management, props, useEffect
        etc.
      </>
    ),
  };

  const [activeKey, setActiveKey] = useState("first"); // Initialize with the default active key

  const handleNavClick = (key) => {
    setActiveKey(key);
  };

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>
                    Here's a list of my projects that I made to get hands on
                    experience on technologies like HTML, CSS, JavaScript, and
                    ReactJs. Check them out and give me feedback for further
                    improvement.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    {/* <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Space Tourism</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Shop Cart</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">To-Do List</Nav.Link>
                      </Nav.Item>
                    </Nav> */}


                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link
                          eventKey="first"
                          active={activeKey === "first"}
                          onClick={() => handleNavClick("first")}
                          className={activeKey === "first" ? "active" : ""}
                        >
                          Space Tourism
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link
                          eventKey="second"
                          active={activeKey === "second"}
                          onClick={() => handleNavClick("second")}
                          className={activeKey === "second" ? "active" : ""}
                        >
                          Shop Cart
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link
                          eventKey="third"
                          active={activeKey === "third"}
                          onClick={() => handleNavClick("third")}
                          className={activeKey === "third" ? "active" : ""}
                        >
                          To-Do List
                        </Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          <div className="project-wrapper">
                            <ProjectCards
                              className="wrapper-left"
                              title={project1.title}
                              description={project1.description}
                              imgUrl={project1.imgUrl}
                            />
                            <ProjectDesc
                              className="wrapper-right"
                              title={project1.title}
                              info={project1.info}
                              link={project1.link}
                            />
                          </div>
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          <div className="project-wrapper">
                            <ProjectCards
                              className="wrapper-left"
                              title={project2.title}
                              description={project2.description}
                              imgUrl={project2.imgUrl}
                            />
                            <ProjectDesc
                              className="wrapper-right"
                              title={project2.title}
                              info={project2.info}
                              link={project2.link}
                            />
                          </div>
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <Row>
                          <div className="project-wrapper">
                            <ProjectCards
                              className="wrapper-left"
                              title={project3.title}
                              description={project3.description}
                              imgUrl={project3.imgUrl}
                            />
                            <ProjectDesc
                              className="wrapper-right"
                              title={project3.title}
                              info={project3.info}
                              link={project3.link}
                            />
                          </div>
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img
        className="background-image-right"
        src={colorSharp2}
        alt="jfnf"
      ></img>
    </section>
  );
};
