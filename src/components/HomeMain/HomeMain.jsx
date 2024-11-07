import React from "react";
import "./HomeMain.css";
import { Container, Card } from "react-bootstrap";
import features_img1 from "../../assets/images/features1.png";
import features_img2 from "../../assets/images/features2.png";
import features_img3 from "../../assets/images/features6.png";
import features_img4 from "../../assets/images/features5.png";

import about_img from "../../assets/images/about_image.jpg";

function HomeMain() {
  return (
    // Home main section
    <section>
      <div className="features_section py-5">
        <Container>
          <div className="row">
            <div className="col-lg-12">
              <div className="heading_section text-center mb-5">
                <h1>Our Features</h1>
              </div>
            </div>
            <div className="card_section">
              <div className="row">
                <div className="col-lg-3 cards">
                  <Card
                    style={{ width: "18rem" }}
                    className="text-center card_item"
                  >
                    <Card.Img
                      variant="top"
                      src={features_img1}
                      className="px-5 pt-3"
                      style={{ height: "200px" }}
                    />
                    <Card.Body>
                      <Card.Title className="mt-3 mb-3 fw-bold">
                        Curriculum
                      </Card.Title>
                      <Card.Text>
                        A structured program of study covering essential
                        subjects and skills.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </div>

                <div className="col-lg-3 cards">
                  <Card
                    style={{ width: "18rem" }}
                    className="text-center card_item"
                  >
                    <Card.Img
                      variant="top"
                      src={features_img2}
                      className="px-5 pt-3"
                      style={{ height: "200px" }}
                    />
                    <Card.Body>
                      <Card.Title className="mt-3 mb-3 fw-bold">
                        Qualified Staff
                      </Card.Title>
                      <Card.Text>
                        Experienced teachers and educators dedicated to student
                        learning and support.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </div>

                <div className="col-lg-3 cards">
                  <Card
                    style={{ width: "18rem" }}
                    className="text-center card_item"
                  >
                    <Card.Img
                      variant="top"
                      src={features_img3}
                      className="px-5 pt-3"
                      style={{ height: "200px" }}
                    />
                    <Card.Body>
                      <Card.Title className="mt-3 mb-3 fw-bold">
                        Facilities
                      </Card.Title>
                      <Card.Text>
                        Resources such as classrooms, libraries, labs, and
                        sports areas to enhance education.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </div>

                <div className="col-lg-3 cards">
                  <Card
                    style={{ width: "18rem" }}
                    className="text-center card_item"
                  >
                    <Card.Img
                      variant="top"
                      src={features_img4}
                      className="px-5 pt-3"
                      style={{ height: "200px" }}
                    />
                    <Card.Body>
                      <Card.Title className="mt-3 mb-3 fw-bold">
                        Community Engagement
                      </Card.Title>
                      <Card.Text>
                        Opportunities for social interaction and collaboration
                        among students, families, and staff.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>

      <div className="about_section">
        <Container>
          <div className="row">
            <div className="col-lg-12">
              <div className="heading_section text-center mb-5">
                <h1>About Us</h1>
              </div>
            </div>
            <div className="col-lg-4 ">
              <img src={about_img} className="about_image" alt="about_img" />
            </div>

            <div className="col-lg-8 about_content">
              <p>
                ABC School is a vibrant learning community dedicated to
                fostering academic excellence and personal growth. With a
                comprehensive curriculum that includes core subjects such as
                mathematics, science, language arts, and social studies,
                students are equipped with the foundational knowledge needed for
                future success. Our experienced and passionate faculty members
                are committed to creating an engaging learning environment. They
                utilize innovative teaching methods and technology to cater to
                diverse learning styles, ensuring that every student has the
                opportunity to thrive. In addition to academics, ABC School
                offers a range of extracurricular activities, including sports
                teams, arts programs, and clubs, promoting holistic development
                and encouraging students to explore their interests. Our
                state-of-the-art facilities include well-equipped classrooms, a
                modern library, science and computer labs, and spacious
                recreational areas. These resources provide students with the
                tools they need to excel both academically and socially. At ABC
                School, we believe in the importance of community and character
                development. We actively engage families and encourage
                partnerships that support student learning and well-being. Our
                goal is to nurture well-rounded individuals who are not only
                academically competent but also responsible, compassionate, and
                prepared for the challenges of tomorrow.
              </p>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}

export default HomeMain;
