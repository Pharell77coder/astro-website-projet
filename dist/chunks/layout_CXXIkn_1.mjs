import { c as createComponent, r as renderTemplate, m as maybeRenderHead, e as renderHead, a as renderComponent, f as renderSlot } from './astro/server_BcXkpHmz.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
/* empty css                        */

const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header class="header"> <div class="logo">PT Store</div> <nav class="navbar"> <a href="/">Menu</a> <a href="/catalog">Catalog</a> <a href="/cart">Panier</a> <button class="free-games">Jeux Gratuits</button> </nav> <!--<div class="search">
    <input type="text" placeholder="Recherche..." />
    <button class="fas fa-search">
    </button>
  </div>
  <div class="profile_menu">
    <a href="/">Fr</a>
    <a class="fas fa-user" href="/profile"></a>
    <a class="fas fa-heart" href="/wishlist"></a>
    <a class="fas fa-cart" href="/cart"></a>
  </div>--> </header>`;
}, "C:/Users/phare/OneDrive/Bureau/astro test/lunar-limb/src/components/header.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer class="footer"> <div class="container"> <div class="footer__section"> <h3 class="footer__title">VG Store</h3> </div> <div class="footer__section"> <h4 class="footer__heading">Purchase & Payment</h4> <ul class="footer__list"> <li>Purchase & Delivery</li> <li>Support Hub</li> <li>Steam Game Activation</li> <li>Payment</li> </ul> </div> <div class="footer__section"> <h4 class="footer__heading">Information</h4> <ul class="footer__list"> <li>About us</li> <li>News</li> <li>Blog</li> <li>Cashback</li> <li>Happy Hour</li> <li>Free Games</li> </ul> </div> <div class="footer__section"> <h4 class="footer__heading">Contact</h4> <ul class="footer__list"> <li>+48 000 000 000</li> <li>support@vgs.com</li> <li>inform@vgs.com</li> </ul> <div class="footer__icons"> <a class="fab fa-facebook-square" href="/profile"></a> <a class="fab fa-instagram" href="/profile"></a> <a class="fab fa-youtube" href="/profile"></a> <a class="fab fa-twitter" href="/profile"></a> </div> </div> </div> <div class="footer__bottom"> <p>&copy; 2024 Pharell Gaming Store | All rights reserved.</p> </div> </footer>`;
}, "C:/Users/phare/OneDrive/Bureau/astro test/lunar-limb/src/components/footer.astro", void 0);

const $$Layout = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<html lang="fr"> <head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="author" content="Pharell"><title>Vente de Jeux Vidéo</title><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css"><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins&display=swap"><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">${renderHead()}</head> <body> ${renderComponent($$result, "Header", $$Header, {})} <main> ${renderSlot($$result, $$slots["default"])} </main> ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "C:/Users/phare/OneDrive/Bureau/astro test/lunar-limb/src/layouts/layout.astro", void 0);

export { $$Layout as $ };
