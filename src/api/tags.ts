class TagsApi {
  private baseURL: string;
  constructor() {
    this.baseURL = "https://api.realworld.io/api";
  }

  async fetchTags() {
    try {
      const response = await fetch(`${this.baseURL}/tags`, {
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

export default TagsApi;
