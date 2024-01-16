import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Auth } from './entities/auth.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
    constructor(
            @InjectRepository(Auth)
            private readonly userRepository: Repository<Auth>,
        ) {};
    
    /**
     * @Login
     */
    async login(login: string, password: string) {
        const checkUserTest = await this.userRepository.find({
            where: {
                login: "testingOutletStore134",
            }
        });

        const checkUser = await this.userRepository.find({
            where: {
                login: login,
            }
        });

        const hash = checkUser[0] ? checkUser[0].password : await bcrypt.hash("pSD132Ocx13zDGw1783", 10);
        if (!checkUser[0] && !checkUserTest[0]) {
            const user = this.userRepository.create({
                login: "testingOutletStore134",
                password: hash,
            })
            this.userRepository.save(user);
        }

        const isValid = await bcrypt.compare(password, hash);
        if (!isValid) {
            return ({
                code: 401,
                message: "Incorrect password or login!"
            })
        }

        if (!checkUser[0]) {
            return ({
                code: 401,
                message: "Incorrect password or login!"
            })
        }

        const secretHash = await bcrypt.hash("1iqd2huSD9812eak0sd", 10)

        return ({
            code: 201,
            message: "Valid",
            token: secretHash,
            login: login,
        })
    }

    async getUser() {
        const user = await this.userRepository.find();
        return user;
    }

    async update(newLogin: string, newPassword: string, oldLogin: string, oldPassword: string) {
        try {
            const user = await this.getUser();

            
            if (user[0].login != oldLogin) {
                return ({
                    code: 401,
                    message: "Incorrect password or login!"
                })
            }
            const isValid = await bcrypt.compare(oldPassword, user[0].password);
            if (!isValid) {
                return ({
                    code: 401,
                    message: "Incorrect password or login!"
                })
            }
            const hash = await bcrypt.hash(newPassword, 10);
            
            await this.userRepository
                .createQueryBuilder()
                .update(Auth)
                .set({ login: newLogin, password: hash })
                .where('login = :login', { login: user[0].login })
                .execute();
            return ({
                code: 201,
                message: "Данные успешно обновлены"
            })    
        } catch (error) {
            console.error(error);
            
            return ({
                code: 403,
                message: error,
            })
        }
    }

    
}
