const cityData = {
  areas: [
    { id: 'dev', name: '開発区', icon: '🧪', theme: 'blue', x: 80, y: 90, width: 520, height: 390, status: 'プロダクトの基盤と体験をつくるラボ群。レビューの小道が多く、他区との協業が絶えない。' },
    { id: 'planning', name: '事業企画区', icon: '🧭', theme: 'green', x: 680, y: 80, width: 500, height: 360, status: '顧客課題と事業仮説を練る企画スタジオ街。データ分析区・営業区への橋が太い。' },
    { id: 'hr', name: '人事区', icon: '🌱', theme: 'mint', x: 1260, y: 90, width: 470, height: 380, status: '育成・評価・組織開発を支えるコミュニティ広場。すべての区へ対話の道が伸びる。' },
    { id: 'newbiz', name: '新規事業区', icon: '🚀', theme: 'sky', x: 120, y: 570, width: 510, height: 400, status: 'PoCガレージや検証ロフトが並ぶ実験都市。空き部屋の入れ替わりが活発。' },
    { id: 'data', name: 'データ分析区', icon: '📊', theme: 'violet', x: 730, y: 560, width: 470, height: 380, status: '指標・予測・可視化のデータタワー街。事業判断を照らす灯台の役割を担う。' },
    { id: 'sales', name: '営業区', icon: '🏪', theme: 'orange', x: 1310, y: 570, width: 500, height: 390, status: '顧客接点が集まるマーケット街。提案知見が企画区とCS区へ流れていく。' },
    { id: 'cs', name: 'カスタマーサクセス区', icon: '💬', theme: 'aqua', x: 330, y: 1060, width: 520, height: 380, status: '相談カウンターと伴走拠点が連なる港町。顧客の声を街全体へ届ける。' },
    { id: 'factory', name: '製造・現場改善区', icon: '🏭', theme: 'lime', x: 1010, y: 1060, width: 540, height: 400, status: '現場改善のファクトリー街。安全・品質・効率化の知見がほかの区へ輸送される。' },
  ],
  twins: [
    { id: 'aoi-mizuno', name: '水野あおい', role: 'PdM', area: 'planning', houseType: 'planning-studio', x: 780, y: 190, skills: ['課題設定', 'ロードマップ', '意思決定資料'], achievements: ['顧客課題を5テーマに整理し次期ロードマップ案へ反映', '価格検証の判断材料を1枚のストーリーに統合'], contribution: '開発区・営業区の論点を翻訳し、議論の迷子を減らした。', growthTheme: '定量指標を用いた優先順位付け', collaborationIds: ['kai-morino', 'ren-kisaragi', 'mio-tachibana'], evaluationSummary: '事業仮説を具体的な検証単位に分解し、関係者の合意形成を前進させた。', relocationMatches: ['vac-data-product', 'vac-newbiz-poc'] },
    { id: 'sora-fujimi', name: '藤見そら', role: 'BA', area: 'planning', houseType: 'planning-studio', x: 1010, y: 275, skills: ['業務設計', '要件整理', 'ファシリテーション'], achievements: ['受注後業務の手戻りポイントを可視化', '要件定義テンプレートを刷新'], contribution: 'CS区の問い合わせ分類を事業企画の改善テーマに接続した。', growthTheme: '検証結果を投資判断へ接続する力', collaborationIds: ['nana-hoshino', 'haru-komaba'], evaluationSummary: '複雑な業務を見える形へ変換し、部署横断の認識合わせを支援した。', relocationMatches: ['vac-newbiz-ba', 'vac-cs-onboarding'] },
    { id: 'minato-yuki', name: '結城みなと', role: '事業企画', area: 'planning', houseType: 'planning-studio', x: 890, y: 360, skills: ['市場調査', 'KPI設計', '提案設計'], achievements: ['新規セグメントの市場仮説を整理', '営業提案の勝ち筋を3パターン化'], contribution: '営業区のナレッジを企画資料へ変換した。', growthTheme: '財務視点を含む事業計画づくり', collaborationIds: ['ren-kisaragi', 'iori-shirakawa'], evaluationSummary: '顧客接点から得た兆しを事業テーマに変換する役割を担った。', relocationMatches: ['vac-sales-enterprise', 'vac-data-product'] },
    { id: 'kai-morino', name: '森野かい', role: 'フロントエンドエンジニア', area: 'dev', houseType: 'lab-workshop', x: 190, y: 205, skills: ['UI実装', 'アクセシビリティ', 'レビュー'], achievements: ['申請体験の導線を改善し離脱ポイントを削減', '共通UI部品を9種類整備'], contribution: '若手の実装相談所としてレビューコメントを型化した。', growthTheme: 'デザインシステムの運用設計', collaborationIds: ['aoi-mizuno', 'hinata-aoba', 'nana-hoshino'], evaluationSummary: '利用者体験を丁寧に実装へ落とし込み、品質基準の底上げに貢献した。', relocationMatches: ['vac-dev-designsystem', 'vac-newbiz-poc'] },
    { id: 'hinata-aoba', name: '青葉ひなた', role: 'バックエンドエンジニア', area: 'dev', houseType: 'lab-workshop', x: 360, y: 170, skills: ['API設計', '可観測性', '性能改善'], achievements: ['通知基盤のレスポンスを改善', '監査ログの要約パイプラインを安定化'], contribution: 'データ分析区にイベント設計の相談窓口を開いた。', growthTheme: 'ドメイン駆動設計の浸透', collaborationIds: ['yuzu-nanami', 'kei-akatsuki'], evaluationSummary: '見えにくい基盤改善を成果に結び、安心して実験できる土台をつくった。', relocationMatches: ['vac-dev-platform', 'vac-data-engineer'] },
    { id: 'riku-asahi', name: '朝日りく', role: 'QAエンジニア', area: 'dev', houseType: 'lab-workshop', x: 500, y: 310, skills: ['テスト設計', '品質可視化', 'リスク分析'], achievements: ['リリース前チェックをリスクベースへ移行', '不具合傾向を月次で可視化'], contribution: '現場改善区の安全確認プロセスをテスト観点で支援した。', growthTheme: '品質指標と事業指標の接続', collaborationIds: ['suzu-kirino', 'kai-morino'], evaluationSummary: '品質を止める門番ではなく、前に進める地図として提供した。', relocationMatches: ['vac-factory-quality', 'vac-dev-designsystem'] },
    { id: 'mei-sakuma', name: '佐久間めい', role: 'SRE', area: 'dev', houseType: 'lab-workshop', x: 275, y: 360, skills: ['運用改善', '自動化', '障害対応'], achievements: ['夜間アラートの分類を改善', '復旧手順をプレイブック化'], contribution: '全区が安心して使える運用の標準語を整えた。', growthTheme: '信頼性をプロダクト価値として説明する力', collaborationIds: ['hinata-aoba', 'yuzu-nanami'], evaluationSummary: '運用負荷の低減と学習可能な仕組みづくりで継続的な価値を生んだ。', relocationMatches: ['vac-dev-platform'] },
    { id: 'yuzu-nanami', name: '七海ゆず', role: 'データアナリスト', area: 'data', houseType: 'data-tower', x: 830, y: 680, skills: ['SQL', '可視化', 'プロダクト分析'], achievements: ['オンボーディング指標を再定義', '利用継続の兆候をダッシュボード化'], contribution: 'PdMが判断しやすい指標の見方を週次で共有した。', growthTheme: '因果推論の実務適用', collaborationIds: ['aoi-mizuno', 'hinata-aoba', 'nana-hoshino'], evaluationSummary: '数字の羅列を意思決定の会話へ変え、企画とCSの判断を支えた。', relocationMatches: ['vac-data-product', 'vac-cs-insight'] },
    { id: 'kei-akatsuki', name: '暁けい', role: 'データエンジニア', area: 'data', houseType: 'data-tower', x: 1050, y: 745, skills: ['データ基盤', 'ETL', '権限設計'], achievements: ['分析用データマートを整備', '個人情報を含まない検証用データセットを作成'], contribution: '開発区と連携し、安全なデータ利用の道を整備した。', growthTheme: 'セルフサービス分析の拡張', collaborationIds: ['hinata-aoba', 'towa-kamishiro'], evaluationSummary: '守りと使いやすさの両立により、街全体の学習速度を高めた。', relocationMatches: ['vac-data-engineer', 'vac-dev-platform'] },
    { id: 'mio-tachibana', name: '橘みお', role: 'UXリサーチャー', area: 'data', houseType: 'data-tower', x: 930, y: 860, skills: ['インタビュー', '定性分析', 'インサイト整理'], achievements: ['解約理由のインタビューを構造化', '顧客像を4つの利用文脈に更新'], contribution: '営業区とCS区に顧客理解の共通言語を提供した。', growthTheme: '定性・定量を統合した検証設計', collaborationIds: ['aoi-mizuno', 'ren-kisaragi', 'nana-hoshino'], evaluationSummary: '声を単なる感想で終わらせず、プロダクト判断の材料へ昇華した。', relocationMatches: ['vac-data-product', 'vac-cs-insight'] },
    { id: 'ren-kisaragi', name: '如月れん', role: 'フィールドセールス', area: 'sales', houseType: 'market-shop', x: 1415, y: 690, skills: ['提案設計', '顧客理解', '案件推進'], achievements: ['大型商談の提案論点を整理', '失注理由の振り返り会を定例化'], contribution: '事業企画区へ市場の変化を持ち帰る市場通りをつくった。', growthTheme: '複数部署を巻き込む提案ストーリー', collaborationIds: ['aoi-mizuno', 'minato-yuki', 'mio-tachibana'], evaluationSummary: '顧客の現場感を社内の仮説検証に接続し、提案品質を高めた。', relocationMatches: ['vac-sales-enterprise', 'vac-newbiz-poc'] },
    { id: 'iori-shirakawa', name: '白川いおり', role: 'セールスOps', area: 'sales', houseType: 'market-shop', x: 1630, y: 760, skills: ['業務改善', 'CRM設計', '売上分析'], achievements: ['商談入力ルールを簡素化', 'パイプライン見通しの週次レポートを整備'], contribution: '営業メンバーが入力に悩む時間を減らした。', growthTheme: '予測精度と現場負荷のバランス設計', collaborationIds: ['minato-yuki', 'yuzu-nanami'], evaluationSummary: '売上管理を監視ではなく支援の仕組みとして再設計した。', relocationMatches: ['vac-sales-ops', 'vac-data-engineer'] },
    { id: 'tsumugi-hayase', name: '早瀬つむぎ', role: 'インサイドセールス', area: 'sales', houseType: 'market-shop', x: 1485, y: 880, skills: ['仮説架電', '顧客分類', '初回提案'], achievements: ['初回接点の課題メモをテンプレート化', '商談化しなかった理由を企画区へ共有'], contribution: '見込み顧客の小さな声を街の掲示板に届けた。', growthTheme: '業界別の課題仮説づくり', collaborationIds: ['minato-yuki', 'haru-komaba'], evaluationSummary: '早い段階の顧客情報を丁寧に残し、後工程の判断材料を増やした。', relocationMatches: ['vac-sales-enterprise', 'vac-cs-onboarding'] },
    { id: 'nana-hoshino', name: '星野なな', role: 'カスタマーサクセス', area: 'cs', houseType: 'support-counter', x: 460, y: 1170, skills: ['オンボーディング', '顧客伴走', '課題整理'], achievements: ['導入初月の支援シナリオを刷新', '問い合わせを改善テーマに分類'], contribution: '顧客の困りごとを開発区と企画区へ橋渡しした。', growthTheme: '顧客価値を定量で語る力', collaborationIds: ['sora-fujimi', 'kai-morino', 'yuzu-nanami'], evaluationSummary: '顧客の成功体験を社内の改善サイクルへつなぎ続けた。', relocationMatches: ['vac-cs-onboarding', 'vac-data-product'] },
    { id: 'haru-komaba', name: '駒場はる', role: 'サポート企画', area: 'cs', houseType: 'support-counter', x: 680, y: 1280, skills: ['FAQ設計', '問い合わせ分析', '運用設計'], achievements: ['FAQ導線を見直し自己解決率の仮説指標を改善', 'サポート分類を8カテゴリに整理'], contribution: '営業区・事業企画区が使える顧客課題辞書を整えた。', growthTheme: 'プロアクティブ支援の設計', collaborationIds: ['sora-fujimi', 'tsumugi-hayase', 'mio-tachibana'], evaluationSummary: '問い合わせを単なる処理ではなく、学習資産として街に残した。', relocationMatches: ['vac-cs-insight', 'vac-newbiz-ba'] },
    { id: 'yui-makino', name: '牧野ゆい', role: 'コミュニティマネージャー', area: 'cs', houseType: 'support-counter', x: 575, y: 1375, skills: ['イベント設計', 'ユーザー会', '声の収集'], achievements: ['ユーザー会を3テーマで開催', '活用事例の共有フォーマットを作成'], contribution: '顧客同士の学びを社内プロダクト改善にも還元した。', growthTheme: 'コミュニティの事業貢献測定', collaborationIds: ['nana-hoshino', 'mio-tachibana'], evaluationSummary: '顧客との関係性を温かい街の広場として育てた。', relocationMatches: ['vac-cs-onboarding'] },
    { id: 'rio-kusunoki', name: '楠りお', role: 'HRBP', area: 'hr', houseType: 'community-house', x: 1380, y: 205, skills: ['組織開発', '1on1設計', 'キャリア対話'], achievements: ['異動希望者向け対話ガイドを作成', '部署間連携のふりかえり会を設計'], contribution: '引っ越しを命令ではなく本人の選択として語れる場をつくった。', growthTheme: '人材ポートフォリオを物語で説明する力', collaborationIds: ['aoi-mizuno', 'nana-hoshino', 'suzu-kirino'], evaluationSummary: '制度と現場感をつなぎ、安心してキャリアを相談できる土壌を整えた。', relocationMatches: ['vac-hr-learning', 'vac-cs-onboarding'] },
    { id: 'kohaku-mihama', name: '三浜こはく', role: '採用企画', area: 'hr', houseType: 'community-house', x: 1600, y: 300, skills: ['候補者体験', '採用広報', '要件定義'], achievements: ['職種別の魅力整理を更新', '面談フィードバックのテンプレートを改善'], contribution: '各区の家の魅力を候補者にも伝わる言葉に変換した。', growthTheme: '入社後活躍を見据えた採用設計', collaborationIds: ['kai-morino', 'ren-kisaragi'], evaluationSummary: '採用を人数充足ではなく、街に新しい住人を迎える体験として設計した。', relocationMatches: ['vac-hr-learning', 'vac-sales-ops'] },
    { id: 'ema-kurata', name: '倉田えま', role: 'ラーニングデザイナー', area: 'hr', houseType: 'community-house', x: 1465, y: 390, skills: ['研修設計', 'ナレッジ共有', '評価設計'], achievements: ['レビュー支援の学習プログラムを作成', 'マネージャー研修のケースを刷新'], contribution: '開発区の暗黙知を全社で学べる小部屋にした。', growthTheme: '学習効果の測定と改善', collaborationIds: ['kai-morino', 'rio-kusunoki'], evaluationSummary: '成果につながる学びを、社員が自分で選べる形に整えた。', relocationMatches: ['vac-hr-learning', 'vac-dev-designsystem'] },
    { id: 'towa-kamishiro', name: '神代とわ', role: '新規事業リード', area: 'newbiz', houseType: 'planning-studio', x: 245, y: 690, skills: ['事業検証', 'パートナー連携', '意思決定'], achievements: ['PoCの撤退基準と継続基準を明文化', '外部パートナーとの検証計画を策定'], contribution: '失敗から学ぶ文化を新規事業区の掲示板に残した。', growthTheme: '再現性ある事業化プロセス', collaborationIds: ['kei-akatsuki', 'ren-kisaragi', 'sora-fujimi'], evaluationSummary: '熱量だけでなく判断基準を持って新規テーマを前へ進めた。', relocationMatches: ['vac-newbiz-poc', 'vac-newbiz-ba'] },
    { id: 'uta-misaki', name: '岬うた', role: 'プロトタイプデザイナー', area: 'newbiz', houseType: 'lab-workshop', x: 485, y: 810, skills: ['プロトタイピング', '体験設計', 'ユーザーテスト'], achievements: ['検証用モックを2日で作成', 'ユーザーテスト観察メモを改善案へ変換'], contribution: 'アイデアを早く触れる形にして議論を具体化した。', growthTheme: '検証結果からデザイン原則を抽出する力', collaborationIds: ['kai-morino', 'mio-tachibana'], evaluationSummary: '曖昧な構想を小さく試せる形に変え、学習速度を高めた。', relocationMatches: ['vac-newbiz-poc', 'vac-dev-designsystem'] },
    { id: 'noa-izumi', name: '泉のあ', role: 'アライアンス企画', area: 'newbiz', houseType: 'market-shop', x: 365, y: 925, skills: ['提携設計', '契約調整', '価値仮説'], achievements: ['共創パートナー候補を整理', '提携時の役割分担表を作成'], contribution: '営業区と新規事業区の会話に同じ地図を持ち込んだ。', growthTheme: '提携後の価値測定', collaborationIds: ['ren-kisaragi', 'towa-kamishiro'], evaluationSummary: '外部との協業を街の新しい通りとして設計した。', relocationMatches: ['vac-newbiz-ba', 'vac-sales-enterprise'] },
    { id: 'suzu-kirino', name: '桐野すず', role: '現場改善リーダー', area: 'factory', houseType: 'factory-hub', x: 1135, y: 1185, skills: ['現場観察', '改善活動', '安全管理'], achievements: ['点検記録の二重入力を削減', '安全確認のふりかえり会を定例化'], contribution: '現場の小さな気づきを開発区の改善テーマへ届けた。', growthTheme: '現場改善をデータで語る力', collaborationIds: ['riku-asahi', 'rio-kusunoki'], evaluationSummary: '現場の負担を増やさない改善を積み重ね、安心して働ける環境を育てた。', relocationMatches: ['vac-factory-quality', 'vac-data-engineer'] },
    { id: 'akari-hibino', name: '日比野あかり', role: '品質改善', area: 'factory', houseType: 'factory-hub', x: 1390, y: 1285, skills: ['品質分析', '標準化', '教育'], achievements: ['品質チェックリストを現場語に翻訳', '不具合傾向の共有会を実施'], contribution: 'QAエンジニアと連携し、品質の見方を全社に広げた。', growthTheme: '予防品質の仕組み化', collaborationIds: ['riku-asahi', 'ema-kurata'], evaluationSummary: '品質を責任追及ではなく、学習できる仕組みとして整えた。', relocationMatches: ['vac-factory-quality', 'vac-hr-learning'] },
    { id: 'nao-hanamori', name: '花森なお', role: '生産計画', area: 'factory', houseType: 'factory-hub', x: 1235, y: 1415, skills: ['計画調整', '在庫可視化', '業務改善'], achievements: ['生産計画の変更理由を可視化', '在庫確認の手順を簡略化'], contribution: 'データ分析区へ現場で使える粒度をフィードバックした。', growthTheme: '需要変動を見据えた計画モデル', collaborationIds: ['kei-akatsuki', 'suzu-kirino'], evaluationSummary: '現場の現実に合った計画づくりで、改善の持続性を高めた。', relocationMatches: ['vac-factory-planning', 'vac-data-engineer'] },
  ],
  vacancies: [
    { id: 'vac-dev-designsystem', area: 'dev', x: 500, y: 430, label: '入居者募集', neededRole: 'デザインシステム推進', requiredSkills: ['UI実装', 'アクセシビリティ', '横断レビュー'], mission: '各区の画面体験を統一し、誰でも使いやすい仕事の街の標識を整える。', urgency: '中', recommendedResidents: ['kai-morino', 'uta-misaki', 'ema-kurata'] },
    { id: 'vac-dev-platform', area: 'dev', x: 120, y: 410, label: '空き部屋', neededRole: 'プラットフォーム改善', requiredSkills: ['API設計', '運用改善', '自動化'], mission: '街全体の基盤道路を整備し、部署横断の実験を安全にする。', urgency: '高', recommendedResidents: ['hinata-aoba', 'mei-sakuma', 'kei-akatsuki'] },
    { id: 'vac-newbiz-ba', area: 'newbiz', x: 560, y: 940, label: '空き家', neededRole: '事業検証BA', requiredSkills: ['業務設計', '要件整理', '合意形成'], mission: '新規テーマを検証可能な業務単位へ分解し、PoCから事業判断へつなぐ。', urgency: '高', recommendedResidents: ['sora-fujimi', 'towa-kamishiro', 'noa-izumi'] },
    { id: 'vac-newbiz-poc', area: 'newbiz', x: 150, y: 880, label: '引っ越し候補', neededRole: 'PoCプロトタイパー', requiredSkills: ['仮説検証', 'プロトタイピング', '顧客観察'], mission: 'アイデアを早く触れる形にし、学びを街の資産に残す。', urgency: '中', recommendedResidents: ['uta-misaki', 'aoi-mizuno', 'ren-kisaragi'] },
    { id: 'vac-hr-learning', area: 'hr', x: 1640, y: 455, label: '入居者募集', neededRole: '育成プログラム設計', requiredSkills: ['研修設計', 'ナレッジ共有', '評価設計'], mission: '社員の家に増えたスキル部屋を、全社で学べるプログラムへ変換する。', urgency: '中', recommendedResidents: ['ema-kurata', 'rio-kusunoki', 'akari-hibino'] },
    { id: 'vac-data-product', area: 'data', x: 770, y: 890, label: '空き部屋', neededRole: 'プロダクト分析', requiredSkills: ['SQL', 'KPI設計', '可視化'], mission: 'プロダクト判断に使える指標の灯台をつくる。', urgency: '高', recommendedResidents: ['yuzu-nanami', 'aoi-mizuno', 'mio-tachibana'] },
    { id: 'vac-data-engineer', area: 'data', x: 1130, y: 610, label: '空き部屋', neededRole: 'データ基盤整備', requiredSkills: ['ETL', '権限設計', 'データ品質'], mission: '安全で使いやすいデータ道路を拡張し、各区の学習速度を上げる。', urgency: '中', recommendedResidents: ['kei-akatsuki', 'hinata-aoba', 'nao-hanamori'] },
    { id: 'vac-sales-enterprise', area: 'sales', x: 1735, y: 620, label: '入居者募集', neededRole: 'エンタープライズ提案', requiredSkills: ['提案設計', '関係者調整', '業界理解'], mission: '複数部署を巻き込む提案ストーリーをつくり、大きな顧客課題へ向き合う。', urgency: '高', recommendedResidents: ['ren-kisaragi', 'minato-yuki', 'noa-izumi'] },
    { id: 'vac-sales-ops', area: 'sales', x: 1345, y: 910, label: '空き部屋', neededRole: '営業Ops改善', requiredSkills: ['CRM設計', '業務改善', '売上分析'], mission: '営業区の商談道路を整備し、現場負荷を増やさず見通しをよくする。', urgency: '低', recommendedResidents: ['iori-shirakawa', 'kohaku-mihama', 'yuzu-nanami'] },
    { id: 'vac-cs-onboarding', area: 'cs', x: 820, y: 1135, label: '入居者募集', neededRole: 'オンボーディング改善', requiredSkills: ['顧客伴走', '課題整理', '運用設計'], mission: '新しい顧客が迷わず街を歩ける案内所をつくる。', urgency: '高', recommendedResidents: ['nana-hoshino', 'sora-fujimi', 'yui-makino'] },
    { id: 'vac-cs-insight', area: 'cs', x: 365, y: 1415, label: '空き部屋', neededRole: '顧客インサイト分析', requiredSkills: ['問い合わせ分析', '定性分析', '可視化'], mission: '相談カウンターに集まる声を、企画と開発の改善テーマへ翻訳する。', urgency: '中', recommendedResidents: ['haru-komaba', 'mio-tachibana', 'yuzu-nanami'] },
    { id: 'vac-factory-quality', area: 'factory', x: 1515, y: 1170, label: '入居者募集', neededRole: '品質改善推進', requiredSkills: ['品質分析', 'テスト設計', '標準化'], mission: '現場品質とプロダクト品質をつなぐ安全な改善通路をつくる。', urgency: '高', recommendedResidents: ['akari-hibino', 'riku-asahi', 'suzu-kirino'] },
    { id: 'vac-factory-planning', area: 'factory', x: 1045, y: 1435, label: '引っ越し候補', neededRole: '計画改善アナリスト', requiredSkills: ['計画調整', 'データ可視化', '業務改善'], mission: '需要変動を見据えた計画モデルで現場の迷いを減らす。', urgency: '低', recommendedResidents: ['nao-hanamori', 'kei-akatsuki', 'iori-shirakawa'] },
  ],
};

const mapSize = { width: 1900, height: 1540 };
const cityMap = document.getElementById('cityMap');
const detailTitle = document.getElementById('detailTitle');
const detailPanel = document.getElementById('detailPanel');
const moveCandidates = document.getElementById('moveCandidates');
const reportPanel = document.getElementById('reportPanel');
const generateReport = document.getElementById('generateReport');

let selectedType = 'twin';
let selectedId = cityData.twins[0].id;

const areaById = Object.fromEntries(cityData.areas.map((area) => [area.id, area]));
const twinById = Object.fromEntries(cityData.twins.map((twin) => [twin.id, twin]));

function createMap() {
  cityMap.style.width = `${mapSize.width}px`;
  cityMap.style.height = `${mapSize.height}px`;
  cityMap.innerHTML = `
    <div class="central-plaza">
      <strong>Company Plaza</strong>
      <span>成果・スキル・キャリアが交差する中央広場</span>
    </div>
    <svg class="roads" viewBox="0 0 ${mapSize.width} ${mapSize.height}" aria-hidden="true"></svg>
  `;

  renderDistricts();
  renderCollaborationRoads();
  renderTwins();
  renderVacancies();
}

function renderDistricts() {
  cityData.areas.forEach((area) => {
    const residents = cityData.twins.filter((twin) => twin.area === area.id).length;
    const vacancies = cityData.vacancies.filter((vacancy) => vacancy.area === area.id).length;
    const districtEl = document.createElement('button');
    districtEl.className = `district ${area.theme}`;
    districtEl.style.left = `${area.x}px`;
    districtEl.style.top = `${area.y}px`;
    districtEl.style.width = `${area.width}px`;
    districtEl.style.height = `${area.height}px`;
    districtEl.dataset.area = area.id;
    districtEl.innerHTML = `
      <span class="district-name"><b>${area.icon}</b>${area.name}</span>
      <span class="district-status">${area.status}</span>
      <span class="district-meta">住人 ${residents} / 空き部屋 ${vacancies}</span>
    `;
    districtEl.addEventListener('click', (event) => {
      event.stopPropagation();
      selectArea(area.id);
    });
    cityMap.appendChild(districtEl);
  });
}

function renderCollaborationRoads() {
  const svg = cityMap.querySelector('.roads');
  const renderedPairs = new Set();

  cityData.twins.forEach((from) => {
    from.collaborationIds.forEach((toId) => {
      const to = twinById[toId];
      if (!to) return;
      const pairKey = [from.id, to.id].sort().join('__');
      if (renderedPairs.has(pairKey)) return;
      renderedPairs.add(pairKey);

      const crossArea = from.area !== to.area;
      const midX = (from.x + to.x) / 2;
      const midY = (from.y + to.y) / 2;
      const curve = crossArea ? 90 : 35;
      const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      path.setAttribute('d', `M ${from.x} ${from.y} Q ${midX} ${midY - curve} ${to.x} ${to.y}`);
      path.setAttribute('class', crossArea ? 'road cross-area' : 'road');
      svg.appendChild(path);
    });
  });
}

function renderTwins() {
  cityData.twins.forEach((twin) => {
    const area = areaById[twin.area];
    const houseEl = document.createElement('button');
    houseEl.className = `house ${twin.houseType}`;
    houseEl.style.left = `${twin.x}px`;
    houseEl.style.top = `${twin.y}px`;
    houseEl.dataset.twin = twin.id;
    houseEl.innerHTML = `
      <span class="roof"></span>
      <span class="home-body">
        <span class="home-icon">${houseIcon(twin.houseType)}</span>
        <strong>${twin.name}</strong>
        <small>${twin.role}</small>
        <em>${area.name}</em>
      </span>
    `;
    houseEl.addEventListener('click', (event) => {
      event.stopPropagation();
      selectTwin(twin.id);
    });
    cityMap.appendChild(houseEl);
  });
}

function renderVacancies() {
  cityData.vacancies.forEach((vacancy) => {
    const area = areaById[vacancy.area];
    const vacancyEl = document.createElement('button');
    vacancyEl.className = `vacancy-house urgency-${urgencyClass(vacancy.urgency)}`;
    vacancyEl.style.left = `${vacancy.x}px`;
    vacancyEl.style.top = `${vacancy.y}px`;
    vacancyEl.dataset.vacancy = vacancy.id;
    vacancyEl.innerHTML = `
      <span>${vacancy.label}</span>
      <strong>${vacancy.neededRole}</strong>
      <small>${area.name} / 緊急度 ${vacancy.urgency}</small>
    `;
    vacancyEl.addEventListener('click', (event) => {
      event.stopPropagation();
      selectVacancy(vacancy.id);
    });
    cityMap.appendChild(vacancyEl);
  });
}

function selectTwin(id) {
  selectedType = 'twin';
  selectedId = id;
  resetReport();
  render();
}

function selectArea(id) {
  selectedType = 'area';
  selectedId = id;
  resetReport('部署や空き部屋ではなく、社員の家を選択するとレポートを生成できます。');
  render();
}

function selectVacancy(id) {
  selectedType = 'vacancy';
  selectedId = id;
  resetReport('空き部屋ではなく、社員の家を選択するとレポートを生成できます。');
  render();
}

function render() {
  document.querySelectorAll('.house, .district, .vacancy-house').forEach((el) => el.classList.remove('is-selected'));

  if (selectedType === 'twin') renderTwinDetail();
  if (selectedType === 'area') renderAreaDetail();
  if (selectedType === 'vacancy') renderVacancyDetail();

  renderMoveCandidates();
}

function renderTwinDetail() {
  const twin = twinById[selectedId];
  const area = areaById[twin.area];
  const collaborators = twin.collaborationIds.map((id) => twinById[id]).filter(Boolean);
  const matches = getRelocationMatches(twin);

  detailTitle.textContent = 'Work Twin詳細';
  document.querySelector(`[data-twin="${twin.id}"]`)?.classList.add('is-selected');
  detailPanel.innerHTML = `
    <div class="twin-topline"><span>${area.icon} ${area.name}</span><span>${twin.role}</span><span>${houseTypeLabel(twin.houseType)}</span></div>
    <h3>${twin.name}のWork Twin</h3>
    <p class="detail-lead">働く中で増えた成果・スキル・貢献が、この家の部屋や設備として残ります。</p>
    ${listBlock('今期の主要成果', twin.achievements)}
    ${pillBlock('伸びたスキル', twin.skills)}
    <div class="evidence-box"><strong>他者への貢献</strong><p>${twin.contribution}</p></div>
    ${listBlock('関わった人', collaborators.map((person) => `${person.name} / ${areaById[person.area].name} / ${person.role}`))}
    <div class="evidence-box"><strong>次期の成長テーマ</strong><p>${twin.growthTheme}</p></div>
    <div class="comment-draft"><strong>評価コメント案</strong><p>${twin.evaluationSummary}</p></div>
    ${relocationBlock(matches)}
  `;
}

function renderAreaDetail() {
  const area = areaById[selectedId];
  const residents = cityData.twins.filter((twin) => twin.area === area.id);
  const vacancies = cityData.vacancies.filter((vacancy) => vacancy.area === area.id);
  const crossRoads = residents.reduce((count, twin) => count + twin.collaborationIds.filter((id) => twinById[id] && twinById[id].area !== area.id).length, 0);

  detailTitle.textContent = '部署エリア';
  document.querySelector(`[data-area="${area.id}"]`)?.classList.add('is-selected');
  detailPanel.innerHTML = `
    <div class="twin-topline"><span>${area.icon} ${area.name}</span><span>部署エリア</span></div>
    <h3>${area.name}の街並み</h3>
    <p class="detail-lead">${area.status}</p>
    <div class="metric-grid">
      <div><strong>${residents.length}</strong><span>Work Twinの家</span></div>
      <div><strong>${vacancies.length}</strong><span>空き部屋</span></div>
      <div><strong>${crossRoads}</strong><span>部署横断の道</span></div>
    </div>
    ${listBlock('住人のWork Twin', residents.map((twin) => `${twin.name} / ${twin.role} / ${houseTypeLabel(twin.houseType)}`))}
    ${listBlock('入居者募集', vacancies.map((vacancy) => `${vacancy.label}: ${vacancy.neededRole}（緊急度 ${vacancy.urgency}）`))}
  `;
}

function renderVacancyDetail() {
  const vacancy = cityData.vacancies.find((item) => item.id === selectedId);
  const area = areaById[vacancy.area];
  const recommended = vacancy.recommendedResidents.map((id) => twinById[id]).filter(Boolean);

  detailTitle.textContent = '空き部屋パネル';
  document.querySelector(`[data-vacancy="${vacancy.id}"]`)?.classList.add('is-selected');
  detailPanel.innerHTML = `
    <div class="twin-topline"><span>${area.icon} ${area.name}</span><span>${vacancy.label}</span><span>緊急度 ${vacancy.urgency}</span></div>
    <h3>${vacancy.neededRole}</h3>
    <p class="detail-lead">${vacancy.mission}</p>
    ${pillBlock('求めるスキル', vacancy.requiredSkills)}
    ${listBlock('推薦される社員', recommended.map((twin) => `${twin.name} / ${areaById[twin.area].name} / ${twin.role}`))}
    <button class="secondary-button" type="button">この部屋に引っ越し候補を探す</button>
    <div class="evidence-box"><strong>表現の意図</strong><p>人材不足や社内公募を、命令ではなく「次に住みたい部屋を探す」体験として見せています。</p></div>
  `;
}

function renderMoveCandidates() {
  const selectedTwin = selectedType === 'twin' ? twinById[selectedId] : cityData.twins[0];
  const matches = getRelocationMatches(selectedTwin);
  moveCandidates.innerHTML = matches.map(({ vacancy, score }) => {
    const area = areaById[vacancy.area];
    return `
      <button class="move-item" data-vacancy="${vacancy.id}">
        <span>${area.icon} ${area.name} / ${vacancy.label}</span>
        <strong>${vacancy.neededRole}</strong>
        <small>相性 ${score} / ${vacancy.requiredSkills.join('・')}</small>
      </button>
    `;
  }).join('');

  moveCandidates.querySelectorAll('button').forEach((button) => {
    button.addEventListener('click', () => selectVacancy(button.dataset.vacancy));
  });
}

function getRelocationMatches(twin) {
  const matches = cityData.vacancies.map((vacancy) => {
    const skillMatches = vacancy.requiredSkills.filter((skill) => twin.skills.includes(skill)).length;
    const recommendedBoost = vacancy.recommendedResidents.includes(twin.id) ? 2 : 0;
    const explicitBoost = twin.relocationMatches.includes(vacancy.id) ? 1 : 0;
    return { vacancy, scoreValue: skillMatches + recommendedBoost + explicitBoost };
  });
  return matches
    .sort((a, b) => b.scoreValue - a.scoreValue)
    .slice(0, 4)
    .map((item) => ({ ...item, score: item.scoreValue >= 3 ? '高' : item.scoreValue >= 1 ? '中' : '探索' }));
}

function relocationBlock(matches) {
  return `
    <div class="block">
      <h4>引っ越し候補</h4>
      <div class="relocation-list">
        ${matches.map(({ vacancy, score }) => `<button data-vacancy="${vacancy.id}">${areaById[vacancy.area].name}<strong>${vacancy.neededRole}</strong><small>相性 ${score}</small></button>`).join('')}
      </div>
    </div>
  `;
}

function resetReport(message = '社員の家を選択してボタンを押すと、Work Twinの成果証跡からレポート案が表示されます。') {
  reportPanel.className = 'report-card is-empty';
  reportPanel.innerHTML = `<h3>半期成果レポート</h3><p>${message}</p>`;
}

function pillBlock(title, items) {
  return `<div class="block"><h4>${title}</h4><div class="pill-list">${items.map((item) => `<span>${item}</span>`).join('')}</div></div>`;
}

function listBlock(title, items) {
  return `<div class="block"><h4>${title}</h4><ul>${items.map((item) => `<li>${item}</li>`).join('')}</ul></div>`;
}

function houseIcon(type) {
  return {
    'planning-studio': '🧭',
    'lab-workshop': '🧪',
    'community-house': '🌱',
    'data-tower': '📊',
    'market-shop': '🏪',
    'factory-hub': '🏭',
    'support-counter': '💬',
  }[type] || '🏠';
}

function houseTypeLabel(type) {
  return {
    'planning-studio': '企画スタジオ風',
    'lab-workshop': 'ラボ・工房風',
    'community-house': 'コミュニティハウス風',
    'data-tower': 'データタワー風',
    'market-shop': 'マーケット・店舗風',
    'factory-hub': 'ファクトリー風',
    'support-counter': '相談カウンター風',
  }[type] || 'Work Twinの家';
}

function urgencyClass(urgency) {
  return { 高: 'high', 中: 'medium', 低: 'low' }[urgency] || 'medium';
}

generateReport.addEventListener('click', () => {
  if (selectedType !== 'twin') {
    resetReport('レポート生成には社員の家を選択してください。');
    return;
  }

  const twin = twinById[selectedId];
  const collaborators = twin.collaborationIds.map((id) => twinById[id]).filter(Boolean);
  reportPanel.className = 'report-card';
  reportPanel.innerHTML = `
    <h3>${twin.name} 半期成果レポート案</h3>
    <div class="report-section"><strong>今期の成果サマリー</strong><p>${twin.evaluationSummary}</p></div>
    ${listBlock('成果の根拠', twin.achievements)}
    ${pillBlock('発揮されたスキル', twin.skills)}
    ${listBlock('協業・支援の記録', collaborators.map((person) => `${person.name}（${areaById[person.area].name}）との協業：${person.role}の観点を取り入れた。`))}
    <div class="report-section"><strong>次期の成長テーマ</strong><p>${twin.growthTheme}</p></div>
    <div class="comment-draft"><strong>評価コメント案</strong><p>${twin.evaluationSummary} 他者への貢献として「${twin.contribution}」が確認でき、次期は「${twin.growthTheme}」への挑戦が期待されます。</p></div>
    <div class="report-section"><strong>履歴書・職務経歴書向けサマリー</strong><p>${twin.role}として、${twin.skills.slice(0, 3).join('・')}を活かし、${twin.achievements[0]}。部署横断の協業経験も有する。</p></div>
  `;
});

cityMap.addEventListener('click', () => selectArea('planning'));
detailPanel.addEventListener('click', (event) => {
  const target = event.target.closest('[data-vacancy]');
  if (target) selectVacancy(target.dataset.vacancy);
});

createMap();
render();
