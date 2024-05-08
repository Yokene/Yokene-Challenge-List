document.addEventListener("DOMContentLoaded", function() {
    var elements = document.querySelectorAll('.challenge-place');

    function checkVisibility() {
        elements.forEach(function(element) {
            var positionFromTop = element.getBoundingClientRect().top;
            var positionFromBottom = element.getBoundingClientRect().bottom;
            var windowHeight = window.innerHeight;

            if ((positionFromTop - windowHeight <= 0 && positionFromBottom >= 0) || (positionFromTop >= 0 && positionFromBottom <= windowHeight)) {
                element.classList.add('animate');
            } else {
                element.classList.remove('animate');
            }
        });
    }

    window.addEventListener('scroll', checkVisibility);
    checkVisibility();
});
