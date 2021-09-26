const apiurl = "https://api.jikan.moe/v3";

//------------------------  Topnav anf from function  ----------------------
function Topnav_And_Form() {
  //navbar
  const search_title = document.createElement("div");
  search_title.setAttribute("class", "search_text");
  search_title.setAttribute("id", "search_anime");

  const search_heading = document.createElement("div");
  search_heading.setAttribute("class", "title");
  search_heading.innerHTML = `<h2 class="titleText"><span>S</span>earch Anime</h2>`;

  search_title.append(search_heading);
  document.querySelector(".form_container").append(search_title);

  const formdiv = document.createElement("div");
  formdiv.setAttribute("class", "conatiner");
  formdiv.innerHTML = `
     <form>
        <input type="text" name="search" id="search" placeholder="Enter anime name">
        <button type="button" onclick="searchAnime(event)">search</button>
     </form>`;

  document.querySelector(".form").append(formdiv);
}
Topnav_And_Form();
//------------------------ searching Anime name in the search box ----------------------
function searchAnime(event) {
  event.preventDefault();
  let inputtext = document.getElementById("search");
  let tobefindtext = inputtext.value;
  // getAnime(tobefindtext);

  if (tobefindtext == "") {
    alert("please!!! Enter Anime Name 🦹 🦹 🦹");
  } else {
    getAnime(tobefindtext);
  }
}
var inputtext = document.getElementById("search");
inputtext.addEventListener("keypress", function (e) {
  if (e.key === "Enter") searchAnime(event);
});

//-------------------------- setting  initial API to be loaded ---------------------------
async function getAnime(find) {
  try {
    const data = await fetch(`${apiurl}/search/anime?q=${find}&page=1`, {
      method: "GET",
    });
    const initial_datas = await data.json();
    console.log(initial_datas);
    document.querySelector(".image-container").innerHTML = "";
    displayAnime(initial_datas.results);
  } catch (err) {
    document
      .querySelector(".image-container")
      .append("Details Cannot be  Found. 😒");
  }
}
//-------------------------- displayAnime  ---------------------------
function displayAnime(animes) {
  animes.forEach((anime) => {
    var image_box = document.createElement("div");
    image_box.innerHTML = `
<div class="card">
        <div class="image">
          <img src=${anime.image_url} alt="image">
        </div>
        <div class="content">
          <h2><strong>Titile:</strong> ${anime.title}</h2>
          <p><strong>Start Date:</strong>    ${new Date(
            anime.start_date
          ).toDateString()}</p>
          <p><strong>End Date:</strong>      ${new Date(
            anime.end_date
          ).toDateString()}</p>
          <p><strong>Type of series:</strong>          ${anime.type}</p>    
          <p><strong>IMDB Rating:</strong> <i class="fa fa-star" aria-hidden="true"></i> ${
            anime.score
          }</p> 
        </div>
</div>`;
    document.querySelector(".image-container").append(image_box);
  });
}

const loader_div = document.createElement("div");
loader_div.setAttribute("class", "loader");
const loader_image = document.createElement("img");
loader_image.setAttribute(
  "src",
  "http://lindseyfurniture.com/zira/loading.gif"
);
loader_div.append(loader_image);
document.querySelector(".page_loader").append(loader_div);

const loader = document.querySelector(".loader");
const main = document.querySelector(".main");

function init() {
  setTimeout(() => {
    loader.style.opacity = 0;
    loader.style.display = "none";

    main.style.display = "block";
    setTimeout(() => (main.style.opacity = 1), 50);
  }, 5000);
}
init();

// footer script
const footer = document.createElement("div");
// const footer_box=document.cre
footer.innerHTML = `
<footer id="contact_us">
<div class="container">
            <div class="sec aboutus">
                <h2>About Us</h2>
                <p> Hello everyone! This project is a simple Anime search website redesign project. I hope you enjoy. Thanks! Searching order by alphabet name A to Z.</p>
                    <ul class="sci">
                        <li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i class="fa fa-youtube-play" aria-hidden="true"></i></a></li>
                    </ul>
            </div>
            <div class="sec quickLinks">
                <h2>Quick Links</h2>
                <ul>
                    <li><a href="#">Anime online</a></li>
                    <li><a href="#">Watch anime</a></li>
                    <li><a href="#">animefrenzy.net</a></li>
                    <li><a href="#">Anime Frenzy</a></li>
                    <li><a href="#">4anime.to Official</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>
            <div class="sec contact">
                <h2>Contact Info</h2>
                <ul class="info">
                    <li>
                        <span><i class="fa fa-map-marker" aria-hidden="true"></i></span>
                        <span>647 Linda Street <br> Phoenixville, PA 191460,<br>USA</USA></span>
                    </li>
                    <li>
                        <span><i class="fa fa-phone" aria-hidden="true"></i></span>
                       <p><a href="tel:12345678900">+1 234 567 8900</a><br>
                          <a href="tel:12345678900">+1 234 567 8911</a></p>
                    </li>
                    <li>
                        <span><i class="fa fa-envelope" aria-hidden="true"></i></span>
                        <p><a href="mailto:Knowmore@gmail.com">Anime@gmail.com</a></p>
                    </li>
                </ul>
            </div>
        </div>
    </footer>
    <div class="copyrightText">
        <p>Copyright © 2021 <span class="copyright_name">Sangeetha.</span></p>
    </div>
`;
document.querySelector(".footer_container").append(footer);

// ================================== Header Starts here ==================================
// header script
const header_section = document.createElement("div");

const section_box = document.createElement("div");
section_box.setAttribute("class", "section_box");

// section_box_for image
const section_box_image = document.createElement("img");
section_box_image.setAttribute("src", "images/anime_girl.png");
section_box_image.setAttribute("alt", "anime_girl_image");
section_box_image.setAttribute("class", "mosque");

// creating setion_box header div
const section_box_header = document.createElement("div");
section_box_header.setAttribute("class", "section_box_header");

// creating setion_box header with a tag
const section_box_header_a = document.createElement("a");
section_box_header_a.setAttribute("class", "logo");
section_box_header_a.innerHTML = "Anime";

// creating navbar_toggle
const navbar_toggle = document.createElement("div");
navbar_toggle.setAttribute("class", "navbar_toggle");

const navigation_ul = document.createElement("ul");
navigation_ul.setAttribute("class", "navigation");
navigation_ul.innerHTML = `
            <li><a href="#" style="--i: 1" class="active">Home</a></li>
            <li><a href="#search_anime" style="--i: 2">Search Anime</a></li>
            <li><a href="#contact_us" style="--i: 3">Contact Us</a></li>
            <li><a href="#popular_anime" style="--i: 4">Popular Anime</a></li>
            `;
section_box_header.append(section_box_header_a, navbar_toggle, navigation_ul);
// header Ends here

// header content starts here
const section_box_content = document.createElement("div");
section_box_content.setAttribute("class", "section_box_content");

// content textbox
const content_textBox = document.createElement("div");
content_textBox.setAttribute("class", "textBox");

const content_textBox_h2 = document.createElement("h2");
content_textBox_h2.innerHTML = "Explore Anime";

const content_textBox_p = document.createElement("p");
content_textBox_p.innerHTML =
  "Find your favorite Anime watch the movie,Tv series and Special episodes. Just a better place to watch anime in online for free!";

const content_textBox_a = document.createElement("a");
content_textBox_a.setAttribute("id", "#search_anime");
content_textBox_a.innerHTML = "Search Anime";

content_textBox.append(
  content_textBox_h2,
  content_textBox_p,
  content_textBox_a
);
section_box_content.append(content_textBox);

// creating header icons
const section_box_sci = document.createElement("ul");
section_box_sci.setAttribute("class", "section_box_sci");
section_box_sci.innerHTML = `
          <li> <a href="#" style="--i: 12"><img src="images/facebook.png" alt="facebook_icon"/></a></li>
          <li><a href="#" style="--i: 13" ><img src="images/twitter.png" alt="twitter_icon"/></a></li>
          <li><a href="#" style="--i: 14"><img src="images/instagram.png" alt="instagram_icon"/></a></li>`;

// header content Ends here

section_box.append(
  section_box_image,
  section_box_header,
  section_box_content,
  section_box_sci
);
header_section.append(section_box);
document.querySelector(".header_container").append(header_section);

//header toggle script
const menutoggle = document.querySelector(".navbar_toggle");
const navigation = document.querySelector(".navigation");
menutoggle.onclick = function () {
  menutoggle.classList.toggle("active");
  navigation.classList.toggle("active");
};
// ================================== Header ends here ==================================

// popular anime images gallery
const search_title = document.createElement("div");
search_title.setAttribute("class", "search_text");
search_title.setAttribute("id", "popular_anime");

const search_heading = document.createElement("div");
search_heading.setAttribute("class", "title");
search_heading.innerHTML = `<h2 class="titleText"><span>P</span>opular Anime Images</h2>`;

search_title.append(search_heading);
document.querySelector(".image_container").append(search_title);

const image_box = document.createElement("div");
image_box.setAttribute("class", "container-for-image");
image_box.innerHTML = `
        <div class="image-conatiner">
          <!-- image box -->
          <div class="image">
            <img
              src="images/img-1.jpeg"
              alt="image"
            />
            <!-- image box icon -->
            <div class="anime_name">
              <span>
                <p class="gallery-text">Pokemon</p>
              </span>
            </div>
            <div class="text-image">
              <span>
                <!-- view icon -->
                <i class="fa fa-eye" aria-hidden="true"></i>
              </span>
            </div>
          </div>
          <div class="image">
            <img
              src="images/img-2.jpeg"
              alt="image"
            />
            <!-- image box icon -->
            <div class="anime_name">
              <span>
                <p class="gallery-text">Rockman</p>
              </span>
            </div>
            <div class="text-image">
              <span>
                <!-- view icon -->
                <i class="fa fa-eye" aria-hidden="true"></i>
              </span>
            </div>
          </div>
          <!-- image box Ends here  -->

          <!-- image box starts -->
          <div class="image">
            <img
              src="https://wallpaperaccess.com/full/2410080.jpg"
              alt="image"
            />
            <!-- image box icon -->
            <div class="anime_name">
              <span>
                <p class="gallery-text">Naruto</p>
              </span>
            </div>
            <div class="text-image">
              <span>
                <!-- view icon -->
                <i class="fa fa-eye" aria-hidden="true"></i>
              </span>
            </div>
          </div>
          <!-- image box Ends here  -->

          <!-- image box starts -->
          <div class="image">
            <img
              src="images/img-4.jpeg"
              alt="Akeno_image"
            />
            <!-- image box icon -->
            <div class="anime_name">
              <span>
                <p class="gallery-text">Akeno</p>
              </span>
            </div>
            <div class="text-image">
              <span>
                <!-- view icon -->
                <i class="fa fa-eye" aria-hidden="true"></i>
              </span>
            </div>
          </div>
          <!-- image box Ends here  -->

          <!-- image box starts -->
          <div class="image">
            <img
              src="images/img-5.jpeg"
              alt="image"
            />
            <!-- image box icon -->
            <div class="anime_name">
              <span>
                <p class="gallery-text">Ami</p>
              </span>
            </div>
            <div class="text-image">
              <span>
                <!-- view icon -->
                <i class="fa fa-eye" aria-hidden="true"></i>
              </span>
            </div>
          </div>
          <!-- image box Ends here  -->

          <!-- image box starts -->
          <div class="image">
            <img
              src="images/img-6.jpeg"
              alt="Katsu-image"
            />

            <!-- image box icon -->
            <div class="anime_name">
              <span>
                <p class="gallery-text">Katsu</p>
              </span>
            </div>
            <div class="text-image">
              <span>
                <!-- view icon -->
                <i class="fa fa-eye" aria-hidden="true"></i>
              </span>
            </div>
          </div>
          <!-- image box Ends here  -->
        </div>

        <div class="popup-image">
          <span>&times</span>
          <img
            src="https://www.reference.com/content/419749/ed9e49f85d8f405be924a7474dd4af54.jpg"
            alt=""
          />
        </div>
      </div>
`;
document.querySelector(".anime_image_container").append(image_box);

// anime gallery script
document.querySelectorAll(".image-conatiner img").forEach((image) => {
  image.onclick = () => {
    document.querySelector(".popup-image").style.display = "block";
    document.querySelector(".popup-image img").src = image.getAttribute("src");
  };
});
document.querySelector(".popup-image span").onclick = () => {
  document.querySelector(".popup-image").style.display = "none";
};
