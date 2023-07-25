let content_list = document.querySelectorAll(".faq-display");
content_list.forEach(element => {
    element.addEventListener("click", function() {
        element.classList.toggle("faq-display")
    })
});