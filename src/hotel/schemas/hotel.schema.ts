import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose from "mongoose";
import { User } from "src/auth/schemas/user.schema";


export enum Category {
    SINGLEROOM = "singleroom",
    DOUBLEROOM = "doublerom",
    SUITE = "suite",
    DELUXEROOM = "deluxeroom" 
}@Schema({
 timestamps : true

})
export class Hotel{
    @Prop()
    name: String;
    
    @Prop()
    description: String;
    
    @Prop()
    rooms: Number;

    @Prop()
    price: Number;
    
    @Prop()
    category : Category
    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
    user : User;
}
export const HotelSchema = SchemaFactory.createForClass(Hotel)
