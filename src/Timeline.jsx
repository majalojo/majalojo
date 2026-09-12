import { Container, Row, Col } from "react-bootstrap";


const zadano = [
  {
    godina: "2022. - 2023.",
    naziv: "Team Leader volontera MIT Centra na EFSA UNSA",
    opis: "Tehnička podrška nastavnom procesu na EFSA UNSA te učestvovanje u projektima za Fakultet.",
  },
  {
    godina: "2023. - ",
    naziv: "Web & Mobile Developer - Full Stack Engineer",
    opis: "Razvijam web i mobilne aplikacije.",
    zaposlenje:"JP BH Pošta d.o.o. Sarajevo"
  },
  
];

export default function Timeline({ stavke = zadano, naslov = "Hronologija" }) {
  return (
    <Container className="timeline">
      <ol className="timeline-list">
        {stavke.map((s, i) => (
          <li className="timeline-item" key={`${s.godina}-${i}`}>
            <Row className="g-0">
              <Col xs={12} md={2} className="timeline-year-col">
                <p className="timeline-year">
                  {s.godina}
                </p>
              </Col>

              <Col xs={12} md={9} className="timeline-body">
                <h3 className="timeline-heading">{s.naziv}</h3>
                <p className="timeline-text">{s.opis}</p>
              </Col>
            </Row>
          </li>
        ))}
      </ol>
    </Container>
  );
}