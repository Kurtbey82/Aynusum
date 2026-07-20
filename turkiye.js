window.onload = () => {

    const object = document.getElementById("turkiyeMap");

    object.onload = () => {

        const svgDoc = object.contentDocument;

        console.log(svgDoc);

        console.log(svgDoc.getElementById("TR31"));
        console.log(svgDoc.getElementById("TR32"));
        console.log(svgDoc.getElementById("TR33"));

    };

};
