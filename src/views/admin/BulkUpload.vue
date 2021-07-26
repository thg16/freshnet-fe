<template>
  <div class="admin-bulk-upload vertical-center">
    <h1 class="admin">Products Bulk Upload</h1>

    <div class="centered text-center">
      <h2 class="admin text-center">Select a file to start</h2>
      <input @change="changeFile"
             type="file"
             accept=".csv"
             class="full-width-input"
             placeholder="Click to find your .csv file or Drop it here"
             ref="csvfile" />
      <button class="full-width-button">Check</button>
      <p>You can also <a>Download our .csv model</a></p>
    </div>
  </div>
</template>

<script>

export default {
  name: "AdminBulkUpload",
  components: {
  },
  data() {
    return {
      hasFile: false,
    };
  },
  methods: {
    changeFile(e) {
      if(this.$refs.csvfile.files[0]) {
        this.hasFile = true;
      }

      else this.hasFile = false;
    }
  }
}
</script>

<style lang="scss" scoped>

.centered {
    min-height: calc(100vh - 400px);
    display: flex;
    flex-direction: column;
    vertical-align: middle;
    align-items: center;
    justify-content: center;

    ::-webkit-file-upload-button {
      display: none;
    }
}

</style>
