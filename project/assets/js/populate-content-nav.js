"use strict"

function populate_content_nav() {
    const content_nav = document.querySelector("#content-nav");
    const content_container = document.querySelector("#content-container");
    const sections = Array.from(content_container.querySelectorAll("section"));

    for(let i=0; i < sections.length; i++) {
        let heading = sections[i].querySelector("h2");
        let li = document.createElement("li");

        li.innerHTML = heading.innerHTML;
        li.classList.add("content-nav-item");
        li.setAttribute("data-target", sections[i].id);

        li.onclick = function(event) {
            const target_id = event.currentTarget.getAttribute("data-target");
            for(let section of sections) {
                if(section.id == target_id) {
                    section.classList.add("active")
                }
                else {
                    section.classList.remove("active")
                }
            }
        }
        
        content_nav.appendChild(li);
    }
}

window.onload = populate_content_nav
