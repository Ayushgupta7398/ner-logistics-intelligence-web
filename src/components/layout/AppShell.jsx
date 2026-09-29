import React from 'react';
import './AppShell.css';

/**
 * Reusable application shell foundation.
 * Provides responsive layout structure with auto-collapsing desktop sidebar.
 */
export function AppShell({ children }) {
  return (
    <div className="app-shell">
      {/* Sidebar structural placeholder with hover and keyboard focus trigger */}
      <aside
        className="app-shell__sidebar"
        tabIndex={0}
        aria-label="Sidebar Navigation"
      >
        <div className="app-shell__sidebar-content">
          <div className="app-shell__sidebar-brand">
            <span className="app-shell__brand-icon">NER</span>
            <span className="app-shell__brand-title">Logistics Intel</span>
          </div>

          <nav className="app-shell__sidebar-nav">
            {/* Future navigation components will replace this structural placeholder */}
            <div className="app-shell__nav-placeholder">Navigation Area</div>
          </nav>
        </div>
      </aside>

      {/* Main layout container */}
      <div className="app-shell__content-area">
        {/* Top header structural placeholder */}
        <header className="app-shell__header">
          <div className="app-shell__header-brand">
            <span className="text-label">NER Logistics Intelligence Platform</span>
          </div>
          <div className="app-shell__header-placeholder">
            {/* Future Header controls will be mounted here */}
            <span>System Online</span>
          </div>
        </header>

        {/* Page content container */}
        <main className="app-shell__main">
          {children}
        </main>
      </div>
    </div>
  );
}

export default AppShell;
