console.log("francoview3 JS log")

const app = Vue.createApp({
    data: function () {
        return {
            text: 'Hello World',
            nickname: 'Woodhead',
            myname: 0,
            inputData: 'Default value input',
        };
    }     
});

app.mount("#app")