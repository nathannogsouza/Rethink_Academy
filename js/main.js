
const pessoas = [

    { name: "Fabiana Araújo", age: 33 },
    
    { name: "Gabriel Gomes", age: 25 },
    
    { name: "Fernando Henrique", age: 17 },
    
    { name: "Ana Luiza", age: 2 }, 
    
    { name: "Geralda do Nascimento", age: 93 },
    
    { name: "Miguel Souza", age: 70 },
    
    { name: "Antonio Miguel", age: 69 }
];
console.log(pessoas);

function getData(query){
    for (let index = 0; index < pessoas.length; index++){
        if (pessoas[index].name == query){
            return pessoas[index]   
        }
    }
    return null;
}

console.log(getData('Ana Luiza'));

function getNome(){
    list = [];
    for (let index = 0; index < pessoas.length; index++){
        
        list.push(pessoas[index].name.split(' ')[0]);   
    }
    return list;
}

console.log(getNome())

function getNextId(index){
    for (let j = 0; j < pessoas.length; j++){
        if(pessoas[j].id == index){
            return getNextId(++index);
        }
    }
    return index;
}

function setId(){
    for (let index = 0; index < pessoas.length; index++){
        pessoas[index].id = getNextId(index)+1;
    }

console.log(pessoas);
}

setId();

function getHab(){
    list = [];
    for (let index = 0; index < pessoas.length; index++){
        if(pessoas[index].age >= 18){
            list.push(pessoas[index].name);
        }   
    }
    return list;
}

console.log(getHab());

function media(){
    mediaIdade = 0;
    for (let index = 0; index < pessoas.length; index++){
        mediaIdade += pessoas[index].age;   
    }
    mediaIdade = mediaIdade/pessoas.length;

    return mediaIdade;
}

console.log(media());

