// Use iife
(function ()
{
  // The form
  var form = document.getElementById("newPwd");
  // Password input
  var password = document.getElementById("pwd");
  // Submit button
  var submit = document.getElementById("submit");

  // Has form been submitted?
  var submitted = false;

  // disable submit button
  submit.disabled = true;
  // Style submit button
  submit.className = "disabled";

  // On input: Check whether or not to enable the submit button
  addEvent(password, "input", function(e)
  {
    // Target of event
    var target =  e.target || e.srcElement;
    // Set disabled property
    submit.disabled = submitted || !target.value;
    // If form has been submitted or pwd has no value set to css to disabled
    submit.className = (submitted || !target.value) ? "disabled" : "enabled";
  });
    // On submit: Disable the form so it cannot be submitted again
    addEvent(form, "submit", function(e)
    {
      // If disabled OR sent
      if (submit.disabled || submitted)
      {
        // Stop form submission
        e.preventDefault();
        // Stop processing function
        return;
      }
      // Otherwise continue
      // Disable submit button
      submit.disabled = true;
      // Update submitted var
      submitted = true;
      // Update style
      submit.className = "disabled";

      // Stop form submitting
      e.preventDefault();
      // Show the text
      alert("Password is " + password.value);
  });
}());
