"use strict";

new TypeIt(".home__title--strong", {
  loop: true,
  speed: 80,
})
  .move(-29)
  .type("Amazing ")
  .pause(1000)
  .move(null, { to: "END" })
  .delete()
  .type("Growing Developer")
  .pause(1000)
  .delete()
  .go();
