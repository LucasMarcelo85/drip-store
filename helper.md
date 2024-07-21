# Organização do projeto

## Iniciar

-   `git clone`

-   `git checkout -b <seu_nome>`

    -   Exemplo: `git checkout -b Isaac`

Esta será a sua branch em que você atuará, será nela que você fará os commits e git push

### Padronização dos commits

-   Ao dar o commit, busque ser objetivo no que está sendo feito junto de seu nome para a identificação na hora do merge na branch principal(main)

    -   Exemplo: `git commit -m "isaac: fiz o component do Header e sua estilização"`

### Padronização de nome de classes CSS

### Padronização de arquivos em geral

-   O nome do arquivo .css de cada component deve se chamar style.css

-   O nome do arquivo .jsx e da função dentro DEVE ser escrita de acordo com o seu component

    -   Exemplo:

    ```
        ├── src/
            ├── compoments/
                ├── Header
                    ├── Header.jsx
                    ├── Header.css
    ```

    ```javascript
    import "./Header.css";

    export function Header() {
        return (
            <header>
                <h1>Olá eu sou um título :o</h1>
            </header>
        );
    }
    ```

-   Buscar ao máximo especificar a class daquela tag que se deseja utilizar utilizando kebab-case

    -   Exemplo:

    ```css
    .header-container {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
    }
    ```

# Links úteis

### [GITHUB DO PROJETO](https://github.com/digitalcollegebr/projeto-digital-store)

### [FIGMA DO PROJETO](https://www.figma.com/design/cfb4F7ZXMFQmvmTn3PKI4z/DRIP-STORE---DIGITAL-COLLEGE?node-id=22-30)

### [DRIVE DO PROJETO](https://drive.google.com/drive/folders/1LgU0dnoA8pJ2FDqNrIDYkTTE3yUz-Xfq?usp=sharing)

### [TEMPLATE](https://e-commerce-digital-drip-store.vercel.app)
