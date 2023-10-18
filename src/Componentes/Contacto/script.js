
const formulario = document.querySelector('#formulario');

formulario.addEventListener('submit', function (e) {
    e.preventDefault();
    email();
}
)

function email() {
    const data = new FormData(formulario);
    console.log(data);
    fetch('sendmail.php', {
        method: 'POST',
        body: data
    })
        .then(res => res.json())
        .then(res => {
            console.log(res);

            
        })
        if ('exito') {
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Mensaje enviado',
            showConfirmButton: false,
            timer: 3000,
            footer : ' Nos comunicaremos a la brevedad'
            })
            formulario.reset();
        } else {
            Swal.fire({
                position: 'center',
                icon: 'error',
                title: 'Mensaje no enviado',
                showConfirmButton: false,
                timer: 2500
                })

        }

}
