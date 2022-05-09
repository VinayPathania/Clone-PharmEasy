var offerData = Offers = [
    {
        img:"https://cdn01.pharmeasy.in/dam/products_otc/349994/nicotex-2-mg-mint-gums-plus-sugar-free-tin-of-25helps-quit-smoking-2-1643882776.jpg?dim=224x0&dpr=1&q=100",
        name:"Nicotex 2mg",
        disPrice: "226",
        price: "185.32",
        offer: "18%",
    },
    {
        img:"https://cdn01.pharmeasy.in/dam/products_otc/255390/digene-gel-acidity-gas-relief-200ml-mint-flavour-1-1651304380.jpg?dim=224x0&dpr=1&q=100",
        name:"Digene Gel Acidity & Gas Relief - 200ml Mint Flavour",
        disPrice: "139.15",
        price: "111.32",
        offer: "20%",
    },
    {
        img:"https://cdn01.pharmeasy.in/dam/products_otc/K68091/mothersparshbaby-laundry-liquid-detergentrefill-pack-500ml-2-1642059457.jpg?dim=224x0&dpr=1&q=100",
        name:"Mother Sparsh Baby laundry Liquid",
        disPrice: "349",
        price: "244.3",
        offer: "30%",
    },
    {
        img:"https://cdn01.pharmeasy.in/dam/products_otc/P22638/hi-life-multi-layered-kn95-mask-single-pack-2-1641794486.jpg?dim=224x0&dpr=1&q=100",
        name:"Hi life Multi Layered kn95",
        disPrice: "199",
        price:" 149.25",
        offer: "25%",
    },
    {
        img:"https://cdn01.pharmeasy.in/dam/products_otc/264335/himalaya-baby-lotion-bottle-of-400-ml-2-1641787631.jpg?dim=224x0&dpr=1&q=100",
        name:"Himalaya baby Body Lotion",
        disPrice: "300",
        price: "231",
        offer: "23%",
    },
    // {
    //     img:"https://cdn01.pharmeasy.in/dam/products_otc/J51815/liveasy-wellness-apple-cider-vinegar-with-mother-improves-metabolism-500ml-bottle-2-1643880237.jpg?dim=224x0&dpr=1&q=100",
    //     name:"LiveEasy Wellness Apple cider",
    //     disPrice: "649",
    //     price: "227.15",
    //     offer: "65%",
    // },
    // {
    //     img:"https://cdn01.pharmeasy.in/dam/products_otc/I07006/vicks-vaporub-110ml-relief-from-cold-cough-headache-and-body-pain-2-1643882373.jpg?dim=224x0&dpr=1&q=100",
    //     name:"Vicks Vaporab 110ml",
    //     disPrice: "265",
    //     price: "230.55",
    //     offer: "13%",
    // },
    // {
    //     img:"https://cdn01.pharmeasy.in/dam/products_otc/124360/nivea-creme-moisturizer-30-ml-2-1641398873.jpg?dim=224x0&dpr=1&q=100",
    //     name:"Nivea Cream Moisturizer",
    //     disPrice: "60",
    //     price: "57",
    //     offer: "13%,"
    // },
    // {
    //     img:"https://cdn01.pharmeasy.in/dam/products_otc/193786/sugar-free-natura-sweetener-tablets-bottle-of-200-2-1641398763.jpg?dim=224x0&dpr=1&q=100",
    //     name:"Sugar Free Natura",
    //     disPrice: "223",
    //     price: "135",
    //     offer: "27%",
    // }
];

localStorage.setItem("offers",JSON.stringify(offerData));


var offers= document.querySelector("#offer-sec");

displayoffer(offerData);
function displayoffer(data){
    offers.innerHTML==null;
    data.forEach(function(element){
        var card = document.createElement("div");
        

        var imgBox = document.createElement("div");

        var img = document.createElement("img");
        img.src = element.img;

        var name = document.createElement("h3");
        name.innerText = element.name;

        var disPrice = document.createElement("h4");
        disPrice.innerText = "MRP"+" "+element.disPrice;

        var price = document.createElement("h2");
        price.innerText = "₹"+element.price;

        var offer = document.createElement("h2");
        offer.innerText = element.offer+" "+"OFF";

        imgBox.append(offer,img);

        card.append(imgBox,name,disPrice,price);

        offers.append(card);

    })

}


var detailData = detail =[
    {
        img:"https://assets.pharmeasy.in/web-assets/dist/4d2f7c48.svg",
        detail: "25 Million",
        desc:"Registered users as of Jun 30, 2021",
    },
    {
        img:"https://assets.pharmeasy.in/web-assets/dist/92c372bb.svg",
        detail: "8.8 Million",
        desc:"PharmEasy Orders as of FY21",
    },
    {
        img:"https://assets.pharmeasy.in/web-assets/dist/773ae9c5.svg",
        detail: "50K+",
        desc:"SKUs sold in Q1 FY22",
    },
    {
        img:"https://assets.pharmeasy.in/web-assets/dist/f2d557d3.svg",
        detail:" 18K+",
        desc:"Pin-Codes Serviced for the month of June 2021",
    }
]
localStorage.setItem("details",JSON.stringify(detailData));

var details = document.querySelector("#detail");

displayDetail(detailData);

function displayDetail(data){

    details.innerHTML = null;
    data.forEach(function(ele){
        var card2 = document.createElement("div");

        var img = document.createElement("img");
        img.src = ele.img;

        var detail = document.createElement("h1");
        detail.innerText = ele.detail;

        var desc = document.createElement("h4");
        desc.innerText = ele.desc;

        

        card2.append(img,detail,desc);

        details.append(card2);
    })
}

var reviewData = review =[
    {
        rname:"Debanjan Roy",
        rdate:"April 18'2020",
        rreview:"Excellent experience. Pharmeasy has not let it's customers down during lockdown. Thanks team. Great job. The application is also very smooth. And does its job well with an attractive UI and easy to use features. Good job developer.",

    },
    {
        rname:"Rohini Sarkar",
        rdate:"April 21'2020",
        rreview:"Very helpful and friendly app in terms of usability, customer support &amp; money saving from the point of medical necessity of every person.",

    },
    {
        rname:"Rajarshi Sarkar",
        rdate:"April 22'2020",
        rreview:"The app is really wonderful. Being a Product Manager myself, I would say that the User experience (UI/UX) of the app is top notch (easy to use, simple and convenient). Coming to services and delivery, I would say Pharmeasy is doing a tremendous job even during this unprecedented pandemic situation.",

    },
    {
        rname:"Debanjan Roy",
        rdate:"April 18'2020",
        rreview:"Excellent experience. Pharmeasy has not let it's customers down during lockdown. Thanks team. Great job. The application is also very smooth. And does its job well with an attractive UI and easy to use features. Good job developer.",

    },
    {
        rname:"Darpan Dholakia",
        rdate:"April 23'2020",
        rreview:"Best service and app amongst all available. I have been using it for more than 3 years, and even during the pandemic, they have kept their standards high and are delivering the order within 24 hours. Keep up the good work.",

    }
]

localStorage.setItem("reviews",JSON.stringify(reviewData));

var reviews = document.querySelector("#review");

displayReview(reviewData);

function displayReview(data){
    reviews.innerHTML = null;

    data.forEach(function(elem){
        var card3 = document.createElement("div");

        var rname = document.createElement("h1");
        rname.innerText = elem.rname;

        var rdate = document.createElement("h3");
        rdate.innerText = elem.rdate;

        var rreview = document.createElement("p");
        rreview.innerText = elem.rreview;

        card3.append(rname,rdate,rreview);

        reviews.append(card3);
    })
}



