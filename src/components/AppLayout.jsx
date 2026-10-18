import "./AppLayout.css";

import { NavLink, Outlet, useLocation } from "react-router-dom";

const navItems = [
  { to: "/", label: "ホーム", icon: "⌂", end: true },
  { to: "/trip-guide", label: "旅行ガイド", icon: "🏂" },
];

export default function AppLayout() {
  const location = useLocation();

  const titles = {
    "/": "ホーム",
    "/trip-guide": "旅行ガイド",
  };

  const title = titles[location.pathname] || "旅行案内";

  return (
    <div className="app-shell">
      <aside className="sidebar">
        <NavLink to="/" className="brand">
          <span className="brand-mark">T</span>
          <span>
            <strong>Hakuba Trip</strong>
            <small>HAKUBA CORTINA 2027</small>
          </span>
        </NavLink>

        <div className="sidebar-label">MENU</div>

        <nav className="side-nav" aria-label="メインナビゲーション">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              className={({ isActive }) =>
                `nav-link${isActive ? " active" : ""}`
              }
            >
              <span className="nav-icon">{item.icon}</span>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="sidebar-note">
          <span className="note-icon">✦</span>
          <strong>冬の旅行を、ひとつに。</strong>
          <p>日程・費用・集合場所を確認できます。</p>
        </div>

        <div className="sidebar-footer">
          HAKUBA CORTINA · JANUARY 2027
        </div>
      </aside>

      <div className="main-column">
        <header className="topbar">
          <div className="mobile-brand">
            <span className="brand-mark">T</span>
            <strong>Hakuba Trip</strong>
          </div>

          <div className="breadcrumb">
            白馬コルチナ旅行 <span>/</span> <strong>{title}</strong>
          </div>

          <div className="topbar-right">
            <span className="status-dot" />
            旅行案内
          </div>
        </header>

        <main className="page-content">
          <Outlet />
        </main>

        <footer className="mobile-footer">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              className={({ isActive }) =>
                `mobile-nav-link${isActive ? " active" : ""}`
              }
            >
              <span>{item.icon}</span>
              <small>{item.label}</small>
            </NavLink>
          ))}
        </footer>
      </div>
    </div>
  );
}
