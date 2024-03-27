import axios from "axios"

export const BookService = {

    /**
     * 
     * @returns Lista de Books
     */
    getBooks(): any{
         //componente que conecta no serviço(api) para acessar as informações
        return axios.get("/books")
        .then((response) => {
            console.log(response.data.data);
            return response.data.data
        });
    }
}