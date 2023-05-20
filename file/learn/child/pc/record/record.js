var _isGetMedia = 0;
function startUserMedia(stream) {
  _isGetMedia = 1;
}
var audio_record = document.getElementById("audio_record");
function stopRecording() {}
window.onload = function init() {
  if ($(".recording_use").length > 0) {
    $(".recording_user").click(function () {
      if (!_isGetMedia) {
        navigator.mediaDevices.getUserMedia(
          { audio: true },
          startUserMedia,
          function (e) {}
        );
      }
    });
  }
};
// end record voice

// record text google speech
function replace_txt(str) {
  if (str.indexOf(".") > 0) {
    str = str.replace(/\./g, "");
  }
  if (str.indexOf("!") > 0) {
    str = str.replace(/!/g, "");
  }
  if (str.indexOf("?") > 0) {
    str = str.replace(/\?/g, "");
  }
  if (str.indexOf(",") > 0) {
    str = str.replace(/,/g, "");
  }
  if (str.indexOf("/") > 0) {
    str = str.replace(/\//g, "");
  }
  if (str.indexOf(":") > 0) {
    str = str.replace(/:/g, "");
  }
  if (str.indexOf("’") > 0) {
    str = str.replace(/'/g, "'");
  }
  str = str.toLowerCase();
  str = $.trim(str);
  return str;
}
/*CHAM DIEM LUYEN TAP*/
// function kr_score() {
//   var txt_user = replace_txt($("#krrt_text").text());
//   var txt_true = $.trim(
//     $("#krrt_text").attr("result").replace(/-/g, " ").replace(/\s+/g, " ")
//   );
//   var link_post =
//     $("#contents").length == 1
//       ? "ajax/service/smarttext"
//       : "ajax/ajax/service/smarttext";
//   $.post(
//     "/" + link_post,
//     { string1: txt_true, string2: txt_user, type: "smarttext" },
//     function (obj) {
//       var data = obj.split("|");
//       var persent = (parseFloat(data[1]) / 10) * 100;

//       $("#krrs_number").text(Math.round(persent * 100) / 100 + "%");
//       if (Math.round(persent * 100) / 100 <= 50) {
//         $("#kr_tresult").text("Bạn hãy làm lại để đạt điểm cao hơn nhé!");
//       } else if (
//         Math.round(persent * 100) / 100 > 50 &&
//         Math.round(persent * 100) / 100 <= 70
//       ) {
//         $("#kr_tresult").text("Bạn làm khá tốt. Cố gắng hơn nữa nhé!");
//       } else if (
//         Math.round(persent * 100) / 100 > 70 &&
//         Math.round(persent * 100) / 100 <= 90
//       ) {
//         $("#kr_tresult").text("Bạn làm rất tốt. Cố gắng thêm để đạt 100% nhé.");
//       } else if (Math.round(persent * 100) / 100 > 90) {
//         $("#kr_tresult").text("Bạn rất xuất sắc. Cố gắng phát huy nhé!");
//       }
//     }
//   );
// }
var n_score = 0;

function kr_score() {
  n_score++;
  var txt_user = replace_txt($("#krrt_text").text());
  var txt_true = $.trim(
    $("#krrt_text").attr("result").replace(/-/g, " ").replace(/\s+/g, " ")
  );
  console.log(txt_true);
  txt_true = replace_txt(txt_true);
  var str1 = txt_user.split(""),
    str2 = txt_true.split("");
  let persent = 0,
    test = [];
  str1.filter(function (val, i) {
    const ele = str2[i];
    if (val === ele) {
      test.push(val);
    }
    return test;
  });

  persent = Math.floor((test.length * 100) / str2.length);
  $("#krrs_number").text(persent + "%");
  if (persent <= 50) {
    $("#kr_tresult").text("Bạn hãy làm lại để đạt điểm cao hơn nhé!");
  } else if (persent > 50 && persent <= 70) {
    $("#kr_tresult").text("Bạn làm khá tốt. Cố gắng hơn nữa nhé!");
  } else if (persent > 70 && persent <= 90) {
    $("#kr_tresult").text("Bạn làm rất tốt. Cố gắng thên đêt đạt 100% nhé.");
  } else if (persent > 90) {
    $("#kr_tresult").text("Bạn rất xuất sắc. Cố gắng phát huy nhé!");
  }
}

function showInstructionRecord() {
  if ($("#show_hd_record").length > 0) {
    $("#kr_arrecord").hide();
    $("#show_hd_record").show();
  } else {
    $("body").append(
      '<div id="show_hd_record" style="position: fixed;top: 0px;bottom: 0px;right: 0px;left: 0px;background: #0000005c;z-index: 99999; display:block"><div class="content_hd zoomIn animated" style="width: 80%;margin: 20px auto;background: #fff;height: 570px;border-radius: 5px;"><div class="cont" style="padding: 30px; float: left"><h3>Bạn nhìn vào thanh trình duyệt và làm theo hướng dẫn bên dưới</h3><p>Bạn click vào biểu tượng như hình 1 trên thanh trình duyệt</p><p>Có 1 hộp thoại hiện ra như hình 2. Bạn click vào lựa chọn đầu tiên (Always allow ....) ấn nút Done là xong (như hình 2) sau đó bạn có thể ghi âm được.</p><div style =" float: left; margin-right: 10px"><img src ="/file/common/huong-dan/chrome1.png"  style="width: 307px; vertical-align: top; margin-right:10px;height:141px; border: 2px solid green"/><center>(hình 1)</center></div> <div style="float: left"><img src ="/file/common/huong-dan/chrome2.png" style="width: 333px; height:252px; border:2px solid green" /><center>(hình 2)</center></div></div><div class="fa far" onclick="close_hd(this)" style="cursor:pointer;float: right;font-size: 30px;margin: 20px;">x</div></div></div>'
    );
  }
}
function close_hd(cmd) {
  $("#show_hd_record").hide();
}
(function ($) {
  // function wave
  $.fn.wave_random = function (options) {
    var defaults = { $top_min: 0, $top_max: 25 };
    var settings = $.extend({}, defaults, options);
    var _self = $(this);
    var _top;
    (function loop_wave() {
      _top =
        Math.floor(
          Math.random() * (settings.$top_max - settings.$top_min + 1)
        ) + settings.$top_min;
      _self.stop(true).animate({ top: _top }, 200, "linear", function () {
        loop_wave();
      });
    })();
  };
  var cvd_record = {
      //id_info:'info_record',
      id_info: "krrt_ins",
      is_recording: false,
      txt_upgrade:
        '(Web Speech API is not supported by this browser. Upgrade to <a href= "//www.google.com/chrome">Chrome</a> version 25 or later.)',
      txt_ins:
        "Bạn hãy kích chuột vào biểu tượng micro hoặc ấn phím Enter để bắt đầu ghi âm...",
      txt_speak_now: "Đang ghi âm - Hãy đọc bài ghi âm của bạn",
      txt_no_microphone:
        '(Quyền sử dụng microphone đã bị từ chối nên không ghi âm được. <button style="border:none; cursor:pointer; border-radius: 4px; background:#239e28; margin: 10px; font-size:14px; padding: 8px 10px; color:#fff" onclick= showInstructionRecord()>Thiết lập Microphone để thu âm</button>',
      txt_blocked:
        '(Quyền sử dụng microphone đã bị từ chối nên không ghi âm được. <button style="border:none; cursor:pointer; border-radius: 4px; background:#239e28; margin: 10px; font-size:14px; padding: 8px 10px; color:#fff" onclick= showInstructionRecord()>Thiết lập Microphone để thu âm</button>',
      txt_denied:
        '(Quyền sử dụng microphone đã bị từ chối nên không ghi âm được. <button style="border:none; cursor:pointer; border-radius: 4px; background:#239e28; margin: 10px; font-size:14px; padding: 8px 10px; color:#fff" onclick= showInstructionRecord()>Thiết lập Microphone để thu âm</button>',
      txt_start: " (Bạn hãy kích vào nút micro để thu âm.)",
      txt_no_speech:
        "Không nhận được giọng nói. Kiểm tra lại headphone của bạn.",
      recognizing: false,
      ignore_onend: false,
      id_start: "krr_ispeak",
      final_transcript: "",
      text_record: "krrt_text",
      start_timestamp: 0,
      showInfo: function (str) {
        document.getElementById(cvd_record.id_info).innerHTML = str;
      },
    },
    _speech = {
      init: function (option) {
        window.___gcfg = { lang: "en" };
        $.extend(cvd_record, option);
        if (!("webkitSpeechRecognition" in window)) {
          cvd_record.showInfo(cvd_record.txt_upgrade);
        } else {
          var recognition = new webkitSpeechRecognition();
          recognition.continuous = true;
          recognition.lang = "en-IN";
          recognition.interimResults = true;
          var result_text = document.getElementById(cvd_record.text_record);
          recognition.onstart = function () {
            cvd_record.recognizing = true;
            cvd_record.is_recording = true;
            cvd_record.showInfo(cvd_record.txt_speak_now);
            $("#text_record").html("");
            $("#krrt_text").html("");
          };

          recognition.onerror = function (event) {
            recognition.stop();
            $("#krb_arrecord").css("display", "inline-block");
            $("#krb_arstop").css("display", "none");

            $(".krrw_wave").each(function (index, ele) {
              $(ele).stop(true).css("top", "0px");
            });

            if (!$("#krb_arstop").hasClass("act")) {
              $("#krb_arstop").addClass("act");
            }

            if (event.error == "no-speech") {
              console.log("no-speech");
              $("#krrt_ins").text(cvd_record.txt_no_speech);
              cvd_record.showInfo(cvd_record.txt_no_speech);
              cvd_record.ignore_onend = true;
            }

            if (event.error == "audio-capture") {
              console.log("no-microphone");
              $("#krrt_ins").text(cvd_record.txt_no_microphone);
              cvd_record.showInfo(cvd_record.txt_no_microphone);
              cvd_record.ignore_onend = true;
            }
            if (event.error == "not-allowed") {
              console.log("not-allowed");
              if (event.timeStamp - cvd_record.start_timestamp < 100) {
                console.log("blocked");
                $("#krrt_ins").text(cvd_record.txt_blocked);
                cvd_record.showInfo(cvd_record.txt_blocked);
              } else {
                console.log("denied");
                $("#krrt_ins").text(cvd_record.txt_denied);
                cvd_record.showInfo(cvd_record.txt_denied);
              }
              cvd_record.ignore_onend = true;
            }
            stopRecording();
          };

          recognition.onend = function () {
            cvd_record.recognizing = false;
            if (cvd_record.ignore_onend) {
              return;
            }
            $(".krrw_wave").each(function (index, ele) {
              $(ele).stop(true).css("top", "0px");
            });
            if (!$("#krb_arstop").hasClass("act")) {
              recognition.stop();
              kr_score();
              if (cvd_record.is_recording) {
                cvd_record.is_recording = false;
                toggleRecordingVoice();
              }
              $("#krr_arwave, #krb_arstop, #krrt_ins").css("display", "none");
              $("#krr_arscore, #kr_tresult").css("display", "block");
              $("#krr_verline, #krb_arrecord, #krb_arspeak").css(
                "display",
                "inline-block"
              );
            }

            if (window.getSelection) {
              window.getSelection().removeAllRanges();
              var range = document.createRange();
              range.selectNode(result_text);
              window.getSelection().addRange(range);
            }
          };

          recognition.onresult = function (event) {
            $("#krrt_ins").css("display", "none");
            var interimTranscripts = "";
            if (typeof event.results == "undefined") {
              recognition.onend = null;
              console.log("null");
              recognition.stop();
              if (cvd_record.is_recording) {
                cvd_record.is_recording = false;
                toggleRecordingVoice();
              }
              cvd_record.showInfo(cvd_record.id_upgrade);
              return;
            }
            for (var i = event.resultIndex; i < event.results.length; ++i) {
              if (event.results[i].isFinal) {
                cvd_record.final_transcript += event.results[i][0].transcript;
              }
            }
            for (var i = event.resultIndex; i < event.results.length; i++) {
              var transcript = event.results[i][0].transcript;
              transcript.replace("\n", "<br>");
              if (event.results[i].isFinal) {
                finalTranscripts += transcript;
              } else {
                interimTranscripts += transcript;
              }
            }
            if ($("#krb_arstop").hasClass("mode_click")) {
              result_text.innerHTML =
                cvd_record.final_transcript +
                "<span>" +
                interimTranscripts +
                "</span>";
            }
            if (
              replace_txt($("#krrt_text").text()) ==
                $.trim(
                  $("#krrt_text")
                    .attr("result")
                    .replace(/-/g, " ")
                    .replace(/\s+/g, " ")
                ) ||
              jQuery.inArray(
                replace_txt($("#krrt_text").text()),
                $(".recording_user")
                  .eq($(".record_act").index(".recording_user"))
                  .attr("arrhomo")
                  .split("|")
              ) != -1
            ) {
              $("#krrt_text").text(
                $.trim(
                  $("#krrt_text")
                    .attr("result")
                    .replace(/-/g, " ")
                    .replace(/\s+/g, " ")
                )
              );
              $("#krb_arstop").trigger("click");
            }
          };

          $(document).keyup(function (e) {
            if ($("#kr_arrecord").css("display") == "block") {
              if ($("#krb_arstop").css("display") == "inline-block") {
                if (e.keyCode == 13) {
                  $("#krb_arstop").trigger("click");
                }
              } else if ($("#krb_arrecord").css("display") == "inline-block") {
                if (e.keyCode == 13) {
                  $("#krb_arrecord").trigger("click");
                }
              } else if ($("#krr_ispeak").css("display") == "block") {
                if (e.keyCode == 13) {
                  $("#krr_ispeak").trigger("click");
                }
              }
            }
          });

          $("#krb_arstop")
            .unbind("click")
            .bind("click", function () {
              if ($("#krb_arstop").hasClass("mode_click")) {
                $("#krb_arstop").removeClass("mode_click");
                if (!$("#krb_arstop").hasClass("act")) {
                  $("#krb_arstop").addClass("act");
                }
                recognition.stop();
                kr_score();
                if (cvd_record.is_recording) {
                  cvd_record.is_recording = false;
                  toggleRecordingVoice();
                }
                $("#krr_arwave, #krb_arstop, #krrt_ins").css("display", "none");
                $("#krr_arscore, #kr_tresult").css("display", "block");
                $("#krr_verline, #krb_arrecord, #krb_arspeak").css(
                  "display",
                  "inline-block"
                );
              }
            });
          $("#krb_arrecord")
            .unbind("click")
            .bind("click", function () {
              $("#krb_arstop").addClass("mode_click");
              $(
                "#krr_verline, #krb_arrecord, #krb_arspeak, #krr_arscore, #kr_tresult"
              ).css("display", "none");
              $("#krrt_ins").css("display", "table-cell");
              $("#krr_arwave, #krb_arstop").css("display", "block");
              $("#krb_arstop").css("display", "inline-block");
              $("#krrt_text").html("");
              $("#krrs_number, #kr_tresult").text("");
              cvd_record.final_transcript = "";
              cvd_record.ignore_onend = false;
              cvd_record.is_recording = true;
              $("#audio_record").attr("src", "");
              recognition.start();
              console.log("start");
              toggleRecordingVoice();
              cvd_record.start_timestamp = event.timeStamp;
              $(".krrw_wave").each(function (index, ele) {
                $(ele).wave_random();
              });
              audio_record.pause();
              $("#krbsp_icon").removeClass("krbsp_icon_active");
              $("#krb_arstop").removeClass("act");
            });
          $("#krb_arspeak")
            .unbind("click")
            .bind("click", function () {
              audio_record.play();
              $("#krbsp_icon").addClass("krbsp_icon_active");
            });
          $("#kr_bclose").click(function () {
            audio_record.pause();
            if (cvd_record.recognizing) {
              recognition.stop();
              if (cvd_record.is_recording) {
                cvd_record.is_recording = false;
                toggleRecordingVoice();
              }
            }
            $(".kr_bgyellow").removeClass("kr_bgyellow");
            $("#kr_arrecord").hide();
            $("#krrt_text").text("");
            $(".status_cham_diem").text("");
          });
          $("#kr_araudio")
            .unbind("click")
            .bind("click", function () {
              if (!$("#krb_arstop").hasClass("act")) {
                $("#krb_arstop").addClass("act");
              }
              recognition.stop();
              if (cvd_record.is_recording) {
                cvd_record.is_recording = false;
                toggleRecordingVoice();
              }
            });
        }
      },
    };
  $.fn.speech_chrome = function (option) {
    if (typeof option === "object" || !option) {
      return _speech.init.apply(this, arguments);
    } else {
      $.error("method " + option + " does not exist not jQuery");
    }
  };
  var recorder_voice, gumStream;
  function toggleRecordingVoice() {
    console.log("record - " + cvd_record.is_recording);
    if (recorder_voice && recorder_voice.state == "recording") {
      console.log("s");
      recorder_voice.stop();
      gumStream.getAudioTracks()[0].stop();
    } else {
      console.log("s1");
      navigator.mediaDevices
        .getUserMedia({
          audio: true,
        })
        .then(function (stream) {
          gumStream = stream;
          recorder_voice = new MediaRecorder(stream);
          console.log("s2");
          recorder_voice.ondataavailable = function (e) {
            console.log(cvd_record.is_recording);
            if (!cvd_record.is_recording) {
              var url = URL.createObjectURL(e.data);
              console.log(url);
              $("#audio_record").attr("src", url);
            }
          };
          recorder_voice.start();
        });
    }
  }
})(jQuery);
