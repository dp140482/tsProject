import { renderBlock } from "./lib.js";
export function renderUserBlock(userName, avatarLink, favoriteItemsAmount) {
    const user = userName ? userName : "Wade Warren";
    const favoritesCaption = favoriteItemsAmount ? favoriteItemsAmount : "ничего нет";
    const hasFavoriteItems = favoriteItemsAmount ? true : false;
    renderBlock("user-block", `
    <div class="header-container">
      <img class="avatar" src="${avatarLink ? avatarLink : "img/avatar.png"}" alt="${user}" />
      <div class="info">
          <p class="name">${user}</p>
          <p class="fav">
            <i class="heart-icon${hasFavoriteItems ? " active" : ""}"></i>${favoritesCaption}
          </p>
      </div>
    </div>
    `);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91c2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxVQUFVLENBQUE7QUFFdEMsTUFBTSxVQUFVLGVBQWUsQ0FDM0IsUUFBaUIsRUFDakIsVUFBbUIsRUFDbkIsbUJBQTRCO0lBRzVCLE1BQU0sSUFBSSxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUE7SUFDaEQsTUFBTSxnQkFBZ0IsR0FBRyxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQTtJQUNqRixNQUFNLGdCQUFnQixHQUFHLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQTtJQUUzRCxXQUFXLENBQ1AsWUFBWSxFQUNaOztpQ0FFeUIsVUFBVSxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLGdCQUFnQixVQUFVLElBQUk7OzRCQUU3RCxJQUFJOztrQ0FFRSxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFFLFNBQVMsZ0JBQWdCOzs7O0tBSXZGLENBQ0EsQ0FBQTtBQUNMLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZW5kZXJCbG9jayB9IGZyb20gXCIuL2xpYi5qc1wiXG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJVc2VyQmxvY2soXG4gICAgdXNlck5hbWU/OnVua25vd24sXG4gICAgYXZhdGFyTGluaz86dW5rbm93bixcbiAgICBmYXZvcml0ZUl0ZW1zQW1vdW50Pzp1bmtub3duXG4pIHtcbiAgICBcbiAgICBjb25zdCB1c2VyID0gdXNlck5hbWUgPyB1c2VyTmFtZSA6IFwiV2FkZSBXYXJyZW5cIlxuICAgIGNvbnN0IGZhdm9yaXRlc0NhcHRpb24gPSBmYXZvcml0ZUl0ZW1zQW1vdW50ID8gZmF2b3JpdGVJdGVtc0Ftb3VudCA6IFwi0L3QuNGH0LXQs9C+INC90LXRglwiXG4gICAgY29uc3QgaGFzRmF2b3JpdGVJdGVtcyA9IGZhdm9yaXRlSXRlbXNBbW91bnQgPyB0cnVlIDogZmFsc2VcblxuICAgIHJlbmRlckJsb2NrKFxuICAgICAgICBcInVzZXItYmxvY2tcIixcbiAgICAgICAgYFxuICAgIDxkaXYgY2xhc3M9XCJoZWFkZXItY29udGFpbmVyXCI+XG4gICAgICA8aW1nIGNsYXNzPVwiYXZhdGFyXCIgc3JjPVwiJHthdmF0YXJMaW5rID8gYXZhdGFyTGluayA6IFwiaW1nL2F2YXRhci5wbmdcIn1cIiBhbHQ9XCIke3VzZXJ9XCIgLz5cbiAgICAgIDxkaXYgY2xhc3M9XCJpbmZvXCI+XG4gICAgICAgICAgPHAgY2xhc3M9XCJuYW1lXCI+JHt1c2VyfTwvcD5cbiAgICAgICAgICA8cCBjbGFzcz1cImZhdlwiPlxuICAgICAgICAgICAgPGkgY2xhc3M9XCJoZWFydC1pY29uJHtoYXNGYXZvcml0ZUl0ZW1zID8gXCIgYWN0aXZlXCIgOiBcIlwifVwiPjwvaT4ke2Zhdm9yaXRlc0NhcHRpb259XG4gICAgICAgICAgPC9wPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgYFxuICAgIClcbn1cbiJdfQ==