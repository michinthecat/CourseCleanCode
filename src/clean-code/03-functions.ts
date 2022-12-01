(() => {

   
    function getMovieById( movieId: string ) {
        console.log({ movieId });
    }

   
    function getActorsInformationByMovie( id: string ) {
        console.log({ id });
    }
 
  
    function getActorBioById( ActorId: string ) {
        console.log({ ActorId });
    }
    

    interface Movie
    {       
        cast: string[] ;
        description: string;
        rating: number;
        title: string;
        
    }


    // Aca se tipa el parametro de la funcion a Movie para conservar el tipo de dato
    function createMovie( {title, description, rating, cast}: Movie ) : boolean {
        console.log({ title, description, rating, cast });
        return true;
    }

    // Crea un nuevo actor
    function createActor( fullName: string, birthdate: Date ): boolean {
        
        // tarea asincrona para verificar nombre
        // ..
        // ..
        if ( fullName === 'fernando' ) return false;

        console.log('Crear actor');
        return true;        

    }
 
    //Continuacion

    interface status {
        isDead: boolean;
        isSeparated: boolean;
        isRetired: boolean;
    }

    const getPayAmount = ({isDead, isSeparated, isRetired}: status): number => {
       

        if ( isDead ) {
            return 1500;
        } 

        if ( isSeparated ) {
            return 2500;
            } 
        
            //Condicional ternario
        return (isRetired) ? 3000 : 4000;

                
    }
        
        
        
    




})();
