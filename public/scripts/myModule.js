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
    const localUserData = localStorage.getItem("user");
    if (localUserData) {
        const data = JSON.parse(localUserData);
        if (isUserData(data)) {
            return data;
        }
    }
    return undefined;
}
export function setFavoritesAmount(amount) {
    localStorage.setItem("favoritesAmount", JSON.stringify(amount));
}
export function getFavoritesAmount() {
    const localFavoritesAmount = localStorage.getItem("favoritesAmount");
    if (localFavoritesAmount) {
        const data = JSON.parse(localFavoritesAmount);
        if (typeof data === "number") {
            return data;
        }
    }
    return undefined;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXlNb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvbXlNb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBT0EsU0FBUyxNQUFNLENBQUMsSUFBb0I7SUFDaEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQTtBQUNyQixDQUFDO0FBRUQsTUFBTSxVQUFVLFFBQVEsQ0FBQyxLQUFZO0lBQ2pDLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQTtJQUN0QixNQUFNLFVBQVUsR0FBSSxRQUFRLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBc0IsQ0FBQyxLQUFLLENBQUE7SUFDbkYsTUFBTSxJQUFJLEdBQW1CO1FBQ3pCLElBQUksRUFBRyxRQUFRLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBc0IsQ0FBQyxLQUFLO1FBQ2pFLFdBQVcsRUFBRyxRQUFRLENBQUMsY0FBYyxDQUFDLGVBQWUsQ0FBc0IsQ0FBQyxLQUFLO1FBQ2pGLFlBQVksRUFBRyxRQUFRLENBQUMsY0FBYyxDQUFDLGdCQUFnQixDQUFzQixDQUFDLEtBQUs7UUFDbkYsUUFBUSxFQUFHLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7S0FDMUMsQ0FBQTtJQUNELE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQTtBQUNoQixDQUFDO0FBT0QsTUFBTSxVQUFVLFdBQVcsQ0FBQyxJQUFjO0lBQ3RDLFlBQVksQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztBQUN2RCxDQUFDO0FBRUQsU0FBUyxVQUFVLENBQUMsR0FBUTtJQUN4QixPQUFPLENBQ0gsT0FBTyxHQUFHLENBQUMsUUFBUSxLQUFLLFFBQVE7UUFDaEMsT0FBTyxHQUFHLENBQUMsU0FBUyxLQUFLLFFBQVEsQ0FDcEMsQ0FBQTtBQUNMLENBQUM7QUFFRCxNQUFNLFVBQVUsV0FBVztJQUN2QixNQUFNLGFBQWEsR0FBa0IsWUFBWSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNsRSxJQUFJLGFBQWEsRUFBRTtRQUNmLE1BQU0sSUFBSSxHQUFXLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDL0MsSUFBSSxVQUFVLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDbEIsT0FBTyxJQUFnQixDQUFDO1NBQzNCO0tBQ0o7SUFDRCxPQUFPLFNBQVMsQ0FBQztBQUNyQixDQUFDO0FBRUQsTUFBTSxVQUFVLGtCQUFrQixDQUFDLE1BQWM7SUFDN0MsWUFBWSxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7QUFDcEUsQ0FBQztBQUVELE1BQU0sVUFBVSxrQkFBa0I7SUFDOUIsTUFBTSxvQkFBb0IsR0FBa0IsWUFBWSxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0lBQ3BGLElBQUksb0JBQW9CLEVBQUU7UUFDdEIsTUFBTSxJQUFJLEdBQVcsSUFBSSxDQUFDLEtBQUssQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO1FBQ3RELElBQUksT0FBTyxJQUFJLEtBQUssUUFBUSxFQUFHO1lBQzNCLE9BQU8sSUFBYyxDQUFDO1NBQ3pCO0tBQ0o7SUFDRCxPQUFPLFNBQVMsQ0FBQztBQUNyQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW50ZXJmYWNlIFNlYXJjaEZvcm1EYXRhIHtcbiAgICBjaXR5OiBzdHJpbmcsXG4gICAgY2hlY2tJbkRhdGU6IHN0cmluZyxcbiAgICBjaGVja091dERhdGU6IHN0cmluZyxcbiAgICBtYXhQcmljZTogbnVtYmVyXG59XG5cbmZ1bmN0aW9uIHNlYXJjaChkYXRhOiBTZWFyY2hGb3JtRGF0YSk6IHZvaWQge1xuICAgIGNvbnNvbGUubG9nKGRhdGEpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBvblNlYXJjaChldmVudDogRXZlbnQpOiB2b2lkIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgY29uc3QgcHJpY2VWYWx1ZSA9IChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1heC1wcmljZVwiKSBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZVxuICAgIGNvbnN0IGRhdGE6IFNlYXJjaEZvcm1EYXRhID0ge1xuICAgICAgICBjaXR5OiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjaXR5XCIpIGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlLFxuICAgICAgICBjaGVja0luRGF0ZTogKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2hlY2staW4tZGF0ZVwiKSBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZSxcbiAgICAgICAgY2hlY2tPdXREYXRlOiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjaGVjay1vdXQtZGF0ZVwiKSBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZSxcbiAgICAgICAgbWF4UHJpY2U6ICBwcmljZVZhbHVlID8gK3ByaWNlVmFsdWUgOiAwXG4gICAgfVxuICAgIHNlYXJjaChkYXRhKVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFVzZXJEYXRhIHtcbiAgICB1c2VyTmFtZTogc3RyaW5nLFxuICAgIGF2YXRhclVybDogc3RyaW5nXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRVc2VyRGF0YShkYXRhOiBVc2VyRGF0YSkge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidXNlclwiLCBKU09OLnN0cmluZ2lmeShkYXRhKSk7XG59XG5cbmZ1bmN0aW9uIGlzVXNlckRhdGEob2JqOiBhbnkpOm9iaiBpcyBVc2VyRGF0YSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgdHlwZW9mIG9iai51c2VyTmFtZSA9PT0gXCJzdHJpbmdcIiAmJlxuICAgICAgICB0eXBlb2Ygb2JqLmF2YXRhclVybCA9PT0gXCJzdHJpbmdcIlxuICAgIClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFVzZXJEYXRhKCk6VXNlckRhdGEgfCB1bmRlZmluZWQge1xuICAgIGNvbnN0IGxvY2FsVXNlckRhdGE6IHN0cmluZyB8IG51bGwgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInVzZXJcIik7XG4gICAgaWYgKGxvY2FsVXNlckRhdGEpIHtcbiAgICAgICAgY29uc3QgZGF0YTp1bmtub3duID0gSlNPTi5wYXJzZShsb2NhbFVzZXJEYXRhKTtcbiAgICAgICAgaWYgKGlzVXNlckRhdGEoZGF0YSkpIHtcbiAgICAgICAgICAgIHJldHVybiBkYXRhIGFzIFVzZXJEYXRhO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB1bmRlZmluZWQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRGYXZvcml0ZXNBbW91bnQoYW1vdW50OiBudW1iZXIpIHtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImZhdm9yaXRlc0Ftb3VudFwiLCBKU09OLnN0cmluZ2lmeShhbW91bnQpKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEZhdm9yaXRlc0Ftb3VudCgpOm51bWJlciB8IHVuZGVmaW5lZCB7XG4gICAgY29uc3QgbG9jYWxGYXZvcml0ZXNBbW91bnQ6IHN0cmluZyB8IG51bGwgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImZhdm9yaXRlc0Ftb3VudFwiKTtcbiAgICBpZiAobG9jYWxGYXZvcml0ZXNBbW91bnQpIHtcbiAgICAgICAgY29uc3QgZGF0YTp1bmtub3duID0gSlNPTi5wYXJzZShsb2NhbEZhdm9yaXRlc0Ftb3VudCk7XG4gICAgICAgIGlmICh0eXBlb2YgZGF0YSA9PT0gXCJudW1iZXJcIiApIHtcbiAgICAgICAgICAgIHJldHVybiBkYXRhIGFzIG51bWJlcjtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdW5kZWZpbmVkO1xufSJdfQ==