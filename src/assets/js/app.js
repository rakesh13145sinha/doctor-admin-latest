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
  $("#test").CreateMultiCheckBox({
    width: "230px",
    defaultText: "Select Below",
    height: "250px",
  });
});

$(document).ready(function () {
  $(document).on("click", ".MultiCheckBox", function () {
    var detail = $(this).next();
    detail.show();
  });

  $(document).on("click", ".MultiCheckBoxDetailHeader input", function (e) {
    e.stopPropagation();
    var hc = $(this).prop("checked");
    $(this)
      .closest(".MultiCheckBoxDetail")
      .find(".MultiCheckBoxDetailBody input")
      .prop("checked", hc);
    $(this).closest(".MultiCheckBoxDetail").next().UpdateSelect();
  });

  $(document).on("click", ".MultiCheckBoxDetailHeader", function (e) {
    var inp = $(this).find("input");
    var chk = inp.prop("checked");
    inp.prop("checked", !chk);
    $(this)
      .closest(".MultiCheckBoxDetail")
      .find(".MultiCheckBoxDetailBody input")
      .prop("checked", !chk);
    $(this).closest(".MultiCheckBoxDetail").next().UpdateSelect();
  });

  $(document).on("click", ".MultiCheckBoxDetail .cont input", function (e) {
    e.stopPropagation();
    $(this).closest(".MultiCheckBoxDetail").next().UpdateSelect();

    var val =
      $(".MultiCheckBoxDetailBody input:checked").length ==
      $(".MultiCheckBoxDetailBody input").length;
    $(".MultiCheckBoxDetailHeader input").prop("checked", val);
  });

  $(document).on("click", ".MultiCheckBoxDetail .cont", function (e) {
    var inp = $(this).find("input");
    var chk = inp.prop("checked");
    inp.prop("checked", !chk);

    var multiCheckBoxDetail = $(this).closest(".MultiCheckBoxDetail");
    var multiCheckBoxDetailBody = $(this).closest(".MultiCheckBoxDetailBody");
    multiCheckBoxDetail.next().UpdateSelect();

    var val =
      $(".MultiCheckBoxDetailBody input:checked").length ==
      $(".MultiCheckBoxDetailBody input").length;
    $(".MultiCheckBoxDetailHeader input").prop("checked", val);
  });

  $(document).mouseup(function (e) {
    var container = $(".MultiCheckBoxDetail");
    if (!container.is(e.target) && container.has(e.target).length === 0) {
      container.hide();
    }
  });
});

var defaultMultiCheckBoxOption = {
  width: "220px",
  defaultText: "Select Below",
  height: "200px",
};

jQuery.fn.extend({
  CreateMultiCheckBox: function (options) {
    var localOption = {};
    localOption.width =
      options != null && options.width != null && options.width != undefined
        ? options.width
        : defaultMultiCheckBoxOption.width;
    localOption.defaultText =
      options != null &&
      options.defaultText != null &&
      options.defaultText != undefined
        ? options.defaultText
        : defaultMultiCheckBoxOption.defaultText;
    localOption.height =
      options != null && options.height != null && options.height != undefined
        ? options.height
        : defaultMultiCheckBoxOption.height;

    this.hide();
    this.attr("multiple", "multiple");
    var divSel = $(
      "<div class='MultiCheckBox'>" +
        localOption.defaultText +
        "<span class='k-icon k-i-arrow-60-down'><svg aria-hidden='true' focusable='false' data-prefix='fas' data-icon='sort-down' role='img' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512' class='svg-inline--fa fa-sort-down fa-w-10 fa-2x'><path fill='currentColor' d='M41 288h238c21.4 0 32.1 25.9 17 41L177 448c-9.4 9.4-24.6 9.4-33.9 0L24 329c-15.1-15.1-4.4-41 17-41z' class=''></path></svg></span></div>"
    ).insertBefore(this);
    divSel.css({ width: localOption.width });

    var detail = $(
      "<div class='MultiCheckBoxDetail'><div class='MultiCheckBoxDetailHeader'><input type='checkbox' class='mulinput' value='-1982' /><div>Select All</div></div><div class='MultiCheckBoxDetailBody'></div></div>"
    ).insertAfter(divSel);
    detail.css({
      width: parseInt(options.width) + 10,
      "max-height": localOption.height,
    });
    var multiCheckBoxDetailBody = detail.find(".MultiCheckBoxDetailBody");

    this.find("option").each(function () {
      var val = $(this).attr("value");

      if (val == undefined) val = "";

      multiCheckBoxDetailBody.append(
        "<div class='cont'><div><input type='checkbox' class='mulinput' value='" +
          val +
          "' /></div><div>" +
          $(this).text() +
          "</div></div>"
      );
    });

    multiCheckBoxDetailBody.css(
      "max-height",
      parseInt($(".MultiCheckBoxDetail").css("max-height")) - 28 + "px"
    );
  },
  UpdateSelect: function () {
    var arr = [];

    this.prev()
      .find(".mulinput:checked")
      .each(function () {
        arr.push($(this).val());
      });

    this.val(arr);
  },
});
