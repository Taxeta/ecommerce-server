import { NextFunction, Response } from "express";
import bcryptjs from "bcryptjs";
import { RegisterRequest } from "../../types";
import CustomError from "../../customError/customError.js";
import { supabase } from "../../supabase/supabase.js";

/* Este es un controlador que lo que hace es crear una tabla con los datos de usuarios que aparecen abajo no obstante vamos a utilizar el método preestablecido
que nos proporciona supabase para la creación de usuarios desde el FRONTEND.*/

export async function createNewUser(
  req: RegisterRequest,
  res: Response,
  next: NextFunction,
) {
  try {
    const { name, surname, email, password, authId } = req.body;
    const salt = await bcryptjs.genSalt();
    const hashPassWord = await bcryptjs.hash(password!, salt);

    /*El motivo por el que se está desestructurando "data" es porque supabase almacena la información en base supabase.data.user, es decir
    user es una propiedad de data para supabase */

    const { data, error } = await supabase.from("users").insert({
      name,
      surname,
      email,
      password: hashPassWord,
      authId,
      displayName: name,
    });
    if (error) {
      throw error;
    }
    res.status(201).json({ message: "User created", user: data });
  } catch (error: unknown) {
    const customError = new CustomError(
      "User can't be created",
      409,
      (error as Error).message,
    );
    next(customError);
  }
}
