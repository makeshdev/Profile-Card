import { UserCard } from "./components/UserCard";

const userData = [
  {
    name: "Joe",
    city: "New York",
    job: "Front End Developer",
    online: false,
    profile: "assets/images/2.png",
    skills: ["HTML", "Css", "Javascript", "React", "Tailwind"],
  },
  {
    name: "Ram",
    city: "Japan",
    job: "Full Stack Developer",
    online: true,
    profile: "assets/images/1.png",
    skills: ["C++", "HTML", "Css", "Java", "SQL", "Python", "React"],
  },
  {
    name: "Jenith",
    city: "Russia",
    job: "UI/UX Designer",
    online: true,
    profile: "assets/images/3.png",
    skills: [
      "Photoshop",
      "Figma",
      "Illustrator",
      "In Design",
      "PreMeier Pro",
      "XD",
    ],
  },
];

function App() {
  return (
    <>
      {userData.map((data, index) => (
        <UserCard
          key={index}
          name={data.name}
          city={data.city}
          job={data.job}
          online={data.online}
          profile={data.profile}
          skills={data.skills}
        />
      ))}
    </>
  );
}

export default App;
