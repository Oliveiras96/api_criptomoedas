
 //Create a variable to hold our apikey
let apiKey = {
    key: 'API_KEY' //improvment: use environment variable
}

//What endpoint we'll be fetching
let endPoint = 'cryptocurrency/' //cryptocurrent list and volume data
//Each endpoint path return differents types of data:
let endPointPath = 'map' //Utility endpoints to get a map of resources to CoinMarketCap IDs.

let url_path = 'https://pro-api.coinmarketcap.com/v1/' + 
                endPoint + endPointPath + '?CMC_PRO_API_KEY=' + apiKey.key

//Make an HTTP Get request using fetch:
let response = fetch(url_path)
            .then((response) => {
                //In case of error (400, 500) throw an error:
                if(!response.ok) throw new Error('Erro na requisição: ' + response.status)
                //return the response in form of JSON
                return response.json()
            })
            .then((response) => {

                console.log(response)
                for(i = 0; i < 10; i++) {
                    var content = `
                    <div class="media">
                        <div class="media-body">
                            <h5 class="coin-name"> ${response.data[i].name} </h5>
                            <p class="coin-symbol"> (${response.data[i].symbol}) </p>
                        </div>
                    </div>`

                    document.getElementById('coins').innerHTML += content
                }   
            
            })//log the response on console
            .catch((error) => {console.error(error)})


