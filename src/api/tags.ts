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
      const data = await response.json();
      const { tags } = data;
      return tags;
    } catch (error: unknown) {
      console.log(error);
    }
  }
}

export default TagsApi;
