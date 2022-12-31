export const weatherByCity = async (city: string, country: string) => {
    const response = await fetch(
        `${import.meta.env.VITE_API_ENDPOINT}?city=${city}&country=${country}`
    );
    if (response.status === 400) {
        throw new Error("Not found");
    }
    return await response.json();
};
