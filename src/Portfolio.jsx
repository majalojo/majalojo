import { Card, Badge, CardLink } from "react-bootstrap";
import { FaRegHandPointRight } from "react-icons/fa6";

const Portfolio = () => {

    const portfolioArray = [
        { id: 1, naziv: "Web stranica", slika: "https://majalojo.net/Desktop.png", link:"https://www.bunjogrupacija.ba/", linkCaption:"Web", linkCaption2:"", link2:"", techStack: [".NET Core Web API", "React", "SignalR", "TanStack Query", "R2 Object Storage"], opis: "Zvanična web stranica za autokuću Bunjo Grupacija d.o.o. Sarajevo." },
        { id: 2, naziv: "Mobilna aplikacija", slika: "https://majalojo.net/Mobilna.png", link:"https://apps.apple.com/us/app/bunjo/id6748915261", linkCaption:"Apple Store", linkCaption2:"Google Play Store", link2:"https://play.google.com/store/apps/details?id=com.majalojo.bunjogrupacijapk&pcampaignid=web_share", techStack: ["React Native", "Expo", "SignalR", "Azure WebJob", "TanStack Query", "R2 Object Storage"], opis: "Zvanična mobilna aplikacija za autokuću Bunjo Grupacija d.o.o. Sarajevo." }
    ];

    return (
        <>
            <div className="mb-5" style={{padding:"1.5rem"}}>
                <h1 style={{fontWeight:"lighter", fontSize:"30px"}}>Portfolio</h1>
            </div>
            <div className="divPortfolio">
                {
                    portfolioArray.map((p) =>
                            <Card key={p.id} style={{ width: "100%" }}>
                                <Card.Img variant="top" src={p.slika} fluid className="img-fluid w-100 imgPorfolio" />
                                <Card.Body>
                                    <Card.Title>{p.naziv}</Card.Title>
                                    {p.techStack.map(t => (
                                        <Badge className="mx-1" bg="secondary" >{t}</Badge>
                                    ))}
                                    <Card.Text style={{fontWeight:"lighter"}}>
                                        {p.opis}
                                    </Card.Text>
                                    <CardLink as="a" href={p.link} target="_blank" rel="noreferrer noopener preconnect" className="openLink">
                                        <FaRegHandPointRight className="mx-1" />
                                        {p.linkCaption}</CardLink>
                                    {p.link2 !="" ?  <CardLink as="a" href={p.link2} target="_blank" rel="noreferrer noopener preconnect" className="openLink"><FaRegHandPointRight className="mx-1" /> {p.linkCaption2}</CardLink> : null}
                                </Card.Body>
                            </Card>
                    )
                }
            </div>

        </>
    )

}
export default Portfolio;