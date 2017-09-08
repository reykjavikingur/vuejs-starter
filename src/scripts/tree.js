require('./components/greeting');
require('./components/compass');

console.log('starting tree example');

const template = `
<div class="app">

<h3>greeting</h3>
<ix-greeting></ix-greeting>
<ix-greeting recipient="Dave"></ix-greeting>
<ix-greeting v-bind:recipient="username"></ix-greeting>

<h3>compass</h3>
<ix-compass v-on:rotate="handleCompassRotate($event)"></ix-compass>
<span>output: {{compassOutput}}</span>

</div>
`;

window.app = new Vue({

    el: 'main',

    template: template,

    data: {
        username: '',
        compassOutput: ''
    },

    methods: {
        handleCompassRotate: function(event) {
            console.log('handle compass rotate', event);
            this.compassOutput = event;
        }
    }

});
