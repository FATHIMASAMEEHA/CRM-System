import React from "react";

const Login = () => {
  return (
    <div className="flex h-screen bg-teal-50">
      {/* Left Side with Welcome Text */}
      <div className="items-center justify-center hidden text-5xl font-bold text-white bg-teal-300 lg:flex lg:w-1/2">
        <div className="text-center">
          <p className="origin-left transform rotate-90">Welcome</p>
          <p className="mt-6 text-lg">INTRODUCING BROKER OPERATING SYSTEM</p>
        </div>
      </div>

      {/* Right Side with Login Form */}
      <div className="flex items-center justify-center w-full lg:w-1/2">
        <div className="w-full max-w-sm">
          <h2 className="mb-6 text-3xl font-semibold text-center text-teal-500">
            LOGIN
          </h2>
          <form className="px-8 pt-6 pb-8 mb-4 bg-white rounded shadow-md">
            <div className="mb-4">
              <label
                className="block mb-2 text-sm font-bold text-teal-700"
                htmlFor="username"
              >
                Username
              </label>
              <input
                className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Username"
              />
            </div>
            <div className="mb-6">
              <label
                className="block mb-2 text-sm font-bold text-teal-700"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="w-full px-3 py-2 mb-3 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder=""
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                className="px-4 py-2 font-bold text-white bg-teal-500 rounded hover:bg-teal-700 focus:outline-none focus:shadow-outline"
                type="button"
              >
                Login
              </button>
              <div className="text-sm">
                <a
                  className="inline-block text-sm font-bold text-teal-500 align-baseline hover:text-teal-800"
                  href="#"
                >
                  Forgot
                </a>
                <span className="mx-1">|</span>
                <a
                  className="inline-block text-sm font-bold text-teal-500 align-baseline hover:text-teal-800"
                  href="#"
                >
                  Help
                </a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
