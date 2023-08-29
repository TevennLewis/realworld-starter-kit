<script setup lang="ts">
import { ref, onMounted } from "vue";
import ArticlesApi from "../api/articles.ts";
import TagsApi from "../api/tags.ts";
const articles = ref();
const tags = ref();

const articlesApi = new ArticlesApi();
const tagsApi = new TagsApi();

onMounted(async () => {
  articles.value = await articlesApi.fetchArticles();
  tags.value = await tagsApi.fetchTags();
  console.log(tags.value.tags);
});
</script>
<template>
  <div class="home-page">
    <div class="banner">
      <div class="container">
        <h1 class="logo-font">conduit</h1>
        <p>A place to share your knowledge.</p>
      </div>
    </div>

    <div class="container page">
      <div class="row">
        <div class="col-md-9">
          <div class="feed-toggle">
            <ul class="nav nav-pills outline-active">
              <li class="nav-item">
                <a class="nav-link" href="">Your Feed</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" href="">Global Feed</a>
              </li>
            </ul>
          </div>

          <div
            v-for="article in articles?.articles"
            :key="article"
            class="article-preview"
          >
            <div class="article-meta">
              <a href="/profile/eric-simons"
                ><img src="http://i.imgur.com/Qr71crq.jpg"
              /></a>

              <div class="info">
                <a href="/profile/eric-simons" class="author">{{
                  article.author.username
                }}</a>
                <span class="date">{{
                  new Date(article.createdAt).toDateString()
                }}</span>
              </div>

              <button class="btn btn-outline-primary btn-sm pull-xs-right">
                <i class="ion-heart"></i> {{ article.favoritesCount }}
              </button>
            </div>

            <a :href="`/article/${article.slug}`" class="preview-link">
              <h1>{{ article.title }}</h1>
              <p>{{ article.description }}</p>
              <span>Read more...</span>
              <ul class="tag-list">
                <li
                  v-for="tag in article.tagList"
                  :key="tag"
                  class="tag-default tag-pill tag-outline"
                >
                  {{ tag }}
                </li>
              </ul>
            </a>
          </div>

          <ul class="pagination">
            <li class="page-item active">
              <a class="page-link" href="">1</a>
            </li>
            <li class="page-item">
              <a class="page-link" href="">2</a>
            </li>
          </ul>
        </div>

        <div class="col-md-3">
          <div class="sidebar">
            <p>Popular Tags</p>

            <div class="tag-list">
              <a
                v-for="tag in tags?.tags"
                :key="tag"
                href=""
                class="tag-pill tag-default"
                >{{ tag }}</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
