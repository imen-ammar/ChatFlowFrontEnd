'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">chat-flow-front-end documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-161f73e081546c60366237a3c43aa4d8f9e59d5698786cfe3e1637c53d03885fbca485f0ecf827e64051e73b9515d31033033fa8627216cdf85e943514dfae01"' : 'data-target="#xs-components-links-module-AppModule-161f73e081546c60366237a3c43aa4d8f9e59d5698786cfe3e1637c53d03885fbca485f0ecf827e64051e73b9515d31033033fa8627216cdf85e943514dfae01"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-161f73e081546c60366237a3c43aa4d8f9e59d5698786cfe3e1637c53d03885fbca485f0ecf827e64051e73b9515d31033033fa8627216cdf85e943514dfae01"' :
                                            'id="xs-components-links-module-AppModule-161f73e081546c60366237a3c43aa4d8f9e59d5698786cfe3e1637c53d03885fbca485f0ecf827e64051e73b9515d31033033fa8627216cdf85e943514dfae01"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/CanalModule.html" data-type="entity-link" >CanalModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-CanalModule-a981933edc673ffb6335c9c502d61f07656377fa76950e0ee9be16def7939ace5c460ec0b781d7350dbeb0056af7c9239541b35fa18a036cba9f517169b7ea6e"' : 'data-target="#xs-components-links-module-CanalModule-a981933edc673ffb6335c9c502d61f07656377fa76950e0ee9be16def7939ace5c460ec0b781d7350dbeb0056af7c9239541b35fa18a036cba9f517169b7ea6e"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-CanalModule-a981933edc673ffb6335c9c502d61f07656377fa76950e0ee9be16def7939ace5c460ec0b781d7350dbeb0056af7c9239541b35fa18a036cba9f517169b7ea6e"' :
                                            'id="xs-components-links-module-CanalModule-a981933edc673ffb6335c9c502d61f07656377fa76950e0ee9be16def7939ace5c460ec0b781d7350dbeb0056af7c9239541b35fa18a036cba9f517169b7ea6e"' }>
                                            <li class="link">
                                                <a href="components/CanalComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CanalComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PageAjouterCanalComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PageAjouterCanalComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PageListCanalComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PageListCanalComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PageModifierCanalComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PageModifierCanalComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PageSupprimerCanalComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PageSupprimerCanalComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/CanalRoutingModule.html" data-type="entity-link" >CanalRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/CoreModule.html" data-type="entity-link" >CoreModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-CoreModule-88c7ee00c99b52e62199f30c80c8fae29cb5d2d46fe723072b511fc629782dd45c8989c8e9962fb3968b83fd057af41e2800ae955f80da22923dbb062665e778"' : 'data-target="#xs-components-links-module-CoreModule-88c7ee00c99b52e62199f30c80c8fae29cb5d2d46fe723072b511fc629782dd45c8989c8e9962fb3968b83fd057af41e2800ae955f80da22923dbb062665e778"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-CoreModule-88c7ee00c99b52e62199f30c80c8fae29cb5d2d46fe723072b511fc629782dd45c8989c8e9962fb3968b83fd057af41e2800ae955f80da22923dbb062665e778"' :
                                            'id="xs-components-links-module-CoreModule-88c7ee00c99b52e62199f30c80c8fae29cb5d2d46fe723072b511fc629782dd45c8989c8e9962fb3968b83fd057af41e2800ae955f80da22923dbb062665e778"' }>
                                            <li class="link">
                                                <a href="components/FormMessageComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FormMessageComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HeaderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HeaderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NavComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NavComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/IconsModule.html" data-type="entity-link" >IconsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-IconsModule-9674b24d5d938b227d357fba17700d326c4396fc3b6ee8de36c4341a10585178cde37dab6b417a0b9532a0aba42aad352fd60f9d2244ea4c4bce963d415543af"' : 'data-target="#xs-components-links-module-IconsModule-9674b24d5d938b227d357fba17700d326c4396fc3b6ee8de36c4341a10585178cde37dab6b417a0b9532a0aba42aad352fd60f9d2244ea4c4bce963d415543af"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-IconsModule-9674b24d5d938b227d357fba17700d326c4396fc3b6ee8de36c4341a10585178cde37dab6b417a0b9532a0aba42aad352fd60f9d2244ea4c4bce963d415543af"' :
                                            'id="xs-components-links-module-IconsModule-9674b24d5d938b227d357fba17700d326c4396fc3b6ee8de36c4341a10585178cde37dab6b417a0b9532a0aba42aad352fd60f9d2244ea4c4bce963d415543af"' }>
                                            <li class="link">
                                                <a href="components/IconDeleteComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >IconDeleteComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/IconEditComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >IconEditComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/PageNotFoundModule.html" data-type="entity-link" >PageNotFoundModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-PageNotFoundModule-3565021c0fd2a52d4cad785ec90f36fe653d17e0456a9b151e9eec5e7ed347b0e84d66947dc1df52a39aaa585df281bb349cfa0b1f555664352542287d8880cc"' : 'data-target="#xs-components-links-module-PageNotFoundModule-3565021c0fd2a52d4cad785ec90f36fe653d17e0456a9b151e9eec5e7ed347b0e84d66947dc1df52a39aaa585df281bb349cfa0b1f555664352542287d8880cc"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-PageNotFoundModule-3565021c0fd2a52d4cad785ec90f36fe653d17e0456a9b151e9eec5e7ed347b0e84d66947dc1df52a39aaa585df281bb349cfa0b1f555664352542287d8880cc"' :
                                            'id="xs-components-links-module-PageNotFoundModule-3565021c0fd2a52d4cad785ec90f36fe653d17e0456a9b151e9eec5e7ed347b0e84d66947dc1df52a39aaa585df281bb349cfa0b1f555664352542287d8880cc"' }>
                                            <li class="link">
                                                <a href="components/PageNotFoundComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PageNotFoundComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/PageNotFoundRoutingModule.html" data-type="entity-link" >PageNotFoundRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/UiModule.html" data-type="entity-link" >UiModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-UiModule-2b9283ed4b3cb26ff85dc1d4696dcb1fa96d5dc5990d2a33c977f4fc33ea072503172935301c3286c6ad7bd0ae0d53cb745a532e3316d2c8e12c445d76ea1809"' : 'data-target="#xs-components-links-module-UiModule-2b9283ed4b3cb26ff85dc1d4696dcb1fa96d5dc5990d2a33c977f4fc33ea072503172935301c3286c6ad7bd0ae0d53cb745a532e3316d2c8e12c445d76ea1809"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-UiModule-2b9283ed4b3cb26ff85dc1d4696dcb1fa96d5dc5990d2a33c977f4fc33ea072503172935301c3286c6ad7bd0ae0d53cb745a532e3316d2c8e12c445d76ea1809"' :
                                            'id="xs-components-links-module-UiModule-2b9283ed4b3cb26ff85dc1d4696dcb1fa96d5dc5990d2a33c977f4fc33ea072503172935301c3286c6ad7bd0ae0d53cb745a532e3316d2c8e12c445d76ea1809"' }>
                                            <li class="link">
                                                <a href="components/UiComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UiComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/Canal.html" data-type="entity-link" >Canal</a>
                            </li>
                            <li class="link">
                                <a href="classes/Message.html" data-type="entity-link" >Message</a>
                            </li>
                            <li class="link">
                                <a href="classes/Utilisateur.html" data-type="entity-link" >Utilisateur</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/CanalService.html" data-type="entity-link" >CanalService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/CanalI.html" data-type="entity-link" >CanalI</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});