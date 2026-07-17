const HEADER_VIEWPORT_OFFSET = 0.16;

export function scrollToSectionHeader(sectionId: string) {
  const target = document.getElementById(sectionId);
  if (!target) return;

  const header = target.querySelector<HTMLElement>('.section-header');
  const anchor = header ?? target;
  const rect = anchor.getBoundingClientRect();
  const absoluteTop = window.scrollY + rect.top;
  const offsetTop = absoluteTop - window.innerHeight * HEADER_VIEWPORT_OFFSET;
  const maxScrollTop = document.documentElement.scrollHeight - window.innerHeight;

  window.scrollTo({
    top: Math.max(0, Math.min(offsetTop, maxScrollTop)),
    behavior: 'smooth',
  });
}
