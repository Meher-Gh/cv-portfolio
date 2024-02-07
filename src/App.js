import React from "react";
import "./App.css";

function App() {
  const user = {
    name: "Meher Gharsallah",
    jobTitle: "Web Developer",
    about:
      "Passionate about web development and creating awesome user experiences.",
    email: "gharsallahmeher1@gmail.com",
    phone: "+123 456 7890",
    skills: ["HTML", "CSS", "JavaScript", "React"],
    photoURL:
      "https://media.licdn.com/dms/image/D4E03AQEWLXpy1pbT4g/profile-displayphoto-shrink_800_800/0/1681099390812?e=1712793600&v=beta&t=AidnbAZnu_e-1d4CzkmCv6QSNda9jvvDOO5JPcKUMPg",
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>
          The real purpose is to learn docker and contenarization and we will
          use this app later
        </h1>
        <img src={user.photoURL} alt="Profile" />
        <h1>{user.name}</h1>
        <p>{user.jobTitle}</p>
      </header>

      <section className="App-content">
        <h2>About Me</h2>
        <p>{user.about}</p>

        <h2>Contact Information</h2>
        <ul>
          <li>Email: {user.email}</li>
          <li>Phone: {user.phone}</li>
        </ul>

        <h2>Skills</h2>
        <ul>
          {user.skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default App;
