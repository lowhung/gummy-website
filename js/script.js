document.addEventListener('scroll', function() {
    var scrollPosition = window.scrollY;
    var links = document.querySelectorAll('nav a');

    links.forEach((link) => {
        var section = document.querySelector(link.hash);
        if (section.offsetTop <= scrollPosition && section.offsetTop + section.offsetHeight > scrollPosition) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
});
