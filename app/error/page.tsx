// for customize error page but not used for now
"use client";
import { useSearchParams } from "next/navigation";

const ErrorPage: React.FC = () => {
  const searchParams = useSearchParams();
  const message = searchParams.get("message") || "An unknown error occurred.";

  return (
    <div className="flex items-center justify-center h-screen text-center">
      <div>
        <h1 className="text-4xl font-bold text-red-500">Error</h1>
        <p className="text-lg mt-4">{message}</p>
        <button
          onClick={() => window.history.back()}
          className="mt-6 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
          Go Back
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;
