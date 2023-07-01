(()=>{"use strict";const e=function(){const e=document.querySelector(".content");e.textContent="",e.appendChild(function(){const e=document.createElement("div");e.classList.add("about");const t=document.createElement("h1");t.textContent="About Us",e.appendChild(t);const n=document.createElement("img");n.setAttribute("id","main-img"),n.src="https://images.unsplash.com/photo-1629407119384-d42320c3e576?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",n.height="600",e.appendChild(n);const a=document.createElement("p");return a.textContent="Integer rhoncus iaculis quam sodales malesuada. Vestibulum sed diam at nisi dictum scelerisque. Sed tortor lacus, consequat eget nisl eu, blandit congue magna. Aliquam semper viverra lobortis. Vivamus placerat purus sit amet cursus pharetra. Nulla eleifend non ex vel ultricies. Donec imperdiet dolor a posuere pellentesque. Aenean eu nisi nunc. Sed et rutrum velit. Pellentesque eu ultricies libero, id rhoncus urna. Vestibulum a sem rutrum, hendrerit augue vitae, dapibus ex.Integer rhoncus iaculis quam sodales malesuada. Vestibulum sed diam at nisi dictum scelerisque. Sed tortor lacus, consequat eget nisl eu, blandit congue magna. Aliquam semper viverra lobortis. Vivamus placerat purus sit amet cursus pharetra. Nulla eleifend non ex vel ultricies. Donec imperdiet dolor a posuere pellentesque. Aenean eu nisi nunc. Sed et rutrum velit. Pellentesque eu ultricies libero, id rhoncus urna. Vestibulum a sem rutrum, hendrerit augue vitae, dapibus ex.",e.appendChild(a),e}())},t=function(){const t=document.querySelector(".content");t.textContent="",t.appendChild(function(){const t=document.createElement("div");t.classList.add("home");const n=document.createElement("hgroup");t.appendChild(n);const a=document.createElement("h1");a.setAttribute("id","title"),a.textContent="Restauri Gastronomy",n.appendChild(a);const i=document.createElement("p");i.setAttribute("id","copy-text"),i.textContent="Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis quos voluptas illum tenetur culpa tempore facilis at debitis doloribus, ducimus laudantium praesentium et aut rem ea labore maxime molestiae ipsum repellendus ullam! Similique, ut quo.",n.appendChild(i);const d=document.createElement("button");d.textContent="Read More",d.addEventListener("click",(()=>{e()})),n.appendChild(d);const s=document.createElement("img");return s.setAttribute("id","main-img"),s.src="https://images.unsplash.com/photo-1675670715799-79fe208c6811?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2944&q=80",t.appendChild(s),t}())};function n(e){const t=document.createElement("h2");return t.classList.add("div-title"),t.textContent=e,t}function a(e,t){const n=document.createElement("div");n.classList.add("menu-item");const a=document.createElement("h3");a.textContent=e,n.appendChild(a);const i=document.createElement("p");return i.textContent=t,n.appendChild(i),n}!function(){const i=document.querySelector("main");i.appendChild(function(){const i=document.createElement("nav");i.classList.add("navbar");const d=document.createElement("button");d.textContent="Home",d.classList.add("nav-btn"),d.addEventListener("click",(e=>{e.target.classList.contains("active")||t()}));const s=document.createElement("button");s.textContent="About",s.classList.add("nav-btn"),s.addEventListener("click",(t=>{t.target.classList.contains("active")||e()}));const o=document.createElement("button");o.textContent="Menu",o.classList.add("nav-btn"),o.addEventListener("click",(e=>{e.target.classList.contains("active")||function(){const e=document.querySelector(".content");e.textContent="",e.appendChild(function(){const e=document.createElement("div");e.classList.add("header");const t=document.createElement("h1");t.textContent="Menu",e.appendChild(t);const n=document.createElement("p");n.classList.add("subheader"),n.textContent="Valid for Summer, 2023",e.appendChild(n);const a=document.createElement("p");a.classList.add("menu-description"),a.textContent="We're serving a multi-course dining experience where you choose three of the courses (and we like to surprise you with several others).",e.appendChild(a);const i=document.createElement("p");return i.classList.add("price"),i.textContent="$150",e.appendChild(i),e}()),e.appendChild(function(){const e=document.createElement("div");e.classList.add("menu");const t=document.createElement("div");t.classList.add("menu-div"),e.appendChild(t);const i=document.createElement("div");i.classList.add("menu-div"),e.appendChild(i);const d=document.createElement("div");return d.classList.add("menu-div"),e.appendChild(d),t.appendChild(n("Appetizer")),t.appendChild(a("Sea bream","leeks, geoduck, dashi")),t.appendChild(a("Artichoke","wildflower, spinach, walnut")),t.appendChild(a("Venison","brassicas, alliums, miso")),i.appendChild(n("Main Courses")),i.appendChild(a("Halibut","asparagus, kasu butter, nori")),i.appendChild(a("Mushroom Teriyaki","Tsuyahime rice, spruce, pickles")),i.appendChild(a("Coulotte","kosho, carrot, black pepper")),d.appendChild(n("Desserts")),d.appendChild(a("Smoked cacao","nougatine, milk ice cream")),d.appendChild(a("Strawberry","rhubarb, white chocolate, kasu")),d.appendChild(a("Dried persimmon","devonshire cream, vermouth, yuzu")),e}())}()}));const c=document.createElement("button");c.textContent="Contact",c.classList.add("nav-btn"),c.addEventListener("click",(e=>{e.target.classList.contains("active")||function(){const e=document.querySelector(".content");e.textContent="";const t=document.createElement("h1");t.textContent="Contact us",e.appendChild(t),e.appendChild(function(){const e=document.createElement("div");e.classList.add("info");const t=document.createElement("p");t.textContent="123 Main Street";const n=document.createElement("p");n.textContent="555-555-5555",e.appendChild(t),e.appendChild(n);const a=document.createElement("h3");a.textContent="Opening Hours";const i=document.createElement("p");i.textContent="Sunday - Wednesday";const d=document.createElement("p");d.textContent="5:00 PM - 10:00 PM";const s=document.createElement("p");s.textContent="Thursday - Saturday";const o=document.createElement("p");return o.textContent="5:00 PM - midnight",e.appendChild(a),e.appendChild(i),e.appendChild(d),e.appendChild(s),e.appendChild(o),e}())}()}));const u=document.createElement("button"),l=[d,s,o,c];return u.classList.add("nav-btn"),u.textContent="Menu",window.innerWidth>800?u.style.display="none":(l.forEach((e=>{e.style.display="none"})),u.addEventListener("click",(()=>{const e=l.some((e=>"none"===e.style.display));u.textContent=e?"Close":"Menu",l.forEach((t=>{t.style.display=e?"block":"none"})),window.onclick=function(t){t.target!==u&&(e||(u.textContent="Menu",l.forEach((e=>{e.style.display="none"}))))}}))),i.appendChild(d),i.appendChild(s),i.appendChild(o),i.appendChild(c),i.appendChild(u),i}()),i.appendChild(function(){const e=document.createElement("div");return e.classList.add("content"),e}()),t()}()})();