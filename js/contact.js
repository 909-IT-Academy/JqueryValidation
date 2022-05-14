$(document).ready(function () {
  // Wait for the DOM to be ready
  $(function () {
    // Initialize form validation on the registration form.
    // It has the name attribute "registration"
    $validator = $("form[name='contactForm']").validate({
      // Specify validation rules
      rules: {
        // The key name on the left side is the name attribute
        // of an input field. Validation rules are defined
        // on the right side        
        'fname': {
          required: true,
          minlength: 5,
          emptyCheck: true
        },
        'lname': {
          required: true,
          minlength: 5,
          emptyCheck: true
        },
        'cemail': {
          required: true,
          email: true,
        },
        'cphoneNumber': {
          required: true,
          digits: true,
        }
      },

      groups: {
        username: "fname lname",
      },

      messages: {

       'cemail': {
          required: 'Please enter your email.',
          email: 'Please enter a valid email address.',
        },
        'cphoneNumber': {
          required: "This is required.",
          digits: "Digits only",
        },

      },
      errorPlacement: function (error, element) {
        if (element.attr("name") == "fname" || element.attr("name") == "lname") {
          error.insertAfter("#lastname");
        } else {
          error.insertAfter(element);
        }
      },

      submitHandler: function (form) {

        console.log("test");


      },

    });

    jQuery.validator.addMethod('selectcheck', function (value) {
      return (value != '0');
    }, "Value required");

    jQuery.validator.addMethod("emptyCheck", function (value) {
      return ($.trim(value) != "");
    }, "Space are not allowed");

  });

})