document.addEventListener("DOMContentLoaded", () => {
    const $boton = document.querySelector("#btnCrearPdf");
    $boton.addEventListener("click", () => {
        const $elementoParaConvertir = document.body; 
        html2pdf()
            .set({
                margin: 1,
                filename: 'Portafolio.pdf',
                image: {
                    type: 'jpeg',
                    quality: 0.98
                },
                html2canvas: {
                    scale: 3, 
                    letterRendering: true,
                },
                jsPDF: {
                    unit: "in",
                    format: "a3",
                    orientation: 'landscape' 
                }
            })
            .from($elementoParaConvertir)
            .save()
            .catch(err => console.log(err))
            .finally()
            .then(()=> {
                console.log("Guardado!")
            })
    });
});

