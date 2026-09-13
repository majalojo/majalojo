import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Form, Button, Spinner, Alert } from "react-bootstrap";

const Kontakt = () => {
  const form = useRef();
  const [validated, setValidated] = useState(false);
  const [stanje, setStanje] = useState("mirno"); 

  const sendEmail = (e) => {
    e.preventDefault();
    const forma = e.currentTarget;

    if (!forma.checkValidity()) {
      setValidated(true);
      return;
    }

    setStanje("slanje");

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        { publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY }
      )
      .then(() => {
        setStanje("poslano");
        setValidated(false);
        forma.reset();
      })
      .catch(() => setStanje("greska"));
  };

  const salje = stanje === "slanje";

  return (
    <div className="divKontakt">
      <h2 className="kontakt-naslov">Kontaktiraj me</h2>
      <p className="kontakt-uvod">
        Odgovaram u roku od dan-dva. Ostavi par rečenica o tome šta te zanima.
      </p>

      <Form
        noValidate
        validated={validated}
        className="frmKontakt"
        ref={form}
        onSubmit={sendEmail}
      >
        <Form.Group className="polje" controlId="user_name">
          <Form.Label>Ime:</Form.Label>
          <Form.Control type="text" name="user_name" required disabled={salje} />
          <Form.Control.Feedback type="invalid">
            Upiši svoje ime.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="polje" controlId="user_email">
          <Form.Label>Email adresa na koju očekuješ moj odgovor:</Form.Label>
          <Form.Control type="email" name="user_email" required disabled={salje} />
          <Form.Control.Feedback type="invalid">
            Upiši ispravnu email adresu, npr. ime@domena.ba
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="polje" controlId="message">
          <Form.Label>Poruka:</Form.Label>
          <Form.Control
            as="textarea"
            name="message"
            rows={5}
            required
            minLength={10}
            disabled={salje}
          />
          <Form.Control.Feedback type="invalid">
            Poruka treba imati bar 10 znakova.
          </Form.Control.Feedback>
        </Form.Group>

        <Button type="submit" className="dugmeKontakt" disabled={salje}>
          {salje ? (
            <>
              <Spinner as="span" animation="border" size="sm" className="me-2" />
              Šalje se
            </>
          ) : (
            "Pošalji poruku"
          )}
        </Button>

        {stanje === "poslano" && (
          <Alert variant="success" className="kontakt-alert">
            Poruka je poslana. Odgovor stiže na adresu koju si ostavio.
          </Alert>
        )}

        {stanje === "greska" && (
          <Alert variant="danger" className="kontakt-alert">
            Slanje nije uspjelo. Pokušaj ponovo za koji minut ili piši direktno na
            tvojmail@domena.ba
          </Alert>
        )}
      </Form>
    </div>
  );
};

export default Kontakt;