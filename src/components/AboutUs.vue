<template>
<div id="about">
    <div class="container-1">
      <div class="container-2">
        <h1 class="heading-1">OUR MISSION</h1>
          <div class="paragraph-box">
            <h5 class="h5">
              PROVIDE SEAMLESS, RELIABLE, AND INNOVATIVE LOGISTICS SOLUTIONS THAT EMPOWER BUSINESSES TO THRIVE. <br/> LEVERAGING CUTTING-EDGE TECHNOLOGY, EFFICIENT OPERATIONS, AND A CUSTOMER-FIRST APPROACH, WE AIM TO DELIVER EXCEPTIONAL VALUE, ENSURING TIMELY AND SECURE TRANSPORTATION OF GOODS. <br/> OUR COMMITMENT IS TO DRIVE GROWTH, SUSTAINABILITY, AND SUCCESS FOR OUR PARTNERS IN AN EVER-EVOLVING GLOBAL MARKETPLACE.
            </h5>
          </div>
        </div>
      </div>
      <div id="card">
        <div class="wrapper">
          <div class="box-area">
            <div class="box">
              <img src="https://zubayrlatief.github.io/Images-/automotive.png" alt="" class="sr">
              <div class="overlay">
                <h3>Automotive</h3>
                <p>Safe and reliable high-ticket automotive transportation</p>
              </div>
            </div>
            <div class="box">
              <img src="https://zubayrlatief.github.io/Images-/shopingcart.png" alt="" class="sr">
              <div class="overlay">
                <h3>Commodities</h3>
                <p>Realiability on your B2B goods and produce </p>
              </div>
            </div>
            <div class="box">
              <img src="https://zubayrlatief.github.io/Images-/coal.png" alt="" class="sr">
              <div class="overlay">
                <h3>Materials</h3>
                <p>Nation wide reliable heavy duty freight</p>
              </div>
            </div>
            <div class="box">
              <img src="https://zubayrlatief.github.io/Images-/tech.png" alt="" class="sr"> <!-- Replace with your image URL -->
              <div class="overlay">
                <h3>Technology</h3>
                <p>Work class delecacy and saftey transportation </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="button-bottom">
      <button @click="goToMapsPage" class="button"><h1>VIEW OUR ROUTES</h1></button>
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
#about {
  background-color: rgb(14, 14, 27);
}

.heading-1 {
  display: flex;
  justify-content: center;
  padding: 80px;
  font-size: 3rem;
  color: yellow;
  font-weight: bold;
}
.text-container {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 60px; /* Space between h2 and paragraph */

}
.paragraph-box {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(14, 14, 24);;
  border-radius: 8px;
  color: white;
  font-family: "Jersey 25", sans-serif;
  font-weight: 400;
  font-style: normal;
  margin-left: 60px;
  margin-right: 60px;
}

.h5{ display: flex;
text-align: center;

}

.heading-2 {
  color: white;
  font-size: 1.8rem;
  padding: 5%;
}
.container-3{
  display: flex;
  justify-content: center;
}
.paragraph {
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
  background-color: rgb(14, 14, 27);
}

.button {
  height: 60px;
  border-radius: 1.5rem;
  padding: 8px 10px;
  background: rgb(236, 236, 32);
  cursor: pointer;
  transition: background 0.6s ease;
}

.wrapper {
  padding: 60px;
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
  /* Adjust heading and paragraph styles */
  .heading-1 {
    font-size: 2.5rem;
    text-align: center;
    padding: 40px;
  }

  .paragraph-box {
    margin-left: 20px;
    margin-right: 20px;
    padding: 20px;
  }

  .h5 {
    font-size: 0.9rem;
    line-height: 1.5;
  }

  /* Adjust button styles */
  .button {
    font-size: 1rem;
    padding: 8px 16px;
    height: 50px;
  }

  /* Ensure boxes display fully */
  .box-area {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    grid-gap: 15px;
  }

  .box img {
    width: 100%;
  }
}

@media (max-width: 480px) {
  /* Further reduce heading and paragraph size */
  .heading-1 {
    font-size: 2rem;
    text-align: center;
    padding-bottom: 20px;
  }

  .paragraph-box {
    padding-top: 20px;
  }

  .h5 {
    font-size: 1rem;
    line-height: 1.4;
  }

  /* Adjust button for smaller screens */
  .button {
    font-size: 0.9rem;
    padding: 6px 12px;
    height: 40px;
  }

  /* Ensure boxes fit in smaller screens */
  .box-area {
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
    grid-gap: 10px;
  }

  .box img {
    width: 100%;
  }
}

</style>
