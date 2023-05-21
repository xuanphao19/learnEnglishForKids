function is_not_firefox() {
  var ua = navigator.userAgent.toLowerCase();
  if (ua.indexOf("firefox") == -1) {
    return true;
  } else {
    return false;
  }
}
function load_css(link_css) {
  var cre = document.createElement("link");
  cre.type = "text/css";
  cre.href = link_css;
  cre.rel = "stylesheet";
  var x = document.getElementsByTagName("head")[0];
  x.appendChild(cre);
}
var sever_vocab_kd = "https://www.tienganh123.com/file/common/game123/";
var hd_pc =
  '<center style="font-size:22px;">Em nghe và nhìn một từ. Sau đó em hãy gõ lại từ đó.</center>\
<div style="margin-left:20px; margin-top:20px">\
<u><strong  style="font-size:22px;">Cách làm:</strong></u><br />\
<p style="margin-left:20px;"> \
- Click vào chữ cái để tạo thành từ vừa nghe được.<br />\
(Em có thể dùng bàn phím - <strong class="mark">Chú ý</strong>: tắt tiếng Việt trước khi gõ.)</em>)<br />\
- Ấn <strong class="mark">Enter</strong> hoặc click vào <strong class="mark">loa</strong> bên cạnh để nghe lại từ.<br />\
</p><center>Click vào nút <strong>Start</strong> để bắt đầu.</center>';
var hd_mobile =
  '<center style="font-size:22px;">Em nghe và nhìn một từ. Sau đó em hãy gõ lại từ đó.</center>\
<div style="margin-left:20px; margin-top:20px">\
<u><strong  style="font-size:22px;">Cách làm:</strong></u><br />\
<p style="margin-left:20px;"> \
- Chạm vào chữ cái để tạo thành từ vừa nghe được.<br />\
- Chạm vào <strong class="mark">loa</strong> bên cạnh để nghe lại từ.<br />\
</p><center style="margin-top:30px">Chạm vào nút <strong>Start</strong> để bắt đầu.</center>';
var temp_game =
  '<center><div class="ge"><div class="ge evph_line"></div><div class="ge evph_bgtext">Thực hành từ vựng</div><div class="ge evph_line"></div></div></center><div id="game_ubaPlayer"></div>\
<div id="game_vocab_kd"></div>\
<div class="box">\
<div id="vocab_keyboard_start">\
<div class="instruction_game_vbkd"></div>\
<div class="btn_start btn_start_vbkd" id="btn_start_vbkd"></div>\
</div><div id="vbkd_alert">\
<div class="end_game_box">\
<div class="end_game_box_text">\
<span class="text">YOUR RESULT</span><br /><span class="text" style="margin-top:10px; font-size: 16px; color:red;"> EM Ứ PHẢI VIP NHÉ!</span><br /><div class="total_score_end"></div>\
<div class="bt_game" id="do_again" title="do again"></div>\
</div>\
</div>\
<div class="uba_ctrl vbkd_audio_alert" media-url="' +
  sever_vocab_kd +
  'audio/congratulation.mp3"></div>\
</div>\
<div id="vocab_keyboard">\
<div class="vb_relative vb_kbd_score"> <span class="score">0</span>/<span class="total_score">10</span> </div>\
<div id="box_game_cont"><div class="vb_relative uba_ctrl_game_hide uba_ctrl" media-url="" id="vb_kbd_audio" media-url=""><span class="audio_picture" style="background: none;"> <img class="stt_hideaudio" src="' +
  sever_vocab_kd +
  'images/loa1.png"> </span> </div>\
<div class="vb_relative" id="vb_kbd_input">\
<div id="vb_text_input"><span>word</span><span>**</span></div>\
<div id="vb_check_input"></div>\
</div>\
<div class="vb_absolute" id="vb_kbd_hint" title="click to hint"></div>\
</div><div class="vb_relative ltt_key_box">\
<div class="ltt_key_item uba_ctrl" media-url="" alt="q">Q</div>\
<div class="ltt_key_item uba_ctrl" media-url="" alt="w">W</div>\
<div class="ltt_key_item uba_ctrl" media-url="" alt="e">E</div>\
<div class="ltt_key_item uba_ctrl" media-url="" alt="r">R</div>\
<div class="ltt_key_item uba_ctrl" media-url="" alt="t">T</div>\
<div class="ltt_key_item uba_ctrl" media-url="" alt="y">Y</div>\
<div class="ltt_key_item uba_ctrl" media-url="" alt="u">U</div>\
<div class="ltt_key_item uba_ctrl" media-url="" alt="i">I</div>\
<div class="ltt_key_item uba_ctrl" media-url="" alt="o">O</div>\
<div class="ltt_key_item uba_ctrl" media-url="" alt="p">P</div>\
<div class="clear"></div>\
<div class="ltt_key_item uba_ctrl" media-url="" alt="a">A</div>\
<div class="ltt_key_item uba_ctrl" media-url="" alt="s">S</div>\
<div class="ltt_key_item uba_ctrl" media-url="" alt="d">D</div>\
<div class="ltt_key_item uba_ctrl" media-url="" alt="f">F</div>\
<div class="ltt_key_item uba_ctrl" media-url="" alt="g">G</div>\
<div class="ltt_key_item uba_ctrl" media-url="" alt="h">H</div>\
<div class="ltt_key_item uba_ctrl" media-url="" alt="j">J</div>\
<div class="ltt_key_item uba_ctrl" media-url="" alt="k">K</div>\
<div class="ltt_key_item uba_ctrl" media-url="" alt="l">L</div>\
<div class="clear"></div>\
<div class="ltt_key_item uba_ctrl" media-url="" alt="z">Z</div>\
<div class="ltt_key_item uba_ctrl" media-url="" alt="x">X</div>\
<div class="ltt_key_item uba_ctrl" media-url="" alt="c">C</div>\
<div class="ltt_key_item uba_ctrl" media-url="" alt="v">V</div>\
<div class="ltt_key_item uba_ctrl" media-url="" alt="b">B</div>\
<div class="ltt_key_item uba_ctrl" media-url="" alt="n">N</div>\
<div class="ltt_key_item uba_ctrl" media-url="" alt="m">M</div>\
</div>\
</div>\
</div>';
var non_vip_alert =
  '<a href="/huong-dan/214-quyen-loi-thanh-vien-vip-cua-tienganh123.html" target="_blank" title="quyá»n lá»£i thÃ nh viÃªn VIP"><img src="/file/common/game123/images/vip.png" /></a><span class="vbkd_close" title="close"></span>';
var non_kid_alert =
  '<a href="/huong-dan/2138-chuong-trinh-hoc-tieng-anh-tre-em-online-goldenkids.html" target="_blank" title="quyá»n lá»£i thÃ nh viÃªn goldenkids"><img src="/file/common/game123/images/kid.png" /></a><span class="vbkd_close"  title="close"></span>';
(function ($) {
  var obj_vbkd = {
      arr_char: [
        "q",
        "w",
        "e",
        "r",
        "t",
        "y",
        "u",
        "i",
        "o",
        "p",
        "a",
        "s",
        "d",
        "f",
        "g",
        "h",
        "j",
        "k",
        "l",
        "z",
        "x",
        "c",
        "v",
        "b",
        "n",
        "m",
      ],
      post_url: window.location.protocol + "//" + location.host + "/",
      id_game: "",
      start_word: 0,
      next_w: 0,
      score: 0,
      word_curr: [],
      word_list: [],
      number: 0,
      list_again: [],
      html_non_vip_kid: "",
      audio_non_vip_kid: sever_vocab_kd + "audio/game_over.mp3",
      tpl_game: temp_game,
      is_mobile: 0,
      is_tablet: 0,
      loc_audio: sever_vocab_kd + "vocab_keyboard/alphabet/",
      list_alphabet: [
        "q.mp3",
        "w.mp3",
        "e.mp3",
        "r.mp3",
        "t.mp3",
        "y.mp3",
        "u.mp3",
        "i.mp3",
        "o.mp3",
        "p.mp3",
        "a.mp3",
        "s.mp3",
        "d.mp3",
        "f.mp3",
        "g.mp3",
        "h.mp3",
        "j.mp3",
        "k.mp3",
        "l.mp3",
        "z.mp3",
        "x.mp3",
        "c.mp3",
        "v.mp3",
        "b.mp3",
        "n.mp3",
        "m.mp3",
      ],
    },
    game_vocab_kd = {
      check_vip_kid: function () {
        // console.log(obj_vbkd.kid);
        // if (typeof obj_vbkd.kid != "undefined") {
        //   if (goldenkids_member()) {
        //     return true;
        //   } else {
        //     obj_vbkd.html_non_vip_kid = non_vip_alert;
        //     return false;
        //   }
        // }
        // if (paidmember()) {
        //   return true;
        // } else {
        //   obj_vbkd.html_non_vip_kid = non_vip_alert;
        //   return false;
        // }
        return true;
      },
      check: function (str, value) {
        if (value.indexOf(str) == 0) {
          return true;
        } else {
          return false;
        }
      },
      input_key: function (key) {
        if (obj_vbkd.start_word == 0 && obj_vbkd.next_w == 1) {
          $("#vb_text_input span:first").html("");
          $("#vb_text_input span:last").show();
        }
        var str = $("#vb_text_input span:first").text();
        var str1 = $("#vb_text_input span:last").text();
        if (str != "") {
          str += key;
        } else {
          str = key;
        }
        // console.log(str);
        str = str.toLowerCase();
        obj_vbkd.word_curr.correct = obj_vbkd.word_curr.correct.toLowerCase();
        if (game_vocab_kd.check(str, obj_vbkd.word_curr.correct)) {
          obj_vbkd.start_word++;
          var n = str.length;
          if (
            obj_vbkd.word_curr.correct[n] == " " ||
            obj_vbkd.word_curr.correct[n] == "-"
          ) {
            console.log(n);
            str += obj_vbkd.word_curr.correct[n];
            if (obj_vbkd.word_curr.correct[n] == " ") {
              str1 = str1.replace(" ", "");
            } else {
              str1 = str1.replace("-", "");
            }
          }
          $("#vb_text_input span:first").text(str);
          str1 = str1.replace("*", "");
          $("#vb_text_input span:last").text(str1);
          $("#vb_check_input").removeClass("false").css("top", "-50px");
          if (str == obj_vbkd.word_curr.correct) {
            obj_vbkd.score++;
            $(".vb_kbd_score .score").text(obj_vbkd.score);
            if (obj_vbkd.is_mobile != 0) {
              $("#vb_check_input")
                .addClass("true")
                .animate({ top: "0px" }, 500);
              //game_vocab_kd.next();
              setTimeout(function () {
                game_vocab_kd.next();
              }, 2000);
            } else {
              $("#vb_check_input")
                .addClass("true")
                .animate({ top: "0px" }, 500, function () {
                  game_vocab_kd.next();
                });
            }
          }
        } else {
          $("#vb_check_input").addClass("false").animate({ top: "0px" }, 500);
        }
      },
      hint: function () {
        var key = obj_vbkd.word_curr.correct[obj_vbkd.start_word];
        if (key == " " || key == "-") {
          obj_vbkd.start_word += 1;
        }
        key = obj_vbkd.word_curr.correct[obj_vbkd.start_word];
        $(".ltt_key_item[alt=" + key + "]").click();
      },
      next: function () {
        if (obj_vbkd.score == 2 && !game_vocab_kd.check_vip_kid()) {
          $(".vbkd_audio_alert").attr("media-url", obj_vbkd.audio_non_vip_kid);
          $(".vbkd_audio_alert").click();
          $(".end_game_box")
            .addClass("box_non_vip")
            .html(obj_vbkd.html_non_vip_kid);
          $(".vbkd_close").click(function () {
            game_vocab_kd.do_again();
          });
          $("#vbkd_alert").toggle("slide", { direction: "right" }, 700);
        } else {
          if (obj_vbkd.number == obj_vbkd.score) {
            $(".vbkd_audio_alert").click();
            $(".total_score_end").text(
              obj_vbkd.number + " /" + obj_vbkd.number
            );
            $("#vbkd_alert").toggle("slide", { direction: "right" }, 700);
          } else {
            obj_vbkd.next_w = 0;
            $("#vb_text_input").animate({ top: "-47px", opacity: 0 }, 300);
            setTimeout(function () {
              game_vocab_kd.asign();
            }, 400);
          }
        }
      },
      do_again: function () {
        // random word_list
        if (game_vocab_kd.check_vip_kid()) {
          obj_vbkd.word_list = game_vocab_kd.random_arr(obj_vbkd.word_list);
        }
        obj_vbkd.score = 0;
        $(".vb_kbd_score .score").text(0);
        $("#vbkd_alert").toggle(
          "slide",
          { direction: "right" },
          500,
          function () {
            game_vocab_kd.asign();
          }
        );
      },
      random_arr: function (arr) {
        for (
          var j, x, i = arr.length;
          i;
          j = parseInt(Math.random() * i),
            x = arr[--i],
            arr[i] = arr[j],
            arr[j] = x
        );
        return arr;
      },
      // E:\A_TiengAnh123\Lop_4_test\file\common\game123\js\audio_game_vs1.js
      getAudio: function () {
        var loc_url = obj_vbkd.post_url,
          _url = loc_url.includes("127")
            ? "./file/common/game123/js/audio_game_vs1.js"
            : "/learnEnglishForKids/file/common/game123/js/audio_game_vs1.js";
        $.getScript(_url, function () {
          $("#game_ubaPlayer").ubaPlayer_game({
            audioButtonClass: "uba_ctrl",
            codecs: [{ name: "MP3", codec: "audio/mpeg;" }],
            playStartCallback: _PlayingAudioHide2,
            stopCallback: _stopAudioHide2,
          });
        });
      },
      asign: function () {
        $(".ltt_key_item.active").removeClass("active");
        $("#vb_check_input").removeClass("true").css("top", "-50px");
        var inx = obj_vbkd.score;
        obj_vbkd.start_word = 0;
        obj_vbkd.word_curr = obj_vbkd.word_list[inx];
        $("#vb_text_input span:first").text(obj_vbkd.word_curr.correct);
        var str_hide = "";
        for (var i = 0; i < obj_vbkd.word_curr.correct.length; i++) {
          if (obj_vbkd.word_curr.correct[i] == " ") {
            str_hide += " ";
          } else if (obj_vbkd.word_curr.correct[i] == "-") {
            str_hide += "-";
          } else {
            str_hide += "*";
          }
        }
        $("#vb_text_input span:last").hide().text(str_hide);
        $("#vb_kbd_audio").attr(
          "media-url",
          obj_vbkd.loc + obj_vbkd.word_curr.sound
        );
        $("#vb_text_input").animate(
          { top: "0px", opacity: 1 },
          700,
          function () {
            obj_vbkd.next_w = 1;
          }
        );
        $("#vb_kbd_audio").trigger("click");
      },
    },
    _game_vocab_kd = {
      init: function (option) {
        $.extend(obj_vbkd, option);
        if (obj_vbkd.loc.indexOf("http") < 0) {
          obj_vbkd.loc = "https://www.tienganh123.com" + obj_vbkd.loc;
        }
        var elm_html = $("#json_file");
        if (obj_vbkd.id_game != "") {
          elm_html = $("#" + obj_vbkd.id_game);
        } else {
          obj_vbkd.id_game = "json_file";
        }
        var json_file = elm_html.attr("link");
        $.ajax({
          url: json_file,
          type: "GET",
          dataType: "jsonp",
          success: function (data) {
            for (var i = 0; i < data.bai.length; i++) {
              obj_vbkd.word_list.push(data.bai[i]);
            }
            obj_vbkd.number = data.bai.length;
            _game_vocab_kd.get_html();
          },
        });
      },

      get_html: function () {
        var hd_game = hd_pc;
        if (obj_vbkd.is_mobile != 0) {
          hd_game = hd_mobile;
          load_css(sever_vocab_kd + "vocab_keyboard/css/m_style.css");
        } else {
          load_css(sever_vocab_kd + "vocab_keyboard/css/style.css");
          if (obj_vbkd.is_tablet != 0) {
            hd_game = hd_mobile;
          } else {
            hd_game = hd_pc;
          }
        }
        $("#" + obj_vbkd.id_game).html(obj_vbkd.tpl_game);
        $(".instruction_game_vbkd").html(hd_game);
        $(".vb_kbd_score .total_score").text(obj_vbkd.number);
        $(".ltt_key_item").each(function (i) {
          $(this).attr(
            "media-url",
            obj_vbkd.loc_audio + obj_vbkd.list_alphabet[i]
          );
        });
        game_vocab_kd.getAudio();

        $(".ltt_key_item").click(function () {
          $(".ltt_key_item.active").removeClass("active");
          $(this).addClass("active");
          var key = $(this).text();
          game_vocab_kd.input_key(key);
        });

        $("#btn_start_vbkd").click(function () {
          $(this).parent().toggle("slide", { direction: "right" }, 500);
          $(this).parent().css("display", "none");
          game_vocab_kd.asign();
        });
        $("#do_again").click(function () {
          game_vocab_kd.do_again();
        });
        $("#vb_kbd_hint").click(function () {
          game_vocab_kd.hint();
        });

        if (obj_vbkd.is_mobile == 0 && obj_vbkd.is_tablet == 0) {
          var bind_ev = "keypress";
          if (is_not_firefox()) {
            bind_ev = "keydown";
          }
          var code1 = 0,
            code = 0,
            n = 0,
            keyChar = "";
          $(document).bind(bind_ev, function (e) {
            n++;
            e.stopPropagation();
            code = e.keyCode ? e.keyCode : e.which;
            if (code != 231) {
              if (code == 8) {
                code = code1;
              } else {
                code1 = code;
              }
              if (code == 13) {
                $("#vb_kbd_audio").click();
              } else {
                keyChar = String.fromCharCode(code);
                keyChar = keyChar.toLowerCase();
                if ($.inArray(keyChar, obj_vbkd.arr_char) >= 0) {
                  $(".ltt_key_item[alt=" + keyChar + "]").click();
                }
              }
            }
          });
          $("input,textarea").on("keydown", function (e) {
            e.stopPropagation();
          });
          $("input,textarea").on("keypress", function (e) {
            e.stopPropagation();
          });
        }
      },
    };
  $.fn.vocab_kd = function (option) {
    if (game_vocab_kd[option]) {
      return game_vocab_kd[option].apply(
        this,
        Array.prototype.slice.call(arguments, 1)
      );
    } else if (typeof option === "object" || !option) {
      return _game_vocab_kd.init.apply(this, arguments);
    } else {
      $.error("method " + option + " does not exist not jQuery.vocab_kd");
    }
  };
})(jQuery);
// $("#game_vocab_kd").vocab_kd();
