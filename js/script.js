divCountries = document.getElementById("countries-list");

let objetosFiltrados = [];

const traerBanderas = async () => {
    try {
        const response = await fetch ("https://restcountries.com/v3/all");
        if (!response.ok){
            console.error("Se ha producido un Error", response.status);
            return;
        }
        objetosFiltrados = [];
        const data = await response.json();

        for (let i = 0; i < data.length; i++){
            const objFilter = {
                bandera: data[i].flags[0],
                nombre: data[i].name.common,
                capital: data[i].capital,
                poblacion: data[i].population,
                carretera: data[i].car.side,
            };
            objetosFiltrados.push(objFilter);
        }
        objetosFiltrados.sort((a, b) => a.nombre.localeCompare(b.nombre));
        console.log(objetosFiltrados);
        template();
    } catch (error){
        console.error("Error en la Solicitud", error);
    }
};

const template = () => {
    divCountries.innerHTML = "";
    objetosFiltrados.forEach(obj =>{
        divCountries.innerHTML += `
        <div>
            <h3>${obj.nombre}</h3>
            <img src="${obj.bandera}" alt="Bandera de ${obj.nombre}">
            <p>Capital: ${obj.capital}</p>
            <p>Población: ${obj.poblacion}</p>
            <p>Conducen por la: ${obj.carretera}</p>
        </div>
        `;
    });
};

traerBanderas();