<template>
	<div class="loading-box">
		{{msg}}
	</div>
</template>
<script>
	export default{
		data(){
			return {
				msg:'Loading...^_^'
			}
		}
	}
</script>
<style scoped>
	.loading-box{
		color: red;
		font-size: 40px;
		font-family: 微软雅黑;
		text-shadow: 2px 2px 5px #000;
	}
</style>