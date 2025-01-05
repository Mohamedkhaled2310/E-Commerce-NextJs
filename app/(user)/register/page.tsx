import RegisterForm from "./RegisterForm";

const Register = () => {
    return (
      <section className="flex items-center justify-center h-screen bg-blue-600">
      <div className="bg-white p-8 md:w-1/3 w-full rounded-lg shadow-lg">
        <h1 className="text-slate-600 font-semibold text-2xl text-center mb-6">Register Page</h1>
          <RegisterForm/>
      </div>
    </section>
    );
  };
  
  export default Register;