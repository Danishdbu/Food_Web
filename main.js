// active navbar
let nav = document.querySelector(".navigation-wrap");
window.onscroll = function () {
    if (document.documentElement.scrollTop > 20) {
        nav.classList.add('scroll-on');
    } else {
        nav.classList.remove('scroll-on');
    }
}
// nav hide
let navBar = document.querySelectorAll('.nav-link');
let navCollapse = document.querySelector('.navbar-collapse.collapse');
navBar.forEach(function (a) {
    a.addEventListener("click", function () {
        navCollapse.classList.remove("show");

    })
})

// counter
document.addEventListener("DOMContentLoaded", () => {
    function counter(id, start, end, duration) {
        let obj = document.getElementById(id),
            current = start,
            range = end - start,
            increment = end > start ? 1 : -1,
            step = Math.abs(Math.floor(duration / range)),
            timer = setInterval(() => {
                current += increment;
                obj.textContent = current;
                if (current == end) {
                    clearInterval(timer);
                }
            }, step);

    }
    counter("count1", 0, 1287, 3000);
    counter("count2", 20, 1117, 3000);
    counter("count3", 100, 1405, 3000);
    counter("count4", 0, 787, 3000);
});

function increaseValue(button) {
    var card = button.closest('.card'); // Find the closest card
    var input = card.querySelector('input[type="number"]'); // Get the input field
    var priceElement = card.querySelector('span'); // Get the price element
    var originalPrice = parseFloat(priceElement.getAttribute('data-price')); // Get the base price

    var value = parseInt(input.value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    input.value = value;

    updatePrice(priceElement, originalPrice, value);
}

function decreaseValue(button) {
    var card = button.closest('.card'); // Find the closest card
    var input = card.querySelector('input[type="number"]'); // Get the input field
    var priceElement = card.querySelector('span'); // Get the price element
    var originalPrice = parseFloat(priceElement.getAttribute('data-price')); // Get the base price

    var value = parseInt(input.value, 10);
    value = isNaN(value) ? 0 : value;

    if (value > 1) {
        value--;
        input.value = value;
        updatePrice(priceElement, originalPrice, value);
    }
}

function updatePrice(priceElement, originalPrice, quantity) {
    let newPrice = (originalPrice * quantity); // Calculate total price
    if (quantity >= 5) {
        newPrice -= newPrice * 0.05;

    }

    priceElement.innerHTML = `$${newPrice.toFixed(2)}`;

}
