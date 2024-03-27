# Aula prática - 26-03-2024

## O Cenário
Ao acessar uma API pública que fornece dados sobre os livros de Stephen King, você se conecta a uma vasta biblioteca digital. Esta API serve como um portal, permitindo que você consulte e recupere informações detalhadas das obras deste renomado autor. De sinopses a avaliações, passando por informações sobre publicações e edições, a API oferece uma maneira eficiente e direta de explorar o universo literário de Stephen King. Seja para fins de pesquisa, para descobrir seu próximo livro favorito ou simplesmente para mergulhar mais profundamente na obra deste mestre do suspense e do horror, essa API pública se torna uma ferramenta indispensável para fãs e estudiosos da literatura de King.

## Do desafio
1. Criar um projeto react para consumir dados da API (https://stephen-king-api.onrender.com/api/books)
2. Criar componentes do tipo master-detail para apresentar as informações

## Passos a serem executados
1. Criar a estrutura do projeto
```shell
npx create-react-app prime-react-book --template typescript
```
2. Entrar na pasta do projeto
```shell
cd prime-react-book
```
3. Instalar as dependências
```shell
npm install primereact primeicons axios styled-components
npm i --save-dev @types/styled-components
npm i react-router-dom
npm i --save-dev @types/react-router-dom
npm install --save react-router-dom@5.2.0
```
4. Criar os componentes necessários para a aplicação (master-detail)
```shell
npx generate-react-cli component BookList
npx generate-react-cli component BookDetail
#Opcional
npx generate-react-cli component Menu
```
4.1 Criar o component BookList
```shell
npx generate-react-cli component BookList
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
It looks like this is the first time that you're running generate-react-cli within this project.

Answer a few questions to customize generate-react-cli for your project needs (this will create a "generate-react-cli.json" config file on the root level of this project).
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

? Does this project use TypeScript? Yes
? Does this project use styled-components? No
? Does this project use CSS modules? Yes
? Does this project use a CSS Preprocessor? css
? What testing library does your project use? Testing Library
? Set the default path directory to where your components will be generated in? src/components
? Would you like to create a corresponding stylesheet file with each component you generate? Yes
? Would you like to create a corresponding test file with each component you generate? Yes
? Would you like to create a corresponding story with each component you generate? No
? Would you like to create a corresponding lazy file (a file that lazy-loads your component out of 
the box and enables code splitting: https://reactjs.org/docs/code-splitting.html#code-splitting) 
with each component you generate? Yes

The "generate-react-cli.json" config file has been successfully created on the root level of your project.

You can always go back and update it as needed.

Happy Hacking!


BookList.tsx was successfully created at src/components/BookList/BookList.tsx
BookList.module.css was successfully created at src/components/BookList/BookList.module.css
BookList.test.tsx was successfully created at src/components/BookList/BookList.test.tsx
BookList.lazy.tsx was successfully created at src/components/BookList/BookList.lazy.tsx

```

4.2  Criar o component BookDetail
```shell
npx generate-react-cli component BookDetail
BookDetail.tsx was successfully created at src/components/BookDetail/BookDetail.tsx
BookDetail.module.css was successfully created at src/components/BookDetail/BookDetail.module.css
BookDetail.test.tsx was successfully created at src/components/BookDetail/BookDetail.test.tsx
BookDetail.lazy.tsx was successfully created at src/components/BookDetail/BookDetail.lazy.tsx
```

4.3 Criar componente Menu
```shell
npx generate-react-cli component Menu
Menu.tsx was successfully created at src/components/Menu/Menu.tsx
Menu.module.css was successfully created at src/components/Menu/Menu.module.css
Menu.test.tsx was successfully created at src/components/Menu/Menu.test.tsx
Menu.lazy.tsx was successfully created at src/components/Menu/Menu.lazy.tsx
```

5.  Inserir as componentes dentro do componente principal (App.tsx)


6. Para cada componente criar inserir a lib para consumir dados da API(axios)