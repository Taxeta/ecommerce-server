import { type Request } from "express";

export interface UserStructure {
  _id: string;
  displayName: string;
  authId: string;
  email: string;
  password?: string;
  name?: string;
  surname?: string;
}

export interface RegisterRequest
  extends Request<
    Record<string, unknown>,
    Record<string, unknown>,
    UserStructure
  > {}
