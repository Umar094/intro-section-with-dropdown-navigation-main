const dropDowns = document.querySelectorAll("[data-dropdown]");

document.addEventListener('click', (e) => {
    let currentDropdown;

    if(e.target.matches('[data-dropdown]')){
        currentDropdown = e.target;
        e.target.classList.toggle('active');
    }

    dropDowns.forEach((dropdown) => {
        dropdown === currentDropdown ? null : dropdown.classList.remove("active")
    })

    if(!e.target.matches("[data-dropdown]")){
        dropDowns.forEach((dropdown) => {
            dropdown.classList.remove("active")
        })
    }

    // mobile dropdown

    const burgerMenu = document.querySelector("[data-burger-menu]")

    if(e.target.matches("[data-mobile-menu-icon]")){
        burgerMenu.classList.toggle("active")
        document.body.classList.toggle("bk-transarent")
    }

    if(e.target.matches('[data-mobile-dropdown]')){
        e.target.classList.toggle('active');
    }
    
})