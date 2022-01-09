<template>
  <div class="controls">
    <div>
      <label for="fluid-size">Fluid Size</label>
      <input type="range" id="fluid-size" min="1" max="20" step="0.1" v-model="fluidSize" />
      {{ fluidSize }}vw
    </div>
    <div>
      <label for="min-size">Min Size</label>
      <input type="range" id="min-size" min="1" max="100" step="1" v-model="minSize" />
      {{ minSize }}px
    </div>
    <div>
      <label for="max-size">Max Size</label>
      <input type="range" id="max-size" min="1" max="100" step="1" v-model="maxSize" />
      {{ maxSize }}px
    </div>
  </div>
  <div class="code">
    <pre>font-size: clamp({{minSizeRem}}rem, calc(1rem + {{fluidSize}}vw), {{maxSizeRem}}rem);</pre>
  </div>
	<div class="preview" ref="preview">
    <h1>Heading Test</h1>
    <p>Pitch upon the very middle of the plat where the town or line of houses is to be laid or run, facing the harbor of the great river, for the situation of my house; ... the distance of each house from the creek or harbor should be, in my judgment, a measured quarter of a mile; or, at least, two hundred paces, because of building hereafter streets down to the harbor.” Such were the instructions which William Penn, founder of Philadelphia, gave to his commissioners, William Crispin, John Bezar, and Nathaniel Allen, for the building of what is now known as Penn’s Cottage.</p>
    <p>It was in 1681 that the great Quaker completed the negotiations for the grant of Pennsylvania, and in the next year the first work of the building of the Proprietary House was begun. The plat chosen for its site was the one bounded by Front, Chestnut, Letitia, and High streets, the last now being named Market. In the place of the little cottage and its surrounding yard there is, to-day, one of the most thickly-built portions of Philadelphia. But the true centre of the city, at one time radiating from this point, has now, owing to the growth of two hundred years, moved a mile to the westward.</p>
  </div>
</template>

<script>
export default {
  name: 'TypePreview',
  data() {
    return {
      fluidSize: 2,
      minSize: 16,
      maxSize: 40
    }
  },
  computed: {
    minSizeRem() {
      return this.minSize / 16
    },
    maxSizeRem() {
      return this.maxSize / 16
    }
  },
  watch: {
    fluidSize(newValue) {
      this.$refs.preview.style.setProperty('--fluid-size', newValue  + 'vw')
    },
    minSizeRem(newValue) {
      this.$refs.preview.style.setProperty('--min-size', newValue + 'rem')
    },
    maxSizeRem(newValue) {
      this.$refs.preview.style.setProperty('--max-size', newValue + 'rem')
    },
  },
}
</script>

<style lang="scss">
[draggable=true] {
  cursor: move;
}
.preview {
  --fluid-size: 3vw;
  --min-size: 1rem;
  --max-size: 2.5rem;
	padding: 1em max(2rem, (50vw - 960px) / 2);
	/* max-width: 85%; */
	/* overflow: scroll; */
	/* resize: both; */
  h1, p {
    text-align: left;
    line-height: 1.333;
    font-size: clamp(
      var(--min-size, 1rem),
      calc(1rem + var(--fluid-size, 3vw)),
      var(--max-size, 2rem)
    );
  }
}
pre {
  /* text-align: left; */
  background-color: rgb(25, 26, 27);
  color: white;
  padding: 1em;
}

</style>