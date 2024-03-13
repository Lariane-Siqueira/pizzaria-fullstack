"use client";
import React, { useState } from "react";
import Image from "next/image";
import { signIn } from "next-auth/react";
import Link from "next/link";
import axios from "axios";

export default function Registerpage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [creatingUser, setCreatingUser] = useState(false); // Enquanto está sendo salvo
  const [userCreated, setUserCreated] = useState(false);
  const [error, setError] = useState(false);

  async function handleFormSubmit(event) {
    event.preventDefault();
    setCreatingUser(true); // carregamento de criando o usuário
    setError(false);
    setUserCreated(false);
    const response = await axios.post(
      "/api/register", // Rota da API
      { email, password }, // Objetos enviados
      {
        headers: {
          //Define os cabeçalhos HTTP personalizados a serem incluidos na solicitação
          "Content-Type": "application/json", // Informação do formato que será enviado o corpo da requisição
        },
      }
    );
    if (response.ok) {
      setUserCreated(true);
    } else {
      setError(true);
    }
    setCreatingUser(false); // quando o usuário for criado com sucesso o carregamento para
  }

  return (
    <>
      <section className="mt-8">
        <h1 className="text-center text-primary text-4xl mb-4">Register</h1>
        {userCreated && (
          <div className="my-4 text-center">
            Usuário criado! Realizar{" "}
            <Link className="underline" href={"/login"}>
              Login &raquo;
            </Link>
            .
          </div>
        )}
        {error && (
          <div className="my-4 text-center">
            Um erro aconteceu. <br />
            Tente novamente mais tarde
          </div>
        )}
        <form className="block max-w-xs mx-auto" onSubmit={handleFormSubmit}>
          <input
            type="text"
            placeholder="email"
            value={email}
            disabled={creatingUser}
            onChange={(event) => setEmail(event.target.value)}
          />
          <input
            type="password"
            placeholder="password"
            disabled={creatingUser}
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <button type="submit" disabled={creatingUser}>
            Register
          </button>
          <div className="my-4 text-center text-gray-500">
            Or login with provider
          </div>
          <button
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
          <div className="text-center my-4 text-gray-500 pt-4">
            Já possui uma conta?{" "}
            <Link href={"/login"} className="underline">
              Faça Login
            </Link>
          </div>
        </form>
      </section>
    </>
  );
}
