# Beta Residencial - Sistema de Ventas

Repositorio del sistema de ventas de Beta Residencial de desarrollos ISI.

Esta página es un proyecto ficticio desarrollado en HTML, SASS y JavaScript como parte de la clase de Desarrollo de Frontend.

El proyecto “Beta Residencial - Sistema de Ventas” es una aplicación web diseñada para ejemplificar el desarrollo web enfocado en JavaScript a los alumnos de la clase Diseño de Frontend. Esta aplicación permite consultar los modelos de casas de un residencial ficticio, realizar ventas de estos modelos de casas y visualizar indicadores o reportes de las ventas.

Este proyecto se encuentra en desarrollo, por lo cual la documentación presentada puede describir funcionalidad incompleta o en proceso de desarrollo.

## Requisitos del Sistema

Antes de comenzar, asegúrate de que tengas instalados los siguientes requisitos en tu sistema:

- **Node.js**: Versión 12 o superior. Puedes descargarlo desde [nodejs.org](https://nodejs.org/).
- **npm**: Versión 6 o superior. npm generalmente se instala junto con Node.js.

## Instalación del proyecto
Una vez que tengas Node.js y npm instalados, sigue estos pasos para instalar y configurar el proyecto en tu entorno de desarrollo local:

1. Clona este repositorio en tu máquina local utilizando el siguiente comando:

```bash
git clone https://github.com/janeth-montero/desarrollo-frontend-ventas.git
```

2. Navega al directorio del proyecto:

```bash
cd desarrollo-frontend-ventas
```

3. Instala las dependencias del proyecto utilizando npm (Node Package Manager):

```bash
npm install
```

4. Inicia el servidor de desarrollo, Esto abrirá automáticamente la aplicación en tu navegador web predeterminado:

```bash
npm start
```

5. Los estilos Sass se compilarán automáticamente mientras trabajas en el proyecto. No es necesario realizar ninguna acción adicional.

## Tecnologías Utilizadas

- HTML: Para la estructura de las páginas web.
- Sass: Un preprocesador CSS para estilos más eficientes.
- JavaScript: Para la lógica y la interacción del usuario.

## Estructura del proyecto

Estructura inicial del proyecto basada en componentes:

```bash

Ventas/                   # Carpeta principal del proyecto
│
├── src
│   ├── assets/           # Carpeta que almacena archivos estáticos
│   │    ├── scss/        # Carpeta para archivos de SASS
│   │    ├── css/         # Carpeta para archivos CSS compilados
│   │    └── img/         # Carpeta para images estaticas
│   │
│   │
│   ├── real-estate/      # Carpeta para el catalogo de modelos
│   │    ├── index.html   # Página HTML de modelos
│   │    └── script.js    # JavaScript específico de modelos
│   │
│   │
│   ├── sales/            # Carpeta de modulo de ventas
│   │    ├── index.html   # Página HTML de ventas
│   │    └── script.js    # JavaScript específico de ventas
│   │
│   │
│   ├── shared/           # Carpeta con recursos compartidos y de uso generico
│   │    └── utils.js     # JavaScript con funciones y utilidades genericas
│   │
│   │
│   └─── index.html       # Archivo HTML principal con home
│
│
├── README.md             # Documentación del proyecto
│
├── package.json

```

## Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo [LICENSE](LICENSE) para más detalles.

---

Proyecto desarrollado por Janeth Montero como proyecto de la clase Desarrollo Frontend. Con este proyecto se pretende adentrar a los estudiantes en los temas estudiados.
Contacto: janeth.montero@unison.mx | [LinkedIn](https://www.linkedin.com/in/janeth-montero/)
