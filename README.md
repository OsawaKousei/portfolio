[English](./README-en.md)

# Next.js 静的ウェブサイトテンプレート

このリポジトリは、Next.js を使用した静的ウェブサイトのテンプレートプロジェクトです。TypeScript、Tailwind CSS、shadcn/ui を使用してモダンなウェブサイトを構築し、Docker を使用してローカル開発環境をセットアップできます。package.json のプロジェクト名、docker compose におけるサービス・コンテナ名は GitHub Actions により、作成時に自動でリポジトリ名に初期化されます。

## 目次

- [前提条件](#前提条件)
- [プロジェクト構成](#プロジェクト構成)
- [セットアップ手順](#セットアップ手順)
- [ローカル開発環境](#ローカル開発環境)
- [ビルド](#ビルド)
- [デプロイ](#デプロイ)
- [技術スタック](#技術スタック)

## 前提条件

以下のツールがインストールされていることを確認してください：

- Docker と Docker Compose
- Node.js 18.18.0 以上（ローカル開発時）

## プロジェクト構成

```
next-static-website-template/
├── frontend/               # フロントエンドアプリケーション
│   ├── app/               # Next.js アプリケーション
│   │   ├── src/           # ソースコード
│   │   │   ├── app/       # App Router ディレクトリ
│   │   │   │   └── page.tsx # メインページ
│   │   │   └── components/ # React コンポーネント
│   │   │       ├── Header.tsx
│   │   │       ├── Hero.tsx
│   │   │       ├── Contents.tsx
│   │   │       ├── About.tsx
│   │   │       ├── Contact.tsx
│   │   │       └── Footer.tsx
│   │   ├── package.json   # 依存関係
│   │   ├── tsconfig.json  # TypeScript 設定
│   │   ├── components.json # shadcn/ui 設定
│   │   └── next.config.ts # Next.js 設定
│   ├── Dockerfile         # 本番ビルド用
│   └── Dockerfile.dev     # 開発環境用
├── docker-compose.yaml    # ローカル開発環境の構成
└── README.md             # このファイル
```

## セットアップ手順

1. リポジトリをクローンします

```bash
git clone <repository-url>
cd next-static-website-template
```

2. Docker Compose を使用して開発環境を起動します

```bash
docker compose up --build
```

3. ブラウザで `http://localhost:3000` にアクセスします

## ローカル開発環境

### Docker を使用した開発

Docker Compose を使用してローカル開発環境を起動します：

```bash
# 初回起動またはDockerfileに変更があった場合
docker compose up --build

# 通常の起動
docker compose up
```

ホットリロードが有効になっているため、ソースコードの変更は自動的にブラウザに反映されます。

### ローカル環境での開発

Docker を使用せずにローカルで開発する場合：

```bash
cd frontend/app
npm install
npm run dev
```

## ビルド

### 静的サイトの生成

静的サイトをビルドするには：

```bash
# Dockerを使用する場合
docker build -f frontend/Dockerfile ./frontend

# ローカル環境の場合
cd frontend/app
npm run build
```

ビルドされた静的ファイルは `frontend/app/out` ディレクトリに生成されます。

### 本番ビルドの取得

#### ビルドスクリプトを使用する場合（推奨）

プロジェクトルートのビルドスクリプトを実行します：

```bash
./build.sh
```

このスクリプトは以下の処理を自動的に行います：

- 旧ビルドの削除
- Docker コンテナのビルド
- 静的ファイルの `./dist` ディレクトリへのコピー

#### 手動でビルドする場合

Docker コンテナから静的ファイルを取得するには：

```bash
# 古いビルドを削除
rm -rf ./dist
# ビルド用コンテナを作成
docker build -f frontend/Dockerfile -t website-build ./frontend

# 静的ファイルをローカルにコピー
docker create --name temp-container website-build
docker cp temp-container:/app/out ./dist
docker rm temp-container
```

## デプロイ

### 静的ホスティングサービスへのデプロイ

### AWS S3 への手動デプロイ例

```bash
# AWS CLIがインストール・設定済みの場合
aws s3 sync ./dist s3://kvt-homepage-static-website --delete --p kvt
```

## 技術スタック

- **フレームワーク**: Next.js 15.4.1
- **言語**: TypeScript
- **スタイリング**: Tailwind CSS v4
- **UI コンポーネント**: shadcn/ui
- **アイコン**: Lucide React
- **開発環境**: Docker & Docker Compose
- **ランタイム**: Node.js 23.11.0

## カスタマイズ

### コンポーネントの編集

各セクションのコンポーネントは `frontend/app/src/components/` ディレクトリにあります：

- `Header.tsx`: ナビゲーションヘッダー
- `Hero.tsx`: ヒーローセクション
- `Contents.tsx`: コンテンツセクション
- `About.tsx`: 概要セクション
- `Contact.tsx`: お問い合わせセクション
- `Footer.tsx`: フッター

### スタイルのカスタマイズ

Tailwind CSS を使用してスタイルをカスタマイズできます。shadcn/ui コンポーネントを追加するには：

```bash
cd frontend/app
npx shadcn@latest add button  # ボタンコンポーネントを追加
```

### 環境設定

開発環境とビルド設定は以下のファイルで管理されています：

- `next.config.ts`: Next.js の設定
- `tailwind.config.js`: Tailwind CSS の設定（自動生成）
- `components.json`: shadcn/ui の設定

## トラブルシューティング

### ポート 3000 が使用中の場合

```bash
# 使用中のプロセスを確認
lsof -ti:3000

# プロセスを終了
kill -9 $(lsof -ti:3000)
```

### Docker のクリーンアップ

```bash
# 未使用のコンテナ・イメージを削除
docker system prune -a

# ボリュームも含めて削除
docker system prune -a --volumes
```
