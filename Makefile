.PHONY: setup format help

# デフォルトターゲット
help:
	@echo "利用可能なコマンド:"
	@echo "  make setup   - Prettierをインストール"
	@echo "  make format  - プロジェクト全体をフォーマット"

# Prettierのインストール
setup:
	@echo "Prettierをインストールしています..."
	npm install
	@echo "セットアップ完了！"

# プロジェクトのフォーマット
format:
	@echo "コードをフォーマットしています..."
	npm run format
	@echo "フォーマット完了！"
