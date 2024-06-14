import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import rodillosImage from "assets/img/chancadora.jpg";
import AdminNavbar from "components/Navbars/AdminNavbar.js";
import Footer from "components/Footer/Footer.js";
import './ChancadoraQuijada.css';

function ChancadoraRodillos() {
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
              <Card.Body className="image-container" style={{ backgroundImage: `url(${rodillosImage})` }}>
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
                <Card.Title as="h4">Descripción del equipo</Card.Title>
              </Card.Header>
              <Card.Body>
                <p>
                  El presente equipo tiene la función principal de triturar el mineral con una abertura que varía de 1 a 2 mm de separación de los dos rodillos ubicados en la parte interna de la carcasa. El equipo cuenta con motor de 5 HP, que genera la fuerza para el movimiento de estos rodillos.
                </p>
              </Card.Body>
            </Card>
            <Card>
              <Card.Header>
                <Card.Title as="h4">Partes de la chancadora de rodillos</Card.Title>
              </Card.Header>
              <Card.Body>
                <ul>
                  <li>Carcasa</li>
                  <li>Rodillos</li>
                  <li>Motor de 5 HP</li>
                </ul>
              </Card.Body>
            </Card>
            <Card>
              <Card.Header>
                <Card.Title as="h4">Mantenimiento de la chancadora de rodillos</Card.Title>
              </Card.Header>
              <Card.Body>
                <h5>Tensado e inspección visual de fajas</h5>
                <p>Las correas que transmiten directamente un movimiento vibratorio se deben tensar adecuadamente, ya que de esto dependerá mayor o menor rendimiento en el proceso de chancado. Es por eso que se debe observar el estado de las poleas, el desgaste, perfil y alineamiento.</p>
                <Card>
                  <Card.Header>
                    <Card.Title as="h5">Listado de herramientas para tensado e inspección visual de fajas</Card.Title>
                  </Card.Header>
                  <Card.Body>
                    <ul>
                      <li>2 llaves universales #15</li>
                      <li>Dados 18 mm</li>
                      <li>Correa: Optibelt DK double Belts HCC 4000</li>
                    </ul>
                  </Card.Body>
                </Card>
                <Card>
                  <Card.Header>
                    <Card.Title as="h5">Procedimiento para tensado de fajas e inspección visual de fajas</Card.Title>
                  </Card.Header>
                  <Card.Body>
                    <ol>
                      <li>Desmontar las guardas de las poleas con ayuda de la llave universal #15 (2 pernos en la parte de adelante y atrás de cada una).</li>
                      <li>Realizar una inspección visual priorizando el desgaste de la correa Optibelt DK double Belts HCC 4000 y reemplazar de ser necesario.</li>
                      <li>Si está deteriorada la correa, desajustar la tuerca del eje central de la polea con el dado de 18 mm para el desmontaje de la correa y proceder con su cambio.</li>
                    </ol>
                  </Card.Body>
                </Card>
                <h5>Lubricación de los rodamientos</h5>
                <p>La lubricación en este componente (rodamientos) es de suma importancia ya que están expuestos permanentemente al polvo y otros agentes que perjudican el funcionamiento y desempeño. Es por esto que se requiere que los rodamientos sean lubricados cada mes, ya que la exposición a agentes contaminantes es diaria.</p>
                <Card>
                  <Card.Header>
                    <Card.Title as="h5">Listado de herramientas para lubricación de rodamientos</Card.Title>
                  </Card.Header>
                  <Card.Body>
                    <ul>
                      <li>2 llaves universales #15</li>
                      <li>Lubricante H2TD1</li>
                    </ul>
                  </Card.Body>
                </Card>
                <Card>
                  <Card.Header>
                    <Card.Title as="h5">Procedimiento para lubricación de rodamientos</Card.Title>
                  </Card.Header>
                  <Card.Body>
                    <ol>
                      <li>Llenar la grasera con Lubricante H2TD1.</li>
                      <li>Ubicar el punto de engrase de la chumacera y lubricar con el mango de presión de la grasera.</li>
                    </ol>
                  </Card.Body>
                </Card>
                <h5>Mantenimiento al motor</h5>
                <p>El mantenimiento del motor es esencial para preservar las condiciones de uso y de accionamiento, y que estas sean las mismas a las que se fijaron para su elección. Esto implica una serie de verificaciones, la reposición de lubricantes y elementos desgastados y la reparación de daños incipientes que pudieran detectarse, así como revisar el estado de las borneras.</p>
                <Card>
                  <Card.Header>
                    <Card.Title as="h5">Listado de herramientas para mantenimiento de motor</Card.Title>
                  </Card.Header>
                  <Card.Body>
                    <ul>
                      <li>Llave universal 3⁄4”</li>
                      <li>Grasera</li>
                      <li>Sello Axial VRM2 IP-55</li>
                      <li>Rodamientos radiales y de corona</li>
                    </ul>
                  </Card.Body>
                </Card>
                <Card>
                  <Card.Header>
                    <Card.Title as="h5">Procedimiento para mantenimiento de motor</Card.Title>
                  </Card.Header>
                  <Card.Body>
                    <ol>
                      <li>Desajustar los 4 pernos de la etapa con la llave universal 3⁄4”.</li>
                      <li>Verificar el estado del sello Axial VRM2 IP-55 y retirar de ser necesario.</li>
                      <li>Lubricar los rodamientos con lubricante LGTM2 (ANEXO A) y cambiar de ser necesario.</li>
                      <li>Desajustar los 4 pernos de la caja de borneras y revisar el estado de estas. Cambiar de ser necesario.</li>
                    </ol>
                  </Card.Body>
                </Card>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}

export default ChancadoraRodillos;
