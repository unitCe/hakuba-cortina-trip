
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import "../css/HomePage.css";

const weekdayNames = ["日", "月", "火", "水", "木", "金", "土"];

function formatDateKey(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

const tripEvents = {
  "2027-01-08": {
    type: "start",
    label: "出発",
    title: "1月8日（金）｜夜行バスで出発",
    description:
      "21:15分に出発する予定です。それまでに来てください。集合場所・集合時刻・乗車場所は旅行ガイドから確認してください。",
  },
  "2027-01-09": {
    type: "middle",
    label: "旅行中",
    title: "1月9日（土）｜白馬コルチナへ",
    description:
      "スノーボード旅行の初日です。移動・滑走・宿泊の予定を確認しましょう。",
  },
  "2027-01-10": {
    type: "middle",
    label: "旅行中",
    title: "1月10日（日）｜スノーボード",
    description:
      "スノーボードを楽しむ予定です。１８時ごろに夜行バス乗る予定です。",
  },
  "2027-01-11": {
    type: "end",
    label: "帰着",
    title: "1月11日（月）｜早朝に帰着予定",
    description:
      "難波へ帰着する予定です。到着時刻は朝6時ごろの予定です。",
  },
};

export default function HomePage() {
  // 初期表示は2027年1月
  const [displayedMonth, setDisplayedMonth] = useState(
    new Date(2027, 0, 1)
  );

  // 最初に選択する日付は旅行初日
  const [selectedDate, setSelectedDate] = useState(
    new Date(2027, 0, 8)
  );

  const today = new Date();
  const todayKey = formatDateKey(today);
  const selectedKey = formatDateKey(selectedDate);

  const year = displayedMonth.getFullYear();
  const month = displayedMonth.getMonth();

  const firstDay = new Date(year, month, 1);
  const calendarStart = new Date(
    year,
    month,
    1 - firstDay.getDay()
  );

  // 6週分のカレンダーを作成
  const calendarDays = Array.from({ length: 42 }, (_, index) => {
    const date = new Date(calendarStart);
    date.setDate(calendarStart.getDate() + index);
    return date;
  });

  const selectedEvent = tripEvents[selectedKey];

  function changeMonth(offset) {
    setDisplayedMonth(new Date(year, month + offset, 1));
  }

  function goToToday() {
    const now = new Date();
    setDisplayedMonth(
      new Date(now.getFullYear(), now.getMonth(), 1)
    );
    setSelectedDate(now);
  }

  return (
    <div className="home-page">
      <section className="welcome-banner">
        <div className="welcome-copy">
          <span className="eyebrow">YOUR NEXT ADVENTURE</span>

          <h1>
            白馬コルチナ
            <br />
            スノーボード旅行
          </h1>

          <p>2027年1月、白馬コルチナ。</p>

          <div className="trip-dates">
            2027年1月8日（金）夜発 ～ 1月11日（月）早朝着
          </div>

          <div className="welcome-actions">
            <Link to="/trip-guide" className="button button-light">
              旅行ガイドを見る <span>→</span>
            </Link>
          </div>
        </div>



<div className="welcome-art welcome-video">
  <video
    className="welcome-video-player"
    autoPlay
    muted
    playsInline
    preload="auto"
    aria-label="白馬コルチナ スノーボード旅行のイメージ動画"

    onLoadedMetadata={(event) => {
      // 21秒から再生開始
      event.currentTarget.currentTime = 21;
    }}

    onTimeUpdate={(event) => {
      const video = event.currentTarget;

      // 36秒に到達したら21秒に戻す
      if (video.currentTime >= 36) {
        video.currentTime = 21;
      }
    }}

    onEnded={(event) => {
      const video = event.currentTarget;

      // 動画が終了した場合も21秒から再開
      video.currentTime = 21;
      video.play().catch(() => {});
    }}
  >
<source
  src={`${import.meta.env.BASE_URL}videos/snowboard.mp4`}
  type="video/mp4"
/>
    お使いのブラウザでは動画を再生できません。
  </video>

  <div className="welcome-video-overlay" />
</div>

      </section>

      <section className="calendar-card">
        <div className="section-kicker">TRIP CALENDAR</div>

        <div className="calendar-heading">
          <div>
            <h2>旅行カレンダー</h2>
            <p>旅行の日程と予定を確認できます。</p>
          </div>

          <div className="calendar-controls">
            <button
              type="button"
              onClick={() => changeMonth(-1)}
              aria-label="前の月"
            >
              ←
            </button>

            <button
              type="button"
              className="today-button"
              onClick={goToToday}
            >
              今日
            </button>

            <button
              type="button"
              onClick={() => changeMonth(1)}
              aria-label="次の月"
            >
              →
            </button>
          </div>
        </div>

        <div className="calendar-month-title">
          {year}年 {month + 1}月
        </div>

        <div className="weekday-row">
          {weekdayNames.map((day, index) => (
            <div
              key={day}
              className={`weekday ${
                index === 0
                  ? "sunday"
                  : index === 6
                    ? "saturday"
                    : ""
              }`}
            >
              {day}
            </div>
          ))}
        </div>

        <div className="calendar-grid">
          {calendarDays.map((date) => {
            const dateKey = formatDateKey(date);
            const event = tripEvents[dateKey];

            const classes = ["calendar-day"];

            if (date.getMonth() !== month) {
              classes.push("outside-month");
            }

            if (dateKey === todayKey) {
              classes.push("is-today");
            }

            if (dateKey === selectedKey) {
              classes.push("is-selected");
            }

            if (event) {
              classes.push(`trip-${event.type}`);
            }

            return (
              <button
                key={dateKey}
                type="button"
                className={classes.join(" ")}
                onClick={() => setSelectedDate(date)}
                aria-pressed={dateKey === selectedKey}
                aria-label={`${date.getFullYear()}年${
                  date.getMonth() + 1
                }月${date.getDate()}日${
                  event ? `、${event.label}` : ""
                }`}
              >
                <span className="day-number">
                  {date.getDate()}
                </span>

                {event && (
                  <span className="day-label">
                    {event.label}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        <div className="trip-legend">
          <span className="legend-item">
            <span className="legend-swatch legend-start" />
            出発
          </span>
          <span className="legend-item">
            <span className="legend-swatch legend-middle" />
            旅行中
          </span>
          <span className="legend-item">
            <span className="legend-swatch legend-end" />
            帰着
          </span>
          <span className="legend-item">
            <span className="legend-swatch legend-today" />
            今日
          </span>
        </div>

        <div className="selected-day-panel" aria-live="polite">
          <div className="selected-date">
            <strong>{selectedDate.getDate()}</strong>
            <span>
              {selectedDate.getMonth() + 1}月・
              {weekdayNames[selectedDate.getDay()]}曜日
            </span>
          </div>

          <div className="selected-day-content">
            <h3>
              {selectedEvent
                ? selectedEvent.title
                : `${selectedDate.getMonth() + 1}月${selectedDate.getDate()}日の予定`}
            </h3>

            <p>
              {selectedEvent
                ? selectedEvent.description
                : "この日の旅行予定はまだ登録されていません。"}
            </p>

            {selectedEvent && (
              <Link to="/trip-guide" className="text-link">
                旅行ガイドで詳細を確認 →
              </Link>
            )}
          </div>
        </div>

        <div className="trip-summary">
          <div className="trip-summary-item">
            <span>DAY 01</span>
            <strong>1月8日（金）</strong>
            <p>夜行バスで出発</p>
          </div>

          <div className="trip-summary-item">
            <span>DAY 02–03</span>
            <strong>1月9日（土）〜10日（日）</strong>
            <p>スノーボード・宿泊</p>
          </div>

          <div className="trip-summary-item">
            <span>DAY 04</span>
            <strong>1月11日（月）</strong>
            <p>早朝に帰着予定</p>
          </div>
        </div>
      </section>

      <section className="tip-card">
        <div className="tip-icon">✧</div>
        <div>
          <strong>旅行に必要な情報をまとめて確認</strong>
          <p>
            日程、集合場所、ホテル、費用、持ち物などを
            旅行ガイドで確認できます。
          </p>
          <Link to="/trip-guide" className="text-link">
            旅行ガイドを開く →
          </Link>
        </div>
      </section>
    </div>
  );
}
