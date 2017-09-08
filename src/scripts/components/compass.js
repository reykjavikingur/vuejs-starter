const template = `
<div class="compass"
v-on:mousedown="start($event)"
v-on:mousemove="keepGoing($event)"
v-on:mouseup="stop($event)"
v-on:mouseleave="stop($event)"
>
<span class="label" 
:style="{
    transform: 'rotate(' + angle + 'rad)'
}"
>compass</span>
</div>
`;

Vue.component('ix-compass', {

    template: template,

    data: function () {
        return {
            startPosition: null,
            angle: 0
        };
    },

    methods: {
        start: function (event) {
            let rect = event.target.getBoundingClientRect();
            let x = rect.left + rect.width / 2;
            let y = rect.top + rect.height / 2;
            this.startPosition = [x, y];
        },
        keepGoing: function (event) {
            if (this.startPosition) {
                this.updateAngle(event);
            }
        },
        stop: function (event) {
            if (this.startPosition) {
                this.updateAngle(event);
                this.$emit('rotate', this.angle);
                this.startPosition = null;
            }
        },
        updateAngle: function (event) {
            let dx = event.clientX - this.startPosition[0];
            let dy = event.clientY - this.startPosition[1];
            this.angle = Math.atan2(dy, dx);
        }
    }

});
