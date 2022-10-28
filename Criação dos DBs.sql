
//CRIAÇÃO DE TABELAS:

drop TABLE transactions;
drop TABLE wallets;
drop TABLE users;
drop TABLE categories;

create table users (
	"id" serial unique,
	"singularUser" varchar(512) primary key not null,
	"cpf" varchar(512) not null unique,
	"email"	varchar(512) not null unique,
	"pass" varchar(512) not null unique
	
	
);

create table wallets (
	"id" serial unique,
	"singularWallet" varchar(512) not null,
	"singularUser" varchar(512) not null,		
	FOREIGN KEY ("singularUser") REFERENCES "users" ("singularUser"),
	primary key ("singularWallet", "singularUser")
	
	
);

create table categories (
	"id" serial unique,
	"singularCategory" varchar(512) not null,
	"singularUser" varchar(512) not null,
	
	primary key ("singularCategory", "singularUser"),
	
	FOREIGN KEY ("singularUser") REFERENCES "users" ("singularUser")
);

create table subCategories (
	"id" serial unique,
	"singularSubCategory" varchar(512) not null,
	"singularUser" varchar(512) not null,
	"singularCategory" varchar(512) not null,
	
	
	primary key ("singularSubCategory", "singularUser"),

	FOREIGN KEY ("singularUser") REFERENCES "users" ("singularUser"),
	FOREIGN KEY ("singularCategory", "singularUser") REFERENCES "categories" ("singularCategory", "singularUser")

	
);

create table transactions (
	"id" serial primary key,
	"singularUser" varchar(512) not null,
	
	"transactionWallet" varchar(512) not null, 
	"transactionCategory" varchar(512) not null,
	"transactionSubCategory" varchar(512) not null,
	"transactionValue" money not null,
	"transactionType" varchar(30) not null,
	"transactionDate" date not null,
	"transactionName" varchar(511) not null,
	"transactionsObs" varchar(512),
		
	
	FOREIGN KEY ("transactionWallet", "singularUser") REFERENCES wallets ("singularWallet", "singularUser"),
	FOREIGN KEY ("transactionCategory", "singularUser") REFERENCES categories ("singularCategory", "singularUser"),
	FOREIGN KEY ("transactionSubCategory", "singularUser") REFERENCES subCategories ("singularSubCategory", "singularUser")
);







//MÉTODOS DE ADIÇÃO:

	"id" serial unique,
	"singularUser" varchar(512) primary key not null,
	"cpf" varchar(512) not null unique,
	"email"	varchar(512) not null unique,
	"pass" varchar(512) not null unique

insert into "users"("singularUser", "cpf", "email", "pass") values ('Roney', '07399617996', 'roney@gmail.com', '123');

insert into "categories"("singularCategory", "singularUser") values ( 'compras', 'Roney');

insert into "subcategories"("singularSubCategory","singularCategory", "singularUser") values ('comprinhas pequenas','465', 'Roney');
//teste

insert into "wallets"("singularWallet", "singularUser") values ('banco Itau', 'Roney');

//transactions
insert into "transactions"("transactionWallet", "singularUser", "transactionCategory", "transactionValue",
						  "transactionType",
						  "transactionDate",
						  "transactionName",
						  "transactionsObs"
						  ) values ('banco Itau', 
									'Roney', 
									'compras', 
									-2000, 
									'despesa', 
									'1997-10-12',
									'Nome da despesa', 
									'Observações da despesa');


//MÉTODOS DE BUSCA:
//MÉTODOS DE EDIÇÃO:
//MÉTODOS DE EXCLUSÃO: