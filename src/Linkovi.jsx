import { FaGithub, FaLinkedin} from "react-icons/fa";

const Linkovi = () => {

    const github = import.meta.env.VITE_GITHUB;
    const linkedin = import.meta.env.VITE_LINKEDIN;

    return(
        <>
            <div className="divLinkovi">
                <a style={{ color: "black", textDecoration: "none", marginRight:"2%" }} href={github} target="_blank">
                    <FaGithub size={24} />
                </a>
                <a style={{ color: "#0077B5", textDecoration: "none" }} href={linkedin} target="_blank">
                    <FaLinkedin size={26} />
                </a>
            </div>
        </>
    )

}
export default Linkovi;