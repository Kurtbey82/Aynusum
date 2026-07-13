const cities = document.querySelectorAll(".city");

cities.forEach(city => {
    city.addEventListener("click", () => {

        const page = city.dataset.page;

        if(page){
            window.location.href = page;
        }

    });
});
