import {Row, Col, Image, Badge} from "react-bootstrap";
import { IoMdSchool } from "react-icons/io";
import { HiUserGroup } from "react-icons/hi2";
import { FaHandshake } from "react-icons/fa";
import { FaRegHandPointRight } from "react-icons/fa6";

const Angazmani = () => {
    const storage = import.meta.env.VITE_OBJECTSTORAGE;

    const angazmani = [
        {id: 1, icon: <IoMdSchool size={16} color="white" />, badge:"Školovanje", naziv: "Ekonomski fakultet Sarajevo UNSA", opis:"Menadžment i informacione tehnologije", slika:`${storage}/efsa_bg.png`, link:""},
        {id: 2, icon:<HiUserGroup size={16} color="white" />, badge:"Angažmani", naziv: "IV IT takmičenje za srednjoškolce iz BiH", opis:"Dana 3.7.2023. godine na Ekonomskom fakultetu Univerziteta u Sarajevu održano je četvrto IT takmičenje iz korištenja Microsoftovih alata - Worda, Excela i PowerPointa. Organizovali su ga volonteri MIT Centra. Osam srednjoškolaca iz Tuzle, Gračanice, Doboja, Bugojna i Sarajeva je sudjelovalo finalu ovog takmičenja, a troje najboljih je osvojilo vrijedne nagrade iz IT asortimana kompanije Disti.", slika:`${storage}/takmicenje.jpg`, link:"https://www.efsa.unsa.ba/ef/bs/odrzano-4-it-takmicenje-za-srednjoskolce-na-ekonomskom-fakultetu-univerziteta-u-sarajevu"},
        {id: 3, icon:<FaHandshake size={16} color="white" />, badge:"Zahvalnica", naziv:"Implementacija QR koda na EFSA UNSA", opis:"Volonteri MIT Centra uspješno su implementirali QR kod modul u Moodle sistemu za kolaboraciju i učenje kako bi se poboljšao proces evidencije prisustva profesora i studenata, s ciljem što vjerodostojnijeg, pravovremenog i bržeg bilježenja prisustva, ali i predavanja. Za predan rad i uloženi trud, bivša dekanica Jasmina Selimović uručila je volonterima zahvalnice.", slika:`${storage}/moodle.jpeg`, link:""}
    ];

    return(
        <>
            <div>
                {angazmani.map((a, i) => (
                    <Row
                        key={a.id ?? i}
                        className={`align-items-center my-2 p-5 ${i % 2 === 1 ? "flex-row-reverse" : ""}`}
                    >
                        <Col md={6}>
                            <Image src={a.slika} fluid className="w-100 imgAngazman" />
                        </Col>
                        <Col md={6}>
                            <Badge bg="secondary">{a.icon} {a.badge}</Badge>
                            <h1 style={{fontSize:"30px"}}>{a.naziv}</h1>
                            <p style={{fontWeight:"lighter"}}>{a.opis}</p>
                            {a.link ? <a className="openLink" target="_blank" rel="noreferrer noopener preconnect" href={a.link}> <FaRegHandPointRight size={16} color="black" /> Pročitaj detalje</a> : null}
                        </Col>
                    </Row>
                ))}
            </div>
        </>
    )

}
export default Angazmani;