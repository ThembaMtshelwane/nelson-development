import axios from "axios";
import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";

interface FormInputs {
  email: string;
  apiURL: string;
}

const InputScreen = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<FormInputs>();

  const handleSubmitForm = async (data: FormInputs) => {
    const { email, apiURL } = data;
    try {
      const response = await axios.get(
        `https://yhxzjyykdsfkdrmdxgho.supabase.co/functions/v1/junior-dev?url=${apiURL}&email=${email}`,
      );

      navigate("/results", {
        state: {
          message: response.data.message,
        },
      });
    } catch (error: unknown) {
      let errorMessage = "Error: Something went wrong";

      if (axios.isAxiosError(error)) {
        errorMessage = error.response?.data?.error || "API request failed";
      }
      setError("email", { type: "server", message: errorMessage });
    }
  };
  return (
    <form
      onSubmit={handleSubmit(handleSubmitForm)}
      className="cursor-default px-4  w-full sm:w-[80%]  flex flex-col gap-4 rounded-xl py-8"
    >
      <h2 className="text-center text-4xl font-bold">TEST</h2>
      <div className="flex flex-col p-2 gap-2">
        <label htmlFor="email" className="cursor-pointer">
          Email:
        </label>
        <input
          {...register("email", { required: "Email is required" })}
          id="email"
          name="email"
          type="email"
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
        {...register("apiURL", { 
            required: "URL is required",
            pattern: {
              value: /^(https?:\/\/)/,
              message: "URL must start with http:// or https://"
            }
          })}
          id="apiURL"
          name="apiURL"
          type="text"
          required
          className="border px-2 py-3 rounded-xl"
          placeholder="Enter your URL"
        />
      </div>
      {errors.email && <p className="text-red-400">{errors.email.message}</p>}
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
  );
};

export default InputScreen;
