const CategoryType = [
    {
        image : "https://missnatura.in/wp-content/uploads/2022/04/Toners.jpg" ,
        name : "Toner",
        a :"/pages/product_list.html"
    },
    {
        image : "https://missnatura.in/wp-content/uploads/2022/04/Serums.jpg",
        name : "Serum",
        a :"/pages/product_list.html"
    },
    {
        image : "https://missnatura.in/wp-content/uploads/2022/04/Creams.jpg",
        name : "Cream",
        a :"/pages/product_list.html"
    },
    {
        image : "https://missnatura.in/wp-content/uploads/2022/04/Face-Wash.jpg",
        name : "FaceWash",
        a :"/pages/product_list.html"
    }
];

const prodtype = JSON.parse(localStorage.getItem(CategoryType));
if(!prodtype){
    localStorage.setItem("CategoryType", JSON.stringify(CategoryType));
}

const Typesofskin = [
    {
        image : "https://missnatura.in/wp-content/uploads/2022/04/Dry.jpg",
        name : "Dry",
        a :"/pages/product_list.html"
    },
    {
        image : "https://missnatura.in/wp-content/uploads/2022/04/Oily.jpg",
        name : "Oily",
        a :"/pages/product_list.html"
    },
    {
        image : "https://missnatura.in/wp-content/uploads/2022/04/Sensitive.jpg",
        name : "Sensitive",
        a :"/pages/product_list.html"
    },
    {
        image : "https://missnatura.in/wp-content/uploads/2022/04/Normal.jpg",
        name : "Normal",
        a :"/pages/product_list.html"
    }
]


const skinType = JSON.parse(localStorage.getItem(Typesofskin));
if(!skinType){
    localStorage.setItem("TypesOfSkin", JSON.stringify(Typesofskin));
}