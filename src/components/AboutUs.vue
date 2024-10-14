<template>
  <div class="Aboutus">
    <div class="container-1">
      <div class="container-2">
      <h1 class="heading-1">Our history</h1>
      <h2 class="heading-2">Dedicated to Consistancy and  </h2>
      <p2 class="paragraph">Our mission is to provide seamless, reliable, and innovative logistics solutions that empower businesses to thrive. By leveraging cutting-edge technology, efficient operations, and a customer-first approach, we aim to deliver exceptional value, ensuring timely and secure transportation of goods. Our commitment is to drive growth, sustainability, and success for our partners in an ever-evolving global marketplace.</p2>
    </div>
      <div id="card">
      <div class="wrapper">
        <div class="box-area">
          <div class="box">
            <img src="https://zubayrlatief.github.io/Images-/KC%20Auto.png" alt="" class="sr">
            <div class="overlay">
              <h3>KC AUTO</h3>
              <h5>Jan 2021 - Aug 2021</h5>
              <p>Started woeking in a mechanic shop
                in grade 9 to help my mother financially
              </p>
                </div>
          </div>
          <div class="box">
            <img src="https://zubayrlatief.github.io/Images-/thecarbath.png" alt="" class="sr">
            <div class="overlay">
              <h3>The Car Bath</h3>
              <h5>Apr 2022 - Dec 2022</h5>
              <p>Saw a gap in the market and opened my own Car Wash company
                 Learnt valuable sales and marketing skills</p>
                </div>
          </div>
          <div class="box">
            <h1 class="d-flex justify-content-center">TECHNOLOGY</h1>
            <img src="https://zubayrlatief.github.io/Images-/surf-emporium-crown.png" alt="" class="sr">
            <div class="overlay">
              <h3>Surf Emporium</h3>
              <h5>Apr 2023 - present</h5>
              <p>Surf coach to tourists from 
                all over the world making
                 valuable connections</p>
                </div>
          </div>
        </div>
      </div>
      </div>
    </div>
    <div class="button-bottom">
      <button class="button"><h1>veiw our maps</h1>
      </button>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.Aboutus{
background-color: rgb(14, 14, 27);
}

.heading-1 {
  position: absolute;
  padding: 80px;
  left: 10%;
  font-size: 4rem; /* Makes the text larger */
  color: yellow; /* Changes the text color to yellow */
  font-weight: bold; /* Makes the text bold for more emphasis */
}


.heading-2{
  position: absolute;
  padding: 80px;
  left: 45%;
  color: white;
}

.paragraph{
  position: absolute;
  padding: 150px;
  left: 35%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
}

.button-bottom{
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 60px;
}
.wrapper{
    padding-top: 280px;
}
#card{
    padding: 10px ;
}
.box-area{
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    grid-gap: 40px;
    margin-top: 50px;
}
.box {
	border-radius: 10px;
	position: relative;
	overflow: hidden;
	box-shadow: 5px 5px 15px rgba(0,0,0,0.9);
}
.box img{
    width: 100%;
    border-radius: 10px;
    display: block;
    transition: transform 0.5s;
}
.overlay {
	width: 100%;
	height: 0;
	background: linear-gradient(transparent,#1c1c1c 58%);
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

.overlay h5,p{
  color: rgb(133, 139, 145);
}

.box:hover img{
    transform: scale(1.1);
}
.box:hover .overlay{
    height: 100%;
}

</style>