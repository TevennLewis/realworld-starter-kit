class ArticlesApi {
  private baseURL: string;
  constructor() {
    this.baseURL = "https://api.realworld.io/api";
  }

  async fetchArticles(query?: string) {
    let articles;
    try {
      const response = await fetch(`${this.baseURL}/articles${query ?? ""}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      const { articles } = data;
      console.log(data);
      return articles;
    } catch (error: unknown) {
      console.log(error);
    }
  }

  async fetchArticle(slug: string) {
    try {
      const response = await fetch(`${this.baseURL}/articles/${slug}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      const { article } = data;
      return article;
    } catch (error: unknown) {
      console.log(error);
    }
  }

  async fetchArticleComments(slug: string) {
    try {
      const response = await fetch(
        `${this.baseURL}/articles/${slug}/comments`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();
      const { comments } = data;
      return comments;
    } catch (error: unknown) {
      console.log(error);
    }
  }
}

export default ArticlesApi;
