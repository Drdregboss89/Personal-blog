let tablinks = document.getElementsByClassName('tab-links');
let tabcontents =  document.getElementsByClassName('tab-contents')


function opentab(tabname) {
	for(tablink of tablinks){
		tablink.classList.remove("active-link");
	}

 for(tabcontent of tabcontents){
		tabcontent.classList.remove("active-tab");
 
 }

 event.currentTarget.classList.add("active-link");
 // event.currentTarget.classList.add("active-tab")

 document.getElementById(tabname).classList.add("active-tab");  
 }



 let sidemenu = document.getElementById('sidemenu');

 function openmenu(){

  sidemenu.style.right = '0' ;
 }


function closemenu(){

  sidemenu.style.right = '-200px' ;
 }




/** @format */

AOS.init();

// You can also pass an optional settings object
// below listed default settings
AOS.init({
  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 900, // values from 0 to 3000, with step 50ms
  easing: "ease", // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
});
AOS.refresh();




