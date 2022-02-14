import { ParentEntity } from "./parentEntity.model";
export class UserModel extends ParentEntity{
    public nombre: string;
    public edad: number;
    public activo: boolean;
}