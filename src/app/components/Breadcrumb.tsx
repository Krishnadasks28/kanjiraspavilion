import { ChevronRight, Home } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href?: string;
  onClick?: () => void;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
}

export function Breadcrumb({ items, className = "" }: BreadcrumbProps) {
  return (
    <nav
      aria-label="Breadcrumb"
      className={`flex items-center flex-wrap gap-1 text-xs text-[var(--green-medium)] ${className}`}
    >
      <button
        className="flex items-center gap-1 hover:text-[var(--gold)] transition-colors duration-200"
        onClick={() => {
          const el = document.querySelector("#home");
          if (el) el.scrollIntoView({ behavior: "smooth" });
        }}
        aria-label="Home"
      >
        <Home size={13} />
        <span>Home</span>
      </button>
      {items.map((item, index) => (
        <span key={index} className="flex items-center gap-1">
          <ChevronRight size={13} className="text-[var(--gold)]/60" />
          {item.onClick || item.href ? (
            <button
              onClick={item.onClick}
              className="hover:text-[var(--gold)] transition-colors duration-200"
            >
              {item.label}
            </button>
          ) : (
            <span className="text-[var(--green-dark)]">{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}

// Breadcrumb bar used at top of venue sub-sections
export function VenueBreadcrumb({ venueName }: { venueName: string }) {
  return (
    <div className="bg-[var(--ivory)] border-b border-[var(--gold)]/10 px-4 sm:px-6 lg:px-8 py-3">
      <div className="max-w-7xl mx-auto">
        <Breadcrumb
          items={[
            {
              label: "Venues",
              onClick: () => {
                const el = document.querySelector("#venues");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              },
            },
            { label: venueName },
          ]}
        />
      </div>
    </div>
  );
}
