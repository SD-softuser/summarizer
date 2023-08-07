import github from "./assets/github.png";

function App() {
  return (
    <div
      className="w-full bg-[#0f172a] h-full min-h-[100vh]
    py-4
    px-4
    md:px-20"
    >
      <div className="w-full">
        <div className="flex flex-row justify-between items-center w-full h-10 px-5 2xl:px-40">
          <h3 className="cursor-pointer text-3xl font-bold text-cyan-600">
            Summary!
          </h3>
          <a
            href="https://github.com/SD-softuser"
            target="_blank"
            rel="noreferrer">
            <img src={github} className="w-10 h-10 rounded-lg cursor-pointer" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
