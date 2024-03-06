export function formatPercentage(value: number | undefined) {
    value = !value ? 0 : value > 1 ? value / 100 : value;
    return new Intl.NumberFormat("en", {
        style: "percent",
        maximumFractionDigits: 0,
    }).format(value);
}

export function msToMinSec(ms: number | undefined): string {
    if (ms == undefined) {
        return "0:00";
    }
    var mins = Math.floor(ms / 60000);
    var secs = ((ms % 60000) / 1000).toFixed(0);
    return `${mins}:${Number(secs) < 10 ? 0 : ""}${secs}`;
}

export function isExpired(expiresAt: string | number): boolean {
    // Convert from ms to s
    if (expiresAt.toString().length == 13) {
        expiresAt = Number(expiresAt) / 1000;
    }
    const exp = new Date(expiresAt).valueOf();
    const now = new Date().valueOf() / 1000;
    return exp < now;
}
