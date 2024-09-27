document.addEventListener("DOMContentLoaded", function() {
    
    function loadHeadline() {
        fetch('head.html')  
            .then(response => response.text())
            .then(data => {
                document.getElementById('headline').innerHTML = data;
            })
            .catch(error => console.log("Error loading head.html: ", error));
    }


    loadHeadline();
});


window.onscroll = function() {
    const scrollToTopButton = document.getElementById("scrollToTop");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollToTopButton.style.display = "block";
    } else {
        scrollToTopButton.style.display = "none";
    }
};

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
