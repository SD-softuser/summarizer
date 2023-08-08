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

        <div className="flex flex-col items-center justify-center mt-4 p-4">
          <h1 className="text-3xl text-white text-center leading-10 font-semibold">Summerizer with <br /> <span className="text-5xl font-bold text-cyan-500">OpenAI GPT</span></h1>
          <p className="mt-5 text-lg text-gray-500 sm:text-xl text-center max-w-2xl">Simply upload your document and get a quick summary using our Summerizer</p>
        </div>

        <div className="flex flex-col w-full items-center justify-center mt-5">
          <textarea placeholder="paste doc content here..."
          rows={6}
          className="block w-full md:w-[650px] rounded-md border border-slate-700 
          bg-slate-800 p-2 text-sm shadow-lg font-medium text-white focus:border-gray-500 focus:outline-none focus:ring-0"></textarea>
        </div>

      </div>
    </div>
  );
}

export default App;
