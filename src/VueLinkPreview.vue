<template>
  <div v-if="validUrl">
    <slot name="loader" v-if="loading && !preview">
      <div class="link-preview-section" :style="style">
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
      <div class="link-preview-section" :style="style" @click="onClick">
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
  name: "VueLinkPreview",
  props: {
    url: {
      type: String,
      required: true
    },
    width: {
      type: String,
      default: "90%"
    },
    maxWidth: {
      type: String,
      default: "700px"
    },
    marginTop: {
      type: String,
      default: "18px"
    },
    marginBottom: {
      type: String,
      default: "18px"
    },
    marginRight: {
      type: String,
      default: "auto"
    },
    marginLeft: {
      type: String,
      default: "auto"
    },
    canOpenLink: {
      type: Boolean,
      default: true
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
  computed: {
    style() {
      const {
        width,
        maxWidth,
        marginRight,
        marginLeft,
        marginTop,
        marginBottom
      } = this;
      return {
        width,
        maxWidth,
        marginTop,
        marginBottom,
        marginRight,
        marginLeft
      };
    }
  },
  methods: {
    isValidUrl: function(url) {
      const regex = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/;
      this.validUrl = regex.test(url);
      return this.validUrl;
    },
    loadUrlPreviewData() {
      const { url, api } = this;
      return new Promise((resolve, reject) => {
        if (this.isValidUrl(url)) {
          fetch(api, {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json"
            },
            body: JSON.stringify({ url })
          })
            .then(response => response.json())
            .then(data => {
              resolve(data);
            })
            .catch(error => reject(error));
        }
      });
    },
    onClick() {
      if (this.canOpenLink) {
        const { url } = this;
        window.open(url, "_blank");
      }

      this.$emit('click', this.preview)
    }
  },

  mounted() {
    this.loading = true;
    this.loadUrlPreviewData().then(response => {
      this.preview = response;
      this.loading = false;
    });
  }
};
</script>
<style lang="css" scoped>
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
}
.link-preview-section .animated-background,
.link-preview-section .link-image-loader .img {
  animation-duration: 2.25s;
  animation-fill-mode: forwards;
  animation-iteration-count: infinite;
  animation-name: placeHolderShimmer;
  animation-timing-function: linear;
  background: #f6f6f6;
  background: linear-gradient(to right, #f6f6f6 8%, #f0f0f0 18%, #f6f6f6 33%);
  position: relative;
}
@keyframes placeHolderShimmer {
  0% {
    background-position: -468px 0;
  }
  100% {
    background-position: 468px 0;
  }
}
.link-preview-section .link-description {
  display: flex;
  flex-direction: column;
}
.link-preview-section .link-description .domain {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 4px;
}
.link-preview-section .link-description .domain img {
  height: 16px;
  width: 16px;
}
.link-preview-section .link-description .domain .link-url,
.link-preview-section .link-description .domain .link-url-loader {
  font-weight: 600;
}
.link-preview-section .link-description .domain .link-url-loader {
  background-color: #f6f6f6;
  color: #f6f6f6;
  border-radius: 10px;
}
.link-preview-section .link-description .link-data .link-title {
  color: #1364a2;
  font-weight: 600;
  font-size: 15px;
}
.link-preview-section .link-description .link-data .link-description {
  font-size: 14px;
  text-align: left;
}
.link-preview-section .link-description .link-data-loader .p1 {
  font-weight: 600;
  font-size: 15px;
}
.link-preview-section .link-description .link-data-loader .p2 {
  font-size: 14px;
}
.link-preview-section .link-description .link-data-loader .p1,
.link-preview-section .link-description .link-data-loader .p2 {
  background-color: #f6f6f6;
  color: #f6f6f6;
  border-radius: 10px;
  margin-bottom: 4px;
}
.link-preview-section .link-image {
  display: flex;
  align-content: center;
  align-items: center;
  height: 100%;
}
.link-preview-section .link-image img {
  max-height: 64px;
  object-fit: cover;
}
.link-preview-section .link-image-loader {
  display: flex;
  align-content: center;
  align-items: center;
}
.link-preview-section .link-image-loader .img {
  height: 64px;
  width: 64px;
}
</style>