import React from 'react'
import { Container, Row, Col, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";


function FourNotFout() {
    const navigate = useNavigate();

  return (
    <div>
      <Container
        fluid
        className="d-flex flex-column align-items-center justify-content-center vh-100 bg-warning text-dark"
      >
        <Row className="text-center">
          <Col>
            <h1 className="display-1 fw-bold">404</h1>
            <h2 className="mb-4">Page Not Found</h2>
            <p className="mb-4">
              Sorry, the page you are looking for does not exist. It might have
              been moved or deleted.
            </p>
            <Button
              variant="dark"
              className="px-4 py-2"
              onClick={() => navigate("/")}
            >
              Go to Home
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default FourNotFout