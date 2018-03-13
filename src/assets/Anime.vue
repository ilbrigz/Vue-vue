<template>
	<div id="cont">
		<div id="box"></div>
		<button <!-- @click='animation' -->>asdf</button>
	</div>
</template>
<script>

export default {


  data () {
    return {
    }
},

mounted() {
	// I am trying to log access the this.$animeJS here also
console.log($Vue.$animeJS);
}


}
  

</script>
<style scoped>
	#box {
		display: block;
		width: 100px;
		height: 100px;
		background-color: blue;
	}
</style>