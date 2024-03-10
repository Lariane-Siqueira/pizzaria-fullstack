import mongoose from "mongoose";
import {User} from "../../../models/User"

export async function POST(req) {
    const body = await req.json();
    mongoose.connect(process.env.MONGO_URL); // Conecta o banco de dados
    const createdUser = await User.create(body); // Cria o usuário, pegando o dado do req body
    return Response.json(createdUser);
  } 

