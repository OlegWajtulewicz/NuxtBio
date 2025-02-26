export default async function handler(request, context) {
  const url = new URL(request.url);
  const path = url.pathname.replace('/.netlify/proxy/', '');
  
  // Определяем Content-Type на основе расширения файла
  const ext = path.split('.').pop().toLowerCase();
  const contentTypes = {
    'js': 'application/javascript',
    'css': 'text/css',
    'woff': 'font/woff',
    'woff2': 'font/woff2',
    'ttf': 'font/ttf',
    'eot': 'application/vnd.ms-fontobject',
    'svg': 'image/svg+xml',
    'png': 'image/png',
    'jpg': 'image/jpeg',
    'jpeg': 'image/jpeg'
  };

  const response = await context.next();
  const headers = new Headers(response.headers);
  
  if (contentTypes[ext]) {
    headers.set('Content-Type', contentTypes[ext]);
  }
  
  headers.set('Cache-Control', 'public, max-age=31536000, immutable');
  
  return new Response(response.body, {
    status: response.status,
    headers
  });
} 