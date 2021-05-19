const url = "http://localhost:3000/cita";

export const consultarCitas = async () => {
    try {
        const respuesta = await fetch(url);
        const citas = await respuesta.json();
        return citas;
    } catch (error) {
        console.log(error);
    }
}

export const consultarCita = async (id) => {
    try {
        console.log(id);
        const respuesta = await fetch(`${url}/${id}`);
        const cita = await respuesta.json();
        return cita;
    } catch (error) {
        console.log(error);
    }
}

export const newCita = async (cita) => {
    try {
        const respuesta = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(cita),
            headers: {
                'Content-Type': 'application/json'
            }
        });
    } catch (error) {
        console.log(error);
    }
    location.reload();
}

export const eliminarCita = async (id) => {
    try {
        console.log(id);
        await fetch(`${url}/${id}`, {
            method: 'DELETE'
        });
    } catch (error) {
        console.log(error);
    }
    location.reload();
}

export const editarCita = async (id, cita) => {
    try {
        await fetch(`${url}/${id}`, {
            method: 'PUT',
            body: JSON.stringify(cita),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        console.log(cita);
    } catch (error) {
        console.log(error);
    }
    // location.reload();
}