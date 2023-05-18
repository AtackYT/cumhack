// ==UserScript==
// @name         muc hack
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.elevspel.se/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=elevspel.se
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    let bhBool =false
    let lsBool =false
    let aaBool =false
    function buttonhack () {
        let count = 0;
        while (count < 10) {
            count++;
            let bhdelay = document.getElementById("bhdelay").value;
            setTimeout(() => {
                document.getElementById("nextbutton").disabled = "";
                document.getElementById("nextbutton").click();
                console.log('Waited one second');
            }, bhdelay);
        }
    }
    function answercorrect () {
        for(var i=0;i<document.getElementsByClassName("choice").length;i++) {
            document.getElementsByClassName("choice")[i].setAttribute('data-indexval', "1");
        }
    }
    function lettershow() {
        for(var a=0;a<document.getElementsByClassName("char_65").length;a++) {
            document.getElementsByClassName("char_65")[a].innerHTML = "<span>A</span>";
        }
        for(var b=0;b<document.getElementsByClassName("char_66").length;b++) {
            document.getElementsByClassName("char_66")[b].innerHTML = "<span>B</span>";
        }
        for(var c=0;c<document.getElementsByClassName("char_67").length;c++) {
            document.getElementsByClassName("char_67")[c].innerHTML = "<span>C</span>";
        }
        for(var d=0;d<document.getElementsByClassName("char_68").length;d++) {
            document.getElementsByClassName("char_68")[d].innerHTML = "<span>D</span>";
        }
        for(var e=0;e<document.getElementsByClassName("char_69").length;e++) {
            document.getElementsByClassName("char_69")[e].innerHTML = "<span>E</span>";
        }
        for(var f=0;f<document.getElementsByClassName("char_70").length;f++) {
            document.getElementsByClassName("char_70")[f].innerHTML = "<span>F</span>";
        }
        for(var g=0;g<document.getElementsByClassName("char_71").length;g++) {
            document.getElementsByClassName("char_71")[g].innerHTML = "<span>G</span>";
        }
        for(var h=0;h<document.getElementsByClassName("char_72").length;h++) {
            document.getElementsByClassName("char_72")[h].innerHTML = "<span>H</span>";
        }
        for(var i=0;i<document.getElementsByClassName("char_73").length;i++) {
            document.getElementsByClassName("char_73")[i].innerHTML = "<span>I</span>";
        }
        for(var j=0;j<document.getElementsByClassName("char_74").length;j++) {
            document.getElementsByClassName("char_74")[j].innerHTML = "<span>J</span>";
        }
        for(var k=0;k<document.getElementsByClassName("char_75").length;k++) {
            document.getElementsByClassName("char_75")[k].innerHTML = "<span>K</span>";
        }
        for(var l=0;l<document.getElementsByClassName("char_76").length;l++) {
            document.getElementsByClassName("char_76")[l].innerHTML = "<span>L</span>";
        }
        for(var m=0;m<document.getElementsByClassName("char_77").length;m++) {
            document.getElementsByClassName("char_77")[m].innerHTML = "<span>M</span>";
        }
        for(var n=0;n<document.getElementsByClassName("char_78").length;n++) {
            document.getElementsByClassName("char_78")[n].innerHTML = "<span>N</span>";
        }
        for(var o=0;o<document.getElementsByClassName("char_79").length;o++) {
            document.getElementsByClassName("char_79")[o].innerHTML = "<span>O</span>";
        }
        for(var p=0;p<document.getElementsByClassName("char_80").length;p++) {
            document.getElementsByClassName("char_80")[p].innerHTML = "<span>P</span>";
        }
        for(var q=0;q<document.getElementsByClassName("char_81").length;q++) {
            document.getElementsByClassName("char_81")[q].innerHTML = "<span>Q</span>";
        }
        for(var r=0;r<document.getElementsByClassName("char_82").length;r++) {
            document.getElementsByClassName("char_82")[r].innerHTML = "<span>R</span>";
        }
        for(var s=0;s<document.getElementsByClassName("char_83").length;s++) {
            document.getElementsByClassName("char_83")[s].innerHTML = "<span>S</span>";
        }
        for(var t=0;t<document.getElementsByClassName("char_84").length;t++) {
            document.getElementsByClassName("char_84")[t].innerHTML = "<span>T</span>";
        }
        for(var u=0;u<document.getElementsByClassName("char_85").length;u++) {
            document.getElementsByClassName("char_85")[u].innerHTML = "<span>U</span>";
        }
        for(var v=0;v<document.getElementsByClassName("char_86").length;v++) {
            document.getElementsByClassName("char_86")[v].innerHTML = "<span>V</span>";
        }
        for(var w=0;w<document.getElementsByClassName("char_87").length;w++) {
            document.getElementsByClassName("char_87")[w].innerHTML = "<span>W</span>";
        }
        for(var x=0;x<document.getElementsByClassName("char_88").length;x++) {
            document.getElementsByClassName("char_88")[x].innerHTML = "<span>X</span>";
        }
        for(var y=0;y<document.getElementsByClassName("char_89").length;y++) {
            document.getElementsByClassName("char_89")[y].innerHTML = "<span>Y</span>";
        }
        for(var z=0;z<document.getElementsByClassName("char_90").length;z++) {
            document.getElementsByClassName("char_90")[z].innerHTML = "<span>Z</span>";
        }
    }
    function lettershowoff() {
        for(var a=0;a<document.getElementsByClassName("char_65").length;a++) {
            document.getElementsByClassName("char_65")[a].innerHTML = "<span></span>";
        }
        for(var b=0;b<document.getElementsByClassName("char_66").length;b++) {
            document.getElementsByClassName("char_66")[b].innerHTML = "<span></span>";
        }
        for(var c=0;c<document.getElementsByClassName("char_67").length;c++) {
            document.getElementsByClassName("char_67")[c].innerHTML = "<span></span>";
        }
        for(var d=0;d<document.getElementsByClassName("char_68").length;d++) {
            document.getElementsByClassName("char_68")[d].innerHTML = "<span></span>";
        }
        for(var e=0;e<document.getElementsByClassName("char_69").length;e++) {
            document.getElementsByClassName("char_69")[e].innerHTML = "<span></span>";
        }
        for(var f=0;f<document.getElementsByClassName("char_70").length;f++) {
            document.getElementsByClassName("char_70")[f].innerHTML = "<span></span>";
        }
        for(var g=0;g<document.getElementsByClassName("char_71").length;g++) {
            document.getElementsByClassName("char_71")[g].innerHTML = "<span></span>";
        }
        for(var h=0;h<document.getElementsByClassName("char_72").length;h++) {
            document.getElementsByClassName("char_72")[h].innerHTML = "<span></span>";
        }
        for(var i=0;i<document.getElementsByClassName("char_73").length;i++) {
            document.getElementsByClassName("char_73")[i].innerHTML = "<span></span>";
        }
        for(var j=0;j<document.getElementsByClassName("char_74").length;j++) {
            document.getElementsByClassName("char_74")[j].innerHTML = "<span></span>";
        }
        for(var k=0;k<document.getElementsByClassName("char_75").length;k++) {
            document.getElementsByClassName("char_75")[k].innerHTML = "<span></span>";
        }
        for(var l=0;l<document.getElementsByClassName("char_76").length;l++) {
            document.getElementsByClassName("char_76")[l].innerHTML = "<span></span>";
        }
        for(var m=0;m<document.getElementsByClassName("char_77").length;m++) {
            document.getElementsByClassName("char_77")[m].innerHTML = "<span></span>";
        }
        for(var n=0;n<document.getElementsByClassName("char_78").length;n++) {
            document.getElementsByClassName("char_78")[n].innerHTML = "<span></span>";
        }
        for(var o=0;o<document.getElementsByClassName("char_79").length;o++) {
            document.getElementsByClassName("char_79")[o].innerHTML = "<span></span>";
        }
        for(var p=0;p<document.getElementsByClassName("char_80").length;p++) {
            document.getElementsByClassName("char_80")[p].innerHTML = "<span></span>";
        }
        for(var q=0;q<document.getElementsByClassName("char_81").length;q++) {
            document.getElementsByClassName("char_81")[q].innerHTML = "<span></span>";
        }
        for(var r=0;r<document.getElementsByClassName("char_82").length;r++) {
            document.getElementsByClassName("char_82")[r].innerHTML = "<span></span>";
        }
        for(var s=0;s<document.getElementsByClassName("char_83").length;s++) {
            document.getElementsByClassName("char_83")[s].innerHTML = "<span></span>";
        }
        for(var t=0;t<document.getElementsByClassName("char_84").length;t++) {
            document.getElementsByClassName("char_84")[t].innerHTML = "<span></span>";
        }
        for(var u=0;u<document.getElementsByClassName("char_85").length;u++) {
            document.getElementsByClassName("char_85")[u].innerHTML = "<span></span>";
        }
        for(var v=0;v<document.getElementsByClassName("char_86").length;v++) {
            document.getElementsByClassName("char_86")[v].innerHTML = "<span></span>";
        }
        for(var w=0;w<document.getElementsByClassName("char_87").length;w++) {
            document.getElementsByClassName("char_87")[w].innerHTML = "<span></span>";
        }
        for(var x=0;x<document.getElementsByClassName("char_88").length;x++) {
            document.getElementsByClassName("char_88")[x].innerHTML = "<span></span>";
        }
        for(var y=0;y<document.getElementsByClassName("char_89").length;y++) {
            document.getElementsByClassName("char_89")[y].innerHTML = "<span></span>";
        }
        for(var z=0;z<document.getElementsByClassName("char_90").length;z++) {
            document.getElementsByClassName("char_90")[z].innerHTML = "<span></span>";
        }
    }
    function bhtoggle() {
        bhBool = bhBool ? false : true;
    }
    function lstoggle() {
        lsBool = lsBool ? false : true;
    }
    function aatoggle() {
        aaBool = aaBool ? false : true;
    }
    var newHTML = document.createElement ('div');
    newHTML.innerHTML = '             \
        <div id="clientgui">             \
               <p id="guititle">Cum hack</p>       \
               <p class="guitext">Blatant:</p>       \
               <br> \
               <br> \
               <input id="bhdelay" type="range" title="Delay for slow computers." min="1000" max="10000" value="1000"> \
               <button id="bhbutton" title="Spoofs the next button to win.">Win spoof</button> \
               <br> \
               <br> \
               <button id="lettershow" title="Shows letters on kodord.">Show letters</button> \
               <br> \
               <br> \
               <p class="guitext">Legit:</p>         \
               <br> \
               <br> \
               <button id="rabutton" title="Always correct!">Answer spoofing</button>  \
        </div>                          \
    ';
    document.body.appendChild (newHTML);
    document.getElementById("guititle").style.fontSize = "200%";
    document.getElementById("clientgui").style.backgroundImage = "url('https://media.discordapp.net/attachments/915158822325190676/1105511170141589514/pp.png')";
    document.getElementById("clientgui").style.backgroundSize = "contain";
    document.getElementById("clientgui").style.backgroundRepeat = "no-repeat";
    document.getElementById("clientgui").style.backgroundPosition = "center";
    document.getElementById("guititle").style.fontSize = "200%";
    document.getElementById("clientgui").style.textAlign = "center";
    document.getElementById("clientgui").style.color = "white";
    document.getElementById("clientgui").style.backgroundColor = "blue";
    document.getElementById("bhbutton").style.border = "none";
    document.getElementById("bhbutton").style.backgroundColor = "white"
    document.getElementById("bhbutton").style.fontSize = "125%";
    document.getElementById("lettershow").style.border = "none";
    document.getElementById("lettershow").style.backgroundColor = "white"
    document.getElementById("lettershow").style.fontSize = "125%";
    document.getElementById("rabutton").style.border = "none";
    document.getElementById("rabutton").style.backgroundColor = "white"
    document.getElementById("rabutton").style.fontSize = "125%";
    document.getElementsByClassName("guitext")[0].style.backgroundColor = "rgba(0, 0, 0, 0.5)";
    document.getElementsByClassName("guitext")[1].style.backgroundColor = "rgba(0, 0, 0, 0.5)";
    document.getElementsByClassName("guitext")[0].style.display = "inline"
    document.getElementsByClassName("guitext")[1].style.display = "inline"
    document.getElementsByClassName("guitext")[0].style.fontSize = "120%";
    document.getElementsByClassName("guitext")[1].style.fontSize = "120%";
    const bhbutton = document.getElementById("bhbutton");
    const lsb = document.getElementById("lettershow");
    const aab = document.getElementById("rabutton");
    bhbutton.addEventListener('click', (event) => {
        bhtoggle();
        if (bhBool == true) {
            document.getElementById("bhbutton").style.backgroundColor = "lime";
        }
        else {
            document.getElementById("bhbutton").style.backgroundColor = "white";
        }
        })
    lsb.addEventListener('click', (event) => {
        lstoggle();
        lettershowoff();
        if (lsBool == true) {
            document.getElementById("lettershow").style.backgroundColor = "lime";
        }
        else {
            document.getElementById("lettershow").style.backgroundColor = "white";
        }
        })
    aab.addEventListener('click', (event) => {
        aatoggle();
        if (aaBool == true) {
            document.getElementById("rabutton").style.backgroundColor = "lime";
        }
        else {
            document.getElementById("rabutton").style.backgroundColor = "white";
        }
        })
    window.addEventListener('click', (event) => {
        if (bhBool == true) {
            buttonhack();
        }
        if (aaBool == true) {
            answercorrect();
        }
        if (lsBool == true) {
            lettershow();
        }
        })
})();