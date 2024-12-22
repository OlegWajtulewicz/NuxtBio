import { AppLayoutsEnum, AppLayoutToFileMap } from "@/layouts/layouts.types";

export async function loadLayoutMiddleware(route) {
  const { layout } = route.meta;
  const normalizedLayoutName = layout || AppLayoutsEnum.default;
  const fileName = AppLayoutToFileMap[normalizedLayoutName];
  const fileNameWithoutExtension = fileName.split(".vue")[0];

  const component = await import(`../../layouts/${fileNameWithoutExtension}.vue`);
  route.meta.layoutComponent = component.default;
}


// export async function loadLayoutMiddleware(route) {
//   const { layout } = route.meta;
//   const layoutName = layout || 'defaultLayout'; // Если макет не указан, используем defaultLayout

//   try {
//     // Загрузка компонента макета
//     const layoutComponent = await import(`@/layouts/${layoutName}.vue`);
//     route.meta.layoutComponent = layoutComponent.default; // Сохранение компонента макета в meta
//   } catch (error) {
//     console.error(`Ошибка загрузки макета: ${layoutName}`, error);
//     route.meta.layoutComponent = null; // В случае ошибки — устанавливаем пустой макет
//   }
// }
