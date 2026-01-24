.PHONY: setup format validate validate-all help

# デフォルトターゲット
help:
	@echo "利用可能なコマンド:"
	@echo "  make setup        - 開発ツールをインストール (Prettier, Nu Html Checker)"
	@echo "  make format       - プロジェクト全体をフォーマット"
	@echo "  make validate     - HTMLをエラーのみチェック"
	@echo "  make validate-all - HTMLを警告含めて全てチェック"

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
