import { useWindowWidthSize } from "../hooks/useWindowWidthSize";
import { ReactComponent as Dice } from "../assets/icon-dice.svg";
import { MobileDivider, DesktopDivider } from "../assets";
import { AdviceProps } from "../App";

type AdviceCardProps = {
  advice: AdviceProps
  fadeOut: boolean,
  fetchAdvice: () => void;
}

export function AdviceCard({
  advice,
  fadeOut,
  fetchAdvice,
}: AdviceCardProps) {
  const windowWidthSize = useWindowWidthSize();
  
  const getNewAdvice = () => {
    fetchAdvice();
  };

  return (
    <div className="bg-grayblue-400 mx-auto p-8 rounded-xl max-w-lg min-h-[18rem] flex flex-col justify-between items-center gap-6 relative">
      <span className="text-neogreen-300 uppercase text-xs tracking-widest">
        Advice #
        <span
          className={`transition-opacity duration-500 ${
            fadeOut && "opacity-0"
          }`}
        >
          {advice.id}
        </span>
      </span>
      <q
        className={`text-cyan-100 text-3xl text-center leading-10 transition-opacity duration-500 ${
          fadeOut && "opacity-0"
        }`}
      >
        {advice.advice}
      </q>
      <img
        className="mb-8"
        src={windowWidthSize < 402 ? MobileDivider : DesktopDivider}
        alt=""
      />
      <button
        onClick={getNewAdvice}
        className="p-5 bg-neogreen-300 absolute -bottom-8 rounded-full shadow-hoverShadow hover:shadow-neogreen-300 transition-shadow"
      >
        <Dice />
      </button>
    </div>
  );
}
