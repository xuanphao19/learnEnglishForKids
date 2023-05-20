// // function check_show(e, i, n) {
// //   for (var t = [], o = [], a = !0, d = 0; d < i.length; d++) {
// //     var h = "t" + e + "_" + (d + 1),
// //       c = "r" + e + "_" + (d + 1);
// //     (t[d] = removespace(document.getElementById(h).value)),
// //       (o[d] = document.getElementById(c)),
// //       ("" == t[d] || "..." == t[d]) && ((o[d].innerHTML = required), (a = !1));
// //   }
// //   if ("show" != n) {
// //     if (a) {
// //       var r = !0;
// //       for (d = 0; d < i.length; d++)
// //         t[d] != i[d] && ((o[d].innerHTML = error), (r = !1));
// //       if (r)
// //         for (d = 0; d < i.length; d++)
// //           o[d].innerHTML = "<font color='FF00FF' >Perfect! </font>";
// //       else {
// //         var l = document.getElementById("show" + e);
// //         l.disabled = !1;
// //       }
// //     }
// //   } else
// //     for (d = 0; d < i.length; d++)
// //       o[d].innerHTML = "<font color='blue'>" + i[d] + "</font>";
// // }
// // function removespace(e) {
// //   if (((e = e.replace(/^\s*|\s*$/g, "")), "" == e)) return e;
// //   for (var i = e.split(" "), n = i[0], t = 1; t < i.length; )
// //     "" != i[t] && (n = n + " " + i[t]), t++;
// //   return n;
// // }
// // function show_msg(e) {
// //   if (null == e) {
// //     var i = document.getElementById("show_mes"),
// //       n = document.getElementById("translate");
// //     0 == dk
// //       ? ((i.innerHTML =
// //           "<font color='#EE7600'>Bài học đã được dịch, bạn hãy đưa chuột vào các câu tiếng Anh để xem.</font>"),
// //         (n.innerHTML =
// //           '<input type="button" id="translate_button" onclick="show_msg()" value="Đóng bài dịch" class="stt_translate" />'),
// //         (dk = 1))
// //       : ((i.innerHTML = "<font color='#EE7600'>Đã đóng bài dịch.</font>"),
// //         (n.innerHTML =
// //           '<input type="button" id="translate_button" onclick="show_msg()" value="Xem bài dịch"  class="stt_translate"/>'),
// //         (dk = 0));
// //   } else {
// //     var i = document.getElementById("show_mes_" + e),
// //       n = document.getElementById("translate_" + e);
// //     0 == dk
// //       ? ((i.innerHTML =
// //           "<font color='#EE7600'>Bài học đã được dịch, bạn hãy đưa chuột vào các câu tiếng Anh để xem.</font>"),
// //         (n.innerHTML =
// //           '<input type="button" id="translate_button_' +
// //           e +
// //           '" onclick="show_msg(' +
// //           e +
// //           ')" value="Đóng bài dịch"  class="stt_translate"/>'),
// //         (dk = 1))
// //       : ((i.innerHTML = "<font color='#EE7600'>Đã đóng bài dịch.</font>"),
// //         (n.innerHTML =
// //           '<input type="button" id="translate_button_' +
// //           e +
// //           ' " onclick="show_msg(' +
// //           e +
// //           ')" value="Xem bài dịch"  class="stt_translate"/>'),
// //         (dk = 0));
// //   }
// // }
// // function getmessagebackground() {
// //   var e =
// //     "<table border=" +
// //     hiendich.borderwidth +
// //     " cellspacing=0 cellpadding=0><tr><td valign=top bgcolor=#" +
// //     hiendich.backgroundcolor +
// //     ">";
// //   return (e += "&nbsp;</td></tr></table>");
// // }

// // function getmessagecontent() {
// //   var e =
// //     "<table border=0 cellspacing=0 cellpadding=" +
// //     hiendich.tickerpadding +
// //     " width=" +
// //     hiendich.tickerwidth +
// //     " ><tr><td valign=top>";
// //   return (
// //     (e +=
// //       "<span style='position:relative; font-family:" +
// //       hiendich.fnt +
// //       ";color:" +
// //       hiendich.fntcolor +
// //       ";font-size:" +
// //       hiendich.fntsize +
// //       "pt;font-weight:" +
// //       hiendich.fntweight +
// //       "'>"),
// //     (e += "<font color='" + hiendich.fntcolor + "'>"),
// //     (e += hiendich.messagepresubstring),
// //     (e += "</font>"),
// //     (e += "</span>"),
// //     (e += "</td></tr></table>")
// //   );
// // }

// // function showticker() {
// //   var e = document.getElementById("ticker");
// //   document.getElementById("tickerbg");
// //   (hiendich.messagepresubstring = hiendich.message),
// //     (e.innerHTML = getmessagecontent());
// // }

// // function hideticker(e, i) {
// //   clearTimeout(hiendich.timer),
// //     (hiendich.i_substring = 0),
// //     (hiendich.i_presubstring = 0);
// //   var n = document.getElementById("ticker"),
// //     t = document.getElementById("tickerbg");
// //   (n.style.visibility = "hidden"),
// //     (t.style.visibility = "hidden"),
// //     (e.style.backgroundColor = hiendich.old_bgColor),
// //     (e.style.cursor = "default"),
// //     null != i && (e.style.cursor = i);
// // }

// // function paidpage() {
// //   var e = document.getElementById("paid_page");
// //   console.log(e);
// //   // return null != e ? !0 : !1;
// //   return null != e ? 1 : 1;
// // }
// // function paidmember() {
// //   var e = document.getElementById("paid_member");
// //   // return null != e ? !0 : !1;
// //   return null != e ? 1 : 1;
// // }

// // function show_download() {
// //   var e =
// //       '<span onclick="popup(\'//data.tienganh123.com/file/dungchung/download_vip.htm\')"  onmouseout=hideticker(this) onMouseOver="showmessage_danhngon(\'Tải video, audio, hay lời dịch về máy - Chỉ dành cho thành viên VIP\',this)"><img src="//data.tienganh123.com/file/dungchung/download.jpg" border=0 /> </span>',
// //     i = document.getElementById("link_dl");
// //   console.log(i);
// //   if (null != i) {
// //     var n = "Download file";
// //     link_dl_text = i.innerHTML;
// //     var t = "vd_ico1";
// //     link_dl_text.indexOf(".pdf") > 0 && ((n = "Download PDF"), (t = "vd_ico3")),
// //       link_dl_text.indexOf(".mp3") > 0 &&
// //         ((n = "Download MP3"), (t = "vd_ico2")),
// //       link_dl_text.indexOf(".wma") > 0 && (n = "Download video"),
// //       (e =
// //         '<a href="" onclick="popup(\'//data.tienganh123.com/file/dungchung/download_vip.htm\')" onmouseout=hideticker(this) onMouseOver="showmessage_danhngon(\'Tải video, audio hay lời dịch về máy - Chỉ dành cho thành viên VIP\',this)"><div class="vd_dl_icon">' +
// //         n +
// //         '<div class="vd_ico_dl ' +
// //         t +
// //         '" style="left:-60px"></div></div></a>'),
// //       (vip =
// //         '<a href="' +
// //         link_dl_text +
// //         '" target=_blank><div class="vd_dl_icon">' +
// //         n +
// //         '<div class="vd_ico_dl ' +
// //         t +
// //         '" style="left:-60px"></div></div></a>'),
// //       paidmember() ? (i.innerHTML = vip) : (i.innerHTML = e);
// //   }
// // }
// // function show_button_download() {
// //   if (1 == $("#download_1").length) {
// //     var e = 1,
// //       i = '<div class="vd_download_name">DOWNLOAD BÀI HỌC NÀY :</div>',
// //       n = "",
// //       t = "",
// //       o = "",
// //       a = [],
// //       d = "vd_ico1";
// //     for (
// //       $("span:contains(Download)").hide(),
// //         $("#download_1").after('<div class="vdc_download"></div>');
// //       1 == $("#download_" + e).length;

// //     )
// //       (o = $("#download_" + e).text()),
// //         (a = o.split("|")),
// //         (a[0].indexOf("MP3") >= 0 || a[0].indexOf("mp3") >= 0) &&
// //           (d = "vd_ico2"),
// //         (a[1].indexOf("PDF") >= 0 || a[1].indexOf("pdf") >= 0) &&
// //           (d = "vd_ico3"),
// //         (n +=
// //           '<a href="" onclick="popup(\'//data.tienganh123.com/file/dungchung/download_vip.htm\')" onmouseout=hideticker(this) onMouseOver="showmessage_danhngon(\'Tải video, audio, hay lời dịch về máy - Chỉ dành cho thành viên VIP\',this)"><div class="vd_dl_icon">' +
// //           a[0] +
// //           '<div class="vd_ico_dl ' +
// //           d +
// //           '"></div></div></a>'),
// //         (t +=
// //           '<a href="' +
// //           a[1] +
// //           '" target=_blank><div class="vd_dl_icon">' +
// //           a[0] +
// //           '<div class="vd_ico_dl ' +
// //           d +
// //           '"></div></div></a>'),
// //         $("#download_" + e).remove(),
// //         e++;
// //     (i += paidmember() ? t : n),
// //       1 == $(".vd_download").length
// //         ? $(".vd_download").html(i)
// //         : $(".vdc_download").html(i);
// //   }
// // }

// // function hideGiaiTrichVIP() {
// //   for (var e = 1; ; ) {
// //     if (
// //       ((giaithich_vip = document.getElementById("giaithich_vip_" + e)),
// //       null == giaithich_vip)
// //     )
// //       return;
// //     paidmember() ||
// //       (giaithich_vip.innerHTML =
// //         "<a href='/huong-dan/214-quyen-loi-thanh-vien-vip-cua-tienganh123.html' target=_blank><img src='//data.tienganh123.com/file/dungchung/giaithich_vip.png' border=0 /> </a>"),
// //       (e += 1);
// //   }
// // }

// // function showAds_Datthe() {
// //   if (((dathe = document.getElementById("dat-the")), null != dathe)) {
// //     var e = Math.floor(2 * Math.random()),
// //       i = [];
// //     (i[0] = "/vip_banner.swf"), (i[1] = "/goldenkids_banner.swf");
// //     var n = "";
// //     (n +=
// //       '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,0,0" width="400" height="80" id="niftyPlayer1" align="">'),
// //       (n += '<param name=movie value="' + i[e] + '">'),
// //       (n += "<param name=quality value=high>"),
// //       (n += "<param name=wmode value=opaque>"),
// //       (n += "<param name=bgcolor value=#FFFFFF>"),
// //       (n +=
// //         '<embed src="' +
// //         i[e] +
// //         '" quality=high bgcolor=#FFFFFF wmode="opaque" width="400" height="80" name="niftyPlayer1" align="" type="application/x-shockwave-flash" pluginspage="//www.macromedia.com/go/getflashplayer">'),
// //       (n += "</embed></object>"),
// //       (n +=
// //         "<br/><center>Tư vấn và đặt thẻ qua điện thoại: 0473053868 (8h-21h)</center>"),
// //       paidmember() ? (dathe.innerHTML = "") : (dathe.innerHTML = n);
// //   }
// // }

// // function hideNonPaidMember() {
// //   var e;
// //   paidmember() ||
// //     ((e = document.getElementById("non_paid_member_hide")),
// //     null != e &&
// //       (e.innerHTML =
// //         "<a href='/huong-dan/214-quyen-loi-thanh-vien-vip-cua-tienganh123.html' target=_blank><img src='//data.tienganh123.com/file/dungchung/vip_message.PNG' border=0 /> </a>")),
// //     // show_download(),
// //     // show_serverVN(),
// //     // hideGiaiTrichVIP(),
// //     hideNonGoldenKidsMember(),
// //     // showAds_Datthe(),
// //     show_button_download();
// // }

// // function showmessage_danhngon(e, i, n) {
// //   e.length <= 30
// //     ? ((hiendich.tickerwidth = 8 * e.length + 10), (hiendich.tickerheight = 30))
// //     : ((hiendich.tickerwidth = 240),
// //       (hiendich.tickerheight = 20 * (e.length / 30 + 2)));
// //   getmessagebackground();
// //   (hiendich.message = e),
// //     (hiendich.i_substring = 0),
// //     (hiendich.i_presubstring = 0),
// //     (hiendich.leftposition = hiendich.x + hiendich.xdistance),
// //     (hiendich.topposition = hiendich.y + hiendich.ydistance - 303),
// //     navigator.appVersion.indexOf("MSIE 10.0") >= 0 &&
// //       ((hiendich.x = hiendich.x - 50),
// //       (hiendich.y = hiendich.y + 5),
// //       (hiendich.leftposition = hiendich.x + hiendich.xdistance + "px"),
// //       (hiendich.topposition = hiendich.y + hiendich.ydistance + "px"));
// //   var t = document.getElementById("ticker");
// //   document.getElementById("tickerbg");
// //   ("Netscape" == navigator.appName ||
// //     navigator.appVersion.indexOf("MSIE 9.0") > 1 ||
// //     "Opera" == navigator.appName) &&
// //     ((hiendich.leftposition = hiendich.leftposition + "px"),
// //     (hiendich.topposition = hiendich.topposition + "px")),
// //     (t.style.left = hiendich.leftposition),
// //     (t.style.top = hiendich.topposition),
// //     (t.style.width = hiendich.tickerwidth),
// //     (t.style.visibility = "visible"),
// //     showticker(),
// //     (hiendich.old_bgColor = i.style.backgroundColor),
// //     (i.style.backgroundColor = hiendich.new_bgColor),
// //     (i.style.cursor = "pointer");
// // }

// // function showmessage(e, i, n) {
// //   if (1 == dk) {
// //     (hien_dich_times += 1),
// //       paidpage() &&
// //         !paidmember() &&
// //         hien_dich_times >= 3 &&
// //         (e =
// //           'Bạn phải là  <a href="/huong-dan/214-quyen-loi-thanh-vien-vip-cua-tienganh123.html" target="_blank" title="Quyền lợi thành viên VIP"  style="color:#0d6af7; text-decoration:underline">thành viên VIP của TiếngAnh123.Com</a> mới có thể xem được lời dịch hiện ở đây.'),
// //       e.length <= 30
// //         ? ((hiendich.tickerwidth = 8 * e.length + 10),
// //           (hiendich.tickerheight = 30))
// //         : ((hiendich.tickerwidth = 240),
// //           (hiendich.tickerheight = 20 * (e.length / 30 + 2)));
// //     getmessagebackground();
// //     (hiendich.message = e),
// //       (hiendich.i_substring = 0),
// //       (hiendich.i_presubstring = 0),
// //       (hiendich.leftposition = hiendich.x + hiendich.xdistance),
// //       (hiendich.topposition = hiendich.y + hiendich.ydistance - 300),
// //       navigator.appVersion.indexOf("MSIE 10.0") >= 0 &&
// //         ((hiendich.x = hiendich.x - 50),
// //         (hiendich.y = hiendich.y + 5),
// //         (hiendich.leftposition = hiendich.x + hiendich.xdistance + "px"),
// //         (hiendich.topposition = hiendich.y + hiendich.ydistance + "px"));
// //     var t = document.getElementById("ticker"),
// //       o = document.getElementById("tickerbg");
// //     ("Netscape" == navigator.appName ||
// //       navigator.appVersion.indexOf("MSIE 9.0") > 1 ||
// //       "Opera" == navigator.appName) &&
// //       ((hiendich.leftposition = hiendich.leftposition + "px"),
// //       (hiendich.topposition = hiendich.topposition + "px")),
// //       isMobile
// //         ? ((t.style.visibility = "hidden"),
// //           (o.style.visibility = "hidden"),
// //           (hiendich.old_bgColor = "#fff"),
// //           (i.style.backgroundColor = "#fff"))
// //         : ((t.style.left = hiendich.leftposition),
// //           (t.style.top = hiendich.topposition),
// //           (t.style.width = hiendich.tickerwidth),
// //           (t.style.visibility = "visible"),
// //           (hiendich.old_bgColor = i.style.backgroundColor),
// //           (i.style.backgroundColor = hiendich.new_bgColor),
// //           (i.style.cursor = "pointer")),
// //       showticker();
// //   }
// // }

// // function handlerMM(e) {
// //   var i, n;
// //   "Netscape" == navigator.appName || "Opera" == navigator.appName
// //     ? ((hiendich.x = window.pageXOffset + e.clientX),
// //       (hiendich.y = window.pageYOffset + e.clientY))
// //     : (document.documentElement && document.documentElement.scrollTop
// //         ? ((i = document.documentElement.scrollLeft),
// //           (n = document.documentElement.scrollTop))
// //         : ((i = document.body.scrollLeft), (n = document.body.scrollTop)),
// //       (hiendich.x = i + event.clientX),
// //       (hiendich.y = n + event.clientY));
// // }

// // function checkVIPaudioLink(e) {
// //   return (
// //     (play_audio_times += 1),
// //     paidpage() && play_audio_times >= 3 && !paidmember() ? vip_only_audio : e
// //   );
// // }

// function playAudio(e, i) {
//   e = checkVIPaudioLink(e);
//   var n = hiendich.x + 85,
//     t = hiendich.y + 35,
//     o = document.getElementById("playaudio");
//   ("Netscape" == navigator.appName ||
//     navigator.appVersion.indexOf("MSIE 9.0") > 1 ||
//     "Opera" == navigator.appName) &&
//     ((n += "px"), (t += "px")),
//     "undefined" == typeof i && ((o.style.left = n), (o.style.top = t));
//   var a = "mp3player" + play_audio_times;
//   (o.innerHTML =
//     '<div style="width: 165px; height: 20px; background-color: #FF9966;" > <span onclick="stopAudio();" style="cursor:pointer"><img src="/icon/wrong.png" />  Close </span></div>'),
//     (o.innerHTML += "<div id='" + a + "'>Audio</div>"),
//     (o.style.visibility = "visible"),
//     jwplayer(a).setup({
//       flashplayer: "/jwplayer/player.swf",
//       file: e,
//       autostart: "true",
//       controlbar: "bottom",
//       width: "165",
//       height: "24",
//     });
// }
// function stopAudio() {
//   var e = document.getElementById("playaudio");
//   e.innerHTML = "";
// }
// function changecss_2(e, i, n) {
//   for (var t, o, a = !1, d = 0; d < document.styleSheets.length; d++)
//     try {
//       document.styleSheets[d].cssRules
//         ? (o = document.styleSheets[d].cssRules)
//         : document.styleSheets[d].rules && (o = document.styleSheets[d].rules);
//       for (var h = 0; h < o.length; h++)
//         if (o[h].selectorText == e && o[h].style[i]) {
//           (o[h].style[i] = n), (a = !0);
//           break;
//         }
//     } catch (c) {}
//   a ||
//     (document.styleSheets[d].insertRule
//       ? document.styleSheets[d].insertRule(
//           e + " { " + i + ": " + n + "; }",
//           document.styleSheets[d][t].length
//         )
//       : document.styleSheets[d].addRule &&
//         document.styleSheets[d].addRule(e, i + ": " + n + ";"));
// }

// // function show_text() {
// //   var e = document.getElementById("show_text");
// //   changecss_2(".answer", "display", "block"),
// //     (e.innerHTML =
// //       '<input type="button" id="xem_text" onclick="hide_text()" value="Giấu bài text" />');
// // }
// // function hide_text() {
// //   changecss_2(".answer", "display", "none");
// //   var e = document.getElementById("show_text");
// //   e.innerHTML =
// //     '<input type="button" id="xem_text" onclick="show_text()" value="Xem bài text" />';
// // }

// // function xem_text(e) {
// //   var i = document.getElementById("show_text_" + e);
// //   changecss_2(".hidden_" + e, "display", "block");
// //   var n =
// //     '<input type="button" id="button_hidden_text_' +
// //     e +
// //     '" onclick="an_text(' +
// //     e +
// //     ')" value="Ẩn" />';
// //   i.innerHTML = n;
// // }

// // function an_text(e) {
// //   changecss_2(".hidden_" + e, "display", "none");
// //   var i = document.getElementById("show_text_" + e),
// //     n =
// //       '<input type="button" id="button_hidden_text_' +
// //       e +
// //       '" onclick="xem_text(' +
// //       e +
// //       ')" value="Xem" />';
// //   i.innerHTML = n;
// // }

// // function xem_text_kids(e) {
// //   changecss_2(".hidden_" + e, "display", "block");
// // }

// // function xemdich(e) {
// //   var i = document.getElementById("thongbao_" + e),
// //     n = document.getElementById("xemdich_" + e);
// //   0 == dk
// //     ? ((i.innerHTML =
// //         "<font color='#FF0000'>Bài học đã được dịch, bạn hãy đưa chuột vào bài text để xem.</font>"),
// //       (n.innerHTML =
// //         '<input type="button" id="xemdich_button_' +
// //         e +
// //         '" onclick="xemdich(' +
// //         e +
// //         ')" value="Đóng bài dịch" />'),
// //       (dk = 1))
// //     : ((i.innerHTML = "<font color='#FF0000'>Đã đóng bài dịch.</font>"),
// //       (n.innerHTML =
// //         '<input type="button" id="xemdich_button_' +
// //         e +
// //         '" onclick="xemdich(' +
// //         e +
// //         ')" value="Xem bài dịch" />'),
// //       (dk = 0));
// // }

// // function popup(e) {
// //   var i;
// //   (i = window.open(
// //     e,
// //     "name",
// //     "resizable=1, scrollbars=1, height=600,width=600,left=200"
// //   )),
// //     window.focus && i.focus();
// // }

// // function hiendientu() {
// //   var e = document.getElementById("divdientu");
// //   changecss_2(".loibh_dich", "display", "none"),
// //     changecss_2(".loibh_dientu", "display", "block");
// //   var i =
// //     '<input type="button" onclick="andientu();" value="Hiện lời bài hát" />';
// //   e.innerHTML = i;
// // }
// // function andientu() {
// //   changecss_2(".loibh_dientu", "display", "none"),
// //     changecss_2(".loibh_dich", "display", "block");
// //   var e = document.getElementById("divdientu"),
// //     i =
// //       '<input type="button" onclick="hiendientu();" value="Làm bài test điền từ" />';
// //   e.innerHTML = i;
// // }

// // function removeSpaces(e) {
// //   return e.split(" ").join("");
// // }

// // function check() {
// //   for (var e = giau.length, i = 0, n = 0, t = 0; e > t; t++)
// //     if ("" != giau[t]) {
// //       var o = "answer" + t,
// //         a = document.getElementById(o);
// //       if (null == a) break;
// //       n++;
// //       var d = removeSpaces(a.value),
// //         h = removeSpaces(giau[t]);
// //       h.toLowerCase() == d.toLowerCase()
// //         ? ((a.style.color = "#0000FF"), (a.disabled = !0), (i += 1))
// //         : (a.style.color = "#FF0000");
// //     }
// //   alert("Bạn đã làm đúng " + i + "/" + n + " câu!");
// // }

// // function get_swf_content(e, i, n, t) {
// //   var o =
// //     '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=7,0,19,0" width="' +
// //     n +
// //     '" height="' +
// //     t +
// //     '" ID="sf' +
// //     e +
// //     '" VIEWASTEXT>';
// //   return (
// //     (o += '  <param name="movie" value="' + i + '" />'),
// //     (o += '  <param name="quality" value="high" />'),
// //     (o += '  <param name="wmode" value="opaque" />'),
// //     (o += '  <param name="allowScriptAccess" value="always" />'),
// //     (o += '  <param name="allowFullScreen" value="true" />'),
// //     (o +=
// //       '  <embed src="' +
// //       i +
// //       '" quality="high" name="sf' +
// //       e +
// //       '" allowScriptAccess="always" allowFullScreen="true" pluginspage="//www.macromedia.com/go/getflashplayer" type="application/x-shockwave-flash" width="' +
// //       n +
// //       '" height="' +
// //       t +
// //       '" />'),
// //     (o += "</object>")
// //   );
// // }

// // function writeSwf(e, i, n, t) {
// //   document.write(
// //     '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=7,0,19,0" width="' +
// //       n +
// //       '" height="' +
// //       t +
// //       '" ID="sf' +
// //       e +
// //       '" VIEWASTEXT>'
// //   ),
// //     document.write('  <param name="movie" value="' + i + '" />'),
// //     document.write('  <param name="quality" value="high" />'),
// //     document.write('  <param name="wmode" value="opaque" />'),
// //     document.write('  <param name="wmode" value="window" />'),
// //     document.write('  <param name="allowScriptAccess" value="always" />'),
// //     document.write('  <param name="allowFullScreen" value="true" />'),
// //     document.write(
// //       '  <embed src="' +
// //         i +
// //         '" quality="high" name="sf' +
// //         e +
// //         '" allowScriptAccess="always" allowFullScreen="true" pluginspage="//www.macromedia.com/go/getflashplayer" type="application/x-shockwave-flash" width="' +
// //         n +
// //         '" height="' +
// //         t +
// //         '" />'
// //     ),
// //     document.write("</object>");
// // }

// // function writeSwfVIP(e, i, n, t) {
// //   // paidmember()
// //   //   ? writeSwf(e, i + "_VIP.swf", n, t)
// //   //   : writeSwf(e, i + "_VIP.swf", n, t);
// //   return writeSwf(e, i + "_VIP.swf", n, t);
// // }

// // function writeTestVocabSWF(e) {
// //   document.write(
// //     '<embed src="/file/dungchung/preloader4eng123.swf" quality="high" bgcolor="#ffffff" height="400" width="550" name="game_as3" flashVars="myFlashVar=' +
// //       e +
// //       '&&myFlashVar2=/file/dungchung/game_ochu2.swf"></embed>'
// //   );
// // }

// // function writeTestVocab(e) {
// //   writeTestVocabSWF(paidmember() ? e + ".xml" : e + ".xml");
// // }

// // function showmessage_goldenkids(e, i, n) {
// //   if (1 == dk) {
// //     (hien_dich_times += 1),
// //       goldenkids_member() ||
// //         (hien_dich_times >= 3 &&
// //           (e =
// //             'Bạn phải là <a href="/huong-dan/214-quyen-loi-thanh-vien-vip-cua-tienganh123.html" target="_blank" title="Quyền lợi thành viên VIP"  style="color:#0d6af7; text-decoration:underline">thành viên VIP</a> của tienganh123.com mới có thể xem được lời dịch hiện ở đây')),
// //       e.length <= 30
// //         ? ((hiendich.tickerwidth = 8 * e.length + 10),
// //           (hiendich.tickerheight = 30))
// //         : ((hiendich.tickerwidth = 240),
// //           (hiendich.tickerheight = 20 * (e.length / 30 + 2)));
// //     getmessagebackground();
// //     (hiendich.message = e),
// //       (hiendich.i_substring = 0),
// //       (hiendich.i_presubstring = 0),
// //       (hiendich.leftposition = hiendich.x + hiendich.xdistance),
// //       (hiendich.topposition = hiendich.y + hiendich.ydistance - 303),
// //       navigator.appVersion.indexOf("MSIE 10.0") >= 0 &&
// //         ((hiendich.x = hiendich.x - 50),
// //         (hiendich.y = hiendich.y + 5),
// //         (hiendich.leftposition = hiendich.x + hiendich.xdistance + "px"),
// //         (hiendich.topposition = hiendich.y + hiendich.ydistance + "px"));
// //     var t = document.getElementById("ticker"),
// //       o = document.getElementById("tickerbg");
// //     ("Netscape" == navigator.appName ||
// //       navigator.appVersion.indexOf("MSIE 9.0") > 1 ||
// //       "Opera" == navigator.appName) &&
// //       ((hiendich.leftposition = hiendich.leftposition + "px"),
// //       (hiendich.topposition = hiendich.topposition + "px")),
// //       isMobile
// //         ? ((t.style.visibility = "hidden"),
// //           (o.style.visibility = "hidden"),
// //           (hiendich.old_bgColor = "#fff"),
// //           (i.style.backgroundColor = "#fff"))
// //         : ((t.style.left = hiendich.leftposition),
// //           (t.style.top = hiendich.topposition),
// //           (t.style.width = hiendich.tickerwidth),
// //           (t.style.visibility = "visible"),
// //           (hiendich.old_bgColor = i.style.backgroundColor),
// //           (i.style.backgroundColor = hiendich.new_bgColor),
// //           (i.style.cursor = "pointer")),
// //       showticker();
// //   }
// // }

// // function goldenkids_page() {
// //   var e = document.getElementById("goldenkids_page");
// //   // return null != e ? !0 : !1;
// //   return null != e ? 1 : 1;
// // }

// // function goldenkids_member() {
// //   var e = document.getElementById("goldenkids_member");
// //   // return null != e ? !0 : !1;
// //   return null != e ? 1 : 1;
// // }

// // function lesson_child() {
// //   var e = document.getElementById("check_lesson_child");
// //   // return null != e ? !0 : !1;
// //   return null != e ? 1 : 1;
// // }

// // function checkGOLDENKIDSaudioLink(e) {
// //   return (
// //     (play_audio_times += 1),
// //     play_audio_times >= 3 && !goldenkids_member() ? goldenkids_only_audio : e
// //   );
// // }

// // function playAudio_goldenkids(e, i) {
// //   e = checkGOLDENKIDSaudioLink(e);
// //   var n = hiendich.x + 85,
// //     t = hiendich.y + 35,
// //     o = document.getElementById("playaudio");
// //   ("Netscape" == navigator.appName ||
// //     navigator.appVersion.indexOf("MSIE 9.0") > 1 ||
// //     "Opera" == navigator.appName) &&
// //     ((n += "px"), (t += "px")),
// //     "undefined" == typeof i && ((o.style.left = n), (o.style.top = t));
// //   var a = "mp3player" + play_audio_times;
// //   (o.innerHTML =
// //     '<div style="width: 165px; height: 20px; background-color: #FF9966;" > <span onclick="stopAudio();" style="cursor:pointer"><img src="/icon/wrong.png" />  Close </span></div>'),
// //     (o.innerHTML += "<div id='" + a + "'>Audio</div>"),
// //     (o.style.visibility = "visible"),
// //     jwplayer(a).setup({
// //       flashplayer: "/jwplayer/player.swf",
// //       file: e,
// //       autostart: "true",
// //       controlbar: "bottom",
// //       width: "165",
// //       height: "24",
// //     });
// // }

// // function hideNonGoldenKidsMember() {
// //   var e;
// //   goldenkids_member() ||
// //     ((e = document.getElementById("non_goldenkids_member_hide")),
// //     null != e &&
// //       (e.innerHTML =
// //         '<a href="/huong-dan/214-quyen-loi-thanh-vien-vip-cua-tienganh123.html" target="_blank" title="quyền lợi thành viên VIP" style="color:#F2FF32; text-decoration:underline; font-weight:bold"><img src="//data.tienganh123.com/file/dungchung/goldenkids_message.png" border=0 /> </a>'));
// // }

// function writeSwfGoldenKids(e, i, n, t) {
//   goldenkids_member()
//     ? writeSwf(e, i + "_GOLDENKIDS.swf", n, t)
//     : writeSwf(e, i + "_GOLDENKIDS.swf", n, t);
//   // : writeSwf(e, i + "_NON_GOLDENKIDS.swf", n, t);
// }

// function writeSwfCambridge(e, i, n, t) {
//   var o = "//goldenkids-data.tienganh123.com/";
//   goldenkids_member()
//     ? writeSwf(e, o + i, n, t)
//     : // : writeSwf(e, o + "non_" + i, n, t);
//       writeSwf(e, o + i, n, t);
// }

// function getSwfGoldenKids(e, i, n, t) {
//   return goldenkids_member()
//     ? get_swf_content(e, i + "_GOLDENKIDS.swf", n, t)
//     : get_swf_content(e, i + "_GOLDENKIDS.swf", n, t);
//   // : get_swf_content(e, i + "_NON_GOLDENKIDS.swf", n, t);
// }

// function getFLVGoldenKids(e) {
//   return goldenkids_member() ? e + "_GOLDENKIDS.flv" : e + "_GOLDENKIDS.flv";
//   // : e + "_NON_GOLDENKIDS.flv";
// }

// function getPhotoShow(e) {
//   return goldenkids_member() ? e + "_GOLDENKIDS.jpg" : e + "_GOLDENKIDS.jpg";
//   // : e + "_NON_GOLDENKIDS.jpg";
// }

// function writeIframe(e, i, n) {
//   null == i && (i = 680),
//     null == n && (n = 540),
//     document.write(
//       '<iframe width="' +
//         i +
//         '" height="' +
//         n +
//         '" frameborder="0" src="' +
//         e +
//         '" scrolling="no" style="padding:0" id="iframe_quiz' +
//         iframe_id +
//         '" name="iframe_quiz' +
//         iframe_id +
//         '"></iframe>'
//     ),
//     (iframe_id += 1);
// }

// function writeIframeVIP(e) {
//   return e + "_VIP.html";
//   // writeIframe(paidmember() ? e + "_VIP.html" : e + "_VIP.html");
// }

// function writeIFrameDirectoryVIP(e, i, n) {
//   // paidmember()
//   //   ? writeIframe(e + "_vip/", i, n)
//   //   : writeIframe(e + "_vip/", i, n);
//   return writeIframe(e + "_vip/", i, n);
// }
// function writeIframeGoldenKids(e) {
//   return e + "_GOLDENKIDS.html";
//   // writeIframe(
//   //   goldenkids_member() ? e + "_GOLDENKIDS.html" : e + "_GOLDENKIDS.html"
//   // );
// }
// function writeIframeGameGoldenKids(e) {
//   var i = "//goldenkids-data.tienganh123.com/";
//   return writeIframe(i + e + "goldenkids/", 720, 530);
//   // goldenkids_member()
//   //   ? writeIframe(i + e + "goldenkids/", 720, 530)
//   //   : writeIframe(i + e + "non_goldenkids/", 720, 530);
// }
// // function show_serverVN() {
// //   var e = document.getElementById("show_server");
// //   if (null != e) {
// //     e.innerHTML = "";
// //     var i =
// //         '<span  onmouseout=hideticker(this) onMouseOver="showmessage_danhngon(\'Click để xem video từ máy chủ tại Việt nam - tốc độ cao - chỉ dành cho thành viên VIP hoặc GoldenKids\',this)"><img src="//data.tienganh123.com/file/dungchung/server_vn.jpg" border=0 /> </span>',
// //       n =
// //         '<span onclick="change_server();"  onmouseout=hideticker(this) onMouseOver="showmessage_danhngon(\'Click để xem video từ máy chủ tại Việt nam - tốc độ cao - chỉ dành cho thành viên VIP hoặc GoldenKids\',this)"><img src="//data.tienganh123.com/file/dungchung/server_vn.jpg" border=0 /></span>';
// //     paidmember() || goldenkids_member() ? (e.innerHTML = n) : (e.innerHTML = i);
// //   }
// // }
// // function show_serverYoutube() {
// //   var e = document.getElementById("show_server");
// //   null != e &&
// //     (e.innerHTML =
// //       '<span onclick="change_server();"  onmouseout=hideticker(this) onMouseOver="showmessage_danhngon(\'Click để xem video từ Youtube\',this)"><img src="//data.tienganh123.com/file/dungchung/server_vn.jpg" border=0 /></span>');
// // }
// // function change_server() {
// //   var e = document.getElementById("youtube");
// //   if (null != e) {
// //     var i = document.getElementById("server_vn");
// //     null != i &&
// //       (server_youtube
// //         ? (changecss_2(".youtube", "display", "none"),
// //           changecss_2(".server_vn", "display", "block"),
// //           (server_youtube = !1),)
// //         : (changecss_2(".server_vn", "display", "none"),
// //           changecss_2(".youtube", "display", "block"),
// //           (server_youtube = !0),
// //           show_serverVN()));
// //   }
// // }

// function getLinkVIP(e, i) {
//   return e + "_VIP.";
//   // return paidmember() ? e + "_VIP." + i : e + "_VIP." + i;
// }
// function getLinkGoldenKids(e, i) {
//   return e + "_GOLDENKIDS." + i;
//   // return goldenkids_member() ? e + "_GOLDENKIDS." + i : e + "_GOLDENKIDS." + i;
// }

// // function GameLuyenTu(e) {
// //   var i,
// //     n = "/file/game/game_luyentu/vip/game_vip.html?",
// //     t = "/file/game/game_luyentu/none_vip/game_none_vipkid.html?";
// //   paidmember() || goldenkids_member()
// //     ? ((i = e + "_VIP.xml"), writeIframe(n + i, 720, 540))
// //     : ((i = e + "_VIP.xml"), writeIframe(n + i, 720, 540));
// // }

// function GamePhatAm(e) {
//   var i,
//     n = "/file/game/game_phatam/vip/game_vip.html?",
//     t = "/file/game/game_phatam/none_vip/game_vip.html?";
//   // t = "/file/game/game_phatam/none_vip/game_none_vip.html?";
//   return (i = e + "_VIP.xml"), writeIframe(n + i, 720, 540);
//   // paidmember() || goldenkids_member()
//   //   ? ((i = e + "_VIP.xml"), writeIframe(n + i, 720, 540))
//   //   : ((i = e + "_VIP.xml"), writeIframe(n + i, 720, 540));
// }
// // function GameSpellingBee(e) {
// //   var i,
// //     n = "/file/game/game_SpellingBee/vip/game_vip.html?",
// //     t = "/file/game/game_SpellingBee/none_vip/game_none_vipkid.html?";
// //   paidmember() || goldenkids_member()
// //     ? ((i = e + "_VIP.xml"), writeIframe(n + i, 720, 540))
// //     : ((i = e + "_VIP.xml"), writeIframe(n + i, 720, 540));
// // }

// // function GameDescriber(e) {
// //   var i,
// //     n = "/file/game/game_Describer/vip/game_vip.html?",
// //     t = "/file/game/game_Describer/none_vip/game_none_vipkid.html?";
// //   paidmember() || goldenkids_member()
// //     ? ((i = e + "_VIP.xml"), writeIframe(n + i, 720, 540))
// //     : ((i = e + "_VIP.xml"), writeIframe(n + i, 720, 540));
// // }
// // function GameMemory(e) {
// //   var i,
// //     n = "/file/game/game_Memory/vip/game_vip.html?",
// //     t = "/file/game/game_Memory/none_vip/game_none_vipkid.html?";
// //   paidmember() || goldenkids_member()
// //     ? ((i = e + "_VIP.xml"), writeIframe(n + i, 720, 540))
// //     : ((i = e + "_noneVIP.xml"), writeIframe(t + i, 720, 540));
// // }

// function PlayVideo(e, i, n, t, o, a) {
//   var d = document.getElementById(e),
//     h = parseInt(n) + 25,
//     c = parseInt(n) / 2 - 30 > 0 ? parseInt(n) / 2 - 30 : 0;
//   h = h.toString();
//   var r = "";
//   (r =
//     '	<video width="' +
//     i +
//     '" height="' +
//     n +
//     '" id="player' +
//     video_player_id +
//     '" poster="' +
//     a +
//     '" controls="controls" preload="none">		<source type="video/mp4" src="' +
//     o +
//     '" />		<!-- Flash: -->		<object width="' +
//     i +
//     '" height="' +
//     h +
//     '" type="application/x-shockwave-flash" data="player.swf">			<param name="movie" value="/jwplayer/player.swf">			<param name="flashvars" value="controlbar=over&amp;image=' +
//     a +
//     "&amp;file=" +
//     t +
//     '">			<img src="' +
//     a +
//     '" width="' +
//     i +
//     '" height="' +
//     n +
//     '" alt="học tiếng Anh trực tuyến tiện ích, hiệu quả với tiếng anh 123">		</object>	</video>'),
//     (r =
//       r +
//       '<div class="img_play_video" onclick="this.style.display=\'none\'; this.previousElementSibling.style.display = \'block\'; this.previousElementSibling.play()" style="background-image: url(' +
//       a +
//       "); width: " +
//       i +
//       "px;height: " +
//       n +
//       "px; background-size: 100% 100%; cursor: pointer; position:relative; margin-top:-" +
//       (parseInt(n) + 6) +
//       'px; text-align:center"><img style="margin-top: ' +
//       c +
//       'px" width="60" height="60" src="/file/learn/child/dungchung/lib_new_en/images/videoplay.png"/></div>'),
//     (d.innerHTML = r),
//     (video_player_id += 1);
// }

// function showContent(e, i) {
//   "hide" == $(e).attr("ta_sh")
//     ? ($(e).next().fadeIn("slow"),
//       $(e).html("Ẩn " + i + '<div class="w_easy_btt_o"></div>'),
//       $(e).attr("ta_sh", "show"))
//     : ($(e).next().fadeOut(),
//       $(e).attr("ta_sh", "hide"),
//       $(e).html("Xem " + i + '<div class="w_easy_btt"></div>'));
// }

// // var required = "<font color='red'>Chưa trả lời !</font>",
// //   error = "<font color='red'> Sai rồi!</font>",
// //   dk = 0,
// //   play_audio_times = 0,
// //   hien_dich_times = 0,
// //   iframe_id = 1,
// //   vip_only_audio = "//data.tienganh123.com/file/dungchung/vip_only_audio.mp3",
// //   goldenkids_only_audio =
// //     "//data.tienganh123.com/file/dungchung/vip_only_audio.mp3",
// //   uagent = navigator.userAgent.toLowerCase(),
// //   arrMobi = new Array(
// //     "midp",
// //     "j2me",
// //     "avantg",
// //     "ipad",
// //     "iphone",
// //     "docomo",
// //     "novarra",
// //     "palmos",
// //     "palmsource",
// //     "240x320",
// //     "opwv",
// //     "chtml",
// //     "pda",
// //     "windows ce",
// //     "mmp/",
// //     "mib/",
// //     "symbian",
// //     "wireless",
// //     "nokia",
// //     "hand",
// //     "mobi",
// //     "phone",
// //     "cdm",
// //     "up.b",
// //     "audio",
// //     "sie-",
// //     "sec-",
// //     "samsung",
// //     "htc",
// //     "mot-",
// //     "mitsu",
// //     "sagem",
// //     "sony",
// //     "alcatel",
// //     "lg",
// //     "erics",
// //     "vx",
// //     "nec",
// //     "philips",
// //     "mmm",
// //     "xx",
// //     "panasonic",
// //     "sharp",
// //     "wap",
// //     "sch",
// //     "rover",
// //     "pocket",
// //     "benq",
// //     "java",
// //     "pt",
// //     "pg",
// //     "vox",
// //     "amoi",
// //     "bird",
// //     "compal",
// //     "kg",
// //     "voda",
// //     "sany",
// //     "kdd",
// //     "dbt",
// //     "sendo",
// //     "sgh",
// //     "gradi",
// //     "jb",
// //     "dddi",
// //     "moto",
// //     "opera mobi",
// //     "opera mini",
// //     "android"
// //   ),
// //   isMobile = !1;
// // for (i = 0; i < arrMobi.length; i++)
// //   if (-1 != uagent.indexOf(arrMobi[i])) {
// //     isMobile = !0;
// //     break;
// //   }
// // for (var _a = "", _i = 0; 3 > _i; _i++) _a += _i + 1;
// // _a += ".";
// // var _a_n = "n";
// // _a = "tie" + _a_n + "ga" + _a_n + "h" + _a + "com";
// // var _cham_a = "." + _a,
// //   _w = "w",
// //   _w_a = "http://" + _w + _w + _w + "." + _a;
// // _a = "http://" + _a;
// try {
//   var _l = top.location.href;
//   _l.toLowerCase().indexOf(_a) >= 0 ||
//     _l.toLowerCase().indexOf(_w_a) >= 0 ||
//     _l.toLowerCase().indexOf(_cham_a) >= 0 ||
//     (top.location.href = _w_a);
// } catch (error) {}
// var _parent;
// try {
//   (_parent = window.opener.location.href),
//     _parent.toLowerCase().indexOf(_a) >= 0 ||
//       _parent.toLowerCase().indexOf(_w_a) >= 0 ||
//       _parent.toLowerCase().indexOf(_cham_a) >= 0 ||
//       (top.location.href = _w_a);
// } catch (error) {}
// var hiendich = {};
// (hiendich.tickerwidth = "320"),
//   (hiendich.tickerheight = "100"),
//   (hiendich.tickerpadding = 5),
//   (hiendich.borderwidth = 0),
//   (hiendich.fnt = "Verdana"),
//   (hiendich.fntsize = 10),
//   (hiendich.fntsizelastletter = 10),
//   (hiendich.fntcolor = "#880000"),
//   (hiendich.fntcolorlastletter = "#880000"),
//   (hiendich.fntweight = 3),
//   (hiendich.backgroundcolor = "#EAFFEE"),
//   (hiendich.standstill = 2e3),
//   (hiendich.speed = 0),
//   (hiendich.xdistance = 10),
//   (hiendich.ydistance = 30),
//   (hiendich.timer = 0),
//   (hiendich.topposition = 0),
//   (hiendich.leftposition = 0),
//   (hiendich.x = 20),
//   (hiendich.y = 20),
//   (hiendich.i_substring = 0),
//   (hiendich.i_presubstring = 0),
//   (hiendich.i_message = 0),
//   (hiendich.message = ""),
//   (hiendich.messagepresubstring = ""),
//   (hiendich.messageaftersubstring = ""),
//   (hiendich.fntweight = 100 * hiendich.fntweight),
//   (hiendich.old_bgColor = "white"),
//   (hiendich.new_bgColor = "yellow"),
//   (document.onmousemove = handlerMM);
// var server_youtube = !0,
//   video_player_id = 1;
