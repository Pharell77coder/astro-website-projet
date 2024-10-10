import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_BcXkpHmz.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from '../chunks/layout_CXXIkn_1.mjs';
/* empty css                                */
import { p as products, $ as $$Card } from '../chunks/product_Ce8-cTHk.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1>Bienvenue sur notre boutique de jeux vidéo</h1> <p>Découvrez les meilleurs jeux du moment !</p> <div class="products__containers"> ${products.slice(0, 4).map((product) => renderTemplate`${renderComponent($$result2, "Card", $$Card, { "title": product.title, "source": product.image, "id": product.id })}`)} </div> ` })}`;
}, "C:/Users/phare/OneDrive/Bureau/astro test/lunar-limb/src/pages/index.astro", void 0);

const $$file = "C:/Users/phare/OneDrive/Bureau/astro test/lunar-limb/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
