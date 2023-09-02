console.log("francoview3 JS log")

const app = Vue.createApp({
    data: function () {
        return {
            students: [
                {name: "Franco"},
                {name: "Jane"},
                {name: "Peter"},
                {name: "Mary"}
            ],
            people: [
                {
                    name: 'Peter',
                    gender: 'M',
                    cash: 100
                },
                {
                    name: 'Mary',
                    gender: 'F',
                    cash: 10
                }
            ]
        };
    },

    methods: {
        clickAlert() {
           alert('call') 
        },
        decreaseMe(item) {
            item.cash--;
        }
    }

});

app.mount("#app")