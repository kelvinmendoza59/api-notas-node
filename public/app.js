function cargarNotas() {
    fetch('/api/notas')
        .then(response => response.json())
        .then(notas => {
            const lista = document.getElementById('lista-notas');
            lista.innerHTML = '';

            notas.forEach(nota => {
                const div = document.createElement('div');
                div.className = 'nota';
                div.innerHTML = `
                    <h3>${nota.titulo}</h3>
                    <p>${nota.contenido}</p>
                    <small>${new Date(nota.fecha).toLocaleDateString()}</small>
                    <button class="btn-delete" onclick="eliminarNota(${nota.id})">Eliminar</button>
                `;
                lista.appendChild(div);
            });
        });
}

function agregarNota() {
    const titulo = document.getElementById('titulo').value;
    const contenido = document.getElementById('contenido').value;

    if (!titulo || !contenido) {
        alert('Por favor completa todos los campos');
        return;
    }

    fetch('/api/notas', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ titulo, contenido })
    })
    .then(response => response.json())
    .then(() => {
        document.getElementById('titulo').value = '';
        document.getElementById('contenido').value = '';
        cargarNotas();
    });
}

function eliminarNota(id) {
    if (!confirm('¿Estás seguro de eliminar esta nota?')) {
        return;
    }

    fetch(`/api/notas/${id}`, {
        method: 'DELETE'
    })
    .then(() => {
        cargarNotas();
    });
}

document.addEventListener('DOMContentLoaded', cargarNotas);
