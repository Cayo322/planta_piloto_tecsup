import React, { useRef, useEffect, useState } from "react";
import planta from "assets/img/planta.png";
import video from "assets/img/video.mp4";
import 'animate.css/animate.min.css';
// react-bootstrap components
import {
  Badge,
  Button,
  Card,
  Navbar,
  Nav,
  Table,
  Container,
  Row,
  Col,
  Form,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";
import './Dashboard.css'; // Asegúrate de tener este archivo CSS para estilos adicionales

function Dashboard() {

  const videoRef = useRef(null);
  const [texto, setTexto] = useState('');

  useEffect(() => {
    const intervalId = setInterval(() => {
      const currentTime = videoRef.current.currentTime;
      if (currentTime >= 1 && currentTime < 3) {
        setTexto('Chancadora ->');
      } else if (currentTime >= 3 && currentTime < 6) {
        setTexto('Otra sección ->');
      }
      // Agrega más condiciones según la duración del video y los mensajes que quieras mostrar
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <Container fluid>
        <Row>
          <Col lg="3" sm="15">
            <Card className="card-stats">
              <Card.Body>
                <div className="loader">
                  <div className="container">
                    <div className="carousel">
                      <div className="love"></div>
                      <div className="love"></div>
                      <div className="love"></div>
                      <div className="love"></div>
                      <div className="love"></div>
                      <div className="love"></div>
                      <div className="love"></div>
                    </div>
                  </div>
                  <div className="container">
                    <div className="carousel">
                      <div className="death"></div>
                      <div className="death"></div>
                      <div className="death"></div>
                      <div className="death"></div>
                      <div className="death"></div>
                      <div className="death"></div>
                      <div className="death"></div>
                    </div>
                  </div>
                  <div className="container">
                    <div className="carousel">
                      <div className="robots"></div>
                      <div className="robots"></div>
                      <div className="robots"></div>
                      <div className="robots"></div>
                      <div className="robots"></div>
                      <div className="robots"></div>
                      <div className="robots"></div>
                    </div>
                  </div>
                </div>
              </Card.Body>
              <Card.Footer>
                <hr />
                <div className="stats">
                  <i className="fas fa-redo mr-1"></i>
                  Update Now
                </div>
              </Card.Footer>
            </Card>
          </Col>
          <Col lg="3" sm="6">
            <Card className="card-stats">
              <Card.Body>
                <Row>
                  <Col xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-light-3 text-success"></i>
                    </div>
                  </Col>
                  <Col xs="7">
                    <div className="numbers">
                      <p className="card-category">Revenue</p>
                      <Card.Title as="h4">$ 1,345</Card.Title>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
              <Card.Footer>
                <hr />
                <div className="stats">
                  <i className="far fa-calendar-alt mr-1"></i>
                  Last day
                </div>
              </Card.Footer>
            </Card>
          </Col>
          <Col lg="3" sm="6">
            <Card className="card-stats">
              <Card.Body>
                <Row>
                  <Col xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-vector text-danger"></i>
                    </div>
                  </Col>
                  <Col xs="7">
                    <div className="numbers">
                      <p className="card-category">Errors</p>
                      <Card.Title as="h4">23</Card.Title>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
              <Card.Footer>
                <hr />
                <div className="stats">
                  <i className="far fa-clock-o mr-1"></i>
                  In the last hour
                </div>
              </Card.Footer>
            </Card>
          </Col>
          <Col lg="3" sm="6">
            <div className="spinnerContainer">
              <div className="spinner"></div>
              <div className="loader">
                <p>TECSUP</p>
                <div className="words">
                  <span className="word">Tecnologia</span>
                  <span className="word">Con</span>
                  <span className="word">con</span>
                  <span className="word">Sentido</span>
                  <span className="word"></span>
                  <span className="word">Tecnologia</span>
                  <span className="word">Con</span>
                  <span className="word"></span>
                  <span className="word">Sentido</span>
                  <span className="word">Tecnologia</span>
                
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md="8">
          <Card>
              <Card.Header>
                <Card.Title as="h4">Planta Piloto TECSUP</Card.Title>
                <p className="card-category"></p>
              </Card.Header>
              <Card.Body>
                <div className="video-container">
                  <video loop autoPlay muted width="100%" ref={videoRef}>
                    <source src={video} type="video/mp4" />
                    Tu navegador no soporta el elemento de video.
                  </video>
                  <div className="texto-superpuesto">
                    {texto}
                  </div>
                </div>
              </Card.Body>
            </Card>
            <Card>
              <Card.Header>
                <Card.Title as="h4">Planta Piloto TECSUP</Card.Title>
                <p className="card-category">Vista de la planta</p>
              </Card.Header>
              <Card.Body>
                <img src={planta} alt="Planta" style={{ width: "100%" }} />
              </Card.Body>
            </Card>
          </Col>
          <Col md="4">
            <Card className="animate__animated animate__fadeInRight">
              <Card.Header>
                <Card.Title as="h4">Información de la Planta</Card.Title>
                <p className="card-category">
                  Planta Piloto de Procesamiento de Minerales
                </p>
              </Card.Header>
              <Card.Body>
                <p>
                La planta piloto de procesamiento de minerales de TECSUP es una instalación diseñada a escala que permite a los estudiantes de la carrera de Operaciones de Plantas de Procesamiento de Minerales adquirir experiencia práctica en el manejo y control de las operaciones involucradas en el beneficio de minerales.
Esta planta piloto, que es una réplica en menor escala de una planta concentradora real.
                </p>
                <p>
                  Entre las principales características de la planta se
                  incluyen:
                </p>
                <ul>
                  <li>Chancado y molienda de minerales.</li>
                  <li>Flotacion de minerales</li>
                  <li>Espesadores y filtros.</li>
                  <li>Sistemas de control y monitoreo en tiempo real.</li>
                </ul>
                <p>
                  Esta planta no solo sirve como un recurso educativo
                  invaluable, sino también como una instalación de investigación
                  que colabora con la industria para mejorar los procesos de
                  extracción y procesamiento.
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row></Row>
      </Container>
    </>
  );
}

export default Dashboard;
