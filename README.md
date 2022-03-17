# Forkify-App
[Live Link](https://forkify-jungff.netlify.app/)

### Project Introduction

Forkify is a recipe web app using the Forkify API to allow users to search, view, modify, bookmark and add recipes.

### Technologies used

1. HTML5
2. SCSS/CSS3
3. JavaScript

### External libraries and APIs:

* Parcel
* Sass
* [Forkify-API](https://forkify-api.herokuapp.com/v2)

### Ways to reproduce

* `npm i`
* `npm start`
* `npm run build`

### Features

* Query an ingredient to recieve a list of recipes containing that ingredient.

![Fun-1](README.assets/Fun-1.gif)

* Change the servings size to alter the needed ingreident count proportionally.

![fun-2](README.assets/fun-2.gif)

* Easily bookmark or unbookmard the selected recipe.

![fuc-3](README.assets/fuc-3.gif)

* Create your own recipes and store them as user recipes(use a special icon).

![func-4](README.assets/func-4.gif)

* LocalStorage keeps the data when users exit the app.

![fuc-5](/Users/wangxiaozhe/Desktop/Forkify-App/README.assets/fuc-5.gif)

### Project Architecture

![截屏2022-03-17 下午2.22.15](README.assets/截屏2022-03-17 下午2.22.15.png)

Built using the MVC Architecture. View class extends the rest of the components. Controller keeps bidirectional dataflow. Model makes http requests. 

![forkify-architecture-recipe-loading](README.assets/forkify-architecture-recipe-loading.png)

![forkify-flowchart-part-3](README.assets/forkify-flowchart-part-3.png)
