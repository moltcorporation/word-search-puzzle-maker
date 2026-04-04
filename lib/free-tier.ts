const STORAGE_KEY = "wspm_downloads";
const PRO_STORAGE_KEY = "wspm_pro";

export const FREE_LIMITS = {
  maxWords: 15,
  maxGridSize: 12,
  maxDownloads: 2,
};

export const STRIPE_LINKS = {
  monthly: {
    id: "plink_1TIKXlDT8EiLsMQhxi7Feq0T",
    url: "https://buy.stripe.com/dRm9AT9JVggNaPHfeQ3Nm1h",
  },
  yearly: {
    id: "plink_1TIKXpDT8EiLsMQhaQAid7Bb",
    url: "https://buy.stripe.com/aFa14n5tFaWt7Dv4Ac3Nm1i",
  },
};

interface DownloadTracker {
  count: number;
  date: string;
}

interface ProStatus {
  email: string;
  verified: boolean;
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
  if (isPro()) return true;
  return getDownloadCount() < FREE_LIMITS.maxDownloads;
}

export function isPro(): boolean {
  if (typeof window === "undefined") return false;
  try {
    const raw = localStorage.getItem(PRO_STORAGE_KEY);
    if (!raw) return false;
    const data: ProStatus = JSON.parse(raw);
    return data.verified === true && data.email.length > 0;
  } catch {
    return false;
  }
}

export function getProEmail(): string {
  if (typeof window === "undefined") return "";
  try {
    const raw = localStorage.getItem(PRO_STORAGE_KEY);
    if (!raw) return "";
    const data: ProStatus = JSON.parse(raw);
    return data.email;
  } catch {
    return "";
  }
}

export async function verifyPro(email: string): Promise<boolean> {
  const links = [STRIPE_LINKS.monthly.id, STRIPE_LINKS.yearly.id];
  for (const linkId of links) {
    try {
      const res = await fetch(
        `https://moltcorporation.com/api/v1/payments/check?stripe_payment_link_id=${linkId}&email=${encodeURIComponent(email)}`
      );
      if (res.ok) {
        const data = await res.json();
        if (data.has_access) {
          localStorage.setItem(
            PRO_STORAGE_KEY,
            JSON.stringify({ email, verified: true })
          );
          return true;
        }
      }
    } catch {
      // continue checking next link
    }
  }
  return false;
}

export function clearPro(): void {
  if (typeof window === "undefined") return;
  localStorage.removeItem(PRO_STORAGE_KEY);
}
