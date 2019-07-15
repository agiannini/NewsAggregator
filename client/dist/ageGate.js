const TODAY = new Date();
const AGE_LIMIT = 18;



// Notes:
document.addEventListener("DOMContentLoaded", () =>
{
//  var ageGateHTML = getHTML();
//  var bodyTag = document.getElementsByTagName('body')[0];
//  bodyTag.innerHTML += ageGateHTML;

  let monthsHTML = getMonths();
  let daysHTML = getDays();
  let yearsHTML = getYears();





//  var link = document.createElement('link');
  //link.setAttribute('rel', 'stylesheet');
  //link.type = 'text/css';
  //link.href = 'https://fonts.googleapis.com/css?family=Archivo+Black&display=swap';
  //document.head.appendChild(link);


  document.getElementById("months").innerHTML = monthsHTML;
  document.getElementById("days").innerHTML = daysHTML;
  document.getElementById("years").innerHTML = yearsHTML;

// For Testing
//  deleteCookie("isValid");

  if (getCookie("isValid") != "true") {
    $("#mainModal").modal({backdrop: "static", keyboard: false});
  }
});




// Purpose: To see if the given date fulfills the qualifications.
// Notes:   Gets Input and Checks Age, Adds Cookie if RememberMe is checked
function validate() {
  yearData = document.getElementById("years").value;
  monthData = document.getElementById("months").value;
  dayData = document.getElementById("days").value
  rememberMe = document.getElementById("rememberMe");

  if (TODAY.getFullYear() - yearData > AGE_LIMIT) {
    if (rememberMe.checked == true){
      makeCookie("isValid", "true");
    }
  $("#mainModal").modal("hide");
  }

  else if (TODAY.getFullYear() - yearData == AGE_LIMIT && TODAY.getMonth() > monthData || TODAY.getFullYear() - yearData == AGE_LIMIT && TODAY.getMonth() == monthData && dayData <= TODAY.getDate()) {
    if (rememberMe.checked == true){
      makeCookie("isValid", "true");
    }
    $("#mainModal").modal("hide");
  }

  else {
    $('errorModal').modal("show");
    alert("YOU ARE NOT OLD ENOUGH TO ENTER!");
    document.location.reload();
  }
}






// Purpose: to generate html for the years selector
// Returns: a string with html for the last 100 years
function getYears() {
  yearsHTML = ""
  for (var i = TODAY.getFullYear(); i > TODAY.getFullYear() - 100; --i) {
    yearsHTML += "<option value='" + i + "'>"+i+"</option>";
  }
  return yearsHTML;
}



// Purpose:   To generate html for the months dataList
// returns:   A string with the html.
// Notes:     Option tags display month name, but have a numerical value
function getMonths() {
  let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  let monthsHTML = ""
  for (var i = 0; i < months.length; ++i) {
    monthsHTML += "<option value='" +i+"'>"+ months[i] +"</option>";
  }
  return monthsHTML;
}




// Purpose:   To generate html for the days dataList
// Returns:   A string with the html
function getDays() {
  let daysHTML = "";
  for (var i = 0; i <= 30; ++i) {
    daysHTML += "<option value='" + (i+1) + "'>"+(i+1)+"</option>";
  }
  return daysHTML;
}




// Purpose:   To delete the cookie with the given name.
// Notes:     Sets expirations to the past.
function deleteCookie(name) {
  var value = getCookie(name);
  document.cookie = name + "=" + value + "; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}




// Purpose:     To return the value of the given cookies
// Returns:     The value as a string if present, empty string if not.
function getCookie(name) {
  name = name + "="
  var decoded = decodeURIComponent(document.cookie);
  var split = decoded.split(";");

  for (var i = 0; i < split.length; ++i) {
    var result = split[i];
    while (result.charAt(0) == " ") { // Discards leading whitespace
      result = result.substring(1);
    }
    if (result.indexOf(name) == 0) { // returns value substring is present
      return result.substring(name.length, result.length)
    }
  }
  return "" // Empty String if not present
}




// Purpose:   This function creates a cookie with the given parameters
// Notes:     Cookies are set to expire 10 days from creation
function makeCookie(name, value) {
  var date = new Date();
  date.setTime(date.getTime() + 864000000); //current time + 10 days
  var expires = "expires=" + date.toUTCString();
  document.cookie = name + "=" + value + ";" + expires + ";path=/";
}






// Purpose: Adds age-gate HTMl to the body tag
// Notes:
function getHTML(){
var x = '\
<div class="modal" style="background-image: url(NYDC_bg.jpg);" id="mainModal" tabindex="-1" role="dialog">\
    <div class="modal-dialog" role="document">\
      <div class="modal-content">\
        <div class="modal-header">\
          <div class="text-center mx-auto">\
            <img class="rounded" src="NYDC_logo.jpg"></img>\
          </div>\
        </div>\
        <div class="modal-body" width=100%>\
        <p class="text-center" style="font-family: Archivo Black, sans-serif; font-size: 4vw;">Welcome</p>\
        <p class="text-center" style="font-family: Archivo Black, sans-serif; font-size:  2vw;">Please Verify Your Age</p>\
        </div>\
        <form>\
          <div class="container">\
            <div class="row">\
              <div class="col-3 mx-auto">\
                <select id="months" class="form-control form-control-md">\
                </select>\
              </div>\
              <div class="col-3 mx-auto px-2">\
                <select id="days" class="form-control form-control-md">\
                </select>\
              </div>\
              <div class="col-3 mx-auto">\
                <select id="years" class="form-control form-control-md">\
                </select>\
              </div>\
            </div>\
        </form>\
        <div class="container">\
          <div class="row">\
            <div class="col text-center mt-3 mb-3">\
              <input class="text-center" type="checkbox" id="rememberMe"> Remember Me\
            </div>\
          </div>\
        </div>\
        <button type="button" class="btn btn-primary btn-block" onclick="validate()">Enter</button>\
        <div class="modal-footer">\
          <div class="mx-auto">\
            <a href="http://www.google.com" style="text-align: center;">I\'m Not Of Legal Drinking Age</a>\
          </div>\
        </div>\
      </div>\
    </div> \
  </div> \
  </div>';
  return x;
}
