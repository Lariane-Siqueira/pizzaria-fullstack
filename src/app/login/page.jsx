"use client";
import React, { useState } from "react";
import { signIn } from "next-auth/react";
import Image from "next/image";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginInProgress, setLoginInProgress] = useState(false);
  async function handleFormSubmit(event) {
    event.preventDefault();
    setLoginInProgress(true);

    await signIn("credentials", { email, password, callbackUrl: "/" });
    console.log();
  }
  return (
    <>
      <section className="mt-8">
        <h1 className="text-center text-primary text-4xl mb-4">Login</h1>
        <form className="max-w-xs mx-auto" onSubmit={handleFormSubmit}>
          <input
            type="text"
            placeholder="email"
            value={email}
            disabled={loginInProgress}
            onChange={(event) => setEmail(event.target.value)}
          />
          <input
            type="password"
            name="password"
            placeholder="password"
            disabled={loginInProgress}
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <button type="submit" disabled={loginInProgress}>
            Login
          </button>
          <div className="my-4 text-center text-gray-500">
            Ou conecte-se com sua conta Google
          </div>
          <button
            type="button"
            className="flex gap-4 justify-center"
            onClick={() => signIn("google", { callbackUrl: "/" })}
          >
            <Image
              src={"/google.png"}
              alt={"google logo"}
              width={24}
              height={24}
            />
            Login with Google
          </button>
        </form>
      </section>
    </>
  );
}
