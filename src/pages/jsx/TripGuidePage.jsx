import { Link } from "react-router-dom";
import "../css/TripGuidePage.css";

const links = [
  { label: "白馬コルチナスキー場 公式サイト", url: "https://www.hgp.co.jp/cortina/ski/", kind: "公式" },
  { label: "ホテルグリーンプラザ白馬 宿泊プラン", url: "https://www.hgp.co.jp/cortina/ski/plan/", kind: "公式" },
  { label: "Googleマップ：白馬コルチナスキー場", url: "https://maps.app.goo.gl/vGJgESMDRPBz7Eqz9?g_st=il", kind: "地図" },
  { label: "Googleマップ：ホテルグリーンプラザ白馬", url: "https://maps.app.goo.gl/pt72L8BcWtit8xxH6?g_st=il", kind: "地図" },
  { label: "朝食バイキングの例", url: "https://www.hgp.co.jp/hakuba/dining/29550/", kind: "食事" },
  { label: "夕食バイキングの例", url: "https://www.hgp.co.jp/hakuba/dining/33270/", kind: "食事" },
  { label: "なんば集合場所マップ", url: "https://jamjamtour.jp/meetmap/meetmap.html?MEETMAP=nanba_ski2", kind: "集合場所" },
];

const schedule = [
  { date: "1/8（金）", time: "21:15", title: "なんば集合・夜行バス出発時間", desc: "21:15出発なのでそれまでに来てください。いつもの難波の場所と違うので気を付けてください。", link: links[6].url, linkLabel: "集合場所マップを開く", icon: "🚌" },
  { date: "1/9（土）", time: "朝7時ごろ", title: "スキー場到着・スノーボード", desc: "到着時刻は前後する可能性があります。宿泊します。", icon: "🏂" },
  { date: "1/10（日）", time: "日中〜18時ごろ", title: "スノーボード・帰りのバス", desc: "帰りのバスは18時ごろの予定。途中、サービスエリアなどで約1時間の夕食休憩がある見込みです。", icon: "🚌" },
  { date: "1/11（月）", time: "朝6時ごろ", title: "なんば到着予定", desc: "道路状況などにより到着時刻は変わる可能性があります。", icon: "🏁" },
];

function SectionHeading({ kicker, children }) {
  return <div className="guide-section-heading"><span>{kicker}</span><h2>{children}</h2></div>;
}

function ExternalLink({ href, children, className = "" }) {
  return <a className={className} href={href} target="_blank" rel="noreferrer noopener">{children}<span aria-hidden="true"> ↗</span></a>;
}

export default function TripGuidePage() {
  return (
    <div className="page-stack trip-guide">
      <section className="guide-hero">
        <div className="guide-hero-copy">
          <span className="guide-eyebrow">GROUP SNOWBOARD TRIP · 2027</span>
          <h1>白馬コルチナ<br />スノーボード旅行</h1>
          <div className="guide-hero-date">1/8（金）夜発 → 1/11（月）早朝着</div>
          <div className="guide-hero-pills"><span>🏂 2日間滑走予定</span><span>🏨 ゲレンデ直結ホテル</span></div>
        </div>
        <div className="guide-hero-art" aria-hidden="true"><span className="guide-sun" /><span className="guide-mountain gm-back" /><span className="guide-mountain gm-front" /><span className="guide-slope" /><span className="guide-board">🏂</span></div>
      </section>

      <section className="guide-quick-grid">
        <article className="guide-quick-card"><span className="guide-quick-icon">📍</span><small>目的地</small><strong>白馬コルチナスキー場</strong><span>長野県小谷村</span></article>
        <article className="guide-quick-card"><span className="guide-quick-icon">🏨</span><small>宿泊先</small><strong>ホテルグリーンプラザ白馬</strong><span>ゲレンデ直結</span></article>
        <article className="guide-quick-card"><span className="guide-quick-icon">🕘</span><small>出発</small><strong>1/8（金）21:15</strong><span>なんば集合</span></article>
      </section>

      <section className="guide-panel">
        <SectionHeading kicker="STAY">ホテル・スキー場情報</SectionHeading>
        <div className="guide-info-grid">
          <div className="guide-info-item"><span>宿泊施設</span><strong>ホテルグリーンプラザ白馬</strong><p>スキー場公式ホテル・ゲレンデ直結。館内にレンタルショップ、売店、温泉があります。</p></div>
          <div className="guide-info-item"><span>住所</span><strong>〒399-9422 長野県北安曇郡小谷村千国乙12860-1</strong><p>チェックイン 15:00 ／ チェックアウト 10:00</p></div>
        </div>
        <div className="guide-link-row"><ExternalLink href={links[0].url}>スキー場公式サイト</ExternalLink><ExternalLink href={links[1].url}>ホテル宿泊プラン</ExternalLink><ExternalLink href={links[2].url}>スキー場の地図</ExternalLink><ExternalLink href={links[3].url}>ホテルの地図</ExternalLink></div>
        <div className="guide-meal-links"><ExternalLink href={links[4].url}>朝食バイキングの例</ExternalLink><ExternalLink href={links[5].url}>夕食バイキングの例</ExternalLink></div>
      </section>

      <section className="guide-panel">
        <SectionHeading kicker="ITINERARY">日程・集合場所</SectionHeading>
        <div className="guide-alert"><strong>⚠️ 集合場所に注意</strong><p>松浦さん・新：いつもの難波の場所とは異なる新しい集合場所です。間違えないように注意してください。</p><ExternalLink href={links[6].url} className="guide-alert-link">なんば集合場所マップを確認</ExternalLink></div>
        <div className="guide-timeline">{schedule.map((item, i) => <article className="guide-timeline-item" key={item.date}><div className="guide-timeline-marker">{item.icon}</div><div className="guide-timeline-body"><div className="guide-timeline-meta"><span>{item.date}</span><span>{item.time}</span></div><h3>{item.title}</h3><p>{item.desc}</p>{item.link && <ExternalLink href={item.link}>{item.linkLabel}</ExternalLink>}</div></article>)}</div>
        <div className="guide-alert guide-alert-warm"><strong>💼 仕事終わりの出発について</strong><p>定時で仕事を終えてからだと間に合わない人は、早退が必要かもしれません。田原は定時即退勤後、ご飯を食べてシャワーだけ浴びてちょうど着くくらいです。</p></div>
      </section>

      <section className="guide-panel">
        <SectionHeading kicker="BUDGET">費用・支払い</SectionHeading>
        <p className="guide-muted">予約時にかかった金額（まず支払いが必要な額）</p>
        <div className="guide-price-grid"><article className="guide-price-card"><span>女性陣（3名）</span><strong>51,600<small>円</small></strong><p>1人あたり 17,200円</p></article><article className="guide-price-card"><span>男性陣（2名）</span><strong>54,000<small>円</small></strong><p>1人あたり 27,000円</p></article></div>
        <div className="guide-alert"><strong>💳 いったん田原までお願いします</strong><p>早めに支払ってもらえると、田原の口座が火を吹かなくて済みます。安いプランや、ほかに良い宿・プランが見つかって予約変更する場合は差額を返金します。キャンセル料がかかるまでは、こまめに確認します。</p></div>
        <div className="guide-cost-columns"><div className="guide-cost-card"><h3>✅ 予約時の金額に含まれるもの</h3><ul><li>1日目のリフト券（ナイター券含む）</li><li>朝食・夕食の2食</li><li>館内利用券 3,000円（昼食に使えるかは要確認）</li><li>レンタル20％割引券（公式ホテル宿泊者割引）</li></ul></div><div className="guide-cost-card guide-cost-card-extra"><h3>➕ 別途必要な費用（目安）</h3><ul><li>2日目のリフト券：約6,500円（割引券が使えれば安くなる可能性あり）</li><li>ボード＋ブーツのセットレンタル（2日間・割引込み）：約8,000円</li><li>ボードのみレンタル（2日間・割引込み）：約6,000円</li></ul><p>※レンタル代はいずれも概算です。</p></div></div>
        
<div className="guide-bank">
  <div className="guide-bank-header">
    <span className="guide-bank-icon">🏦</span>

    <div>
      <h3>銀行振込を利用する人へ</h3>
      <p>以下の振込先情報をご確認ください。</p>
    </div>
  </div>

  <div className="guide-bank-details">
    <div className="guide-bank-row">
      <span>銀行名</span>
      <strong>三井住友銀行</strong>
    </div>

    <div className="guide-bank-row">
      <span>支店名</span>
      <strong>平野支店</strong>
    </div>

    <div className="guide-bank-row">
      <span>口座種別</span>
      <strong>普通</strong>
    </div>

    <div className="guide-bank-row">
      <span>口座番号</span>
      <strong>1628378</strong>
    </div>

    <div className="guide-bank-row">
      <span>口座名義</span>
      <strong>タハラ レイジ</strong>
    </div>
  </div>
</div>

        <p className="guide-small-note"></p>
      </section>

      <section className="guide-panel">
        <SectionHeading kicker="SNOW REPORT">去年（2026年）の1月三連休の様子</SectionHeading>
        <p className="guide-muted">yukiyamaアプリで、前年に同じスキー場へ行った人の投稿データを確認した（田原調べ）情報です。</p>
        <div className="guide-weather-grid"><article className="guide-weather-card"><span className="guide-weather-date">2026/1/9（金）</span><div className="guide-weather-symbol">❄️</div><strong>−7℃〜−11℃</strong><span>気温</span><div className="guide-weather-stats"><div><small>積雪</small><b>240cm</b></div><div><small>降雪</small><b>20〜30cmほど</b></div></div><p>雪がしっかり降った日（メモでは「バリ降り！」）</p></article><article className="guide-weather-card"><span className="guide-weather-date">2026/1/10（土）</span><div className="guide-weather-symbol">🌨️</div><strong>1℃〜−5℃</strong><span>気温</span><div className="guide-weather-stats"><div><small>積雪</small><b>200cm程度</b></div><div><small>降雪</small><b>ほぼなし</b></div></div><p>粉雪。メモでは小雨くらいの感じとのこと。</p></article></div>
        <p className="guide-weather-footnote">今年は暖冬予報なのであまり雪降らないかもですが、たくさん雪が降ることを祈りましょう！</p>
      </section>

      <section className="guide-panel">
        <SectionHeading kicker="USEFUL LINKS">リンクまとめ</SectionHeading>
        <div className="guide-all-links">{links.map((link) => <ExternalLink href={link.url} key={link.url} className="guide-all-link"><span className="guide-link-kind">{link.kind}</span><strong>{link.label}</strong><span className="guide-link-arrow">↗</span></ExternalLink>)}</div>
      </section>

      <div className="guide-bottom-actions">
  <Link to="/" className="button button-secondary">
    ← ホームに戻る
  </Link>
</div>
    </div>
  );
}
