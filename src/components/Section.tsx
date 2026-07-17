import React from 'react';
import { FaChevronDown } from 'react-icons/fa';

type SectionShellProps = React.HTMLAttributes<HTMLElement> & {
  centered?: boolean;
};

export const SectionShell = React.forwardRef<HTMLElement, SectionShellProps>(
  ({ centered = false, className = '', children, ...props }, ref) => (
    <section
      ref={ref}
      className={`page-section ${centered ? 'page-section-centered' : ''} ${className}`.trim()}
      {...props}
    >
      {children}
    </section>
  )
);

SectionShell.displayName = 'SectionShell';

type SectionHeaderProps = {
  title: string;
  visible: boolean;
  className?: string;
};

export function SectionHeader({ title, visible, className = '' }: SectionHeaderProps) {
  return (
    <div className={`section-header ${className}`.trim()}>
      <h2 className="section-title mb-4">{title}</h2>
      <div
        className={`h-0.5 origin-center bg-cyan-400 transition-all duration-1000 ease-out ${
          visible ? 'w-full scale-x-100' : 'w-0 scale-x-0'
        }`}
      />
    </div>
  );
}

type ScrollArrowProps = {
  onClick: () => void;
  label: string;
  className?: string;
};

export function ScrollArrow({ onClick, label, className = '' }: ScrollArrowProps) {
  return (
    <div className={`section-arrow ${className}`.trim()}>
      <button
        onClick={onClick}
        className="text-4xl text-white transition-all hover:scale-110 hover:opacity-50"
        aria-label={label}
      >
        <FaChevronDown />
      </button>
    </div>
  );
}
