
/* nombre peso statura y algo q no exista (propetario.nombre) */
function Pokemon(nombre, peso, estatura, propetario){
    this.nombre = nombre;
    this.peso = peso;
    this.estatura = estatura;
    this.propetario = propetario;
}

const fetchingPoke = (pokemon)=>{
    let url = 'https://pokeapi.co/api/v2/pokemon/'+pokemon
    fetch(url)
        .then((response)=> response.json())
        .then((data)=>{
            let {name, height, weight, owner} = data
            let pokeSave = new Pokemon(name, weight, height, owner?.name.otro) 
            console.table(pokeSave)
        })
}

fetchingPoke('charizard')
