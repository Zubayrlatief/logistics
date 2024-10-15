<template>
  <div class="Aboutus">
    <div class="container-1">
      <div class="container-2">
        <h1 class="heading-1">OUR HISTORY</h1>
        <h2 class="heading-2">Dedicated to Consistency</h2>
        <p class="paragraph">
          Our mission is to provide seamless, reliable, and innovative logistics solutions that empower businesses to thrive. By leveraging cutting-edge technology, efficient operations, and a customer-first approach, we aim to deliver exceptional value, ensuring timely and secure transportation of goods. Our commitment is to drive growth, sustainability, and success for our partners in an ever-evolving global marketplace.
        </p>
      </div>
      <div id="card">
        <div class="wrapper">
          <div class="box-area">
            <div class="box">
              <img src="https://zubayrlatief.github.io/Images-/Untitled%20design%20(4).png" alt="" class="sr">
              <div class="overlay">
                <h3>Automotive</h3>
                <p>Safe and reliable high-ticket automotive transportation</p>
              </div>
            </div>
            <div class="box">
              <img src="https://zubayrlatief.github.io/Images-/thecarbath.png" alt="" class="sr">
              <div class="overlay">
                <h3>The Car Bath</h3>
                <h5>Apr 2022 - Dec 2022</h5>
                <p>Saw a gap in the market and opened my own Car Wash company. Learnt valuable sales and marketing skills</p>
              </div>
            </div>
            <div class="box">
              <h1 class="d-flex justify-content-center">TECHNOLOGY</h1>
              <img src="https://zubayrlatief.github.io/Images-/surf-emporium-crown.png" alt="" class="sr">
              <div class="overlay">
                <h3>Surf Emporium</h3>
                <h5>Apr 2023 - present</h5>
                <p>Surf coach to tourists from all over the world making valuable connections</p>
              </div>
            </div>
            <div class="box">
              <img src="https://zubayrlatief.github.io/Images-/new-image-url.png" alt="" class="sr"> <!-- Replace with your image URL -->
              <div class="overlay">
                <h3>New Project</h3>
                <h5>Jan 2024 - present</h5>
                <p>Description of the new project goes here.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="button-bottom">
      <button @click="goToMapsPage" class="button"><h1>View Our Maps</h1></button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    goToMapsPage() {
      this.$router.push('/MapsPage');
    }
  }
}
</script>

<style scoped>
.Aboutus {
  background-color: rgb(14, 14, 27);
}

.heading-1 {
  position: absolute;
  padding: 80px;
  left: 10%;
  font-size: 3rem; /* Makes the text larger */
  color: yellow; /* Changes the text color to yellow */
  font-weight: bold; /* Makes the text bold for more emphasis */
}

.heading-2 {
  position: absolute;
  padding: 80px;
  left: 45%;
  color: white;
}

.paragraph {
  position: absolute;
  padding: 150px;
  left: 35%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
}

.button-bottom {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 60px;
}

.button {
  height: 60px;
  border-radius: 2rem;
  padding: 10px 20px;
  background: rgb(236, 236, 32);
  cursor: pointer;
  transition: background 0.6s ease;
}

.wrapper {
  padding-top: 280px;
}

#card {
  padding: 10px;
}

.box-area {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(5%, 1fr)); /* Adjusted minmax value */
    grid-gap: 10%; /* Reduced gap between boxes */
    margin-top: 50px;
}

.box {
    border-radius: 10px;
    position: relative;
    overflow: hidden;
    box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.9);
}

.box img {
    width: 90%; /* Adjusted to make images slightly smaller */
    border-radius: 10px;
    display: block;
    transition: transform 0.5s;
    margin: 0 auto; /* Center images */
}


.overlay {
  width: 100%;
  height: 0;
  background: linear-gradient(transparent, #1c1c1c 58%);
  border-radius: 10px;
  position: absolute;
  left: 0;
  bottom: 0;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 40px;
  text-align: center;
  font-size: 14px;
  transition: height 0.5s;
}

.overlay h3 {
  font-weight: 500;
  margin-bottom: 5px;
  margin-top: 80%;
  font-family: 'Bebas Neue', sans-serif;
  font-size: 30px;
  letter-spacing: 2px;
  color: aliceblue;
}

.overlay h5,
p {
  color: rgb(133, 139, 145);
}

.box:hover img {
  transform: scale(1.1);
}

.box:hover .overlay {
  height: 100%;
}

@media (max-width: 768px) {
  .heading-1 {
    font-size: 2.5rem;
    left: 5%;
  }

  .heading-2 {
    left: 40%;
  }

  .paragraph {
    left: 15%;
    padding: 50px;
    font-size: 0.9rem;
  }

  .button-bottom {
    padding: 30px;
  }

  .box-area {
    grid-gap: 20px;
  }
}

@media (max-width: 480px) {
  .heading-1 {
    font-size: 2rem;
    left: 0;
    text-align: center;
    padding: 20px;
  }

  .heading-2 {
    left: 0;
    text-align: center;
    padding: 20px;
  }

  .paragraph {
    left: 0;
    padding: 20px;
    font-size: 0.8rem;
  }

  .button {
    width: 100%;
    font-size: 1rem;
  }
}
</style>
