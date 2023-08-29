<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import ArticlesApi from "../api/articles";

const route = useRoute();
const articlesApi = new ArticlesApi();
const routeSlug = ref();
const article = ref();

function getUrlString() {
  const parts = route.fullPath.split("/");
  routeSlug.value = parts.at(-1);
}

onMounted(async () => {
  getUrlString();
  article.value = await articlesApi.fetchArticle(routeSlug.value);
  console.log(article.value.article);
});
</script>
<template>
  <div v-if="article" class="article-page">
    <div class="banner">
      <div v-if="article" class="container">
        <h1>{{ article.article.title }}</h1>

        <div class="article-meta">
          <a href="/profile/eric-simons"
            ><img :src="article.article.author.image"
          /></a>
          <div class="info">
            <a href="/profile/eric-simons" class="author">{{
              article.article.author.username
            }}</a>
            <span class="date">{{
              new Date(article.article.createdAt).toDateString()
            }}</span>
          </div>
          <button class="btn btn-sm btn-outline-secondary">
            <i class="ion-plus-round"></i>
            &nbsp; Follow {{ article.article.author.username }}
          </button>
          &nbsp;&nbsp;
          <button class="btn btn-sm btn-outline-primary">
            <i class="ion-heart"></i>
            &nbsp; Favorite Post
            <span class="counter">({{ article.article.favoritesCount }})</span>
          </button>
          <button class="btn btn-sm btn-outline-secondary">
            <i class="ion-edit"></i> Edit Article
          </button>
          <button class="btn btn-sm btn-outline-danger">
            <i class="ion-trash-a"></i> Delete Article
          </button>
        </div>
      </div>
    </div>

    <div class="container page">
      <div class="row article-content">
        <div class="col-md-12">
          <h2 id="introducing-ionic">{{ article.article.description }}</h2>
          <p>{{ article.article.body }}</p>
          <ul class="tag-list">
            <li
              v-for="tag in article.article.tagList"
              :key="tag"
              class="tag-default tag-pill tag-outline"
            >
              {{ tag }}
            </li>
          </ul>
        </div>
      </div>

      <hr />

      <div class="article-actions">
        <div class="article-meta">
          <a href="profile.html"><img :src="article.article.author.image" /></a>
          <div class="info">
            <a href="" class="author">{{ article.article.author.username }}</a>
            <span class="date">{{
              new Date(article.article.createdAt).toDateString()
            }}</span>
          </div>

          <button class="btn btn-sm btn-outline-secondary">
            <i class="ion-plus-round"></i>
            &nbsp; Follow {{ article.article.author.username }}
          </button>
          &nbsp;
          <button class="btn btn-sm btn-outline-primary">
            <i class="ion-heart"></i>
            &nbsp; Favorite Article
            <span class="counter">({{ article.article.favoritesCount }})</span>
          </button>
          <button class="btn btn-sm btn-outline-secondary">
            <i class="ion-edit"></i> Edit Article
          </button>
          <button class="btn btn-sm btn-outline-danger">
            <i class="ion-trash-a"></i> Delete Article
          </button>
        </div>
      </div>

      <div class="row">
        <div class="col-xs-12 col-md-8 offset-md-2">
          <form class="card comment-form">
            <div class="card-block">
              <textarea
                class="form-control"
                placeholder="Write a comment..."
                rows="3"
              ></textarea>
            </div>
            <div class="card-footer">
              <img
                src="http://i.imgur.com/Qr71crq.jpg"
                class="comment-author-img"
              />
              <button class="btn btn-sm btn-primary">Post Comment</button>
            </div>
          </form>

          <div class="card">
            <div class="card-block">
              <p class="card-text">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
            </div>
            <div class="card-footer">
              <a href="/profile/author" class="comment-author">
                <img
                  src="http://i.imgur.com/Qr71crq.jpg"
                  class="comment-author-img"
                />
              </a>
              &nbsp;
              <a href="/profile/jacob-schmidt" class="comment-author"
                >Jacob Schmidt</a
              >
              <span class="date-posted">Dec 29th</span>
            </div>
          </div>

          <div class="card">
            <div class="card-block">
              <p class="card-text">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
            </div>
            <div class="card-footer">
              <a href="/profile/author" class="comment-author">
                <img
                  src="http://i.imgur.com/Qr71crq.jpg"
                  class="comment-author-img"
                />
              </a>
              &nbsp;
              <a href="/profile/jacob-schmidt" class="comment-author"
                >Jacob Schmidt</a
              >
              <span class="date-posted">Dec 29th</span>
              <span class="mod-options">
                <i class="ion-trash-a"></i>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
