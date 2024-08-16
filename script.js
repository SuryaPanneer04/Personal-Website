document.addEventListener('DOMContentLoaded', () => {
    let sections = document.querySelectorAll('section');
    let navLinks = document.querySelectorAll('.nav-link');

    function activeLink(li) {
        navLinks.forEach(item => item.classList.remove('active'));
        li.classList.add('active');
    }

    navLinks.forEach(item => 
        item.addEventListener('click', function(){
            activeLink(this);
        }) 
    );

    window.onscroll = () => {
        let current = "";
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop - 50) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    };
});



//navbar side bar hidden
document.querySelectorAll('#nav-close').forEach(link => {
    link.addEventListener('click', function() {
        var offcanvasElement = document.getElementById('offcanvasNavbar');
        var bsOffcanvas = bootstrap.Offcanvas.getInstance(offcanvasElement);
        bsOffcanvas.hide();
    });
});


//email message
const form = document.querySelector('.contact-popup');
function sendmsg(e) {
    e.preventDefault();
    const name = document.querySelector('#name').value,
   email = document.querySelector('#email').value,
   number = document.querySelector('#number').value,
  message = document.querySelector('#message').value;
Email.send({
  SecureToken : "3d2f07c4-d530-4cdb-83c7-696bb91b770d",
  To : 'smartsuryacr7@gmail.com',
  From :  'smartsuryacr7@gmail.com',
  Subject : "person send the mail",
  Body : `Name: ${name} <br> Email: ${email} <br> Number: ${number} <br> Message: ${message}`
         
}).then(
          message => {
        // Set the message in the popup
        document.getElementById('popupMessage').innerText = 'Mail send successfully';
        
        // Show the modal
        var modal = document.getElementById("myModal");
        modal.style.display = "block";
    }
);


// Close the modal when the user clicks anywhere outside of the modal
window.onclick = function(event) {
var modal = document.getElementById("myModal");
if (event.target == modal) {
closeModal();
}
}

// Close the modal and clear the data when the OK button is clicked
document.getElementById('okButton').onclick = function() {
closeModal();
}

// Function to close the modal and clear data
function closeModal() {
var modal = document.getElementById("myModal");
modal.style.display = "none";

// Clear the popup message
document.getElementById('popupMessage').innerText = "";

// Clear all input fields
var inputs = document.querySelectorAll('input[type="text"], input[type="email"], input[type="tel"], textarea');
inputs.forEach(input => input.value = "");

// Clear any select elements
var selects = document.querySelectorAll('select');
selects.forEach(select => select.selectedIndex = 0);

// Clear any other relevant data or reset elements
// Example: Reset checkboxes and radio buttons
var checkboxes = document.querySelectorAll('input[type="checkbox"], input[type="radio"]');
checkboxes.forEach(checkbox => checkbox.checked = false);
}

}
form.addEventListener('submit',sendmsg);     

//end