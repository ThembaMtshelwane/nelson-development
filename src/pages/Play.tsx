import axios from "axios";
import { useState, type FormEvent } from "react";

const Play = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [results, setResults] = useState<string[]>([]);
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleSubmitWord = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const word = formData.get("word") as string;

    try {
      setIsLoading(true);
      const response = await axios.post(
        "https://nelson-development-api-psi.vercel.app/",
        { data: word }
      );

      setResults(response.data.word);
    } catch (error: unknown) {
      if (axios.isAxiosError(error) && error.response && error.response.data) {
        console.error("API request failed:", error.response.data.error);
        setErrorMessage(error.response.data.error);
      } else {
        console.error("API request failed:", error);
        setErrorMessage("Incorrect. Try again");
      }
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="cursor-default px-4  w-full sm:w-[80%]  flex flex-col gap-4 rounded-xl py-8">
      <form onSubmit={handleSubmitWord} className="flex flex-col gap-4">
        <h2 className="text-center text-4xl font-bold">Word Decomposer</h2>
        <div className="flex flex-col p-2 gap-2">
          <label htmlFor="word" className="cursor-pointer">
            Word:
          </label>
          <input
            id="word"
            name="word"
            type="text"
            required
            className="border px-2 py-3 rounded-xl"
            placeholder="Enter a word, e.g example"
          />
        </div>
        <p className="text-red-400">{errorMessage}</p>
        <button
          type="submit"
          className={`border w-fit mx-auto px-4 py-2 rounded-2xl hover:bg-[#DDE9F1] hover:text-[#161B24] cursor-pointer hover:scale-[1.01] font-bold ${
            isLoading
              ? "opacity-50 cursor-not-allowed bg-[#DDE9F1] text-[#161B24]"
              : ""
          }`}
          disabled={isLoading}
        >
          {isLoading ? "SUBMITTING..." : "SUMBIT"}
        </button>
      </form>

      <div className="flex flex-col gap-4">
        <h3 className="text-2xl">Results</h3>
        {results.length > 0 && results ? (
          <p>Word: [{results.map((letter) => `"${letter}", `)} ]</p>
        ) : (
          <p>No results available. Enter a word</p>
        )}
      </div>
    </div>
  );
};

export default Play;
