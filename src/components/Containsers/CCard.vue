<template>
  <div>
    <div class="card">
      <img :src="src" alt="Profile Image" class="card-img" />
      <div class="card-body">
        <h3 class="card-title">{{ name }}</h3>
        <p class="card-text">{{ description }}</p>
        <button class="card-button">Action</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
      default:"Bakhdaulet Baktygaliev"
    },
    description: {
      type: String,
      required: true,
      default:"The name Bakdaulet is of Kazakh origin and is commonly given to boys. In Kazakh,  Therefore, Bakdaulet can be interpreted to mean "
    },
    src: {
  type: String,
  required: true,
  default: '@/assets/baxa.jpg',
},
  },
};
</script>

<style scoped>
body {
  background-color: #f5f5f5;
}

.card {
  width: 300px;
  margin: 0 auto;
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: box-shadow 0.3s ease;
}

.card:hover {
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
}

.card-img {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 20px;
}

.card-body {
  width: 100%;
  padding: 20px;
  text-align: center;
}

.card-title {
  margin-bottom: 10px;
  color: #333;
}

.card-text {
  margin-bottom: 20px;
  color: #555;
}

.card-button {
  width: 100%;
  padding: 10px;
  background-color: #333;
  color: white;
  border: 2px solid #333;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease;
}

.card-button:hover {
  background-color: #fff;
  color: #333;
  border-color: #333;
}
</style>