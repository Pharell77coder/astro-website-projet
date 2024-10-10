import { c as createComponent, r as renderTemplate, a as renderComponent, b as createAstro, m as maybeRenderHead, d as addAttribute } from '../../chunks/astro/server_BcXkpHmz.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from '../../chunks/layout_CXXIkn_1.mjs';
/* empty css                                   */
/* empty css                                   */
import { p as products, $ as $$Card } from '../../chunks/product_Ce8-cTHk.mjs';
export { renderers } from '../../renderers.mjs';

JSON.parse(localStorage.getItem("cart") || "[]");

const $$Astro = createAstro();
async function getStaticPaths() {
  return products.map((product) => ({
    params: { id: product.id.toString() },
    props: { product }
  }));
}
const $$id = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const { product } = Astro2.props;
  if (!product) {
    throw new Error(`Article ${product} non trouv\xE9`);
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="product__card"> <div class="product__card__containers"> <div class="product__card__containers__content"> ${renderComponent($$result2, "Card", $$Card, { "title": product.title, "source": product.image })} </div> <div class="product__card__containers__content"> <p>${product.description}</p> <button${addAttribute(`addToCart(${product.id}, "${product.title}", ${product.price})`, "onclick")}><p>${product.price} $ </p></button> </div> </div> <iframe${addAttribute(product.video, "src")}${addAttribute(`${product.title} video`, "title")} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> <a href="/">Retour à la liste des articles</a> </div> ` })}`;
}, "C:/Users/phare/OneDrive/Bureau/astro test/lunar-limb/src/pages/products/[id].astro", void 0);

const $$file = "C:/Users/phare/OneDrive/Bureau/astro test/lunar-limb/src/pages/products/[id].astro";
const $$url = "/products/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$id,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
