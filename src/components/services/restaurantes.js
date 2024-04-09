export async function getRestaurantes(){
    return fetch(`${process.env.REACT_APP_API_URL}/restaurante/`, {
        method: 'GET'
    }).then(response => response.json())
}

export async function getRestaurante({ id }){
    return fetch(`${process.env.REACT_APP_API_URL}/restaurante/${id}`, {
        method: 'GET'
    }).then(response => response.json())
}

export async function postRestaurante({
    name,
    ubication,
    category,
}) {
    return fetch(`${process.env.REACT_APP_API_URL}/restaurante/post/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name,
            ubication,
            category,
        })
    }).then(response => response.json())
}

export async function update({
    id,
    name,
    ubication,
    category,
    rate,
}) {
    return fetch(`${process.env.REACT_APP_API_URL}/restaurante/update/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name,
            ubication,
            category,
            rate,
        })
    }).then(response => response.json())
}

export async function deleteRestaurante({ id }){
    return fetch(`${process.env.REACT_APP_API_URL}/restaurante/delete/${id}`, {
        method: 'DELETE'
    }).then(response => response.json())
}