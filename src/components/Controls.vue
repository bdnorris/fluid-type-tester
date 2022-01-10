<template>
	<div class="">
		<div class="controls__item">
			<label for="font-stack">Font</label>
			<input type="text" id="font-stack" v-model="_font" />
		</div>
		<div>
			<label for="fluid-size">Fluid Size</label>
			<input
				type="range"
				id="fluid-size"
				min="1"
				max="20"
				step="0.1"
				v-model="_fluidSize"
			/>
			{{ fluidSize }}vw
		</div>
		<div>
			<label for="min-size">Min Size</label>
			<input
				type="range"
				id="min-size"
				min="1"
				max="100"
				step="1"
				v-model="_minSize"
			/>
			{{ minSize }}px
		</div>
		<div>
			<label for="max-size">Max Size</label>
			<input
				type="range"
				id="max-size"
				min="1"
				max="100"
				step="1"
				v-model="_maxSize"
			/>
			{{ maxSize }}px
		</div>
	</div>
</template>

<script>
export default {
	name: 'Controls',
	data() {
    return {
      _fluidSize: this.fluidSize,
      _minSize: this.minSize,
      _maxSize: this.maxSize,
      _font: this.font,
    }
  },
	props: {
		fluidSize: {
			type: [Number, String],
			default: 2
		},
		minSize: {
			type: [Number, String],
			default: 16
		},
		maxSize: {
			type: [Number, String],
			default: 40
		},
		font: {
			type: String,
			default: 'sans-serif'
		}
	},
	watch: {
		_fluidSize(newValue) {
			this.$emit('fluidSizeChange', newValue)
		},
		_minSize(newValue) {
			this.$emit('minSizeChange', newValue)
		},
		_maxSize(newValue) {
			this.$emit('maxSizeChange', newValue)
		},
		_font(newValue) {
			this.$emit('fontChange', newValue)
		}
	},
}
</script>

<style>
</style>