import { Buttons } from "./common/Buttons";
import { Skills } from "./common/Skills";
import "./UserCard.css";

export const UserCard = (props) => {
  const { skills } = props;
  return (
    <>
      <div className="card">
        <span className={props.online ? "pro online" : "pro offline"}>
          {props.online ? "Online" : "Offline"}
        </span>
        <img src={props.profile} alt="user" />
        <h5>{props.name}</h5>
        <h6>{props.city}</h6>
        <p>{props.job}</p>
        <Buttons />
        <Skills skills={skills} />
      </div>
    </>
  );
};
