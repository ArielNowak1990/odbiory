
let zmienna = function () {
    alert("Strona w budowie ! za utrudnienia przepraszamy ! ");

};
zmienna();


function powieksza()
{ console.log("powieksza")
this.style.width = "340px"
this.style.height = "290px"
this.style.border = "5px solid green"
};

function zmniejsza()
{ console.log("zmniejsza")
this.style.width = "350px"
this.style.height = "300px"
this.style.border = "none"
};

function otwarcie()
{ console.log("otwiera")
    var url = this.getAttribute('src');
    window.open(url, "Image", 'width=600px,height=600px');
};



var galeria = document.getElementsByClassName("foto");
console.log(galeria);
for(i=0; i<galeria.length; i++) {


galeria[i].onmouseover = powieksza;
galeria[i].onmouseout = zmniejsza;
galeria[i].onclick = otwarcie;
}