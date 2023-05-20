const productos = [
      {
         nombre: "Mutant Mass Star Nutrition 1,5kg",
         precio: 5400,
         id: "1",
         img: "../src/assets/mutant-mass-star-nutrition.jpeg",
         descripcion: "Gainer para aumentar la masa muscular y el peso corporal.",
         disponibilidad: true,
         detalles_nutricionales: {
         calorias: 350,
         proteina: 40,
         carbohidratos: 40,
         grasas: 5
         },
         beneficios_salud: [
         "Aumento de la masa muscular",
         "Mejora la recuperación post-entrenamiento",
         "Aporte calórico extra para personas con dificultad para subir de peso"
         ]
         ,idCat: "2"
      },
      {
         nombre: "Pre-entreno Pump 3D Star Nutrition",
         precio: 5400,
         id: "2",
         img: "../src/assets/pre-entreno-star-nutrition.jpeg",
         descripcion: "Fórmula pre-entrenamiento para aumentar la energía y el rendimiento físico durante el ejercicio.",
         disponibilidad: true,
         detalles_nutricionales: {
         calorias: 10,
         proteina: 0,
         carbohidratos: 2,
         grasas: 0
         },
         beneficios_salud: [
         "Aumento de la energía",
         "Mejora el rendimiento y la resistencia física",
         "Estimula la concentración y el enfoque mental"
         ]
         ,idCat: "3"
      },
      {
         nombre: "Whey X Pro ENA 930gr",
         precio: 7700,
         id: "3",
         img: "../src/assets/whey-x-pro-ena.jpeg",
         descripcion: "Polvo de proteína de suero de leche para mejorar el crecimiento y la recuperación muscular.",
         disponibilidad: true,
         detalles_nutricionales: {
         calorias: 120,
         proteina: 24,
         carbohidratos: 3,
         grasas: 1
         },
         beneficios_salud: [
         "Promueve el crecimiento muscular",
         "Acelera la recuperación después del ejercicio",
         "Fortalece el sistema inmunológico"
         ],
         idCat: "2"
      },
      {
         nombre: "Barritas ENA 16 Unidades",
         precio: 4200,
         id: "4",
         img: "../src/assets/barritas-ena.jpeg",
         descripcion: "Barritas de proteína para un snack nutritivo y fácil de llevar a cualquier parte.",
         disponibilidad: true,
         detalles_nutricionales: {
         calorias: 220,
         proteina: 20,
         carbohidratos: 18,
         grasas: 7
         },
         beneficios_salud: [
         "Proporciona energía sostenida",
         "Ayuda en la recuperación muscular",
         "Alternativa saludable a los snacks tradicionales"
         ]
         ,idCat: "2"
      },
      {
         id: "5",
         nombre: "Creatina Star 300gr",
         precio: 10300,
         img: "../src/assets/creatina-star-300gr.jpeg",
         descripcion: "Polvo de creatina para mejorar la fuerza y el rendimiento físico durante el ejercicio.",
         disponibilidad: true,
         detalles_nutricionales: {
            "calorias": 0,
            "proteina": 0,
            "carbohidratos": 0,
            "grasas": 0
         },
         beneficios_salud: [
            "Aumenta la fuerza y la potencia muscular",
            "Mejora la resistencia y el rendimiento",
            "Favorece la recuperación entre series y ejercicios"
         ],
         idCat: "4"
         },
         {
         id: "6",
         nombre: "Creatina Star 150gr",
         precio: 7500,
         img: "../src/assets/creatina-star-150gr.jpeg",
         descripcion: "Polvo de creatina para mejorar la fuerza y el rendimiento físico durante el ejercicio.",
         disponibilidad: true,
         detalles_nutricionales: {
            "calorias": 0,
            "proteina": 0,
            "carbohidratos": 0,
            "grasas": 0
         },
         beneficios_salud: [
            "Aumenta la fuerza y la potencia muscular",
            "Mejora la resistencia y el rendimiento",
            "Favorece la recuperación entre series y ejercicios"
         ],
         idCat: "4"
         },
         {
         id: "7",
         nombre: "Creatina Gold Nutrition 300gr",
         precio: 10150,
         img: "../src/assets/creatina-gold-nutrition.jpeg",
         descripcion: "Polvo de creatina para mejorar la fuerza y el rendimiento físico durante el ejercicio.",
         disponibilidad: true,
         detalles_nutricionales: {
            calorias: 0,
            proteina: 0,
            carbohidratos: 0,
            grasas: 0
         },
         beneficios_salud: [
            "Aumenta la fuerza y la potencia muscular",
            "Mejora la resistencia y el rendimiento",
            "Favorece la recuperación entre series y ejercicios"
         ]
         ,idCat: "4"
         },
   ];        
   
export const getProductos = () => {

      return new Promise( (resolve)  => {
         setTimeout( ()=> {
            resolve(productos);
         }, 2000)
      })
   }

//creamos funcion que retorne un solo producto

export const getUnProducto = (id) => {
   return new Promise(resolve => {
      setTimeout( ()=>{
         const producto = productos.find(prod => prod.id === id);
         resolve(producto);
   }, 2000)
})
}

//reorna los productos de determinada categoria

export const getProductosPorCategoria = (idCategoria)=>{
   return new Promise (resolve=> {
      setTimeout( ()=>{
         const productosCategoria = productos.filter(prod => prod.idCat=== idCategoria);
         resolve(productosCategoria);
      }, 2000)
   })
}