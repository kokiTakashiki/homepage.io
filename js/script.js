$(function() {

	/*================================================================
	情報
	================================================================*/
	var allList = [
		{
			id: "kokeVR",
			life: "2021",
			title: "苔玉のあるわーるど<br>Moss Balls in the World",
			descriptionURL: "https://vrch.at/wrld_61307e84-0888-4b9f-9b9e-19ee6987f380",
			description:
			"VRChat用ワールド。<br>16名までがオンラインで楽しむことができるワールドです。<br><br>A world for VRChat, where up to 16 people can be online."
		},
		{
			id: "kokeGL",
			life: "2020.7.24-2020.11.17",
			title: "kokeGL",
			descriptionURL: "https://kokitakashiki.github.io/kokegl.io/",
			description:
			"いろいろな種類のコケをwebglを用いて表現してみます。<br><br>Let's try to represent various types of mosses using webgl."
		},
		{
			id: "webTitel",
			life: "2019, released in 2021.8.17",
			title: "omokake",
			descriptionURL: "https://apps.apple.com/jp/app/omokake/id1484496250",
			description:
			"おもかけは<br>思い出に触れることをコンセプトにしたアプリです。<br><br>Omokake is<br>This application is based on the concept of touching memories.<br><br>Introduction page: <a href='../omokake.html'>omokake</a>"
		},
		{
			id: "mofuAR",
			life: "2018-2019",
			title: "mofuAR",
			descriptionURL: "https://youtu.be/MoHXsJgTLhs",
			description:
			"Virtual moss placed in AR space, a system that causes animation to evoke the sensation of its touch.<br>We produced a demo. It's called Mofu AR.<br>The concept is simulated experience to touch moss."
		},
		{
			id: "newPortfolio01_19",
			life: "2017",
			title: "fluffy",
			descriptionURL: "https://youtu.be/mXRpmFW3IDQ",
			description: ""
		},
		{
			id: "newPortfolio01_06",
			life: "2015",
			title: "fluffy",
			descriptionURL: "http://kokitakeda.sakura.ne.jp/dokuwiki/doku.php/imamade/07",
			description: ""
		},
	];

	/*================================================================
	スクリプトはじまり
	================================================================*/
	function init() {

		//イベント登録
		//$(".filter_life select").on("change", onFilterChange);
		//$(".filter_tag input").on("change", onFilterChange);
		$(".filter_keyword button").on("click", onFilterChange);


		//最初は全て出力
		refleshHtml(allList);
	}

	/*================================================================
	HTML出力
	================================================================*/
	function refleshHtml(list) {

		var outputHtml = '';

		//出力する内容をoutputHtmlに格納
		if (list.length > 0) {
			_.each(list, function(line, i) {
				outputHtml += '<div class="product">';
				outputHtml += '		<h3 class="productTitle">' + line.title + '</h3>';
				//画像
				outputHtml += '	<div class="photo"><a href="' + line.descriptionURL + '"><img src="../img/' + line.id + '.jpg" alt="' + line.title + '" /></a></div>';
				//ボタン画像
                // outputHtml += ' <a href="index.html"><img src="img/' + line.id + '.jpg" alt="' + line.title + '" /></a>';
                // outputHtml += ' </div> ';
                //モーダル画像
                // outputHtml += ' <a data-target=" ' + line.modalid + ' " class="modal-open">クリックするとモーダルウィンドウを開きます。</a> ';
                // outputHtml += ' <div id=" ' + line.modalid + ' " class="modal-content"> ';
                // outputHtml += ' 	<p>リンク1の内容です。</p> ';
                // outputHtml += ' 	<p><a class="modal-close">閉じる</a></p> ';
                // outputHtml += ' </div> ';

				outputHtml += '	<div class="info">';
				// outputHtml += '		<h3 class="productTitle">' + line.title + '</h3>';
				// outputHtml += '		<p class="description">制作年:&nbsp;' + line.life + '</p>';
				// outputHtml += '		<ul class="tag">';
				// _.each(line.tag, function(tag, i){
				// outputHtml += '			<li>' + tag + '</li>';
				// });
				outputHtml += '		</ul>';		
				outputHtml += '		<p class="description">' + line.description + '</p>';
				outputHtml += '		<p class="description">Production : ' + line.life + '</p>';
				outputHtml += '	</div>';
				outputHtml += '<!--/.product--></div>';
			});
		} else {
			outputHtml += '<div class="noproduct"><p>条件に当てはまるwordを検索できませんでした。</p></div>';
		}

		//HTML出力（フェードインアニメーションつき）
		$('.productArea').html(outputHtml);
		$('.productArea .product').css({opacity: 0}).each(function(i){$(this).delay(100 * i).animate({opacity:1}, 300);
		});

		$('.modal-open').click(function(){
        	// オーバーレイ用の要素を追加
        	$('body').append('<div class="modal-overlay"></div>');
        	// オーバーレイをフェードイン
        	$('.modal-overlay').fadeIn('slow');

        	// モーダルコンテンツのIDを取得
        	var modal = '#' + $(this).attr('data-target');
        	DebugPrint(modal);
        	// モーダルコンテンツの表示位置を設定
        	modalResize();
         	// モーダルコンテンツフェードイン
        	$(modal).fadeIn('slow');

        	// 「.modal-overlay」あるいは「.modal-close」をクリック
        	$('.modal-overlay, .modal-close').off().click(function(){
            	// モーダルコンテンツとオーバーレイをフェードアウト
            	$(modal).fadeOut('slow');
            	$('.modal-overlay').fadeOut('slow',function(){
                	// オーバーレイを削除
                	$('.modal-overlay').remove();
            	});
        	});

        	// リサイズしたら表示位置を再取得
        	$(window).on('resize', function(){
            	modalResize();
        	});

        	// モーダルコンテンツの表示位置を設定する関数
        	function modalResize(){
        		DebugPrint("ほげほげ");
            	// ウィンドウの横幅、高さを取得
            	var w = $(window).width();
            	var h = $(window).height();

            	// モーダルコンテンツの表示位置を取得
            	var x = (w - $(modal).outerWidth(true)) / 2;
            	var y = (h - $(modal).outerHeight(true)) / 2;

            	// モーダルコンテンツの表示位置を設定
            	$(modal).css({'left': x + 'px','top': y + 'px'});
        	}
    	});

		//検索件数表示
		//$('.productCntArea').html('<p>' + allList.length + '件中' + list.length + '件を表示しています。</p>');
	}

	/*================================================================
	絞り込み条件を変更した時
	================================================================*/
	function onFilterChange(e) {

		var filterFncs = [];
		var result = [];

		/*//セレクトボックスの値を引数に指定した関数filterByLifeをfilterFuncs配列に格納
		filterFncs.push(
			function(list) {
				return filterByLife(list, $('.filter_life select').val());
			}
		);

		//チェックボックスの値を引数に指定した関数filterByTagをfilterFuncs配列に格納
		filterFncs.push(
			function(list) {
				return filterByTag(list, $('.filter_tag input:checked'));
			}
		);*/

		//キーワードの値を引数に指定した関数filterByKeywordをfilterFuncs配列に格納
		filterFncs.push(
			function(list) {
				return filterByKeyword(list, _.escape($('.filter_keyword input').val()));
			}
		);

		//FilterFuncs配列内の関数をバケツリレーみたいに1つずつ実行して結果をresult配列に格納
		result = _.reduce(filterFncs, function(list, fnc) {
			return fnc(list);
		}, allList);

		//絞り込んだ結果を出力
		refleshHtml(result);
	}

	/*================================================================
	絞り込み[1] セレクトボックス絞り込み関数
	================================================================
	function filterByLife(list, value) {

		//絞り込み指定がない場合はリターン
		if (value == "") {
			return list;
		}

		//選択したセレクトボックスとlifeがマッチするかでフィルタリング
		return _.filter(list, function(item) {
			switch (value) {
				case '1':
					return item.life <= 1;
				case '2':
					return 1 < item.life && item.life <= 20;
				case '3':
					return 20 < item.life && item.life <= 50;
				case '4':
					return 50 < item.life;
			}
		});
	}*/

	/*================================================================
	絞り込み[2] チェックボックス絞り込み関数
	================================================================*/
	function filterByTag(list, value) {

		//絞り込み指定がない場合はリターン
		if (value.length == 0) {
			return list;
		}

		//選択した属性（チェックボックス）とtagがマッチするかでフィルタリング
		return _.filter(list, function(item) {

			var isMatch = false;

			//配列同士の比較
			_.each(value, function(chkItem, i) {

				_.each(item.tag, function(tagItem, i) {
					if (tagItem === $(chkItem).val()) {
						isMatch = true;
					}
				});

			});

			return isMatch;
		});
	}

	/*================================================================
	絞り込み[3] テキストボックス絞り込み関数
	================================================================*/
	function filterByKeyword(list, value) {

		//絞り込み指定がない場合はリターン
		if (value == "") {
			return list;
		}

		//検索キーワードを配列に格納（スペースがある場合は複数格納）
		var freeAry = [];　
		var val = value.replace(/　/g, " ");
		searchAry = val.split(" ");

		//入力したキーワードがtitleもしくdescriptionにマッチするかでフィルタリング
		return _.filter(list, function(item) {

			var isMatch = false;

			_.each(searchAry, function(data, i) {
				if (item.title.indexOf(data) != -1 || item.description.indexOf(data) != -1) {
					isMatch = true;
				}
			});

			return isMatch;

		});

	}

// 「.modal-open」をクリック
    $('.modal-ope').click(function(){
    	//DebugPrint("ほげほげ");
        // オーバーレイ用の要素を追加
        $('body').append('<div class="modal-overlay"></div>');
        // オーバーレイをフェードイン
        $('.modal-overlay').fadeIn('slow');

        // モーダルコンテンツのIDを取得
        var modal = '#' + $(this).attr('data-target');
        DebugPrint(modal);
        // モーダルコンテンツの表示位置を設定
        modalResize();
         // モーダルコンテンツフェードイン
        $(modal).fadeIn('slow');

        // 「.modal-overlay」あるいは「.modal-close」をクリック
        $('.modal-overlay, .modal-close').off().click(function(){
            // モーダルコンテンツとオーバーレイをフェードアウト
            $(modal).fadeOut('slow');
            $('.modal-overlay').fadeOut('slow',function(){
                // オーバーレイを削除
                $('.modal-overlay').remove();
            });
        });

        // リサイズしたら表示位置を再取得
        $(window).on('resize', function(){
            modalResize();
        });

        // モーダルコンテンツの表示位置を設定する関数
        function modalResize(){
            // ウィンドウの横幅、高さを取得
            var w = $(window).width();
            var h = $(window).height();

            // モーダルコンテンツの表示位置を取得
            var x = (w - $(modal).outerWidth(true)) / 2;
            var y = (h - $(modal).outerHeight(true)) / 2;

            // モーダルコンテンツの表示位置を設定
            $(modal).css({'left': x + 'px','top': y/5 + 'px'});
        }

    });


    /*================================================================
	デバック
	================================================================*/
    function DebugPrint(str)
	{
    	var out = document.getElementById("debug");
    	if (!out) return;
    	out.value += str;
	}


	/*================================================================
	スクリプトはじめ
	================================================================*/
	init();

});
