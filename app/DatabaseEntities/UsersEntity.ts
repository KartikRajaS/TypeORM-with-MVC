import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({name : "tblUsers"})
export class UsersEntity {
    
        @PrimaryGeneratedColumn({
            type:"integer", 
            name:"UserID"
            })
        UserID:number;
            
    
        @Column("character varying",{ 
            nullable:true,
            length:50,
            name:"FirstName"
            })
        FirstName:string | null;
            
    
        @Column("character varying",{ 
            nullable:true,
            length:50,
            name:"LastName"
            })
        LastName:string | null;
            
    
        @Column("character varying",{ 
            nullable:true,
            length:50,
            name:"City"
            })
        City:string | null;
            
    
        @Column("character varying",{ 
            nullable:true,
            length:50,
            name:"State"
            })
        State:string | null;
            
    
        @Column("character varying",{ 
            nullable:true,
            length:10,
            name:"Zip"
            })
        Zip:string | null;
            
    
        @Column("integer",{ 
            nullable:true,
            name:"RoleID"
            })
        RoleID:number | null;
            
    
        @Column("integer",{ 
            nullable:true,
            name:"OrganizationID"
            })
        OrganizationID:number | null;
            
    
        @Column("character varying",{ 
            nullable:true,
            length:60,
            name:"UserName"
            })
        UserName:string | null;
            
    
        @Column("character varying",{ 
            nullable:true,
            length:10,
            name:"Gender"
            })
        Gender:string | null;
            
    
        @Column("character varying",{ 
            nullable:true,
            length:15,
            name:"Phonenumber"
            })
        Phonenumber:string | null;
            
    
        @Column("character varying",{ 
            nullable:true,
            length:150,
            name:"Avatar"
            })
        Avatar:string | null;
            
    
        @Column("character varying",{ 
            nullable:true,
            length:100,
            name:"Address1"
            })
        Address1:string | null;
            
    
        @Column("character varying",{ 
            nullable:true,
            length:100,
            name:"Address2"
            })
        Address2:string | null;
            
    
        @Column("character varying",{ 
            nullable:true,
            length:50,
            name:"Country"
            })
        Country:string | null;
            
    
        @Column("character varying",{ 
            nullable:true,
            length:80,
            name:"EmailID"
            })
        EmailID:string | null;
            
    
        @Column("character varying",{ 
            nullable:true,
            length:40,
            name:"Password"
            })
        Password:string | null;
            
    
        @Column("integer",{ 
            nullable:true,
            name:"IsActive"
            })
        IsActive:number | null;
            
    }
  