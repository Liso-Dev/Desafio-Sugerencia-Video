const tipoMultimedia = (() => {
    const funcionInterna = (url, id) => {
      document.getElementById(id).setAttribute("src", url);
    };
    return {
      playVideo: (url, id) => funcionInterna(url, id),
    };
  })();
  
  class Multimedia {
    constructor(url) {
      let _url = url;
      this.getUrl = () => _url;
    }
    get url() {
      return this.getUrl();
    }
  
    setInicio() {
      return "Este método es para realizar un cambio en la URL del video";
    }
  }
  
  class Reproductor extends Multimedia {
    constructor(url, id) {
      super(url);
      let _id = id;
      this.getId = () => _id;
    }
  
    playMultimedia() {
      tipoMultimedia.playVideo(this.url, this.getId());
    }
    setInicio(tiempo) {
      const inicio = document.getElementById(this.getId());
      inicio.setAttribute("src", `${this.getUrl()}?start=${tiempo}`);
    }
  }
  
  let musica = new Reproductor(
    "https://www.youtube.com/embed/KvMY1uzSC1E",
    "musica"
  );
  let peliculas = new Reproductor(
    "https://www.youtube.com/embed/BRGBYU7iW1g",
    "peliculas"
  );
  let series = new Reproductor(
    "https://www.youtube.com/embed/GExflKHU3VE",
    "series"
  );
  
  musica.playMultimedia();
  peliculas.playMultimedia();
  series.playMultimedia();
  
  musica.setInicio(8);
  peliculas.setInicio(1);
  series.setInicio(3);