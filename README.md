# 🤖 Sorteador de Números

Este é um projeto de **sorteador de números** desenvolvido como parte dos meus estudos na **Alura**.  
A aplicação web permite ao usuário definir um intervalo numérico (mínimo e máximo) e a quantidade de números a serem sorteados, retornando os resultados **sem repetição**.

> 💡 Este projeto foi fundamental para praticar lógica de programação, manipulação do DOM e conceitos essenciais de JavaScript.

📌 **Status:** Projeto concluído — v1.0

---

## 📸 Screenshot

![Prévia do projeto](img/image.png)

🌐 **Acesse o projeto online:** [sorteador-de-numeros-nine-taupe.vercel.app](https://sorteador-de-numeros-nine-taupe.vercel.app)
---

## ✨ Funcionalidades Principais

- **Definir Intervalo:** Permite ao usuário inserir um número mínimo e máximo para o sorteio.  
- **Definir Quantidade:** Define quantos números serão sorteados dentro do intervalo.  
- **Garantia de Não Repetição:** Nenhum número é sorteado mais de uma vez.  
- **Validação de Entradas:** O sistema valida os dados antes do sorteio, garantindo que:
  - Os campos não estejam vazios.  
  - O número mínimo não seja maior que o máximo.  
  - A quantidade não seja maior ou igual ao total de números disponíveis no intervalo.  
- **Botão Reiniciar:** Limpa os campos, reseta o resultado e alterna o estado do botão entre habilitado e desabilitado.

---

## 🎯 O que Aprendi com Este Projeto

Durante o desenvolvimento, solidifiquei os seguintes conceitos:

### 🧩 Manipulação do DOM
- Leitura de valores de campos de entrada com `document.getElementById().value`.  
- Conversão de texto para número com `parseInt`.  
- Exibição dinâmica de resultados usando `.innerHTML`.

### ⚙️ Lógica de Programação em JavaScript
- Criação de **funções modulares e reutilizáveis** (`obterValor`, `numAleat`, etc.).  
- Implementação de **validações** com estruturas condicionais (`if`, `else`, `isNaN`).  
- Uso de **loops `for`** para repetição controlada.  
- Uso de **loop `while`** para garantir exclusividade dos números sorteados (`sorteados.includes()`).  

### 🎨 Integração com CSS
- Manipulação dinâmica de classes com `.classList.add()` e `.classList.remove()`.  
- Alteração do estado visual dos botões e elementos da interface.

---

## 🛠️ Tecnologias Utilizadas

- **HTML5** – Estrutura semântica da página  
- **CSS3** – Estilização e controle de layout  
- **JavaScript (ES6+)** – Lógica, validações e manipulação do DOM

---

## 🚀 Como Executar o Projeto

Este projeto é composto apenas por arquivos **front-end** (HTML, CSS e JavaScript).

### 🔧 Passos:
1. Clone este repositório:
   ```bash
   git clone https://github.com/WeslleyLafrataSampaio/Sorteador_de_Numeros
2. Abra o arquivo index.html em qualquer navegador web.

---

🧑‍💻 Autor
Weslley Lafrata Sampaio

GitHub: github.com/WeslleyLafrataSampaio

LinkedIn: linkedin.com/in/weslley-lafrata-sampaio-a3a35a184

⭐ Se este projeto te ajudou ou inspirou, não esqueça de deixar uma estrela no repositório!