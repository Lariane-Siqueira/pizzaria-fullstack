import { Schema, model, models } from "mongoose";
import bcrypt from "bcrypt";

// Modelo de usuário, descrição de como o usuário cosntará dentro da bd

const UserSchema = new Schema(
  {
    email: { type: String, required: true, unique: true },
    password: {
      type: String,
      required: true,
      validate: (pass) => {
        //pass = valor
        if (!pass?.length || pass.length < 5) {
          // se está vazio OU tem menos que 5 caracteres, aparece a mensagem descrita abaixo
          new Error("a senha deve ter pelo menos 5 caracteres");
        }
      },
    },
  },
  { timestamps: true } // Adiciona automaticamento os campos createdAt e updatedAt aos documentos criados ou alterados através do schema. São tidos como Date e são usados para rastrar a criação ou alteração de um documento
);

UserSchema.post('validate', function (user){ // criptogtafia da senha
  const notHashedPass = user.password;
  const salt = bcrypt.genSaltSync(10);
  user.password = bcrypt.hashSync(notHashedPass, salt)
})

export const User = models?.User || model("User", UserSchema); // Se o modelo de usuário não exisit (caso seja null, undefined ou não tiver uma propriedade User) cria um novo modelo usuário usando a função model com UserSchema e exporta esse modelo como User
