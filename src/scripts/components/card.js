const template = `
<div class="card">

    <button class="share" v-on:click="added = !added">{{added ? '-' : '+'}}</button>
    
    <slot name="summary"></slot>
    
    <hr/>
    
    <div class="card__detail" v-show="showingDetail">
        <slot name="detail"></slot>
    </div>
    
    <button class="detail" v-on:click="showingDetail = !showingDetail">{{showingDetail ? 'less' : 'more'}}</button>
    
</div>
`;

Vue.component('ix-card', {

    template: template,

    data: function () {
        return {
            showingDetail: false,
            added: false
        };
    }

});
