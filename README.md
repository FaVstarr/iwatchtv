
# IwatchTV

This is just a basic website using React(Javascript) and OMDB API that shows us the movies, their genres and release year, very simple and straight forward.


## Appendix

*Can work with any API so far you have your key.
*You can also add more functionalities to it based on your taste, you can use it to kick start future projects maybe a site like IMDB.


## API Reference

#### Get all items

```http
  GET
  http://www.omdbapi.com/?i=tt3896198&apikey=f6f7ba0
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. f6f7ba0 |

#### Get item

```http
  GET 
  http://www.omdbapi.com/?&apikey=${API_KEY}&s=${searchValue}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. searchValue |

#### ${searchValue}

Takes the value of text in the search bar and injects it into the API link search query


## Authors

- [@Favboi](https://www.github.com/Favboi)


## Run

To deploy this project run

```bash
  npm run start
```


## 🚀 About Me

>Hi 👋, I'm Favour AKA Favboi
A passionate Software Engineer from Nigeria
- 🔭 I’m currently working on **favour-s store**

- 🌱 I’m currently learning **React js**

- 🤝 I’m looking for help with **favour-s store**

- 📝 I regularly write articles on [https://dev.to/](https://dev.to/)

- 💬 Ask me about **HTML, CSS, Javascript**

- 📫 How to reach me **favourchamberlain32@gmail.com**

- ⚡ Fun fact **The Weird Kid Next Door || Tech Enthusiast**

## Installation

Install my-project with npm

```bash
  npm install iwatchtv
  cd iwatchtv
  npm install
```
    
