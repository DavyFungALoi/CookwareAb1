// ensuring general selectors don't override things outside the scope.

document.getElementsByTagName("body")[0].classList.add("A_01");

// ****************************
//   UTILITY - fetch

var HttpClient = function () {
  this.get = function (
    aUrl,
    insertionPoint,
    aCallback,
    insertAfter = false,
    cb = function () {
      console.log("executed");
    }
  ) {
    var anHttpRequest = new XMLHttpRequest();
    anHttpRequest.onreadystatechange = function () {
      if (anHttpRequest.readyState == 4 && anHttpRequest.status == 200) {
        var cbValue = aCallback(anHttpRequest.response);
        // console.log("response node", responseNode);
        if (cbValue) {
          if (insertAfter) {
            moveAfter(cbValue, insertionPoint);
          } else {
            moveBefore(cbValue, insertionPoint);
          }
        }
        cb();
      }
    };

    anHttpRequest.responseType = "document";
    anHttpRequest.open("GET", aUrl, true);
    anHttpRequest.send();
  };
};

// UTILS

const mainContainer = document.querySelector(
  "#maincontent > div.columns > div"
);
