$(function () {
  var allList = [
    {
      id: 'kokeVR',
      life: '2021',
      title: '苔玉のあるわーるど<br>Moss Balls in the World',
      descriptionURL: 'https://vrch.at/wrld_61307e84-0888-4b9f-9b9e-19ee6987f380',
      description:
        'VRChat用ワールド。<br>16名までがオンラインで楽しむことができるワールドです。<br><br>A world for VRChat, where up to 16 people can be online.',
    },
    {
      id: 'kokeGL',
      life: '2020.7.24-2020.11.17',
      title: 'kokeGL',
      descriptionURL: 'https://kokitakashiki.github.io/kokegl.io/',
      description:
        "いろいろな種類のコケをwebglを用いて表現してみます。<br><br>Let's try to represent various types of mosses using webgl.",
    },
    {
      id: 'webTitel',
      life: '2019, released in 2021.8.17',
      title: 'omokake',
      descriptionURL: 'https://apps.apple.com/jp/app/omokake/id1484496250',
      description:
        "おもかけは<br>思い出に触れることをコンセプトにしたアプリです。<br><br>Omokake is<br>This application is based on the concept of touching memories.<br><br>Introduction page: <a href='../omokake.html'>omokake</a>",
    },
    {
      id: 'mofuAR',
      life: '2018-2019',
      title: 'mofuAR',
      descriptionURL: 'https://youtu.be/MoHXsJgTLhs',
      description:
        "Virtual moss placed in AR space, a system that causes animation to evoke the sensation of its touch.<br>We produced a demo. It's called Mofu AR.<br>The concept is simulated experience to touch moss.",
    },
    {
      id: 'newPortfolio01_19',
      life: '2017',
      title: 'fluffy',
      descriptionURL: 'https://youtu.be/mXRpmFW3IDQ',
      description: '',
    },
    {
      id: 'newPortfolio01_06',
      life: '2015',
      title: 'fluffy',
      descriptionURL: 'http://kokitakeda.sakura.ne.jp/dokuwiki/doku.php/imamade/07',
      description: '',
    },
  ];

  function init() {
    makeHTML(allList);
  }

  function makeHTML(list) {
    var outputHtml = '';

    if (list.length > 0) {
      _.each(list, function (line, i) {
        outputHtml += '<div class="product">';
        outputHtml += '  <h3 class="productTitle">' + line.title + '</h3>';
        outputHtml +=
          '  <div class="photo"><a href="' +
          line.descriptionURL +
          '"><img src="../img/' +
          line.id +
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
