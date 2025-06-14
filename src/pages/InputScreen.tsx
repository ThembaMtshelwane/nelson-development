import axios from "axios";
import { useState, type FormEvent } from "react";
import { useNavigate } from "react-router";

const InputScreen = () => {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const email = formData.get("email") as string;
    const apiURL = formData.get("apiURL") as string;

    try {
      setIsLoading(true);
      const response = await axios.get(
        `https://yhxzjyykdsfkdrmdxgho.supabase.co/functions/v1/junior-dev?url=${apiURL}&email=${email}`
      );

      navigate("/results", {
        state: {
          message: response.data.message,
        },
      });
    } catch (error: unknown) {
      if (axios.isAxiosError(error) && error.response && error.response.data) {
        console.error("API request failed:", error.response.data.error);
        setErrorMessage(error.response.data.error);
      } else {
        console.error("API request failed:", error);
        setErrorMessage("Error: Something went wrong");
      }
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="cursor-default px-4  w-full sm:w-[80%]  flex flex-col gap-4 rounded-xl py-8"
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
          placeholder="Enter an email, e.g thembamm3@gmail.com"
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
          placeholder="Enter your URL"
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
  );
};

export default InputScreen;
