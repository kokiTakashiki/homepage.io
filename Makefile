.PHONY: setup format validate validate-all markDownToHTML help

# Markdown変換のデフォルト設定
SRC ?= mainContent/HomePageAbout.md
DEST ?= mainContent/HomePageAbout.html

# デフォルトターゲット
help:
	@echo "利用可能なコマンド:"
	@echo "  make setup        - 開発ツールをインストール (Prettier, Nu Html Checker)"
	@echo "  make format       - プロジェクト全体をフォーマット"
	@echo "  make validate     - HTMLをエラーのみチェック"
	@echo "  make validate-all - HTMLを警告含めて全てチェック"
	@echo "  make markDownToHTML SRC=<入力.md> DEST=<出力.html> - MarkdownをHTMLへ変換"

# 開発ツールのインストール
setup:
	@echo "開発ツールをインストールしています..."
	npm install
	@echo ""
	@echo "セットアップ完了！"
	@echo "  - Prettier (コードフォーマッター)"
	@echo "  - html-validate (HTML検証ツール)"

# プロジェクトのフォーマット
format:
	@echo "コードをフォーマットしています..."
	npm run format
	@echo "フォーマット完了！"

# HTML検証 (エラーのみ)
validate:
	@echo "HTMLを検証しています (エラーのみ)..."
	npm run validate
	@echo "検証成功しました！"

# HTML検証 (警告含む全て)
validate-all:
	@echo "HTMLを検証しています (警告含む全て)..."
	npm run validate:all
	@echo "検証成功しました！"

# MarkdownをHTMLへ変換
markDownToHTML:
	@if [ ! -f "$(SRC)" ]; then \
		echo "入力ファイルが見つかりません: $(SRC)"; \
		echo "例: make markDownToHTML SRC=mainContent/about.md DEST=mainContent/about.html"; \
		exit 1; \
	fi
	@echo "MarkdownをHTMLに変換しています..."
	npx marked "$(SRC)" -o "$(DEST)"
	@echo "変換完了: $(DEST)"
