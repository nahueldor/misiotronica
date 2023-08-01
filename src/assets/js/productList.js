const productList = [
  {
    id: 0,
    producto: "Cable Alimentación Tipo 8 220v",
    descripcion:
      "Cable de alimentación para dispositivos electrónicos. Conector tipo 8 y voltaje de 220v.",
    precio: 850,
    imagen:
      "https://t1.gstatic.com/images?q=tbn:ANd9GcR1fMiNmwTx8Ondnsr956yeisrkP2owMx5QyWxCIxwUiuTLtKbm",
    isStock: true,
    envioFree: false,
    categoria: "cables",
  },
  {
    id: 1,
    producto: "Gigabyte GeForce RTX 3070",
    descripcion:
      "Tarjeta gráfica de alto rendimiento para gamers y diseñadores. Memoria GDDR6 de 8GB y soporte para resoluciones 4K.",
    precio: 170664,
    imagen: "https://m.media-amazon.com/images/I/81XQRP5stzL._AC_SL1500_.jpg",
    isStock: false,
    envioFree: true,
    categoria: "placas",
  },
  {
    id: 2,
    producto: "Luces Tira Led Rgb 5050",
    descripcion:
      "Tira de luces LED RGB 5050 de alta calidad. Ideal para decoración en el hogar o eventos.",
    precio: 7590,
    imagen:
      "https://d2r9epyceweg5n.cloudfront.net/stores/001/323/912/products/tira-led-50501-fc37c28d4c9f01f04515983930115902-640-0.jpg",
    isStock: true,
    envioFree: false,
    categoria: "luces",
  },
  {
    id: 3,
    producto: "Cable Alimentación Pcpower 220v",
    descripcion:
      "Cable de alimentación para computadoras y dispositivos electrónicos. Voltaje de 220v y certificación de calidad.",
    precio: 790,
    imagen:
      "https://www.innovartech.com.ar/storage/2020/08/Cable-Power-Fuente-PC-220V.jpg",
    isStock: false,
    envioFree: false,
    categoria: "cables",
  },
  {
    id: 4,
    producto: "Sensor Detector De Movimiento 180º 1200w 220v Apto Led",
    descripcion:
      "Sensor detector de movimiento con ángulo de detección de 180º y capacidad de soportar cargas de hasta 1200W.",
    precio: 3999,
    imagen:
      "https://http2.mlstatic.com/D_NQ_NP_2X_749009-MLA48927913039_012022-F.webp",
    isStock: false,
    envioFree: true,
    categoria: "sensores",
  },
  {
    id: 5,
    producto: "Batería Moura Mf-220 12v 220ah Ciclo Profundo Solar",
    descripcion:
      "Batería de ciclo profundo para sistemas solares y de respaldo de energía. Capacidad de 220Ah y voltaje de 12V.",
    precio: 239050,
    imagen:
      "https://http2.mlstatic.com/D_NQ_NP_2X_951525-MLA70059047873_062023-F.webp",
    isStock: true,
    envioFree: true,
    categoria: "baterias",
  },
  {
    id: 6,
    producto: "Power Bank Cargador Portatil 20000mah Spica Sw-400 Bateria",
    descripcion:
      "Power bank portátil con capacidad de 20000mAh. Carga rápida y diseño compacto para llevar a cualquier lugar.",
    precio: 12999,
    imagen:
      "https://http2.mlstatic.com/D_NQ_NP_2X_629217-MLA47969844036_102021-F.webp",
    isStock: true,
    envioFree: false,
    categoria: "baterias",
  },
  {
    id: 7,
    producto:
      "Velador Lampara Luz Led De Noche Proyector De Estrellas Infantil",
    descripcion:
      "Lámpara de noche con proyector de estrellas para niños. Luz LED suave y diseño encantador.",
    precio: 2982,
    imagen:
      "https://http2.mlstatic.com/D_NQ_NP_2X_834696-MLA46653738033_072021-F.webp",
    isStock: false,
    envioFree: false,
    categoria: "luces",
  },
  {
    id: 8,
    producto: "Placas San Francisco Original Kit Autoinstalable Novara",
    descripcion:
      "Nuestras placas dejan el ambiente libre de posibles bacterias que produce la humedad, ya que funcionan como un secante, absorben la humedad de la pared y la eliminan por microevaporación progresiva e imperceptible, sin dejar manchas ni olores, además funcionan como decoración.",
    precio: 10000,
    imagen:
      "https://http2.mlstatic.com/D_NQ_NP_804159-MLA50292056980_062022-O.webp",
    isStock: true,
    envioFree: true,
    categoria: "placas",
  },
  {
    id: 9,
    producto:
      "Power Bank Cargador Inalambrico 30000mah Micro Usb Tipo C Color Negro",
    descripcion:
      "Utiliza tu dispositivo en todo momento y lugar, asegurando una carga eficaz y segura con el cargador Spica SW-800.",
    precio: 28999,
    imagen:
      "https://http2.mlstatic.com/D_NQ_NP_978395-MLU70423610142_072023-O.webp",
    isStock: true,
    envioFree: true,
    categoria: "baterias",
  },
  {
    id: 10,
    producto:
      "Power Bank Eshine Es983s 30000 Mah Carga Inalambrica Portable",
    descripcion:
      "Gran capacidad de 30000 mAh: el cargador solar con una batería integrada de 30000 mAh es suficiente para cargar el iPhone XS 11 veces, Samsung Galaxy S8 10 veces, y iPad Pro 3 veces. El cargador solar de 30000 mAh mantiene tu teléfono completamente cargado, incluso durante huracanes y cortes de energía inesperados.",
    precio: 41500,
    imagen:
      "https://http2.mlstatic.com/D_NQ_NP_956655-MLA53443736759_012023-O.webp",
    isStock: false,
    envioFree: true,
    categoria: "baterias",
  },
  {
    id: 11,
    producto:
      "Cable Ringke Original Usb C A Usb Smart Fish Reforzado Negro",
    descripcion:
      "El cable trenzado de naylon de primera calidad con carcasa de aluminio cuenta con una carcasa fuerte y resistente al calor para un uso duradero sin enredos para una protección duradera.",
    precio: 5000,
    imagen:
      "https://http2.mlstatic.com/D_NQ_NP_941684-MLA54221321602_032023-O.webp",
    isStock: false,
    envioFree: false,
    categoria: "cables",
  },
  {
    id: 12,
    producto:
      "Cable usb 3.0 Samsung negro con entrada USB salida USB Tipo C",
    descripcion:
      "Este cable es ideal para conectar tus dispositivos de manera fácil y sencilla. Así, podrás transferir tus datos en pocos pasos y de manera segura y confiable. El cable de tipo USB fue diseñado, originalmente, para realizar conexiones a través de un solo tipo de puerto y cable. Actualmente, este tipo de cables también pueden alimentar dispositivos.",
    precio: 1455,
    imagen:
      "https://http2.mlstatic.com/D_NQ_NP_958820-MLA42763008273_072020-O.webp",
    isStock: false,
    envioFree: true,
    categoria: "cables",
  },
  {
    id: 13,
    producto:
      "Luz Proton Par 36 Luces Dj Audioritmica Dmx Iluminacion Led",
    descripcion:
      "Lámpara DJ de noche, fista y eventos",
    precio: 7605,
    imagen:
      "https://http2.mlstatic.com/D_NQ_NP_698493-MLA46765172513_072021-O.webp",
    isStock: false,
    envioFree: false,
    categoria: "luces",
  },
  {
    id: 14,
    producto: "Detector De Monoxido De Carbono Autonomo Certificado Ce & Rhors",
    descripcion:
      "Para una protección máxima, sugerimos que se instale una alarma en cada nivel de la casa, incluyendo cada habitación, pasillo, ático terminado y sótano.",
    precio: 6480,
    imagen:
      "https://http2.mlstatic.com/D_NQ_NP_663061-MLA49982815530_052022-O.webp",
    isStock: true,
    envioFree: true,
    categoria: "sensores",
  },
];

export { productList };
