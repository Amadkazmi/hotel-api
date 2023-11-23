import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { HotelController } from './hotel.controller';
import { HotelService } from './hotel.service';
import { HotelSchema } from './schemas/hotel.schema';
import { AuthModule } from 'src/auth/auth.module';

@Module({
 
 
imports : [
    AuthModule,
    MongooseModule.forFeature([{ name: 'Hotel', schema: HotelSchema }])],
controllers : [HotelController],
providers: [HotelService],

})
export class HotelModule {}
