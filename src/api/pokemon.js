import {API_HOST} from "../utils/constants";

export async function getPokemonsApi(endpointUrl){
    try {
        const url = `${API_HOST}/pokemon`;
        const response = await fetch(endpointUrl || url);
        const results = await response.json();
        return results;
    }catch (e) {
        throw e;
    }
}

export async function getPokemonsDetailsByUrlApi(url){
    try {
        const response = await fetch(url);
        const results = await response.json();
        return results;
    } catch (e) {
        throw e;
    }
}

export async function getPokemonsDetailsApi(id){
    try{
        const url = `${API_HOST}/pokemon/${id}`;
        const response = await fetch(url);
        const results = await response.json();
        return results;
    }catch (e) {
        throw e;
    }
}