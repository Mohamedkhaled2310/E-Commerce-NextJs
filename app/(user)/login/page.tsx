import LoginForm from "./LoginForm";


const LogIn = () => {
  return (
    <section className="flex items-center justify-center h-screen bg-blue-600">
      <div className="bg-white p-8 md:w-1/3 w-full rounded-lg shadow-lg">
        <h1 className="text-slate-600 font-semibold text-2xl text-center mb-6">LogIn Page</h1>
          <LoginForm/>
      </div>
    </section>
  );
};

export default LogIn;
