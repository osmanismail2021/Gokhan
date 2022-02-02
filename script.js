// sonuc = topla(10,15)

// console.log(sonuc)


// function topla (a, b) {
       
//     return a + b
// }

function yildiz(a="5") {
    alert("selam")
    for (let i=1; i<=a; i++) {
        for (j=1; j<=i; j++){
            document.write("*")
        }

        document.write("<hr>")
        
    }
} 

yildiz(10)

window.addEventListener("load", (e) =>{         //browser yuklendikten sonra gerceklesiyor. once yukaridaki fonksiyon gerceklesiyor sonra addevent listener ile window yuklendiginde
    alert("deneme")
    let btn = document.getElementById("btn")
    btn.addEventListener("click", (e) =>{
        let isim = document.getElementById("isim")
        if(isim.value == "")
                console.log("Bos biraktiniz")
        else
                console.log("kaydedildi")
        } )
})




