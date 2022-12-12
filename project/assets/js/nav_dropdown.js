"use strict"

const anchor = document.getElementById("navbar");
const menu_trigger = document.querySelector(".nav-list-trigger i");
const menu_elem = document.querySelector("#navbar .nav-list-menu-wrapper");

// onclick event on hamburger menu
function handle_hamburger_click(e) {
    if(menu_trigger.classList.contains("fa-bars")) {
        menu_trigger.classList.replace("fa-bars", "fa-xmark");
    }
    else {
        menu_trigger.classList.replace("fa-xmark", "fa-bars");
    }
    
    let anchor_pos = anchor.getBoundingClientRect();
    let menu_elem = document.querySelector("#navbar .nav-list-menu-wrapper")

    menu_elem.style.top = `${anchor_pos.bottom}px`;
    menu_elem.style.left = "0px";
    menu_elem.classList.toggle('active');
}

let prev_size = window.innerWidth;

window.onresize = function() {
    // Switch to large screen
    if(window.innerWidth > 968 && prev_size <= 968) {
        console.log("booyah")
        handle_hamburger_click()
    }
    else if(window.innerWidth < 968 && menu_elem.classList.contains("active")) {
        if(menu_trigger.classList.contains("fa-xmark")) {
            menu_trigger.classList.replace("fa-xmark", "fa-bars");
            menu_elem.classList.remove("active")
        }
    }
    else {
        menu_elem.style.top = "unset";
        menu_elem.style.left = "unset";
    }
    prev_size = window.innerWidth;
}
