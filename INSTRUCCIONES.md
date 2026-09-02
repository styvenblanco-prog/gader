# Instrucciones de Gader

## Actualizar el catálogo

1. Abre `index.html` y busca el comentario `Edita nombre, precio, imagen y disponibilidad`.
2. En cada `article.product-card`, actualiza el nombre visible, la categoría, el precio y los atributos `data-product` y `data-price`.
3. Para sustituir un placeholder, cambia el contenido de `.product-image` por una imagen optimizada:

```html
<picture>
  <source srcset="images/curren-blue.webp" type="image/webp">
  <img src="images/curren-blue.jpg" alt="Reloj Curren Chronograph Blue en color azul">
</picture>
```

Usa WebP de aproximadamente 1200 px de ancho y procura que cada archivo pese menos de 150 KB. Conserva siempre un `alt` descriptivo. Ajusta el nombre y el precio en el enlace para que WhatsApp envíe la información correcta.

## Probar localmente

El sitio no necesita compilación. Puedes abrir `index.html` directamente en el navegador. Para probarlo con un servidor local:

```bash
python3 -m http.server 8080
```

Visita `http://localhost:8080`.

## Desplegar

- **Netlify:** arrastra la carpeta del proyecto a Netlify o conecta el repositorio. No requiere build command; deja el publish directory vacío o usa `.`.
- **Vercel:** importa el repositorio, selecciona `Other` como framework y deja los comandos de build vacíos. La carpeta raíz es el directorio de publicación.
- **Dominio:** configura el dominio personalizado desde el panel del proveedor. No hay claves API ni variables de entorno requeridas.

## Personalización

El teléfono de WhatsApp está en `js/main.js` y también en los enlaces del HTML, usando el formato internacional `584124898929`. Cambia ambos lugares si el número cambia. Las redes sociales y horarios están en la sección de contacto y entregas de `index.html`.