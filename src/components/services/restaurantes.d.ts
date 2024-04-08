interface Restaurante {
    id: number
    name: string
    ubication: string
    category: string
    rate: number
    visited: boolean
    time_creation: string
}

export async function getRestaurantes() : Promise<Restaurante[]>

export async function getRestaurante({ id: number }) : Promise<Restaurante>

export async function postRestaurante({
    name: string,
    ubication: string,
    category: string
}) : Promise<Restaurante>

export async function update({
    ud: number,
    name: string,
    ubication: string,
    category: string,
    rate: number,
    visited: boolean
}) : Promise<Restaurante>

export async function deleteRestaurante({
    id: number
}) : PromiseSettledResult<{
    message: string
}>