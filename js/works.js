$(function () {
  var allList = [
    {
      imageFileName: 'work_icon',
      life: '2025-',
      title: '名刺管理アプリEightのiOSアプリ開発チーム',
      descriptionURL: 'workDetail/job/2025-04-eight-ios.html',
      description: 'Sansan株式会社のEight事業部にてiOSアプリの作り直しプロジェクトに参加。',
    },
    {
      imageFileName: 'work_icon',
      life: '2024',
      title: 'SansanのiOSアプリ開発チーム',
      descriptionURL: 'workDetail/job/2024-01-sansan-ios.html',
      description: 'Sansan株式会社に入社し、営業DX SansanのiOSアプリを開発するチームに参加。',
    },
    {
      imageFileName: 'work_icon',
      life: '2023',
      title: 'ライブ配信アプリ ミクチャのiOSアプリ開発チーム',
      descriptionURL: 'workDetail/job/2023-02-mixch-ios.html',
      description:
        '株式会社DONUTSに入社し、ライブ配信サービスのミクチャのアプリを開発するチームに参加。',
    },
    {
      imageFileName: 'work_icon',
      life: '2022',
      title: '化粧品小売アプリ @cosmeのiOSアプリ開発チーム',
      descriptionURL: 'workDetail/job/2022-04-cosme-ios.html',
      description: '出向で化粧品小売アプリの@cosmeを開発するチームに参加。',
    },
    {
      imageFileName: 'work_icon',
      life: '2021.7-2022.3',
      title: 'セコム株式会社様のアプリの運用・保守チーム',
      descriptionURL: 'workDetail/job/2021-07-secom.html',
      description:
        'ココセコムあんしんアプリ・Home Security App・SECURILOCK SMARTの3つのアプリの運用と保守を行うチームに参加。',
    },
    {
      imageFileName: 'chairFlight',
      life: '2022',
      title: '椅子飛行部 部室 Chair Flight Room',
      descriptionURL: 'workDetail/personal/chair-flight.html',
      description: 'VRChat用ワールド。仮装空間SNSプラットフォームのVRChat上で公開。',
    },
    {
      imageFileName: 'work_icon',
      life: '2021.3-2021.6',
      title: '音楽健康指導士支援アプリのFREE DAMの開発チーム',
      descriptionURL: 'workDetail/job/2021-03-freedam.html',
      description: 'モバイルアプリを委託されて開発するチームに参加。',
    },
    {
      imageFileName: 'kokeVR',
      life: '2021',
      title: '苔玉のあるわーるど Moss Balls in the World',
      descriptionURL: 'workDetail/personal/moss-balls-world.html',
      description:
        'VRChat用ワールド。<br>16名までがオンラインで楽しむことができるワールドです。<br><br>A world for VRChat, where up to 16 people can be online.',
    },
    {
      imageFileName: 'omokakeLogo',
      life: '2019, released in 2021.8.17',
      title: 'omokake',
      descriptionURL: 'workDetail/personal/omokake.html',
      description:
        "おもかけは<br>思い出に触れることをコンセプトにしたアプリです。<br><br>Omokake is<br>This application is based on the concept of touching memories.<br><br>Introduction page: <a href='../omokake.html'>omokake</a>",
    },
    {
      imageFileName: 'work_icon',
      life: '2020.1-2021.2',
      title: 'ThingsBoard 製造業向けデータ可視化Webアプリ開発チーム',
      descriptionURL: 'workDetail/job/2020-01-thingsboard.html',
      description:
        '製造業向けのデータ可視化Webアプリを、お客様の要望に合わせて開発するチームに参加。',
    },
    {
      imageFileName: 'kokeGL',
      life: '2020.7.24-2020.11.17',
      title: 'kokeGL',
      descriptionURL: 'workDetail/personal/kokegl.html',
      description:
        "いろいろな種類のコケをwebglを用いて表現してみます。<br><br>Let's try to represent various types of mosses using webgl.",
    },
    {
      imageFileName: 'mofuAR',
      life: '2018-2019',
      title: 'mofuAR',
      descriptionURL: 'workDetail/personal/mofuar.html',
      description:
        "Virtual moss placed in AR space, a system that causes animation to evoke the sensation of its touch.<br>We produced a demo. It's called Mofu AR.<br>The concept is simulated experience to touch moss.",
    },
    {
      imageFileName: 'newPortfolio01_19',
      life: '2017',
      title: 'floating sight',
      descriptionURL: 'workDetail/personal/floating-sight.html',
      description: '',
    },
    {
      imageFileName: 'newPortfolio01_06',
      life: '2015',
      title: 'fluffy',
      descriptionURL: 'workDetail/personal/fluffy.html',
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
      tocHtml += '<nav class="worksToc-inner"><h3 class="text-left">目次</h3><ul>';
      _.each(list, function (line, i) {
        tocHtml += '<li><a href="#product-' + i + '">' + line.title + '</a></li>';
      });
      tocHtml += '</ul></nav>';
      $('.worksToc').html(tocHtml);

      _.each(list, function (line, i) {
        outputHtml += '<div class="product" id="product-' + i + '">';
        outputHtml += '  <h3 class="productTitle">' + line.title + '</h3>';
        outputHtml +=
          '  <div class="photo"><a href="' +
          line.descriptionURL +
          '"><img src="../img/' +
          line.imageFileName +
          '.jpg" alt="' +
          line.title +
          '" /></a></div>';
        outputHtml += '  <div class="info">';
        outputHtml += '    <ul></ul>';
        outputHtml += '    <p class="description">' + line.description + '</p>';
        outputHtml += '    <p class="description">Production : ' + line.life + '</p>';
        outputHtml += '  </div>';
        outputHtml += '<!--/.product--></div>';
      });
    } else {
      $('.worksToc').empty();
      outputHtml +=
        '<div class="noproduct"><p>条件に当てはまるwordを検索できませんでした。</p></div>';
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
