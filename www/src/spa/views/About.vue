<template>
  <div>
    <h1>This is the about page 3</h1>
  </div>
  <h1>Upload file</h1>
  <form action="/upload" method="post" enctype="multipart/form-data">
    <label>Файл</label><br>
    <input type="file" name="filedata" /><br><br>
    <input type="submit" value="Send" />
  </form>
</template>
<style lang="scss" scoped>
  html {
    font-size: 12px;
    background-color: #d2d2d2;
  }
</style>