const cityData = {
  philosophy: [
    '監視ではなく、本人主導で成果の証跡を育てる',
    '生ログではなく、AIが要約した成果証跡だけを扱う',
    '評価シートを書くのではなく、Work Twinから成果レポートを生成する',
    '異動は、空き部屋を探して引っ越すように表現する',
  ],
  areas: [
    {
      id: 'dev',
      name: '開発区',
      theme: 'blue',
      x: 6,
      y: 8,
      width: 42,
      height: 38,
      status: 'UI改善とレビュー支援が活発。フロントエンドの空き部屋あり。',
      metrics: { vitality: 86, vacancies: 1, collaborations: 12 },
      vacancies: ['デザインシステム住戸 / UI実装者 募集'],
    },
    {
      id: 'planning',
      name: '事業企画区',
      theme: 'green',
      x: 52,
      y: 9,
      width: 41,
      height: 36,
      status: '顧客課題の仮説検証が増加。PdM育成の小さな家が拡張中。',
      metrics: { vitality: 78, vacancies: 0, collaborations: 9 },
      vacancies: [],
    },
    {
      id: 'hr',
      name: '人事区',
      theme: 'navy',
      x: 6,
      y: 53,
      width: 42,
      height: 38,
      status: '評価制度と研修設計のハブ。組織開発の道が各区へ伸びる。',
      metrics: { vitality: 74, vacancies: 1, collaborations: 8 },
      vacancies: ['育成プログラム住戸 / 研修設計者 募集'],
    },
    {
      id: 'newbiz',
      name: '新規事業区',
      theme: 'sky',
      x: 52,
      y: 53,
      width: 41,
      height: 38,
      status: '要件定義と関係者調整の往来が多い。BAの空き家が拡張予定。',
      metrics: { vitality: 82, vacancies: 2, collaborations: 10 },
      vacancies: ['事業検証ロフト / BA 募集', 'PoCガレージ / 顧客検証 募集'],
    },
  ],
  twins: [
    {
      id: 'sato',
      displayName: '佐藤さん',
      role: 'PdM見習い',
      areaId: 'planning',
      x: 60,
      y: 19,
      size: 'medium',
      level: 3,
      growth: '+18%',
      strengths: ['顧客課題整理', '仮説検証', '資料作成'],
      achievements: ['顧客インタビュー12件を要約し、課題ツリーを整備', '新料金プランの仮説検証を2週間で実施', '経営会議向けの意思決定資料を標準化'],
      evidence: '議事録・提案資料・検証結果をAIが要約し、本人が公開範囲を承認した成果証跡。',
      support: ['田中さんのUI改善の背景整理を支援', '山本さんの要件定義レビューに参加'],
      projects: ['顧客課題探索プロジェクト', '料金プランPoC'],
      nextTheme: 'データを使った優先順位付けとプロダクト指標設計',
    },
    {
      id: 'tanaka',
      displayName: '田中さん',
      role: 'フロントエンド',
      areaId: 'dev',
      x: 18,
      y: 19,
      size: 'large',
      level: 4,
      growth: '+24%',
      strengths: ['UI改善', '実装', 'レビュー支援'],
      achievements: ['申請画面の導線を改善し、完了率の仮説指標を向上', '共通コンポーネントを6個整備', '若手メンバー3名のレビュー支援を継続'],
      evidence: 'Pull Request、デザインレビュー、リリースノートをAIが成果単位へ要約。',
      support: ['佐藤さんの仮説検証画面を試作', '鈴木さんの研修ポータル改善を支援'],
      projects: ['評価体験リニューアル', '社内UI Kit'],
      nextTheme: 'アクセシビリティ設計と横断的な品質基準づくり',
    },
    {
      id: 'suzuki',
      displayName: '鈴木さん',
      role: 'HR企画',
      areaId: 'hr',
      x: 18,
      y: 67,
      size: 'medium',
      level: 3,
      growth: '+15%',
      strengths: ['評価制度', '研修設計', '組織開発'],
      achievements: ['評価キャリブレーションの観点を整理', 'マネージャー研修の設計を刷新', '異動希望者向けの対話ガイドを作成'],
      evidence: '研修アンケート、制度設計メモ、1on1の要約メモから本人確認済みの証跡を生成。',
      support: ['各区の空き部屋要件を言語化', '田中さんのレビュー支援を研修化'],
      projects: ['評価制度アップデート', 'キャリア対話プログラム'],
      nextTheme: '人材ポートフォリオを街の変化として説明する力',
    },
    {
      id: 'yamamoto',
      displayName: '山本さん',
      role: 'BA',
      areaId: 'newbiz',
      x: 66,
      y: 68,
      size: 'large',
      level: 4,
      growth: '+21%',
      strengths: ['業務設計', '要件定義', '関係者調整'],
      achievements: ['新規SaaS案の業務フローを可視化', 'PoC要件を3段階に分割し実行可能性を向上', '営業・開発・法務の合意形成を推進'],
      evidence: '業務フロー図、要件定義書、合意形成メモをAIが半期成果へ圧縮。',
      support: ['佐藤さんの顧客課題整理を構造化', '新規事業区の空き家要件を更新'],
      projects: ['業務変革PoC', '新規SaaS検証'],
      nextTheme: '検証結果を事業判断に接続する定量設計',
    },
  ],
  vacancies: [
    { id: 'vac-dev-ui', areaId: 'dev', x: 33, y: 28, title: '空き部屋', subtitle: 'UI実装者 募集', match: ['田中さん', '佐藤さん'] },
    { id: 'vac-hr-learning', areaId: 'hr', x: 34, y: 76, title: '空き部屋', subtitle: '研修設計者 募集', match: ['鈴木さん'] },
    { id: 'vac-newbiz-ba', areaId: 'newbiz', x: 84, y: 67, title: '空き家', subtitle: 'BA 募集', match: ['山本さん', '佐藤さん'] },
    { id: 'vac-newbiz-poc', areaId: 'newbiz', x: 74, y: 81, title: '入居者募集', subtitle: '顧客検証 募集', match: ['佐藤さん'] },
  ],
};

let selectedType = 'twin';
let selectedId = 'sato';

const cityMap = document.querySelector('#cityMap');
const detailPanel = document.querySelector('#detailPanel');
const detailTitle = document.querySelector('#detailTitle');
const reportPanel = document.querySelector('#reportPanel');
const moveCandidates = document.querySelector('#moveCandidates');
const generateReport = document.querySelector('#generateReport');

function createMap() {
  cityData.areas.forEach((area) => {
    const areaEl = document.createElement('button');
    areaEl.className = `district ${area.theme}`;
    areaEl.style.left = `${area.x}%`;
    areaEl.style.top = `${area.y}%`;
    areaEl.style.width = `${area.width}%`;
    areaEl.style.height = `${area.height}%`;
    areaEl.innerHTML = `
      <span class="district-name">${area.name}</span>
      <span class="district-status">活気 ${area.metrics.vitality} / 協業 ${area.metrics.collaborations}</span>
    `;
    areaEl.addEventListener('click', () => selectArea(area.id));
    cityMap.appendChild(areaEl);
  });

  cityData.twins.forEach((twin) => {
    const house = document.createElement('button');
    house.className = `house ${twin.size}`;
    house.style.left = `${twin.x}%`;
    house.style.top = `${twin.y}%`;
    house.innerHTML = `
      <span class="roof"></span>
      <span class="home-body">
        <strong>${twin.displayName}</strong>
        <small>${twin.role}</small>
        <em>Lv.${twin.level} ${twin.growth}</em>
      </span>
    `;
    house.addEventListener('click', (event) => {
      event.stopPropagation();
      selectTwin(twin.id);
    });
    cityMap.appendChild(house);
  });

  cityData.vacancies.forEach((vacancy) => {
    const vacancyEl = document.createElement('button');
    vacancyEl.className = 'vacancy-house';
    vacancyEl.style.left = `${vacancy.x}%`;
    vacancyEl.style.top = `${vacancy.y}%`;
    vacancyEl.innerHTML = `<strong>${vacancy.title}</strong><small>${vacancy.subtitle}</small>`;
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
  reportPanel.className = 'report-card is-empty';
  reportPanel.innerHTML = '<h3>半期成果レポート</h3><p>ボタンを押すと、選択中のWork Twinの成果証跡からレポート案が表示されます。</p>';
  render();
}

function selectArea(id) {
  selectedType = 'area';
  selectedId = id;
  render();
}

function selectVacancy(id) {
  selectedType = 'vacancy';
  selectedId = id;
  render();
}

function render() {
  document.querySelectorAll('.house, .district, .vacancy-house').forEach((el) => el.classList.remove('is-selected'));

  if (selectedType === 'twin') {
    const twin = cityData.twins.find((item) => item.id === selectedId);
    const area = cityData.areas.find((item) => item.id === twin.areaId);
    detailTitle.textContent = 'Work Twin詳細';
    document.querySelectorAll('.house').forEach((el) => {
      if (el.textContent.includes(twin.displayName)) el.classList.add('is-selected');
    });
    detailPanel.innerHTML = `
      <div class="twin-topline"><span>${area.name}</span><span>${twin.role}</span><span>成長 ${twin.growth}</span></div>
      <h3>${twin.displayName}の家</h3>
      <p class="detail-lead">成果や成長が増えるほど、家が増築され、スキルは部屋や設備として残ります。</p>
      ${pillBlock('伸びたスキルの部屋', twin.strengths)}
      ${listBlock('今期の主要成果', twin.achievements)}
      <div class="evidence-box"><strong>成果の根拠</strong><p>${twin.evidence}</p></div>
      ${listBlock('支援した相手', twin.support)}
      ${pillBlock('関わったプロジェクト', twin.projects)}
    `;
  } else if (selectedType === 'area') {
    const area = cityData.areas.find((item) => item.id === selectedId);
    const residents = cityData.twins.filter((item) => item.areaId === area.id).map((item) => `${item.displayName} / ${item.role}`);
    detailTitle.textContent = '部署状態パネル';
    detailPanel.innerHTML = `
      <div class="twin-topline"><span>${area.name}</span><span>部署エリア</span></div>
      <h3>${area.name}の状態</h3>
      <p class="detail-lead">${area.status}</p>
      <div class="metric-grid">
        <div><strong>${area.metrics.vitality}</strong><span>街の活気</span></div>
        <div><strong>${area.metrics.collaborations}</strong><span>協業の道</span></div>
        <div><strong>${area.metrics.vacancies}</strong><span>空き部屋</span></div>
      </div>
      ${listBlock('住人のWork Twin', residents)}
      ${area.vacancies.length ? listBlock('入居者募集', area.vacancies) : '<div class="evidence-box"><strong>入居状況</strong><p>現在この区の空き部屋はありません。</p></div>'}
    `;
  } else {
    const vacancy = cityData.vacancies.find((item) => item.id === selectedId);
    const area = cityData.areas.find((item) => item.id === vacancy.areaId);
    detailTitle.textContent = '空き部屋パネル';
    detailPanel.innerHTML = `
      <div class="twin-topline"><span>${area.name}</span><span>引っ越し候補</span></div>
      <h3>${vacancy.title}：${vacancy.subtitle}</h3>
      <p class="detail-lead">人材不足の部署を空き部屋として表現し、本人の成長テーマと街の需要が合う候補を探します。</p>
      ${pillBlock('相性がよいWork Twin', vacancy.match)}
      <div class="evidence-box"><strong>表現の意図</strong><p>異動は命令ではなく、次に住みたい部屋を本人が探す「引っ越し」として扱います。</p></div>
    `;
  }

  renderMoveCandidates();
}

function renderMoveCandidates() {
  const selectedTwin = selectedType === 'twin' ? cityData.twins.find((item) => item.id === selectedId) : cityData.twins[0];
  const items = cityData.vacancies.map((vacancy) => {
    const area = cityData.areas.find((item) => item.id === vacancy.areaId);
    const matchScore = vacancy.match.includes(selectedTwin.displayName) ? '相性 高' : '探索候補';
    return `
      <button class="move-item" data-vacancy="${vacancy.id}">
        <span>${area.name}</span>
        <strong>${vacancy.subtitle}</strong>
        <small>${matchScore} / ${selectedTwin.nextTheme}</small>
      </button>
    `;
  }).join('');
  moveCandidates.innerHTML = items;
  moveCandidates.querySelectorAll('button').forEach((button) => {
    button.addEventListener('click', () => selectVacancy(button.dataset.vacancy));
  });
}

function pillBlock(title, items) {
  return `<div class="block"><h4>${title}</h4><div class="pill-list">${items.map((item) => `<span>${item}</span>`).join('')}</div></div>`;
}

function listBlock(title, items) {
  return `<div class="block"><h4>${title}</h4><ul>${items.map((item) => `<li>${item}</li>`).join('')}</ul></div>`;
}

generateReport.addEventListener('click', () => {
  const twin = selectedType === 'twin'
    ? cityData.twins.find((item) => item.id === selectedId)
    : cityData.twins[0];
  reportPanel.className = 'report-card';
  reportPanel.innerHTML = `
    <h3>${twin.displayName} 半期成果レポート案</h3>
    ${listBlock('今期の主要成果', twin.achievements)}
    <div class="report-section"><strong>成果の根拠</strong><p>${twin.evidence}</p></div>
    ${pillBlock('発揮されたスキル', twin.strengths)}
    ${listBlock('他者への貢献', twin.support)}
    <div class="report-section"><strong>次期の成長テーマ</strong><p>${twin.nextTheme}</p></div>
    <div class="comment-draft">評価コメント案：本人が承認した要約証跡をもとに、${twin.role}としての成長と周囲への支援が確認できます。次期は「${twin.nextTheme}」を重点テーマに、家の新しい部屋を増築していくことを期待します。</div>
  `;
});

createMap();
render();
