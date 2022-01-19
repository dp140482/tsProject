function search(data) {
    console.log(data);
}
export function onSearch(event) {
    event.preventDefault();
    const priceValue = document.getElementById("max-price").value;
    const data = {
        city: document.getElementById("city").value,
        checkInDate: document.getElementById("check-in-date").value,
        checkOutDate: document.getElementById("check-out-date").value,
        maxPrice: priceValue ? +priceValue : 0
    };
    search(data);
}
export function setUserData(data) {
    localStorage.setItem("user", JSON.stringify(data));
}
function isUserData(obj) {
    return (typeof obj.userName === "string" &&
        typeof obj.avatarUrl === "string");
}
export function getUserData() {
    const data = JSON.parse(localStorage.getItem("user"));
    if (isUserData(data)) {
        return data;
    }
    return undefined;
}
export function setFavoritesAmount(amount) {
    localStorage.setItem("favoritesAmount", JSON.stringify(amount));
}
export function getFavoritesAmount() {
    const data = JSON.parse(localStorage.getItem("favoritesAmount"));
    if (typeof data === "number") {
        return data;
    }
    return undefined;
}
