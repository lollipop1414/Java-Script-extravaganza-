// Wait for page to load
window.addEventListener('DOMContentLoaded', function() {

    const dialogOverlay = document.getElementById('dialogOverlay');
    const dialogHeader = document.getElementById('dialogHeader');
    const dialogContent = document.getElementById('dialogContent');

    // Shopping Cart Array
    let cart = [];

    // Update cart count display
    function updateCartCount() {
        document.getElementById('cartCount').textContent = cart.length;
    }

    // Book Now button
    let book = ["Delivery in 2-3 days", "Free ceramic pot included", "Care guide provided"];
    let bookPlant = document.getElementById('bookPlant');

    bookPlant.addEventListener('click', function() {
        dialogHeader.innerHTML = "📦 Booking Confirmed";
        dialogContent.innerHTML = "<ul><li>" + book[0] + "</li><li>" + book[1] + "</li><li>" + book[2] + "</li></ul>";
        dialogOverlay.classList.add('open');
    });

    // Contact Us button
    let contact = ["Phone: +254 727 561 015", "Email: lush@plants.co.ke", "Location: Nairobi, Kenya"];
    let contactInfo = document.getElementById('contactInfo');

    contactInfo.addEventListener('click', function() {
        dialogHeader.innerHTML = "📞 Contact Us";
        dialogContent.innerHTML = "<ul><li>" + contact[0] + "</li><li>" + contact[1] + "</li><li>" + contact[2] + "</li></ul>";
        dialogOverlay.classList.add('open');
    });

    // Call Us button
    let call = ["Phone: +254 727 561 015", "Email: lush@plants.co.ke", "Location: Nairobi, Kenya"];
    let callUs = document.getElementById('callUs');
    
    callUs.addEventListener('click', function() {
        dialogHeader.innerHTML = "📞 Call Us";
        dialogContent.innerHTML = "<ul><li>" + call[0] + "</li><li>" + call[1] + "</li><li>" + call[2] + "</li></ul>";
        dialogOverlay.classList.add('open');
    });

    // Sign In button - Shows form in overlay
    const showFormBtn = document.getElementById('showFormBtn');

    showFormBtn.addEventListener('click', function() {
        dialogHeader.innerHTML = "📝 Sign In";
        dialogContent.innerHTML = `
            <form id="signInForm">
                <input type="text" id="userName" placeholder="Your name" required style="display:block; width:100%; padding:12px; margin-bottom:15px; border:2px solid #66bb6a; border-radius:8px; font-size:1em;">
                <input type="email" id="userEmail" placeholder="Email" required style="display:block; width:100%; padding:12px; margin-bottom:15px; border:2px solid #66bb6a; border-radius:8px; font-size:1em;">
                <textarea id="userMessage" placeholder="Message" rows="4" required style="display:block; width:100%; padding:12px; margin-bottom:20px; border:2px solid #66bb6a; border-radius:8px; font-size:1em; resize: vertical;"></textarea>
                <button type="submit" style="background: linear-gradient(135deg, #66bb6a 0%, #43a047 100%); color:white; border:none; padding:15px 40px; border-radius:12px; font-size:1.2em; font-weight:600; cursor:pointer; width:100%; transition: all 0.3s ease;">Submit</button>
            </form>
        `;
        dialogOverlay.classList.add('open');
        
        // Handle form submission
        const signInForm = document.getElementById('signInForm');
        signInForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('userName').value;
            const email = document.getElementById('userEmail').value;
            const message = document.getElementById('userMessage').value;
            
            alert("🎉 Congratulations " + name + "! 🎉\n\nYour sign-in was successful!\n\nEmail: " + email + "\nMessage: " + message);
            
            dialogOverlay.classList.remove('open');
        });
    });

    // Buy Now buttons - Add to Cart
    let buyButtons = document.querySelectorAll('.li-a a');
    
    buyButtons.forEach(function(button) {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Get plant details
            let plantCard = button.closest('li');
            let plantName = plantCard.querySelector('p:first-of-type').textContent;
            let plantPrice = plantCard.querySelector('.plant-2').textContent;
            
            // Add to cart array
            cart.push({
                name: plantName,
                price: plantPrice
            });
            
            // Update cart count
            updateCartCount();
            
            // Show confirmation
            dialogHeader.innerHTML = "✅ Added to Cart!";
            dialogContent.innerHTML = "<p style='font-size:1.5em; text-align:center; margin-bottom:20px;'><strong>" + plantName + "</strong></p><p style='text-align:center; font-size:1.3em; color:#22c55e;'>" + plantPrice + "</p><p style='text-align:center; margin-top:20px;'>Item added to your cart successfully!</p>";
            dialogOverlay.classList.add('open');
        });
    });

    // View Cart button
    let viewCartBtn = document.getElementById('viewCart');
    
    viewCartBtn.addEventListener('click', function() {
        if(cart.length === 0) {
            dialogHeader.innerHTML = "🛒 Your Cart";
            dialogContent.innerHTML = "<p style='text-align:center; font-size:1.3em; color:#999;'>Your cart is empty!</p><p style='text-align:center; margin-top:20px;'>Browse our plants and add some to your cart.</p>";
            dialogOverlay.classList.add('open');
        } else {
            let cartHTML = "<div style='max-height:400px; overflow-y:auto;'>";
            let total = 0;
            
            cart.forEach(function(item, index) {
                // Extract price number
                let priceNum = parseFloat(item.price.replace('$', ''));
                total += priceNum;
                
                cartHTML += "<div style='padding:15px; margin-bottom:10px; background:#f5f5f5; border-radius:10px; display:flex; justify-content:space-between; align-items:center;'>";
                cartHTML += "<div><strong>" + item.name + "</strong><br><span style='color:#22c55e; font-size:1.1em;'>" + item.price + "</span></div>";
                cartHTML += "<button class='remove-item' data-index='" + index + "' style='background:#ff4444; color:white; border:none; padding:8px 15px; border-radius:5px; cursor:pointer;'>Remove</button>";
                cartHTML += "</div>";
            });
            
            cartHTML += "</div>";
            cartHTML += "<div style='margin-top:20px; padding-top:20px; border-top:2px solid #ddd;'>";
            cartHTML += "<p style='text-align:right; font-size:1.5em;'><strong>Total: $" + total.toFixed(2) + "</strong></p>";
            cartHTML += "<button id='checkoutBtn' style='background: linear-gradient(135deg, #66bb6a 0%, #43a047 100%); color:white; border:none; padding:15px 40px; border-radius:12px; font-size:1.2em; font-weight:600; cursor:pointer; width:100%; margin-top:15px;'>Checkout</button>";
            cartHTML += "</div>";
            
            dialogHeader.innerHTML = "🛒 Your Cart (" + cart.length + " items)";
            dialogContent.innerHTML = cartHTML;
            dialogOverlay.classList.add('open');
            
            // Add remove functionality
            document.querySelectorAll('.remove-item').forEach(function(btn) {
                btn.addEventListener('click', function() {
                    let index = parseInt(this.getAttribute('data-index'));
                    cart.splice(index, 1);
                    updateCartCount();
                    viewCartBtn.click(); // Refresh cart view
                });
            });
            
            // Checkout button
            document.getElementById('checkoutBtn').addEventListener('click', function() {
                alert("🎉 Thank you for your purchase!\n\nTotal: $" + total.toFixed(2) + "\n\nYour order will be delivered in 2-3 days!");
                cart = []; // Clear cart
                updateCartCount();
                dialogOverlay.classList.remove('open');
            });
        }
    });

    // Close Dialog button
    let closeDialogBtn = document.getElementById('closeDialogBtn');

    closeDialogBtn.addEventListener('click', function() {
        dialogOverlay.classList.remove('open');
    });

});