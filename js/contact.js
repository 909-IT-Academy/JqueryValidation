$( document ).ready(function() {
  // Wait for the DOM to be ready
  $(function() {
    // Initialize form validation on the registration form.
    // It has the name attribute "registration"
    $validator = $("form[name='contactForm']").validate({
      // Specify validation rules
      rules: {
        // The key name on the left side is the name attribute
        // of an input field. Validation rules are defined
        // on the right side
         'cname' : {
            required : true,
            minlength: 5,
            emptyCheck : true                       
         },
        'cemail': {
           required: true,
           email: true,
         }
      },

      messages: {
         'cname' : {
            required : 'Please enter your name.',
            minlength : 'The minimum length should be 5.',
            emptyCheck : 'The feilds cannot be empty.'
         },
         'cemail': {
           required: 'Please enter your email.',
           email: 'Please enter a valid email address.',
         }    
      },

      submitHandler: function(form) {        

        console.log("test");


      }, 

    });

    jQuery.validator.addMethod('selectcheck', function (value) {
        return (value != '0');
    }, "Value required");

    jQuery.validator.addMethod("emptyCheck", function(value) { 
      return ($.trim(value) != "");
    }, "Space are not allowed");

  });

})