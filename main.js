var app = new Vue({
    el: '#app',
    data: {
        message: 'Spam!',
        spamList: ['a', 'b', 'c'],
        show: false
    },
    methods: {
        handleClick: function(e) {
            app.show = !app.show
        }
    },
    created: function() {
        console.log('created')
    }
})
