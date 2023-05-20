<div class="ge" id="ev_artemp">
    <div class="ge" id="ev_tit">Vocabulary - Từ vựng</div>
    <div class="ge" id="ev_name">{$lesson_name}</div>
    {if !$type}
        <div class="ge" id="ev_arvideo">
                <div class="ge" id="evv_artask">
                    {if $video_words}
                        {foreach from=$video_words key=i item=value}
                        <div class="ge evvt_bg" attime="{$value.time}">
                            <div class="ge evvt_icon"></div>
                            <div class="ge evvt_text">
                                <div class="ge evvtt_en">{$value.en}</div>
                                <div class="ge evvtt_vi">({$value.vi|replace:'<s>':'<span class="evvtt_vi_long">'|replace:'<e>':'</span>'})</div>
                            </div>
                        </div>
                        {/foreach}
                    {else}
                        {foreach from=$new_words key=i item=value}
                        <div class="ge evvt_bg" attime="{$value.time}">
                            <div class="ge evvt_icon"></div>
                            <div class="ge evvt_text">
                                <div class="ge evvtt_en">{$value.en}</div>
                                <div class="ge evvtt_vi">({$value.vi|replace:'<s>':'<span class="evvtt_vi_long">'|replace:'<e>':'</span>'})</div>
                            </div>
                        </div>
                        {/foreach}
                    {/if}
                </div>
            <div id="evv_video"></div>
            <img class="evvv_loading" id='evvv_loading1' src='//goldenkids-data.tienganh123.com/file/learn/child/pc/kids_lesson/img/loading.gif' />
        </div>
    {else}
        <div class="ge" id="ev_arvideo2">
            <div id="evv_video"></div>
            <img class="evvv_loading" id='evvv_loading2' src='//goldenkids-data.tienganh123.com/file/learn/child/pc/kids_lesson/img/loading.gif' />
        </div>
    {/if}
    <div class="ge" id="ev_arpratice">
        <div class="ge" id="evp_arheader">
            <div class="ge evph_line"></div>
            <div class="ge evph_bgtext">ôn tập từ vựng đã học</div>
            <div class="ge evph_line"></div>
            <div class="ge evph_ins"><div class="ge evphi_icon"></div><div class="ge evphi_text">Các em hãy nhấp chuột vào ảnh để nghe âm thanh của từ/cụm từ.</div></div>
        </div>
        <div class="ge" id="evp_arplay">
            {foreach from=$new_words key=i item=value}
                <div class="ge evpp_arword">
                    <img atin="{$i}" class="ge evppw_pic" src="{$url_data}{$value.img_link}"/>
                    <div class="ge evppw_arbottom">
                        <div class="ge evppw_ten">{$value.en}</div>
                        <div class="ge evppw_tvi">{$value.vi|replace:'<s>':'<span class="evppw_tvi_long">'|replace:'<e>':'</span>'}</div>
                        <span class="span-audio"><span class="uba_audioButton" media-url="{$url_data}{$value.audio_link}.mp3"></span></span>
                        <div class="ge evppw_record recording_user" file_audio="{$url_data}{$value.audio_link}.mp3">
                            <div class="ge evppwr_icon"></div>
                            <div class="ge evppwr_text">Ghi âm</div>
                        </div>
                    </div>
                </div>
            {/foreach}
            <!-- record new -->
            <div class="ge" id="kr_arrecord"></div>
        </div>
    </div>
</div>
<script type="text/javascript">
    $.getScript("/file/learn/child/dungchung/lib_new_en/videojs/videojs.js");
    $.getScript("/file/learn/child/pc/record/record.js");
</script>