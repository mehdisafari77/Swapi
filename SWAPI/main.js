const button = document.querySelector('button');

function btnClicked(){
  axios.get("https://swapi.dev/api/planets/?search=Alderaan")
  .then(res => {
    residents = res.data.results[0].residents;

    for (let i = 0; i < residents.length; i++){
      axios.get(residents[i])
      .then(res => {
        console.log(residents[i]);
        let name = res.data.name

        let h2 = document.createElement("h3") //create h2
        var text = document.createTextNode(name); //create text

        h2.appendChild(text);  //add text to h2
        
        let div = document.createElement("div") //create div
        div.className = "name-container"
        div.appendChild(h2) //add h2 to div

        document.body.appendChild(div) //add div to body
        }     
      )
    }
  })
}

button.addEventListener("click", btnClicked);