import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Page {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({nullable: true})
    titleBlock: string;
    
    @Column({nullable: true})
    mainTitleBlock: string;
    
    @Column({nullable: true})
    descriptionBlock: string;
    
    @Column({nullable: true})
    titleInfo: string;
    
    @Column({nullable: true})
    descriptionInfo: string; 
    
    @Column({nullable: true})
    buttonLink: string; 
    
    @Column({nullable: true})
    buttonText: string; 
    
    @Column({nullable: true})
    priceTitleFirst: string; 
    
    @Column({nullable: true})
    priceCostsFirst: string; 
    
    @Column({nullable: true})
    priceTitleSecond: string; 
    
    @Column({nullable: true})
    priceCostsSecond: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}