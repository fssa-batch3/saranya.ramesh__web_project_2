products = JSON.parse(localStorage.getItem('products'))
if(!products){
    localStorage.setItem("products",JSON.stringify([
        {
            benefits:"It improves root strength, reduce scalp dryness, prevent hair fall",
            description: "Formulated with pure Ayurvedic herbs, this Neem Shampoo is known for its excellent antifungal & antibacterial properties and is suitable for all hair types ",
            weigthCtgry:"ml",
            prodType:"Hair care",
            skinType:"All skin Type",
            prodCtgry:"",
howtouse
: 
"use twice a week",
ingredients
: 
"pure and clean neem leaves, essential oil, etc....",
prodimg
: 
"/assets/img/NEEM-SHAMPOO.jpg",
prodname
: 
"Neem shampoo",
prodrange
: 
"350",
selflife
: 
"2 months",
weight
: 
"100",
productid: uuidv4()
        },
        {

        benefits:"It calms your skin and makes your skin supple and plumpy",
        description: "This gel is a natural skin brightener which will help get a more uniform & brighter complexion. It slowly evens out the skin tone by eliminating age spots, scars, & melisma. For a younger & bright looking skin, use regularly.",
        weigthCtgry:"ml",
        prodType:"Face care",
        skinType:"Oily skin",
        prodCtgry:"Cream",
howtouse
: 
"Use twice a day for better result after face wash",
ingredients
: 
"Pure kashmiri saffron with aloe vera gel",
prodimg
: 
"/assets/img/saffron gel.webp",
prodname
: 
"Saffron Gel",
prodrange
: 
"250",
selflife
: 
"3 months",
weight
: 
"100",
productid: uuidv4()
},
{
    benefits
: 
"It hydrates and nourish your skin and it's mild smell keeps you relax.",
description
: 
"Vetiver provides nourishing and hydrating, helping to soothe dry skin. Vetiver helps skin appear firmer and more youthful",
howtouse
: 
"After face wash spray it on your face and leave it for 2 mins.",
ingredients
: 
"Vetiver, pure water",
prodCtgry
: 
"Toner",
prodType
: 
"Face care",
prodimg
: 
"/assets/img/toner.jfif",
prodname
: 
"Vetiver Toner",
prodrange
: 
"150",
selflife
: 
"3 months",
skinType
: 
"Oily",
productid
: 
uuidv4(),
weight
: 
"150",
weigthCtgry
: 
"ml"
},
{benefits
: 
"Helps to nourish your skin and keep your skin plump",
description
: 
"Give your skin some rose love. Tone your skin, and restore its pH balance with this hydrating toner",
howtouse
: 
"Use twice a day after face wash",
ingredients
: 
"Fresh rose petels ",
prodCtgry
: 
"Toner",
prodType
: 
"Face care",
prodimg
: 
"/assets/img/rose water.jpg",
prodname
: 
"RoseWater toner ",
prodrange
: 
"90",
selflife
: 
"3 months",
skinType
: 
"Normal",
productid
: 
uuidv4(),
weight
: 
"100",
weigthCtgry
: 
"ml"
},
{
    benefits
: 
"Reduces & treats acne, constricts open pores, maintains natural pH balance & oil levels. Soothes skin.",
description
: 
"The serum helps to reduce acne breakout and fade scars and spots. Formulated to help clear and purify acne-prone skin. It supports skin's collagen and elastin structure and improves skin texture.",
howtouse
: 
"anti-acne serum can be used daily, twice a day after cleansing/toning",
ingredients
: 
"Aloe vera, cucumber, teatree, neem, etc..",
prodCtgry
: 
"Serum",
prodType
: 
"Face care",
prodimg
: 
"/assets/img/ANTI-ACNE-SERUM.jpg",
prodname
: 
"Antiacne serum",
prodrange
: 
"230",
selflife
: 
"2 months",
skinType
: 
"Oily",
productid
: 
uuidv4(),
weight
: 
"50",
weigthCtgry
: 
"g"
},
{
    benefits
: 
"The skin lightening properties of the Papaya help in getting rid of blemishes and pigmentation,make the face lighter in tone and more supple.",
description
: 
"It contains papaya fruit enzymes that help reduce dark spots, pigmentation, acne scars and fine lines. Its natural and effective exfoliating properties brighten the skin by removing dead skin cells.",
howtouse
: 
"Use daily twice a day ",
ingredients
: 
"Papaya fruit enzyme, Bilberry fruit extract, Grape leaf extract, Cranberry fruit extract,etc..",
prodCtgry
: 
"FaceWash",
prodType
: 
"Face care",
prodimg
: 
"/assets/img/papaya facewash.jpg",
prodname
: 
"Papaya Facewash",
prodrange
: 
"200",
productid
: 
"9af79518-d990-4937-8865-930976993509",
selflife
: 
"2 months",
skinType
: 
"Normal",
weight
: 
"100",
weigthCtgry
: 
"g"
}
    ]
    )
 )
}