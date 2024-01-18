import { Module } from '@nestjs/common';
import { PageController } from './page.controller';
import { PageService } from './page.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthService } from 'src/auth/auth.service';
import { AuthModule } from 'src/auth/auth.module';
import { Page } from './entities/page.entity';

@Module({
    imports: [
        TypeOrmModule.forFeature([Page]),
    ],
    controllers: [PageController],
    providers: [PageService],
})
export class PageModule {}