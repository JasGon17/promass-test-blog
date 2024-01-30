This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

Examen programador React

Se necesita desarrollar una aplicación en React que posea un conjunto reducido de
características propias de un Blog de Internet.
La funcionalidad que deberá de proveer será la siguiente:
Alta de entradas
    ● El usuario podrá guardar entradas en el sitio. Una entrada deberá estar
compuesta por los siguientes elementos:
    ○ Título: enuncia el contenido de la entrada.
    ○ Autor: el nombre de quien publica la entrada
    ○ Fecha de publicación: la fecha en que la entrada fue guardada.
    ○ Contenido: un escrito breve.
(Todos los campos son obligatorios)
Mostrar un listado de entradas
    ● Deberá de mostrar un listado con todas las entradas en el blog, pero del campo
contenido, sólo se mostrarán los primeros setenta caracteres.
Búsquedas
    ● La aplicación debe permitir realizar búsquedas de entradas permitiendo filtrar por
título, contenido o autor.
Mostrar detalle de una entrada.
    ● Al seleccionar una entrada del listado, deberá mostrarse el contenido de la
entrada. Es decir, deberá ser visible todo el texto del contenido.
Obtención de recursos
    ● La obtención de los datos se hará por medio de un servicio REST que la
aplicación web debe consumir. Este proporcionará los métodos necesarios para
consultar y guardar las entradas del sitio a través de internet en un servidor.
Extra - Modo offline
    ● En caso de que el dispositivo no cuente con conexión a internet, el sistema web
deberá de tomar los siguientes puntos:
    ○ La aplicación permitirá ver las entradas que se hayan descargado
previamente.
    ○ Se bloqueará la opción de dar alta entradas.
    ○ Se mostrará un mensaje de que no se tiene conexión a internet.

Que se evalúa:
    ● Qué se cumpla con todo lo mencionado.
    ○ La sección Extra es un "plus" en la evaluación.
    ● Que la interfaz sea de acuerdo a la plataforma web.
    ● Que la base de datos esté en SQL.
    ● Que utilice herramientas para mejorar su trabajo: Control de versiones, README,
gestión de dependencias, uso de librerías de terceros, etc.
    ● Calidad del código.
    ● Tiempo en desarrollo.
El código fuente de la aplicación de React y el servicio web deberás de compartirlo con sus instrucciones de instalación para poderlo revisar en nuestros equipos de manera local.
