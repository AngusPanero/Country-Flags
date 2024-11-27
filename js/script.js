divCountries = document.getElementById("countries-list")

const traerBanderas = async () => {
    try {
        const response = await fetch ("https://restcountries.com/v3/all");
        if (!response.ok){
            console.error("Se ha producido un Error", response.status);
            return
        }
        const objetosFiltrados = [];
        const data = await response.json();

        for (let i = 0; i < data.length; i++){
        const objFilter = {
            bandera: data[i].flags,
            nombre: data[i].name.common,
            capital: data[i].capital,
            poblacion: data[i].population,
            carretera: data[i].car.side,
            };
            objetosFiltrados.push(objFilter)
        }
        console.log(objetosFiltrados);
    } catch (error){
        console.error("Error en la Solicitud", error)
    };
};
traerBanderas()
