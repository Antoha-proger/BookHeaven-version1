export async function getAllNews() {
  let articles = await fetch(
    'https://newsapi.org/v2/everything?q=%D0%BA%D0%BD%D0%B8%D0%B3%D0%B0%20OR%20%D0%BA%D0%BD%D0%B8%D0%B3%D0%B8&pageSize=20&searchIn=title&sortBy=publishedAt&language=ru&apiKey=8054b29d619f4696aaa3a0c77f34d4ab'
  )
  let formated_articles = await articles.json()
  let all_articles = [...formated_articles.articles]

  return all_articles.slice(0, 20)
}
