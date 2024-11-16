<template>
  <nav class="navbar navbar-expand-lg navbar-light transparent-navbar">
    <div class="container-fluid">
      <a class="navbar-brand" href="/">
        <img src="https://zubayrlatief.github.io/capestone-hosted-images/H (1)(2).jpg" alt="Logo" class="logo" />
      </a>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <a class="nav-link" href="/">SERVICES</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/">ABOUT</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/MapsPage">ROUTES</a>
          </li>
          <li class="nav-item"><a class="nav-link" href="/Register">
            <button class="button">Register</button>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style scoped>
.transparent-navbar {
  background-color: transparent !important; 
  position: fixed; 
  width: 100%;
  z-index: 1000; 
}

.logo {
  height: 40px; /* Adjust logo size */
}

.navbar-nav{
  display: flex;
  justify-content: center;
  align-items: center
}

.navbar-nav .nav-link {
  color: white; /* Text color for links */
  margin-left: 40px; /* Spacing between links */
  margin-right: 40px;
  transition: color 0.3s ease; /* Transition for hover effect */
}

.navbar-nav .nav-link:hover {
  color: #007bff; /* Change link color on hover */
}
.button{
  border-radius: 2rem;
  padding: 5px 15px;
}
</style>

