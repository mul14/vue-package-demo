import { defineComponent, openBlock, createBlock, toDisplayString } from 'vue';

var script = defineComponent({
    name: "DemoComponent",
    data: function () {
        return {
            title: "Demo Component",
        };
    },
});

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createBlock("div", null, toDisplayString(_ctx.title), 1 /* TEXT */))
}

script.render = render;
script.__file = "src/Demo.vue";

export { script as Demo };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9uLmpzIiwic291cmNlcyI6WyIuLi9zcmMvRGVtby52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NzM4YWI5ZGMmbGFuZy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gIDxkaXY+e3sgdGl0bGUgfX08L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQgbGFuZz1cInRzXCI+XG5pbXBvcnQgeyBkZWZpbmVDb21wb25lbnQgfSBmcm9tIFwidnVlXCI7XG5cbmludGVyZmFjZSBDb21wb25lbnREYXRhIHtcbiAgdGl0bGU6IHN0cmluZztcbn1cblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29tcG9uZW50KHtcbiAgbmFtZTogXCJEZW1vQ29tcG9uZW50XCIsXG5cbiAgZGF0YSgpOiBDb21wb25lbnREYXRhIHtcbiAgICByZXR1cm4ge1xuICAgICAgdGl0bGU6IFwiRGVtbyBDb21wb25lbnRcIixcbiAgICB9O1xuICB9LFxufSk7XG48L3NjcmlwdD5cbiJdLCJuYW1lcyI6WyJfY3JlYXRlQmxvY2siXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozt1QkFDRUEseUNBQVE7Ozs7Ozs7OyJ9
