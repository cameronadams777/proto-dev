export const boilerplateOptions = [
  { label: "Vue", value: "vue" },
  { label: "React", value: "react" },
  { label: "React + JSX", value: "react+jsx" }
];

export const boilerplates = {
  vue: {
    dependencies: ["https://cdn.jsdelivr.net/npm/vue/dist/vue.js"],
    fiddleCode: {
      htmlCode:
        '<div id="app">\n  <span class="count">Count {{ count }}</span>\n</div>',
      cssCode: ".count {\n color: blue; \n}",
      javascriptCode:
        'new Vue({\n  el: "#app",\n  data() {\n    return {\n      count: 0\n    }\n  }\n})'
    }
  }
};
