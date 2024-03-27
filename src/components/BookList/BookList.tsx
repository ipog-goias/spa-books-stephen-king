import React, { useEffect, useState } from 'react';
import styles from './BookList.module.css';

import { Button } from 'primereact/button';
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';

import { BookService } from '../../service/BookService';


const BookList = () => {

  //entrada
  //variáveis que serão utilizadas no componente
  //books = variavel (lista dos books)
  //setbooks = operação/método de atribuição da variável books
   const [books, setBooks] = useState([]);

  //processamento
  //consumo do serviço (service ou API)
  useEffect(() => {
    //componente que conecta no serviço(api) para acessar as informações
    //response = response.data.data | onde response.data é do axios | somente .data é da API
    BookService.getBooks().then((response: any) => setBooks(response));
  }, []);

    //constante com o conteúdo do HEADER (cabeçalho da datable)
    const cabecalho = (
      <div className="flex flex-wrap align-items-center justify-content-between gap-2">
          <span className="text-xl text-900 font-bold">Livros de Stephen King</span>
          <Button icon="pi pi-refresh" rounded raised />
      </div>
      );

      //rodapé da datatable
   const rodape = `No total temos ${books ? books.length : 0} livros.`;

  //saida
  //retorno do template
  return (
    <div className="card">
          <DataTable value={books} header={cabecalho} footer={rodape} tableStyle={{ minWidth: '60rem' }}>
             <Column field="Title" header="Title"></Column>
          </DataTable>
    </div>
 );

};

export default BookList;
