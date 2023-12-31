import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from './schemas/user.schema';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { JWTStrategy } from './jwt.strategy';

@Module({
imports: [ 
  PassportModule.register({ defaultStrategy: 'jwt'}),
  JwtModule.register({

    secret: 'comwell', // Replace with your actual secret key
    signOptions: { expiresIn: '1d' }, // Set your desired expiration time

  }),
  MongooseModule.forFeature([{ name: 'User', schema: UserSchema}])

],
  controllers: [AuthController],
  providers: [AuthService , JWTStrategy],
  exports: [JWTStrategy , PassportModule]
})
export class AuthModule {}
