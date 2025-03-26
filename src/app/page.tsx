import Header from "./components/Header"
import Image from "next/image";

export default function Home() {
  return (
    <main>

      <Header/>

      <section id="hero">
        <Image src="/image.png" alt="Vincenzo, aspiring web developer" width={300} height={500} />
        <div>
          <h1>Hi, I'm Vincenzo,<br />Aspiring Web Developer</h1>
          <p>I'm a 21-year-old computer science student with a passion for web development. 
            I'm currently exploring freelance opportunities and eager to collaborate with 
            experienced professionals.</p>
        </div>
      </section>

      <section id="projects">
        <h2>Projects</h2>
        <p>This is where I will showcase my projects.</p>
        {/* Aggiungi qui i tuoi progetti */}
      </section>

      <section id="contact">
        <h2>Contact</h2>
        <p>Let's connect! Feel free to reach out to me for collaborations or inquiries.</p>
        <p>vincenzofarro01@gmail.com</p>
        <br />
        <ul>
          <li><a href="https://www.linkedin.com/in/vincenzo-farro-7517bb196/" aria-label="LinkedIn profile of Vincenzo Farro">LinkedIn</a></li>
          <li><a href="https://github.com/vin-03" aria-label="GitHub profile of Vincenzo Farro">Github</a></li>
          <li><a href="https://www.youtube.com/@vincenzofarro5815" aria-label="YouTube channel of Vincenzo Farro">Youtube</a></li>
        </ul>
      </section>
    </main>
  );
}
