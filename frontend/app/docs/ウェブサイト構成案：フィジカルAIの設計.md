# **Website Architecture: The Architect of Physical AI**

**コンセプト:** Bridging Economics, Deep Tech, and Implementation.

**ターゲット:** エンジニア、VC/投資家、共同創業者候補、KUPAC参加希望者

**デザイン:** ダークモード基調。コードブロックやアーキテクチャ図が映えるミニマルなテック・デザイン。

## ---

**1\. Hero Section (ファーストビュー)**

**目的:** 3秒で「誰か」と「何を目指しているか」を理解させる。

* **Headline:Bridging Economics, Deep Tech, and Implementation.**  
  **経済学的視点とエンジニアリングで、フィジカルAIの社会実装を。**  
* **Sub-headline:Kosei Osawa**  
  Tech Lead & Physical AI Architect | Kyoto Univ. Economics | NEDO NEP Fellow  
* **Visual Background:**  
  * (抽象化されたROS 2のノードグラフや、自作CPUの回路図を背景に配置し、技術的な深さを暗示)  
* **Primary CTA:** \[ View Projects \]  
* **Secondary CTA:** \[ Read Vision \]

## ---

**2\. Vision & Mission (The "Why")**

**目的:** 技術を使う理由（Why）と、活動の全体像を伝える。

### **Innovating the Physical World**

**「技術の実装」と「場の創造」を両輪で回す。**

私は、人手不足という日本の構造的な課題に対し、物理世界で自律的に動く「フィジカルAI」**の社会実装に取り組んでいます。私の活動は、技術の実装と事業化を目指す**「KVT Priject」**と、京都発のフィジカルAIエコシステムである**「KUPAC」の2軸で構成されています。

### ---

**Strategy: The Two Engines**

#### **KUPAC: The Ecosystem (環境)**

**Kyoto University Physical AI Community**

*「技術」と「課題」が出会う、持続可能なイノベーションの土壌*

KUPACは、単なる学生団体ではありません。京都大学の高度な研究知見と、関西圏の有力企業の産業課題を接続する「フィジカルAI特化型のエコシステム」です。

* **Scale:** 設立半年で300名に迫る（学生・研究者・エンジニア・企業）が参画。  
* **Trust:** 京都大学成長戦略本部の後援を獲得し、合同会社KUPACとして法人化。産学連携のハブとして機能。  
* **Role:** フィジカルAI人材の育成、技術知見の共有、共同研究・技術実証の組成。

#### **KVT Project: The Spearhead (実践)**

**Keihanna Vision Tech Project (NEDO NEP)**

*KUPAC発の「社会実装モデル」*

私自身がプロジェクトリーダーを務めるKVTは、KUPACの理念を体現する先導プロジェクトです。「ソフトウェアだけでは解決できない人手不足」に対し、AIとロボティクスを融合させて挑んでいます。

* **Impact:** 国立研究開発法人NEDO「NEP 開拓コース 2025」採択事業。  
* **Tech:** フィジカルAIの社会実装に向け、双腕ロボットをフルスクラッチ開発。  
* **Goal:** KUPAC発のスタートアップとして、技術が社会課題を解決するモデルケースを提示する。

## ---

**3\. Technical Portfolio (The "How")**

**目的:** 6つの柱でフルスタック能力（Web〜低レイヤー〜ロボット）を証明する。

### **A. Web Applications**

* **Repot:**生成AISaaS、ユーザー登録・決済機能付き。AWS Lambdaを中心としたフルサーバーレス構成 \+ Terraform IaC。約100人のMAUを獲得  
  https://repot.genz-ai.com/  
  （現在長期メンテナンスのため閉鎖中）  
* **KUPAC Official:** コミュニティ基盤としてのウェブサイト運用、SEO対策。Discordアプリ連携など（現在はコミュニティ内のメンテナに委任）  
  https://www.kupac.org/ja/

### **B. Native & Cross-Platform**

* **4Hack:** Native Modules (Swift/Kotlin) を自作し、NFC/Overlay等のOS機能を活用React Nativeアプリ。2026年4月にアプリストアでリリース予定。  
  https://4hack.jp/  
* **異音検知デスクトップアプリケーション：**WPFを用いたGUIで結果のダッシュボード表示やデータ収集などの機能を提供する。  
  （CLOSED）

### **C. System Programming & Architecture**

* **Basys3-Hack-PC:** FPGA上にHDLで設計・実装したCPU及びIOを含む電卓。  
  https://github.com/OsawaKousei/Basys3-Hack-PC  
* **Native WebGPU Engine:** Google Dawn (C++) を用いたUSDレンダリングエンジンの試作  
  https://github.com/OsawaKousei/TinyUSDWebGPUSample

### **D. Network & Infrastructure**

* **Hybrid Cloud Gateway:** AWS Route53 \+ CloudFront \+ Nginxで自宅IPを隠蔽するセキュア構成。  
  テックブログ：example.com  
* **Cloud Native RAG Infrastructure:** AWS S3 Vector store \+ Bedrock Knowledge baseを使用した、低コストで運用可能なRAGインフラの構築  
  (CLOSED)

### **E. AI Engineering & ML Systems**

* **製造業向け外観検査システム:** 物体検出とOCRを用いた製造業向け外観検査システム。  
  （CLOSED）  
* **Local GenAI:** 低レベルライブラリを用いたローカル完結型マルチモーダル生成環境。  
  レポジトリ：example.com

### **F. Robotics & Autonomous Systems**

* **NHK学生ロボコン2025：**マイコンとROS 2を使用したロボットシステム開発  
  https://github.com/OsawaKousei/2DRoboPrac\_ws  
* **Custom Autonomy Stack:** C++フルスクラッチの自律走行アルゴリズム+シミュレーター  
  https://github.com/OsawaKousei/standalone\_auto\_drive\_ws

## ---

**4\. Career Timeline (The "Who")**

**目的:** 短期間での圧倒的な成長速度とリーダーシップを示す。

* 2023/3：東京都立戸山高校卒業  
* 2023/4：京都大学経済学部経済経営学科入学  
* 2024/3：京大機械研究会副会長就任  
* 2024/4：京都大学情報学研究科森本研究室にてOAとして勤務、フィジカルAI研究に従事  
* 2024/8：AIエンジニアとして松尾研発スターアップの株式会社ProxIndustriesに勤める  
* 2024/4：NEDO NEP 開拓コース 2025 FRに任命  
* 2025/4：テックリードとして株式会社ONIXIONに勤める  
* 2025/6：NHK学生ロボコン出場  
* 2025/7：KUPAC（Kyoto University Physical AI Comunity）設立、代表就任  
* 2025/10：合同会社KUPAC設立、代表社員就任

## ---

**5\. Contact**

**目的:** 具体的なアクションへの誘導。

フィジカルAI領域でのリサーチ、技術実証、およびKUPACへの協賛についてのご相談を受け付けております。

* \[ Email \] ：(個人)[n622jwith@gmail.com](mailto:n622jwith@gmail.com) / (法人)k-osawa@kupac.org  
* \[ GitHub \]：github.com/OsawaKousei  
* \[ X (Twitter) \]：@sawa\_\_622  
* \[ Qiita \]：@N622