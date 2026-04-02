const STORAGE_KEY = "wspm_downloads";

export const FREE_LIMITS = {
  maxWords: 15,
  maxGridSize: 12,
  maxDownloads: 2,
};

interface DownloadTracker {
  count: number;
  date: string;
}

function getToday(): string {
  return new Date().toISOString().split("T")[0];
}

export function getDownloadCount(): number {
  if (typeof window === "undefined") return 0;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return 0;
    const data: DownloadTracker = JSON.parse(raw);
    if (data.date !== getToday()) return 0;
    return data.count;
  } catch {
    return 0;
  }
}

export function incrementDownload(): void {
  if (typeof window === "undefined") return;
  const count = getDownloadCount();
  const data: DownloadTracker = { count: count + 1, date: getToday() };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

export function canDownload(): boolean {
  return getDownloadCount() < FREE_LIMITS.maxDownloads;
}
