export const boilerplateOptions = [
  { label: "Vue", value: "vue" },
  { label: "Preact", value: "preact" }
];

// TODO: Refactor to be more maintainable in the future
export const boilerplates = {
  vue: {
    dependencies: [
      "https://cdnjs.cloudflare.com/ajax/libs/vue/2.6.11/vue.min.js"
    ],
    fiddleCode: {
      htmlCode:
        '<div id="app">\n  <span class="count">Count {{ count }}</span>\n</div>',
      cssCode: ".count {\n color: blue; \n}",
      javascriptCode:
        'new Vue({\n  el: "#app",\n  data() {\n    return {\n      count: 0\n    }\n  }\n})'
    }
  },
  preact: {
    dependencies: [],
    fiddleCode: {
      htmlCode: '',
      cssCode: "body {\n color: white; \n}",
      javascriptCode:
        "import { html, Component, render } from 'https://unpkg.com/htm/preact/standalone.module.js';\n\nclass App extends Component {\n	addTodo() {\n  	const { todos = [] } = this.state;\n   	this.setState({ todos: todos.concat(`Item ${todos.length}`) });\n  }\n  render({ page }, { todos = [] }) {\n  	return html`\n    	<div class=\"app\">\n      	<${Header} name=\"To-Do's (${page})\" />\n        <ul>\n        	${todos.map(todo => html`\n          	<li>${todo}</li>\n          `)}\n        </ul>\n        <button onClick=${() => this.addTodo()}>Add Todo</button>\n        <${Footer}>footer content here<//>\n      </div>\n    `;  }}\n\nconst Header = ({ name }) => html`<h1>${name} List</h1>`\n\nconst Footer = props => html`<footer ...${props} />`\n\nrender(html`<${App} page=\"All\" />`, document.body); ",
      jsType: 'module'
    }
  }
};
