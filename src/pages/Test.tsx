const Test = () => {
  return (
    <div className="h-full flex items-center justify-center">
      <form
        action=""
        className="cursor-default px-4  w-full sm:w-[80%] flex flex-col gap-4 rounded-xl py-8"
      >
        <h2 className="text-center text-4xl font-bold">TEST</h2>
        <div className="flex flex-col p-2 gap-2">
          <label htmlFor="email" className="cursor-pointer">
            Email:
          </label>
          <input
            id="email"
            name="email"
            type="text"
            required
            className="border px-2 py-3 rounded-xl"
            placeholder="Enter a word, e.g example"
          />
        </div>
        <div className="flex flex-col p-2 gap-2">
          <label htmlFor="apiURL" className="cursor-pointer">
            API URL:
          </label>
          <input
            id="apiURL"
            name="apiURL"
            type="text"
            required
            className="border px-2 py-3 rounded-xl"
            placeholder="Neslson Development URL"
          />
        </div>
        <button className="border w-fit mx-auto px-4 py-2 rounded-2xl hover:bg-[#DDE9F1] hover:text-[#161B24] cursor-pointer hover:scale-[1.01] font-bold">
          SUBMIT
        </button>
      </form>
    </div>
  );
};

export default Test;
