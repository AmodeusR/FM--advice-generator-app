import axios from "axios";
import { useEffect, useState } from "react";
import { AdviceCard } from "./components/AdviceCard";

export type AdviceProps = {
  id: number;
  advice: string;
};

function App() {
  const [advice, setAdvice] = useState({} as AdviceProps);
  const [fadeOut, setFadeOut] = useState(true);

  const fetchAdvice = async () => {
    setFadeOut(true);
    const fetchFunction = await axios.get("https://api.adviceslip.com/advice", {
      params: {
        t: new Date().getTime()
      }
    });
    const fetchedAdvice = fetchFunction.data;

    setTimeout(async () => {
      setAdvice(fetchedAdvice.slip);
      setFadeOut(false);
    }, 600);
  };

  useEffect(() => {
    setTimeout(() => {
      setFadeOut(false);
    }, 1200);

    const fetchAdvice = async () => {
      const fetchFunction = await axios.get(
        "https://api.adviceslip.com/advice", {
          params: {
            t: new Date().getTime()
          }
        }
      );

      const fetchedAdvice = fetchFunction.data;

      setAdvice(fetchedAdvice.slip);
    };

    fetchAdvice();
  }, []);

  return (
    <div className="bg-grayblue-700 h-screen flex items-center justify-center relative">
      <div className="w-11/12">
        <AdviceCard
          advice={advice}
          fadeOut={fadeOut}
          fetchAdvice={fetchAdvice}
        />{" "}
        <footer className="text-grayblue-200 absolute bottom-2 text-center left-0 right-0">Challenge by <a className="link" href="https://www.frontendmentor.io/">Frontend Mentor</a>. Coded by <a className="link" href="https://github.com/amodeusr">Amodeus R.</a>.</footer>
      </div>
    </div>
  );
}

export default App;
