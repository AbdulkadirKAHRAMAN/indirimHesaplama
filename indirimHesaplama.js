let products = [
    {
      id: 1,
      productName:"kazak",
      productPrice: [400]
    },
    {
      id: 2,
      productName:"Keten pantolon",
      productPrice: [850]
    },
    {
      id: 3,
      productName:"Gömlek",
      productPrice: [500]
    }
  ]
  let discountRate= Number(prompt("İndirim oranı giriniz"));
  for (const product of products) {
    console.log(product.productName);
  
  let prices=0;
    for (let index = 0; index < product.productPrice.length; index++) {
      const price = Number(product.productPrice[index]);
     prices+=price;
     
    }
    
     let percentage= (prices*discountRate)/100
     let discountedPrice=prices-percentage
      console.log(discountedPrice);
    
   
    
  }