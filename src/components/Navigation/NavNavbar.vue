<template>
    <nav :class="{ 'navbar-mobile': isMobile }">
      <div class="navbar-container container">
        <div class="logo">{{ logoText }}</div>
        <div class="menu-button" v-if="isMobile" @click="toggleMenu">☰
        </div>
        <div class="hamburger-lines" v-if="isMobile" @click="toggleMenu">
          <span class="line"></span>
          <span class="line"></span>
          <span class="line"></span>
        </div>
        <ul class="menu-items" v-if="isMobile || menuVisible">
          <li v-for="(item, index) in items" :key="index">
            <a :href="item.link" @click="toggleMenu">{{ item.label }}</a>
          </li>
        </ul>
      </div>
    </nav>
  </template>
  
  <style scoped>
    :root {
      --primary-bg: #fff;
      --text-color: #000;
      --hover-bg: #000;
      --hover-text: #fff;
      --box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.1);
      --border-radius: 8px;
    }
  
    .navbar-container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      background-color: var(--primary-bg);
      box-shadow: var(--box-shadow);
      padding: 15px;
      border-radius: var(--border-radius);
    }
  
    .menu-items {
      display: flex;
      border: 2px solid var(--text-color);
      border-radius: var(--border-radius);
      overflow: hidden;
    }
  
    .menu-items li {
      list-style: none;
      margin-left: 20px;
      transition: background-color 0.3s, border-color 0.3s;
    }
  
    .menu-items a {
      text-decoration: none;
      color: var(--text-color);
      font-weight: bold;
      padding: 10px;
      border-radius: 5px;
      transition: background-color 0.3s, color 0.3s;
    }
  
    .menu-items a:hover {
      background-color: var(--hover-bg);
      color: var(--hover-text);
    }
  
    .hamburger-lines {
      display: none;
      cursor: pointer;
      z-index: 10;
    }
  
    .hamburger-lines span {
      display: block;
      height: 3px;
      width: 25px;
      background-color: var(--text-color);
      margin: 5px 0;
      border-radius: 3px;
      transition: transform 0.3s ease-in-out;
    }
  
    .menu-button {
      display: none;
      cursor: pointer;
    }
  
    @media (max-width: 768px) {
      .menu-button,
      .hamburger-lines {
        display: block;
      }
  
      .navbar-container {
        flex-direction: column;
        align-items: flex-start;
      }
  
      .menu-items {
        display: none;
        flex-direction: column;
        align-items: flex-start;
        width: 100%;
        margin-top: 10px;
      }
  
      .menu-items.show {
        display: flex;
      }
  
      .menu-items li {
        margin-left: 0;
        margin-bottom: 10px;
      }
  
      .menu-items a {
        width: 100%;
      }
  
      .hamburger-lines.active span:nth-child(1) {
        transform: rotate(45deg) translate(5px, 5px);
      }
  
      .hamburger-lines.active span:nth-child(2) {
        opacity: 0;
      }
  
      .hamburger-lines.active span:nth-child(3) {
        transform: rotate(-45deg) translate(5px, -5px);
      }
    }
  </style>
  
  <script>
  export default {
    props: {
      items: {
        type: Array,
        required: true,
      },
      logoText: {
        type: String,
        default: "Navbar",
      },
      isMobile: {
        type: Boolean,
        default: false,
      },
    },
    data() {
      return {
        menuVisible: false,
      };
    },
    methods: {
      toggleMenu() {
        this.menuVisible = !this.menuVisible;
        const hamburgerLines = document.querySelector(".hamburger-lines");
        hamburgerLines.classList.toggle("active", this.menuVisible);
      },
    },
  };
  </script>