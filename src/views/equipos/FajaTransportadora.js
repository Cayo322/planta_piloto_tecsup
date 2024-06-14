import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import fajaTransportadoraImage from "assets/img/faja.jpg";
import AdminNavbar from "components/Navbars/AdminNavbar.js";
import Footer from "components/Footer/Footer.js";
import './ChancadoraQuijada.css';

function FajaTransportadora() {
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
              <Card.Body className="image-container" style={{ backgroundImage: `url(${fajaTransportadoraImage})` }}>
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
                  El presente equipo tiene la función principal de trasladar el mineral chancado a la zaranda vibratoria. Esta faja no cuenta con chevrones. El equipo cuenta con motor de 1 HP, que genera la fuerza para el movimiento.
                </p>
              </Card.Body>
            </Card>
            <Card>
              <Card.Header>
                <Card.Title as="h4">Partes de la faja transportadora N°1</Card.Title>
              </Card.Header>
              <Card.Body>
                <ul>
                  <li>Motor de 1 HP</li>
                  <li>Faja transportadora</li>
                  <li>Polines de avance</li>
                  <li>Polines de retroceso</li>
                </ul>
              </Card.Body>
            </Card>
            <Card>
              <Card.Header>
                <Card.Title as="h4">Mantenimiento de la faja transportadora N°1</Card.Title>
              </Card.Header>
              <Card.Body>
                <h5>Mantenimiento de los polines de avance y retroceso</h5>
                <p>Es fundamental mantener en buen estado estos componentes para el buen funcionamiento del equipo. Estos componentes sirven como apoyo a lo largo de la faja, además de soportar cargas, ayudan al tensado de las fajas. Se recomienda verificar el tensado y la lubricación de los polines cada 15 días.</p>
                <Card>
                  <Card.Header>
                    <Card.Title as="h5">Listado de herramientas para mantenimiento de los polines de avance y retroceso</Card.Title>
                  </Card.Header>
                  <Card.Body>
                    <ul>
                      <li>Vernier</li>
                      <li>Polines de retroceso (Figura 4.2)</li>
                      <li>Polines de avance (Figura 4.3)</li>
                    </ul>
                  </Card.Body>
                </Card>
                <Card>
                  <Card.Header>
                    <Card.Title as="h5">Procedimiento para mantenimiento de los polines de avance y retroceso</Card.Title>
                  </Card.Header>
                  <Card.Body>
                    <ol>
                      <li>Retirar los polines tanto de avance como de retroceso.</li>
                      <li>Medir las dimensiones del polín y comparar con las dimensiones del polín sin desgaste. Dimensiones especificadas en la Figura 4.2 y la Figura 4.3.</li>
                      <li>Lubricar con grasa LGMT2 (ANEXO A) si es que el desgaste no provoca un desfase en la faja.</li>
                      <li>Cambiar el polín de darse el desfase del eje con el rodillo o en función a la faja.</li>
                    </ol>
                  </Card.Body>
                </Card>
                <h5>Tensado e inspección visual de la faja, grapas de unión y limpieza</h5>
                <p>El tensado de las fajas es muy necesario para que la carga circulante no salga del sentido de avance de la faja. Verificar el tensado cada semana. Es importante tener un registro diario de uso donde la faja esté sometida a cargas e inspeccionar cortes en la faja o deterioro de alguna grapa.</p>
                <Card>
                  <Card.Header>
                    <Card.Title as="h5">Listado de herramientas para mantenimiento de la faja, grapas de unión y limpieza</Card.Title>
                  </Card.Header>
                  <Card.Body>
                    <ul>
                      <li>Martillo</li>
                      <li>Grapas de unión de faja</li>
                    </ul>
                  </Card.Body>
                </Card>
                <Card>
                  <Card.Header>
                    <Card.Title as="h5">Procedimiento para mantenimiento de la faja, grapas de unión y limpieza</Card.Title>
                  </Card.Header>
                  <Card.Body>
                    <ol>
                      <li>Verificar el tensado y el nivel de ambos rodillos tanto al inicio como al final.</li>
                      <li>Realizar una inspección visual de algún imperfecto (corte en la faja o grapas desajustadas) y verificar su estado.</li>
                      <li>Si las grapas están en un estado deficiente, retirar las grapas con las orejas del martillo y cambiarlas.</li>
                      <li>Limpiar las fajas con los trapos industriales.</li>
                    </ol>
                  </Card.Body>
                </Card>
                <h5>Lubricación de los rodamientos</h5>
                <p>La lubricación en este componente (rodamientos) es de suma importancia ya que están expuestos permanentemente al polvo y otros agentes que perjudican el funcionamiento y desempeño. Se requiere que los rodamientos sean lubricados cada mes debido a la exposición diaria a agentes contaminantes.</p>
                <Card>
                  <Card.Header>
                    <Card.Title as="h5">Listado de herramientas para lubricación de rodamientos</Card.Title>
                  </Card.Header>
                  <Card.Body>
                    <ul>
                      <li>Grasera</li>
                      <li>Grasa LGMT2</li>
                    </ul>
                  </Card.Body>
                </Card>
                <Card>
                  <Card.Header>
                    <Card.Title as="h5">Procedimiento para lubricación de rodamientos</Card.Title>
                  </Card.Header>
                  <Card.Body>
                    <ol>
                      <li>Llenar la grasera con lubricante LGMT2.</li>
                      <li>Ubicar el punto de engrase de la chumacera y lubricar con el mango de presión de la grasera.</li>
                    </ol>
                  </Card.Body>
                </Card>
                <h5>Mantenimiento al motor</h5>
                <p>El mantenimiento del motor es esencial para preservar las condiciones de uso y accionamiento. Esto implica una serie de verificaciones, la reposición de lubricantes y elementos desgastados, y la reparación de daños incipientes que pudieran detectarse. También se debe revisar el estado de las borneras.</p>
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
                      <li>Lubricar los rodamientos con lubricante LGMT2 (ANEXO A) y cambiar de ser necesario.</li>
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

export default FajaTransportadora;
