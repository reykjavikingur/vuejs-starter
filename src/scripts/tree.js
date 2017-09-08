require('./components/greeting');

console.log('starting tree example');

const template = `
<div class="app">

<h3>greeting</h3>
<ix-greeting></ix-greeting>
<ix-greeting recipient="Dave"></ix-greeting>
<ix-greeting v-bind:recipient="username"></ix-greeting>

</div>
`;

window.app = new Vue({

    el: 'main',

    template: template,

    data: {
        username: ''
    }

});
