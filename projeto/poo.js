class User {
    constructor(username, email,age,universidade,curso,senha, pais,area,celular,cpf,iduser) {
        this.username = username;
        this.email = email;
        this.age = age;
        this.universidade=universidade;
        this.curso=curso;
        this.senha=senha;
        this.pais=pais;
        this.area=area;
        this.celular=celular;
        this.cpf=cpf;
        this.iduser=iduser;
        
    }
}

class imovel {
    constructor(idimovelendereco,cep,aluguel_preco,tipo,area,aceitapet,aceitacasal,numquartos,numbanheiros,mobiliado,condominio,proxOnibus,proxCampus,vagaEstacionamento){
        this.idimovel=idimovel;
        this.endereco=endereco;  
        this.cep=cep;
        this.aluguel_preco=aluguel_preco;
        this.tipo=tipo;
        this.area=area;
        this.aceitapet=aceitapet;
        this.aceitacasal=aceitacasal;
        this.numquartos=numquartos;
        this.numbanheiros=numbanheiros;
        this.mobiliado=mobiliado;
        this.condominio=condominio;
        this.proxOnibus=proxOnibus;
        this.proxCampus=proxCampus;
        this.vagaEstacionamento=vagaEstacionamento;
    }
    
}

class contrato {
    constructor(coduser,codimovel){
        this.coduser=coduser;
        this.codimovel=codimovel;
    }

}