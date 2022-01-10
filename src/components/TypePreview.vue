<template>
  <div class="controls">
    <div>
      <h1>Headline</h1>
      <Controls
        @fontChange="updateHeadlineFont"
        :font="headlineFont"
        @fluidSizeChange="updateHeadlineFluid"
        :fluid-size=fluidHeadlineSize
        @minSizeChange="updateHeadlineMinSize"
        :min-size=minHeadlineSize
        @maxSizeChange="updateHeadlineMaxSize"
        :max-size=maxHeadlineSize
      />
    </div>
    <div>
      <h1>Paragraphs</h1>
      <Controls
        @fontChange="updateParagraphFont"
        :font="paragraphFont"
        @fluidSizeChange="updateParagraphFluid"
        :fluid-size=fluidParagraphSize
        @minSizeChange="updateParagraphMinSize"
        :min-size=minParagraphSize
        @maxSizeChange="updateParagraphMaxSize"
        :max-size=maxParagraphSize
      />
    </div>
  </div>
  <div class="code-wrap">
    <div class="code">
      <h2>Headline</h2>
      <pre>font-size: clamp({{ minHeadlineSizeRem }}rem, calc(1rem + {{ fluidHeadlineSize }}vw), {{ maxHeadlineSizeRem }}rem);</pre>
    </div>
    <div class="code">
      <h2>Paragraph</h2>
      <pre>font-size: clamp({{ minParagraphSizeRem }}rem, calc(1rem + {{ fluidParagraphSize }}vw), {{ maxParagraphSizeRem }}rem);</pre>
    </div>
  </div>
  <div class="preview" ref="preview">
    <h1>Heading Test</h1>
    <p>
      Pitch upon the very middle of the plat where the town or line of houses is
      to be laid or run, facing the harbor of the great river, for the situation
      of my house; ... the distance of each house from the creek or harbor
      should be, in my judgment, a measured quarter of a mile; or, at least, two
      hundred paces, because of building hereafter streets down to the harbor.”
      Such were the instructions which William Penn, founder of Philadelphia,
      gave to his commissioners, William Crispin, John Bezar, and Nathaniel
      Allen, for the building of what is now known as Penn’s Cottage.
    </p>
    <p>
      It was in 1681 that the great Quaker completed the negotiations for the
      grant of Pennsylvania, and in the next year the first work of the building
      of the Proprietary House was begun. The plat chosen for its site was the
      one bounded by Front, Chestnut, Letitia, and High streets, the last now
      being named Market. In the place of the little cottage and its surrounding
      yard there is, to-day, one of the most thickly-built portions of
      Philadelphia. But the true centre of the city, at one time radiating from
      this point, has now, owing to the growth of two hundred years, moved a
      mile to the westward.
    </p>
  </div>
</template>

<script>
import Controls from "./Controls.vue";

export default {
	name: "TypePreview",
	components: {
		Controls,
	},
	data() {
		return {
			fluidHeadlineSize: 4,
			minHeadlineSize: 22,
			maxHeadlineSize: 72,
			fluidParagraphSize: 2,
			minParagraphSize: 16,
			maxParagraphSize: 40,
			headlineFont: "sans-serif",
			paragraphFont: "serif",
		};
	},
	computed: {
		minHeadlineSizeRem() {
			return this.minHeadlineSize / 16;
		},
		maxHeadlineSizeRem() {
			return this.maxHeadlineSize / 16;
		},
		minParagraphSizeRem() {
			return this.minParagraphSize / 16;
		},
		maxParagraphSizeRem() {
			return this.maxParagraphSize / 16;
		},
		headlineFontStackProcessed() {
			if (this.headlineFont.indexOf(" ") > -1) {
				return "'" + this.headlineFont + "'";
			} else {
				return this.headlineFont;
			}
		},
		paragraphFontStackProcessed() {
			if (this.paragraphFont.indexOf(" ") > -1) {
				return "'" + this.paragraphFont + "'";
			} else {
				return this.paragraphFont;
			}
		},
	},
	watch: {
		fluidHeadlineSize(newValue) {
			this.$refs.preview.style.setProperty(
				"--fluid-headline-size",
				newValue + "vw"
			);
		},
		fluidParagraphSize(newValue) {
			this.$refs.preview.style.setProperty(
				"--fluid-paragraph-size",
				newValue + "vw"
			);
		},
		minHeadlineSizeRem(newValue) {
			this.$refs.preview.style.setProperty(
				"--min-headline-size",
				newValue + "rem"
			);
		},
		minParagraphSizeRem(newValue) {
			this.$refs.preview.style.setProperty(
				"--min-paragraph-size",
				newValue + "rem"
			);
		},
		maxHeadlineSizeRem(newValue) {
			this.$refs.preview.style.setProperty(
				"--max-headline-size",
				newValue + "rem"
			);
		},
		maxParagraphSizeRem(newValue) {
			this.$refs.preview.style.setProperty(
				"--max-paragraph-size",
				newValue + "rem"
			);
		},
		headlineFontStackProcessed(newValue) {
			this.$refs.preview.style.setProperty("--font-headline-family", newValue);
		},
		paragraphFontStackProcessed(newValue) {
			this.$refs.preview.style.setProperty("--font-paragraph-family", newValue);
		},
	},
	methods: {
		updateHeadlineFont(value) {
			this.headlineFont = value;
		},
		updateParagraphFont(value) {
			this.paragraphFont = value;
		},
		updateHeadlineFluid(value) {
			this.fluidHeadlineSize = value;
		},
		updateParagraphFluid(value) {
			this.fluidParagraphSize = value;
		},
		updateHeadlineMinSize(value) {
			this.minHeadlineSize = value;
		},
		updateParagraphMinSize(value) {
			this.minParagraphSize = value;
		},
		updateHeadlineMaxSize(value) {
			this.maxHeadlineSize = value;
		},
		updateParagraphMaxSize(value) {
			this.maxParagraphSize = value;
		},
	},
};
</script>

<style lang="scss">
[draggable="true"] {
	cursor: move;
}
.preview {
	--fluid-headline-size: 4vw;
	--fluid-paragraph-size: 2vw;
	--min-headline-size: 1.375rem;
	--min-paragraph-size: 1rem;
	--max-headline-size: 4.5rem;
	--max-paragraph-size: 2.5rem;
	--font-headline-family: sans-serif;
	--font-paragraph-family: serif;
	padding: 1em max(2rem, (50vw - 960px) / 2);
	/* max-width: 85%; */
	/* overflow: scroll; */
	/* resize: both; */
	h1,
	p {
		text-align: left;
		line-height: 1.333;
		transition: font-size 200ms ease-in-out;
	}
	h1 {
		font-family: var(--font-headline-family);
		font-size: clamp(
			var(--min-headline-size, 1rem),
			calc(1rem + var(--fluid-headline-size, 3vw)),
			var(--max-headline-size, 2rem)
		);
	}
	p {
		font-family: var(--font-paragraph-family);
		font-size: clamp(
			var(--min-paragraph-size, 1rem),
			calc(1rem + var(--fluid-paragraph-size, 3vw)),
			var(--max-paragraph-size, 2rem)
		);
	}
}
pre {
	/* text-align: left; */
	background-color: rgb(25, 26, 27);
	color: white;
	padding: 1em;
  text-align: center;
}
.controls,
.code-wrap {
	display: flex;
	justify-content: space-around;
	padding: 1em max(2rem, (50vw - 960px) / 2);
  gap: 1em;
}
</style>