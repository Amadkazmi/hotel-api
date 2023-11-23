import { Body, Controller, Delete, Get, Param, Post, Put, Req, UseGuards } from '@nestjs/common';
import { HotelService } from './hotel.service';
import { Hotel } from './schemas/hotel.schema';
import { CreateBookingDto } from './dto/create-booking.dto';
import { UpdateBookingDto } from './dto/update-booking.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('hotel')
export class HotelController {
    hotelModel: any;

    constructor(private hotelService: HotelService){}


@Get()
async getAllHotels(): Promise<Hotel[]> {
    return this.hotelService.findAll();
}
@Post('/api/bookings')
@UseGuards(AuthGuard())
async createHotel(
    @Body()
    hotel: CreateBookingDto,
    @Req() req,
): Promise<Hotel> {
    return this.hotelService.create( hotel, req.user);
}
@Get(':id')
async getHotel(
    @Param('id') 
    id: string
): Promise<Hotel> {
    return this.hotelService.findById(id);
}
@Put(':id')
async updateHotel(
    @Param('id') 
    id: string,
    @Body()
    hotel: UpdateBookingDto,
): Promise<Hotel> {
    return this.hotelService.updateById(id ,hotel);
}

@Delete(':id')
async deleteHotel(
    @Param('id') 
    id: string
): Promise<Hotel> {
    return this.hotelService.deleteById(id);
}

}
