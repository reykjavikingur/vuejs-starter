const template = `

<div class="app">

    <h2>{{title}}</h2>

    <p v-bind:title="currentTime">
        {{message}}<span v-if="username">, {{username}}.</span>
    </p>
    
    <p>
        Name: <input type="text" v-model="username" />
    </p>
    
    <p>
        Project started? <input type="checkbox" v-model="projectStarted" />
    </p>
    
    <p v-show="projectStarted">
        <button v-on:click="previousPhase()">&laquo;</button>
        Phases:
        <button v-on:click="nextPhase()">&raquo;</button>
        <ul>
            <li class="choice" v-for="phase in phases"
                v-bind:class="{
                    'active': phase === currentPhase
                }"
                v-on:click="selectPhase(phase)"
            >{{phase}}</li>
        </ul>
    </p>
    
    <div v-show="currentPhase">
        <h2>Current Phase: {{currentPhase}}</h2>
        <span>{{phaseDescriptions[currentPhase]}}</span>
    </div>

</div>

`;

window.app = new Vue({
    el: 'main',

    template: template,

    data: function () {
        return {
            title: 'Example App',
            message: 'Welcome',
            currentTime: new Date(),
            username: '',
            projectStarted: false,
            phases: [
                'imagine', 'define', 'architect'
            ],
            currentPhase: '',
            phaseDescriptions: {
                imagine: 'User your imagination.',
                define: 'Define your terms. Be specific.',
                architect: 'Make it work.'
            }
        };
    },

    mounted: function () {
        console.log('app mounted', this.title);
    },

    methods: {

        selectPhase: function (phase) {
            this.currentPhase = phase;
        },

        nextPhase: function () {
            var i = this.phases.indexOf(this.currentPhase);
            i++;
            if (i >= this.phases.length) {
                i = 0;
            }
            this.currentPhase = this.phases[i];
        },

        previousPhase: function () {
            var i = this.phases.indexOf(this.currentPhase);
            i--;
            if (i < 0) {
                i = this.phases.length - 1;
            }
            this.currentPhase = this.phases[i];
        }
    }

});
