import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_BcXkpHmz.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from '../chunks/layout_CXXIkn_1.mjs';
import { p as products, $ as $$Card } from '../chunks/product_Ce8-cTHk.mjs';
/* empty css                                */
export { renderers } from '../renderers.mjs';

const $$Catalog = createComponent(($$result, $$props, $$slots) => {
  const productList = products.map((product) => ({
    href: `/articles/${product.id}`,
    title: product.title,
    price: product.price,
    image: product.image,
    id: product.id
  }));
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1>Catalogue des Jeux Vidéo</h1> <div class="product-list"> ${productList.map((product) => renderTemplate`${renderComponent($$result2, "Card", $$Card, { "title": product.title, "source": product.image, "id": product.id })}`)} </div> ` })}`;
}, "C:/Users/phare/OneDrive/Bureau/astro test/lunar-limb/src/pages/catalog.astro", void 0);

const $$file = "C:/Users/phare/OneDrive/Bureau/astro test/lunar-limb/src/pages/catalog.astro";
const $$url = "/catalog";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Catalog,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
