setTimeout(function () {
  !(function ($) {
    "use strict";

    var MainApp = function () {
      (this.$body = $("body")),
        (this.$wrapper = $("#wrapper")),
        (this.$btnFullScreen = $("#btn-fullscreen")),
        (this.$leftMenuButton = $(".button-menu-mobile")),
        (this.$menuItem = $(".has_sub > a"));
    };

    (MainApp.prototype.intSlimscrollmenu = function () {
      $(".slimscroll-menu").slimscroll({
        height: "auto",
        position: "right",
        size: "7px",
        color: "#9ea5ab",
        wheelStep: 5,
        touchScrollStep: 50,
      });
    }),
      (MainApp.prototype.initSlimscroll = function () {
        $(".slimscroll").slimscroll({
          height: "auto",
          position: "right",
          size: "7px",
          color: "#9ea5ab",
          touchScrollStep: 50,
        });
      }),
      (MainApp.prototype.initMetisMenu = function () {
        //metis menu
        $("#side-menu").metisMenu();
      }),
      (MainApp.prototype.initLeftMenuCollapse = function () {
        // Left menu collapse
        $(".open-left").on("click", function (event) {
          event.preventDefault();
          $("body").toggleClass("enlarged");
        });
      }),
      (MainApp.prototype.initEnlarge = function () {
        if ($(window).width() < 1025) {
          $("body").addClass("enlarged");
        } else {
          if ($("body").data("keep-enlarged") != true)
            $("body").removeClass("enlarged");
        }
      }),
      (MainApp.prototype.initActiveMenu = function () {
        // === following js will activate the menu in left side bar based on url ====
        $("#sidebar-menu a").each(function () {
          var pageUrl = window.location.href.split(/[?#]/)[0];
          if (this.href == pageUrl) {
            $(this).addClass("mm-active");
            $(this).parent().addClass("mm-active"); // add active to li of the current link
            $(this).parent().parent().addClass("mm-show");
            $(this).parent().parent().prev().addClass("mm-active"); // add active class to an anchor
            $(this).parent().parent().parent().addClass("mm-active");
            $(this).parent().parent().parent().parent().addClass("mm-show"); // add active to li of the current link
            $(this)
              .parent()
              .parent()
              .parent()
              .parent()
              .parent()
              .addClass("mm-active");
          }
        });
      }),
      (MainApp.prototype.initComponents = function () {
        $('[data-toggle="tooltip"]').tooltip();
        $('[data-toggle="popover"]').popover();
      }),
      //full screen
      (MainApp.prototype.initFullScreen = function () {
        var $this = this;
        $this.$btnFullScreen.on("click", function (e) {
          e.preventDefault();

          if (
            !document.fullscreenElement &&
            /* alternative standard method */ !document.mozFullScreenElement &&
            !document.webkitFullscreenElement
          ) {
            // current working methods
            if (document.documentElement.requestFullscreen) {
              document.documentElement.requestFullscreen();
            } else if (document.documentElement.mozRequestFullScreen) {
              document.documentElement.mozRequestFullScreen();
            } else if (document.documentElement.webkitRequestFullscreen) {
              document.documentElement.webkitRequestFullscreen(
                Element.ALLOW_KEYBOARD_INPUT
              );
            }
          } else {
            if (document.cancelFullScreen) {
              document.cancelFullScreen();
            } else if (document.mozCancelFullScreen) {
              document.mozCancelFullScreen();
            } else if (document.webkitCancelFullScreen) {
              document.webkitCancelFullScreen();
            }
          }
        });
      }),
      (MainApp.prototype.init = function () {
        this.intSlimscrollmenu();
        this.initSlimscroll();
        this.initMetisMenu();
        this.initLeftMenuCollapse();
        this.initEnlarge();
        this.initActiveMenu();
        this.initComponents();
        this.initFullScreen();
        Waves.init();
      }),
      //init
      ($.MainApp = new MainApp()),
      ($.MainApp.Constructor = MainApp);
  })(window.jQuery),
    //initializing
    (function ($) {
      "use strict";
      $.MainApp.init();
    })(window.jQuery);
}, 1000);

// table search filter section start

(function (document) {
  "use strict";
  var LightTableFilter = (function (Arr) {
    var _input;
    function _onInputEvent(e) {
      _input = e.target;
      var tables = document.getElementsByClassName(
        _input.getAttribute("data-table")
      );
      Arr.forEach.call(tables, function (table) {
        Arr.forEach.call(table.tBodies, function (tbody) {
          Arr.forEach.call(tbody.rows, _filter);
        });
      });
    }
    function _filter(row) {
      var text = row.textContent.toLowerCase(),
        val = _input.value.toLowerCase();
      row.style.display = text.indexOf(val) === -1 ? "none" : "table-row";
    }
    return {
      init: function () {
        var inputs = document.getElementsByClassName("table-filter");
        Arr.forEach.call(inputs, function (input) {
          input.oninput = _onInputEvent;
        });
      },
    };
  })(Array.prototype);

  document.addEventListener("readystatechange", function () {
    if (document.readyState === "complete") {
      LightTableFilter.init();
    }
  });
})(document);
(function (document) {
  "use strict";
  var LightTableFilter = (function (Arr) {
    var _input;
    function _onInputEvent(e) {
      _input = e.target;
      var tables = document.getElementsByClassName(
        _input.getAttribute("data-table")
      );
      Arr.forEach.call(tables, function (table) {
        Arr.forEach.call(table.tBodies, function (tbody) {
          Arr.forEach.call(tbody.rows, _filter);
        });
      });
    }
    function _filter(row) {
      var text = row.textContent.toLowerCase(),
        val = _input.value.toLowerCase();
      row.style.display = text.indexOf(val) === -1 ? "none" : "table-row";
    }
    return {
      init: function () {
        var inputs = document.getElementsByClassName("table-filter");
        Arr.forEach.call(inputs, function (input) {
          input.oninput = _onInputEvent;
        });
      },
    };
  })(Array.prototype);

  document.addEventListener("readystatechange", function () {
    if (document.readyState === "complete") {
      LightTableFilter.init();
    }
  });
})(document);

// table search filter ended
$(document).ready(function () {
  $("#multiselect").multiselect({
    buttonWidth: "160px",
    includeSelectAllOption: true,
    nonSelectedText: "Select an Option",
  });
});

function getSelectedValues() {
  var selectedVal = $("#multiselect").val();
  for (var i = 0; i < selectedVal.length; i++) {
    if (window.CP.shouldStopExecution(0)) break;
    function innerFunc(i) {
      setTimeout(function () {
        location.href = selectedVal[i];
      }, i * 2000);
    }
    innerFunc(i);
  }
  window.CP.exitedLoop(0);
}
