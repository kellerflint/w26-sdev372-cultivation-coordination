export async function fetchPlots() {
    const response = await fetch('/api/plots');

    if (!response.ok) {
        const errorBody = await response.json().catch(() => null);
        throw errorBody ?? new Error('Failed to fetch plots');
    }

    const data = await response.json();
    return Array.isArray(data) ? data : [];
}
