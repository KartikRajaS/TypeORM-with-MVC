import "reflect-metadata";
import { ConnectionOptions } from "typeorm";
import {UsersEntity} from "../DatabaseEntities/UsersEntity";

export let dbOptions: ConnectionOptions = {
     type: "Database You Use",
     host: "Your Host",
     port: "Port of Database Connected",
     username: "UserName",
     password: "Password",
     database: "DatabaseName",
     entities: ["List Of Entities"],
     synchronize: false, //Whether you want to sync your application entity with Database or not. This mean you can change your DB structure id it is true.
}