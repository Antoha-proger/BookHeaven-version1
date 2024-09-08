export async function getAllNews() {
  let articles = await fetch(
    'https://newsapi.org/v2/everything?q=%D0%BA%D0%BD%D0%B8%D0%B3%D0%B0%20OR%20%D0%BA%D0%BD%D0%B8%D0%B3%D0%B8&searchIn=title&sortBy=publishedAt&language=ru&apiKey=8054b29d619f4696aaa3a0c77f34d4ab'
  )
  let formated_articles = await articles.json()
  let all_articles = [...formated_articles.articles]

  return formatNewsArray(all_articles)
}

function formatNewsArray(arr) {
  let correct_array = arr.filter((item) => item.urlToImage !== null && item.author !== null)

  return correct_array.slice(0, 20)
}
