import { PiFileCSharpFill, PiFileSqlFill } from "react-icons/pi";
import { FaReact, FaGithub } from "react-icons/fa";
import { VscAzure } from "react-icons/vsc";

const TechStack = () => {
  const techStack = [
    { id: 1, naziv: ".NET Core & Framework", icon: <PiFileCSharpFill size={30} color="green" /> },
    { id: 2, naziv: "React & React Native", icon: <FaReact size={30} color="lightblue" /> },
    { id: 3, naziv: "SQL (MSSQL, MySQL)", icon: <PiFileSqlFill size={30} color="orange" /> },
    { id: 4, naziv: "Azure", icon: <VscAzure size={30} color="blue" /> },
    { id: 5, naziv: "GitHub (Git)", icon: <FaGithub size={30} color="black" /> },
  ];

  const petlja = [...techStack, ...techStack];

  return (
    <div className="divTechStack">
      <div className="techTrack">
        {petlja.map((t, i) => (
          <div
            className="divTech"
            key={`${t.id}-${i}`}
            aria-hidden={i >= techStack.length}
          >
            <span className="iconTech">{t.icon}</span>
            <p className="txtTech">{t.naziv}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechStack;