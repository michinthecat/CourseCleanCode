(()=>{

    type Gender = 'M' | 'F';

    class Person {
    
       
    
    
    //Creacion de un constructor y sus variables para la clase Person, de la forma TypeScript
    constructor( 
        public name: string, 
        public gender: Gender, 
        public birthdate: Date)
    {
       
    }


    






}

const newPerson = new Person('Fernando', 'M', new Date(1990, 10, 10));
console.log(newPerson);




})();