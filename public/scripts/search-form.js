import { renderBlock } from "./lib.js";
export function renderSearchFormBlock(checkInDate, checkOutDate) {
    let date = new Date();
    const jsonDate = (date) => {
        return date.toJSON().split("T")[0];
    };
    const minDate = jsonDate(date);
    date.setMonth(date.getMonth() + 2);
    date.setDate(0);
    const maxDate = jsonDate(date);
    date = new Date();
    date.setDate(date.getDate() + 1);
    const currentCheckInDate = checkInDate ? checkInDate : jsonDate(date);
    date.setDate(date.getDate() + 2);
    const currentCheckOutDate = checkOutDate ? checkOutDate : jsonDate(date);
    renderBlock("search-form-block", `
    <form id="search-form">
      <fieldset class="search-filedset">
        <div class="row">
          <div>
            <label for="city">Город</label>
            <input id="city" type="text" disabled value="Санкт-Петербург" />
            <input type="hidden" disabled value="59.9386,30.3141" />
          </div>
          <!--<div class="providers">
            <label><input type="checkbox" name="provider" value="homy" checked /> Homy</label>
            <label><input type="checkbox" name="provider" value="flat-rent" checked /> FlatRent</label>
          </div>--!>
        </div>
        <div class="row">
          <div>
            <label for="check-in-date">Дата заезда</label>
            <input id="check-in-date" type="date" value="${currentCheckInDate}" min="${minDate}" max="${maxDate}" name="checkin" />
          </div>
          <div>
            <label for="check-out-date">Дата выезда</label>
            <input id="check-out-date" type="date" value="${currentCheckOutDate}" min="${minDate}" max="${maxDate}" name="checkout" />
          </div>
          <div>
            <label for="max-price">Макс. цена суток</label>
            <input id="max-price" type="text" value="" name="price" class="max-price" />
          </div>
          <div>
            <div><button>Найти</button></div>
          </div>
        </div>
      </fieldset>
    </form>
    `);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWZvcm0uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvc2VhcmNoLWZvcm0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLFVBQVUsQ0FBQTtBQUV0QyxNQUFNLFVBQVUscUJBQXFCLENBQUUsV0FBbUIsRUFBRSxZQUFvQjtJQUM1RSxJQUFJLElBQUksR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDO0lBQ3RCLE1BQU0sUUFBUSxHQUFHLENBQUMsSUFBUyxFQUFFLEVBQUU7UUFDM0IsT0FBTyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO0lBQ3RDLENBQUMsQ0FBQTtJQUNELE1BQU0sT0FBTyxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQTtJQUM5QixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQTtJQUNsQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFBO0lBQ2YsTUFBTSxPQUFPLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFBO0lBQzlCLElBQUksR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDO0lBQ2xCLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFBO0lBQ2hDLE1BQU0sa0JBQWtCLEdBQUcsV0FBVyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQTtJQUNyRSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQTtJQUNoQyxNQUFNLG1CQUFtQixHQUFHLFlBQVksQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUE7SUFFeEUsV0FBVyxDQUNQLG1CQUFtQixFQUNuQjs7Ozs7Ozs7Ozs7Ozs7Ozs7MkRBaUJtRCxrQkFBa0IsVUFBVSxPQUFPLFVBQVUsT0FBTzs7Ozs0REFJbkQsbUJBQW1CLFVBQVUsT0FBTyxVQUFVLE9BQU87Ozs7Ozs7Ozs7OztLQVk1RyxDQUNBLENBQUE7QUFDTCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcmVuZGVyQmxvY2sgfSBmcm9tIFwiLi9saWIuanNcIlxuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyU2VhcmNoRm9ybUJsb2NrIChjaGVja0luRGF0ZT86c3RyaW5nLCBjaGVja091dERhdGU/OnN0cmluZykge1xuICAgIGxldCBkYXRlID0gbmV3IERhdGUoKTtcbiAgICBjb25zdCBqc29uRGF0ZSA9IChkYXRlOkRhdGUpID0+IHsgXG4gICAgICAgIHJldHVybiBkYXRlLnRvSlNPTigpLnNwbGl0KFwiVFwiKVswXSBcbiAgICB9XG4gICAgY29uc3QgbWluRGF0ZSA9IGpzb25EYXRlKGRhdGUpXG4gICAgZGF0ZS5zZXRNb250aChkYXRlLmdldE1vbnRoKCkgKyAyKVxuICAgIGRhdGUuc2V0RGF0ZSgwKVxuICAgIGNvbnN0IG1heERhdGUgPSBqc29uRGF0ZShkYXRlKVxuICAgIGRhdGUgPSBuZXcgRGF0ZSgpO1xuICAgIGRhdGUuc2V0RGF0ZShkYXRlLmdldERhdGUoKSArIDEpXG4gICAgY29uc3QgY3VycmVudENoZWNrSW5EYXRlID0gY2hlY2tJbkRhdGUgPyBjaGVja0luRGF0ZSA6IGpzb25EYXRlKGRhdGUpXG4gICAgZGF0ZS5zZXREYXRlKGRhdGUuZ2V0RGF0ZSgpICsgMilcbiAgICBjb25zdCBjdXJyZW50Q2hlY2tPdXREYXRlID0gY2hlY2tPdXREYXRlID8gY2hlY2tPdXREYXRlIDoganNvbkRhdGUoZGF0ZSlcblxuICAgIHJlbmRlckJsb2NrKFxuICAgICAgICBcInNlYXJjaC1mb3JtLWJsb2NrXCIsXG4gICAgICAgIGBcbiAgICA8Zm9ybSBpZD1cInNlYXJjaC1mb3JtXCI+XG4gICAgICA8ZmllbGRzZXQgY2xhc3M9XCJzZWFyY2gtZmlsZWRzZXRcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8bGFiZWwgZm9yPVwiY2l0eVwiPtCT0L7RgNC+0LQ8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0IGlkPVwiY2l0eVwiIHR5cGU9XCJ0ZXh0XCIgZGlzYWJsZWQgdmFsdWU9XCLQodCw0L3QutGCLdCf0LXRgtC10YDQsdGD0YDQs1wiIC8+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cImhpZGRlblwiIGRpc2FibGVkIHZhbHVlPVwiNTkuOTM4NiwzMC4zMTQxXCIgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8IS0tPGRpdiBjbGFzcz1cInByb3ZpZGVyc1wiPlxuICAgICAgICAgICAgPGxhYmVsPjxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBuYW1lPVwicHJvdmlkZXJcIiB2YWx1ZT1cImhvbXlcIiBjaGVja2VkIC8+IEhvbXk8L2xhYmVsPlxuICAgICAgICAgICAgPGxhYmVsPjxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBuYW1lPVwicHJvdmlkZXJcIiB2YWx1ZT1cImZsYXQtcmVudFwiIGNoZWNrZWQgLz4gRmxhdFJlbnQ8L2xhYmVsPlxuICAgICAgICAgIDwvZGl2Pi0tIT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cImNoZWNrLWluLWRhdGVcIj7QlNCw0YLQsCDQt9Cw0LXQt9C00LA8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0IGlkPVwiY2hlY2staW4tZGF0ZVwiIHR5cGU9XCJkYXRlXCIgdmFsdWU9XCIke2N1cnJlbnRDaGVja0luRGF0ZX1cIiBtaW49XCIke21pbkRhdGV9XCIgbWF4PVwiJHttYXhEYXRlfVwiIG5hbWU9XCJjaGVja2luXCIgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cImNoZWNrLW91dC1kYXRlXCI+0JTQsNGC0LAg0LLRi9C10LfQtNCwPC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dCBpZD1cImNoZWNrLW91dC1kYXRlXCIgdHlwZT1cImRhdGVcIiB2YWx1ZT1cIiR7Y3VycmVudENoZWNrT3V0RGF0ZX1cIiBtaW49XCIke21pbkRhdGV9XCIgbWF4PVwiJHttYXhEYXRlfVwiIG5hbWU9XCJjaGVja291dFwiIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJtYXgtcHJpY2VcIj7QnNCw0LrRgS4g0YbQtdC90LAg0YHRg9GC0L7QujwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXQgaWQ9XCJtYXgtcHJpY2VcIiB0eXBlPVwidGV4dFwiIHZhbHVlPVwiXCIgbmFtZT1cInByaWNlXCIgY2xhc3M9XCJtYXgtcHJpY2VcIiAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8ZGl2PjxidXR0b24+0J3QsNC50YLQuDwvYnV0dG9uPjwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZmllbGRzZXQ+XG4gICAgPC9mb3JtPlxuICAgIGBcbiAgICApXG59XG4iXX0=