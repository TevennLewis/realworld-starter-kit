class ArticlesApi {
  private baseURL: string;
  constructor() {
    this.baseURL = "https://api.realworld.io/api";
  }

  async fetchArticles() {
    try {
      const response = await fetch(`${this.baseURL}/articles`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      return response.json();
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
      return response.json();
    } catch (error: unknown) {
      console.log(error);
    }
  }
}

export default ArticlesApi;
