const imgbox = document.querySelector(".imgbox")
const boxeas = document.getElementsByClassName("box1");



imgbox.addEventListener('dragstart', (e) => {

    console.log("started");
    e.target.className += ' hold';


    setTimeout(() => {
        e.target.className = 'hide'

    }, 0);


})



imgbox.addEventListener('dragend', (e) => {

    console.log("end");

    e.target.className = 'imgbox';


})



for (const box1 of boxeas) {


    box1.addEventListener('dragover', (e) => {


        e.preventDefault();



    })
    box1.addEventListener('dragenter', () => {



    })
    box1.addEventListener('dragleave', () => {



    })

    box1.addEventListener('drop', (e) => {

        e.target.append(imgbox);

    })

}

