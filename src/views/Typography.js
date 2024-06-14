import React, { useState } from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import './Typography.css'; // Asegúrate de tener este archivo CSS para estilos adicionales
import epp from "assets/img/epp.png"; // Asegúrate de que la ruta a la imagen es correcta

function Typography() {
  const [selectedDoc, setSelectedDoc] = useState(null);

  const handleCardClick = (doc) => {
    setSelectedDoc(doc);
  };

  return (
    <>
      <Container fluid>
        <Row>
          <Col md="12">
            <Card>
              <Card.Body>
                <div className="cards">
                  <div className="card red" onClick={() => handleCardClick("EPPS")}>
                    <p className="tip">EPPS</p>
                    <p className="second-text">Descargar PDF</p>
                  </div>
                  <div className="card blue" onClick={() => handleCardClick("IPERC")}>
                    <p className="tip">IPERC</p>
                    <p className="second-text">Descargar PDF</p>
                  </div>
                </div>
                {selectedDoc && (
                  <div className="preview-box">
                    <h4>{selectedDoc}</h4>
                    {selectedDoc === "EPPS" && (
                      <img src={epp} alt="EPP" className="preview-image" />
                    )}
                    {selectedDoc === "IPERC" && (
                      <p>Contenido informativo para {selectedDoc}</p>
                    )}
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

export default Typography;
