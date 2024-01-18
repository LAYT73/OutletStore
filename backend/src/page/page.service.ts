import { Injectable } from '@nestjs/common';
import { Page } from './entities/page.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class PageService {
    constructor(
        @InjectRepository(Page)
        private readonly pageRepository: Repository<Page>,
    ) {};
    
    /**
     * @Set
     */
    async set(titleBlock: string, mainTitleBlock: string, descriptionBlock: string, titleInfo: string, descriptionInfo: string, buttonLink: string, buttonText: string, priceTitleFirst: string, priceCostsFirst: string, priceTitleSecond: string, priceCostsSecond: string ) {
        await this.pageRepository.clear();    
        const page = this.pageRepository.create({
            titleBlock, mainTitleBlock, descriptionBlock, titleInfo, descriptionInfo, buttonLink, buttonText, priceCostsFirst, priceCostsSecond, priceTitleFirst, priceTitleSecond
        })
        await this.pageRepository.save(page);
        return 0;
    }

    async get() {
        const res = await this.pageRepository.find();
        return res;
    }
}
