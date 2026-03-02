import axios from "axios";
import { useState } from "react";
import type { ApiErrorResponse } from "../types/api";
import { useForm } from "react-hook-form";

const Play = () => {
  const [results, setResults] = useState<string[]>([]);
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<{ word: string }>({
    defaultValues: { word: "" },
  });
  const API_URL = import.meta.env.VITE_API_URL || "http://localhost:9000";

  const handleSubmitWord = async (data: { word: string }) => {
    const word = data.word;
    console.log("Submitting word:", word);

    try {
      const response = await axios.post(`${API_URL}`, { data: word });
      setResults(response.data.word);
    } catch (error: unknown) {
      if (axios.isAxiosError<ApiErrorResponse>(error) && error.response) {
        const { message, errors } = error.response.data;
        if (errors && errors.length > 0) {
          setError("word", { type: "server", message: errors[0].message });
        } else {
          setError("word", {
            type: "server",
            message: message || "An unexpected error occurred",
          });
        }
      } else {
        console.error("API request failed:", error);
        setError("word", {
          type: "server",
          message: "Error: Something went wrong",
        });
      }
      setResults([]);
    }
  };
  return (
    <div className="cursor-default px-4  w-full sm:w-[80%]  flex flex-col gap-4 rounded-xl py-8">
      <form
        onSubmit={handleSubmit(handleSubmitWord)}
        className="flex flex-col gap-4"
      >
        <h2 className="text-center text-4xl font-bold">Word Decomposer</h2>
        <div className="flex flex-col p-2 gap-2">
          <label htmlFor="word" className="cursor-pointer">
            Word:
          </label>
          <input
            {...register("word")}
            id="word"
            name="word"
            type="text"
            required
            className="border px-2 py-3 rounded-xl"
            placeholder="Enter a word, e.g example"
          />
        </div>
        {errors.word && <p className="text-red-400">{errors.word.message}</p>}
        <button
          type="submit"
          className={`border w-fit mx-auto px-4 py-2 rounded-2xl hover:bg-[#DDE9F1] hover:text-[#161B24] cursor-pointer hover:scale-[1.01] font-bold ${
            isSubmitting
              ? "opacity-50 cursor-not-allowed bg-[#DDE9F1] text-[#161B24]"
              : ""
          }`}
          disabled={isSubmitting}
        >
          {isSubmitting ? "SUBMITTING..." : "SUMBIT"}
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
