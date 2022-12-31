export const weatherByCity = async (city: string, country: string) => {
    const response = await fetch(
        `${import.meta.env.VITE_API_ENDPOINT}?city=${city}&country=${country}`
    );
    return await response.json();
};
