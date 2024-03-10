"use client";
import React, { useState } from "react";
import Image from "next/image";
import axios from "axios";

export default function Registerpage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleFormSubmit(event) {
    event.preventDefault();
    axios.post(
      "/api/register", // Rota da API
      { email, password }, // Objetos enviados
      {
        headers: { //Define os cabeçalhos HTTP personalizados a serem incluidos na solicitação
          "Content-Type": "application/json", // Informação do formato que será enviado o corpo da requisição
        },
      }
    );
  }

  return (
    <>
      <section className="mt-8">
        <h1 className="text-center text-primary text-4xl mb-4">Register</h1>
        <form className="block max-w-xs mx-auto" onSubmit={handleFormSubmit}>
          <input
            type="text"
            placeholder="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <input
            type="password"
            placeholder="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <button type="submit">Register</button>
          <div className="my-4 text-center text-gray-500">
            Or login with provider
          </div>
          <button className="flex gap-4 justify-center">
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
