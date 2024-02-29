import "../UserCard.css";

export const Skills = (props) => {
  return (
    <div className="skills">
      <h6>Skills</h6>
      <ul>
        {props.skills.map((skill, key) => (
          <li key={key}>{skill}</li>
        ))}
      </ul>
    </div>
  );
};
