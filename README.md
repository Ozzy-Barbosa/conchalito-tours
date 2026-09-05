# Conchalito Tours

Sitio oficial de Conchalito Tours para recorridos en lancha desde La Paz, Baja California Sur, hacia Balandra e Isla Espíritu Santo.

## Sitio y dominio

- Dominio principal: [conchalitotours.com](https://conchalitotours.com)
- Tarjeta digital no enlazada: `/tarjeta/capitan-hector-parra`
- Sitemap: `/sitemap.xml`
- Robots: `/robots.txt`

Todas las URL canónicas, datos estructurados, sitemap, tarjeta digital y código QR están preparados para `https://conchalitotours.com`.

## Desarrollo

Requiere Node.js 22 o posterior.

```bash
npm ci
npm run dev
```

Para comprobar la versión de producción:

```bash
npm run build
```

## Publicación en GitHub

El repositorio no incluye dependencias, archivos generados, configuraciones locales ni secretos. La automatización de GitHub verifica cada cambio y cada propuesta de cambio ejecutando una construcción completa.

Después de crear un repositorio privado vacío en GitHub:

```bash
git remote add origin https://github.com/USUARIO/conchalito-tours.git
git push -u origin main
```

## Conexión del dominio

El dominio está administrado en GoDaddy. Cuando se elija el alojamiento definitivo:

1. Agregar el dominio `conchalitotours.com` en el proveedor de alojamiento.
2. Copiar exactamente los registros DNS que entregue el proveedor en GoDaddy.
3. Configurar `www.conchalitotours.com` para redirigir al dominio principal.
4. Confirmar que HTTPS esté activo.
5. Verificar Google Search Console y enviar `https://conchalitotours.com/sitemap.xml`.

No deben cambiarse los registros DNS hasta que el proveedor entregue sus valores definitivos.

## SEO incluido

- Títulos y descripciones orientados a Balandra, Isla Espíritu Santo y La Paz.
- URL canónica en el dominio oficial.
- Datos estructurados de agencia turística, ubicación, contacto y Capitán Héctor Parra.
- Sitemap y robots configurados.
- Metadatos para compartir el sitio.
- Tarjeta digital excluida del sitemap y marcada para no indexarse.

## Contacto del negocio

- Capitán Héctor Parra
- WhatsApp: +52 612 117 8086
- Correo: toursespiritusanto@gmail.com
