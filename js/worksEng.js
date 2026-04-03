$(function () {
  var allList = [
    {
      imageFileName: '',
      life: '2025.4-',
      title: 'April 2025 — Eight Business Card App iOS Dev Team',
      descriptionURL: 'workDetail/job/2025-04-eight-ios-eng.html',
      description: "Joined the iOS app rebuild project at Sansan's Eight division.",
    },
    {
      imageFileName: '',
      life: '2024.1-',
      title: 'January 2024 — Sansan iOS App Dev Team',
      descriptionURL: 'workDetail/job/2024-01-sansan-ios-eng.html',
      description: 'Joined Sansan, Inc. and the team developing the sales DX Sansan iOS app.',
    },
    {
      imageFileName: '',
      life: '2023.2-',
      title: 'February 2023 — Mixch Live Streaming iOS Dev Team',
      descriptionURL: 'workDetail/job/2023-02-mixch-ios-eng.html',
      description: 'Joined DONUTS Co., Ltd. and the team developing the Mixch live streaming app.',
    },
    {
      imageFileName: '',
      life: '2022.4-',
      title: 'April 2022 — @cosme Cosmetics Retail iOS Dev Team',
      descriptionURL: 'workDetail/job/2022-04-cosme-ios-eng.html',
      description: 'Joined on secondment to the team developing the @cosme cosmetics retail app.',
    },
    {
      imageFileName: 'chairFlight',
      life: '2022',
      title: 'Chair Flight Club Room',
      descriptionURL: 'workDetail/personal/chair-flight-eng.html',
      description: 'A world for VRChat. Published on VRChat, a social VR platform.',
    },
    {
      imageFileName: '',
      life: '2021.7-',
      title: 'July 2021 — Secom Co. App Operations & Maintenance Team',
      descriptionURL: 'workDetail/job/2021-07-secom-eng.html',
      description:
        'Joined on secondment to operate and maintain three apps: Cocos\u00e9com Anshin App, Home Security App, and SECURILOCK SMART.',
    },
    {
      imageFileName: '',
      life: '2021.3-',
      title: 'March 2021 — FREE DAM Music Health Guidance App Dev Team',
      descriptionURL: 'workDetail/job/2021-03-freedam-eng.html',
      description: 'Joined a team developing mobile apps under contract.',
    },
    {
      imageFileName: 'kokeVR',
      life: '2021',
      title: 'Moss Balls in the World',
      descriptionURL: 'workDetail/personal/moss-balls-world-eng.html',
      description: 'A world for VRChat, where up to 16 people can be online.',
    },
    {
      imageFileName: '',
      life: '2020.1-',
      title: 'January 2020 — ThingsBoard Manufacturing Data Visualization Web App Dev Team',
      descriptionURL: 'workDetail/job/2020-01-thingsboard-eng.html',
      description:
        'Joined on secondment to develop a data visualization web app for manufacturing, tailored to client requirements.',
    },
    {
      imageFileName: 'kokeGL',
      life: '2020.7.24-2020.11.17',
      title: 'kokeGL',
      descriptionURL: 'workDetail/personal/kokegl-eng.html',
      description: "Let's try to represent various types of mosses using webgl.",
    },
    {
      imageFileName: 'omokakeLogo',
      life: '2019, released in 2021.8.17',
      title: 'omokake',
      descriptionURL: 'workDetail/personal/omokake-eng.html',
      description:
        "Omokake is<br>an app based on the concept of touching memories.<br><br>Introduction page: <a href='../omokake.html'>omokake</a>",
    },
    {
      imageFileName: '',
      life: '2019.4-',
      title: 'April 2019 — Government System Infrastructure Build Project',
      descriptionURL: 'workDetail/job/2019-04-alh-eng.html',
      description: 'Joined on secondment to a government system infrastructure build project.',
    },
    {
      imageFileName: 'mofuAR',
      life: '2018-2019',
      title: 'mofuAR',
      descriptionURL: 'workDetail/personal/mofuar-eng.html',
      description:
        "Virtual moss placed in AR space, a system that causes animation to evoke the sensation of its touch.<br>We produced a demo. It's called Mofu AR.<br>The concept is simulated experience to touch moss.",
    },
    {
      imageFileName: 'newPortfolio01_19',
      life: '2017',
      title: 'floating sight',
      descriptionURL: 'workDetail/personal/floating-sight-eng.html',
      description: '',
    },
    {
      imageFileName: 'newPortfolio01_06',
      life: '2015',
      title: 'fluffy',
      descriptionURL: 'workDetail/personal/fluffy-eng.html',
      description: '',
    },
  ];

  function init() {
    makeHTML(allList);
  }

  function makeHTML(list) {
    var outputHtml = '';
    var tocHtml = '';

    if (list.length > 0) {
      tocHtml += '<nav class="worksToc-inner"><h1 class="text-left">Table of Contents</h1><ul>';
      _.each(list, function (line, i) {
        tocHtml += '<li><a href="#product-' + i + '">' + line.title + '</a></li>';
      });
      tocHtml += '</ul></nav>';
      $('.worksToc').html(tocHtml);

      _.each(list, function (line, i) {
        outputHtml += '<div class="product" id="product-' + i + '">';
        outputHtml += '  <h1 class="productTitle">' + line.title + '</h1>';
        if (line.imageFileName.length > 0) {
          outputHtml +=
            '  <div class="work-image"><a href="' +
            line.descriptionURL +
            '"><img src="../img/' +
            line.imageFileName +
            '.jpg" alt="' +
            line.title +
            '" /></a></div>';
          outputHtml += '  <div class="info">';
          outputHtml += '    <ul></ul>';
          outputHtml += '    <p class="description">' + line.description + '</p></div>';
          outputHtml += '    <p class="description">Production : ' + line.life + '</p>';
        } else {
          outputHtml += '  <div class="info">';
          outputHtml += '    <ul></ul>';
          outputHtml +=
            '    <p class="description"><a href="' +
            line.descriptionURL +
            '">' +
            line.description +
            '</a></div>';
        }
        outputHtml += '  </div>';
        outputHtml += '<!--/.product--></div>';
      });
    } else {
      $('.worksToc').empty();
      outputHtml += 'No items to display';
    }

    $('.productArea').html(outputHtml);
    $('.productArea .product')
      .css({ opacity: 0 })
      .each(function (i) {
        $(this)
          .delay(100 * i)
          .animate({ opacity: 1 }, 300);
      });
  }

  init();
});
