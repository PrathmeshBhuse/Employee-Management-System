import React, { useState } from "react";

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(email, password);

    setEmail("");
    setPassword("");
  };

  return (
    <div className="flex h-screen w-screen items-center justify-center bg-gradient-to-br from-emerald-300 via-white to-emerald-600">
      <div className="bg-white shadow-2xl p-10 rounded-3xl border border-gray-100">
        <h2 className="text-2xl font-bold text-gray-700 mb-8 text-center">Welcome Back</h2>
        <form
          className="flex flex-col items-center justify-center gap-6"
          onSubmit={(e) => {
            submitHandler(e);
          }}
        >
          <input
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
            type="email"
            className=" text-black w-full border border-gray-300 py-4 px-6 text-base outline-none bg-gray-50 rounded-full shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-emerald-400 focus:border-emerald-500 transition-all duration-300"
            placeholder="Enter Your Email"
          />
          <input
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            required
            type="password"
            className="w-full border text-black border-gray-300 py-4 px-6 text-base outline-none bg-gray-50 rounded-full shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-emerald-400 focus:border-emerald-500 transition-all duration-300"
            placeholder="Enter Your Password"
          />
          <button className="w-full py-3 px-6 text-base rounded-full" style={{
            font: "inherit",
            backgroundColor: "#00A884",
            border: 0,
            color: "white",
            borderRadius: "0.5em",
            fontSize: "1.35rem",
            padding: "0.375em 1em",
            fontWeight: "600",
            textShadow: "0 0.0625em 0 #fff",
            boxShadow: `inset 0 0.0625em 0 0 #f4f4f4, 0 0.0625em 0 0 #efefef,
              0 0.125em 0 0 #ececec, 0 0.25em 0 0 #e0e0e0, 0 0.3125em 0 0 #dedede,
              0 0.375em 0 0 #dcdcdc, 0 0.425em 0 0 #cacaca, 0 0.425em 0.5em 0 #cecece`,
            transition: "0.15s ease",
            cursor: "pointer"
          }}
            onMouseDown={(e) => {
              e.target.style.translate = "0 0.225em";
              e.target.style.boxShadow = `inset 0 0.03em 0 0 #f4f4f4, 0 0.03em 0 0 #efefef,
              0 0.0625em 0 0 #ececec, 0 0.125em 0 0 #e0e0e0, 0 0.125em 0 0 #dedede,
              0 0.2em 0 0 #dcdcdc, 0 0.225em 0 0 #cacaca, 0 0.225em 0.375em 0 #cecece`;
            }}
            onMouseUp={(e) => {
              e.target.style.translate = "";
              e.target.style.boxShadow = "";
            }}
          >
            Login
          </button>
        </form>
        <p className="text-sm text-gray-500 mt-4 text-center">
          Don't have an account? <a href="#" className="text-emerald-600 hover:underline">Sign up</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
