import React, { useState } from "react";
import Image from "../components/Image";

export default function Authpage() {
  const [isRegistered, setIsRegistered] = useState(false);
  const [error, setError] = useState("");

  return (
    <div className="w-screen h-screen flex-center">
      <div className="flex-center flex-col gap-8 p-8 rounded-4xl shadow-2xl">
        <Image path="/general/logo.png" alt="" w={36} h={36} />
        <h1 className="text-3xl font-medium">
          {isRegistered ? "Create a new Account" : "Login to your account"}
        </h1>

        {isRegistered ? (
          <form key="register" className="w-full flex flex-col gap-4 text-lg">
            <div className="formGroup">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                placeholder="Enter username"
                name="username"
                id="username"
                required
                className="form-input"
              />
            </div>

            <div className="formGroup">
              <label htmlFor="displayName">Name</label>
              <input
                type="text"
                placeholder="Enter Name"
                name="displayName"
                id="displayName"
                required
                className="form-input"
              />
            </div>

            <div className="formGroup">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                placeholder="Enter email"
                name="email"
                id="email"
                required
                className="form-input"
              />
            </div>

            <div className="formGroup">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                placeholder="Enter password"
                name="password"
                id="password"
                required
                className="form-input"
              />
            </div>

            <button type="submit" className="primary-button w-full">Register</button>
            <p onClick={() => setIsRegistered(false)} className="text-base text-center">
              Do you have an account? <b>Login</b>
            </p>

            {error && <p className="">{error}</p>}
          </form>
        ) : (
          <form key="login" className="w-full flex flex-col gap-4 text-lg">
            <div className="formGroup">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                placeholder="Enter email"
                name="email"
                id="email"
                required
                className="form-input"
              />
            </div>

            <div className="formGroup">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                placeholder="Enter password"
                name="password"
                id="password"
                required
                className="form-input"
              />
            </div>

            <button type="submit" className="primary-button w-full">Login</button>
            <p onClick={() => setIsRegistered(true)} className="text-base text-center">
              Don't have an account? <b>Register</b>
            </p>

            {error && <p className="text-red-600">{error}</p>}
          </form>
        )}
      </div>
    </div>
  );
}
