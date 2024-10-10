import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_BcXkpHmz.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from '../chunks/layout_CXXIkn_1.mjs';
/* empty css                                */
/* empty css                                */
export { renderers } from '../renderers.mjs';

const $$Cart = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "data-astro-cid-h3zw4u6d": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1 data-astro-cid-h3zw4u6d>Votre Panier</h1> <div id="cart" class="cart" data-astro-cid-h3zw4u6d> <div id="cart-items" class="cart-items" data-astro-cid-h3zw4u6d></div> <div id="cart-total" class="cart-total" data-astro-cid-h3zw4u6d> <h3 data-astro-cid-h3zw4u6d>Total: $0</h3> </div> </div> ` })}  `;
}, "C:/Users/phare/OneDrive/Bureau/astro test/lunar-limb/src/pages/cart.astro", void 0);

const $$file = "C:/Users/phare/OneDrive/Bureau/astro test/lunar-limb/src/pages/cart.astro";
const $$url = "/cart";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Cart,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
