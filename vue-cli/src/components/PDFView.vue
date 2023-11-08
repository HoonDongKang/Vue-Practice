<template>
  <div>
    <input type="file" @change="handleFileChange">
    <div id="canvas"></div>
    <div v-if="src.length > 1">
      <v-img  v-for="(url,index) in src" :key="index" :src="url">
        <DragCompVue/>
      </v-img>
    </div>
  </div>
</template>

<script>
import * as pdfJsLib from "pdfjs-dist/legacy/build/pdf"
import pdfWorker from "pdfjs-dist/legacy/build/pdf.worker.entry"
import DragCompVue from './DragComp.vue';
pdfJsLib.GlobalWorkerOptions.workerSrc = pdfWorker;

export default {
  components:{
    DragCompVue
  },
  data(){
    return{
      file: null,
      pdf: null,
      url: "",
      src: []
    }
  },
  methods:{
    handleFileChange(e){
      console.log('d')
      this.file = e.target.files[0];
      this.url = URL.createObjectURL(this.file);
    },
    async renderingPage(){
      let loadingTask = pdfJsLib.getDocument(this.url)
      loadingTask.promise.then((pdf)=>{
          var canvasdiv = document.getElementById('canvas');
          var totalPages = pdf.numPages
          var data = [];
      for (let pageNumber = 1; pageNumber <= totalPages; pageNumber++) {
        pdf.getPage(pageNumber).then(function(page) {

          var scale = 1.5;
          var viewport = page.getViewport({ scale: scale });

          var canvas = document.createElement('canvas');
          canvasdiv.appendChild(canvas);

          // Prepare canvas using PDF page dimensions
          var context = canvas.getContext('2d');
          canvas.height = viewport.height;
          canvas.width = viewport.width;

          // Render PDF page into canvas context
          var renderContext = { canvasContext: context, viewport: viewport };

          var renderTask = page.render(renderContext);
          renderTask.promise.then(function() {
            data.push(canvas.toDataURL())
            console.log(data.length + ' page(s) loaded in data')
          });
        })}
        this.src = data;
      })

    }
  },
  watch:{
    url(){
      this.renderingPage()
    }
  }
}
</script>

<style>

</style>