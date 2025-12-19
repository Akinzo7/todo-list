# Todo List App

My second JavaScript project - a functional todo list with persistent storage!

## 🚀 [Live Demo](https://akinzo7.github.io/todo-list/)

[![Todo List Screenshot](https://i.postimg.cc/j5pZzYjQ/Screenshot-2025-12-19-234521.png)](https://postimg.cc/xJPv27Mc)

## 🎯 Project Purpose

**What**: A todo list application where you can add tasks with due dates, delete completed tasks, and your todos persist even after closing the browser.

**Why**: Building on my calculator project, I wanted to tackle more complex JavaScript concepts like arrays, objects, loops, and deepen my understanding of localStorage.

**Learning Goals**:
- Work with JavaScript arrays and objects
- Learn `forEach()` loops for iterating through data
- Master `JSON.parse()` and `JSON.stringify()` for localStorage
- Practice dynamic HTML rendering
- Build a more practical, real-world application

## 🛠️ Built With

- HTML5
- CSS3 (Grid, Gradient backgrounds, Responsive design)
- Vanilla JavaScript
- localStorage API

## ✨ Features

- ✅ Add todos with task names and due dates
- ✅ Delete individual todos
- ✅ Data persistence using localStorage
- ✅ Responsive design (mobile to desktop)
- ✅ Beautiful gradient UI with smooth animations
- ✅ Input validation and clearing after submission
- ✅ Dynamic copyright year in footer

## 💭 Development Journey

### Wins

This project felt much more comfortable compared to my first project! I'm now confident writing JavaScript and I'm aware of many JavaScript tools that make development easier. The biggest win was successfully implementing the `forEach()` loop logic - seeing it work properly and render everything correctly as I intended was incredibly satisfying.

### Challenges & Solutions

**Problem**: Setting up the `forEach()` loop syntax and logic  
**Solution**: The `forEach()` method itself wasn't hard to understand, but setting up the logic to properly and correctly render the functions was quite confusing. I encountered several bugs while writing the loop logic, but through trial and error, I was able to figure it out in the end. This debugging process taught me a lot about how loops interact with the DOM.

### Key Learnings

1. **forEach() loops**: This was my first time using `forEach()` in a personal project! While the concept made sense, implementing the logic correctly to render todos dynamically took some work. I learned how to iterate through arrays and execute functions for each item.

2. **Array methods**: I got hands-on experience with `push()` and `splice()` methods:
   - `push()` - adds new items to the end of an array (perfect for adding new todos)
   - `splice()` - removes items from a specific index in the array (used for deleting todos)

3. **JSON methods**: This project gave me the opportunity to really explore localStorage, and I feel much more confident using it now because I understand it better. Using `JSON.stringify()` to save data and `JSON.parse()` to retrieve it makes a lot more sense to me now.

4. **Template literals**: Using backticks (`) to create HTML strings dynamically made inserting variables into HTML much cleaner than string concatenation.

5. **localStorage - Round 2**: Yes! localStorage makes way more sense to me now after implementing it in this project. Understanding how to store complex data structures (arrays of objects) was a big breakthrough.

### Code I'm Proud Of

```javascript
const savedTodoList = localStorage.getItem('todoList');
const todoList = savedTodoList ? JSON.parse(savedTodoList) : [];
```

**Why this matters**: This single line checks if there's saved data and either loads it or starts with an empty array. The ternary operator makes the code clean and handles both scenarios elegantly. It's the foundation of the entire persistence feature.

```javascript
todoList.forEach((todoObject, index) => {
  // Creates HTML for each todo
});
```

**Why this matters**: Even though setting up the `forEach()` logic was challenging and I encountered bugs, getting it to work correctly was my proudest moment in this project. It taught me how to dynamically render content and handle array indices for deletions.

## 🔄 What's Next

- [ ] Add "Edit" functionality to modify existing todos
- [ ] Add checkboxes to mark todos as complete
- [ ] Add priority levels (High, Medium, Low)
- [ ] Add categories or tags for organizing todos
- [ ] Add search/filter functionality
- [ ] Add local notifications for due dates

## 🚦 Run Locally

```bash
# Clone the repository
git clone https://github.com/your-username/todo-list.git

# Navigate to folder
cd todo-list

# Open in browser
# Just double-click index.html or use Live Server in VS Code
```

## 📂 File Structure

```
todo-list/
├── index.html      # Todo list structure and input form
├── style.css       # Beautiful gradient styling
├── script.js       # Todo logic, arrays, and localStorage
└── README.md
```

## 📚 Resources That Helped Me

- [SuperSimpleDev JavaScript Tutorial](https://www.youtube.com/supersimpledev) - Continued learning
- [MDN Array Methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) - Understanding forEach, push, splice
- [JSON Methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON) - Working with JSON

## 🤔 Reflections

**Compared to my Calculator**: This project was quite easy since I'm now comfortable writing JavaScript and aware of a lot of JavaScript tools. My confidence has grown significantly!

**What Got Easier**: Understanding how to work with arrays and objects feels natural now. localStorage also clicked for me this time - I actually understand what's happening instead of just copying code.

**What's Still Challenging**: Setting up complex logic, especially with loops like `forEach()`, can still be tricky. Getting the syntax right and making sure everything renders correctly takes time and debugging.

**Next Steps**: I want to continue building projects that challenge me to use more JavaScript methods and APIs. Maybe exploring more array methods like `map()` and `filter()`, and eventually moving into working with external APIs.

---

**Project #2** | SuperSimpleDev Tutorial 