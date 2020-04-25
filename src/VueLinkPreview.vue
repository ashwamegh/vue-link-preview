<template>
	<div v-if="validUrl">
		<slot name="loader" v-if="loading && !preview">
			<div class="link-preview-section">
				<div class="link-description">
				<div class="domain">
					<span class="link-url-loader animated-background">facebook.com</span>
				</div>
				<div class="link-data-loader">
					<div class="p1 animated-background">Shashank Shekhar</div>
					<div class="p2 animated-background">This is some description</div>
				</div>
				</div>
				<div class="link-image-loader">
				<div class="img"></div>
				</div>
			</div>
		</slot>
		<slot v-else :props="preview">
			<div class="link-preview-section" @click="openLink">
				<div class="link-description">
				<div class="domain">
					<span class="link-url">{{ preview.domain }}</span>
				</div>
				<div class="link-data">
					<div class="link-title">{{ preview.title }}</div>
					<div class="link-description">{{ preview.description }}</div>
				</div>
				</div>
				<div class="link-image">
				<img v-if="preview.img" :src="preview.img" :alt="preview.description" />
				</div>
			</div>
		</slot>
	</div>
</template>
<script>

export default {
  name: "VuelinkPreview",
  props: {
    url: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      loading: false,
      preview: null,
      api: "https://lpdg.herokuapp.com/parse/link",
      validUrl: false
    };
  },
  methods: {
    isValidUrl: function(url) {
      const regex = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/;
      this.validUrl = regex.test(url);
      return this.validUrl;
    },
    async loadUrlPreviewData() {
		const { url, api } = this;

		if(this.isValidUrl(url)) {
			const rawResponse = await fetch(api, {
				method: "POST",
				headers: {
				Accept: "application/json",
				"Content-Type": "application/json"
				},
				body: JSON.stringify({ url })
			});
			const previewData = await rawResponse.json();
			this.preview = previewData;
		}
    },
    openLink() {
      const { url } = this;
      window.open(url, "_blank");
    }
  },

  async mounted() {
    this.loading = true;
    await this.loadUrlPreviewData();
    this.loading = false;
  }
};
</script>
<style lang="scss" scoped>
.link-preview-section {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 14px;
  border-radius: 5px;
  margin: 20px 0px;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.1), 0 -4px 24px 2px rgba(0, 0, 0, 0.03);
  line-height: 1.5;
  cursor: pointer;

  .animated-background {
    animation-duration: 2.25s;
    animation-fill-mode: forwards;
    animation-iteration-count: infinite;
    animation-name: placeHolderShimmer;
    animation-timing-function: linear;
    background: #f6f6f6;
    background: linear-gradient(to right, #f6f6f6 8%, #f0f0f0 18%, #f6f6f6 33%);
    // background-size: 800px 104px;
    position: relative;
  }

  // Animation
  @keyframes placeHolderShimmer {
    0% {
      background-position: -468px 0;
    }
    100% {
      background-position: 468px 0;
    }
  }

  .link-description {
    display: flex;
    flex-direction: column;

    .domain {
      display: flex;
      flex-direction: row;
      align-items: center;
      margin-bottom: 4px;

      img {
        height: 16px;
        width: 16px;
      }

      .link-url,
	  .link-url-loader {
        margin-left: 10px;
        font-weight: 600;
      }
	  .link-url-loader  {
		background-color: #f6f6f6;
		color: #f6f6f6;
	  }
    }

    .link-data {
      .link-title {
        color: #1364a2;
        font-weight: 600;
        font-size: 15px;
      }

      .link-description {
        font-size: 14px;
      }
    }

    .link-data-loader {
      .p1 {
        font-weight: 600;
        font-size: 15px;
      }
      .p2 {
        font-size: 14px;
      }

      .p1,
      .p2 {
        background-color: #f6f6f6;
        color: #f6f6f6;
        border-radius: 10px;
        margin-bottom: 4px;
      }
    }
  }

  .link-image {
    display: flex;
    align-content: center;
    align-items: center;
    height: 100%;

    img {
      max-height: 64px;
      object-fit: cover;
    }
  }

  .link-image-loader {
    display: flex;
    align-content: center;
    align-items: center;
    .img {
      height: 64px;
      width: 64px;
      @extend .animated-background;
    }
  }
}
</style>