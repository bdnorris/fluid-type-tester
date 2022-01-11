<template>
	<div class="">
		<div class="controls__item">
			<label for="font-stack">Font</label>
			<input type="text" id="font-stack" v-model="_font" />
		</div>
		<div class="controls__item">
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
		<div class="controls__item">
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
		<div class="controls__item">
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
		<div v-if="lineHeight" class="controls__item">
			<label for="paragraph-line-height">Line Height</label>
			<input
				type="range"
				id="paragraph-line-height"
				v-model="_lineHeight"
				min="1"
				max="3"
				step="0.01"
			/>
			{{ lineHeight }}
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
			_lineHeight: this.lineHeight,
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
		},
		lineHeight: {
			type: [Number, String],
			default: ''
		},
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
		},
		_lineHeight(newValue) {
			this.$emit('lineHeightChange', newValue)
		}
	},
}
</script>

<style lang="scss">
.controls__item {
	display: flex;
	align-items: center;
	gap: 0.5em;
	// border-color: rgb(238, 242, 245);
	border-bottom: 1px solid rgb(216, 221, 224);
	padding: 0.5em;
	&:nth-child(1) {
		border-top: 1px solid rgb(216, 221, 224);
		// border-color: rgb(228, 234, 238);
	}
	label {
		flex: 1 0 10ch;
		text-align: left;

	}
	input {
		width: 100%;
	}
}
</style>