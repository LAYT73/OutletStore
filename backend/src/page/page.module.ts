import { Module } from '@nestjs/common';
import { PageController } from './page.controller';
import { PageService } from './page.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthService } from 'src/auth/auth.service';
import { AuthModule } from 'src/auth/auth.module';

@Module({
    imports: [AuthModule],
    controllers: [PageController],
    providers: [PageService],
})
export class PageModule {}