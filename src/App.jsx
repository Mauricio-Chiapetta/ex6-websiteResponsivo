import { Card } from "./components/Card";
import speaker1 from "./assets/speaker-1.webp";
import speaker2 from "./assets/speaker-2.webp";
import speaker3 from "./assets/speaker-3.webp";
import { Events } from "./components/Events";
import sub from "./assets/subscribe.svg";
import { Form } from "./components/Form";
import { Button } from "./components/Button";

function App() {
  return (
    <div className="bg-slate-200 min-h-screen  dark:bg-neutral-800 dark:text-white overflow-hidden">
      <div className="bg-[linear-gradient(to_top,rgba(0,0,0,0.8),rgba(0,0,0,0)),url(./assets/people.webp)] bg-cover bg-center bg-no-repeat text-white p-64 min-h-screen flex items-center flex-col">
        <h2 className="font-bold  mb-5 text-4xl">
          Future Tech Conference 2024
        </h2>
        <p className="mb-5 ">
          Join the loading voices in AI, Cloud Computing, and Web Development
        </p>
        <Button title="Register Now" />
      </div>

      <div className="flex flex-col items-center text-center">
        <h3 className="font-semibold p-10 text-2xl">Our Speakers</h3>
        <div className="flex flex-wrap gap-3 justify-center sm:flex-col md:flex-row md:gap-5">
          <Card
            imgSrc={speaker1}
            name="Dr. Jane Doe"
            tech="Ai Specialist at TechCorp"
          />
          <Card
            imgSrc={speaker2}
            name="Jonh Smith"
            tech="Cloud Architect at CloudNet"
          />
          <Card
            imgSrc={speaker3}
            name="Sara Lee"
            tech="Full Stack Developer at WebWorks"
          />
        </div>
      </div>

      <div className="flex flex-col items-center text-center">
        <h2 className="p-10 font-semibold text-2xl">Event Schedule</h2>
        <Events />
      </div>

      <div className="flex flex-col items-center justify-center text-center gap-10 mb-20 md:flex-row md:gap-20 md:text-left">
        <img src={sub} alt="newsletter image" className="w-96 h-auto p-6" />
        <Form />
      </div>

      <footer className="flex flex-col items-center text-center mb-4 mt-auto ">
        <p className="text-gray-600 mb-4 dark:text-white">
          &copy; 2024 Future Tech Conference. All rights reserved.
        </p>
        <a href="#register">
          <Button title="Register Now" />
        </a>
      </footer>
    </div>
  );
}

export default App;
