*/// Smooth scrolling for anchor links
//document.querySelectorAll('a[href^="#"]').forEach(anchor => {
   // anchor.addEventListener('click', function (e) {
      //  e.preventDefault();

        //document.querySelector(this.getAttribute('href')).scrollIntoView({
         //   behavior: 'smooth'
     //   });
 //   });
//});

// Modal functionality
//const modal = document.getElementById("modal");
//const closeButton = document.querySelector(".close-button");

//function openModal(content) {
  //  document.getElementById("modal-text").innerHTML = content;
   // modal.style.display = "block";
//}

//closeButton.addEventListener("click", () => {
  //  modal.style.display = "none";
//});

//window.addEventListener("click", (event) => {
    //if (event.target == modal) {
       // modal.style.display = "none";
   // }
//});

// Open modal when clicking on task, course, or asset links
//document.querySelectorAll('.task-box a, .course-box a, .asset-box a').forEach(link => {
   // link.addEventListener('click', function (e) {
       // e.preventDefault();
      //  const formUrl = this.getAttribute('data-form-url');
       // const courseUrl = this.getAttribute('data-course-url');
       // let content;
       // if (formUrl) {
         //   content = `You are about to fill out the form for ${this.textContent}. <br><a href="${formUrl}" target="_blank">Click here to proceed to the form.</a>`;
     //   } else if (courseUrl) {
        //    content = `You are about to view the course ${this.textContent}. <br><a href="${courseUrl}" target="_blank">Click here to proceed to the course.</a>`;
     //   }
      //  openModal(content);
//    });
//}); /*
