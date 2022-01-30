export function renderBlock(elementId, html) {
    const element = document.getElementById(elementId);
    if (element)
        element.innerHTML = html;
}
export function renderToast(message, action) {
    let messageText = "";
    if (message != null) {
        messageText = `
      <div id="info-block" class="info-block ${message.type}">
        <p>${message.text}</p>
        <button id="toast-main-action">${(action === null || action === void 0 ? void 0 : action.name) || "Закрыть"}</button>
      </div>
    `;
    }
    renderBlock("toast-block", messageText);
    const button = document.getElementById("toast-main-action");
    if (button != null) {
        button.onclick = function () {
            if (action != null && action.handler != null) {
                action.handler();
            }
            renderToast(null);
        };
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGliLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2xpYi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxNQUFNLFVBQVUsV0FBVyxDQUFFLFNBQWlCLEVBQUUsSUFBWTtJQUN4RCxNQUFNLE9BQU8sR0FBdUIsUUFBUSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsQ0FBQTtJQUN0RSxJQUFJLE9BQU87UUFBRSxPQUFPLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQTtBQUN6QyxDQUFDO0FBWUQsTUFBTSxVQUFVLFdBQVcsQ0FBRSxPQUE0QixFQUFFLE1BQWU7SUFDdEUsSUFBSSxXQUFXLEdBQUcsRUFBRSxDQUFBO0lBRXBCLElBQUksT0FBTyxJQUFJLElBQUksRUFBRTtRQUNqQixXQUFXLEdBQUc7K0NBQ3lCLE9BQU8sQ0FBQyxJQUFJO2FBQzlDLE9BQU8sQ0FBQyxJQUFJO3lDQUNnQixDQUFBLE1BQU0sYUFBTixNQUFNLHVCQUFOLE1BQU0sQ0FBRSxJQUFJLEtBQUksU0FBUzs7S0FFN0QsQ0FBQTtLQUNBO0lBRUQsV0FBVyxDQUNQLGFBQWEsRUFDYixXQUFXLENBQ2QsQ0FBQTtJQUVELE1BQU0sTUFBTSxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsbUJBQW1CLENBQUMsQ0FBQTtJQUMzRCxJQUFJLE1BQU0sSUFBSSxJQUFJLEVBQUU7UUFDaEIsTUFBTSxDQUFDLE9BQU8sR0FBRztZQUNiLElBQUksTUFBTSxJQUFJLElBQUksSUFBSSxNQUFNLENBQUMsT0FBTyxJQUFJLElBQUksRUFBRTtnQkFDMUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxDQUFBO2FBQ25CO1lBQ0QsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFBO1FBQ3JCLENBQUMsQ0FBQTtLQUNKO0FBQ0wsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiByZW5kZXJCbG9jayAoZWxlbWVudElkOiBzdHJpbmcsIGh0bWw6IHN0cmluZykge1xuICAgIGNvbnN0IGVsZW1lbnQ6IEhUTUxFbGVtZW50IHwgbnVsbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGVsZW1lbnRJZClcbiAgICBpZiAoZWxlbWVudCkgZWxlbWVudC5pbm5lckhUTUwgPSBodG1sXG59XG5cbmludGVyZmFjZSBUb2FzdE1lc3NhZ2Uge1xuICAgIHRleHQ6IHN0cmluZyxcbiAgICB0eXBlOiBzdHJpbmdcbn1cblxuaW50ZXJmYWNlIEFjdGlvbiB7XG4gICAgbmFtZTogc3RyaW5nLFxuICAgIGhhbmRsZXI/KCk6IHZvaWRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlclRvYXN0IChtZXNzYWdlOiBUb2FzdE1lc3NhZ2UgfCBudWxsLCBhY3Rpb24/OiBBY3Rpb24pIHtcbiAgICBsZXQgbWVzc2FnZVRleHQgPSBcIlwiXG4gIFxuICAgIGlmIChtZXNzYWdlICE9IG51bGwpIHtcbiAgICAgICAgbWVzc2FnZVRleHQgPSBgXG4gICAgICA8ZGl2IGlkPVwiaW5mby1ibG9ja1wiIGNsYXNzPVwiaW5mby1ibG9jayAke21lc3NhZ2UudHlwZX1cIj5cbiAgICAgICAgPHA+JHttZXNzYWdlLnRleHR9PC9wPlxuICAgICAgICA8YnV0dG9uIGlkPVwidG9hc3QtbWFpbi1hY3Rpb25cIj4ke2FjdGlvbj8ubmFtZSB8fCBcItCX0LDQutGA0YvRgtGMXCJ9PC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICBgXG4gICAgfVxuICBcbiAgICByZW5kZXJCbG9jayhcbiAgICAgICAgXCJ0b2FzdC1ibG9ja1wiLFxuICAgICAgICBtZXNzYWdlVGV4dFxuICAgIClcblxuICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG9hc3QtbWFpbi1hY3Rpb25cIilcbiAgICBpZiAoYnV0dG9uICE9IG51bGwpIHtcbiAgICAgICAgYnV0dG9uLm9uY2xpY2sgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGlmIChhY3Rpb24gIT0gbnVsbCAmJiBhY3Rpb24uaGFuZGxlciAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgYWN0aW9uLmhhbmRsZXIoKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVuZGVyVG9hc3QobnVsbClcbiAgICAgICAgfVxuICAgIH1cbn0iXX0=