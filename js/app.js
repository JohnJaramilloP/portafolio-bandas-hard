// peticion de datos

const bandas = [
  {
    nombre: "Guns N Roses",
    info: "Guns N' Roses es una banda estadounidense de hard rock formada en Hollywood en la zona de Sunset Strip, alrededor de Santa Mónica, en el área metropolitana de Los Ángeles, California en 1985. El grupo fue fundado por el vocalista Axl Rose y el guitarrista Izzy Stradlin. Es una de las bandas de rock más exitosas de todos los tiempos, habiendo vendido más de ciento cincuenta millones de discos, es considerada ícono global de la música y forma parte del prestigioso Salón de la Fama del Rock and Roll. Asimismo, la banda es uno de los números artísticos con más galardones, legado y repercusión mundial hasta la fecha. También Guns N' Roses es considerada una de las bandas más influyentes de la historia debido a su gran legado musical.",
    imagen: "../portafolio-bandas-hard/img/1.jpg",
  },
  {
    nombre: "Aerosmith",
    info: "Aerosmith es una banda estadounidense de rock formada en Boston en 1970. Sus miembros son: Steven Tyler (cantante), Joe Perry (guitarra), Tom Hamilton (bajo), Joey Kramer (batería) y Brad Whitford (guitarra). Conocidos también como `Los chicos malos de Boston` o `Toxic Twins` apelativo por el que se conoce a sus dos líderes por su histórica adicción a las drogas, su sonido, agresivamente rítmico, tiene raíces en el blues, y contribuyó a establecer el sonido del hard rock y pop rock entre los años 1981 y 1990.",
    imagen: "../portafolio-bandas-hard/img/2.jpg",
  },
  {
    nombre: "Bon Jovi",
    info: "Bon Jovi es una banda estadounidense de rock formada en 1983 en Nueva Jersey por su líder y vocalista Jon Bon Jovi. La formación actual la completan el teclista David Bryan, el batería Tico Torres, el bajista Hugh McDonald y el guitarrista Phil X. Este último sustituyó al también guitarrista Richie Sambora, quién abandonó la formación en 2013 tras haber permanecido treinta años en ella debido a diferencias con sus compañeros. Es uno de los grupos de rock más exitosas de todos los tiempos, habiendo vendido más de 130 millones de discos y ofrecido más de 2800 conciertos en cincuenta países. Además es considerada un icono global de la música y forma parte del Salón de la Fama del Rock and Roll.",
    imagen: "../portafolio-bandas-hard/img/3.jpg",
  },
  {
    nombre: "Motley Crue",
    info: "Mötley Crüe es una banda estadounidense de hard rock formada en 1981 en Los Ángeles, California por el bajista Nikki Sixx y el baterista Tommy Lee a la que más tarde se le uniría el guitarrista Mick Mars y el vocalista Vince Neil, que con más de 12 millones de copias vendidas sólo en Estados Unidos y más de 33 en todo el mundo, es considerada como una de las bandas más importantes de la escena «glam» tanto en los años 1980 como en la actualidad y como una de las más influyentes en la escena mundial.",
    imagen: "../portafolio-bandas-hard/img/4.jpg",
  },
  {
    nombre: "Ozzy Osbourne",
    info: "John Michael Osbourne comenzó su carrera profesional en los últimos años 60, cuando se asoció con Tony Iommi, el bajista Geezer Butler y el batería Bill Ward para formar Black Sabbath. La banda, única por sus melodías sombrías, lanzó su álbum homónimo en 1970 y llegó a editar discos de platino clásicos como 'Paranoid' y 'Master of Reality', el resto de la década. Después del álbum 'Never Say Die' de 1978 fue despedido de Black Sabbath, lo que le llevó a formar su propio proyecto en solitario. Con su nuevo manager y esposa, Sharon, Osbourne formó su propia banda, Blizzard of Ozz, con el guitarrista Randy Rhoads, el bajista Bob Daisley y el bateria Lee Kerslake. El primer disco homónimo de la banda fue lanzado en septiembre de 1980 en el Reino Unido y a principios de 1981 en los EE.UU. Blizzard of Ozz tenía algunos de los mismos ingredientes de Black Sabbath, las letras se centraron en lo oculto y las guitarras eran ruidosas y pesadas. Sin embargo, la banda era más técnicamente competente y capaz de lograr variaciones en las fórmulas estándar de metal. Con los éxitos 'Crazy Train' y 'Mr. Crowley', Blizzard of Ozz alcanzaron el número siete en las listas del Reino Unidoy el número 21 en los EE.UU. Kerslake y Daisley fueron sustituidos por Tommy Aldridge y Rudy Sarzo poco antes de la edicion de 'Diary of a Madman'. Este álbum, que incluyó la oda sobre las drogas 'Flying High Again', llegó al número 16 en los USA.",
    imagen: "../portafolio-bandas-hard/img/5.jpg",
  },
  {
    nombre: "Alice Cooper",
    info: "Alice Cooper (nacido Vincent Damon Furnier; Detroit, Míchigan; 4 de febrero de 1948) es un cantante de hard rock y heavy metal estadounidense. Alice Cooper fue inicialmente el nombre de una banda de rock and roll en la que Furnier era el vocalista, pionero del género conocido como shock rock. Surgido en 1964 en Arizona, Estados Unidos, logró su mayor auge durante los años setenta y alcanzó el éxito comercial con el álbum Billion Dollar Babies de 1973. Posteriormente, Furnier adoptó el nombre de su anterior banda e inició una carrera como solista, convirtiéndose en un importante icono del rock que influiría en diferentes géneros, como el heavy metal, el hard rock, el punk y el rock gótico.",
    imagen: "../portafolio-bandas-hard/img/6.jpg",
  },
  {
    nombre: "Kiss band",
    info: "Kiss (estilizado KISS) es una banda estadounidense de rock formada en Nueva York en enero de 1973 por el bajista Gene Simmons y el guitarrista Paul Stanley, a los que más tarde se unirían el batería Peter Criss y el guitarrista Ace Frehley. Conocido por su maquillaje facial y su extravagante vestuario, el grupo se dio a conocer al público a mediados de los años 1970 gracias a sus actuaciones en directo, en las que incluían pirotecnia, llamaradas, cañones, baterías elevadoras, guitarras con humo y sangre falsa.",
    imagen: "../portafolio-bandas-hard/img/7.jpg",
  },
  {
    nombre: "Defleppard",
    info: "Def Leppard es una banda británica de rock originaria de Sheffield, Reino Unido, que dio inicio a su carrera a finales de los años setenta, alcanzando gran éxito mundial en la década de los ochenta, acercando al heavy metal a las emisoras de radio y al gran público en general, gracias a una mezcla de hard rock melódico con un gran trabajo vocal. Junto a otras bandas como Bon Jovi, Van Halen, Mötley Crüe, Scorpions, Metallica, Guns N' Roses, Iron Maiden, etcétera, es reconocida como una de las bandas de heavy metal superventas de los años 1980. Junto a grupos como Iron Maiden o Saxon fueron una de las bandas de cabecera de la New Wave of British Heavy Metal.",
    imagen: "../portafolio-bandas-hard/img/8.jpg",
  },
  {
    nombre: "Whitesnake",
    info: "Whitesnake es una banda británica de Hard Rock & Metal, fundada en el año 1977 por David Coverdale después de la separación de la banda Deep Purple, donde había formado parte durante el periodo 1973-1976. Durante sus primeros años, su música estaba esencialmente orientada hacia el Rock, el Blues y el Soul.",
    imagen: "../portafolio-bandas-hard/img/9.jpg",
  },
];

// Contenedor principal

const d = document,
  contenedorPrincipal = d.querySelector(".contenido-principal"),
  parrafoPrincipal = d.querySelector(".contenido-principal__contenedor"),
  contenedorGifs = d.querySelector(".contenedor__gifs"),
  contenedorDeImagenes = d.querySelector(".carousel__lista");

  window.onload = () => {
    cambioBandaPrincipal();
  };

const cambioBandaPrincipal = (banda = 0) => {
  contenedorPrincipal.insertAdjacentHTML(
    "afterbegin",
    `<img src="${bandas[banda].imagen}" alt="${bandas[banda].nombre}" class="contenido-principal__imagen"/>`
  );
  parrafoPrincipal.insertAdjacentHTML(
    "afterbegin",
    `<h1 class="contenido-principal__titulo">${bandas[banda].nombre}</h1>`
  );
  parrafoPrincipal.insertAdjacentHTML(
    "beforeend",
    `<p class="contenido-principal__resumen">${bandas[banda].info}</p>`
  );
  parrafoPrincipal.insertAdjacentHTML(
    "beforeend",
    `<button class="btn ${bandas[banda].nombre}">Galeria de gifs de tu banda favotira: ${bandas[banda].nombre}</button>`
  );
};

// Imágenes Carousel

bandas.forEach((e) => {
  contenedorDeImagenes.insertAdjacentHTML(
    "afterbegin",
    `<div class="carousel__elemento"><img src="${e.imagen}" alt="${e.nombre}" /><p>${e.nombre}</p></div>`
  );
});

// Carousel

window.addEventListener("load", () => {
  new Glider(document.querySelector(".carousel__lista"), {
    // Mobile-first defaults
    slidesToShow: 1,
    slidesToScroll: 1,
    scrollLock: true,
    dots: ".carousel__indicadores",
    arrows: {
      prev: ".carousel__anterior",
      next: ".carousel__siguiente",
    },
    responsive: [
      {
        // screens greater than >= 775px
        breakpoint: 775,
        settings: {
          // Set to `auto` and provide item width to adjust to viewport
          slidesToShow: 2,
          slidesToScroll: 2,
          itemWidth: 150,
          duration: 0.25,
        },
      },
      {
        // screens greater than >= 1024px
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          itemWidth: 150,
          duration: 0.25,
        },
      },
    ],
  });
});

// Cambio banda principal

contenedorDeImagenes.addEventListener("click", (e) => {
  let cardBanda = e.target.alt;
  bandas.forEach((el, i) => {
    if (cardBanda === el.nombre) {
      contenedorPrincipal.removeChild(contenedorPrincipal.firstChild);
      parrafoPrincipal.innerHTML = "";
      contenedorGifs.innerHTML = "";
      cambioBandaPrincipal(i);
    }
  });
});

// Peticion gifs

const getGifs = async (enlaceGifs) => {
  const url = `http://api.giphy.com/v1/gifs/search?q=${enlaceGifs}&limit=8&api_key=R4W58IX76Ei17P741br8cVYZHQAtSza0`;

  const resp = await fetch(url);
  const { data } = await resp.json();

  const gifs = data.map((img) => {
    return {
      title: img.title,
      url: img.images?.downsized_medium.url,
    };
  });

  return gifs;
};

// Agregar gifs

const addGifsPrincipal = (gifs) => {
  gifs.map((e) => {
    contenedorGifs.insertAdjacentHTML(
      "afterbegin",
      `<div id="card__gif" class="card__gif">
      <img src="${e.url}" alt="${e.title}" class="gif"/>
      <p>${e.title}</p>
      </div>`
    );
  });
};

contenedorPrincipal.addEventListener("click", (e) => {
  let enlaceGifs = e.target.className;

  if (
    e.target.matches(".btn") &&
    !document.body.contains(document.getElementById("card__gif"))
  ) {
    let gifs = getGifs(enlaceGifs);

    gifs.then((el) => {
      addGifsPrincipal(el);
    });
  } else if (
    e.target.matches(".btn") && document.body.contains(document.getElementById("card__gif"))
  ) {
    contenedorGifs.innerHTML = "";
  }
});
