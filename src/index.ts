import { renderSearchFormBlock } from "./search-form.js"
import { renderSearchStubBlock } from "./search-results.js"
import { renderUserBlock } from "./user.js"
import { renderToast } from "./lib.js"
import { 
    onSearch,
    UserData,
    setUserData,
    getUserData,
    setFavoritesAmount,
    getFavoritesAmount
} from "./myModule.js"

window.addEventListener("DOMContentLoaded", () => {
    setUserData({userName: "Wade Warren", avatarUrl: "img/avatar.png"});
    setFavoritesAmount(0);
    const data:UserData = getUserData();
    renderUserBlock(data.userName, data.avatarUrl, getFavoritesAmount());
    renderSearchFormBlock()
    renderSearchStubBlock()
    renderToast(
        {text: "Это пример уведомления. Используйте его при необходимости", type: "success"},
        {name: "Понял", handler: () => {console.log("Уведомление закрыто")}}
    )
    document.getElementById("search-form").addEventListener("submit", onSearch)
})