import { IsEmpty } from "class-validator";
import { User } from "../../auth/schemas/user.schema";
import { Category } from "../schemas/hotel.schema";



export class CreateBookingDto{

    readonly name: string;
    readonly description: string;
    readonly rooms: number;
    readonly price: number;
    readonly category: Category;
    @IsEmpty({message: "You cannot pass user id"})
    readonly user : User
    

}