const dialogOverlay = document.getElementById('dialogOverlay');
const dialogHeader = document.getElementById('dialogHeader');
const dialogContent = document.getElementById('dialogContent');

let book = ["Delivery in 2-3 days", "Free ceramic pot included", "Care guide provided"];
let bookPlant = document.getElementById('bookPlant');

bookPlant.addEventListener('click', function() {
    dialogHeader.innerHTML = "📦 Booking Confirmed";
    dialogContent.innerHTML = "<ul><li>" + book[0] + "</li><li>" + book[1] + "</li><li>" + book[2] + "</li></ul>";
    dialogOverlay.classList.add('open');
});

let contact = ["Phone: +254 727 561 015", "Email: lush@plants.co.ke", "Location: Nairobi, Kenya"];
let contactInfo = document.getElementById('contactInfo');

contactInfo.addEventListener('click', function() {
    dialogHeader.innerHTML = "📞 Contact Us";
    dialogContent.innerHTML = "<ul><li>" + contact[0] + "</li><li>" + contact[1] + "</li><li>" + contact[2] + "</li></ul>";
    dialogOverlay.classList.add('open');
 });

 let call = ["Phone: +254 727 561 015", "Email: lush@plants.co.ke", "Location: Nairobi, Kenya"];
 let callUs = document.getElementById('callUs');
 
 callUs.addEventListener('click', function() {
        dialogHeader.innerHTML = "📞 Call us";
        dialogContent.innerHTML = "<ul><li>" + call[0] + "</li><li>" + call[1] + "</li><li>" + call[2] + "</li></ul>";
        dialogOverlay.classList.add('open');
 });

// ADD THIS CLOSE BUTTON CODE:
let closeDialogBtn = document.getElementById('closeDialogBtn');

closeDialogBtn.addEventListener('click', function() {
    dialogOverlay.classList.remove('open');
});