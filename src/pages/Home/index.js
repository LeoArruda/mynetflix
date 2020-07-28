import React from 'react';
import Menu from '../../components/Menu';
import startData from '../../data/dados_iniciais.json';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import Footer from '../../components/Footer';


function Home() {
  return (
    <div style={{ background: "#141414" }}>
      <Menu />
      <BannerMain
        videoTitle={startData.categorias[0].videos[0].titulo}
        url={startData.categorias[0].videos[0].url}
        videoDescription={"What is Front-end development? How to get a job."}
      />

      <Carousel
        ignoreFirstVideo
        category={startData.categorias[0]}
      />

      <Carousel
        category={startData.categorias[1]}
      />

      <Carousel
        category={startData.categorias[2]}
      />

      <Carousel
        category={startData.categorias[3]}
      />

      <Carousel
        category={startData.categorias[4]}
      />

      <Carousel
        category={startData.categorias[5]}
      />

      <Footer/>
    </div>

  );
}

export default Home;
