let customers = [
    {
        id: "C001",
        name: "nimal",
        address: "panadura",
        age: 12
    }
];
loadItems();

async function loadItems() {
    
    let res = await fetch("https://restcountries.com/v3.1/all");
    let items = await res.json();
    let body = "";
    items.forEach(element => {
        console.log(element);
        body+=`
            <div class="col">
                <div class="card shadow-sm">
                  <img src=${element.flags.png} alt="">
                  <div class="card-body">
                  <h2>${element.name.common}</h2>
                    <p class="card-text">Borders : ${element.borders}</p>
                    <div class="d-flex justify-content-between align-items-center">
                      <div class="btn-group">
                        <p class="p-4 fw-bold">${element.continents}</p>
                      </div>
                      <small class="text-body-secondary">${element.capital}</small>
                    </div>
                  </div>
                </div>
              </div>
        `;

        
        
    });

    console.log(body);

    document.getElementById("row").innerHTML=body;
    
}

function searchCountry(){
  console.log("Search!!");
  let txtSearch = document.getElementById("txtSearch").value;

  fetch(`https://restcountries.com/v3.1/name/${txtSearch}`)
  .then(res=>res.json())
  .then(data=>{
      console.log(data);
      let body="";
      data.forEach(element => {
          body+=`
          
          <div class="col">
                <div class="card shadow-sm">
                  <img src=${element.flags.png} alt="">
                  <div class="card-body">
                  <h2>${element.name.common}</h2>
                    <p class="card-text">Borders : ${element.borders}</p>
                    <div class="d-flex justify-content-between align-items-center">
                      <div class="btn-group">
                        <p class="p-4 fw-bold">${element.continents}</p>
                      </div>
                      <small class="text-body-secondary">${element.capital}</small>
                    </div>
                  </div>
                </div>
              </div>
          
          `
      });

      document.getElementById("row").innerHTML=body;
      
  })
  
}
