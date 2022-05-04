var personalcareData=[
    {
        image_url:
        "https://cdn01.pharmeasy.in/dam/products_otc/207833/calcimax-forte-plus-strip-of-30-tablets-2-1643884067.jpg",
        name: "Calcimax Forte Plus Strip of 30 Tablets",
        strikedoffprice: 270.50,
        productid:1,
        price: 216,
        
      },
      {
        image_url:"https://cdn01.pharmeasy.in/dam/products_otc/T70695/supradyn-daily-multivitamin-tablets-15s-1-1641793954.jpg",
        name:"Supradyn Daily multivitamin Tablets 15s",
        strikedoffprice:50,
        price:45,
       },
       {
        image_url:"https://cdn01.pharmeasy.in/dam/products_otc/022290/becozym-c-forte-vitamin-b-complex-biotin-vitamin-c-strip-of-15-tablets-1-1643883399.jpg",
        name:"Becozym C Forte Strip Of 15 Tablets",
        strikedoffprice:25,
        price:23,
       },
       {
        image_url:"https://cdn01.pharmeasy.in/dam/products_otc/G59900/evecare-refreshing-intimate-wash-for-women-90ml-2-1646136010.jpg",
        name:"Evecare Refreshing Intimate Wash For Women- 90ml",
        strikedoffprice:165,
        price:165,
       },
       {
        image_url:"https://cdn01.pharmeasy.in/dam/products_otc/270382/scalpe-plus-anti-dandruff-shampoo-bottle-of-75-ml-1-1647245233.jpg",
        name:"Scalpe Plus Anti Dandruff Shampoo Bottle",
        strikedoffprice:260,
        price:195,
       },
       {
        image_url:"https://cdn01.pharmeasy.in/dam/products_otc/I35308/arachitol-nano-60k-sugar-free-bottle-of-5ml-solution-1-1651121454.jpg",
        name:"Arachitol Nano 60k Sugar Free Bottle",
        strikedoffprice:86,
        price:74,
       },
       {
        image_url:"https://cdn01.pharmeasy.in/dam/products_otc/A45109/khadi-natural-pure-rose-water-skin-toner-210-ml-2-1647248897.jpg",
        name:"Khadi Natural Pure Rose Water Skin Toner ",
        strikedoffprice:135,
        price:97,
       },
       {
        image_url:"https://cdn01.pharmeasy.in/dam/products_otc/022610/benadon-vitamin-b6-40mg-tablet-10s-2-1641398894.jpg?dim=320x320&dpr=1&q=100",
       
        name:"Manforce Epic Passion Extra Dotted Fruit Punch Flavour",
        strikedoffprice:240,
        price:168,
       },
       {
        image_url:"https://cdn01.pharmeasy.in/dam/products_otc/180461/venusia-max-intensive-moisturizing-cream-for-dry-to-very-dry-skin-repairs-smoothens-skin-150g-2-1645786243.jpg?dim=320x320&dpr=1&q=100",
        name:"Venusia Max Intensive Moisturizing Cream, 150g",
        strikedoffprice:504,
        price:372,
       },
       {
        image_url:"https://cdn01.pharmeasy.in/dam/products_otc/263100/venusia-max-intensive-moisturizing-lotion-repairs-dry-skin-provides-soft-smooth-skin-300gm-2-1645786251.jpg?dim=320x320&dpr=1&q=100",
        name:"Venusia Max Intensive Moisturizing Lotion,  300gm",
        strikedoffprice:601,
        price:445,
       },
       
       {
        image_url:"https://cdn01.pharmeasy.in/dam/products_otc/X85917/manforce-epic-passion-extra-dotted-fruit-punch-flavour-premium-condoms-with-disposable-pouch-10s-2-1651309988.jpg",
        name:"Benadon Vitamin B6 40mg Tablet 10'S",
        strikedoffprice:25,
        price:24,
       },
       {
        image_url:"https://cdn01.pharmeasy.in/dam/products_otc/P26899/ultra-d3-drops-vitamin-d3-for-infants-vitamin-drops-bottle-of-15-ml-2-1641788612.jpg",
        name:"Ultra D3 Drops - Vitamin D3 For Infants Vitamin Drops Bottle Of 15 Ml",
        strikedoffprice:37,
        price:30,
       },
    ]
    
  localStorage.setItem("product",JSON.stringify(personalcareData));
    var cardLData=JSON.parse(localStorage.getItem("productcard"))||[]
    var count=JSON.parse(localStorage.getItem("countervalue"))||0;
    var price1=JSON.parse(localStorage.getItem("priceCard"))||[]

    displayData(personalcareData);
function handlePrice(){
  var selected=document.querySelector("#SortByPrice").value;
  if(selected=="LTH"){
    personalcareData.sort(function(a,b){
      return a.price-b.price;
    })
    console.log(personalcareData);
    displayData(personalcareData)
  }
  if(selected=="HTL"){
    personalcareData.sort(function(a,b){
      return b.price-a.price;
    })
    console.log(personalcareData);
    displayData(personalcareData)
  }
}



    function displayData(data){
      document.querySelector("#container").innerHTML="";
    data.forEach(function(ele){
      

    var box=document.createElement("div");
    var box2=document.createElement("div");
    var imgitem=document.createElement("img");
    imgitem.setAttribute("src",ele.image_url)
  
    var itename=document.createElement("h3");
    itename.innerText=ele.name;

    var itemprice=document.createElement("p");
    itemprice.innerText="MRP-"+" "+ele.price;

    var itemdec=document.createElement("p");
    itemdec.innerText=ele.strikedoffprice;

    var button=document.createElement("button");
    // class added to remove color from search bar in nav
    button.setAttribute("class","btn")
    button.innerText="Add to Cart";
    
    button.addEventListener("click",function(){
      addCardFunction(ele);
    })
    box2.append(imgitem)
    box.append(box2,itename,itemprice,button);
    document.querySelector("#container").append(box);
    })

    function addCardFunction(ele){
      
      //console.log(cardArr)
      var dontreprat=cardLData.filter(function(el){
       return(el.name==ele.name)
      })
      console.log(dontreprat)
      
     if(dontreprat.length>0){
       alert("Product already added")
     }
     else{
        
      cardLData.push(ele);

      var total=cardLData.reduce(function(acc,ele){
        return acc+Number(ele.price)
    },0)
    count++;
    localStorage.setItem("priceCard",JSON.stringify(total))
    localStorage.setItem("countervalue",JSON.stringify(count))
      localStorage.setItem("productcard",JSON.stringify(cardLData));
      alert("product added Sucessfully")

     }
     
  }
}