"use client";
import React from "react";
import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";
import Link from "next/link";

export default function Header() {
  const session = useSession(); // Verifica se usuário está ou não logado
  const status = session?.status;
  const userData = session.data?.user; // Acessa os dados do usuário, se tiver
  let userName = userData?.name || userData?.email; // Pega o nome ou o email de dentro dos dados fornecidos, se tiver
  if (userName && userName.includes(" ")) {
    // Se tiver um username, e o username tiver um espaço entra no if. Se tirar o primeiro "userName" pode ocorrer erro de retornar como indefinido
    userName = userName.split(" ")[0]; // Verifica se o nome possui espaço, se possuir, pega somente o primeiro
  }

  return (
    <>
      <header className="flex items-center justify-between">
        <nav className="flex items-center gap-8 text-gray-500">
          <Link className="text-primary font-semibold text-2xl" href="/">
            {" "}
            ST PIZZA{" "}
          </Link>
          <Link href={"/"}>Home</Link>
          <Link href={""}>Menu</Link>
          <Link href={""}>About</Link>
          <Link href={""}>Contact</Link>
        </nav>
        <nav className="flex items-center gap-4 text-gray-500">
          {status === "authenticated" && ( //Se está logado mostra a opção do Logout, senão de Login
            <>
              <Link href={"/profile"} className="whitespace-nowrap">
                Olá, {userName}
              </Link>
              <button
                onClick={() => signOut()}
                className="bg-primary rounded text-white px-7 py-2"
              >
                Sair
              </button>
            </>
          )}
          {status == "unauthenticated" && (
            <>
              <Link href={"/login"}>Login</Link>
              <Link
                href={"/register"}
                className="bg-primary rounded text-white px-7 py-2"
              >
                Register
              </Link>
            </>
          )}
        </nav>
      </header>
    </>
  );
}
