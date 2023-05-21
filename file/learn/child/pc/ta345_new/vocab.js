var data_vocab = {};
var video_id = 1;

function fnReloadFunctionSystem1() {
  // hideNonGoldenKidsMember();
  if ($(".uba_audioButton").length > 0) {
    if (ie_vs && ie_vs < 9) {
      $.getScript(
        "//www.tienganh123.com/file/common/libAudio/js/audio_ie8.js",
        function () {
          $("#ubaPlayer").ubaPlayer_game({
            codecs: [{ name: "MP3", codec: "audio/mpeg;" }],
            playStartCallback: PlayingAudioHide,
            stopCallback: stopAudioHide,
          });
        }
      );
    } else {
      $.getScript(
        "//www.tienganh123.com/file/common/libAudio/js/audioShort.js",
        function () {
          $("#ubaPlayer").ubaPlayer({
            codecs: [{ name: "MP3", codec: "audio/mpeg;" }],
            isgPaid: true,
          });
        }
      );
    }
  }
}

/*
function PlayVideo_1(videoID, v_width, v_height, flvvideolink, mp4videolink, imagelink) {
    var x = document.getElementById(videoID);
    var new_height = parseInt(v_height) + 25;
    var topposter = ((parseInt(v_height) / 2) - 40 > 0) ? (parseInt(v_height) / 2) - 40 : 0;
    new_height=new_height.toString();
    var video_html = '';
 video_html='\
 <video width="' + v_width + '" height="' + v_height + '" id="player' + video_id + '" poster="' + imagelink + '" controls="controls" preload="none">\
  <source type="video/mp4" src="' + mp4videolink + '" />\
  <!-- Flash: -->\
  <object width="' + v_width + '" height="' + new_height + '" type="application/x-shockwave-flash" data="player.swf">\
   <param name="movie" value="//www.tienganh123.com/jwplayer/player.swf">\
   <param name="flashvars" value="controlbar=over&amp;image='+imagelink+'&amp;file='+flvvideolink+'">\
   <img src="'+imagelink+'" width="' + v_width + '" height="' + v_height + '" alt="học tiếng Anh trực tuyến tiện ích, hiệu quả với tiếng Anh 123">\
  </object>\
 </video>';
 video_html = video_html + '<div class="img_play_video" onclick="this.style.display=\'none\'; this.previousElementSibling.style.display = \'block\'; this.previousElementSibling.play()" style="background-image: url(' + imagelink + '); width: ' + v_width + 'px;height: ' + v_height + 'px; background-size: 100% 100%; cursor: pointer; position: absolute; top: '+(parseInt(v_height)+7)+'px; margin: -' + (parseInt(v_height)+7) + 'px auto 0px; text-align:center;"><div class="video_bgblack"></div><div class="video_icon" style="top: ' + topposter + 'px"></div></div>'
    x.innerHTML = video_html;
    video_id += 1;
}
*/

function fnVideo(
  videoID,
  v_width,
  v_height,
  flvvideolink,
  mp4videolink,
  webmvideolink,
  imagelink
) {
  var topposter =
    parseInt(v_height) / 2 - 40 > 0 ? parseInt(v_height) / 2 - 40 : 0;
  var new_height = parseInt(v_height) + 25;
  new_height = new_height.toString();
  $("#" + videoID).html(
    '<video id="player' +
      video_id +
      '" class="video-js" controls preload="auto" width="' +
      v_width +
      '" height="' +
      v_height +
      '"' +
      'poster="' +
      imagelink +
      '" data-setup="{}">' +
      '<source id="vlinkmp4" src="' +
      mp4videolink +
      '" type="video/mp4">' +
      '<source id="vlinkweb" src="' +
      webmvideolink +
      '" type="video/webm">' +
      '<object width="' +
      v_width +
      '" height="' +
      new_height +
      '" type="application/x-shockwave-flash" data="player.swf">' +
      '<param name="movie" value="//www.tienganh123.com/jwplayer/player.swf">' +
      '<param name="flashvars" value="controlbar=over&amp;image=' +
      imagelink +
      "&amp;file=" +
      flvvideolink +
      '">' +
      '<img src="' +
      imagelink +
      '" width="' +
      v_width +
      '" height="' +
      v_height +
      '" alt="h?c ti?ng Anh tr?c tuy?n ti?n ích, hi?u qu? v?i ti?ng Anh 123">' +
      "</object>" +
      '<p class="vjs-no-js">' +
      "To view this video please enable JavaScript, and consider upgrading to a web browser that" +
      '<a href="http://videojs.com/html5-video-support/" target="_blank">supports HTML5 video</a>' +
      "</p>" +
      "</video>" +
      '<div class="img_play_video" onclick="this.style.display=\'none\'; this.previousElementSibling.style.display = \'block\'; this.previousElementSibling.play()" style="background: url(' +
      imagelink +
      "); width: " +
      v_width +
      "px;height: " +
      v_height +
      "px; background-size: 100% 100%; cursor: pointer; position:relative; margin: -" +
      parseInt(v_height) +
      'px auto 0px; text-align:center; z-index: 1;"><div class="video_bgblack"></div><div class="video_icon" style="top: ' +
      topposter +
      'px"></div></div>'
  );
  $(".img_play_video").live("click", function () {
    var _self = $(this);
    $(".vjs-big-play-button")
      .eq(_self.index(".img_play_video"))
      .trigger("click");
  });
  video_id += 1;
}

function exitFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.mozCancelFullScreen) {
    document.mozCancelFullScreen();
  } else if (document.webkitExitFullscreen) {
    document.webkitExitFullscreen();
  }
}
function fnReloadFunctionSystem() {
  // hideNonGoldenKidsMember();
  if ($(".uba_audioButton").length > 0) {
    if (ie_vs && ie_vs < 9) {
      $.getScript(
        "//www.tienganh123.com/file/common/libAudio/js/audio_ie8.js",
        function () {
          $("#ubaPlayer").ubaPlayer_game({
            codecs: [{ name: "MP3", codec: "audio/mpeg;" }],
            playStartCallback: PlayingAudioHide,
            stopCallback: stopAudioHide,
          });
        }
      );
    } else {
      $.getScript(
        // "//www.tienganh123.com/file/common/libAudio/js/audioShort.js",
        "./file/common/libAudio/js/audioShort.js",
        function () {
          $("#ubaPlayer").ubaPlayer({
            codecs: [{ name: "MP3", codec: "audio/mpeg;" }],
            isgPaid: true,
          });
        }
      );
    }
  }
  // record  ./file/learn/child/pc/record/record.tpl",
  if ($.browser.chrome) {
    var loc_url = location.protocol + "//" + location.host + "/",
      _url = loc_url.includes("127")
        ? "./file/learn/child/pc/record/record.tpl"
        : "/learnEnglishForKids/file/learn/child/pc/record/record.tpl";
    $.ajax({
      url: _url,
      type: "GET",
      timeout: 15000,
      start: function () {},
      success: function (temp) {
        if (window.sk_detect_get_temp1) {
          clearTimeout(window.sk_detect_get_temp1);
        }
        _tpl = new jSmart(temp);
        _res = _tpl.fetch();
        $("#kr_arrecord").html(_res);

        var txt = "";
        var count_word = 0;
        $(".recording_user").each(function (index, ele) {
          if (data_vocab.new_words[index].homo) {
            $(ele).attr("arrhomo", data_vocab.new_words[index].homo.join("|"));
          }
        });
        $(".recording_user").click(function () {
          count_word++;
          //fix vi tri recorder
          var _self = $(this);
          $(".recording_user").removeClass("record_act");
          _self.addClass("record_act");
          var _topre =
            $(".evpp_arword").eq(_self.parent().parent().index()).position()
              .top + 390;
          var _leftre =
            $(".evpp_arword").eq(_self.parent().parent().index()).position()
              .left - 90;
          $("#kr_arrecord").css({ top: _topre, left: _leftre });
          $("#kr_arrecord").show();
          $("html, body").animate(
            { scrollTop: $("#kr_arrecord").offset().top - 240 },
            500
          );
          $(".kr_bgyellow").removeClass("kr_bgyellow");
          if (count_word > 2 && !document.getElementById("goldenkids_member")) {
            $("#kr_arresult, #kr_tresult, #kr_arbutton").css("display", "none");
            $("#kr_none_kids").css("display", "block");
            $("#kr_audio").jPlayer("stop");
          } else {
            //$('#start_record').trigger('click');
            //startRecording();
            //$("#krb_arstop").addClass('mode_click');
            $(
              "#krr_verline, #krb_arrecord, #krb_arspeak, #krr_arscore, #kr_tresult, #krr_arwave, #krb_arstop"
            ).css("display", "none");
            $("#krrt_ins")
              .css("display", "table-cell")
              .text(
                "Bạn hãy kích chuột vào biểu tượng micro hoặc ấn phím Enter để bắt đầu ghi âm..."
              );
            $("#krr_ispeak").css("display", "block");
            $("#krrt_text").html("");
            //recognition.stop();
            $("#kr_araudio").trigger("click");
            stopRecording();
            $(this).parent().find(".evppw_ten").addClass("kr_bgyellow");
            txt = $(this).parent().find(".evppw_ten").text();
            txt = replace_txt(txt);
          }
        });
        $("#krr_ispeak")
          .unbind("click")
          .bind("click", function () {
            $("#krb_arrecord").trigger("click");
            $("#krb_arstop").removeClass("act");
            $("#krr_ispeak").css("display", "none");
            $(".krrw_wave").each(function (index, ele) {
              $(ele).wave_random();
            });
            $("#krrt_text").attr("result", txt);
          });

        var id_start = "krr_ispeak";
        var text_record = "krrt_text";
        $("#krr_ispeak").speech_chrome({
          id_start: id_start,
          text_record: text_record,
        });
      },
      error: function (er) {
        var _this = this;
        window.sk_detect_get_temp1 = setTimeout(function () {
          $.ajax(_this);
        }, 15000);
      },
    });
  } else {
    if ($(".recording_user").length > 0) {
      var audio_curr = "",
        n_record = 0;
      $(".recording_user")
        .unbind("click")
        .bind("click", function () {
          $(".playing").click();
          n_record++;
          if (n_record < 3) {
            play_audio_times = 0;
          }
          //top_record=$(this).position().top+80;
          //$('.record_dialog').css('top',top_record);
          //fix vi tri recorder
          var _self = $(this);
          var _topre =
            $(".evpp_arword").eq(_self.parent().parent().index()).position()
              .top + 335;
          var _leftre =
            $(".evpp_arword").eq(_self.parent().parent().index()).position()
              .left - 236;
          $(".record_dialog").css({ top: _topre, left: _leftre });
          $(".record_dialog").show();
          $("html, body").animate(
            { scrollTop: $(".record_dialog").offset().top - 50 },
            500
          );
          if ($.browser.msie) {
            $("#bx_record").html(
              "Bạn hãy dùng trình duyệt firefox hoăc chrome để dùng được tính năng ghi âm so sánh này."
            );
            $(".box_rec").css({ margin: "10px 0px 10px -40px", color: "red" });
            $(".form_send_rec").css("height", "175px");
          }
          if (!goldenkids_member() && n_record >= 3 && !$.browser.msie) {
            play_audio_times = 5;
            $("#bx_record").html(
              "Bạn phải là thành viên VIP của tiếng Anh 123 mới được sử dụng tiếp chức năng này."
            );
            $(".box_rec").css({ margin: "10px 0px 10px -40px", color: "red" });
            $(".form_send_rec").css("height", "175px");
          }
          audio_curr = $(this).attr("file_audio");
          $(".audio_goc").attr("media-url", audio_curr);
        });
      $(".close_recorder").live("click", function () {
        $(".record_dialog").hide();
        $(".playing").click();
      });
    }

    // event
    $("#evp_arplay").append(
      '<div class="record_dialog">' +
        '<div class="form_send_rec">' +
        '<div class="form_top_rec"><img src="//data.tienganh123.com/images/v2/home/icon_voice.png" class="rec_icon">Thu âm để so sánh<a class="rcd_close_box" href="javascript:;" style="display: inline;"></a> <div style="float:right;"><img src="/file/common/lesson/images/close.png" class="close_recorder" style="cursor:pointer" /></div>' +
        '<div class="area_recoder0 rec_box rec_boxfix" id="are_recoderfix">' +
        '<div class="rec_title"><strong style="color:#ed1f24"></strong>audio gốc: <span class="span-audio"><span class="uba_audioButton audio_goc" media-url=""></span></span></div>' +
        '<div class="rec_content" style="padding-top:15px;">' +
        '<div class="box_rec">' +
        "<center>" +
        '<span id="rs_recorder" style="display: none;"></span>' +
        "</center>" +
        '<div id="bx_record">' +
        '<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="//download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=7,0,0,0" width="400" height="200" id="audioControl" align="middle">' +
        '<param name="allowScriptAccess" value="sameDomain">' +
        '<param name="allowFullScreen" value="false">' +
        '<param name="movie" value="/file/common/lesson/js/record.swf">' +
        '<param name="quality" value="high">' +
        '<param name="bgcolor" value="#fff">' +
        '<embed src="/file/common/lesson/js/record.swf?playMediaID=0&amp;autoplay=0" width="220" height="140" type="application/x-shockwave-flash" pluginspage="//get.adobe.com/flashplayer/">' +
        "</object>" +
        "</div>" +
        "</div>" +
        "</div>" +
        '<div class="clear"></div>' +
        "</div>" +
        "</div></div></div>"
    );
    $(".record_dialog .span-audio").css("display", "inline-block");
  }
  // end record

  $.fn.smiah({
    sr: "//goldenkids-data.tienganh123.com/file/learn/child/public/audio/vip_only_audio",
    id: "au_nonekids",
  });

  $.each(data_vocab.new_words, function (arindex, arval) {
    $.fn.smiah({
      sr: data_vocab.url_data + data_vocab.new_words[arindex].audio_link,
      id: "auword" + arindex,
    });
  });

  if (!document.getElementById("goldenkids_member")) {
    //$('video').attr('controls',false);
  }
  /*
    if(!document.getElementById('goldenkids_member')){
        for($i=1;  $i<$('.evvt_bg').length; $i++){
            $('.evvt_bg').eq($i).addClass('evvt_bg_disable');
        }
    }
    */
  data_vocab.artime_nonkids = [];
  data_vocab.artime_nonkids2 = [];
  $(".evvt_bg").each(function (index, ele) {
    var _artime = $(ele).attr("attime").split(".");
    $(ele).attr("attime", parseInt(_artime[0] * 60) + parseInt(_artime[1]));
    data_vocab.artime_nonkids.push(parseInt($(ele).attr("attime")) + 10);
    data_vocab.artime_nonkids2.push(parseInt($(ele).attr("attime")));
  });
  var count_click = 0;
  $(".evppw_pic")
    .unbind("click")
    .bind("click", function () {
      var _self = $(this);
      $(".evpp_arword").removeClass("evpp_arword_active");
      $(".evpp_arword").eq(_self.attr("atin")).addClass("evpp_arword_active");
      count_click++;
      if (count_click >= 3 && !document.getElementById("goldenkids_member")) {
        $.fn.smpah({
          id: "au_nonekids",
          stopasm: true,
          callback: function () {
            $(".evpp_arword")
              .eq(_self.attr("atin"))
              .removeClass("evpp_arword_active");
          },
        });
      } else {
        $.fn.smpah({
          id: "auword" + _self.attr("atin"),
          stopasm: true,
          callback: function () {
            $(".evpp_arword")
              .eq(_self.attr("atin"))
              .removeClass("evpp_arword_active");
          },
        });
      }
    });

  // video
  var vid = document.getElementById("player1");
  $(".evvt_bg")
    .unbind("click")
    .bind("click", function () {
      var _self = $(this);
      if (!$(this).hasClass("evvt_bg_disable")) {
        $(".evvt_bg").removeClass("evvt_bg_active");
        $(this).addClass("evvt_bg_active");
        vid.currentTime = $(this).attr("attime");
        vid.play();
        $(".img_play_video").css("display", "none");
        /*
            if($.browser.chrome){
                $('.evvv_loading').css('display','block');
            }
            */
      }
    });

  vid.onplaying = function () {
    $(".img_play_video").css("display", "none");
    $(".evvv_loading").fadeOut(300);
    vid.ontimeupdate = function () {
      if (Math.floor(vid.currentTime) < $(".evvt_bg").eq(0).attr("attime")) {
        $(".evvt_bg").removeClass("evvt_bg_active");
      } else {
        $(".evvt_bg").each(function (index, ele) {
          if ($(ele).attr("attime") <= Math.floor(vid.currentTime)) {
            $(".evvt_bg").removeClass("evvt_bg_active");
            $(ele).addClass("evvt_bg_active");
          }
        });
      }
      if (!document.getElementById("goldenkids_member")) {
        $(".evvt_bg").each(function (index, ele) {
          if (
            (Math.floor(vid.currentTime) > data_vocab.artime_nonkids[index] &&
              Math.floor(vid.currentTime) <
                data_vocab.artime_nonkids2[index + 1]) ||
            Math.floor(vid.currentTime) >
              data_vocab.artime_nonkids[data_vocab.artime_nonkids.length - 1]
          ) {
            vid.currentTime = 0;
            vid.pause();
            setTimeout(function () {
              vid.pause();
              $(".img_play_video").css({ display: "block" });
              exitFullscreen();
            }, 100);
          }
        });
        /*
                if(jQuery.inArray(Math.floor(vid.currentTime), data_vocab.artime_nonkids) != -1){
                    vid.pause();
                    vid.currentTime = 0;
                    $('.img_play_video').css({'display':'block'});
                    data_vocab.mode_nonkids = false;
                    $('.evvt_bg').removeClass('evvt_bg_active');
                }
                */
      }
    };
  };
  /*
    vid.onseeked = function() {
        if(!document.getElementById('goldenkids_member')){
            if(Math.floor(vid.currentTime) >= data_vocab.artime_nonkids[1] && data_vocab.mode_nonkids == false){
                vid.currentTime = 0;
                vid.pause();
                setTimeout(function(){
                    vid.pause();
                    $('.img_play_video').css({'display':'block'});
                },100)
            }

        }
    }
    */
  vid.onended = function () {
    $(".evvt_bg").removeClass("evvt_bg_active");
    $(".img_play_video").css({ display: "block" });
  };

  /*
    if($.browser.chrome){
        $('.img_play_video').unbind('click').bind('click',function(){
            $('.evvv_loading').css('display','block');
        })
    }
    */

  // disable right click video
  if (!document.getElementById("goldenkids_member")) {
    $(document).ready(function () {
      $("#ev_arvideo").bind("contextmenu", function () {
        return false;
      });
    });
  }
}

$(document).ready(function () {
  // import css file
  var head = document.getElementsByTagName("head")[0];
  var files = [
    // /file/learn/child/dungchung/lib_new_en/kids_lib/style.css
    //"./file/learn/child/dungchung/lib_new_en/kids_lib/style.css",
    "//noidung.tienganh123.com/file/common/lesson/css/lesson.css",
    "./file/learn/child/pc/ta345_new/vocab.css",
    "./file/learn/child/pc/record/record.css",
    "./file/learn/child/dungchung/lib_new_en/videojs/videojs.css",
  ];

  function getLinkGoldenKids(e, i) {
    return e + "_GOLDENKIDS." + i;
    // return goldenkids_member() ? e + "_GOLDENKIDS." + i : e + "_GOLDENKIDS." + i;
  }

  for (var i = 0, l = files.length; i < l; i++) {
    var link = document.createElement("link");
    link.href = files[i];
    link.rel = "stylesheet";
    link.type = "text/css";
    head.appendChild(link);
  }
  /* load temp */
  $.ajax({
    url: $("#area_evocab").attr("link_json"),
    dataType: "json",
    type: "GET",
    cache: true,
    timeout: 15000,
    beforeSend: function () {
      //co the dung de hien thi hinh anh loading khi cho du lieu ve
      $("#area_evocab").html(
        "<center><img id='img_loading' src='//goldenkids-data.tienganh123.com/file/learn/child/pc/kids_lesson/img/loading.gif' /></center>"
      );
    },
    success: function (param) {
      data_vocab = param;
      if (window.sk_detect_get_json) {
        clearTimeout(window.sk_detect_get_json);
      }

      $.ajax({
        url: "./file/learn/child/pc/ta345_new/vocab.tpl",
        type: "GET",
        timeout: 15000,
        start: function () {},
        success: function (temp) {
          if (window.sk_detect_get_temp1) {
            clearTimeout(window.sk_detect_get_temp1);
          }
          data_vocab.url = "./file/learn/child/pc/ta345_new/";
          data_vocab.url_data =
            "https://goldenkids-data.tienganh123.com/file/learn/child/ta345_new/data/";
          _tpl = new jSmart(temp);
          _res = _tpl.fetch(data_vocab);
          $("#area_evocab").html(_res);
          console.log(data_vocab.type);
          if (data_vocab.type) {
            var flvvideolink = getLinkGoldenKids(
              data_vocab.url_data + data_vocab.video_link,
              "flv"
            );
            var mp4videolink = getLinkGoldenKids(
              data_vocab.url_data + data_vocab.video_link,
              "mp4"
            );
            var webmvideolink = getLinkGoldenKids(
              data_vocab.url_data + data_vocab.video_link,
              "webm"
            );

            if (document.getElementById("goldenkids_member")) {
              var imagelink = getLinkGoldenKids(
                data_vocab.url_data + data_vocab.video_link,
                "jpg"
              );
            } else {
              var imagelink =
                "https://goldenkids-data.tienganh123.com/file/learn/child/pc/ta345_new/img/poster_video_gks.jpg";
            }
            console.log(flvvideolink);
            fnVideo(
              "evv_video",
              853,
              480,
              flvvideolink,
              mp4videolink,
              webmvideolink,
              imagelink
            );
            //PlayVideo_1("evv_video",853, 480,flvvideolink, mp4videolink, imagelink);
          } else {
            var flvvideolink =
              data_vocab.url_data + data_vocab.video_link + ".flv";
            var mp4videolink =
              data_vocab.url_data + data_vocab.video_link + ".mp4";
            var webmvideolink =
              data_vocab.url_data + data_vocab.video_link + ".webm";

            if (document.getElementById("goldenkids_member")) {
              var imagelink =
                data_vocab.url_data + data_vocab.video_link + ".jpg";
            } else {
              var imagelink =
                "https://goldenkids-data.tienganh123.com/file/learn/child/pc/ta345_new/img/poster_video_gks.jpg";
            }

            fnVideo(
              "evv_video",
              640,
              360,
              flvvideolink,
              mp4videolink,
              webmvideolink,
              imagelink
            );
            //PlayVideo_1("evv_video",638, 360,flvvideolink, mp4videolink, imagelink);
          }

          fnReloadFunctionSystem();
          $("body, html").animate(
            { scrollTop: $("#ev_tit").offset().top - 35 },
            1000
          );
          // fix trinh duyet
          if ($.browser.mozilla) {
            $("#ev_arvideo").css("left", "-33px");
          } else if ($.browser.msie) {
            $("#ev_arvideo").css({ width: "1017px", left: "-42px" });
          }
        },
        error: function (er) {
          var _this = this;
          window.sk_detect_get_temp1 = setTimeout(function () {
            $.ajax(_this);
          }, 15000);
        },
      });
    },

    complete: function () {},
    error: function (er) {
      console.log(er.responseText);
      var $this = this;
      setTimeout(function () {
        $.ajax($this);
      }, 15000);
    },
  });
  /* end load temp */
});
