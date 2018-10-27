<template>
	<div class='scroll' ref='wrapper'>
		<slot></slot>
	</div>
</template>

<script>
	import BScroll from 'better-scroll'
	export default{
		name: 'scroll',
		props: {
			scrollY: {
				type:Boolean,
				default:false
			},
			scrollX: {
				type:Boolean,
				default:true
			},
			click: {
				type:Boolean,
				default:true
			},
			probeType: {
				type: Number,
				default: 0
			}
		},
		mounted () {
			let wrapper = this.$refs.wrapper
			this.scroll = new BScroll(wrapper,{
				click:this.click,
                probeType:this.probeType,
                scrollX: true
			})
			this.scroll.on('scroll',position => {
				this.$emit('scroll',position)
			})
		},
		methods: {
			scrollToElement (...args) {
				this.scroll && this.scroll.scrollToElement(...args)
			}
		}
	}
</script>

<style lang='scss'>
	
</style>

