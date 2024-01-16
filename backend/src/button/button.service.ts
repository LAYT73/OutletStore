import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Button } from './entities/button.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class ButtonService {
    constructor(
            @InjectRepository(Button)
            private readonly buttonRepository: Repository<Button>,
        ) {};
    
        async getButtons(): Promise<Button[]> {
            return await this.buttonRepository.find();
        }

        async updateButtons(buttons) {
            await this.buttonRepository.clear();
            buttons.forEach(async (el,i) => {
                const button = this.buttonRepository.create({
                    link: el.link,
                    title: el.title,
                })
                await this.buttonRepository.save(button);
            });
            
            return 0;
        }
    }
