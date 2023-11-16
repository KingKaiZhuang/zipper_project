<template>
  <div class="hello">
    <div class="wrapper">
      <svg>
        <text x="50%" y="50%" dy=".35em" text-anchor="middle">
          {{ msg }}
        </text>
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Russo+One&display=swap");

svg {
	font-family: "Russo One", sans-serif;
	width: 100%; height: 100%;
}
svg text {
	animation: stroke 5s infinite alternate;
	stroke-width: 2;
	stroke: #365FA0;
	font-size: 100px;
}
@keyframes stroke {
	0%   {
		fill: rgba(72,138,204,0); stroke: rgb(181, 209, 255);
		stroke-dashoffset: 25%; stroke-dasharray: 0 50%; stroke-width: 2;
	}
	70%  {fill: rgba(72,138,204,0); stroke: rgb(166, 200, 255); }
	80%  {fill: rgba(72,138,204,0); stroke: rgb(101, 160, 255); stroke-width: 3; }
	100% {
		fill: rgba(72,138,204,1); stroke: rgba(54,95,160,0);
		stroke-dashoffset: -25%; stroke-dasharray: 50% 0; stroke-width: 0;
	}
}

.wrapper {background-color: rgb(239, 255, 211)};
</style>
