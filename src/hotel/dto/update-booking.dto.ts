import { IsEmpty } from "class-validator";
import { Category } from "../schemas/hotel.schema";
import { User } from "../../auth/schemas/user.schema";



export class UpdateBookingDto{

    readonly name: string;
    readonly description: string;
    readonly rooms: number;
    readonly price: number;
    readonly category: Category;
    @IsEmpty({message: "You cannot pass user id"})
    readonly user : User

}