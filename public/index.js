var typed = new Typed(".span", {
  strings: ["Aspiring Webdeveloper", "FreeLancer", "Fresh Graduate"],
  typeSpeed: 150,
  backSpeed: 150,
  loop: true,
  cursorChar: "",
});
var typed = new Typed(".type", {
  strings: ["Reed Clifford"],
  typeSpeed: 300,
  backSpeed: 300,
  loop: true,
  cursorChar: "",
});
var typed = new Typed(".skills-paragraph", {
  strings: ["Programming Language's and Framework's that I have in my arsenal."],
  typeSpeed: 50,
  backSpeed: 50,
  loop: true,
  cursorChar: "",
});

var typed = new Typed(".project-paragraph", {
  strings: ["Here are some of the projects i made on my journey of learning web development."],
  typeSpeed: 50,
  backSpeed: 50,
  loop: true,
  cursorChar: "",
});
var typed = new Typed(".ampawn", {
  strings: ["AMPawN is a web page that will be ran by the Pawtrolers, a private and non-government organization based on the local of the Batangas Province.(summer project)."],
  typeSpeed: 50,
  backSpeed: 50,
  loop: true,
  cursorChar: "",
});
var typed = new Typed(".capstone", {
  strings: ["An eccomerce website for University of Batangas Bookstore (Capstone Project)."],
  typeSpeed: 50,
  backSpeed: 50,
  loop: true,
  cursorChar: "",
});

var typed = new Typed(".ojt", {
  strings: ["Inquiry System for the University of Batangas Students (Internship Project)."],
  typeSpeed: 50,
  backSpeed: 50,
  loop: true,
  cursorChar: "",
});




var burger = $(".hamburger");
var menu = $(".nav-items");

burger.click(function () {
  if (menu.hasClass("hidden")) {
    menu.removeClass("hidden");
  } else {
    menu.addClass("hidden");
  }
});



const swiper = new Swiper('.swiper', {
  autoplay: {
    delay: 3000,
  },
  loop:true,



  scrollbar: {
    el: '.swiper-scrollbar',
    draggable: true,
  },


});



emailjs.init('ydIl8QYbwr3HtSbNK');


function SendMail(){
  var  params= {
    from_name : $('#fullName').valueOf,
    email_id: $('#email_id').valueOf,
    message:$("#message").valueOf
    

  }
  emailjs.send("service_4jk08fk","template_jcbt15n",params).then(function(res){
    alert("Success!!!" +res.status);
  })
}
