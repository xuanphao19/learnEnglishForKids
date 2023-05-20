var prev_element = null;
(function ($) {
  var defaults_game = {
      audioButtonClass: "uba_ctrl",
      autoPlay: null,
      codecs: [
        {
          name: "OGG",
          codec: 'audio/ogg; codecs="vorbis"',
        },
        {
          name: "MP3",
          codec: "audio/mpeg",
        },
      ],
      continuous: false,
      extension: null,
      flashAudioPlayerPath: "/file/common/libAudio/lib/player.swf",
      flashExtension: ".mp3",
      flashObjectID: "audioPlayer",
      loadingClass: "loading",
      loop: false,
      playerContainer: "player",
      playingClass: "playing",
      onEndClass: "on-ended-audio",
      playStartCallback: null,
      stopCallback: null,
      isPaid: false,
      isgPaid: false,
      swfobjectPath: "/file/common/libAudio/lib/swfobject.js",
      volume: 1,
      au: 0,
    },
    currentTrack,
    isPlaying,
    index_audio,
    curr_audio,
    audio_game = [],
    $buttons,
    $tgt,
    $el,
    playTrack,
    resumeTrack,
    pauseTrack,
    methods_game = {
      play: function (element, elm) {
        currentTrack = element.attr("media-url");
        var fname = currentTrack.split("/");
        var inx_last = fname.length - 1;
        if (audio_game[elm]) {
          if (audio_game[elm].src.indexOf("/" + fname[inx_last]) < 0) {
            audio_game[elm].src = currentTrack;
          }
        } else {
          audio_game[elm] = new Audio("");
          audio_game[elm].id = "audio_" + index_audio;
          audio_game[elm].loop = defaults_game.loop ? "loop" : "";
          audio_game[elm].volume = defaults_game.volume;
          audio_game[elm].src = currentTrack;
        }
        audio_game[elm].play();
        _methods_game.addListeners(audio_game[elm]);
        element.addClass(defaults_game.playingClass);
        isPlaying = true;
        if (typeof defaults_game.playStartCallback == "function") {
          defaults_game.playStartCallback(element);
        }
      },
      pause_other: function () {
        index_audio =
          defaults_game.audioButtonClass +
          "_" +
          $("." + defaults_game.playingClass).index(
            "." + defaults_game.audioButtonClass
          );
        audio_game[index_audio].pause();
        if (typeof defaults_game.stopCallback == "function") {
          defaults_game.stopCallback($tgt);
        }
        $("." + defaults_game.playingClass).removeClass(
          defaults_game.playingClass
        );
        audio_game[index_audio].currentTime = 0;
      },
      set_click_audio: function () {
        //listen for clicks on the controls
        $buttons = $("." + defaults_game.audioButtonClass);
        $buttons.bind("click", function () {
          var _inx_audio = $(this).index("." + defaults_game.audioButtonClass);
          _methods_game.updateTrackState(
            this,
            defaults_game.audioButtonClass + "_" + _inx_audio
          );
        });
      },
    },
    _methods_game = {
      init: function (options) {
        var types;
        //set defaults_game
        $.extend(defaults_game, options);
        $el = this;
        $buttons = $("." + defaults_game.audioButtonClass);
        $buttons.bind("click", function () {
          var _inx_audio = $(this).index("." + defaults_game.audioButtonClass);
          _methods_game.updateTrackState(
            this,
            defaults_game.audioButtonClass + "_" + _inx_audio
          );
        });
      },
      updateTrackState: function (element, elm) {
        $tgt = $(element);
        if (!$tgt.hasClass(defaults_game.audioButtonClass)) {
          return;
        }
        methods_game.play($tgt, elm);
      },

      addListeners: function (elem) {
        $(elem).bind({
          canplay: _methods_game.onLoaded,
          error: _methods_game.onError,
          ended: _methods_game.onEnded,
        });
      },

      removeListeners: function (elem) {
        $(elem).unbind({
          canplay: _methods_game.onLoaded,
          error: _methods_game.onError,
          ended: _methods_game.onEnded,
        });
      },

      onLoaded: function () {
        $buttons.removeClass(defaults_game.loadingClass);
        $tgt.addClass(defaults_game.playingClass);
        if (typeof defaults_game.playStartCallback == "function") {
          defaults_game.playStartCallback($tgt);
        }
      },

      onError: function () {
        $buttons.removeClass(defaults_game.loadingClass);
        _methods_game.removeListeners(audio_game[index_audio]);
      },

      onEnded: function () {
        isPlaying = false;
        $tgt.removeClass(defaults_game.playingClass);
        $tgt.addClass(defaults_game.onEndClass);
        if (typeof defaults_game.stopCallback == "function") {
          defaults_game.stopCallback($tgt);
        }
        _methods_game.removeListeners(audio_game[index_audio]);

        if (defaults_game.continuous) {
          var $next = $tgt.next().length
            ? $tgt.next()
            : $(defaults_game.audioButtonClass).eq(0);
          methods_game.play($next);
        }
      },
      canPlay: function (type) {
        if (!document.createElement("audio").canPlayType) {
          return false;
        } else {
          return document
            .createElement("audio")
            .canPlayType(type.codec)
            .match(/maybe|probably/i)
            ? true
            : false;
        }
      },

      swfLoaded: function () {
        if (defaults_game.autoPlay) {
          setTimeout(function () {
            methods_game.play(defaults_game.autoPlay);
          }, 500);
        }
      },

      getFileNameWithoutExtension: function (fileName) {
        //this function take a full file name and returns an extensionless file name
        //ex. entering foo.mp3 returns foo
        //ex. entering foo returns foo (no change)
        var fileNamePieces = fileName.split(".");
        fileNamePieces.pop();
        return fileNamePieces.join(".");
      },
    };

  $.fn.ubaPlayer_game = function (method) {
    if (methods_game[method]) {
      return methods_game[method].apply(
        this,
        Array.prototype.slice.call(arguments, 1)
      );
    } else if (typeof method === "object" || !method) {
      return _methods_game.init.apply(this, arguments);
    } else {
      $.error("Method " + method + " does not exist on jquery.ubaPlayer");
    }
  };
})(jQuery);
function _PlayingAudioHide2(element) {
  if (element.hasClass("uba_ctrl_game_hide")) {
    element
      .children(".audio_picture")
      .children(0)
      .attr(
        "src",
        "//noidung.tienganh123.com/file/common/game123/images/loa.png"
      );
    if (prev_element != null) {
      if (element.attr("media-url") != prev_element.attr("media-url")) {
        _stopAudioHide2(prev_element);
      }
    }
    prev_element = element;
  }
}
function _stopAudioHide2(element) {
  if (element.hasClass("uba_ctrl_game_hide")) {
    element
      .children(".audio_picture")
      .children(0)
      .attr(
        "src",
        "//noidung.tienganh123.com/file/common/game123/images/loa1.png"
      );
  }
}
