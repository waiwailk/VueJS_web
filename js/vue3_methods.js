console.log("francoview3 JS log")

const app = Vue.createApp({
    data: function () {
        return {
            students: [
                {name: "Franco"},
                {name: "Jane"},
                {name: "Peter"},
                {name: "Mary"}
            ]
        };
    }     
});

app.mount("#app")