// class DetailsDisclosure extends HTMLElement {
//   constructor() {
//     super();
//     this.mainDetailsToggle = this.querySelector('details');
//     this.content = this.mainDetailsToggle.querySelector('summary').nextElementSibling;

//     this.mainDetailsToggle.addEventListener('focusout', this.onFocusOut.bind(this));
//     this.mainDetailsToggle.addEventListener('toggle', this.onToggle.bind(this));
//   }

//   onFocusOut() {
//     setTimeout(() => {
//       if (!this.contains(document.activeElement)) this.close();
//     });
//   }

//   onToggle() {
//     if (!this.animations) this.animations = this.content.getAnimations();

//     if (this.mainDetailsToggle.hasAttribute('open')) {
//       this.animations.forEach((animation) => animation.play());
//     } else {
//       this.animations.forEach((animation) => animation.cancel());
//     }
//   }

//   close() {
//     this.mainDetailsToggle.removeAttribute('open');
//     this.mainDetailsToggle.querySelector('summary').setAttribute('aria-expanded', false);
//   }
// }

// customElements.define('details-disclosure', DetailsDisclosure);

// class HeaderMenu extends DetailsDisclosure {
//   constructor() {
//     super();
//     this.header = document.querySelector('.header-wrapper');
//   }

//   onToggle() {
//     if (!this.header) return;
//     this.header.preventHide = this.mainDetailsToggle.open;

//     if (document.documentElement.style.getPropertyValue('--header-bottom-position-desktop') !== '') return;
//     document.documentElement.style.setProperty(
//       '--header-bottom-position-desktop',
//       `${Math.floor(this.header.getBoundingClientRect().bottom)}px`
//     );
//   }
// }

// customElements.define('header-menu', HeaderMenu);
class DetailsDisclosure extends HTMLElement {
  constructor() {
    super();
    this.mainDetailsToggle = this.querySelector('details');
    this.content = this.mainDetailsToggle.querySelector('summary').nextElementSibling;

    this.mainDetailsToggle.addEventListener('focusout', this.onFocusOut.bind(this));
    this.mainDetailsToggle.addEventListener('toggle', this.onToggle.bind(this));
  }

  onFocusOut() {
    setTimeout(() => {
      if (!this.contains(document.activeElement)) this.close();
    });
  }

  onToggle() {
    if (!this.animations) this.animations = this.content.getAnimations();

    if (this.mainDetailsToggle.hasAttribute('open')) {
      this.animations.forEach((animation) => animation.play());
    } else {
      this.animations.forEach((animation) => animation.cancel());
    }
  }

  close() {
    this.mainDetailsToggle.removeAttribute('open');
    this.mainDetailsToggle.querySelector('summary').setAttribute('aria-expanded', false);
  }
}

customElements.define('details-disclosure', DetailsDisclosure);

class HeaderMenu extends DetailsDisclosure {
  constructor() {
    super();
    this.header = document.querySelector('.header-wrapper');
  }

  onToggle() {
    if (!this.header) return;
    this.header.preventHide = this.mainDetailsToggle.open;

    if (document.documentElement.style.getPropertyValue('--header-bottom-position-desktop') !== '') return;
    document.documentElement.style.setProperty(
      '--header-bottom-position-desktop',
      `${Math.floor(this.header.getBoundingClientRect().bottom)}px`
    );
  }
}

customElements.define('header-menu', HeaderMenu);

class MegaMenu extends HTMLElement {
  constructor() {
    super();
    this.menuContainers = document.querySelectorAll('.mega-menu, .default-menu');
    this.init();
  }

  init() {
    // Open menu on mouseenter
    document.querySelectorAll('.header__menu-item').forEach((menuItem) => {
      menuItem.addEventListener('mouseenter', () => this.handleMenuEnter(menuItem));
    });

    // Close menu when mouse leaves the whole menu area
    this.menuContainers.forEach((menu) => {
      menu.addEventListener('mouseleave', () => {
        menu.removeAttribute('open');
        const menuItem = menu.querySelector('.header__menu-item');
        if (menuItem) {
          menuItem.setAttribute('aria-expanded', 'false');
        }
      });
    });
  }

  handleMenuEnter(menuItem) {
    const parentMenu = menuItem.closest('.mega-menu, .default-menu');

    // Close all other menus
    this.menuContainers.forEach((otherMenu) => {
      if (otherMenu !== parentMenu) {
        otherMenu.removeAttribute('open');
        const otherItem = otherMenu.querySelector('.header__menu-item');
        if (otherItem) {
          otherItem.setAttribute('aria-expanded', 'false');
        }
      }
    });

    // Open the current menu
    if (parentMenu) {
      parentMenu.setAttribute('open', '');
      menuItem.setAttribute('aria-expanded', 'true');
    }
  }
}

customElements.define('mega-menu', MegaMenu);
