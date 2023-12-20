//Kalendarzyk 2022
//front_script.ts
/////////////////////////////////////////////////////////////////////////////////////////////
"use strict";
// NOTE config
var region_data_array_str = region_data_Poznan.split(/\n/gm); // region data
var INPUT_DATA_MANUALLY = false;
/////////////////////////////////////////////////////////////////////////////////////////////
function init() {
    document.getElementById("front_continue").addEventListener("click", getResult);
    document.getElementById("front_hide").addEventListener("click", hideElements);
    if (!INPUT_DATA_MANUALLY) {
        var main_textarea = document.getElementById("front_data_main");
        main_textarea.value = "Dane są importowane z pliku ./data/main_data.js, aby wprowadzić dane ręcznie, zmień ustawienia w kodzie.";
        main_textarea.disabled = true;
        console.log("main_data_raw", main_data_raw);
    }
}
function getResult() {
    var _a;
    var getSeason = function (season_name) {
        switch (season_name) {
            case "zima": return "winter";
            case "wiosna": return "spring";
            case "lato": return "summer";
            case "jesień": return "autumn";
        }
    };
    var getZodiacSign = function (zodiac_name) {
        switch (zodiac_name) {
            case "koziorożec": return "01_koziorozec";
            case "wodnik": return "02_wodnik";
            case "ryby": return "03_ryby";
            case "baran": return "04_baran";
            case "byk": return "05_byk";
            case "bliźnięta": return "06_bliznieta";
            case "rak": return "07_rak";
            case "lew": return "08_lew";
            case "panna": return "09_panna";
            case "waga": return "10_waga";
            case "skorpion": return "11_skorpion";
            case "strzelec": return "12_strzelec";
        }
    };
    var getLunarPhase = function (lunar_phase_name) {
        switch (lunar_phase_name) {
            case "full moon": return "full_moon";
            case "new moon": return "new_moon";
            case "first quarter": return "first_quarter";
            case "last quarter": return "last_quarter";
        }
    };
    var main_textarea = document.getElementById("front_data_main");
    var main_data_first = INPUT_DATA_MANUALLY ? main_textarea.value : main_data_raw;
    var main_data_array = main_data_first.split(/\n/gm);
    main_data_first = null;
    var birthday_data_first = document.getElementById("front_data_birthday").value;
    var birthday_data_array = birthday_data_first.split(/\n/gm);
    birthday_data_first = null;
    // let region_data_first: string = (document.getElementById("front_data_region") as HTMLTextAreaElement).value;
    // const region_data_array: Array<string> = region_data_first.split(/\n/gm);
    // region_data_first = null;
    var region_data_array = [];
    for (var i = 0; i < region_data_array_str.length; i++) {
        var el = region_data_array_str[i].split(/\t/gm);
        region_data_array[i] = {};
        region_data_array[i].date_regional = el[0];
        region_data_array[i].sunrise = el[1];
        region_data_array[i].sunset = el[2];
        region_data_array[i].lunar_phase = getLunarPhase(el[3]);
        region_data_array[i].national_holidays = el[4];
        region_data_array[i].celebrations = el[5];
        region_data_array[i].shopping_sunday = (el[6] == "1");
    }
    var range_data_first = document.getElementById("front_data_range").value;
    var range_data_array = range_data_first.split("-");
    var RANGE_MIN = parseInt(range_data_array[0]) - 1 || 0;
    var RANGE_MAX = parseInt(range_data_array[1]) || main_data_array.length;
    var data = [];
    for (var i = RANGE_MIN; i < RANGE_MAX; i++) {
        data[i] = {};
        var main_el_array = main_data_array[i].split(/\t/gm);
        data[i].main_all = main_el_array;
        data[i].date = main_el_array[0];
        data[i].page_number = +(main_el_array[1]);
        data[i].day = +(main_el_array[2]);
        data[i].week_number = +(main_el_array[3]);
        data[i].month_number = main_el_array[4];
        data[i].month = main_el_array[5];
        data[i].year = +(main_el_array[6]);
        data[i].weekday = main_el_array[7];
        data[i].day_number_in_year = +(main_el_array[8]);
        data[i].season_change = (main_el_array[9] || "");
        data[i].season = getSeason(main_el_array[10]);
        data[i].zodiac = getZodiacSign(main_el_array[11]);
        data[i].nameday = main_el_array[12];
        data[i].background_image = main_el_array[13];
        data[i].hue = +(main_el_array[14]);
        data[i].unusual_days = main_el_array[15] || "";
        data[i].year_progress = main_el_array[16];
        var birthday_el_array = ((_a = birthday_data_array[i]) === null || _a === void 0 ? void 0 : _a.split(/\t/gm)) || ["", "", ""];
        data[i].birthday = (birthday_el_array[0] || "");
        data[i].birthday_reminder = (birthday_el_array[1] || "");
        data[i].anniversaries = (birthday_el_array[2] || "");
        // const region_el_array: Array<string> = region_data_array[i].split(/\t/gm);
        // const region_el_array: Array<string> = [];
        // data[i].date_regional = region_el_array[0];
        // data[i].sunrise = region_el_array[1];
        // data[i].sunset = region_el_array[2];
        // data[i].lunar_phase = getLunarPhase(region_el_array[3]);
        // data[i].national_holidays = region_el_array[4];
        // data[i].celebrations = region_el_array[5];
        // data[i].shopping_sunday = (region_el_array[6] == "1");
    }
    var region_array_start = region_data_array.findIndex(function (el) { return el.date_regional == data[RANGE_MIN].date; });
    var region_array_end = region_data_array.findIndex(function (el) { return el.date_regional == data[RANGE_MAX - 1].date; });
    var region_el_array = region_data_array.slice(region_array_start, region_array_end + 1);
    var region_index = 0;
    for (var i = RANGE_MIN; i < RANGE_MAX; i++) {
        console.log(i, data[i], region_el_array[region_index]);
        data[i] = Object.assign(data[i], region_el_array[region_index]);
        region_index++;
    }
    createCards(data);
}
function createCards(data) {
    var result_el = document.getElementById("front_result");
    result_el.innerHTML = "";
    var path = "./../front_images/front_images_";
    var mode = +document.querySelector('input[name="front_days_mode"]:checked').value;
    var days_array = [];
    var data_html_array = [];
    data.forEach(function (el) {
        var rainbow_gradient = function (s, l) {
            var hue_array = [0, 38, 58, 131, 229, 292];
            var percentage_array = [0, 17, 17, 33, 33, 50, 50, 66, 66, 83, 83, 100];
            var css_code = "background-image: linear-gradient(90deg, ";
            var css_array = [];
            for (var i = 0; i < hue_array.length; i++) {
                css_array.push("hsl(".concat(hue_array[i].toString(), ", ").concat(s, "%, ").concat(l, "%) ").concat(percentage_array[2 * i], "%"));
                css_array.push("hsl(".concat(hue_array[i].toString(), ", ").concat(s, "%, ").concat(l, "%) ").concat(percentage_array[2 * i + 1], "%"));
            }
            css_code += css_array.join(", ");
            css_code += ");";
            return css_code;
        };
        var code = "";
        // const rainbow_gradient = "linear-gradient(90deg, red 0%, red 17%, orange 17%, orange 33%, yellow 33%, yellow 50%, limegreen 50%, limegreen 66%, blue 66%, blue 83%, violet 83%, violet 100%);"
        var style = {
            day_color_div_1: "background-color: hsl(".concat(el.hue, ", 50%, 50%);"), // old - background: 60%, 55%
            day_color_div_2: "background-image: linear-gradient(hsl(".concat(el.hue, ", 50%, 70%), hsl(").concat(el.hue, ", 50%, 30%));"), // ?
            day_text_1: "background-image: url('".concat(path).concat(el.season, "/").concat(el.background_image, "');"),
            day_text_2: "background-image: none;",
            frame: "background-color: hsl(".concat(el.hue, ", 50%, 54%); border: 3px solid hsl(").concat(el.hue, ", 50%, 35%);"),
            // frame - top right icon and unusual days, for yellow (June) - set darker frames 
            year_progress_bar: "background-color: hsl(".concat(el.hue, ", 50%, 55%);")
        };
        // frame: `background-color: hsl(${el.hue}, 50%, 59%); border: 3px solid hsl(${el.hue}, 50%, 40%);`,   // old - background: 50%, 60%, border: 50%, 30%
        if (el.hue >= 35 && el.hue <= 85) // yellow background - higher contrast
         {
            style.frame = "background-color: hsl(".concat(el.hue, ", 50%, 51%); border: 3px solid hsl(").concat(el.hue, ", 50%, 35%);");
        }
        {
            if (el.unusual_days.includes("Miesiąc Dumy")) // 1st of June
             {
                style.frame = rainbow_gradient(50, 50);
            }
        }
        var day_text_condensed1 = ([10, 12, 13, 14, 15, 16, 17, 18, 19].includes(el.day)) ? " day_text_condensed1" : "";
        var day_text_condensed2 = ([21, 31].includes(el.day)) ? " day_text_condensed2" : "";
        var day_text_condensed3 = ([11].includes(el.day)) ? " day_text_condensed3" : "";
        var condensed = day_text_condensed1 + day_text_condensed2 + day_text_condensed3;
        code += "<div class=\"front_card\">\n        <div class=\"card_top\">\n            <div class=\"card_top_left\">".concat(el.month_number, "/").concat(el.year, "</div>\n            <div class=\"card_top_right\">\n                <div class=\"card_top_right_icon card_top_right_icon_large\" style=\"").concat(style.frame, "\">#").concat(el.day_number_in_year, "</div>\n                <div class=\"card_top_right_icon\" style=\"").concat(style.frame, "\"><img src=\"./icons/white/seasons_margin/").concat(el.season, ".png\" /></div>\n                <div class=\"card_top_right_icon card_top_right_icon_zodiac\" style=\"").concat(style.frame, "\"><img src=\"./icons/white/zodiac_margin/").concat(el.zodiac, ".svg\" /></div>\n                ").concat(el.lunar_phase ? '<div class="card_top_right_icon" style="' + style.frame + '"> <img src="./icons/white/moon_margin/' + el.lunar_phase + '.png"/></div>' : '', "\n                ").concat(el.shopping_sunday ? '<div class="card_top_right_icon" style="' + style.frame + '"> <img src="./icons/white/holidays/shopping_sunday.png"/></div>' : '', "\n            </div>\n        </div>\n        <hr class=\"card_top_line\" />\n        <div class=\"sun\">\n            <div class=\"sunrise\"><img src=\"./icons/main/sunrise.png\" /> <span>").concat(el.sunrise, "</span></div>\n            <div class=\"sunset\"><img src=\"./icons/main/sunset.png\" /> <span>").concat(el.sunset, "</span></div>\n        </div>\n        <div class=\"month\">").concat(el.month.toUpperCase(), "</div>\n        <div class=\"day\">\n            ").concat(mode == 1
            ? "<div class=\"day_color_div\">\n                <img src=\"https://storage.googleapis.com/kalendarzyk_front/day_front/".concat(el.background_image, "\" alt=\"day\" />\n            </div>")
            : "<div class=\"day_color_div\" style={style.day_color_div_2}>\n                <div class=\"day_text ".concat(condensed, "\" style={style.day_text_2}>").concat(el.day, "</div>\n            </div>") // NOTE add style
        , "  \n        </div>\n        <div class=\"weekday\">").concat(el.weekday, "</div>\n        <div class=\"card_bottom\">\n            <div class=\"holidays\">").concat(el.national_holidays, "</div>\n            <div class=\"celebrations\">").concat(el.celebrations, "</div>\n            <div class=\"season_time_change\">").concat(el.season_change, "</div>\n            ").concat(el.unusual_days ? "<div class=\"unusual_days\" style=\"".concat(style.frame, "\">").concat(el.unusual_days, "</div>") : "", "\n            ").concat(el.birthday ? "<div class=\"birthday_reminder\"><img src=\"./icons/main/birthday.png\" />\n                <span>".concat(el.birthday, "</span></div>") : "", "\n           ").concat(el.birthday_reminder ? "<div class=\"birthday_reminder\"><img src=\"./icons/main/birthday_reminder.png\" />\n                <span>".concat(el.birthday_reminder, " za 7 dni</span></div>") : "", "\n            <div class=\"anniversaries\">").concat(el.anniversaries, "</div>\n            <div class=\"nameday\">Imieniny: ").concat(el.nameday, "</div>\n        </div>\n        <div class=\"week_number\">Tydzie\u0144 ").concat(el.week_number, "</div>\n        <div class=\"year_progress\"><span class=\"year_progress_bar\"> <span class=\"year_progress_bar_content\" style=\"").concat(style.year_progress_bar, " width: ").concat(el.year_progress.replace(",", "."), "%;\"></span> </span><span>").concat(el.year_progress, " %</span></div>\n    </div>");
        days_array.push(el.date);
        var LAYOUT_4 = true;
        if (LAYOUT_4) // show each card 4 times in order to print on A4 pages
         {
            data_html_array.push("<div class=\"front_saving_page_A4\">");
            for (var i = 1; i <= 4; i++) {
                data_html_array.push(code);
            }
            data_html_array.push("</div>");
        }
        else {
            data_html_array.push(code);
        }
    });
    //console.warn("Enable showing cards!");
    var code_total = "";
    for (var i = 0; i < data_html_array.length; i++) {
        code_total += data_html_array[i];
    }
    result_el.innerHTML = code_total;
    code_total = "";
    console.log(data);
    document.getElementById("front_result_code").value = JSON.stringify(data);
    //createCode(days_array, data_html_array);
}
function createCode(days, code_array) {
    var code = "let arr = {}";
    for (var i = 0; i < code_array.length; i++) {
        code_array[i] = code_array[i].replace(/\t/gm, " ");
        code_array[i] = code_array[i].replace(/\n/gm, " ");
        code_array[i] = code_array[i].replace(/\s\s/gm, " ");
        code += "\n";
        code += "arr['" + days[i] + "'] = `" + code_array[i] + "` ";
    }
    console.log("--- my code -----");
    console.log("code.length:", code.length);
}
function formatText(text_in) {
    if (!text_in) {
        return "";
    }
    var t = text_in;
    t = t.replace(/\&lt\;/gm, "<");
    t = t.replace(/\&gt\;/gm, ">");
    t = t.replace(/\&/gm, "&amp;");
    t = t.replace(/</gm, "&lt;");
    t = t.replace(/>/gm, "&gt;");
    t = t.replace(/\\;/gm, ";");
    return t;
}
function hideElements() {
    var elements_to_hide = document.getElementsByClassName("to_hide");
    if (elements_to_hide) {
        for (var i = 0; i < elements_to_hide.length; i++) {
            elements_to_hide[i].classList.add("hidden");
        }
    }
    document.body.classList.add("front_saving");
    document.getElementById("front_result").classList.add("front_saving");
    var cards = document.getElementsByClassName("front_card");
    if (cards) {
        for (var i = 0; i < cards.length; i++) {
            cards[i].classList.add("front_saving");
        }
    }
}
(function () { init(); })();
