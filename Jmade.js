console.log(`JMADE`);
alert(`Welcom to JMADE`);


document.addEventListener("DOMContentLoaded", () => {
    const popup = document.getElementById("popup");
    const openPopupBtn = document.getElementById("login");
    const closeBtn = document.querySelector(".close-btn");
     
openPopupBtn.addEventListener("click", () => {
        popup.style.display = "block";
    });

 closeBtn.addEventListener("click", () => {
        popup.style.display = "none";
    });

window.addEventListener("click", (event) => {
        if (event.target == popup) {
            popup.style.display = "none";
        }
    });
});