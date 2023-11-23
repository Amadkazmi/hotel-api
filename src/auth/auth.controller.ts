import { Body, Controller, Post , Get } from '@nestjs/common';
import { SignUpDto } from './dto/signup.dto';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';

@Controller('auth')
export class AuthController {

 constructor( private authService : AuthService){}


    @Post('/signup')
    
    signup(@Body() signupDto : SignUpDto): Promise<{token: string}> {
        return this.authService.signUp(signupDto);
    }

    @Get('/login')
    
    login(@Body() loginDto: LoginDto): Promise<{token: string}> {
        return this.authService.login(loginDto);

    }

 }
