import { FaGithub, FaLinkedin} from "react-icons/fa";
import { FaDev } from "react-icons/fa6";

const Linkovi = () => {

    const github = import.meta.env.VITE_GITHUB;
    const linkedin = import.meta.env.VITE_LINKEDIN;
    const devto = import.meta.env.VITE_DEVTO;

    return(
        <>
            <div className="divLinkovi">
                <a style={{ color: "black", textDecoration: "none" }} href={github} target="_blank">
                    <FaGithub size={24} />
                </a>
                <a style={{ color: "#0077B5", textDecoration: "none", marginRight:"2%", marginLeft:"2%" }} href={linkedin} target="_blank">
                    <FaLinkedin size={26} />
                </a>
                 <a style={{ color: "#000000", textDecoration: "none" }} href={devto} target="_blank">
                    <FaDev size={26} />
                </a>
            </div>
        </>
    )

}
export default Linkovi;