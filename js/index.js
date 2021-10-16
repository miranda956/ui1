function getProducts(){
    //GET TOP PRODUCTS
    fetch('https://makiti.depiktstudio.com/top-products.php').then(function (response) {
        return response.json();
    }).then(function (data) {
	    //CREATE PRODUCTS
        console.log(data)
        let products = document.getElementById('top-products')
        let elements = ""
        let row
        for(let i=0; i<data.length; i++)
        {
            let product = data[i]

            //SINGLE PRODUCT
            let element = `
                <div class="col-md-3 col-6">
                    <div class="product">
                        <div class="product-image" style="background: url('assets/${product.image}'); background-size: cover;">
                            <button class="product-wish"><img src="assets/bi_heart.png"></button>
                            <div class="product-badge">${product.location}</div>
                        </div>
                        <div class="product-description">
                            <h3 class="price">${product.price}</h3>
                            <div class="product-name">${product.name}</div>
                            <div class="desc">${product.posted}</div>
                        </div>
                        <div class="product-actions">
                            <button class="call-btn"><img src="assets/bx_bxs-phone-1.png">Appeler</button>
                            <button class="send-btn"><img src="assets/carbon_send-alt-filled.png">Ecrire</button>
                        </div>
                    </div>
                </div>
            `
            elements += element

            //APPEND ELEMENTS TO ROW AND CREATE NEW ROW IF 4 COLUMNS REACHED OR IF LOOP IS STARTING
            let e = i+1
            if(e%4 == 0){
                row = document.createElement("div")
                row.className = "row";
                row.innerHTML = elements
                products.appendChild(row)
                //CLEAR ELEMENTS
                elements = ""
            }
        }
    }).catch(function (err) {
	    console.warn('Error: ', err);
    });

    //GET RECENT PRODUCTS
    fetch('https://makiti.depiktstudio.com/recent-products.php').then(function (response) {
        return response.json();
    }).then(function (data) {
	    //CREATE PRODUCTS
        console.log(data)
        let products = document.getElementById('recent-products')
        let elements = ""
        let row
        for(let i=0; i<data.length; i++)
        {
            let product = data[i]

            //SINGLE PRODUCT
            let element = `
                <div class="col-md-3 col-6">
                    <div class="product">
                        <div class="product-image" style="background: url('assets/${product.image}'); background-size: cover;">
                            <button class="product-wish"><img src="assets/bi_heart.png"></button>
                            <div class="product-badge">${product.location}</div>
                        </div>
                        <div class="product-description">
                            <h3 class="price">${product.price}</h3>
                            <div class="product-name">${product.name}</div>
                            <div class="desc">${product.posted}</div>
                        </div>
                        <div class="product-actions">
                            <button class="call-btn"><img src="assets/bx_bxs-phone-1.png">Appeler</button>
                            <button class="send-btn"><img src="assets/carbon_send-alt-filled.png">Ecrire</button>
                        </div>
                    </div>
                </div>
            `
            elements += element

            //APPEND ELEMENTS TO ROW AND CREATE NEW ROW IF 4 COLUMNS REACHED OR IF LOOP IS STARTING
            let e = i+1
            if(e%4 == 0){
                row = document.createElement("div")
                row.className = "row";
                row.innerHTML = elements
                products.appendChild(row)
                //CLEAR ELEMENTS
                elements = ""
            }
        }
    }).catch(function (err) {
	    console.warn('Error: ', err);
    });
}