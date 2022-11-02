const data = [
    {
      id: 1,
      title: "Mouse",
      img: "https://www.seopthttps://http2.mlstatic.com/D_NQ_NP_953555-MLA49325983744_032022-O.webpimer.com/es/blog/wp-content/uploads/2020/06/uiux.png",
      price: 95,
      expired: true,
      detail: "mouse gamer inalambrico!",
      stock: 10,
      category: "periferico",
    },
    {
      id: 2,
      title: "placa de video",
      img: "https://soyhorizonte.com/wp-cohttps://www.google.com/url?sa=i&url=https%3A%2F%2Fcompragamer.com%2Fproducto%2FPlaca_de_Video_Zotac_GeForce_RTX_4090_24GB_GDDR6X_Trinity_14156&psig=AOvVaw1Om2-biql_sJpGCvb3r1FR&ust=1667433713606000&source=images&cd=vfe&ved=0CA0QjRxqFwoTCJDY9uKYjvsCFQAAAAAdAAAAABAIntent/uploads/2020/10/Javascript-by-SoyHorizonte.jpg",
      price: 59,
      expired: false,
      detail: "Placa de video rtx 4090 alta gama",
      stock: 8,
      category: "insumo",
    },
    {
      id: 3,
      title: "procesador",
      img: "https://soyhorizonte.com/wp-content/uplhttps://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.mexx.com.ar%2Fproductos-rubro%2Fprocesadores%2F41360-procesador-intel-core-i9-12900k-5.2-ghz-alder-lake-1700-sin-cooler.html&psig=AOvVaw12ct9dJQq9O4oQ-lQeJSAp&ust=1667433792990000&source=images&cd=vfe&ved=0CA0QjRxqFwoTCOjW6oiZjvsCFQAAAAAdAAAAABAFoads/2020/10/Javascript-by-SoyHorizonte.jpg",
      price: 59,
      expired: true,
      detail: "procesador i9 alta gama",
      stock: 7,
      category: "insumo",
    },
    {
      id: 4,
      title: "teclado",
      img: "https://www.seoptimer.https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.alestebrand.com%2Fproductos%2Fteclado-mecanico-gamer-hp-gk100f-qwerty-ingles%2F&psig=AOvVaw15hSAPf_bRx7epC8y4MEaQ&ust=1667433815712000&source=images&cd=vfe&ved=0CA0QjRxqFwoTCNiT75OZjvsCFQAAAAAdAAAAABAGcom/es/blog/wp-content/uploads/2020/06/uiux.png",
      price: 95,
      expired: true,
      detail: "teclado mecanico",
      stock: 10,
      category: "periferico",
    },
    {
      id: 5,
      title: "disco ssd",
      img: "https://soyhorizonte.cohttps://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.venex.com.ar%2Fcomponentes-de-pc%2Fdiscos-solidos-ssd%2Fdisco-duro-ssd-480gb-kingston-a400-sata-iii-25.html&psig=AOvVaw2ABc2fRaP0NQGeL8g7jaxv&ust=1667433712024000&source=images&cd=vfe&ved=0CA0QjRxqFwoTCOirmuKYjvsCFQAAAAAdAAAAABAGm/wp-content/uploads/2020/10/Javascript-by-SoyHorizonte.jpg",
      price: 59,
      expired: false,
      detail: "unidad de estado solido",
      stock: 8,
      category: "insumo",
    },
    {
      id: 6,
      title: "memoria ram",
      img: "https://soyhhttps://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.gamingcity.com.ar%2FMLA-935275964-memoria-ram-ddr4-16gb-2666mhz-kingston-fury-beast-rgb-_JM&psig=AOvVaw1rpe1rVPqA6xE0WaWREmKn&ust=1667433728201000&source=images&cd=vfe&ved=0CA0QjRxqFwoTCIDv6emYjvsCFQAAAAAdAAAAABAJorizonte.com/wp-content/uploads/2020/10/Javascript-by-SoyHorizonte.jpg",
      price: 59,
      expired: true,
      detail: "DDR4 2400 mhz!",
      stock: 7,
      category: "insumo",
    },
  ];
  
  export function getUnProducto() {
    return new Promise((resolve) => {
      setTimeout(() => resolve(data), 2000);
    });
  }
  
  export function getUnProducto(idParams) {
    return new Promise((resolve) => {
      let cursoReq = data.find((item) => {
        return item.id === Number(idParams);
      });
      setTimeout(() => resolve(productoReq), 2000);
    });
  }
  
  export function getProductoByCategory(idCategoryParams) {
    return new Promise((resolve) => {
      let arrayFilterProducts = data.filter(
        (item) => item.category === idCategoryParams
      );
      setTimeout(() => resolve(arrayFilterProducts), 2000);
    });
  }