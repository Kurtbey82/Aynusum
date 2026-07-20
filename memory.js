const memories = {

    hatay:{

        title:"❤️ Hatay",

        date:"11 Eylül 2025",

        text:"Buraya Hatay anınızı yazacağız."

    },

    mersin:{

        title:"❤️ Mersin",

        date:"",

        text:""

    },

    isparta:{

        title:"❤️ Isparta",

        date:"",

        text:""

    }

};

const params = new URLSearchParams(window.location.search);

const id = params.get("id");

const memory = memories[id];

if(memory){

    document.getElementById("title").textContent = memory.title;

    document.getElementById("date").textContent = memory.date;

    document.getElementById("text").textContent = memory.text;

}
