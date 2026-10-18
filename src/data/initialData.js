export const initialTripSettings = {
  tripName: "白馬コルチナ スノーボード旅行",
  description: "みんなで楽しむ冬のグループ旅行",
  startDate: "2027-01-08",
  endDate: "2027-01-11",
};

export const initialSchedules = [
  {
    id: "schedule-1",
    title: "なんば集合・夜行バス出発",
    date: "2027-01-08",
    time: "21:15",
    location: "なんば（新しい集合場所）",
    category: "移動",
    description: "いつもの集合場所とは異なります。集合場所マップを事前に確認してください。",
  },
  {
    id: "schedule-2",
    title: "白馬コルチナ到着・スノーボード",
    date: "2027-01-09",
    time: "07:00",
    location: "白馬コルチナスキー場",
    category: "観光",
    description: "朝7時ごろ到着予定。到着時刻は前後する可能性があります。滑走後はホテルに宿泊します。",
  },
  {
    id: "schedule-3",
    title: "スノーボード・帰りのバス",
    date: "2027-01-10",
    time: "18:00",
    location: "白馬コルチナスキー場 バス乗り場",
    category: "移動",
    description: "日中滑走後、18時ごろの夜行バスで帰ります。途中で夕食休憩がある見込みです。",
  },
  {
    id: "schedule-4",
    title: "なんば到着予定",
    date: "2027-01-11",
    time: "06:00",
    location: "なんば",
    category: "移動",
    description: "朝6時ごろ到着予定。道路状況などにより前後する可能性があります。",
  },
];

export const initialMembers = [
  { id: "member-1", name: "田中", role: "幹事", contact: "", note: "旅行全体の連絡担当" },
  { id: "member-2", name: "佐藤", role: "参加者", contact: "", note: "" },
  { id: "member-3", name: "鈴木", role: "参加者", contact: "", note: "レンタル用品を確認" },
];
