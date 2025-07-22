<template>
  <form @submit.prevent="submitForm" method="post">
    <div class="p-4">
      <textarea
        v-model="body"
        class="p-4 w-full rounded-lg bg-gray-100 text-black border border-gray-300 dark:bg-gray-800 dark:text-white dark:border-gray-700"
        placeholder="What are you thinking about?"
      ></textarea>

      <label class="block mt-2 text-sm text-gray-700 dark:text-gray-300">
        <input type="checkbox" v-model="is_private" class="mr-2" />
        Private
      </label>

      <div id="preview" v-if="url">
        <img :src="url" class="w-[100px] mt-3 rounded-xl" />
      </div>
    </div>

    <div
      class="p-4 border-t border-gray-100 dark:border-gray-700 flex justify-between"
    >
      <label
        class="inline-block py-4 px-6 bg-gray-600 hover:bg-gray-700 text-white rounded-lg cursor-pointer"
      >
        <input type="file" ref="file" @change="onFileChange" class="hidden" />
        Attach image
      </label>

      <button
        class="inline-block py-4 px-6 bg-purple-600 hover:bg-purple-700 text-white rounded-lg"
      >
        Post
      </button>
    </div>
  </form>
</template>

<script>
import axios from "axios";

export default {
  props: {
    user: Object,
    posts: Array,
  },

  data() {
    return {
      body: "",
      is_private: false,
      url: null,
    };
  },

  methods: {
    submitForm() {
      const formData = new FormData();

      if (this.$refs.file.files[0]) {
        formData.append("image", this.$refs.file.files[0]);
      }

      formData.append("body", this.body);
      formData.append("is_private", this.is_private);

      axios
        .post("/api/posts/create/", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((response) => {
          this.posts.unshift(response.data);
          this.body = "";
          this.is_private = false;
          this.url = null;
          this.$refs.file.value = null;

          if (this.user) {
            this.user.posts_count += 1;
          }
        })
        .catch((error) => {
          console.log("error", error);
        });
    },
    toggleDark() {
      document.documentElement.classList.toggle("dark");
    },
    onFileChange(e) {
      const file = e.target.files[0];
      if (file && file.type.startsWith("image/")) {
        this.url = URL.createObjectURL(file);
      } else {
        this.url = null;
        this.$refs.file.value = null;
      }
    },
  },
};
</script>
