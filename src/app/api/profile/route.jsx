import { User } from "@/models/User";
import { authOptions } from "../auth/[...nextauth]/route";
import mongoose from "mongoose";
import { getServerSession } from "next-auth";

export async function PUT(req) {
  mongoose.connect(process.env.MONGO_URL);
  const data = await req.json();
  const session = await getServerSession(authOptions);
  const email = session.user.email;

  console.log({ session, data });
  if ("name" in data) {
    // Update user name
   await User.updateOne({ email }, { name: data.name }); // Para atualizar o usuário, updateone por ser somente uma rota, o usuário é identificado pelo email e o que troca é o nome
  }

  return Response.json(true);
}
