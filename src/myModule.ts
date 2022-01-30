interface SearchFormData {
    city: string,
    checkInDate: string,
    checkOutDate: string,
    maxPrice: number
}

function search(data: SearchFormData): void {
    console.log(data)
}

export function onSearch(event: Event): void {
    event.preventDefault()
    const priceValue = (document.getElementById("max-price") as HTMLInputElement).value
    const data: SearchFormData = {
        city: (document.getElementById("city") as HTMLInputElement).value,
        checkInDate: (document.getElementById("check-in-date") as HTMLInputElement).value,
        checkOutDate: (document.getElementById("check-out-date") as HTMLInputElement).value,
        maxPrice:  priceValue ? +priceValue : 0
    }
    search(data)
}

export interface UserData {
    userName: string,
    avatarUrl: string
}

export function setUserData(data: UserData) {
    localStorage.setItem("user", JSON.stringify(data));
}

function isUserData(obj: any):obj is UserData {
    return (
        typeof obj.userName === "string" &&
        typeof obj.avatarUrl === "string"
    )
}

export function getUserData():UserData | undefined {
    const localUserData: string | null = localStorage.getItem("user");
    if (localUserData) {
        const data:unknown = JSON.parse(localUserData);
        if (isUserData(data)) {
            return data as UserData;
        }
    }
    return undefined;
}

export function setFavoritesAmount(amount: number) {
    localStorage.setItem("favoritesAmount", JSON.stringify(amount));
}

export function getFavoritesAmount():number | undefined {
    const localFavoritesAmount: string | null = localStorage.getItem("favoritesAmount");
    if (localFavoritesAmount) {
        const data:unknown = JSON.parse(localFavoritesAmount);
        if (typeof data === "number" ) {
            return data as number;
        }
    }
    return undefined;
}