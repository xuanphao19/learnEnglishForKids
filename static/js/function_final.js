var lesson_kid = !1;

$.getScript("./file/dungchung/function.js", function () {
  lesson_kid = lesson_child();
}),
  $(document).ready(function () {
    var i =
        "<style>.box_alert_vip{background-image: url(/file/common/libAudio/images/vip_bg.png);color: #fff;display: none;position: fixed;bottom: 3px;z-index: 9999;border-radius: 8px;background-color: #ee7600;background-repeat: no-repeat;width: 30%;left: 30%;height: 50px;padding:0px;font-size: 11pt;line-height: 19px;}.box_vip_close {background: url(/file/common/libAudio/images/close.png) no-repeat;height: 22px;width: 22px;position: absolute;top: 10px;right: 10px;cursor: pointer;}</style>",
      n =
        i +
        '<div id="box_nonvip" class="box_alert_vip"><div class="box_vip_text" style="margin:7px 15px 0px 15px">Bạn phải là <a href="/huong-dan/214-quyen-loi-thanh-vien-vip-cua-tienganh123.html" target="_blank" title="quyền lợi thành viên VIP" style="color:#F2FF32; text-decoration:underline; font-weight:bold">thành viên VIP</a> của TiếngAnh123.Com <br />mới được xem tiếp bài bài dịch.</div><div class="box_vip_close"></div></div>',
      e =
        i +
        '<div id="box_nonvip" class="box_alert_vip" style="width:35%"><div class="box_vip_text" style="margin:7px 15px 0px 15px">Bạn phải là <a href="/huong-dan/214-quyen-loi-thanh-vien-vip-cua-tienganh123.html" target="_blank" title="quyền lợi thành viên VIP" style="color:#F2FF32; text-decoration:underline; font-weight:bold">thành viên VIP</a>  của TiếngAnh123.Com <br />mới được xem tiếp bài bài dịch.</div><div class="box_vip_close"></div></div>',
      o = "",
      t = 1;
    $("#translate_button,#translate_button_1").live("click", function () {
      lesson_kid ? goldenkids_member() || (o = e) : paidmember() || (o = n),
        "" != o &&
          (0 == dk &&
            1 == $("#box_nonvip").length &&
            ($("#box_nonvip").hide(), (t = 1)),
          $("span[onmouseover*='showmessage']").hover(function () {
            hien_dich_times >= 3 &&
              1 == dk &&
              1 == t &&
              ($("#box_nonvip").length < 1 && $("body").append(o),
              $(".box_vip_close").click(function () {
                $(this).parent().hide(),
                  $("#box_nonvip").removeAttr("style"),
                  (t = 0);
              }),
              $(".box_alert_vip").hide(),
              $("#box_nonvip").fadeIn());
          }));
    });
  });
