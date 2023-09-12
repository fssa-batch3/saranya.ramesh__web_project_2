const root = window.location.origin;
const categoryList = `${root}/pages/product_list.html`;

const BeforeLogin = `
<div class="nav_1">
<div class="header-img">
    <img src="${root}/assets/img/MissNatura_logo.png" alt="header_logo">
</div>
<div class="Navigation">
    <ul>
        <li> <a href="${root}/index.html">Home</a></li>
        <li>
            <div class="dropdown">
      <p class="dropbtn">Shop</p>
      <div class="dropdown-content">
        
            </div>
              </div>
        </li>
        
        <li> <a href="">Kits</a>
        </li>
        <li><a href=""> Contact us</a></li>
        <li><a href="">About us</a> </li>
        <a href="/pages/Signup page.html"><button id="button">Sign Up</button></a> 
    </ul>
</div>
</div>
`

const AfterLogin = `
<div class="nav_1">
<div class="header-img">
    <img src="${root}/assets/img/MissNatura_logo.png" alt="header_logo">
</div>
<div class="Navigation">
    <ul>
        <li> <a href="${root}/index.html">Home</a></li>
        <li>
        <div class="dropdown">
        <p class="dropbtn">Shop</p>
        <div class="dropdown-content">
         
              </div>
                </div>
        </li>
        <li> <a href="">Kits</a>
        </li>
        <li><a href=""> Contact us</a></li>
        <li><a href="">About us</a> </li>
        <li><a href="${root}/pages/wishlist.html"><i class="fa-regular fa-heart"></i></a></li>
        <li><a href=""><i class="fa-solid fa-wallet"></i></a></li>
        <li><a href="${root}/pages/profile.html"><i class="fa-solid fa-user"></i></a></li>
        <li><a href="${root}/pages/add_to_cart.html"> <i class="fa-solid fa-cart-shopping"></i></a></li>
        <button id="logout" type="submit">Logout</button>
    </ul>
</div>
</div>
`
const UniqueId1 = JSON.parse(localStorage.getItem("unique_id"));

if (UniqueId1) {
  document.body.insertAdjacentHTML("afterbegin", AfterLogin);
  const logout = document.querySelector("#logout");
  logout?.addEventListener("click", () => {
    alert("Are you sure, Do you want Logout?")
    localStorage.removeItem("unique_id");
    window.location.href="/index.html"
    // document.body.innerHTML = BeforeLogin;
  });

} else {
  document.body.insertAdjacentHTML("beforebegin", BeforeLogin);
  const logout = document.querySelector("#logout");
  logout?.removeEventListener(
    "click",
    () => (document.body.innerHTML = AfterLogin)
  );
  localStorage.removeItem("unique_id");
}

        //------------------------Add category-------------------------//

const localcategory = JSON.parse(localStorage.getItem("category_list"));
console.log(localcategory);
const Prodctgry = document.querySelector(".dropdown-content");

for(let i = 0; i < localcategory.length; i++){

  div_a = document.createElement("a")
  div_a.setAttribute("href",`${categoryList}?prodCty=${localcategory[i].category}`)
  div_a.innerText = localcategory[i].category;
  Prodctgry.append(div_a);
}