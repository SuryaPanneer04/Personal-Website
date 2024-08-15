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


//scroll bar view

