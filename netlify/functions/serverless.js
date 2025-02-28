export default async (req, context) => {
  const url = new URL(req.url);
  const path = url.pathname;

  // Если запрос к _nuxt директории
  if (path.startsWith('/_nuxt/')) {
    const response = await context.next();
    const headers = new Headers(response.headers);
    
    // Устанавливаем правильные заголовки для статических файлов
    headers.set('Cache-Control', 'public, max-age=31536000, immutable');
    
    // Определяем Content-Type на основе расширения
    const ext = path.split('.').pop().toLowerCase();
    const contentTypes = {
      'js': 'application/javascript',
      'css': 'text/css',
      'woff': 'font/woff',
      'woff2': 'font/woff2',
      'ttf': 'font/ttf',
      'svg': 'image/svg+xml',
      'png': 'image/png',
      'jpg': 'image/jpeg',
      'jpeg': 'image/jpeg'
    };

    if (contentTypes[ext]) {
      headers.set('Content-Type', contentTypes[ext]);
    }

    return new Response(response.body, {
      status: response.status,
      headers
    });
  }

  // Для остальных запросов возвращаем index.html
  return context.next();
} 