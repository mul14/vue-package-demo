import { defineComponent, toDisplayString } from 'vue';

var script = defineComponent({
    name: 'App',
    data: function () {
        return {
            title: 'Bar',
        };
    }
});

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return " Foo " + toDisplayString(_ctx.title)
}

script.render = render;
script.__file = "src/App.vue";

export { script as App };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlcyI6WyIuLi9zcmMvQXBwLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD03YmE1YmQ5MCZsYW5nLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgRm9vIHt7IHRpdGxlIH19XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0IGxhbmc9XCJ0c1wiPlxuaW1wb3J0IHsgZGVmaW5lQ29tcG9uZW50IH0gZnJvbSAndnVlJ1xuXG5pbnRlcmZhY2UgQ29tcG9uZW50RGF0YSB7XG4gIHRpdGxlOiBzdHJpbmdcbn1cblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29tcG9uZW50KHtcbiAgbmFtZTogJ0FwcCcsXG4gIGRhdGEoKTogQ29tcG9uZW50RGF0YSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHRpdGxlOiAnQmFyJyxcbiAgICB9XG4gIH1cbn0pXG48L3NjcmlwdD5cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Z0JBQ00sbUJBQUc7Ozs7Ozs7OyJ9
