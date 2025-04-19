const openMenu = document.querySelector(".open-menu");
const sideBar = document.querySelector(".sidebar");
const searchPopup = document.querySelector(".search");
const popup = document.querySelector(".popup");
const closePopup = document.querySelector(".close-popup");
let isOpen = false;

export class FunctionsPage {
    static openMenu() {
        openMenu.onclick = () => {
            isOpen ? sideBar.style.left = `-100%` : sideBar.style.left = '0'
            isOpen = !isOpen;
        }
    }
    static openSearchPopup() {
        searchPopup.onclick = () => {
            popup.style.display = "flex";
        }
        closePopup.onclick = () => {
            popup.style.display = "none";
        }
    }

}