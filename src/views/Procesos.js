import React, { useState } from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import { Link } from 'react-router-dom';
import './Procesos.css';

import dchancado from "assets/img/dchancado.jpeg";
import dmolienda from "assets/img/dmolienda.jpeg";
import dflotacion from "assets/img/dflotacion.jpeg";
import despesamiento from "assets/img/despesamiento.jpeg";
import operador from "assets/img/operador.png"; // Importa la imagen

function Procesos() {
  const [activeSection, setActiveSection] = useState(null);

  const handleItemClick = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };

  return (
    <>
      <Container fluid>
        <Row>
          <Col md="15">
            <Card>
              <Card.Body>
                <div className="custom-card">
                  <p onClick={() => handleItemClick('descripcion')} className={activeSection === 'descripcion' ? 'active' : ''}>
                    <span>DESCRIPCION DEL PROCESO</span>
                  </p>
                  <p onClick={() => handleItemClick('equipos')} className={activeSection === 'equipos' ? 'active' : ''}>
                    <span>EQUIPOS</span>
                  </p>
                  <p onClick={() => handleItemClick('operacion')} className={activeSection === 'operacion' ? 'active' : ''}>
                    <span>OPERACION DEL CIRCUITO</span>
                  </p>
                  <p onClick={() => handleItemClick('diagramas')} className={activeSection === 'diagramas' ? 'active' : ''}>
                    <span>DIAGRAMAS</span>
                  </p>
                </div>
                {!activeSection && (
                  <div className="animation-container">
                    <img src={operador} alt="Operador" className="animated-image" />
                  </div>
                )}
                {activeSection === 'descripcion' && (
                  <div className="informative-content">
                    <h3>Descripcion del proceso</h3>
                    <h4>1. Área de Chancado:</h4>
                    <p>Descripción del proceso: Es la primera etapa para el beneficio de minerales, donde se aplica fuerza mecánica para romper los trozos grandes de mineral hasta reducirlos a fragmentos más pequeños, utilizando principalmente fuerzas de compresión. Comprende el chancado primario con chancadora de quijada y el chancado secundario con chancadora de rodillos.</p>
                    <p>Variables operativas:</p>
                    <ul>
                      <li>Contenido de humedad: Debe ser inferior al 5% en peso para evitar que se vuelva pastoso y atascar la chancadora.</li>
                      <li>Consumo de energía: Se calcula con la fórmula de Bond, relacionada con el diámetro de las partículas producidas.</li>
                      <li>Contenido de sólidos metálicos y otros materiales: Es importante separar objetos como clavos, pernos, rieles, etc. que puedan dañar la chancadora.</li>
                    </ul>
                    <h4>2. Área de Molienda - Clasificación:</h4>
                    <p>Descripción del proceso: Luego del chancado, la molienda es la etapa final para liberar completamente las partes valiosas del mineral (sulfuros u óxidos) de la ganga, antes de la concentración. Se realiza en molinos de barras (etapa primaria) y molinos de bolas (etapa secundaria).</p>
                    <p>Variables operativas:</p>
                    <ul>
                      <li>Carga de mineral: Debe maximizarse sin sobrecargar el molino.</li>
                      <li>Suministro de agua: Controla la densidad de pulpa. Exceso lava bolas, deficiencia amortigua impactos.</li>
                      <li>Carga de bolas: Debe ser la óptima, ni exceso ni defecto.</li>
                      <li>Condición de blindajes: Deben revisarse periódicamente para máxima eficiencia.</li>
                      <li>Tiempo de molienda: Determina la finura del producto, regulado por el agua adicionada.</li>
                    </ul>
                    <h4>3. Área de Flotación:</h4>
                    <p>Descripción del proceso: La flotación por espumas es un proceso físico-químico que permite la separación de especies minerales valiosas de la ganga, aprovechando sus propiedades de afinidad (hidrofílicas) o repulsión (hidrofóbicas) por el agua. Se realiza en celdas de flotación mediante la adición de reactivos.</p>
                    <p>Variables operativas:</p>
                    <ul>
                      <li>Densidad de pulpa</li>
                      <li>pH de la pulpa</li>
                      <li>Reactivos de flotación (colectores, espumantes, modificadores)</li>
                      <li>Automatización para controlar variables</li>
                    </ul>
                    <h4>4. Área de Espesado y Filtrado:</h4>
                    <p>Descripción del proceso: Los espesadores son tanques que sirven para espesar los concentrados y relaves de la flotación, eliminando parte del agua que contienen. El concentrado espesado se envía a la etapa de filtrado para eliminar la mayor cantidad de agua posible.</p>
                  </div>
                )}
                {activeSection === 'equipos' && (
                  <div className="button-container">
                    <Link to="/EquipoChancado">
                      <button className="glow-on-hover" type="button">Chancado</button>
                    </Link>
                    <Link to="/equipo/zaranda-vibratoria">
                      <button className="glow-on-hover" type="button">Molienda</button>
                    </Link>
                    <Link to="/equipo/chancadora-rodillos">
                      <button className="glow-on-hover" type="button">Flotacion</button>
                    </Link>
                    <Link to="/equipo/faja-transportadora">
                      <button className="glow-on-hover" type="button">Espesamiento</button>
                    </Link>
                    <Link to="/ruta-de-filtrado"> {/* Debes reemplazar con la ruta correcta */}
                      <button className="glow-on-hover" type="button">Filtrado</button>
                    </Link>
                  </div>
                )}
                {activeSection === 'operacion' && (
                  <div className="op-circuito-content">
                    <h3>Operación del Circuito</h3>
                    <p>Aquí va el contenido relacionado con la operación del circuito</p>
                  </div>
                )}
                {activeSection === 'diagramas' && (
                  <div className="diagram-container">
                    <div className="diagram-card">
                      <img src={dchancado} alt="Diagrama de Chancado" className="diagram-image" />
                      <p>Chancado</p>
                    </div>
                    <div className="diagram-card">
                      <img src={dmolienda} alt="Diagrama de Molienda" className="diagram-image" />
                      <p>Molienda</p>
                    </div>
                    <div className="diagram-card">
                      <img src={dflotacion} alt="Diagrama de Flotación" className="diagram-image" />
                      <p>Flotación</p>
                    </div>
                    <div className="diagram-card">
                      <img src={despesamiento} alt="Diagrama de Espesamiento" className="diagram-image" />
                      <p>Espesamiento</p>
                    </div>
                  </div>
                )}
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Procesos;
