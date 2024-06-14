import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import chancadoraImage from "assets/img/chancadora.jpg";
import AdminNavbar from "components/Navbars/AdminNavbar.js";
import Footer from "components/Footer/Footer.js";
import './ChancadoraQuijada.css';

function ChancadoraQuijada() {
  return (
    <>
      <AdminNavbar />
      <Container fluid>
        <Row>
          {/* Cuadro de Imagen */}
          <Col md="6">
            <Card>
              <Card.Header>
                <Card.Title as="h4"></Card.Title>
              </Card.Header>
              <Card.Body className="image-container" style={{ backgroundImage: `url(${chancadoraImage})` }}>
                <div className="hover-item" style={{ top: '70%', left: '40%' }}>
                  <svg className="hover-icon" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0)">
                      <path clipRule="evenodd" d="M21.6 36h4.8V21.6h-4.8V36ZM24 0C10.8 0 0 10.8 0 24s10.8 24 24 24 24-10.8 24-24S37.2 0 24 0Zm0 43.2C13.44 43.2 4.8 34.56 4.8 24 4.8 13.44 13.44 4.8 24 4.8c10.56 0 19.2 8.64 19.2 19.2 0 10.56-8.64 19.2-19.2 19.2Zm-2.4-26.4h4.8V12h-4.8v4.8Z" fill="#fff" fillRule="evenodd"></path>
                    </g>
                    <defs>
                      <clipPath id="clip0">
                        <path d="M0 0h48v48H0z" fill="#fff"></path>
                      </clipPath>
                    </defs>
                  </svg>
                  <div className="hover-text">
                    <h1>Heading</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore magni repudiandae tenetur odio.</p>
                    <p className="learn-more">learn more</p>
                  </div>
                </div>

                <div className="hover-item" style={{ top: '8%', left: '60%' }}>
                  <svg className="hover-icon" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0)">
                      <path clipRule="evenodd" d="M21.6 36h4.8V21.6h-4.8V36ZM24 0C10.8 0 0 10.8 0 24s10.8 24 24 24 24-10.8 24-24S37.2 0 24 0Zm0 43.2C13.44 43.2 4.8 34.56 4.8 24 4.8 13.44 13.44 4.8 24 4.8c10.56 0 19.2 8.64 19.2 19.2 0 10.56-8.64 19.2-19.2 19.2Zm-2.4-26.4h4.8V12h-4.8v4.8Z" fill="#fff" fillRule="evenodd"></path>
                    </g>
                    <defs>
                      <clipPath id="clip0">
                        <path d="M0 0h48v48H0z" fill="#fff"></path>
                      </clipPath>
                    </defs>
                  </svg>
                  <div className="hover-text">
                    <h1>Heading</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore magni repudiandae tenetur odio.</p>
                    <p className="learn-more">learn more</p>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>

          {/* Cuadro de Información */}
          <Col md="6">
            <Card>
              <Card.Header>
                <Card.Title as="h4">Información</Card.Title>
              </Card.Header>
              <Card.Body>
                <p>
                  La chancadora de quijada es un equipo de trituración de minerales que utiliza una mandíbula móvil y una fija para romper el material. 
                </p>
              </Card.Body>
            </Card>
            <Card>
              <Card.Header>
                <Card.Title as="h4">Partes</Card.Title>
              </Card.Header>
              <Card.Body>
                <ul>
                  <li>Quijada móvil</li>
                  <li>Quijada fija</li>
                  <li>Árbol de levas</li>
                  <li>Rodamientos</li>
                  <li>Motor</li>
                  <li>Fajas</li>
                </ul>
              </Card.Body>
            </Card>
            <Card>
              <Card.Header>
                <Card.Title as="h4">Mantenimiento</Card.Title>
              </Card.Header>
              <Card.Body>
                <ul>
                  <li>Cambio de forros</li>
                  <li>Lubricación de rodamientos</li>
                  <li>Inspección y tensado de fajas</li>
                  <li>Mantenimiento del motor</li>
                </ul>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}

export default ChancadoraQuijada;
