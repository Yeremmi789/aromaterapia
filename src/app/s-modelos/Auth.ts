

export class Auth{
    // Aqui se toma encuenta el nombre de los campos que están
    // en la base de datos
    id!:string;
    name!:string;
    email!:string;
    password!:string;
    // En estas clases-modelos, se ponen todos aquellos campos que se van a utilizar, en este caso solo utilizaré estos 4 campos
};


export interface Token{
    ok:boolean;
    token?:string;
    mssg?:string;
    id?:string;
    name?:string;
    email?:string;
    role?:string;
}



export interface Usuarios{
    id?:string;
    name?:string;
    email?:string;
    password?:string;
    // Quitar si la aplicación no funciona
    role?:string;
    // Quitar si la aplicación no funciona
}