"use client";
import React, { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { redirect } from "next/dist/server/api-utils";
import Image from "next/image";
import axios from "axios";

export default function ProfilePage() {
  const session = useSession();
  const { status } = session;
  const [userName, setUserName] = useState(""); // Os '?' é para caso algum desses dados esteja como undefined ele ignora

  useEffect(() => {
    if (status === "authenticated") {
      setUserName(session.data.user.name);
    }
  }, [session, status]);

  console.log(status);

  if (status === "loading") {
    return "Loading...";
  }

  if (status === "unauthenticated") {
    redirect("/login"); // Se o usuário não estiver logado, redirecionar ao login
  }

  async function handleProfileUpdate(event) {
    event.preventDefault();
    const response = await axios.put(
      "/api/profile", // Rota da API
      { name: userName }, // Objetos enviados
      {
        headers: {
          //Define os cabeçalhos HTTP personalizados a serem incluidos na solicitação
          "Content-Type": "application/json", // Informação do formato que será enviado o corpo da requisição
        },
      }
    );
  }

  const userImage = session.data.user.image;

  return (
    <>
      <section className="mt-8">
        <h1 className="text-center text-primary text-4xl mb-4">Perfil</h1>
        <div className="max-w-md mx-auto">
          <div className="flex gap-4 items-center">
            <div>
              <div className="p-2 rounded-lg relative">
                <Image
                  src={userImage}
                  priority={true}
                  width={250}
                  height={250}
                  alt={"avatar"}
                  className="rounded-lg w-full h-full mb-1"
                />
                <button type="button">Editar</button>
              </div>
            </div>
            <form className="grow" onSubmit={handleProfileUpdate}>
              <input
                type="text"
                placeholder="Nome completo"
                value={userName}
                onChange={(event) => setUserName(event.target.value)}
              />
              <input type="email" disabled value={session.data.user.email} />
              <button type="submit">Salvar</button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
