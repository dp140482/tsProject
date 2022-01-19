import { renderBlock } from "./lib.js"

export function renderUserBlock(
    userName?:unknown,
    avatarLink?:unknown,
    favoriteItemsAmount?:unknown
) {
    
    const user = userName ? userName : "Wade Warren"
    const favoritesCaption = favoriteItemsAmount ? favoriteItemsAmount : "ничего нет"
    const hasFavoriteItems = favoriteItemsAmount ? true : false

    renderBlock(
        "user-block",
        `
    <div class="header-container">
      <img class="avatar" src="${avatarLink ? avatarLink : "img/avatar.png"}" alt="${user}" />
      <div class="info">
          <p class="name">${user}</p>
          <p class="fav">
            <i class="heart-icon${hasFavoriteItems ? " active" : ""}"></i>${favoritesCaption}
          </p>
      </div>
    </div>
    `
    )
}
