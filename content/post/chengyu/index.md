+++
author = "Xianfei"
title = "成语生成器"
date = "2022-01-12"
description = "用来生成田字格成语"
categories = [
    "交互式文章",
    "Web",
]
series = ["Themes Guide"]
aliases = ["migrate-from-jekyl"]
image = "banner.png"
+++

<link rel="stylesheet" href="./main.css">

  <style>
    * {
      margin: 0;
      padding: 0;
    }
    /*设置自定义css样式,  整体宽高, 字体大小*/
    .ci-box {
      width: 88px;
      height: 88px;
      margin: 2px;
    }
    .ci-box .wd {
      font-size: 56px !important; 
      line-height: 86px;
    }
  </style>


  <style>
    input {
      width: 200px;
    }
    textarea{
      width: 200px;
      height: 50px;
    }
  </style>


  <div id='test-groud' style="margin:50px 50px;font-size:0;">
  </div>

  <div style="margin:40px 40px;font-family: 'KaiTi SC', 'Kai', '楷体';font-size: 20px;">
    <p>【释义】<span id="sy">从目前的形势和状态分析，这次考研要凉。</span></p>
    <p style="margin-top: 10px;">【例句】<span id="lj">如今～，只好准备二战了。</span></p>
    成语：<input type="text" oninput="generate(this.value)" style="margin-top: 100px;" value="势态研凉"><br>
    释义：<textarea oninput="document.querySelector('#sy').innerText = this.value">
从目前的形势和状态分析，这次考研要凉。
    </textarea><br>
    例句：<textarea oninput="document.querySelector('#lj').innerText = this.value">
如今～，只好准备二战了。
          </textarea>
  </div>

  本文是**交互式Blog**，请尝试改变上方输入框中的文字！


  <script type="text/javascript">
    generate("势态研凉");

    function generate(wenzi) {
      let groud = document.getElementById('test-groud');
      document.title = wenzi
      groud.innerHTML = "";

      for (let item of wenzi) {
        let div = document.createElement("div");
        div.className = 'ci-box';
        div.innerHTML = `<div class="lt-2rb line"></div>
       <div class="rt-2lb line"></div>
       <div class="rm-2lm line"></div>
       <div class="tm-2bm line"></div>
       <div class="ci">
           <span class="wd">${item}</span>
       </div>`;

        groud.appendChild(div);
      }

    }

    function changeFontSize(fontSize) {
      let box = document.querySelectorAll("#test-groud .ci-box");
      let wds = document.querySelectorAll('#test-groud .ci-box .wd');

      for (let b of box) {
        b.style.width = `${fontSize * 1.2}px`;
        b.style.height = `${fontSize * 1.2}px`;

      }

      for (let wd of wds) {
        wd.style.fontSize = `${fontSize}px`;
        wd.style.lineHeight = `${fontSize}px`;
      }
    }
  </script>