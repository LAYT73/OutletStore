import { Module } from '@nestjs/common';
import { ButtonController } from './button.controller';
import { ButtonService } from './button.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Button } from './entities/button.entity';
import { AuthModule } from 'src/auth/auth.module';

@Module({
    imports: [
        TypeOrmModule.forFeature([Button]),
        AuthModule,
    ],
    controllers: [ButtonController],
    providers: [ButtonService],
})
export class ButtonModule {}