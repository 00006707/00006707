(function ($) {
    'use strict';

    if ($.fn.owlCarousel) {
        // Hero Slider Active Code
        $(".features-slides").owlCarousel({
            items: 5,
            loop: true,
            autoplay: false,
            smartSpeed: 2000,
            margin: 50,
            nav: false,
            responsive: {
                0: {
                    items: 1
                },
                576: {
                    items: 2
                },
                992: {
                    items: 3
                },
                1200: {
                    items: 5
                }
            }
        })
    }

    // Search Active Code
    $('#search-btn, #closeBtn').on('click', function () {
        $('body').toggleClass('search-form-on');
    });
    
    // matchHeight Active Code
    if ($.fn.matchHeight) {
        $('.equal-height').matchHeight();
    }
    
    // ScrollUp Active Code
    if ($.fn.scrollUp) {
        $.scrollUp({
            scrollSpeed: 1500,
            scrollText: '<i class="pe-7s-angle-up" aria-hidden="true"></i>'
        });
    }

    // onePageNav Active Code
    if ($.fn.onePageNav) {
        $('#listingNav').onePageNav({
            currentClass: 'active',
            scrollSpeed: 2000,
            easing: 'easeOutQuad'
        });
    }

    // PreventDefault a Click
    $("a[href='#']").on('click', function ($) {
        $.preventDefault();
    });

    // wow Active Code
    if ($.fn.init) {
        new WOW().init();
    }

    var $window = $(window);

    // Sticky Active JS
    $window.on('scroll', function () {
        if ($window.scrollTop() > 0) {
            $('body').addClass('sticky');
        } else {
            $('body').removeClass('sticky');
        }
    });

    // Preloader Active Code
    $window.on('load', function () {
        $('#preloader').fadeOut('slow', function () {
            $(this).remove();
        });
    });

})(jQuery);


                            // LOG IN BUTTON
// LOG IN (https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_login_form_modal)
// This part was updated throught this link

// Get the modal
var modal = document.getElementById('id01');
var modalTwo = document.getElementById('regForm')

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}



                       // FILLTER TABLE
  // This part was updated throught this link http://jsfiddle.net/BracketsAcademy/13ko7qg5/#base

$(document).ready(function() {

    function addRemoveClass(theRows) {

        theRows.removeClass("odd even");
        theRows.filter(":odd").addClass("odd");
        theRows.filter(":even").addClass("even");
    }

    var rows = $("table#myTable tr:not(:first-child)");

    addRemoveClass(rows);


    $("#selectField").on("change", function() {

        var selected = this.value;

        if (selected != "All") {

            rows.filter("[position=" + selected + "]").show();
            rows.not("[position=" + selected + "]").hide();
            var visibleRows = rows.filter("[position=" + selected + "]");
            addRemoveClass(visibleRows);
        } else {

            rows.show();
            addRemoveClass(rows);

        }

    });
});

                      // Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

                       // POSTING FORM


  function GEEKFORGEEKS()                
{ 
  var name = document.forms["RegForm"]["Name"];      
  var email = document.forms["RegForm"]["EMail"]; 
  var phone = document.forms["RegForm"]["Telephone"]; 
  var what = document.forms["RegForm"]["Subject"]; 
  var password = document.forms["RegForm"]["Password"]; 
  var address = document.forms["RegForm"]["Address"]; 

  if (name.value == "")                
  { 
    window.alert("Please enter your name."); 
    name.focus(); 
    return false; 
  } 

  if (address.value == "")               
  { 
    window.alert("Please enter your address."); 
    name.focus(); 
    return false; 
  } 
  
  if (email.value == "")                 
  { 
    window.alert("Please enter a valid e-mail address."); 
    email.focus(); 
    return false; 
  } 

  if (email.value.indexOf("@", 0) < 0)         
  { 
    window.alert("Please enter a valid e-mail address."); 
    email.focus(); 
    return false; 
  } 

  if (email.value.indexOf(".", 0) < 0)         
  { 
    window.alert("Please enter a valid e-mail address."); 
    email.focus(); 
    return false; 
  } 

  if (phone.value == "")             
  { 
    window.alert("Please enter your telephone number."); 
    phone.focus(); 
    return false; 
  } 

  if (password.value == "")          
  { 
    window.alert("Please enter your password"); 
    password.focus(); 
    return flase; 
  } 

  if (what.selectedIndex < 1)        
  { 
    alert("Please enter your course."); 
    what.focus(); 
    return false; 
  } 

  return true; 
}
                                           
                                     // CONTACT FORM
  // this for was updated throught the link  https://codepen.io/ChynoDeluxe/pen/mJgZVz


 (function() {
  "use strict";
  var 
  input,
      container,
      //CSS CLASSES
      classSuccess = "success",
      classError = "error",
      //FORM VALIDATOR
      formValidator = {
        init: function() {
          this.cacheDom();
          this.bindEvents();
        },
        cacheDom: function() {
          //MAIN PARENT ELEMENT
          this.contactForm = document.getElementById("contactForm");
          //MAIN FORM ELEMENTS
          this.formHeader = document.querySelector("#formHeader h1");
          this.formBody = document.getElementById("formBody");
          this.inputContainer = document.getElementsByClassName("inputContainer");
          //USER INPUT ELEMENTS
          //INPUT FIELDS
          this.fields = {
            userName: document.getElementById("userName"),
            userEmail: document.getElementById("userEmail"),
            userMessage: document.getElementById("userMessage")
          };
          this.submitBtn = document.getElementById("submitBtn");
        },
        bindEvents: function() {
          var i;
          //RUN RULES ON SUBMIT BUTTON CLICK
          this.submitBtn.onclick = this.runRules.bind(this);
          //BIND EVENTS TO EACH INPUT FIELD
          for (i in this.fields) {
            if (this.fields.hasOwnProperty(i)) {
              //VARIABLES
              input = this.fields[i];
              container = input.parentElement;
              //RUN RULES WHEN INPUT HAS FOCUS
              input.onfocus = this.runRules.bind(this);
              //RESET ERRORS WHEN CONTAINER IS CLICKED
              container.onclick = this.resetErrors.bind(this, input);
            }
          }
        },
        runRules: function(evnt) {
          var target = evnt.target,
              type = evnt.type;
          //IF EVENT ON SUBMIT BUTTON
          if (target === this.submitBtn) {
            //PREVENT FORM SUBMITTION
            this.preventDefault(evnt);
            //IF INPUT HAS FOCUS
          } else if (type === "focus") {
            //RESET CLASSLIST
            this.resetClassList(target.parentElement);
            //RESET ERRORS
            this.resetErrors(target);
            return false;
          }
          //RESET CLASSLIST
          this.resetClassList();
          //CHECK FIELDS
          this.checkFields();
        },
        preventDefault: function(evnt) {
          //PREVENT DEFUALT
          evnt.preventDefault();
        },
        checkFields: function() {
          var i,
              validCount = 0,
              //EMAIL FILTER 
              filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
          //CYLCE THROUGH INPUTS
          for (i in this.fields) {
            if (this.fields.hasOwnProperty(i)) {
              input = this.fields[i];
              //CHECK IF FIELD IS EMPTY
              if (input.value === "") {
                //ADD ERROR CLASS
                this.addClass(input, classError);
                //CHECK IF EMAIL IS VALID
              } else if (i === "userEmail" && !filter.test(input.value)) {
                //ADD ERROR CLASS
                this.addClass(input, classError);
              } else {
                //FIELD IS VALID
                this.addClass(input, classSuccess);
                validCount += 1;
              }
            }
          }
          //IF ALL FEILDS ARE VALID
          if (validCount === 3) {
            //SUBMIT FORM
            this.submitForm();
          }
        },
        addClass: function(input, clss) {
          container = input.parentElement;
          //IF INPUT HAS ERROR
          if (clss === classError) {
            //SHOW ERROR MESSAGE
            this.errorMessage(input);
          }
          //ADD CLASS
          input.parentElement.classList.add(clss);
        },
        errorMessage: function(input) {
          var message;
          //IF USERNAME HAS ERROR
          if (input === this.fields.userName) {
            message = "Please enter your name";
            //ELSE IF USEREMAIL HAS ERROR
            } else if (input === this.fields.userEmail) {
            message = "Please enter a valid email";
            //ELSE IF USERMESSAGE HAS ERROR
          } else if (input === this.fields.userMessage) {
            message = "Please enter your message";
          }
          this.renderError(input, message);
        },
        renderError: function(input, message) {
          var html;
          //GET INPUT CONTAINER
          container = input.parentElement;
          //RENDER HTML
          html = document.createElement("div");
          html.setAttribute("class", "message");
          html.innerHTML = message;
          //IF MESSAGE ELEMENT DOESN'T EXIST
          if (!container.getElementsByClassName("message")[0]) {
            //INSERT MESSAGE TO INPUT CONTAINER
            container.insertBefore(html, container.firstElementChild);
          }
        },
        resetClassList: function(input) {
          var i;
          //IF TARGETING SPECIFIC INPUT
          if (input) {
            //GET INPUT CONTAINER
            container = input.parentElement;
            //REMOVE CLASSES
            container.classList.remove(classError, classSuccess);
            //FOCUS ON INPUT FIELD
            input.focus();
          } else {
            for (i in this.fields) {
              if (this.fields.hasOwnProperty(i)) {
                //REMOVE CLASSES FROM ALL FIELDS
                this.fields[i].parentElement.classList.remove(classError, classSuccess);
              }
            }
          }
        },
        resetErrors: function(input) {
          //GET INPUT CONTAINER
          container = input.parentElement;
          //IF CONTAINER CONTAINS ERROR
          if (container.classList.contains(classError)) {
            //RESET CLASSES
            this.resetClassList(input);
          }
        },
        submitForm: function() {
          var waitForAnimation;
          //ADD SUCCESS CLASS
          this.contactForm.classList.add(classSuccess);
          //WAIT FOR ANIMATION TO FINISH
          this.changeHeader("Sent Succesfully");
          //WAIT FOR ANIMATION TO FINISH
          setTimeout(this.changeHeader.bind(this, "Thank you for your message"), 1200);
        },
        changeHeader: function(text) {
          //CHANGE HEADER TEXT
          this.formHeader.innerHTML = text;
        }
      };
  //INITIATE FORM VALIDATOR
  formValidator.init();
}());


                                 