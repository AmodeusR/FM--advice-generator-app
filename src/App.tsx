import { MobileDivider, DesktopDivider } from "./assets";
import { useWindowWidthSize } from "./hooks/useWindowWidthSize";

function App() {
  const windowWithSize = useWindowWidthSize();

  console.log(windowWithSize);
  
  return (
    <div className="bg-grayblue-700 h-screen flex items-center justify-center">
      <div className="w-11/12">
        <div className="bg-grayblue-400 mx-auto p-8 rounded-xl max-w-md flex flex-col items-center gap-6">
          <span className="text-neogreen-300 uppercase text-xs tracking-widest">Advice #117</span>
          <q className="text-cyan-100 text-3xl text-center leading-10">
            It is easy to sit up and take notice, what's difficult is getting up and taking action
          </q>
          <img className="" src={windowWithSize < 402 ? MobileDivider : DesktopDivider} alt="" />
        </div>
      </div>
    </div>
  );
}

export default App;
