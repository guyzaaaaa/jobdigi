<template>
    <div class="mt-40">
      <div v-if="selectedPost">
        <h1>{{ selectedPost.Company }}</h1>
        <p>Salary: {{ selectedPost.salary }}</p>
        <p>Description: {{ selectedPost.Description }}</p>
      </div>
      <div v-else>
        <p>No post selected</p>
      </div>
    </div>
</template>

  
  <script setup>
 import { ref, computed, watchEffect } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const selectedPost = ref(null);
const route = useRoute();
const router = useRouter();

// Get postId from route parameters
const postId = computed(() => route.params.postId);

// Load post details based on postId
async function loadPostDetails(postId) {
  // Dummy implementation to load post details based on postId
  try {
    const response = await fetch(`${import.meta.env.VITE_API_HR}/post/${postId}`);
    if (!response.ok) {
      throw new Error('Failed to fetch post details');
    }
    const postData = await response.json();
    selectedPost.value = postData.data;
  } catch (error) {
    console.error('Error fetching post details:', error.message);
  }
}

// Load post details when postId changes
watchEffect(() => {
  loadPostDetails(postId.value);
});

// Function to navigate to post details
function openDetails(post) {
  // Navigate to the details page with the post ID as a parameter
  router.push({ name: 'compajop', params: { postId: post._id } });
}


  </script>
  