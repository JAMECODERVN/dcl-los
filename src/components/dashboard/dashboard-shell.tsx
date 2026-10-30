"use client";

import { useState } from "react";

type IconName =
  | "overview"
  | "customers"
  | "pricing"
  | "quotation"
  | "booking"
  | "shipment"
  | "documents"
  | "invoice"
  | "receivables"
  | "revenue"
  | "assistant"
  | "settings"
  | "search"
  | "bell"
  | "chevron"
  | "menu"
  | "close"
  | "calendar"
  | "arrow-up"
  | "arrow-down"
  | "arrow-right"
  | "more"
  | "filter"
  | "clock"
  | "check"
  | "plus"
  | "download"
  | "package"
  | "map"
  | "sparkles";

function Icon({
  name,
  size = 20,
  className,
}: {
  name: IconName;
  size?: number;
  className?: string;
}) {
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    className,
    "aria-hidden": true as const,
  };

  const paths: Record<IconName, React.ReactNode> = {
    overview: <><rect x="3.5" y="3.5" width="7" height="7" rx="1.5" /><rect x="13.5" y="3.5" width="7" height="4" rx="1.5" /><rect x="13.5" y="9.5" width="7" height="11" rx="1.5" /><rect x="3.5" y="13.5" width="7" height="7" rx="1.5" /></>,
    customers: <><path d="M16 20v-1.5a3.5 3.5 0 0 0-3.5-3.5h-5A3.5 3.5 0 0 0 4 18.5V20" /><circle cx="10" cy="7.5" r="3.5" /><path d="M16 4.2a3.5 3.5 0 0 1 0 6.6M20 20v-1.5a3.5 3.5 0 0 0-2.5-3.35" /></>,
    pricing: <><path d="M20 13 13 20l-9-9V4h7l9 9Z" /><circle cx="8" cy="8" r="1" /><path d="m13 8 3 3m-3 0 3-3" /></>,
    quotation: <><path d="M7 3.5h7l5 5V20a1 1 0 0 1-1 1H7a2 2 0 0 1-2-2V5.5a2 2 0 0 1 2-2Z" /><path d="M14 3.5v5h5M8.5 13h7m-7 4h7" /></>,
    booking: <><rect x="3" y="5" width="18" height="15" rx="2" /><path d="M7 3v4m10-4v4M3 10h18m-13 4h2m3 0h2m-7 3h2" /></>,
    shipment: <><path d="M3 7.5 12 3l9 4.5v9L12 21l-9-4.5v-9Z" /><path d="m3.5 7.7 8.5 4.5 8.5-4.5M12 12.2V21m-4.5-15.7 9 4.6" /></>,
    documents: <><path d="M7 3.5h7l5 5V20a1 1 0 0 1-1 1H7a2 2 0 0 1-2-2V5.5a2 2 0 0 1 2-2Z" /><path d="M14 3.5v5h5M8.5 13h7m-7 4h7" /></>,
    invoice: <><rect x="4" y="3.5" width="16" height="17" rx="2" /><path d="M8 8h8m-8 4h8m-8 4h3m5 0h.01" /></>,
    receivables: <><circle cx="12" cy="12" r="9" /><path d="M15.5 8.5c-.6-.7-1.5-1-2.8-1-1.6 0-2.7.8-2.7 2s1 1.8 2.7 2c1.6.2 2.7.8 2.7 2s-1.1 2-2.8 2c-1.2 0-2.3-.4-3-1.2M12.5 6v12" /></>,
    revenue: <><path d="M4 19.5h16M6.5 16V10m5.5 6V5m5.5 11v-8" /><path d="m5 7 6-3 6 3 4-2" /></>,
    assistant: <><path d="m12 3 1.7 5.3L19 10l-5.3 1.7L12 17l-1.7-5.3L5 10l5.3-1.7L12 3Z" /><path d="m19 15 .8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8L19 15Z" /></>,
    settings: <><circle cx="12" cy="12" r="3" /><path d="m19.4 15 .1.1 1.1 1.8-1.7 2.9-2.1-.6a7.8 7.8 0 0 1-1.5.9l-.5 2.1h-3.4l-.5-2.1a7.8 7.8 0 0 1-1.5-.9l-2.1.6-1.7-2.9L6.7 15a7.5 7.5 0 0 1 0-1.8l-1.1-1.8 1.7-2.9 2.1.6a7.8 7.8 0 0 1 1.5-.9l.5-2.1h3.4l.5 2.1a7.8 7.8 0 0 1 1.5.9l2.1-.6 1.7 2.9-1.1 1.8a7.5 7.5 0 0 1-.1 1.8Z" /></>,
    search: <><circle cx="10.8" cy="10.8" r="6.8" /><path d="m16 16 4.5 4.5" /></>,
    bell: <><path d="M18 9a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9m-8 12h4" /></>,
    chevron: <path d="m9 18 6-6-6-6" />,
    menu: <><path d="M4 6h16M4 12h16M4 18h16" /></>,
    close: <><path d="m6 6 12 12M18 6 6 18" /></>,
    calendar: <><rect x="3" y="5" width="18" height="16" rx="2" /><path d="M7 3v4m10-4v4M3 10h18" /></>,
    "arrow-up": <><path d="M12 19V5m-6 6 6-6 6 6" /></>,
    "arrow-down": <><path d="M12 5v14m6-6-6 6-6-6" /></>,
    "arrow-right": <><path d="M5 12h14m-6-6 6 6-6 6" /></>,
    more: <><circle cx="5" cy="12" r="1" /><circle cx="12" cy="12" r="1" /><circle cx="19" cy="12" r="1" /></>,
    filter: <><path d="M4 6h16M7 12h10m-7 6h4" /></>,
    clock: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>,
    check: <path d="m5 12 4 4L19 6" />,
    plus: <><path d="M12 5v14m-7-7h14" /></>,
    download: <><path d="M12 3v12m-5-5 5 5 5-5M4 20h16" /></>,
    package: <><path d="m12 3 9 4.5v9L12 21l-9-4.5v-9L12 3Z" /><path d="m3.5 7.7 8.5 4.5 8.5-4.5M12 12.2V21" /></>,
    map: <><path d="m3 6 6-3 6 3 6-3v15l-6 3-6-3-6 3V6Z" /><path d="M9 3v15m6-12v15" /></>,
    sparkles: <><path d="m12 3 1.7 5.3L19 10l-5.3 1.7L12 17l-1.7-5.3L5 10l5.3-1.7L12 3Z" /><path d="m19 15 .8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8L19 15Z" /></>,
  };

  return <svg {...common}>{paths[name]}</svg>;
}

const navigationGroups: { label?: string; items: { label: string; icon: IconName }[] }[] = [
  { items: [{ label: "Tổng quan", icon: "overview" }] },
  {
    label: "VẬN HÀNH",
    items: [
      { label: "Khách hàng", icon: "customers" },
      { label: "Quản lý giá FCL", icon: "pricing" },
      { label: "Báo giá", icon: "quotation" },
      { label: "Booking", icon: "booking" },
      { label: "Shipment", icon: "shipment" },
      { label: "Chứng từ", icon: "documents" },
    ],
  },
  {
    label: "TÀI CHÍNH",
    items: [
      { label: "Debit Note & Invoice", icon: "invoice" },
      { label: "Công nợ", icon: "receivables" },
      { label: "Doanh thu & Lợi nhuận", icon: "revenue" },
    ],
  },
  {
    label: "TIỆN ÍCH",
    items: [
      { label: "AI Assistant", icon: "assistant" },
      { label: "Cài đặt", icon: "settings" },
    ],
  },
];

function Sidebar({
  activeSection,
  onNavigate,
  isOpen,
  onClose,
}: {
  activeSection: string;
  onNavigate: (label: string) => void;
  isOpen: boolean;
  onClose: () => void;
}) {
  return (
    <>
      {isOpen && (
        <button
          type="button"
          aria-label="Đóng menu"
          className="fixed inset-0 z-30 bg-slate-950/40 lg:hidden"
          onClick={onClose}
        />
      )}
      <aside
        className={`fixed inset-y-0 left-0 z-40 flex w-[264px] flex-col border-r border-slate-200 bg-white transition-transform duration-200 lg:translate-x-0 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex h-[76px] items-center justify-between border-b border-slate-100 px-6">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#0d2947] text-[13px] font-bold tracking-tight text-white">
              DCL
            </div>
            <div>
              <p className="text-[13px] font-bold tracking-[0.12em] text-[#122b47]">DCL LOGISTICS</p>
              <p className="mt-0.5 text-[10px] font-medium tracking-wide text-slate-400">OPERATING SYSTEM</p>
            </div>
          </div>
          <button type="button" className="rounded-lg p-2 text-slate-500 hover:bg-slate-100 lg:hidden" onClick={onClose} aria-label="Đóng menu">
            <Icon name="close" size={18} />
          </button>
        </div>

        <nav className="flex-1 space-y-6 overflow-y-auto px-3 py-5" aria-label="Điều hướng chính">
          {navigationGroups.map((group, groupIndex) => (
            <div key={group.label ?? "overview"}>
              {group.label && (
                <p className="mb-2 px-3 text-[10px] font-semibold tracking-[0.14em] text-slate-400">
                  {group.label}
                </p>
              )}
              <div className="space-y-1">
                {group.items.map((item) => {
                  const active = activeSection === item.label;
                  return (
                    <button
                      type="button"
                      key={item.label}
                      onClick={() => {
                        onNavigate(item.label);
                        onClose();
                      }}
                      className={`flex w-full items-center gap-3 rounded-lg px-3 py-[10px] text-left text-[13px] font-medium transition-colors ${
                        active
                          ? "bg-[#edf4fb] text-[#173c61]"
                          : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                      }`}
                      aria-current={active ? "page" : undefined}
                    >
                      <Icon name={item.icon} size={18} className={active ? "text-[#197c9d]" : "text-slate-400"} />
                      <span className="flex-1">{item.label}</span>
                      {active && <span className="h-1.5 w-1.5 rounded-full bg-[#1a8ca8]" />}
                    </button>
                  );
                })}
              </div>
              {groupIndex === 0 && <div className="mt-5 border-t border-slate-100" />}
            </div>
          ))}
        </nav>

        <div className="border-t border-slate-100 p-4">
          <div className="rounded-xl bg-[#f5f8fb] p-3">
            <div className="text-[11px] font-semibold leading-5 text-slate-700">
              Development Mode – Chưa kết nối dữ liệu thực tế
            </div>
            <p className="mt-1.5 text-[10px] text-slate-400">DCL Logistics</p>
          </div>
          <div className="mt-4 flex w-full items-center gap-3 rounded-lg p-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#dceaf4] text-xs font-bold text-[#264c6d]" aria-hidden="true">—</div>
            <div className="min-w-0 flex-1">
              <p className="truncate text-xs font-semibold text-slate-800">Chưa cấu hình đăng nhập</p>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}

function MetricCard({
  title,
  icon,
  iconClass,
}: {
  title: string;
  icon: IconName;
  iconClass: string;
}) {
  return (
    <article className="rounded-xl border border-slate-200/80 bg-white p-5 shadow-[0_1px_2px_rgba(15,23,42,0.03)]">
      <div className="flex items-start justify-between">
        <p className="text-[12px] font-medium text-slate-500">{title}</p>
        <span className={`flex h-9 w-9 items-center justify-center rounded-lg ${iconClass}`}>
          <Icon name={icon} size={18} />
        </span>
      </div>
      <p className="mt-4 text-sm font-medium text-slate-400">Chưa có dữ liệu.</p>
      <p className="mt-2 text-[10px] text-slate-400">Kết nối dữ liệu để hiển thị chỉ số.</p>
    </article>
  );
}

function RevenueChart() {
  return (
    <section className="rounded-xl border border-slate-200/80 bg-white p-5 shadow-[0_1px_2px_rgba(15,23,42,0.03)]">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h2 className="text-sm font-semibold text-[#18334f]">Doanh thu & lợi nhuận</h2>
          <p className="mt-1 text-[11px] text-slate-400">Hiệu suất kinh doanh theo tháng</p>
        </div>
        <button type="button" className="flex items-center gap-2 rounded-lg border border-slate-200 px-3 py-2 text-[11px] font-medium text-slate-600 hover:bg-slate-50">
          <Icon name="calendar" size={14} />
          6 tháng gần nhất
          <Icon name="chevron" size={13} className="rotate-90" />
        </button>
      </div>
      <div className="mt-6 flex items-center gap-4 text-[10px] text-slate-500">
        <span className="flex items-center gap-1.5"><i className="h-2 w-2 rounded-sm bg-[#183e63]" />Doanh thu</span>
        <span className="flex items-center gap-1.5"><i className="h-2 w-2 rounded-sm bg-[#68c6d2]" />Lợi nhuận</span>
      </div>
      <div className="mt-4 flex h-[172px] flex-col items-center justify-center rounded-lg border border-dashed border-slate-200 bg-slate-50/50">
        <Icon name="revenue" size={22} className="text-slate-300" />
        <p className="mt-3 text-xs font-medium text-slate-500">Chưa có dữ liệu.</p>
        <p className="mt-1 text-[10px] text-slate-400">Biểu đồ sẽ hiển thị sau khi kết nối dữ liệu.</p>
      </div>
    </section>
  );
}

function ShipmentStatusCard() {
  return (
    <section className="rounded-xl border border-slate-200/80 bg-white p-5 shadow-[0_1px_2px_rgba(15,23,42,0.03)]">
      <div>
        <h2 className="text-sm font-semibold text-[#18334f]">Trạng thái lô hàng</h2>
        <p className="mt-1 text-[11px] text-slate-400">Tổng quan các lô hàng đang xử lý</p>
      </div>
      <div className="mt-5 flex min-h-[172px] items-center justify-center gap-7">
        <div className="relative flex h-[132px] w-[132px] shrink-0 items-center justify-center rounded-full border-[14px] border-slate-100">
          <div className="flex h-[92px] w-[92px] flex-col items-center justify-center rounded-full bg-white">
            <span className="text-center text-[10px] font-medium text-slate-400">Chưa có dữ liệu.</span>
          </div>
        </div>
        <div className="max-w-[150px]">
          <p className="text-xs font-medium text-slate-500">Chưa có dữ liệu.</p>
          <p className="mt-1 text-[10px] leading-4 text-slate-400">Trạng thái lô hàng sẽ hiển thị sau khi kết nối dữ liệu.</p>
        </div>
      </div>
    </section>
  );
}

function RecentShipments() {
  return (
    <section className="overflow-hidden rounded-xl border border-slate-200/80 bg-white shadow-[0_1px_2px_rgba(15,23,42,0.03)]">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 px-5 py-4">
        <div>
          <h2 className="text-sm font-semibold text-[#18334f]">Lô hàng gần đây</h2>
          <p className="mt-1 text-[11px] text-slate-400">Theo dõi tiến độ các lô hàng mới nhất</p>
        </div>
        <div className="flex items-center gap-2">
          <button type="button" className="flex items-center gap-1.5 rounded-lg border border-slate-200 px-3 py-2 text-[11px] font-medium text-slate-600 hover:bg-slate-50">
            <Icon name="filter" size={14} /> Bộ lọc
          </button>
          <button type="button" className="flex items-center gap-1.5 rounded-lg px-2 py-2 text-[11px] font-semibold text-[#167f9d] hover:bg-cyan-50">
            Xem tất cả <Icon name="arrow-right" size={14} />
          </button>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[760px] text-left">
          <thead>
            <tr className="bg-[#f8fafc] text-[10px] font-semibold uppercase tracking-wide text-slate-400">
              <th className="px-5 py-3">Mã lô hàng</th>
              <th className="px-4 py-3">Khách hàng</th>
              <th className="px-4 py-3">Tuyến vận chuyển</th>
              <th className="px-4 py-3">Trạng thái</th>
              <th className="px-4 py-3">Ngày dự kiến</th>
              <th className="px-4 py-3"><span className="sr-only">Thao tác</span></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan={6} className="px-5 py-12 text-center text-xs text-slate-400">
                Chưa có dữ liệu.
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}

function NotificationsPanel() {
  return (
    <div className="absolute right-0 top-12 z-20 w-[320px] overflow-hidden rounded-xl border border-slate-200 bg-white shadow-xl shadow-slate-900/10">
      <div className="flex items-center justify-between border-b border-slate-100 px-4 py-3">
        <p className="text-xs font-semibold text-slate-800">Thông báo</p>
      </div>
      <div className="px-4 py-8 text-center">
        <p className="text-[11px] font-medium text-slate-500">Chưa có thông báo.</p>
      </div>
    </div>
  );
}

function DashboardContent() {
  return (
    <div className="space-y-5">
      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <MetricCard title="Tổng lô hàng" icon="shipment" iconClass="bg-blue-50 text-blue-700" />
        <MetricCard title="Doanh thu tháng này" icon="revenue" iconClass="bg-cyan-50 text-cyan-700" />
        <MetricCard title="Công nợ phải thu" icon="receivables" iconClass="bg-amber-50 text-amber-700" />
        <MetricCard title="Tỷ lệ giao hàng đúng hạn" icon="check" iconClass="bg-emerald-50 text-emerald-700" />
      </section>

      <section className="grid gap-5 xl:grid-cols-[1.55fr_1fr]">
        <RevenueChart />
        <ShipmentStatusCard />
      </section>

      <RecentShipments />

      <section className="grid gap-4 md:grid-cols-3">
        <div className="flex items-start gap-3 rounded-xl border border-slate-200/80 bg-white p-4">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-cyan-50 text-cyan-700"><Icon name="package" size={18} /></span>
          <div className="min-w-0 flex-1"><p className="text-[11px] font-semibold text-slate-700">Booking</p><p className="mt-1 text-[10px] text-slate-400">Chưa có dữ liệu.</p></div>
        </div>
        <div className="flex items-start gap-3 rounded-xl border border-slate-200/80 bg-white p-4">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-amber-50 text-amber-700"><Icon name="clock" size={18} /></span>
          <div className="min-w-0 flex-1"><p className="text-[11px] font-semibold text-slate-700">Chứng từ</p><p className="mt-1 text-[10px] text-slate-400">Chưa có dữ liệu.</p></div>
        </div>
        <div className="flex items-start gap-3 rounded-xl border border-slate-200/80 bg-white p-4">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-rose-50 text-rose-700"><Icon name="receivables" size={18} /></span>
          <div className="min-w-0 flex-1"><p className="text-[11px] font-semibold text-slate-700">Công nợ</p><p className="mt-1 text-[10px] text-slate-400">Chưa có dữ liệu.</p></div>
        </div>
      </section>
    </div>
  );
}

function ModulePlaceholder({ title }: { title: string }) {
  return (
    <section className="flex min-h-[420px] flex-col items-center justify-center rounded-xl border border-dashed border-slate-300 bg-white px-6 text-center">
      <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#edf4fb] text-[#167f9d]"><Icon name="sparkles" size={25} /></span>
      <h2 className="mt-5 text-lg font-semibold text-[#18334f]">{title}</h2>
      <p className="mt-2 max-w-md text-xs leading-6 text-slate-500">
        Chức năng đang được phát triển.
      </p>
    </section>
  );
}

export default function DashboardShell() {
  const [activeSection, setActiveSection] = useState("Tổng quan");
  const [search, setSearch] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const isDashboard = activeSection === "Tổng quan";

  return (
    <div className="min-h-screen bg-[#f5f7fa] text-slate-800">
      <Sidebar
        activeSection={activeSection}
        onNavigate={setActiveSection}
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
      <div className="min-h-screen lg:pl-[264px]">
        <header className="sticky top-0 z-20 flex h-[76px] items-center justify-between border-b border-slate-200/80 bg-white/95 px-4 backdrop-blur md:px-7">
          <div className="flex min-w-0 items-center gap-3">
            <button type="button" className="rounded-lg p-2 text-slate-600 hover:bg-slate-100 lg:hidden" onClick={() => setMobileMenuOpen(true)} aria-label="Mở menu">
              <Icon name="menu" size={20} />
            </button>
            <div className="min-w-0">
              <p className="hidden text-[10px] font-medium uppercase tracking-[0.1em] text-slate-400 sm:block">DCL Logistics Operating System</p>
              <p className="truncate text-sm font-semibold text-[#18334f] sm:mt-1">{activeSection}</p>
            </div>
          </div>
          <div className="flex items-center gap-2 sm:gap-3">
            <label className={`${searchOpen ? "flex" : "hidden"} absolute left-3 right-3 top-[82px] z-10 sm:static sm:flex sm:w-[230px] sm:items-center sm:rounded-lg sm:border sm:border-slate-200 sm:bg-[#f8fafc] sm:px-3 sm:py-2`}>
              <Icon name="search" size={16} className="shrink-0 text-slate-400" />
              <input
                type="search"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Tìm lô hàng, khách hàng..."
                className="ml-2 min-w-0 flex-1 bg-transparent text-[11px] text-slate-700 outline-none placeholder:text-slate-400"
                aria-label="Tìm lô hàng hoặc khách hàng"
              />
              {search && <button type="button" onClick={() => setSearch("")} className="ml-2 text-[10px] text-slate-400 hover:text-slate-700" aria-label="Xóa tìm kiếm">Xóa</button>}
            </label>
            <button type="button" className="rounded-lg p-2 text-slate-500 hover:bg-slate-100 sm:hidden" onClick={() => setSearchOpen((open) => !open)} aria-label="Tìm kiếm">
              <Icon name="search" size={19} />
            </button>
            <div className="relative">
              <button type="button" className="relative rounded-lg p-2 text-slate-500 hover:bg-slate-100" onClick={() => setNotificationsOpen((open) => !open)} aria-label="Thông báo" aria-expanded={notificationsOpen}>
                <Icon name="bell" size={19} />
              </button>
              {notificationsOpen && <NotificationsPanel />}
            </div>
            <div className="hidden h-8 border-l border-slate-200 sm:block" />
            <div className="hidden items-center gap-2 rounded-lg p-1.5 md:flex">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#dceaf4] text-[10px] font-bold text-[#264c6d]" aria-hidden="true">—</div>
              <span className="text-[11px] font-medium text-slate-700">Chưa cấu hình đăng nhập</span>
            </div>
          </div>
        </header>

        <main className="mx-auto max-w-[1600px] px-4 py-6 md:px-7 md:py-8">
          <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 text-[10px] text-slate-400">
                <span>Tổng quan</span><Icon name="chevron" size={12} /><span className="font-medium text-slate-500">{activeSection}</span>
              </div>
              <h1 className="mt-2 text-[22px] font-semibold tracking-[-0.03em] text-[#17334f]">
                {isDashboard ? "Tổng quan vận hành" : activeSection}
              </h1>
              <p className="mt-1.5 text-[11px] text-slate-500">
                {isDashboard ? "Theo dõi hoạt động kinh doanh và vận hành logistics của bạn." : `Quản lý thông tin và quy trình ${activeSection.toLocaleLowerCase("vi")}.`}
              </p>
            </div>
            <div className="flex items-center gap-2">
              <span className="hidden items-center gap-1.5 text-[10px] text-slate-400 sm:flex">Development Mode</span>
              <button type="button" className="flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 text-[10px] font-medium text-slate-600 shadow-sm hover:bg-slate-50">
                <Icon name="calendar" size={14} />Tháng 10, 2026<Icon name="chevron" size={12} className="rotate-90" />
              </button>
            </div>
          </div>

          <div className="mb-5 flex items-center gap-2 rounded-lg border border-sky-100 bg-sky-50/70 px-3 py-2.5 text-[10px] text-sky-800">
            <Icon name="sparkles" size={15} className="shrink-0 text-sky-600" />
            <span>Dữ liệu thực tế sẽ hiển thị sau khi kết nối cơ sở dữ liệu.</span>
          </div>

          {isDashboard ? <DashboardContent /> : <ModulePlaceholder title={activeSection} />}

          <footer className="mt-8 flex flex-wrap items-center justify-between gap-2 border-t border-slate-200/80 pt-4 text-[9px] text-slate-400">
            <span>© 2026 DCL Logistics Co., Ltd. · DCL Logistics Operating System</span>
            <span>Hỗ trợ vận hành: Liên hệ quản trị hệ thống</span>
          </footer>
        </main>
      </div>
    </div>
  );
}
