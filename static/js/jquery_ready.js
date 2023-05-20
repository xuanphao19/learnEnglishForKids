var hs = {};
hs.graphicsDir = "https://data.tienganh123.com/static/js/highslide/graphics/";
hs.outlineType = "rounded-white";
hs.wrapperClassName = "draggable-header";
/**libs**/
var l = window.location;
var base_urlroot = l.protocol + "//" + l.host + "/";
var prev_element = null;
var ubanPlayer_instance = null; //Singleton ubanPlay;
var isIOS = false;
var domain_curr = window.location.protocol + "//" + location.host;

if (location.hash == "#_=_" || location.href.slice(-1) == "#_=_") {
  removeHash();
}

function removeHash() {
  var scrollV,
    scrollH,
    loc = window.location;
  if ("replaceState" in history) {
    history.replaceState("", document.title, loc.pathname + loc.search);
  } else {
    // Prevent scrolling by storing the page's current scroll offset
    scrollV = document.body.scrollTop;
    scrollH = document.body.scrollLeft;

    loc.hash = "";

    // Restore the scroll offset, should be flicker free
    document.body.scrollTop = scrollV;
    document.body.scrollLeft = scrollH;
  }
}

function replace_http(str) {
  if (str.indexOf("http://www.tienganh123.com") >= 0) {
    str = str.replace(/http:\/\/www.tienganh123.com/g, "");
  }
  if (str.indexOf("http://tienganh123.com") >= 0) {
    str = str.replace(/http:\/\/tienganh123.com/g, "");
  }
  if (str.indexOf("http://") >= 0) {
    str = str.replace(/http:\/\//g, "//");
  }
  return str;
}
function is_firefox() {
  var ua = navigator.userAgent.toLowerCase();
  if (ua.indexOf("firefox") >= 0) {
    return true;
  } else {
    return false;
  }
}
$(document).ready(function () {
  $("body").mouseup(function () {
    $('a[onclick="doCloseVdict();return false;"]').triggerHandler("click");
  });
  //Global
  var path = location.pathname;
  $("input[type=image]").css({ border: "none" });
  var obj = new Object();
  obj.margin_left = null;
  obj.margin_right = null;
  obj.width_bd = null;
  obj.heaight = null;
  obj.ac = null;

  obj.margin = function () {
    var width_bd = $("body").width();
    var margin = 100 - (1000 * 100) / width_bd;
    obj.margin_left = Math.round(margin / 2);
    obj.margin_right = obj.margin_left;
    obj.width_bd = width_bd;

    $("#contents").css("left", obj.margin_left + "%");
    $("#contents").css("right", obj.margin_right + "%");
  };

  obj.strpos = function (haystack, needle, offset) {
    var i = (haystack + "").indexOf(needle, offset || 0);
    return i === -1 ? false : i;
  };

  obj.descript_input = function (field, text) {
    $(field).click(function () {
      if ($(this).val() == "" || $(this).val() == text) $(this).val("");
    });
    $(field).blur(function () {
      if ($(this).val() == "") $(this).val(text);
    });
  };

  //obj.margin()
  /*window.onresize = function() {
    obj.margin()
    }*/

  $(".menus ul li:first img").hover(
    function () {
      $(this).attr(
        "src",
        "https://data.tienganh123.com/images/home/bg_menu_left.png"
      );
    },
    function () {
      $(this).attr(
        "src",
        "https://data.tienganh123.com/images/home/bg_menu_left_hover.png"
      );
    }
  );

  //Find active menu current
  $(".menus ul li[title]").each(function () {
    //Active menu has reload
    if ($(this).find("a:first-child").attr("href") == l) {
      $(".home a").addClass("active_home");
      $(this).addClass("hover_mn_new");
      $(this).find("div[id]").html("<div class='arrow'></div>");
    } else {
      $(this)
        .find("a")
        .each(function () {
          if ($(this).attr("href") == l) {
            $(".home a").addClass("active_home");
            if (
              $(this).parent().parent().parent().parent().attr("rel") == "sub_3"
            )
              var root = $(this)
                .parent()
                .parent()
                .parent()
                .parent()
                .parent()
                .parent()
                .parent()
                .parent();
            else
              var root = $(this).parent().parent().parent().parent().parent();
            root.addClass("hover_mn_new");
            root.find("div[id]").html("<div class='arrow'></div>");
          }
        });
    }
    if (obj.strpos($(this).attr("class"), "hover_mn_new") != 0) {
      $(this).attr("ac", "true");
      obj.ac = "exits_current";
      $(".home a").addClass("active_home");
      $(this).find("div[id]").html("<div class='arrow'></div>");
    }
  });

  var height_defauls;
  $(".menus ul li[title]").hover(
    function () {
      height_defauls = $(this).find("div:first").height();
      $("li[rel=sub_3]")
        .removeClass("acti_sub3")
        .parent()
        .parent()
        .parent()
        .css({ width: "210px" });
      $(".menus ul li[title]").removeClass("hover_mn_new");
      $(".home a").addClass("active_home");
      $(this).addClass("hover_mn_new");
      $(this).find("div[id=arrow]").html("");
      $(".menus ul li[ac=true]").find("div[id]").html("");
      //Them chi muc
      $(this).find("div[id=arrow]").html("<div class='arrow'></div>");
      var sub = $(this).find("div[class='sub_mn shadow']");
      sub.show().stop();
    },
    function () {
      $(this).find("div:first").css("height", height_defauls);
      $(this).find("div[id=arrow]").html("");
      $(".menus ul li[ac=true]").find("div[id]").html("");
      if (obj.ac != null) {
        $(this).removeClass("hover_mn_new");
        $(".menus ul li[ac=true]").addClass("hover_mn_new");
        $(".menus ul li[ac=true]")
          .find("div[id]")
          .html("<div class='arrow'></div>");
      } else {
        $(".home a").removeClass("active_home");
        $(this).removeClass("hover_mn_new");
      }
      $(this).find("div[class='sub_mn shadow']").hide().stop();
    }
  );
  $(".col_sub li[rel=sub_2]").hover(function () {
    $(".sub_3").hide();
    $("li[rel=sub_3]").removeClass("acti_sub3");
    $(this)
      .parent()
      .parent()
      .parent()
      .stop()
      .animate(
        { width: "210px", height: height_defauls, "margin-left": 0 },
        80
      );
  });
  $(".col_sub li[rel=sub_3]").hover(function () {
    $(this).addClass("acti_sub3");
    $(this).find("div").show();
    var height_sub3 = $(this).find("div").height();
    var rSub3 = $(this).parent().parent().parent();
    if (height_sub3 > height_defauls) {
      rSub3.stop().animate(
        {
          width: rSub3.attr("w"),
          height: height_sub3 + 30,
          "margin-left": -91,
        },
        80
      );
    } else {
      if (rSub3.attr("s") == "true")
        rSub3
          .stop()
          .animate({ width: rSub3.attr("w"), "margin-left": -91 }, 80);
      else rSub3.stop().animate({ width: rSub3.attr("w") }, 80);
    }
  });
  $(
    ".col_sub li:last-child,.sub_mn div:last-child,.des_one li:last-child,.new4f li:last-child,.overview li:last-child,.nano .content li:last-child,.lik_baihoc_new div.itemLamBai:last-child,.hld2_tch_left div:last-child"
  ).addClass("last_des");

  //scrollbar
  $(".nano").nanoScroller();
  $(document).ajaxComplete(function () {
    $(".nano").nanoScroller();
    $(
      ".col_sub li:last-child,.sub_mn div:last-child,.des_one li:last-child,.new4f li:last-child,.overview li:last-child,.nano .content li:last-child"
    ).addClass("last_des");
  });
  $(".kids li a img").hover(
    function () {
      var alt = $(this).attr("alt");
      $(this).attr(
        "src",
        "https://data.tienganh123.com/images/home/kids_level" +
          alt +
          "_icon_hover.jpg"
      );
    },
    function () {
      var alt = $(this).attr("alt");
      $(this).attr(
        "src",
        "https://data.tienganh123.com/images/home/kids_level" +
          alt +
          "_icon_normal.jpg"
      );
    }
  );

  $(".class li a img").hover(
    function () {
      var alt = $(this).attr("alt");
      $(this).attr(
        "src",
        "https://data.tienganh123.com/images/home/lop" + alt + "_hover.jpg"
      );
    },
    function () {
      var alt = $(this).attr("alt");
      $(this).attr(
        "src",
        "https://data.tienganh123.com/images/home/lop" + alt + "_normal.jpg"
      );
    }
  );
  $(".des_two ul li").hover(
    function () {
      var alt = $(this).find("div[alt]").attr("alt");
      $(this)
        .find("div[alt]")
        .css({
          background:
            "url(/images/home/box_" + alt + "_hover.jpg) 0 0 no-repeat",
        });
      $(this).find("a").css("color", "#CD6C03");
    },
    function () {
      var alt = $(this).find("div[alt]").attr("alt");
      $(this)
        .find("div[alt]")
        .css({
          background: "url(/images/home/box_" + alt + ".jpg) 0 0 no-repeat",
        });
      $(this).find("a").css("color", "#474646");
    }
  );

  $(".info_cont_one ul li").hover(
    function () {
      $(this).css({
        background:
          "url(https://data.tienganh123.com/images/home/n1_hover.jpg) center left no-repeat",
      });
    },
    function () {
      $(this).css({
        background:
          "url(https://data.tienganh123.com/images/home/n1_normal.jpg) center left no-repeat",
      });
    }
  );

  var h;
  var s;
  $(".yt li").hover(
    function () {
      h = $(this).find("img").attr("hover");
      s = $(this).find("img").attr("src");
      $(this).find("img").attr("src", h);
      $(this).find("a").css("color", "#CD6C03");
    },
    function () {
      $(this).find("img").attr("src", s);
      $(this).find("a").css("color", "#474646");
    }
  );

  $(".share a").hover(
    function () {
      h = $(this).find("img").attr("hover");
      s = $(this).find("img").attr("src");
      $(this).find("img").attr("src", h);
    },
    function () {
      $(this).find("img").attr("src", s);
    }
  );

  obj.descript_input(".input_search", "Tìm kiếm bài học");
  obj.descript_input(".input_reg_news", "Email đăng ký nhận bài học mới");
  obj.descript_input(".pne_input_search", "Tìm kiếm bạn bè");
  obj.descript_input("#txtUser", "Tên đăng nhập");
  //obj.descript_input("#txtPass","Mật khẩu")
  obj.descript_input("#sendcm", "Nhập nội dung phản hồi...");
  //obj.descript_input("#res_name","Họ và tên")
  //obj.descript_input("#username","tienganh123")
  //obj.descript_input("#password","ZnNkcm")
  //obj.descript_input("#repassword","ZnNkcm")
  //obj.descript_input("#res_email","dangky@beonline.com.vn")
  //obj.descript_input("#code","Mã xác nhận")
  obj.descript_input("#nt_gt_box_r_input", "Nhập nick người giới thiệu");
  obj.descript_input("#vipcode", "Nhập mã số nạp thẻ");
  obj.descript_input(".sendbl", "Lời bình...");
  obj.descript_input("#addnote", "Nội dung...");
  obj.descript_input(
    "#pr_post_wall",
    "Nhập nội dung... (Nội dung ít nhất 10 kí tự)"
  );
  //obj.descript_input("#sendcms","Nhập nội dung phản hồi... (Bạn chỉ có 1 lần đăng phản hồi cho bài học này | Nội dung phản hồi ít nhất 10 kí tự)")

  //Check focus form login top
  $("#txtUser").keyup(function () {
    $(this).removeClass("default_input");
  });
  $("#txtUser").blur(function () {
    if ($(this).val() == "Tên đăng nhập") $(this).addClass("default_input");
  });
  $("#fakepassword").focus(function () {
    {
      $("#fakepassword").hide();
      $("#txtPass").show();
      $("#txtPass").focus();
    }
  });
  $("#txtPass").blur(function () {
    if ($("#txtPass").val() == "") {
      $("#txtPass").hide();
      $("#fakepassword").show();
    }
  });
  //Back Top
  $("#contents").append("<div title='Trở lên trên' id='tops'>Top</div>");

  $(window).scroll(function () {
    var top =
      (document.documentElement && document.documentElement.scrollTop) ||
      document.body.scrollTop;
    if (top != 0) {
      $("#tops").fadeIn();
    } else $("#tops").fadeOut();
  });
  $("#tops").live("click", function () {
    $("html, body").animate({ scrollTop: 0 }, 800);
  });

  //Seting No no_arown
  $(".no_arown").hover(function () {
    $(this).find("div").css("display", "none");
  });
  //Show-Close comment

  var textOld;

  $("a.replay").live("click", function () {
    var i;
    $(".content_hoidapnhanh li[class=ques] a[id]").each(function () {
      if ($(this).text() == "Ẩn") {
        $(this)
          .html(textOld)
          .css({ padding: "5px 20px 5px 7px" })
          .find("b")
          .css("color", "#474646");
        i = $(this).attr("id");
      }
    });
    $(".info_replay").css("visibility", "hidden");
    var id = $(this).attr("id");

    if ($(this).text() == "Ẩn") {
      //$("div#show_"+ id).hide()
      var res = id.split("_");
      numrlNew = $("." + res[1]).attr("alt");
      if (numrlNew === undefined) {
        numrlNew = 0;
      }
      var textOld =
        '<span class="blue1">Trả lời : </span><b>' + numrlNew + "</b>";
      $("div#show_" + id).css("visibility", "hidden");
      $(this)
        .html(textOld)
        .css({ padding: "5px 20px 5px 7px" })
        .find("b")
        .css("color", "#474646");
    } else {
      if ($(this).attr("id") != i) {
        //$("div#show_"+ id).show()
        $("div#show_" + id).css("visibility", "visible");
        textOld = $(this).html();
        $(this).text("Ẩn").css({ padding: "5px 31px", color: "#007F9F" });
      }
    }
    //var pos = $(this).offset()
    //$('html, body').animate({scrollTop:pos.top - $("div#show_"+ id).height()/2},800);
    // var _id = $(this).attr("rel");
    // $(".content"+_id).focus();
    // return false;
  });

  $("input#hiden_form_comment").live("click", function () {
    //$(".info_replay").css("display","none")
    $(".info_replay").css("visibility", "hidden");
    var id = $(this).attr("alt");
    var res = id.split("_");
    numrlNew = $("." + res[1]).attr("alt");
    var textOld =
      '<span class="blue1">Trả lời : </span><b>' + numrlNew + "</b>";
    $(".ques a[id=" + id + "]")
      .html(textOld)
      .css({ padding: "5px 20px 5px 7px" })
      .find("b")
      .css("color", "#474646");
  });

  //Back Top
  $("#tops").hover(
    function () {
      $(this).css(
        "background",
        "url(//data.tienganh123.com/images/v2/home/img_homepage.png) no-repeat scroll -220px -455px transparent"
      );
    },
    function () {
      $(this).css(
        "background",
        "url(//data.tienganh123.com/images/v2/home/img_homepage.png) no-repeat scroll -170px -455px transparent"
      );
    }
  );

  //Menu Cus Login
  $(".vbv2_root a").hover(function () {
    $(".menu_cus").show();
  });
  $(".cus_cen li").each(function () {
    var d = $(this).find("div");
    var alt = d.attr("class");
    d.css({
      background:
        "url(https://data.tienganh123.com/images/home/" +
        alt +
        ".png) 0 5px no-repeat",
    });
  });
  $(".cus_cen li").live("hover", function (event) {
    if (event.type == "mouseenter") {
      var d = $(this).find("div");
      var alt = d.attr("class");
      d.find("a").css({ color: "#CD6C03" });
      d.css({
        background:
          "url(https://data.tienganh123.com/images/home/" +
          alt +
          "_hover.png) 0 5px no-repeat",
      });
    } else {
      var d = $(this).find("div");
      var alt = d.attr("class");
      d.find("a").css({ color: "#474646", "font-weight": "normal" });
      d.css({
        background:
          "url(https://data.tienganh123.com/images/home/" +
          alt +
          ".png) 0 5px no-repeat",
      });
    }
  });

  $("#hover_boxdt").live("hover", function (event) {
    if (event.type == "mouseenter") {
      $(".box_dt_fast").show();
      $(".box_dt_fast_logged_in").show();
    } else {
      $(".box_dt_fast").hide();
      $(".box_dt_fast_logged_in").hide();
    }
  });

  $(".details tr:even").css({ background: "#FBFBFB" });
  $("#CungTruongTrinh li:odd").css({ background: "#FBFBFB" });
  $(".lng_content li:odd").css({ background: "#eff8fa" });
  $(".ptl_content2 li:even").css("border-right", "5px solid #fff");
  $(".lng_content2 li:odd").css({ background: "#eff8fa" });
  $("ul.ptl_list_colgb li:odd").css("background", "#eff8fa");
  $(".bh_box2 ul li:odd").css("background", "#FBFBFB");
  $(".thanhtichs li:odd").css({ background: "#F2F2F2" });
  $(".hocquabaihat li:odd").css({
    background:
      "#FAFAFA url(/images/home/music_disk.jpg) no-repeat scroll 0 5px",
  });
  $(".history_cen_less_content:odd")
    .children()
    .css("background-color", "#fbfbfb");
  $(".to_unit:even").css({ background: "#fff" });
  //$("#rsHoiDapNhanh li:first-child").addClass("non_border")
  //Menu trang ca nhan
  $(".two li").each(function () {
    var id = $(this).attr("class");
    $(this).css({
      background:
        "#FAFAFA url(https://data.tienganh123.com/images/home/" +
        id +
        ".png) 5px 10px no-repeat",
    });
    if (id == "c_7") {
      $(this).find("a").css({ color: "#CD6C03", "font-weight": "bold" });
      $(this).css({
        background:
          "#FAFAFA url(https://data.tienganh123.com/images/home/" +
          id +
          "_hover.png) 5px 10px no-repeat",
      });
    }
  });
  $(".two li").hover(
    function () {
      var id = $(this).attr("class");
      $(this).find("a").css({ color: "#CD6C03", "font-weight": "normal" });
      if (id == "c_7") {
        $(this).find("a").css({ color: "#CD6C03", "font-weight": "bold" });
        $(this).css({
          background:
            "#FAFAFA url(https://data.tienganh123.com/images/home/" +
            id +
            "_hover.png) 5px 10px no-repeat",
        });
      }
      $(this).css({
        background:
          "#FAFAFA url(https://data.tienganh123.com/images/home/" +
          id +
          "_hover.png) 5px 10px no-repeat",
      });
    },
    function () {
      var id = $(this).attr("class");
      $(this).find("a").css({ color: "#268BA7", "font-weight": "normal" });
      $(this).css({
        background:
          "#FAFAFA url(https://data.tienganh123.com/images/home/" +
          id +
          ".png) 5px 10px no-repeat",
      });

      if (id == "c_7") {
        $(this).find("a").css({ color: "#CD6C03", "font-weight": "bold" });
        $(this).css({
          background:
            "#FAFAFA url(https://data.tienganh123.com/images/home/" +
            id +
            "_hover.png) 5px 10px no-repeat",
        });
      }
    }
  );
  //get Hoi Dap Nhanh
  $(".vbv2_next").live("click", function () {
    var curent = $(".pagging .vbv2_current").text();
    var limit = parseInt($(".pagging .vbv2_current").attr("limit"));
    var where = $(".pagging .vbv2_current").attr("alt");
    var params = {
      typeRedirect: "loadPageHoiDapNhanh",
      start: curent,
      end: limit,
      cus: where,
    };
    if (where == "QCus" || where == "QRelate") {
      $.post(base_urlroot + "ajax/hoidapnhanh", params, function (rs) {
        if (rs != "") {
          var curnew = parseInt(curent) + limit;
          $(".pagging .vbv2_current").text(curnew);
          $("#rsHoiDapNhanh").fadeOut("fast").fadeIn().html(rs);
          //$('div.scrollbar2').tinyscrollbar()
        }
      });
    } else {
      if (curent < 100) {
        $.post(base_urlroot + "ajax/hoidapnhanh", params, function (rs) {
          if (rs != "") {
            var curnew = parseInt(curent) + limit;
            $(".pagging .vbv2_current").text(curnew);
            $("#rsHoiDapNhanh").fadeOut("fast").fadeIn().html(rs);
            //$('div.scrollbar2').tinyscrollbar()
          }
        });
      }
    }
  });
  $(".vbv2_back").live("click", function () {
    var curent = $(".pagging .vbv2_current").text();
    var limit = parseInt($(".pagging .vbv2_current").attr("limit"));
    var where = $(".pagging .vbv2_current").attr("alt");
    if (curent > limit) {
      var curnew = parseInt(curent) - limit * 2;
      var params = {
        typeRedirect: "loadPageHoiDapNhanh",
        start: curnew,
        end: limit,
        cus: where,
      };
      $.post(base_urlroot + "ajax/hoidapnhanh", params, function (rs) {
        if (rs != "") {
          $(".pagging .vbv2_current").text(curnew + limit);
          $("#rsHoiDapNhanh").fadeOut("fast").fadeIn().html(rs);
          //$('div.scrollbar2').tinyscrollbar()
        }
      });
    }
  });
  //Send hoi dap
  //$(".ques_cre_bt").click(function(){
  $(".ques_cre_bt").live("click", function () {
    var textarea = $("#noidunghoidap");
    txtContent = textarea.val();
    if (txtContent.length < 10) {
      alert("Câu hỏi của bạn quá ngắn");
      return false;
    }
    var params = {
      SendHoiDap: "SendHoiDap",
      Contain: txtContent,
    };

    var err = false;
    /*
        if(check_spam(txtContent)){
            err = true;
            alert('Câu hỏi của bạn có dấu hiệu spam.');
        }*/

    if (check_bad_word(txtContent)) {
      err = true;
      alert("Câu hỏi của bạn chứa từ không được phép.");
    }
    if (err == true) {
      $.post(base_urlroot + "ajax/hoidapnhanh/hd_spam", {}, function (rs) {});
    } else {
      $.post(base_urlroot + "ajax/hoidapnhanh", params, function (rs) {
        if (IsJsonString(rs)) {
          rs = jQuery.parseJSON(rs);
          if (rs.type == "error") {
            textarea.focus().select();
            $(".error").fadeIn().html(rs.mess);
          } else if (rs.type == "success") {
            update_client_msg(txtContent);
            textarea.val("");
            //$(".error").fadeIn().fadeOut(3000).html(rs.mess)
            $(".ques_cre_bt").hide();
            $("#msg_gui").show();
            var _set = $("#rsHoiDapNhanh li.ques");
            $.get("/ajax/hoidapnhanh/load_faq", { id: rs.id }).done(function (
              _data
            ) {
              _set.each(function (index, element) {
                console.log("index:" + index);
                if (index >= 7) {
                  $(this).hide();
                }
              });
              $("#rsHoiDapNhanh").prepend(_data);
              $("#no_question_hd,.error").hide();
              chat_home_socket.emit("add_new_faq", { rs: rs });
              setTimeout(function () {
                $(".ques_cre_bt").show();
                $("#msg_gui").hide();
              }, 15000);
            });
          }
        } else {
          textarea.val("");
          $("#rsHoiDapNhanh").prepend(rs);
          $("#no_question_hd,.error").hide();
        }
      });
    }
  });
  $("#send_form_comment").live("click", function () {
    var idComment = $(this).attr("class");
    var textarea = $(".content" + idComment);
    var content = textarea.val();
    var Numrl = $(this).attr("alt");

    var params = {
      id: idComment,
      SendReplay: "SendReplay",
      Contain: content,
      numtl: Numrl,
    };
    $(this).parent().parent().find(".nano").removeClass("faq_no_rep0");
    $(".error" + idComment).hide();
    var err = false;
    /*
        if(check_spam(content)){
            err = true;
            alert('Câu trả lời của bạn có dấu hiệu spam.');
        }*/

    if (check_bad_word(content)) {
      err = true;
      alert("Câu trả lời của bạn chứa từ không được phép.");
    }

    if (err == true) {
      $.post(base_urlroot + "ajax/hoidapnhanh/hd_spam", {}, function (rs) {});
    } else {
      update_client_msg(content);
      $.post(base_urlroot + "ajax/hoidapnhanh", params, function (rs) {
        if (IsJsonString(rs)) {
          rs = jQuery.parseJSON(rs);
          if (rs.type == "error") {
            textarea.focus().select();
            $(".error" + idComment)
              .fadeIn()
              .html(rs.mess);
          } else if (rs.type == "success") {
            textarea.val("");
            //$(".error" + idComment).fadeIn().fadeOut(3000).html(rs.mess)
            var numrlNew = parseInt(Numrl) + 1;
            var rlNew =
              '<span class="blue1">Trả lời : </span><b>' + numrlNew + "</b>";
            textOld = rlNew;
            chat_home_socket.emit("send_replay", {
              rs: rs,
              numrlNew: numrlNew,
              idComment: idComment,
            });
          }
        } else {
          textarea.val("");
          $("#show_id_" + idComment + " ul").prepend(rs);
          var numrlNew = parseInt(Numrl) + 1;
          var rlNew =
            '<span class="blue1">Trả lời : </span><b>' + numrlNew + "</b>";
          $("input#send_form_comment[class='" + idComment + "']").attr(
            "alt",
            numrlNew
          );
          textOld = rlNew;
          $("#content" + idComment).removeAttr("style");
          //$('div.scrollbar2').tinyscrollbar()
        }
      });
    }
  });

  //$("a#QCus").click(function(){
  $("a#QCus").live("click", function () {
    $(".error").fadeOut("fast");
    var type = $(this).attr("alt");
    var params = {
      type: type,
    };
    $.post(base_urlroot + "ajax/hoidapnhanh", params, function (rs) {
      if (IsJsonString(rs)) {
        rs = jQuery.parseJSON(rs);
        if (rs.type == "noquestion") {
          $(".error").fadeIn().html(rs.mess);
          $("#rsHoiDapNhanh").hide();
          $(".pagging").hide();
        }
      } else {
        $(".RsCus").fadeOut("fast").fadeIn().html(rs);
        //$('div.scrollbar2').tinyscrollbar()
      }
    });
  });
  //Xoa hoidap
  $(".delHoiDap").live("click", function () {
    if (confirm("Bạn chắc chắn xóa trả lời này ?")) {
      var idReplay = $(this).attr("id");
      var idHoiDap = $(this).attr("rel");
      var numcurren = $(
        "input#send_form_comment[class='" + idHoiDap + "']"
      ).attr("alt");

      var params = {
        id: idReplay,
        XoaHoiDap: "true",
        typed: "rl",
        idHoiDap: idHoiDap,
      };
      $.post(base_urlroot + "ajax/hoidapnhanh", params, function (rs) {
        rs = jQuery.parseJSON(rs);
        if (rs.success) {
          $("li#" + idReplay).remove();
          var rlNew =
            '<span class="blue1">Trả lời : </span><b>' +
            (parseInt(numcurren) - 1) +
            "</b>";
          textOld = rlNew;
          var num = parseInt(numcurren) - 1;
          $("input#send_form_comment[class='" + idHoiDap + "']").attr(
            "alt",
            num
          );
          chat_home_socket.emit("del_answer", {
            rs: rs,
            numrlNew: num,
            idReplay: idReplay,
            idHoiDap: idHoiDap,
          });
        } else $(".error" + idHoiDap).html("<span class='red'>Có lỗi không thể xóa trả lời này</span>");
      });
    } else return false;
  });
  $(".voteup").live("click", function () {
    var curent = $(this).text();
    var id = $(this).attr("id");
    var idHoiDap = $(this).attr("rel");
    var params = {
      curent: curent,
      id: id,
      voteup: "true",
    };
    $.post(base_urlroot + "ajax/hoidapnhanh", params, function (rs) {
      if (IsJsonString(rs)) {
        rs = jQuery.parseJSON(rs);
        if (rs.success) {
          $("a[up='" + id + "']").text(rs.success);
          chat_home_socket.emit("vote_up", { rs: rs, idReplay: id });
          $(".error" + idHoiDap)
            .fadeIn()
            .fadeOut(1000)
            .html("<span class='green'>Vote up success!</span>");
        } else
          $(".error" + idHoiDap).html("<span class='red'>Có lỗi sảy ra</span>");
      } else $(".error" + idHoiDap).html("<span class='red'>Bạn phải đăng nhập để có thể Vote</span>");
    });
  });
  $(".votedown").live("click", function () {
    var curent = $(this).text();
    var id = $(this).attr("id");
    var idHoiDap = $(this).attr("rel");
    var params = {
      curent: curent,
      id: id,
      votedown: "true",
    };
    $.post(base_urlroot + "ajax/hoidapnhanh", params, function (rs) {
      if (IsJsonString(rs)) {
        rs = jQuery.parseJSON(rs);
        if (rs.success) {
          $("a[down='" + id + "']").text(rs.success);
          chat_home_socket.emit("vote_down", { rs: rs, idReplay: id });
          $(".error" + idHoiDap)
            .fadeIn()
            .fadeOut(1000)
            .html("<span class='green'>Vote down success!</span>");
        } else $(".error" + idHoiDap).html(rs.error);
      } else $(".error" + idHoiDap).html("<span class='red'>Bạn phải đăng nhập để có thể Vote</span>");
    });
  });
  $(".DelhdRoot").live("click", function () {
    if (confirm("Bạn có chắc chắn muốn xóa hỏi đáp này ?")) {
      var idCh = $(this).attr("id");
      var params = {
        id: idCh,
        XoaHoiDap: "true",
        typed: "ch",
      };
      $.post(base_urlroot + "ajax/hoidapnhanh", params, function (rs) {
        rs = jQuery.parseJSON(rs);
        if (rs.success) {
          $("#ch" + idCh).remove();
          var _set = $("#rsHoiDapNhanh li:hidden");
          var len = _set.length;
          //console.log('len:'+len);
          _set.each(function (index, element) {
            if (index == 0) {
              $(this).show();
            }
          });
          chat_home_socket.emit("del_faq", { rs: rs, idCh: idCh });
        }
      });
    } else return false;
  });
  $(".setSpam").live("click", function () {
    if (confirm("Áp dụng Spam cho tài khoản này ?")) {
      var userId = $(this).attr("rel");
      var hid = $(this).attr("val");
      var params = {
        idUser: userId,
        id: hid,
        Spam: "true",
        typed: "ch",
      };
      $(this).parent().parent().find("span.font_weight").css({
        "border-color": "#FF0000",
        "border-width": "2px",
        "border-style": "solid",
      });
      $.post(base_urlroot + "ajax/hoidapnhanh", params, function (rs) {
        var obj = jQuery.parseJSON(rs);
        if (obj.num > 0) {
          $("span#rscp" + userId).text(obj.num);
          capture(obj);
        }
      });
    } else return false;
  });
  $(".actiHD").live("click", function () {
    if (confirm("Duyệt câu hỏi này được phép hiển thị ra bên ngoài ?")) {
      var IdQs = $(this).attr("rel");
      var params = {
        AlowQs: IdQs,
      };
      $.post(base_urlroot + "ajax/hoidapnhanh", params, function () {
        $(".actiHD[rel=" + IdQs + "]").html(
          '&nbsp;<img src="//data.tienganh123.com/images/v2/home/accept-icon.png">'
        );
      });
    } else return false;
  });
  //TA Nguoi lon - Bai hoc
  $(".bh_box").hover(function () {
    $(this).children(".bh_box2").toggle();
  });

  $(".bh_box").hover(
    function () {
      $(this).addClass("bh_box_hover");
      $(this).children(".bh_box_title").addClass("bh_box_title_hover");
      $(this).children(".nl_box_img").addClass("bh_bg_img_hover");
    },
    function () {
      $(this).removeClass("bh_box_hover");
      $(this).children(".bh_box_title").removeClass("bh_box_title_hover");
      $(this).children(".nl_box_img").removeClass("bh_bg_img_hover");
    }
  );
  //Bieu tuong cam xuc
  $("#emt_icon").bind("click", function () {
    $(".box_smile").stop().toggle();
  });
  $(document).mouseup(function () {
    $(".box_smile").mouseup(function () {
      return false;
    });
    $(".box_smile").hide();
  });

  $(".repass").click(function () {
    if ($(this).attr("alt") != "true") {
      $(this).removeClass("checkRePass");
      $(this).attr("alt", "true");
    } else {
      $(this).addClass("checkRePass");
      $(this).addClass("repass");
      $(this).attr("alt", "false");
    }
  });

  $("#btnSubmit").hover(
    function () {
      $(this).attr("src", "/images/home/login_button_holver.png");
    },
    function () {
      $(this).attr("src", "/images/home/login_button.png");
    }
  );

  $(".showlogfrom").click(function () {
    $(".first_notLogin").hide();
    $("#loginformhome").show();
  });

  //Register

  $(".res_radio_ic").click(function () {
    $(".res_radio_box").removeClass("rs_checked");
    $(this).parent(".res_radio_box").addClass("rs_checked");
    $(".res_radio_ic").removeClass("res_radio_checked");
    $(".res_radio_ic").attr("alt", "flase");
    $(".rs_checked").children(".res_radio_ic").addClass("res_radio_checked");
    $(".rs_checked").children(".res_radio_ic").attr("alt", "true");
  });
  $(".res_check_ic").click(function () {
    if ($(this).attr("alt") != "true") {
      $(this).addClass("res_radio_checked");
      $(this).attr("alt", "true");
    } else {
      $(this).removeClass("res_radio_checked");
      $(this).attr("alt", "false");
    }
  });
  $("#rsreloadCapcha").click(function () {
    reloadCapcha("#reloadCapcha");
  });

  //Check live username
  $("#bnv_formReg input[type=text],#bnv_formReg input[type=password]").focus(
    function () {
      $(
        "#bnv_formReg input[type=text],#bnv_formReg input[type=password]"
      ).removeClass("res_input_true");
      $(this).addClass("res_input_true");
      $(this).removeClass("res_input_false");
      $(this).css("color", "#635C5C");
      $(this).next().hide();
    }
  );
  $("#bnv_formReg input[type=password]").focus(function () {
    $("#bnv_formReg input[type=text]").removeClass("res_input_true");
    $("#bnv_formReg input[type=password]").removeClass("res_input_true");
    $(this).addClass("res_input_true");
    $(this).removeClass("res_input_false");
    $(this).css("color", "#635C5C");
    $(this).next().hide();
  });
  $("#bnv_formReg input[type=password]").focus(function () {
    $("#er_password").hide();
  });
  $("#username").blur(function () {
    var username = $(this).val();
    var params = {
      fielduser: "field",
      user: username,
    };
    $("#er_username").removeClass("res_false");
    $(this).removeClass("res_input_false");
    $.post(base_urlroot + "ajax/register", params, function (rs) {
      rs = jQuery.parseJSON(rs);
      if (rs.erroruser) {
        $("#er_username").addClass("res_false");
        $("#er_username").html(rs.erroruser);
        $("#username").addClass("res_input_false");
        $("#er_username").show();
      }
      if (rs.cuccessuser) {
        $("#er_username").show();
        $("#er_username").addClass("res_true");
        $("#er_username").html(rs.cuccessuser);
      }
    });
  });
  //Check live pass
  $("#password").blur(function () {
    var password = $("#password").val();
    var repassword = $("#repassword").val();
    $("#er_password").text("");
    $("#password").removeClass("res_input_false");
    $("#er_password").removeClass("res_false");
    var username = $("#username").val();
    var perc = Math.round(similarity(password, username) * 10000) / 100;
    console.log("perc:" + perc);
    if (perc >= 50) {
      $("#er_password").show();
      $("#er_password").text(
        "Mật khẩu của bạn đang giống >= 50% tên đăng nhập, hãy chọn mật khẩu khác"
      );
      $("#er_password").addClass("res_false");
      $("#password").addClass("res_input_false");
      $(".res_form_sub").hide();
    } else {
      if (password.length < 6) {
        $("#er_password").show();
        $("#er_password").text("Mật khẩu phải có ít nhất 6 ký tự.");
        $("#er_password").addClass("res_false");
        $("#password").addClass("res_input_false");
        $(".res_form_sub").hide();
      } else if (password == repassword) {
        $("#er_password").show();
        $("#er_password").addClass("res_true");
        $("#er_password").text("Bạn có thể sử dụng mật khẩu này");
        $("#repassword").removeClass("res_input_false");
        $(".res_form_sub").show();
      }
    }
  });
  $("#repassword").blur(function () {
    var password = $("#password").val();
    var repassword = $("#repassword").val();
    $("#repassword").removeClass("res_input_false");
    $("#er_password").removeClass("res_false");
    $("#er_password").text("");
    $("#er_password").show();
    var username = $("#username").val();
    var perc = Math.round(similarity(password, username) * 10000) / 100;
    console.log("perc:" + perc);
    if (perc >= 50) {
      $("#er_password").show();
      $("#er_password").text(
        "Mật khẩu của bạn đang giống >= 50% tên đăng nhập, hãy chọn mật khẩu khác"
      );
      $("#er_password").addClass("res_false");
      $("#password").addClass("res_input_false");
      $(".res_form_sub").hide();
      return false;
    }
    if (password.length < 6) {
      $("#er_password").show();
      $("#er_password").text("Mật khẩu phải có ít nhất 6 ký tự");
      $("#er_password").addClass("res_false");
      $("#password").addClass("res_input_false");
      $(".res_form_sub").hide();
    } else if (repassword.length < 6) {
      $("#er_repassword").show();
      $("#er_repassword").text(
        "Bạn hãy nhập lại - mật khẩu phải có ít nhất 6 ký tự"
      );
      $("#er_repassword").addClass("res_false");
      $("#repassword").addClass("res_input_false");
      $("#er_password").removeClass("res_true");
      $("#er_password").hide();
      $(".res_form_sub").hide();
    } else if (password != repassword || repassword == "ZnNkcm") {
      $("#er_repassword").show();
      $("#er_password").hide();
      $("#er_repassword").text("Xác nhận lại mật khẩu không chính xác");
      //$("#er_repassword").addClass("res_true")
      $("#repassword").addClass("res_input_false");
      $("#er_repassword").addClass("res_false");
      $("#er_password").removeClass("res_true");
      $(".res_form_sub").hide();
    } else {
      $("#er_password").text("Bạn có thể sử dụng mật khẩu này");
      $("#er_password").addClass("res_true");
      $(".res_form_sub").show();
    }
  });
  //Check live email
  $("#res_email2").blur(function () {
    var res_email = $(this).val();
    if (res_email == "dangky@beonline.com.vn") {
      $("#er_email").show();
      $("#er_email").addClass("res_false");
      $("#er_email").html(
        "Địa chỉ email này đã tồn tại , bạn hãy thử một địa chỉ khác !"
      );
      $("#res_email").addClass("res_input_false");
    } else {
      var params = {
        fieldemail: "field",
        email: res_email,
      };
      $("#er_email").removeClass("res_false");
      $(this).removeClass("res_input_false");
      $.post(base_urlroot + "ajax/register", params, function (rs) {
        rs = jQuery.parseJSON(rs);
        if (rs.erroremail) {
          $("#er_email").show();
          $("#er_email").addClass("res_false");
          $("#er_email").html(rs.erroremail);
          $("#res_email").addClass("res_input_false");
        }
        if (rs.cuccessemail) {
          $("#er_email").show();
          $("#er_email").addClass("res_true");
          $("#er_email").html(rs.cuccessemail);
        }
      });
    }
  });
  //Check live code
  $("#code").blur(function () {
    var code = $(this).val();
    if (code.length < 6 || code.length > 6) {
      $("#er_code").show();
      $("#er_code").addClass("res_false");
      $("#er_code").text("Mã code nhập không hợp lệ");
    } else {
      var params = {
        fieldcode: "field",
        code: code,
      };
      $("#er_code").removeClass("res_false");
      $(this).removeClass("res_input_false");
      $.post(base_urlroot + "ajax/register", params, function (rs) {
        rs = jQuery.parseJSON(rs);
        if (rs.errorcode) {
          $("#er_code").show();
          $("#er_code").addClass("res_false");
          $("#er_code").html(rs.errorcode);
          $("#code").addClass("res_input_false");
        }
        if (rs.cuccesscode) {
          $("#er_code").show();
          $("#er_code").addClass("res_true");
          $("#er_code").html(rs.cuccesscode);
        }
      });
    }
  });
  //Check dieu khoan
  $("#dieukhoan").click(function () {
    if ($(this).attr("alt") == "true") $("#er_dieukhoan").hide();
    else {
      $("#er_dieukhoan").show();
      $("#er_dieukhoan").addClass("res_false");
      $("#er_dieukhoan").html(
        "* Bạn chưa đồng ý với điều khoản của TiếngAnh123 .<br> -  Để đăng ký tài khoản bắt buộc phải đồng ý với những điều khoản này !"
      );
    }
  });

  // Comment
  $("#sendcms").focus(function () {
    $("#show_error_msg").text("");
    if ($(this).attr("rel") != "true") {
      $(this).attr("rel", "true");
      $(this).val("");
      $(this).css("color", "#383434");
    }
  });
  //cal init comment
  init_comment();

  $("#ubaPlayer").ubaPlayer({
    codecs: [{ name: "MP3", codec: "audio/mpeg;" }],
    isPaid: true,
    playStartCallback: PlayingAudioHide,
    stopCallback: stopAudioHide,
  });
  isIOS = DetectIos();
  console.log(isIOS);

  //Popup
  //if close button is clicked
  $(".window .close").click(function () {
    $("#mask").fadeOut(500);
    $(".window").fadeOut(500);
  });
  $("#boxes a").click(function () {
    $("#mask").fadeOut(500);
    $(".window").fadeOut(500);
  });
  //if mask is clicked
  $("#mask").click(function () {
    $(this).fadeOut(1000);
    $(".window").fadeOut(1000);
  });

  //Login mang xa hoi
  /*$(".openid").click(function(){
        var identity = $(this).attr("identity");
        var url = base_urlroot +'ajax/openid/index?login&identity='+identity;
        var _width = 900;
        var Xpos = ((screen.availWidth - _width)/2);
        var _height = 500;
        var Ypos =((screen.availHeight - _height)/2);
        vWin = window.open(url,"CM_OpenID","width=" + _width + ",height=" + _height + ",resizable,scrollbars=yes,status=1");
        tWin();
    });
    $("a#icon-fb").click(function(){
        var url = 'http://vbinh.tienganh123.com/fb';
        var _width = 900;
        var Xpos = ((screen.availWidth - _width)/2);
        var _height = 500;
        var Ypos =((screen.availHeight - _height)/2);
        vWin = window.open(url,"CM_OpenID","width=" + _width + ",height=" + _height + ",resizable,scrollbars=yes,status=1");
        tWin();
    })*/
  $("input#sharefeedfb").click(function () {
    if ($(this).is(":checked")) {
      var params = {
        check: "true",
      };
      $.ajax({
        type: "GET",
        url: base_urlroot + "fb/checkSession.php",
        data: params,
        dataType: "html",
        //async:    false,
        success: function (rs) {
          if (rs == "<script>window.close();</script>") return false;
          if (rs != "is-login") {
            window.open(
              rs,
              "_blank",
              "width=900,height=500,resizable,scrollbars=yes,status=1"
            );
          }
        },
      });
    }
  });
  $('.to_box div[class=""]:odd').css({
    background: "#EFF8FA",
    width: "100%",
    float: "left",
  });
});

function getCook(cookiename) {
  var cookiestring = RegExp("" + cookiename + "[^;]+").exec(document.cookie);
  return unescape(
    !!cookiestring
      ? cookiestring
          .toString()
          .replace(/^[^=]+/, "")
          .replace("=", "")
      : ""
  );
}
function toPos(ElementTo) {
  var postCm = $(ElementTo).offset();
  $("html, body").animate({ scrollTop: postCm.top }, 300);
}

//Init comment
function init_comment() {
  //Disable form comment input
  var is_comm_input = $("#is_comment_form").html();
  if (is_comm_input == "no") $("#form_comment_area").remove();

  //For admin action
  $(".lik_info_box_ct").hover(
    function () {
      $(this).find(".scm_ctrl").css("visibility", "visible");
    },
    function () {
      $(this).find(".scm_ctrl").css("visibility", "hidden");
    }
  );
}

/* Show button download for lesson */
function show_button_download() {
  if ($("#download_1").length == 1) {
    var i = 1;
    var str_re = '<div class="vd_download_name">DOWNLOAD BÀI HỌC NÀY :</div>';
    var non_vip = "";
    var vip = "";
    var text = "";
    var arr_link = [];
    var icon_downd = "vd_ico1";
    $("span:contains(Download)").hide();

    while ($("#download_" + i).length == 1) {
      text = $("#download_" + i).text();
      arr_link = text.split("|");
      if (arr_link[0].indexOf("MP3") >= 0 || arr_link[0].indexOf("mp3") >= 0) {
        icon_downd = "vd_ico2";
      }
      if (arr_link[1].indexOf("PDF") >= 0 || arr_link[1].indexOf("pdf") >= 0) {
        icon_downd = "vd_ico3";
      }
      non_vip +=
        '<a href="" onclick="popup(\'//data.tienganh123.com/file/dungchung/download_vip.htm\')" onmouseout=hideticker(this) onMouseOver="showmessage_danhngon(\'Tải video, audio, hay lời dịch về máy - Chỉ dành cho thành viên VIP\',this)"><div class="vd_dl_icon">' +
        arr_link[0] +
        '<div class="vd_ico_dl ' +
        icon_downd +
        '"></div></div></a>';
      vip +=
        '<a href="' +
        arr_link[1] +
        '" target=_blank><div class="vd_dl_icon">' +
        arr_link[0] +
        '<div class="vd_ico_dl ' +
        icon_downd +
        '"></div></div></a>';
      $("#download_" + i).remove();
      i++;
    }
    if (!paidmember()) {
      str_re += non_vip;
    } else {
      str_re += vip;
    }
    $(".vd_download").html(str_re);
  }
}

function login_openid(identity) {
  var url = base_urlroot + "/ajax/oauth/" + identity;
  //if($.cookie('ref') == undefined)
  //$.cookie('ref',window.location.href,{ expires : 300 , path: "/" , domain : 'tienganh123.com'});
  if (identity != "yahoo") window.location = url;
  else {
    $html =
      '<form style="display:none;" action="' +
      base_urlroot +
      '/ajax/oauth/openid" method="post" id="openid_yahoo">';
    $html +=
      '<input type="url" value="http://me.yahoo.com/" id="openid_url" name="openid_url">';
    $html +=
      '<input type="submit" id="abcd" onclick="this.form.submit();" value="Authenticate">';
    $html += "</form>";
    $("body").append($html);
    $("#abcd").trigger("click");
  }
}
function addAudioLong(element, i, isIOS) {
  var file_play = $(element).attr("media-url");
  // var player_type=$(element).attr("player_type");
  var prefix = "v2_audio_player";
  var class_id = "v2_audio_player";
  var time_now = new Date().getTime();
  if ($(element).hasClass("jquery_jplayer_home")) {
    prefix = "v2_player_home_";
    class_id = "jquery_jplayer_home";
  } else if ($(element).hasClass("jquery_jplayer_long")) {
    prefix = "v2_player_lesson_";
    class_id = "jquery_jplayer_long";
  } else if ($(element).hasClass("jquery_jplayer_lesson")) {
    prefix = "v2_player_comment_";
    class_id = "jquery_jplayer_lesson";
  }
  //Check element show?
  //console.log(prefix+i+':'+$(element).is(":visible"));
  if (!$(element).is(":visible")) {
    return;
  }
  //Check added audio?
  if ($(element).attr("add_audio")) {
    return;
  }
  var _solution = "html,flash";
  if (is_firefox()) {
    _solution = "flash,html";
  }
  /*  if(player_type){
        isIOS=true;
    }else{
        isIOS = DetectIos();
    }
    */
  prefix += time_now;

  /*if(!isIOS){
        $(element).attr("id",prefix + i);
        $(element).after('<script language="javascript"> PKL_AddPlayer({ target: "' + prefix + i + '",id: "' + prefix + i + '", media: "' + file_play + '", timeformat: "1" } );</script>');
    }else{
    */
  $(element).after(
    '<div id="' +
      prefix +
      i +
      '" class="jp_audio_long"><div class="jp-gui ui-widget ui-widget-content ui-corner-all adl_box"><ul><li class="jp-play ui-state-default ui-corner-all adl_play"><a href="javascript:;" class="jp-play ui-icon ui-icon-play adl_play_in" tabindex="1" title="play">play</a></li><li class="jp-pause ui-state-default ui-corner-all adl_pause"><a href="javascript:;" class="jp-pause ui-icon ui-icon-pause adl_play_in" tabindex="1" title="pause">pause</a></li></ul><div class="jp-progress-slider adl_slider"></div><div class="jp-current-time  counttime adl_time"></div><div class="jp-clearboth"></div></div></div>'
  );
  var myPlayer = $(element),
    myPlayerData,
    fixFlash_mp4,
    fixFlash_mp4_id,
    ignore_timeupdate,
    options = {
      ready: function (event) {
        if (event.jPlayer.status.noVolume) {
          $(".jp-gui").addClass("jp-no-volume");
        }
        fixFlash_mp4 =
          event.jPlayer.flash.used &&
          /mp3/.test(event.jPlayer.options.supplied);
        $(this).jPlayer("setMedia", {
          mp3: file_play,
        });
        $(".adl_slider").find("a").addClass("adl_icon");
        $(".adl_slider").find("div").addClass("adl_sl");
      },
      play: function (event) {
        // To avoid both jPlayers playing together.
        $(this).jPlayer("pauseOthers");
      },
      timeupdate: function (event) {
        if (!ignore_timeupdate) {
          myControl.progress.slider(
            "value",
            event.jPlayer.status.currentPercentAbsolute
          );
        }
      },
      solution: _solution,
      swfPath: "/static/js/audioPlayer/jplayer/js/Jplayer.swf",
      supplied: "mp3",
      cssSelectorAncestor: "#" + prefix + i,
      wmode: "window",
    },
    myControl = {
      progress: $(options.cssSelectorAncestor + " .jp-progress-slider"),
      volume: $(options.cssSelectorAncestor + " .jp-volume-slider"),
    };

  myPlayer.jPlayer(options);
  myPlayerData = myPlayer.data("jPlayer");
  $(".jp-gui ul li").hover(
    function () {
      $(this).addClass("ui-state-hover");
    },
    function () {
      $(this).removeClass("ui-state-hover");
    }
  );
  myControl.progress.slider({
    animate: "fast",
    max: 100,
    range: "min",
    step: 0.1,
    value: 0,
    slide: function (event, ui) {
      var sp = myPlayerData.status.seekPercent;
      if (sp > 0) {
        if (fixFlash_mp4) {
          ignore_timeupdate = true;
          clearTimeout(fixFlash_mp4_id);
          fixFlash_mp4_id = setTimeout(function () {
            ignore_timeupdate = false;
          }, 1000);
        }
        myPlayer.jPlayer("playHead", ui.value * (100 / sp));
      } else {
        setTimeout(function () {
          myControl.progress.slider("value", 0);
        }, 0);
      }
    },
  });
  //}

  //Danh dau phan tu da add audio
  $(element).attr("add_audio", true);
}
//Check IE
if ($.browser.msie) {
  $(window).load(function () {
    //Show audio player cho type home (tpl)
    $(".jquery_jplayer_home").each(function (i) {
      addAudioLong(this, i, isIOS);
    });

    //Show audio player cho phan comment (function showmp3)
    $(".jquery_jplayer_comment").each(function (i) {
      addAudioLong(this, i, isIOS);
    });
    // show audio bai học
    $(".jquery_jplayer_long").each(function (i) {
      addAudioLong(this, i, isIOS);
    });
  });
} else {
  $(document).ready(function () {
    //Show audio player cho type home (tpl)
    $(".jquery_jplayer_home").each(function (i) {
      addAudioLong(this, i, isIOS);
    });

    //Show audio player cho phan comment (function showmp3)
    $(".jquery_jplayer_comment").each(function (i) {
      addAudioLong(this, i, isIOS);
    });
  });
}
if (!window.console) window.console = {};
if (!window.console.log) window.console.log = function () {};

//
function loadSocial() {
  if ($(".fb-like").length == 0) return;
  $("#fblike").attr("data-href", document.location.href);

  //Facebook
  if (typeof FB != "undefined") {
    FB.init({ status: true, cookie: true, xfbml: true });
  } else {
    $.getScript("//connect.facebook.net/en_US/all.js#xfbml=1", function () {
      FB.init({ status: true, cookie: true, xfbml: true });
    });
  }
}

function capture(obj) {
  html2canvas($(".RsCus"), {
    onrendered: function (canvas) {
      var imgString = canvas.toDataURL("image/png");
      //window.open(imgString);
      var url = "//upload.tienganh123.com/images_spam/export.php";
      $.ajax({
        type: "POST",
        url: "/send_mail_spam.php",
        dataType: "text",
        data: {
          base64data: imgString,
          day: obj.num,
          u: obj.info.username,
          fullname: obj.info.hoten,
          email: obj.info.email,
        },
        success: function (d) {
          var o = jQuery.parseJSON(d);
          if (o.suc == "ok") {
            $.post(url, { base64data: imgString, filename: o.filename }).done(
              function (data) {
                alert("Data Loaded: " + data);
              }
            );
          }
        },
      });
    },
  });
}

/* remove scroll when element ready
$(function(){
    var pathArray = window.location.pathname.split( '/' );
    if(pathArray[1] != ""){
        if($("#promotions_card_you").length == 0) {
            $("html, body").animate({ scrollTop: $('.containt_center_cen').offset().top }, 1000);
        }
    }
});
*/

function _youtu_ads(url, cookie_name) {
  $("#promotions_card_you").hide();
  var d = new Date();
  var n = d.getDate();
  tvhayorg = 1;
  var time = d.getTime();
  var Time_expires = time + 24 * 3600 * 1000;
  TVH_ADS_SetCookie(cookie_name, "false", Time_expires);
  //return location.href = url;
  var params = "width=" + screen.width;
  params += ", height=" + screen.height;
  params +=
    ",scrollbars=yes,fullscreen=yes,status=1,toolbar=1,menubar=1,resizable=1,location=1,directories=1";
  //var pop_ads_open2=window.open(url,'ta123_ads_pop',params+', top=0,left=0');
  window.location = url;
}

function _youtu_ads_close(url, cookie_name) {
  $("#promotions_card_you").hide();
  var d = new Date();
  var n = d.getDate();
  tvhayorg = 1;
  var time = d.getTime();
  var Time_expires = time + 24 * 3600 * 1000;
  TVH_ADS_SetCookie(cookie_name, "false", Time_expires);
  //return location.href = url;
}

function _tacbm_ads() {
  $("#promotions_card_you3").hide();
  var Time_expires = 24 * 3600 * 1000;
  TVH_ADS_SetCookie("pop_tacbm", "true", Time_expires);
  location.href =
    "https://www.tienganh123.com/tieng-anh-giao-tiep-cho-nguoi-mat-goc";
  console.log("pop_tacbm");
}

function get_rand_video_youtube() {
  var _arr = [
    "ekJwhr3-l6M",
    "wchPzrqYS4M",
    "CdF2RYPdGRk",
    "sjnryMaeWWI",
    "2wcBDUphdxw",
    "w3cYcG_QAgU",
    "IHDw9Dg-fr4",
    "i28scQ9jDOc",
    "QeibQaYa4uQ",
    "Kf-EiA6rwos",
    "jEifGuo5ZPA",
    "yQ1kSHHQFyg",
    "-w9jwzsGhcg",
    "jKNK-Xn2bos",
    "LYqjF6I_vEg",
    "y9dRsxuN22M",
    "d20LCOsRL_E",
    "jhA5D2Onbns",
    "KDyRxCCswrI",
    "SSYR8PtEWsE",
    "GlNrv2_Acnk",
    "UbkAnaE2fe4",
    "vdkHFZzelyQ",
    "p0z7kqfwgCU",
    "OvRWJG1COm4",
    "Zx7ors3kWXQ",
    "bifr2385rco",
    "Mtl3x6T3DgY",
    "yqBwWBjgkeA",
    "ThdMxKpwcVs",
    "10qoDy0lD8c",
    "eIa2j62_-R4",
    "v8jmfXxFy04",
    "Og3XK_yU1EY",
    "vMvyOkIcFkQ",
    "FtxEfaoyJzk",
    "Uf9E9Y_us_Y",
    "I4OnNQiOiLM",
    "v38UFkJMko4",
    "ywjhYE_5vgk",
    "PEOYp-GvJx0",
    "JNKxhcJZWM0",
    "tntVqnLTMpU",
    "lHgZIqyvTbo",
    "6BeXsWh6xBQ",
    "slQX2PG8DhI",
    "KiBjqfvWCDQ",
    "sIzrbTkDdKI",
    "SEQmgfh0WnE",
    "2zAzg7uoHnc",
    "LiDDQVMR4JQ",
    "n3rqpBtk65s",
    "4oER_kUAnho",
    "e_nc5ORKfRY",
    "VD7iAsVMl0M",
    "aIbCTJiJYxU",
    "FG4RViiCHj4",
    "PIPSC-UjHPs",
    "Ah8icRNs-h8",
    "fUX0xZAJSOg",
    "_iRVCg25Gqg",
    "KZd9CdIGjis",
    "ql1Cx9WsxOs",
    "SBIcGYRpsQg",
    "NiBWBDhe4AE",
    "CRz3H6K4RfQ",
    "v6_I8pQRhDo",
    "tRj7QIIBMWA",
    "r5zhpJwO0rk",
    "gFZIXFtetoA",
    "YU626cpEY3E",
    "LPJOfW_Cvpg",
    "W3AjnE_Alnw",
    "akvpdNNZpro",
    "IHDw9Dg-fr4",
    "ULxKkcYQRjA",
    "w2cEHQiUpa0",
    "NF-YcoPHE6A",
    "8BIdbhsbdZY",
    "5CNPgxAiXUI",
    "zqOlPuy3c9s",
    "67WFHPkz9rI",
    "VxBGwfKr3k0",
    "SRsC9sJtfcM",
    "fq1jhPhcAgc",
    "NwkYDq7Gyk8",
    "f7Pre-0mXLY",
    "sGvf0-1ob7g",
    "k6ii7GGtTK4",
    "2hDu_9ReiW8",
    "q6-a_TTUgSE",
    "g4TkpmPkW18",
    "nbFHpK4YReE",
    "e7qPc8IoMJ8",
    "G_JU8JbmZqA",
    "2x08U4ZPz3g",
    "YJeeuj_Ljag",
    "QczLi9eXCxY",
    "VcR_FCgwY-w",
    "FVjGFH1HMdg",
    "imKEO6K2_LM",
    "hv6035KAUZo",
    "W8VX6fpj9eg",
    "RQkiv7jbWDM",
    "EpG90k4N6pQ",
    "UpdgGEej5FI",
    "vuZi1AsTRoY",
    "aCk9micTKiw",
    "5UjC-XRmFqU",
    "7Eqf9VQCoQQ",
    "stQFq6w6TnI",
    "JyPR6v4qmd0",
    "P4-k1_7705g",
    "7NgH0rsgh2k",
    "271_wlvI-KI",
    "cRgWPgtNGwg",
    "QC_6RZ_1zoI",
    "Jkj3ZI46pxk",
    "d7fz4hCJ4-U",
    "8nwm6D_23hM",
    "tVFd7vfSNZo",
    "1JniBEstIao",
  ];
  return _arr[Math.floor(Math.random() * _arr.length)];
}

var lt_arr = [];
lt_arr[0] = {
  0: {
    link: "https://www.chuabaitap.com/giai-bai-tap-sgk-toan-lop-3",
    text: "Giải bài tập SGK <strong>Toán 3</strong>",
  },
  1: {
    link: "https://www.chuabaitap.com/soan-tieng-viet-lop-3",
    text: "Soạn <strong>Tiếng Việt lớp 3</strong>",
  },
};
lt_arr[1] = {
  0: {
    link: "https://www.chuabaitap.com/giai-bai-tap-sgk-toan-lop-4",
    text: "Giải bài tập SGK <strong>Toán 4</strong>",
  },
  1: {
    link: "https://www.chuabaitap.com/soan-tieng-viet-lop-4",
    text: "Soạn <strong>Tiếng Việt lớp 4</strong>",
  },
};
lt_arr[2] = {
  0: {
    link: "https://www.chuabaitap.com/giai-bai-tap-sgk-toan-lop-5",
    text: "Giải bài tập SGK <strong>Toán 5</strong>",
  },
  1: {
    link: "https://www.chuabaitap.com/soan-tieng-viet-lop-5",
    text: "Soạn <strong>Tiếng Việt lớp 5</strong>",
  },
};
lt_arr[3] = {
  0: {
    link: "https://www.chuabaitap.com/giai-bai-tap-sgk-toan-6",
    text: "Giải bài tập SGK <strong>Toán 6</strong>",
  },
  1: {
    link: "https://www.chuabaitap.com/soan-van-lop-6-chi-tiet",
    text: "Soạn <strong>Ngữ Văn 6</strong>",
  },
  2: {
    link: "https://www.chuabaitap.com/giai-bai-tap-sgk-vat-ly-6",
    text: "Giải bài tập SGK <strong>Vật Lý 6</strong>",
  },
  3: {
    link: "https://www.chuabaitap.com/giai-bai-tap-sgk-lich-su-6",
    text: "Giải bài tập SGK <strong>Lịch Sử 6</strong>",
  },
  4: {
    link: "https://www.chuabaitap.com/giai-bai-tap-sgk-sinh-hoc-6",
    text: "Giải bài tập SGK <strong>Sinh Học 6</strong>",
  },
};
lt_arr[4] = {
  0: {
    link: "https://www.chuabaitap.com/giai-bai-tap-sgk-toan-7",
    text: "Giải bài tập SGK <strong>Toán 7</strong>",
  },
  1: {
    link: "https://www.chuabaitap.com/soan-van-lop-7-chi-tiet",
    text: "Soạn <strong>Ngữ Văn 7</strong>",
  },
  2: {
    link: "https://www.chuabaitap.com/giai-bai-tap-sgk-vat-ly-7",
    text: "Giải bài tập SGK <strong>Vật Lý 7</strong>",
  },
  3: {
    link: "https://www.chuabaitap.com/giai-bai-tap-sgk-lich-su-7",
    text: "Giải bài tập SGK <strong>Lịch Sử 7</strong>",
  },
  4: {
    link: "https://www.chuabaitap.com/giai-bai-tap-sgk-sinh-hoc-7",
    text: "Giải bài tập SGK <strong>Sinh Học 7</strong>",
  },
};
lt_arr[5] = {
  0: {
    link: "https://www.chuabaitap.com/giai-bai-tap-sgk-toan-8",
    text: "Giải bài tập SGK <strong>Toán 8</strong>",
  },
  1: {
    link: "https://www.chuabaitap.com/soan-van-lop-8-chi-tiet",
    text: "Soạn <strong>Ngữ Văn 8</strong>",
  },
  2: {
    link: "https://www.chuabaitap.com/giai-bai-tap-sgk-vat-ly-8",
    text: "Giải bài tập SGK <strong>Vật Lý 8</strong>",
  },
  3: {
    link: "https://www.chuabaitap.com/giai-bai-tap-sgk-lich-su-8",
    text: "Giải bài tập SGK <strong>Lịch Sử 8</strong>",
  },
  4: {
    link: "https://www.chuabaitap.com/giai-bai-tap-sgk-sinh-hoc-8",
    text: "Giải bài tập SGK <strong>Sinh Học 8</strong>",
  },
};
lt_arr[6] = {
  0: {
    link: "https://www.chuabaitap.com/giai-bai-tap-sgk-toan-9",
    text: "Giải bài tập SGK <strong>Toán 9</strong>",
  },
  1: {
    link: "https://www.chuabaitap.com/soan-van-lop-9-chi-tiet",
    text: "Soạn <strong>Ngữ Văn 9</strong>",
  },
  2: {
    link: "https://www.chuabaitap.com/giai-bai-tap-sgk-vat-ly-9",
    text: "Giải bài tập SGK <strong>Vật Lý 9</strong>",
  },
  3: {
    link: "https://www.chuabaitap.com/giai-bai-tap-sgk-lich-su-9",
    text: "Giải bài tập SGK <strong>Lịch Sử 9</strong>",
  },
  4: {
    link: "https://www.chuabaitap.com/giai-bai-tap-sgk-sinh-hoc-9",
    text: "Giải bài tập SGK <strong>Sinh Học 9</strong>",
  },
};
lt_arr[7] = {
  0: {
    link: "https://www.chuabaitap.com/giai-bai-tap-sgk-toan-10",
    text: "Giải bài tập SGK <strong>Toán 10</strong>",
  },
  1: {
    link: "https://www.chuabaitap.com/soan-van-lop-10-chi-tiet",
    text: "Soạn <strong>Ngữ Văn 10</strong>",
  },
  2: {
    link: "https://www.chuabaitap.com/giai-bai-tap-sgk-vat-ly-10",
    text: "Giải bài tập SGK <strong>Vật Lý 10</strong>",
  },
  3: {
    link: "https://www.chuabaitap.com/giai-bai-tap-sgk-lich-su-10",
    text: "Giải bài tập SGK <strong>Lịch Sử 10</strong>",
  },
  4: {
    link: "https://www.chuabaitap.com/giai-bai-tap-sgk-sinh-hoc-10",
    text: "Giải bài tập SGK <strong>Sinh Học 10</strong>",
  },
};
var item = lt_arr[Math.floor(Math.random() * lt_arr.length)];
var _str = "";
$.each(item, function (index, value) {
  var _text = value.text;
  _text = _text.replace(/(<([^>]+)>)/gi, "");
  _str +=
    '<li><span class="bull_icon">•</span><a title="' +
    _text +
    '" target="_blank" href="' +
    value.link +
    '">' +
    value.text +
    "</a></li>";
});
var lt_ta = [];
lt_ta[0] = {
  link: "https://www.chuabaitap.com/giai-bai-tap-sgk-tieng-anh-lop-6-sach-moi",
  text: "Giải bài tập SGK <strong>tiếng Anh lớp 6</strong>",
};
lt_ta[1] = {
  link: "https://www.chuabaitap.com/giai-bai-tap-sgk-tieng-anh-lop-7-sach-moi",
  text: "Giải bài tập SGK <strong>tiếng Anh lớp 7</strong>",
};
lt_ta[2] = {
  link: "https://www.chuabaitap.com/giai-bai-tap-sgk-tieng-anh-lop-8-sach-moi",
  text: "Giải bài tập SGK <strong>tiếng Anh lớp 8</strong>",
};
lt_ta[3] = {
  link: "https://www.chuabaitap.com/giai-bai-tap-sgk-tieng-anh-lop-9-sach-moi",
  text: "Giải bài tập SGK <strong>tiếng Anh lớp 9</strong>",
};
lt_ta[4] = {
  link: "https://www.chuabaitap.com/giai-bai-tap-sgk-tieng-anh-lop-10-sach-moi",
  text: "Giải bài tập SGK <strong>tiếng Anh lớp 10</strong>",
};
lt_ta[5] = {
  link: "https://www.chuabaitap.com/giai-bai-tap-sgk-tieng-anh-lop-11-sach-moi",
  text: "Giải bài tập SGK <strong>tiếng Anh lớp 11</strong>",
};
lt_ta[6] = {
  link: "https://www.chuabaitap.com/giai-bai-tap-sgk-tieng-anh-lop-12-sach-moi",
  text: "Giải bài tập SGK <strong>tiếng Anh lớp 12</strong>",
};
var key1 = Math.floor(Math.random() * lt_ta.length);
var item1 = [];
item1.push(lt_ta[key1]);
var key2 = Math.floor(Math.random() * lt_ta.length);
while (key2 == key1) {
  var key2 = Math.floor(Math.random() * lt_ta.length);
}
item1.push(lt_ta[key2]);
var key3 = Math.floor(Math.random() * lt_ta.length);
while (key3 == key1 || key3 == key2) {
  var key3 = Math.floor(Math.random() * lt_ta.length);
}
item1.push(lt_ta[key3]);
$.each(item1, function (index, value) {
  var _text = value.text;
  _text = _text.replace(/(<([^>]+)>)/gi, "");
  _str +=
    '<li><span class="bull_icon">•</span><a title="' +
    _text +
    '" target="_blank" href="' +
    value.link +
    '">' +
    value.text +
    "</a></li>";
});
_str +=
  '<li><span class="bull_icon">•</span><a title="Xem các lớp khác và môn khác" target="_blank" href="https://www.chuabaitap.com/">Xem các lớp khác và môn khác</a></li>';
$(document).ready(function () {
  $("#luyenthi ul").html(_str);
  $("#luyenthi ul").show();
});

var popunder = "https://abckid.vn";
var winfeatures =
  "width=800,height=510,scrollbars=1,resizable=1,toolbar=1,location=1,menubar=1,status=1,directories=0";
function get_cookie(Name) {
  var search = Name + "=";
  var returnvalue = "";
  if (document.cookie.length > 0) {
    offset = document.cookie.indexOf(search);
    if (offset != -1) {
      // if cookie exists
      offset += search.length;
      end = document.cookie.indexOf(";", offset);
      if (end == -1) end = document.cookie.length;
      returnvalue = unescape(document.cookie.substring(offset, end));
    }
  }
  return returnvalue;
}

function loadornot() {
  if (get_cookie("popunder") == "") {
    document.cookie = "popunder=yes";
    loadpopunder();
  }
}

function loadpopunder() {
  win2 = window.open(popunder, "_blank", winfeatures);
  win2.blur();
  window.focus();
}

var tvhayorg = 0;
function TVH_ADS_GetCookie(Name) {
  var re = new RegExp(Name + "=[^;]+", "i");
  if (document.cookie.match(re))
    return decodeURIComponent(document.cookie.match(re)[0].split("=")[1]);
  return "";
}
function TVH_ADS_SetCookie(name, value, days) {
  if (typeof days != "undefined") {
    var expireDate = new Date();
    var expstring = expireDate.setDate(expireDate.getDate() + days);
    var now = new Date();
    now.setTime(now.getTime() + 365 * 24 * 3600 * 1000);
    document.cookie =
      name +
      "=" +
      decodeURIComponent(value) +
      "; expires=" +
      now.toUTCString() +
      "; path=/";
  } else document.cookie = name + "=" + decodeURIComponent(value);
}
function ta123pop() {
  var cookie_popup_ads = TVH_ADS_GetCookie("abckid_popup_ads");
  if (cookie_popup_ads == "") {
    if (tvhayorg == 0) {
      var d = new Date();
      var n = d.getDate();
      tvhayorg = 1;
      var time = d.getTime();
      var Time_expires = time + 24 * 3600 * 1000;
      TVH_ADS_SetCookie("abckid_popup_ads", "true", Time_expires);
      var params = "width=" + "600";
      params += ", height=" + "400";
      params +=
        ",scrollbars=yes,status=1,toolbar=1,menubar=1,resizable=1,location=1,directories=1";
      var pop_ads_open2 = window.open(
        "https://www.abckid.vn",
        "ta123_ads_pop",
        params + ", top=0,left=0"
      );
    }
  }
}

function update_client_msg(msg) {
  /*
    var list_msg = [];
    if(TVH_ADS_GetCookie('hd_list_msg')){
        //console.log('++++');
        list_msg = JSON.parse(TVH_ADS_GetCookie('hd_list_msg'));
        console.log(list_msg);
    }

    if(list_msg.length >= 10){
        list_msg.shift();
    }
    var clientInfo = new Object();
    clientInfo.msg = msg;
    list_msg.push(clientInfo);
    TVH_ADS_SetCookie('hd_list_msg', JSON.stringify(list_msg));
    */
}

function similarity(s1, s2) {
  var longer = s1;
  var shorter = s2;
  if (s1.length < s2.length) {
    longer = s2;
    shorter = s1;
  }
  var longerLength = longer.length;
  if (longerLength === 0) {
    return 1.0;
  }
  return (
    (longerLength - editDistance(longer, shorter)) / parseFloat(longerLength)
  );
}

function editDistance(s1, s2) {
  s1 = s1.toLowerCase();
  s2 = s2.toLowerCase();

  var costs = new Array();
  for (var i = 0; i <= s1.length; i++) {
    var lastValue = i;
    for (var j = 0; j <= s2.length; j++) {
      if (i == 0) costs[j] = j;
      else {
        if (j > 0) {
          var newValue = costs[j - 1];
          if (s1.charAt(i - 1) != s2.charAt(j - 1))
            newValue = Math.min(Math.min(newValue, lastValue), costs[j]) + 1;
          costs[j - 1] = lastValue;
          lastValue = newValue;
        }
      }
    }
    if (i > 0) costs[s2.length] = lastValue;
  }
  return costs[s2.length];
}

function check_spam(msg) {
  var _spam = false;
  if (_spam == false) {
    var list_msg = [];
    if (TVH_ADS_GetCookie("hd_list_msg")) {
      //console.log('++++');
      list_msg = JSON.parse(TVH_ADS_GetCookie("hd_list_msg"));
    }

    $.each(list_msg, function (index, value) {
      var perc = Math.round(similarity(msg, value.msg) * 10000) / 100;
      console.log("Spam...");
      console.log("p: " + perc);
      if (perc >= 80) {
        _spam = true;
        //break;
        return false;
      }
    });
  }

  return _spam;
}

function check_bad_word(msg) {
  var _words = [
    "đéo",
    "địt",
    "đ.ịt",
    " dit",
    "dit ",
    " dit ",
    "đi.t",
    "đỵt",
    "lồn",
    "l.ồn",
    "lồ.n",
    "con mẹ",
    "cặc",
    "fuck",
    "mẹ mày",
    "cứt",
    "màng trinh",
    "hành kinh",
    "đít",
    "điếm",
    "tinh trùng",
    "đcm",
    "dcm",
    "đm",
    "chịch",
    "chich",
    "sex",
    "pennis",
    "làm tình",
    "vcl",
    "ch.ich",
    "ch.ịch",
    "chị.ch",
    "xoạc",
  ];
  var _spam = false;
  for (var i = 0, len = _words.length; i < len; ++i) {
    if (msg.indexOf(_words[i]) != -1) {
      _spam = true;
      console.log("Từ bậy...");
      break;
      return true;
    }
  }
  return _spam;
}

//loadornot();
