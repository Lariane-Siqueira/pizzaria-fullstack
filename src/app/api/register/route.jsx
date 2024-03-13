import mongoose from "mongoose";
import {User} from "../../../models/User";

export async function POST(req) {
    const body = await req.json();
    mongoose.connect("mongodb+srv://food-ordering:p1ERnao2Dix7THWB@cluster0.vzllsa0.mongodb.net/food-ordering"); // Conecta o banco de dados
    const createdUser = await User.create(body); // Cria o usuário, pegando o dado do req body
    return Response.json(createdUser);
  } 

