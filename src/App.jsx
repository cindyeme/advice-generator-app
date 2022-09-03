import { useEffect, useState, useCallback } from "react";
import { API_URL, api } from "./api/getAdvice";
import Card from "./components/Card";


function App() {
  const [slip, setSlip] = useState({
    id: "117",
    advice:
      "It is easy to sit up and take notice, what's difficult is getting up and taking action",
  });
  const [loading, setLoading] = useState(false);

  // generate new advice
  const generateAdvice = useCallback(() => {
    setLoading(true);
    fetch(API_URL, api)
      .then(resp => resp.json())
      .then(data => {
        setSlip(data.slip)
        setLoading(false);
      })
      .catch(err => {
        console.log(err);
        setLoading(false);
      });
  }, [setSlip]);

  useEffect(() => {
    generateAdvice();
  }, [generateAdvice]);

  return (
    <>
      <main>
        <div className="App-header bg-dark-blue">
          <div className="bg-dark-grayish-blue  px-5 md:px-10 pt-10 pb-16 flex flex-col space-y-5 items-star shadow-xl rounded-2xl text-2xl max-w-[35rem] relative mx-4 md:mx-0">
            <Card slip={slip} fetchAdvice={generateAdvice} loading={loading} />
          </div>
        </div>
      </main>
      <footer className="absolute right-0 bottom-0">
        <div className="attribution pt-10 md:pt-0 text-white">
          Challenge by{" "}
          <a
            href="https://www.frontendmentor.io?ref=challenge"
            target="_blank"
            rel="noreferrer"
          >
            Frontend Mentor
          </a>
          . Coded by{" "}
          <a
            href="https://www.linkedin.com/in/emerenini-cynthia-ngozi"
            target="_blank"
            rel="noreferrer"
          >
            Emerenini Cynthia Ngozi
          </a>
          .
        </div>
      </footer>
    </>
  );
}

export default App;
