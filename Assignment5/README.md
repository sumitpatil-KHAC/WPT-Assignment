# 📰 News Fetch Web App

A simple and interactive web application that fetches real-time news based on user input using a public News API. The app demonstrates modern JavaScript concepts such as **Fetch API**, **Async/Await**, **Error Handling**, and **DOM Manipulation**.

---

## 🚀 Features

* 🔍 Search news by topic (user input)
* 🌐 Fetch real-time news data from API
* ⚡ Uses **async/await** for handling asynchronous requests
* 🛡️ Error handling using **try...catch**
* 🖥️ Dynamic rendering of news articles using DOM manipulation
* 📱 Simple and responsive UI

---
## ⚠️ Error Handling

- Displays message when API fails
- Handles empty results
- Prevents UI crash using try-catch
---

## 🛠️ Tech Stack

* **HTML** – Structure of the webpage
* **CSS** – Styling and layout
* **JavaScript** – Functionality and API integration

---

## 🔌 API Used

* **News API (Free Public API)**
* Endpoint: `/v2/everything`
* Method: GET
* Fetches latest news articles based on keywords entered by the user

### Example Endpoint:

```
https://newsapi.org/v2/everything?q=${topic}&apiKey=9bf5dc52f6454e23aa40690e258cae5d
```

---

## ⚙️ Setup Instructions

1. **Clone the repository**

```
git clone https://github.com/your-username/news-fetch-app.git
```

2. **Navigate to project folder**

```
cd news-fetch-app
```

3. **Get API Key**

* Go to NewsAPI.org website
* Sign up and generate your API key

4. **Add API Key**

* Open your JavaScript file
* Replace:

```js
const API_KEY = "9bf5dc52f6454e23aa40690e258cae5d";
```

5. **Run the project**

* Open `index.html` in your browser

---

## 📂 Project Structure

```
news-fetch-app/
│
├── index.html
├── style.css
├── app.js
├── screenshot1.png
├── screenshot2.png
└── README.md
```

---

## 🧠 Concepts Used

* Fetch API
* Async/Await
* Promises
* Try-Catch Error Handling
* DOM Manipulation
* Event Handling

---

## 📸 How It Works

1. User enters a topic (e.g., "technology")
2. App sends request to News API
3. Receives JSON response
4. Parses and displays news articles dynamically

---
## ⏳ Loading State

- Displays a spinner while fetching data
- Improves user experience during API calls
---

## ⚠️ Limitations

* Free API has request limits
* Some articles may not have images or full content

---
## 📸 Screenshots

![App Screenshot](screenshot1.png)(screenshot2.png)
## 🔮 Future Improvements

* Add pagination
* Improve UI/UX
* Add category filters
* Deploy online (Netlify / Vercel)

---

## 🙌 Acknowledgment

* Thanks to NewsAPI.org for providing free access to news data

---

## 📬 Contact

If you have suggestions or feedback, feel free to reach out!


---

⭐ Don't forget to star the repo if you found it useful!
