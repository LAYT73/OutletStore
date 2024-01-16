import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { PageModule } from './page/page.module';
import { ButtonModule } from './button/button.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '030405',
      database: 'OutletStore',
      entities: [__dirname + '/**/*.entity{.js, .ts}'],
      synchronize: true,
    }),
    AuthModule,
    PageModule,
    ButtonModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
