import { renderBlock } from "./lib.js"

export function renderSearchFormBlock (checkInDate?:string, checkOutDate?:string) {
    let date = new Date();
    const jsonDate = (date:Date) => { 
        return date.toJSON().split("T")[0] 
    }
    const minDate = jsonDate(date)
    date.setMonth(date.getMonth() + 2)
    date.setDate(0)
    const maxDate = jsonDate(date)
    date = new Date();
    date.setDate(date.getDate() + 1)
    const currentCheckInDate = checkInDate ? checkInDate : jsonDate(date)
    date.setDate(date.getDate() + 2)
    const currentCheckOutDate = checkOutDate ? checkOutDate : jsonDate(date)

    renderBlock(
        "search-form-block",
        `
    <form>
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
    `
    )
}
