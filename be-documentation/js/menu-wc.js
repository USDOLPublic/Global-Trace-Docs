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
                    <a href="index.html" data-type="index-link">Global Trace BE documentation</a>
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
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AppModule-f3682a2876e809c092da9f5ed43e71168e8ecb258bb26770289f7e9c968f3c08365e7ebc36599029a3a502551afec60d22f1472907df170cd1b674e6478c34b8"' : 'data-bs-target="#xs-controllers-links-module-AppModule-f3682a2876e809c092da9f5ed43e71168e8ecb258bb26770289f7e9c968f3c08365e7ebc36599029a3a502551afec60d22f1472907df170cd1b674e6478c34b8"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-f3682a2876e809c092da9f5ed43e71168e8ecb258bb26770289f7e9c968f3c08365e7ebc36599029a3a502551afec60d22f1472907df170cd1b674e6478c34b8"' :
                                            'id="xs-controllers-links-module-AppModule-f3682a2876e809c092da9f5ed43e71168e8ecb258bb26770289f7e9c968f3c08365e7ebc36599029a3a502551afec60d22f1472907df170cd1b674e6478c34b8"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/BusinessPartnerModule.html" data-type="entity-link" >BusinessPartnerModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-BusinessPartnerModule-1578d7ce8bd778996a643ce7e778e19ad2949e6e6f3b3cdb5692970112376c311a62daac250d17b4e210845befb6504522686378ea5af1c17f022dc2992c1936"' : 'data-bs-target="#xs-controllers-links-module-BusinessPartnerModule-1578d7ce8bd778996a643ce7e778e19ad2949e6e6f3b3cdb5692970112376c311a62daac250d17b4e210845befb6504522686378ea5af1c17f022dc2992c1936"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-BusinessPartnerModule-1578d7ce8bd778996a643ce7e778e19ad2949e6e6f3b3cdb5692970112376c311a62daac250d17b4e210845befb6504522686378ea5af1c17f022dc2992c1936"' :
                                            'id="xs-controllers-links-module-BusinessPartnerModule-1578d7ce8bd778996a643ce7e778e19ad2949e6e6f3b3cdb5692970112376c311a62daac250d17b4e210845befb6504522686378ea5af1c17f022dc2992c1936"' }>
                                            <li class="link">
                                                <a href="controllers/BrokerController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BrokerController</a>
                                            </li>
                                            <li class="link">
                                                <a href="controllers/PartnerController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PartnerController</a>
                                            </li>
                                            <li class="link">
                                                <a href="controllers/TransporterController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TransporterController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-BusinessPartnerModule-1578d7ce8bd778996a643ce7e778e19ad2949e6e6f3b3cdb5692970112376c311a62daac250d17b4e210845befb6504522686378ea5af1c17f022dc2992c1936"' : 'data-bs-target="#xs-injectables-links-module-BusinessPartnerModule-1578d7ce8bd778996a643ce7e778e19ad2949e6e6f3b3cdb5692970112376c311a62daac250d17b4e210845befb6504522686378ea5af1c17f022dc2992c1936"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-BusinessPartnerModule-1578d7ce8bd778996a643ce7e778e19ad2949e6e6f3b3cdb5692970112376c311a62daac250d17b4e210845befb6504522686378ea5af1c17f022dc2992c1936"' :
                                        'id="xs-injectables-links-module-BusinessPartnerModule-1578d7ce8bd778996a643ce7e778e19ad2949e6e6f3b3cdb5692970112376c311a62daac250d17b4e210845befb6504522686378ea5af1c17f022dc2992c1936"' }>
                                        <li class="link">
                                            <a href="injectables/BrokerPartnerService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BrokerPartnerService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/BusinessPartnerService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BusinessPartnerService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/TransporterPartnerService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TransporterPartnerService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/CalculateFieldModule.html" data-type="entity-link" >CalculateFieldModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-CalculateFieldModule-f7a5c43d7a6e3a62e63bcbe95d346602ae4f99aafd24625f139e71d7445df0154905e0cc0196c5cfb1536e3d22bd8b9113552b43278ff76a6b29e6aa16a0ebf3"' : 'data-bs-target="#xs-controllers-links-module-CalculateFieldModule-f7a5c43d7a6e3a62e63bcbe95d346602ae4f99aafd24625f139e71d7445df0154905e0cc0196c5cfb1536e3d22bd8b9113552b43278ff76a6b29e6aa16a0ebf3"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-CalculateFieldModule-f7a5c43d7a6e3a62e63bcbe95d346602ae4f99aafd24625f139e71d7445df0154905e0cc0196c5cfb1536e3d22bd8b9113552b43278ff76a6b29e6aa16a0ebf3"' :
                                            'id="xs-controllers-links-module-CalculateFieldModule-f7a5c43d7a6e3a62e63bcbe95d346602ae4f99aafd24625f139e71d7445df0154905e0cc0196c5cfb1536e3d22bd8b9113552b43278ff76a6b29e6aa16a0ebf3"' }>
                                            <li class="link">
                                                <a href="controllers/CalculateFieldController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CalculateFieldController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-CalculateFieldModule-f7a5c43d7a6e3a62e63bcbe95d346602ae4f99aafd24625f139e71d7445df0154905e0cc0196c5cfb1536e3d22bd8b9113552b43278ff76a6b29e6aa16a0ebf3"' : 'data-bs-target="#xs-injectables-links-module-CalculateFieldModule-f7a5c43d7a6e3a62e63bcbe95d346602ae4f99aafd24625f139e71d7445df0154905e0cc0196c5cfb1536e3d22bd8b9113552b43278ff76a6b29e6aa16a0ebf3"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-CalculateFieldModule-f7a5c43d7a6e3a62e63bcbe95d346602ae4f99aafd24625f139e71d7445df0154905e0cc0196c5cfb1536e3d22bd8b9113552b43278ff76a6b29e6aa16a0ebf3"' :
                                        'id="xs-injectables-links-module-CalculateFieldModule-f7a5c43d7a6e3a62e63bcbe95d346602ae4f99aafd24625f139e71d7445df0154905e0cc0196c5cfb1536e3d22bd8b9113552b43278ff76a6b29e6aa16a0ebf3"' }>
                                        <li class="link">
                                            <a href="injectables/CalculateFieldService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CalculateFieldService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/CapModule.html" data-type="entity-link" >CapModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-CapModule-8fc7a7a23dbe62d36eb33ba8894c3735b50eb2079f0c7a6dfdadced627624a01f12a6b695f4f2ad04c32af5e3bfcbee348a38b9146dc8098d9d10a7ca0af23c7"' : 'data-bs-target="#xs-controllers-links-module-CapModule-8fc7a7a23dbe62d36eb33ba8894c3735b50eb2079f0c7a6dfdadced627624a01f12a6b695f4f2ad04c32af5e3bfcbee348a38b9146dc8098d9d10a7ca0af23c7"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-CapModule-8fc7a7a23dbe62d36eb33ba8894c3735b50eb2079f0c7a6dfdadced627624a01f12a6b695f4f2ad04c32af5e3bfcbee348a38b9146dc8098d9d10a7ca0af23c7"' :
                                            'id="xs-controllers-links-module-CapModule-8fc7a7a23dbe62d36eb33ba8894c3735b50eb2079f0c7a6dfdadced627624a01f12a6b695f4f2ad04c32af5e3bfcbee348a38b9146dc8098d9d10a7ca0af23c7"' }>
                                            <li class="link">
                                                <a href="controllers/CapCommentController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CapCommentController</a>
                                            </li>
                                            <li class="link">
                                                <a href="controllers/CapController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CapController</a>
                                            </li>
                                            <li class="link">
                                                <a href="controllers/FacilityCapController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FacilityCapController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-CapModule-8fc7a7a23dbe62d36eb33ba8894c3735b50eb2079f0c7a6dfdadced627624a01f12a6b695f4f2ad04c32af5e3bfcbee348a38b9146dc8098d9d10a7ca0af23c7"' : 'data-bs-target="#xs-injectables-links-module-CapModule-8fc7a7a23dbe62d36eb33ba8894c3735b50eb2079f0c7a6dfdadced627624a01f12a6b695f4f2ad04c32af5e3bfcbee348a38b9146dc8098d9d10a7ca0af23c7"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-CapModule-8fc7a7a23dbe62d36eb33ba8894c3735b50eb2079f0c7a6dfdadced627624a01f12a6b695f4f2ad04c32af5e3bfcbee348a38b9146dc8098d9d10a7ca0af23c7"' :
                                        'id="xs-injectables-links-module-CapModule-8fc7a7a23dbe62d36eb33ba8894c3735b50eb2079f0c7a6dfdadced627624a01f12a6b695f4f2ad04c32af5e3bfcbee348a38b9146dc8098d9d10a7ca0af23c7"' }>
                                        <li class="link">
                                            <a href="injectables/CapCommentService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CapCommentService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/CapService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CapService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/DeclineExpiredRequestsTask.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DeclineExpiredRequestsTask</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/UpdateCapStatusOnTargetDateElapsedTask.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UpdateCapStatusOnTargetDateElapsedTask</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/CategoryModule.html" data-type="entity-link" >CategoryModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-CategoryModule-9933995d5bff1c918ebfdbad828bf7cd2fbaf147fbd697dbf4b8cf98a3f78ee1f886ef3d3d1bb1917dcf0f501a9926b566cdb0710556c1ab028a10ed4b2b8113"' : 'data-bs-target="#xs-controllers-links-module-CategoryModule-9933995d5bff1c918ebfdbad828bf7cd2fbaf147fbd697dbf4b8cf98a3f78ee1f886ef3d3d1bb1917dcf0f501a9926b566cdb0710556c1ab028a10ed4b2b8113"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-CategoryModule-9933995d5bff1c918ebfdbad828bf7cd2fbaf147fbd697dbf4b8cf98a3f78ee1f886ef3d3d1bb1917dcf0f501a9926b566cdb0710556c1ab028a10ed4b2b8113"' :
                                            'id="xs-controllers-links-module-CategoryModule-9933995d5bff1c918ebfdbad828bf7cd2fbaf147fbd697dbf4b8cf98a3f78ee1f886ef3d3d1bb1917dcf0f501a9926b566cdb0710556c1ab028a10ed4b2b8113"' }>
                                            <li class="link">
                                                <a href="controllers/CategoryController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CategoryController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-CategoryModule-9933995d5bff1c918ebfdbad828bf7cd2fbaf147fbd697dbf4b8cf98a3f78ee1f886ef3d3d1bb1917dcf0f501a9926b566cdb0710556c1ab028a10ed4b2b8113"' : 'data-bs-target="#xs-injectables-links-module-CategoryModule-9933995d5bff1c918ebfdbad828bf7cd2fbaf147fbd697dbf4b8cf98a3f78ee1f886ef3d3d1bb1917dcf0f501a9926b566cdb0710556c1ab028a10ed4b2b8113"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-CategoryModule-9933995d5bff1c918ebfdbad828bf7cd2fbaf147fbd697dbf4b8cf98a3f78ee1f886ef3d3d1bb1917dcf0f501a9926b566cdb0710556c1ab028a10ed4b2b8113"' :
                                        'id="xs-injectables-links-module-CategoryModule-9933995d5bff1c918ebfdbad828bf7cd2fbaf147fbd697dbf4b8cf98a3f78ee1f886ef3d3d1bb1917dcf0f501a9926b566cdb0710556c1ab028a10ed4b2b8113"' }>
                                        <li class="link">
                                            <a href="injectables/CategoryService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CategoryService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/CategoryValidationService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CategoryValidationService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/CategoryUtilModule.html" data-type="entity-link" >CategoryUtilModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-CategoryUtilModule-f8490c5e216048a3c6e49a931312bf35e0517109117b004ef59d7f28ad18d9a8169887b9ff48e87b8af31c98b9f699f7a3a6c3d769c77bb693bc2308bbf54764"' : 'data-bs-target="#xs-controllers-links-module-CategoryUtilModule-f8490c5e216048a3c6e49a931312bf35e0517109117b004ef59d7f28ad18d9a8169887b9ff48e87b8af31c98b9f699f7a3a6c3d769c77bb693bc2308bbf54764"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-CategoryUtilModule-f8490c5e216048a3c6e49a931312bf35e0517109117b004ef59d7f28ad18d9a8169887b9ff48e87b8af31c98b9f699f7a3a6c3d769c77bb693bc2308bbf54764"' :
                                            'id="xs-controllers-links-module-CategoryUtilModule-f8490c5e216048a3c6e49a931312bf35e0517109117b004ef59d7f28ad18d9a8169887b9ff48e87b8af31c98b9f699f7a3a6c3d769c77bb693bc2308bbf54764"' }>
                                            <li class="link">
                                                <a href="controllers/ExternalRiskIndexController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ExternalRiskIndexController</a>
                                            </li>
                                            <li class="link">
                                                <a href="controllers/IndicatorController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >IndicatorController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-CategoryUtilModule-f8490c5e216048a3c6e49a931312bf35e0517109117b004ef59d7f28ad18d9a8169887b9ff48e87b8af31c98b9f699f7a3a6c3d769c77bb693bc2308bbf54764"' : 'data-bs-target="#xs-injectables-links-module-CategoryUtilModule-f8490c5e216048a3c6e49a931312bf35e0517109117b004ef59d7f28ad18d9a8169887b9ff48e87b8af31c98b9f699f7a3a6c3d769c77bb693bc2308bbf54764"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-CategoryUtilModule-f8490c5e216048a3c6e49a931312bf35e0517109117b004ef59d7f28ad18d9a8169887b9ff48e87b8af31c98b9f699f7a3a6c3d769c77bb693bc2308bbf54764"' :
                                        'id="xs-injectables-links-module-CategoryUtilModule-f8490c5e216048a3c6e49a931312bf35e0517109117b004ef59d7f28ad18d9a8169887b9ff48e87b8af31c98b9f699f7a3a6c3d769c77bb693bc2308bbf54764"' }>
                                        <li class="link">
                                            <a href="injectables/CategoryUtilService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CategoryUtilService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/CommodityRiskModule.html" data-type="entity-link" >CommodityRiskModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-CommodityRiskModule-1cc637125ed341f7a3ec7461e89734abcac532af71405a74297e1532d10f9f051d4c2c619ae4f45dc792d2669845f816d44e1462a1166cb4c0844b3111fc5c80"' : 'data-bs-target="#xs-controllers-links-module-CommodityRiskModule-1cc637125ed341f7a3ec7461e89734abcac532af71405a74297e1532d10f9f051d4c2c619ae4f45dc792d2669845f816d44e1462a1166cb4c0844b3111fc5c80"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-CommodityRiskModule-1cc637125ed341f7a3ec7461e89734abcac532af71405a74297e1532d10f9f051d4c2c619ae4f45dc792d2669845f816d44e1462a1166cb4c0844b3111fc5c80"' :
                                            'id="xs-controllers-links-module-CommodityRiskModule-1cc637125ed341f7a3ec7461e89734abcac532af71405a74297e1532d10f9f051d4c2c619ae4f45dc792d2669845f816d44e1462a1166cb4c0844b3111fc5c80"' }>
                                            <li class="link">
                                                <a href="controllers/CommodityRiskController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CommodityRiskController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-CommodityRiskModule-1cc637125ed341f7a3ec7461e89734abcac532af71405a74297e1532d10f9f051d4c2c619ae4f45dc792d2669845f816d44e1462a1166cb4c0844b3111fc5c80"' : 'data-bs-target="#xs-injectables-links-module-CommodityRiskModule-1cc637125ed341f7a3ec7461e89734abcac532af71405a74297e1532d10f9f051d4c2c619ae4f45dc792d2669845f816d44e1462a1166cb4c0844b3111fc5c80"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-CommodityRiskModule-1cc637125ed341f7a3ec7461e89734abcac532af71405a74297e1532d10f9f051d4c2c619ae4f45dc792d2669845f816d44e1462a1166cb4c0844b3111fc5c80"' :
                                        'id="xs-injectables-links-module-CommodityRiskModule-1cc637125ed341f7a3ec7461e89734abcac532af71405a74297e1532d10f9f051d4c2c619ae4f45dc792d2669845f816d44e1462a1166cb4c0844b3111fc5c80"' }>
                                        <li class="link">
                                            <a href="injectables/CommodityRiskService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CommodityRiskService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/DnaTestingModule.html" data-type="entity-link" >DnaTestingModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-DnaTestingModule-5198728d5248ff2aa6b30e7782353cd44225cc8b88582d116adb9ac28a8da42e1b681ab5cccdae7ea443f9f7f0859e82191ab08f27071f069967b7c94610e2c7"' : 'data-bs-target="#xs-controllers-links-module-DnaTestingModule-5198728d5248ff2aa6b30e7782353cd44225cc8b88582d116adb9ac28a8da42e1b681ab5cccdae7ea443f9f7f0859e82191ab08f27071f069967b7c94610e2c7"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-DnaTestingModule-5198728d5248ff2aa6b30e7782353cd44225cc8b88582d116adb9ac28a8da42e1b681ab5cccdae7ea443f9f7f0859e82191ab08f27071f069967b7c94610e2c7"' :
                                            'id="xs-controllers-links-module-DnaTestingModule-5198728d5248ff2aa6b30e7782353cd44225cc8b88582d116adb9ac28a8da42e1b681ab5cccdae7ea443f9f7f0859e82191ab08f27071f069967b7c94610e2c7"' }>
                                            <li class="link">
                                                <a href="controllers/DnaTestingController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DnaTestingController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-DnaTestingModule-5198728d5248ff2aa6b30e7782353cd44225cc8b88582d116adb9ac28a8da42e1b681ab5cccdae7ea443f9f7f0859e82191ab08f27071f069967b7c94610e2c7"' : 'data-bs-target="#xs-injectables-links-module-DnaTestingModule-5198728d5248ff2aa6b30e7782353cd44225cc8b88582d116adb9ac28a8da42e1b681ab5cccdae7ea443f9f7f0859e82191ab08f27071f069967b7c94610e2c7"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-DnaTestingModule-5198728d5248ff2aa6b30e7782353cd44225cc8b88582d116adb9ac28a8da42e1b681ab5cccdae7ea443f9f7f0859e82191ab08f27071f069967b7c94610e2c7"' :
                                        'id="xs-injectables-links-module-DnaTestingModule-5198728d5248ff2aa6b30e7782353cd44225cc8b88582d116adb9ac28a8da42e1b681ab5cccdae7ea443f9f7f0859e82191ab08f27071f069967b7c94610e2c7"' }>
                                        <li class="link">
                                            <a href="injectables/DnaRiskService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DnaRiskService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/DnaTestingService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DnaTestingService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/DynamicLinkModule.html" data-type="entity-link" >DynamicLinkModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-DynamicLinkModule-92e8d12eeca6870c8b5cc54b967297716ba511c55fac51aef811e64494b946f89b995462f171533350b75aeff832578e47e1063df231191b2ba9dc1139f83f60"' : 'data-bs-target="#xs-injectables-links-module-DynamicLinkModule-92e8d12eeca6870c8b5cc54b967297716ba511c55fac51aef811e64494b946f89b995462f171533350b75aeff832578e47e1063df231191b2ba9dc1139f83f60"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-DynamicLinkModule-92e8d12eeca6870c8b5cc54b967297716ba511c55fac51aef811e64494b946f89b995462f171533350b75aeff832578e47e1063df231191b2ba9dc1139f83f60"' :
                                        'id="xs-injectables-links-module-DynamicLinkModule-92e8d12eeca6870c8b5cc54b967297716ba511c55fac51aef811e64494b946f89b995462f171533350b75aeff832578e47e1063df231191b2ba9dc1139f83f60"' }>
                                        <li class="link">
                                            <a href="injectables/DynamicLinkService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DynamicLinkService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/EventModule.html" data-type="entity-link" >EventModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-EventModule-7b872268c7592a23d95be1ef90413cae6a98511d85153c9bfc6f836c7585b53d6b0af9cadda3a7395f79676326621247e07a6275245e987ce14d52b9dccd26e0"' : 'data-bs-target="#xs-controllers-links-module-EventModule-7b872268c7592a23d95be1ef90413cae6a98511d85153c9bfc6f836c7585b53d6b0af9cadda3a7395f79676326621247e07a6275245e987ce14d52b9dccd26e0"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-EventModule-7b872268c7592a23d95be1ef90413cae6a98511d85153c9bfc6f836c7585b53d6b0af9cadda3a7395f79676326621247e07a6275245e987ce14d52b9dccd26e0"' :
                                            'id="xs-controllers-links-module-EventModule-7b872268c7592a23d95be1ef90413cae6a98511d85153c9bfc6f836c7585b53d6b0af9cadda3a7395f79676326621247e07a6275245e987ce14d52b9dccd26e0"' }>
                                            <li class="link">
                                                <a href="controllers/CalculationController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CalculationController</a>
                                            </li>
                                            <li class="link">
                                                <a href="controllers/EventController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EventController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-EventModule-7b872268c7592a23d95be1ef90413cae6a98511d85153c9bfc6f836c7585b53d6b0af9cadda3a7395f79676326621247e07a6275245e987ce14d52b9dccd26e0"' : 'data-bs-target="#xs-injectables-links-module-EventModule-7b872268c7592a23d95be1ef90413cae6a98511d85153c9bfc6f836c7585b53d6b0af9cadda3a7395f79676326621247e07a6275245e987ce14d52b9dccd26e0"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-EventModule-7b872268c7592a23d95be1ef90413cae6a98511d85153c9bfc6f836c7585b53d6b0af9cadda3a7395f79676326621247e07a6275245e987ce14d52b9dccd26e0"' :
                                        'id="xs-injectables-links-module-EventModule-7b872268c7592a23d95be1ef90413cae6a98511d85153c9bfc6f836c7585b53d6b0af9cadda3a7395f79676326621247e07a6275245e987ce14d52b9dccd26e0"' }>
                                        <li class="link">
                                            <a href="injectables/AttributeService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AttributeService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/EventService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EventService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/EventUtilityService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EventUtilityService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/FacilityItemService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FacilityItemService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/LocationService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LocationService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/MarginOfErrorService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MarginOfErrorService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/MassBalanceService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MassBalanceService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/ProductActivityService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProductActivityService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/ProductAttributeService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProductAttributeService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/ProductFacilityService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProductFacilityService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/ProductTransactionService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProductTransactionService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/ProductTransformationService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProductTransformationService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/ProductTransformationValidatorService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProductTransformationValidatorService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/RecordProductService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RecordProductService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/TransactionHistoryService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TransactionHistoryService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/TransactionItemService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TransactionItemService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/TransformationHistoryService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TransformationHistoryService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/TransformationItemService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TransformationItemService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/UploadProofService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UploadProofService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/ValidateProductAttributeService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ValidateProductAttributeService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/VerifyRatioService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >VerifyRatioService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/ExportTemplateModule.html" data-type="entity-link" >ExportTemplateModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-ExportTemplateModule-7e6694003c20ef485d3c8886e4454286dc704fb034ca98788b4040a11a0244947241d38fece00df6813c2d5603aa6e74e8b1ea671d5fc2051965ca1ec607f918"' : 'data-bs-target="#xs-controllers-links-module-ExportTemplateModule-7e6694003c20ef485d3c8886e4454286dc704fb034ca98788b4040a11a0244947241d38fece00df6813c2d5603aa6e74e8b1ea671d5fc2051965ca1ec607f918"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-ExportTemplateModule-7e6694003c20ef485d3c8886e4454286dc704fb034ca98788b4040a11a0244947241d38fece00df6813c2d5603aa6e74e8b1ea671d5fc2051965ca1ec607f918"' :
                                            'id="xs-controllers-links-module-ExportTemplateModule-7e6694003c20ef485d3c8886e4454286dc704fb034ca98788b4040a11a0244947241d38fece00df6813c2d5603aa6e74e8b1ea671d5fc2051965ca1ec607f918"' }>
                                            <li class="link">
                                                <a href="controllers/ExportTemplateController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ExportTemplateController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-ExportTemplateModule-7e6694003c20ef485d3c8886e4454286dc704fb034ca98788b4040a11a0244947241d38fece00df6813c2d5603aa6e74e8b1ea671d5fc2051965ca1ec607f918"' : 'data-bs-target="#xs-injectables-links-module-ExportTemplateModule-7e6694003c20ef485d3c8886e4454286dc704fb034ca98788b4040a11a0244947241d38fece00df6813c2d5603aa6e74e8b1ea671d5fc2051965ca1ec607f918"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-ExportTemplateModule-7e6694003c20ef485d3c8886e4454286dc704fb034ca98788b4040a11a0244947241d38fece00df6813c2d5603aa6e74e8b1ea671d5fc2051965ca1ec607f918"' :
                                        'id="xs-injectables-links-module-ExportTemplateModule-7e6694003c20ef485d3c8886e4454286dc704fb034ca98788b4040a11a0244947241d38fece00df6813c2d5603aa6e74e8b1ea671d5fc2051965ca1ec607f918"' }>
                                        <li class="link">
                                            <a href="injectables/ExportTemplateService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ExportTemplateService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/FacilityModule.html" data-type="entity-link" >FacilityModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-FacilityModule-9ff863f147b83bc75ac623d4715167b2cd5f05b89e6767056a6c12d355258dd63fb07db80960083a8e2d4ea3fe0d288ed059aa34d5da11573b8f47c638beb38a"' : 'data-bs-target="#xs-controllers-links-module-FacilityModule-9ff863f147b83bc75ac623d4715167b2cd5f05b89e6767056a6c12d355258dd63fb07db80960083a8e2d4ea3fe0d288ed059aa34d5da11573b8f47c638beb38a"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-FacilityModule-9ff863f147b83bc75ac623d4715167b2cd5f05b89e6767056a6c12d355258dd63fb07db80960083a8e2d4ea3fe0d288ed059aa34d5da11573b8f47c638beb38a"' :
                                            'id="xs-controllers-links-module-FacilityModule-9ff863f147b83bc75ac623d4715167b2cd5f05b89e6767056a6c12d355258dd63fb07db80960083a8e2d4ea3fe0d288ed059aa34d5da11573b8f47c638beb38a"' }>
                                            <li class="link">
                                                <a href="controllers/BrandController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BrandController</a>
                                            </li>
                                            <li class="link">
                                                <a href="controllers/FacilityController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FacilityController</a>
                                            </li>
                                            <li class="link">
                                                <a href="controllers/FacilityGroupController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FacilityGroupController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-FacilityModule-9ff863f147b83bc75ac623d4715167b2cd5f05b89e6767056a6c12d355258dd63fb07db80960083a8e2d4ea3fe0d288ed059aa34d5da11573b8f47c638beb38a"' : 'data-bs-target="#xs-injectables-links-module-FacilityModule-9ff863f147b83bc75ac623d4715167b2cd5f05b89e6767056a6c12d355258dd63fb07db80960083a8e2d4ea3fe0d288ed059aa34d5da11573b8f47c638beb38a"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-FacilityModule-9ff863f147b83bc75ac623d4715167b2cd5f05b89e6767056a6c12d355258dd63fb07db80960083a8e2d4ea3fe0d288ed059aa34d5da11573b8f47c638beb38a"' :
                                        'id="xs-injectables-links-module-FacilityModule-9ff863f147b83bc75ac623d4715167b2cd5f05b89e6767056a6c12d355258dd63fb07db80960083a8e2d4ea3fe0d288ed059aa34d5da11573b8f47c638beb38a"' }>
                                        <li class="link">
                                            <a href="injectables/BrandService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BrandService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/FacilityGroupExcelService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FacilityGroupExcelService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/FacilityGroupService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FacilityGroupService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/FacilityImportDataService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FacilityImportDataService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/FacilityOperationService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FacilityOperationService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/FacilityPartnerService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FacilityPartnerService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/FacilityQueueService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FacilityQueueService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/FacilityRiskFilerService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FacilityRiskFilerService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/FacilityService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FacilityService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/ImportFacilityGroupService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ImportFacilityGroupService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/OrderFacilityService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >OrderFacilityService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/SupplierMappingService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SupplierMappingService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/ValidateFacilityGroupService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ValidateFacilityGroupService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/ValidateImportTemplateUtilService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ValidateImportTemplateUtilService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/FileModule.html" data-type="entity-link" >FileModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-FileModule-bad4dc10c9b05876a6ae893ff4ff052b58f333a81084c56ff2ad1fe9001ed04493220dd7a9505fcd9c5656bcc4dfb150a1a31c336317b25c5634171f90c1b725"' : 'data-bs-target="#xs-controllers-links-module-FileModule-bad4dc10c9b05876a6ae893ff4ff052b58f333a81084c56ff2ad1fe9001ed04493220dd7a9505fcd9c5656bcc4dfb150a1a31c336317b25c5634171f90c1b725"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-FileModule-bad4dc10c9b05876a6ae893ff4ff052b58f333a81084c56ff2ad1fe9001ed04493220dd7a9505fcd9c5656bcc4dfb150a1a31c336317b25c5634171f90c1b725"' :
                                            'id="xs-controllers-links-module-FileModule-bad4dc10c9b05876a6ae893ff4ff052b58f333a81084c56ff2ad1fe9001ed04493220dd7a9505fcd9c5656bcc4dfb150a1a31c336317b25c5634171f90c1b725"' }>
                                            <li class="link">
                                                <a href="controllers/FileController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FileController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-FileModule-bad4dc10c9b05876a6ae893ff4ff052b58f333a81084c56ff2ad1fe9001ed04493220dd7a9505fcd9c5656bcc4dfb150a1a31c336317b25c5634171f90c1b725"' : 'data-bs-target="#xs-injectables-links-module-FileModule-bad4dc10c9b05876a6ae893ff4ff052b58f333a81084c56ff2ad1fe9001ed04493220dd7a9505fcd9c5656bcc4dfb150a1a31c336317b25c5634171f90c1b725"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-FileModule-bad4dc10c9b05876a6ae893ff4ff052b58f333a81084c56ff2ad1fe9001ed04493220dd7a9505fcd9c5656bcc4dfb150a1a31c336317b25c5634171f90c1b725"' :
                                        'id="xs-injectables-links-module-FileModule-bad4dc10c9b05876a6ae893ff4ff052b58f333a81084c56ff2ad1fe9001ed04493220dd7a9505fcd9c5656bcc4dfb150a1a31c336317b25c5634171f90c1b725"' }>
                                        <li class="link">
                                            <a href="injectables/FileService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FileService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/GeographicalRiskLevelModule.html" data-type="entity-link" >GeographicalRiskLevelModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-GeographicalRiskLevelModule-c513c722d9a0462ce7c15678c86f580a1c5f4cf53999d8f1d073a8607b87d5775832dae87baddc0274d073b9dfbfa211a13ea260161be1c96a04eed584943586"' : 'data-bs-target="#xs-controllers-links-module-GeographicalRiskLevelModule-c513c722d9a0462ce7c15678c86f580a1c5f4cf53999d8f1d073a8607b87d5775832dae87baddc0274d073b9dfbfa211a13ea260161be1c96a04eed584943586"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-GeographicalRiskLevelModule-c513c722d9a0462ce7c15678c86f580a1c5f4cf53999d8f1d073a8607b87d5775832dae87baddc0274d073b9dfbfa211a13ea260161be1c96a04eed584943586"' :
                                            'id="xs-controllers-links-module-GeographicalRiskLevelModule-c513c722d9a0462ce7c15678c86f580a1c5f4cf53999d8f1d073a8607b87d5775832dae87baddc0274d073b9dfbfa211a13ea260161be1c96a04eed584943586"' }>
                                            <li class="link">
                                                <a href="controllers/GeographicalRiskLevelController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >GeographicalRiskLevelController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-GeographicalRiskLevelModule-c513c722d9a0462ce7c15678c86f580a1c5f4cf53999d8f1d073a8607b87d5775832dae87baddc0274d073b9dfbfa211a13ea260161be1c96a04eed584943586"' : 'data-bs-target="#xs-injectables-links-module-GeographicalRiskLevelModule-c513c722d9a0462ce7c15678c86f580a1c5f4cf53999d8f1d073a8607b87d5775832dae87baddc0274d073b9dfbfa211a13ea260161be1c96a04eed584943586"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-GeographicalRiskLevelModule-c513c722d9a0462ce7c15678c86f580a1c5f4cf53999d8f1d073a8607b87d5775832dae87baddc0274d073b9dfbfa211a13ea260161be1c96a04eed584943586"' :
                                        'id="xs-injectables-links-module-GeographicalRiskLevelModule-c513c722d9a0462ce7c15678c86f580a1c5f4cf53999d8f1d073a8607b87d5775832dae87baddc0274d073b9dfbfa211a13ea260161be1c96a04eed584943586"' }>
                                        <li class="link">
                                            <a href="injectables/GeographicalRiskLevelService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >GeographicalRiskLevelService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/GlobalCacheModule.html" data-type="entity-link" >GlobalCacheModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/GrievanceReportModule.html" data-type="entity-link" >GrievanceReportModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-GrievanceReportModule-0adc56d57676859b93775f9eec4b6c909ce36ecd5296dd6058b6f7ab13d20bbc29bddaed73e2f43c56ecd8de177f0c2372b4d6556a807e768c3bec3a19cc1b78"' : 'data-bs-target="#xs-controllers-links-module-GrievanceReportModule-0adc56d57676859b93775f9eec4b6c909ce36ecd5296dd6058b6f7ab13d20bbc29bddaed73e2f43c56ecd8de177f0c2372b4d6556a807e768c3bec3a19cc1b78"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-GrievanceReportModule-0adc56d57676859b93775f9eec4b6c909ce36ecd5296dd6058b6f7ab13d20bbc29bddaed73e2f43c56ecd8de177f0c2372b4d6556a807e768c3bec3a19cc1b78"' :
                                            'id="xs-controllers-links-module-GrievanceReportModule-0adc56d57676859b93775f9eec4b6c909ce36ecd5296dd6058b6f7ab13d20bbc29bddaed73e2f43c56ecd8de177f0c2372b4d6556a807e768c3bec3a19cc1b78"' }>
                                            <li class="link">
                                                <a href="controllers/GrievanceReportController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >GrievanceReportController</a>
                                            </li>
                                            <li class="link">
                                                <a href="controllers/IncidentReportController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >IncidentReportController</a>
                                            </li>
                                            <li class="link">
                                                <a href="controllers/RequestController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RequestController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-GrievanceReportModule-0adc56d57676859b93775f9eec4b6c909ce36ecd5296dd6058b6f7ab13d20bbc29bddaed73e2f43c56ecd8de177f0c2372b4d6556a807e768c3bec3a19cc1b78"' : 'data-bs-target="#xs-injectables-links-module-GrievanceReportModule-0adc56d57676859b93775f9eec4b6c909ce36ecd5296dd6058b6f7ab13d20bbc29bddaed73e2f43c56ecd8de177f0c2372b4d6556a807e768c3bec3a19cc1b78"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-GrievanceReportModule-0adc56d57676859b93775f9eec4b6c909ce36ecd5296dd6058b6f7ab13d20bbc29bddaed73e2f43c56ecd8de177f0c2372b4d6556a807e768c3bec3a19cc1b78"' :
                                        'id="xs-injectables-links-module-GrievanceReportModule-0adc56d57676859b93775f9eec4b6c909ce36ecd5296dd6058b6f7ab13d20bbc29bddaed73e2f43c56ecd8de177f0c2372b4d6556a807e768c3bec3a19cc1b78"' }>
                                        <li class="link">
                                            <a href="injectables/ComplianceHistoryService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ComplianceHistoryService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/GrievanceReportRiskService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >GrievanceReportRiskService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/GrievanceReportService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >GrievanceReportService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/RequestService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RequestService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/UpdateGrievanceReportsCommand.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UpdateGrievanceReportsCommand</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/ViewGrievanceReportGuard.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ViewGrievanceReportGuard</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/HistoryModule.html" data-type="entity-link" >HistoryModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-HistoryModule-6f781093560e83a0fa327c620bd03a82bed3d2b618bde11fe429540e883783abe16a3f52f7c8bbe234b5c4ed114a550989fe78ab8454c2356f79abba922009bf"' : 'data-bs-target="#xs-controllers-links-module-HistoryModule-6f781093560e83a0fa327c620bd03a82bed3d2b618bde11fe429540e883783abe16a3f52f7c8bbe234b5c4ed114a550989fe78ab8454c2356f79abba922009bf"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-HistoryModule-6f781093560e83a0fa327c620bd03a82bed3d2b618bde11fe429540e883783abe16a3f52f7c8bbe234b5c4ed114a550989fe78ab8454c2356f79abba922009bf"' :
                                            'id="xs-controllers-links-module-HistoryModule-6f781093560e83a0fa327c620bd03a82bed3d2b618bde11fe429540e883783abe16a3f52f7c8bbe234b5c4ed114a550989fe78ab8454c2356f79abba922009bf"' }>
                                            <li class="link">
                                                <a href="controllers/HistoryController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HistoryController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-HistoryModule-6f781093560e83a0fa327c620bd03a82bed3d2b618bde11fe429540e883783abe16a3f52f7c8bbe234b5c4ed114a550989fe78ab8454c2356f79abba922009bf"' : 'data-bs-target="#xs-injectables-links-module-HistoryModule-6f781093560e83a0fa327c620bd03a82bed3d2b618bde11fe429540e883783abe16a3f52f7c8bbe234b5c4ed114a550989fe78ab8454c2356f79abba922009bf"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-HistoryModule-6f781093560e83a0fa327c620bd03a82bed3d2b618bde11fe429540e883783abe16a3f52f7c8bbe234b5c4ed114a550989fe78ab8454c2356f79abba922009bf"' :
                                        'id="xs-injectables-links-module-HistoryModule-6f781093560e83a0fa327c620bd03a82bed3d2b618bde11fe429540e883783abe16a3f52f7c8bbe234b5c4ed114a550989fe78ab8454c2356f79abba922009bf"' }>
                                        <li class="link">
                                            <a href="injectables/DocumentService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DocumentService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/HistoryService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HistoryService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/HttpClientModule.html" data-type="entity-link" >HttpClientModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-HttpClientModule-70d0c6d46d3769514bae3b226fbe46e935bd5f40d1a8ce2688a8248686408bd41fc3a95d45678acaa60665042992126e3c70d08f2df84cee0cc71ca13ddd1e97"' : 'data-bs-target="#xs-injectables-links-module-HttpClientModule-70d0c6d46d3769514bae3b226fbe46e935bd5f40d1a8ce2688a8248686408bd41fc3a95d45678acaa60665042992126e3c70d08f2df84cee0cc71ca13ddd1e97"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-HttpClientModule-70d0c6d46d3769514bae3b226fbe46e935bd5f40d1a8ce2688a8248686408bd41fc3a95d45678acaa60665042992126e3c70d08f2df84cee0cc71ca13ddd1e97"' :
                                        'id="xs-injectables-links-module-HttpClientModule-70d0c6d46d3769514bae3b226fbe46e935bd5f40d1a8ce2688a8248686408bd41fc3a95d45678acaa60665042992126e3c70d08f2df84cee0cc71ca13ddd1e97"' }>
                                        <li class="link">
                                            <a href="injectables/GoogleMapApiService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >GoogleMapApiService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/OpenApparelRegistryService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >OpenApparelRegistryService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/RapidApiGeoDbBaseService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RapidApiGeoDbBaseService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/LaborRiskModule.html" data-type="entity-link" >LaborRiskModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-LaborRiskModule-39f1c9bbad92be3d74469e8d637ceae620d7df737cecd6327afb15d4372c68e788dd65b2544eb2d2ffc3a6f8b7c8eaa2e26166e1d78a0cf9d13e0b02b7568245"' : 'data-bs-target="#xs-injectables-links-module-LaborRiskModule-39f1c9bbad92be3d74469e8d637ceae620d7df737cecd6327afb15d4372c68e788dd65b2544eb2d2ffc3a6f8b7c8eaa2e26166e1d78a0cf9d13e0b02b7568245"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-LaborRiskModule-39f1c9bbad92be3d74469e8d637ceae620d7df737cecd6327afb15d4372c68e788dd65b2544eb2d2ffc3a6f8b7c8eaa2e26166e1d78a0cf9d13e0b02b7568245"' :
                                        'id="xs-injectables-links-module-LaborRiskModule-39f1c9bbad92be3d74469e8d637ceae620d7df737cecd6327afb15d4372c68e788dd65b2544eb2d2ffc3a6f8b7c8eaa2e26166e1d78a0cf9d13e0b02b7568245"' }>
                                        <li class="link">
                                            <a href="injectables/LaborRiskService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LaborRiskService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/LocationModule.html" data-type="entity-link" >LocationModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-LocationModule-8c25948219cab88ca967683ec067aa0791f06117309f08a2ab5525a08fd9a152b2f4ac33f7f4ca49a421b0f1c96cd9081cdf0d95c2dd9208cd87707b81ad36af"' : 'data-bs-target="#xs-controllers-links-module-LocationModule-8c25948219cab88ca967683ec067aa0791f06117309f08a2ab5525a08fd9a152b2f4ac33f7f4ca49a421b0f1c96cd9081cdf0d95c2dd9208cd87707b81ad36af"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-LocationModule-8c25948219cab88ca967683ec067aa0791f06117309f08a2ab5525a08fd9a152b2f4ac33f7f4ca49a421b0f1c96cd9081cdf0d95c2dd9208cd87707b81ad36af"' :
                                            'id="xs-controllers-links-module-LocationModule-8c25948219cab88ca967683ec067aa0791f06117309f08a2ab5525a08fd9a152b2f4ac33f7f4ca49a421b0f1c96cd9081cdf0d95c2dd9208cd87707b81ad36af"' }>
                                            <li class="link">
                                                <a href="controllers/LocationController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LocationController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-LocationModule-8c25948219cab88ca967683ec067aa0791f06117309f08a2ab5525a08fd9a152b2f4ac33f7f4ca49a421b0f1c96cd9081cdf0d95c2dd9208cd87707b81ad36af"' : 'data-bs-target="#xs-injectables-links-module-LocationModule-8c25948219cab88ca967683ec067aa0791f06117309f08a2ab5525a08fd9a152b2f4ac33f7f4ca49a421b0f1c96cd9081cdf0d95c2dd9208cd87707b81ad36af"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-LocationModule-8c25948219cab88ca967683ec067aa0791f06117309f08a2ab5525a08fd9a152b2f4ac33f7f4ca49a421b0f1c96cd9081cdf0d95c2dd9208cd87707b81ad36af"' :
                                        'id="xs-injectables-links-module-LocationModule-8c25948219cab88ca967683ec067aa0791f06117309f08a2ab5525a08fd9a152b2f4ac33f7f4ca49a421b0f1c96cd9081cdf0d95c2dd9208cd87707b81ad36af"' }>
                                        <li class="link">
                                            <a href="injectables/CrawlLocationCommand.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CrawlLocationCommand</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/LocationCrawlService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LocationCrawlService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/LocationService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LocationService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/TranslateLocationCommand.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TranslateLocationCommand</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/OrderModule.html" data-type="entity-link" >OrderModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-OrderModule-e5497e6a274a78cbd51add7fb3b936127022198284b6cbebcec6c442e08a66fce6ebb63a3a39d9a4f427596f29a0c6e9a0c346a2e96232878ac10e83ea1b2f4b"' : 'data-bs-target="#xs-controllers-links-module-OrderModule-e5497e6a274a78cbd51add7fb3b936127022198284b6cbebcec6c442e08a66fce6ebb63a3a39d9a4f427596f29a0c6e9a0c346a2e96232878ac10e83ea1b2f4b"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-OrderModule-e5497e6a274a78cbd51add7fb3b936127022198284b6cbebcec6c442e08a66fce6ebb63a3a39d9a4f427596f29a0c6e9a0c346a2e96232878ac10e83ea1b2f4b"' :
                                            'id="xs-controllers-links-module-OrderModule-e5497e6a274a78cbd51add7fb3b936127022198284b6cbebcec6c442e08a66fce6ebb63a3a39d9a4f427596f29a0c6e9a0c346a2e96232878ac10e83ea1b2f4b"' }>
                                            <li class="link">
                                                <a href="controllers/DocumentController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DocumentController</a>
                                            </li>
                                            <li class="link">
                                                <a href="controllers/OrderController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >OrderController</a>
                                            </li>
                                            <li class="link">
                                                <a href="controllers/OrderSupplierController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >OrderSupplierController</a>
                                            </li>
                                            <li class="link">
                                                <a href="controllers/OrderTraceController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >OrderTraceController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-OrderModule-e5497e6a274a78cbd51add7fb3b936127022198284b6cbebcec6c442e08a66fce6ebb63a3a39d9a4f427596f29a0c6e9a0c346a2e96232878ac10e83ea1b2f4b"' : 'data-bs-target="#xs-injectables-links-module-OrderModule-e5497e6a274a78cbd51add7fb3b936127022198284b6cbebcec6c442e08a66fce6ebb63a3a39d9a4f427596f29a0c6e9a0c346a2e96232878ac10e83ea1b2f4b"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-OrderModule-e5497e6a274a78cbd51add7fb3b936127022198284b6cbebcec6c442e08a66fce6ebb63a3a39d9a4f427596f29a0c6e9a0c346a2e96232878ac10e83ea1b2f4b"' :
                                        'id="xs-injectables-links-module-OrderModule-e5497e6a274a78cbd51add7fb3b936127022198284b6cbebcec6c442e08a66fce6ebb63a3a39d9a4f427596f29a0c6e9a0c346a2e96232878ac10e83ea1b2f4b"' }>
                                        <li class="link">
                                            <a href="injectables/DocumentService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DocumentService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/OrderService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >OrderService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/OrderSupplierService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >OrderSupplierService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/OrderTraceService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >OrderTraceService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/ProductTraceService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProductTraceService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/TraceService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TraceService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/TracingUtilityService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TracingUtilityService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/PdfExportModule.html" data-type="entity-link" >PdfExportModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-PdfExportModule-7a66c4ae9be8e28fbefadf0174b9ab2718c23f5b98615abf0fe6ce2458a75132142127a52e63f3284b8494a70aa2c37ae5defa134b801ec6fad09ce4cce842e7"' : 'data-bs-target="#xs-controllers-links-module-PdfExportModule-7a66c4ae9be8e28fbefadf0174b9ab2718c23f5b98615abf0fe6ce2458a75132142127a52e63f3284b8494a70aa2c37ae5defa134b801ec6fad09ce4cce842e7"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-PdfExportModule-7a66c4ae9be8e28fbefadf0174b9ab2718c23f5b98615abf0fe6ce2458a75132142127a52e63f3284b8494a70aa2c37ae5defa134b801ec6fad09ce4cce842e7"' :
                                            'id="xs-controllers-links-module-PdfExportModule-7a66c4ae9be8e28fbefadf0174b9ab2718c23f5b98615abf0fe6ce2458a75132142127a52e63f3284b8494a70aa2c37ae5defa134b801ec6fad09ce4cce842e7"' }>
                                            <li class="link">
                                                <a href="controllers/PdfExportController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PdfExportController</a>
                                            </li>
                                            <li class="link">
                                                <a href="controllers/PdfExportFacilityDetailController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PdfExportFacilityDetailController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-PdfExportModule-7a66c4ae9be8e28fbefadf0174b9ab2718c23f5b98615abf0fe6ce2458a75132142127a52e63f3284b8494a70aa2c37ae5defa134b801ec6fad09ce4cce842e7"' : 'data-bs-target="#xs-injectables-links-module-PdfExportModule-7a66c4ae9be8e28fbefadf0174b9ab2718c23f5b98615abf0fe6ce2458a75132142127a52e63f3284b8494a70aa2c37ae5defa134b801ec6fad09ce4cce842e7"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-PdfExportModule-7a66c4ae9be8e28fbefadf0174b9ab2718c23f5b98615abf0fe6ce2458a75132142127a52e63f3284b8494a70aa2c37ae5defa134b801ec6fad09ce4cce842e7"' :
                                        'id="xs-injectables-links-module-PdfExportModule-7a66c4ae9be8e28fbefadf0174b9ab2718c23f5b98615abf0fe6ce2458a75132142127a52e63f3284b8494a70aa2c37ae5defa134b801ec6fad09ce4cce842e7"' }>
                                        <li class="link">
                                            <a href="injectables/PdfExportService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PdfExportService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/PdfExportTracingObjectService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PdfExportTracingObjectService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/PdfPrinterModule.html" data-type="entity-link" >PdfPrinterModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-PdfPrinterModule-17d6afcff876e31e4c567664390fd9a4a5022c27aa46c846d8d4ad3fc043ff84d0890439f427b41645cd675312c62d54424a3d9b0a78723aeead881598275462"' : 'data-bs-target="#xs-injectables-links-module-PdfPrinterModule-17d6afcff876e31e4c567664390fd9a4a5022c27aa46c846d8d4ad3fc043ff84d0890439f427b41645cd675312c62d54424a3d9b0a78723aeead881598275462"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-PdfPrinterModule-17d6afcff876e31e4c567664390fd9a4a5022c27aa46c846d8d4ad3fc043ff84d0890439f427b41645cd675312c62d54424a3d9b0a78723aeead881598275462"' :
                                        'id="xs-injectables-links-module-PdfPrinterModule-17d6afcff876e31e4c567664390fd9a4a5022c27aa46c846d8d4ad3fc043ff84d0890439f427b41645cd675312c62d54424a3d9b0a78723aeead881598275462"' }>
                                        <li class="link">
                                            <a href="injectables/PdfService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PdfService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/ProductDefinitionModule.html" data-type="entity-link" >ProductDefinitionModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-ProductDefinitionModule-a32e0af595d90837846d72bbcb5bfbdfe095e014c0a4c3f559e26d4c9ebd27568c765ce71b46af0c2f4b07c495fa5f1c8389f5be973d52f20a2d929281d74f01"' : 'data-bs-target="#xs-controllers-links-module-ProductDefinitionModule-a32e0af595d90837846d72bbcb5bfbdfe095e014c0a4c3f559e26d4c9ebd27568c765ce71b46af0c2f4b07c495fa5f1c8389f5be973d52f20a2d929281d74f01"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-ProductDefinitionModule-a32e0af595d90837846d72bbcb5bfbdfe095e014c0a4c3f559e26d4c9ebd27568c765ce71b46af0c2f4b07c495fa5f1c8389f5be973d52f20a2d929281d74f01"' :
                                            'id="xs-controllers-links-module-ProductDefinitionModule-a32e0af595d90837846d72bbcb5bfbdfe095e014c0a4c3f559e26d4c9ebd27568c765ce71b46af0c2f4b07c495fa5f1c8389f5be973d52f20a2d929281d74f01"' }>
                                            <li class="link">
                                                <a href="controllers/AttributeController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AttributeController</a>
                                            </li>
                                            <li class="link">
                                                <a href="controllers/ProductDefinitionController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProductDefinitionController</a>
                                            </li>
                                            <li class="link">
                                                <a href="controllers/ProductTranslationController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProductTranslationController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-ProductDefinitionModule-a32e0af595d90837846d72bbcb5bfbdfe095e014c0a4c3f559e26d4c9ebd27568c765ce71b46af0c2f4b07c495fa5f1c8389f5be973d52f20a2d929281d74f01"' : 'data-bs-target="#xs-injectables-links-module-ProductDefinitionModule-a32e0af595d90837846d72bbcb5bfbdfe095e014c0a4c3f559e26d4c9ebd27568c765ce71b46af0c2f4b07c495fa5f1c8389f5be973d52f20a2d929281d74f01"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-ProductDefinitionModule-a32e0af595d90837846d72bbcb5bfbdfe095e014c0a4c3f559e26d4c9ebd27568c765ce71b46af0c2f4b07c495fa5f1c8389f5be973d52f20a2d929281d74f01"' :
                                        'id="xs-injectables-links-module-ProductDefinitionModule-a32e0af595d90837846d72bbcb5bfbdfe095e014c0a4c3f559e26d4c9ebd27568c765ce71b46af0c2f4b07c495fa5f1c8389f5be973d52f20a2d929281d74f01"' }>
                                        <li class="link">
                                            <a href="injectables/AttributeService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AttributeService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/ProductDefinitionService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProductDefinitionService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/ProductTranslationService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProductTranslationService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/ProductModule.html" data-type="entity-link" >ProductModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-ProductModule-af4f090a5b9956511069e3ab760d4f2cab9c5528ad34b66ebe67b1b109f42d175fb97ef7e773aedccbebd1f3e8b8c63e8f539746584a2ae04a11fd81cf165ca7"' : 'data-bs-target="#xs-controllers-links-module-ProductModule-af4f090a5b9956511069e3ab760d4f2cab9c5528ad34b66ebe67b1b109f42d175fb97ef7e773aedccbebd1f3e8b8c63e8f539746584a2ae04a11fd81cf165ca7"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-ProductModule-af4f090a5b9956511069e3ab760d4f2cab9c5528ad34b66ebe67b1b109f42d175fb97ef7e773aedccbebd1f3e8b8c63e8f539746584a2ae04a11fd81cf165ca7"' :
                                            'id="xs-controllers-links-module-ProductModule-af4f090a5b9956511069e3ab760d4f2cab9c5528ad34b66ebe67b1b109f42d175fb97ef7e773aedccbebd1f3e8b8c63e8f539746584a2ae04a11fd81cf165ca7"' }>
                                            <li class="link">
                                                <a href="controllers/ProductController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProductController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-ProductModule-af4f090a5b9956511069e3ab760d4f2cab9c5528ad34b66ebe67b1b109f42d175fb97ef7e773aedccbebd1f3e8b8c63e8f539746584a2ae04a11fd81cf165ca7"' : 'data-bs-target="#xs-injectables-links-module-ProductModule-af4f090a5b9956511069e3ab760d4f2cab9c5528ad34b66ebe67b1b109f42d175fb97ef7e773aedccbebd1f3e8b8c63e8f539746584a2ae04a11fd81cf165ca7"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-ProductModule-af4f090a5b9956511069e3ab760d4f2cab9c5528ad34b66ebe67b1b109f42d175fb97ef7e773aedccbebd1f3e8b8c63e8f539746584a2ae04a11fd81cf165ca7"' :
                                        'id="xs-injectables-links-module-ProductModule-af4f090a5b9956511069e3ab760d4f2cab9c5528ad34b66ebe67b1b109f42d175fb97ef7e773aedccbebd1f3e8b8c63e8f539746584a2ae04a11fd81cf165ca7"' }>
                                        <li class="link">
                                            <a href="injectables/FacilityItemService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FacilityItemService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/ProductService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProductService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/QrCodeService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >QrCodeService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/QrCodeModule.html" data-type="entity-link" >QrCodeModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-QrCodeModule-374f20ffd88fe243fa8720a372152e7a5ffddc74ff1220acb583fb97af1817abad4e3629a58192617c9cdfcdf89f330901209bba34024dadcb6cde751246d752"' : 'data-bs-target="#xs-controllers-links-module-QrCodeModule-374f20ffd88fe243fa8720a372152e7a5ffddc74ff1220acb583fb97af1817abad4e3629a58192617c9cdfcdf89f330901209bba34024dadcb6cde751246d752"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-QrCodeModule-374f20ffd88fe243fa8720a372152e7a5ffddc74ff1220acb583fb97af1817abad4e3629a58192617c9cdfcdf89f330901209bba34024dadcb6cde751246d752"' :
                                            'id="xs-controllers-links-module-QrCodeModule-374f20ffd88fe243fa8720a372152e7a5ffddc74ff1220acb583fb97af1817abad4e3629a58192617c9cdfcdf89f330901209bba34024dadcb6cde751246d752"' }>
                                            <li class="link">
                                                <a href="controllers/DownloadQrCodeBatchController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DownloadQrCodeBatchController</a>
                                            </li>
                                            <li class="link">
                                                <a href="controllers/QrCodeBatchController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >QrCodeBatchController</a>
                                            </li>
                                            <li class="link">
                                                <a href="controllers/QrCodeController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >QrCodeController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-QrCodeModule-374f20ffd88fe243fa8720a372152e7a5ffddc74ff1220acb583fb97af1817abad4e3629a58192617c9cdfcdf89f330901209bba34024dadcb6cde751246d752"' : 'data-bs-target="#xs-injectables-links-module-QrCodeModule-374f20ffd88fe243fa8720a372152e7a5ffddc74ff1220acb583fb97af1817abad4e3629a58192617c9cdfcdf89f330901209bba34024dadcb6cde751246d752"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-QrCodeModule-374f20ffd88fe243fa8720a372152e7a5ffddc74ff1220acb583fb97af1817abad4e3629a58192617c9cdfcdf89f330901209bba34024dadcb6cde751246d752"' :
                                        'id="xs-injectables-links-module-QrCodeModule-374f20ffd88fe243fa8720a372152e7a5ffddc74ff1220acb583fb97af1817abad4e3629a58192617c9cdfcdf89f330901209bba34024dadcb6cde751246d752"' }>
                                        <li class="link">
                                            <a href="injectables/QrCodeBatchService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >QrCodeBatchService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/QrCodeService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >QrCodeService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/ShortTokenStrategy.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ShortTokenStrategy</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/RiskAssessmentModule.html" data-type="entity-link" >RiskAssessmentModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-RiskAssessmentModule-643c2b561d81c21e65c257110bc70bbb3b3494b3eb7db3b9dd14364485093290d6a328576400279beff0751b3eff7753284c9254bbf3f749ebf92075d91f7025"' : 'data-bs-target="#xs-controllers-links-module-RiskAssessmentModule-643c2b561d81c21e65c257110bc70bbb3b3494b3eb7db3b9dd14364485093290d6a328576400279beff0751b3eff7753284c9254bbf3f749ebf92075d91f7025"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-RiskAssessmentModule-643c2b561d81c21e65c257110bc70bbb3b3494b3eb7db3b9dd14364485093290d6a328576400279beff0751b3eff7753284c9254bbf3f749ebf92075d91f7025"' :
                                            'id="xs-controllers-links-module-RiskAssessmentModule-643c2b561d81c21e65c257110bc70bbb3b3494b3eb7db3b9dd14364485093290d6a328576400279beff0751b3eff7753284c9254bbf3f749ebf92075d91f7025"' }>
                                            <li class="link">
                                                <a href="controllers/RiskAssessmentController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RiskAssessmentController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-RiskAssessmentModule-643c2b561d81c21e65c257110bc70bbb3b3494b3eb7db3b9dd14364485093290d6a328576400279beff0751b3eff7753284c9254bbf3f749ebf92075d91f7025"' : 'data-bs-target="#xs-injectables-links-module-RiskAssessmentModule-643c2b561d81c21e65c257110bc70bbb3b3494b3eb7db3b9dd14364485093290d6a328576400279beff0751b3eff7753284c9254bbf3f749ebf92075d91f7025"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-RiskAssessmentModule-643c2b561d81c21e65c257110bc70bbb3b3494b3eb7db3b9dd14364485093290d6a328576400279beff0751b3eff7753284c9254bbf3f749ebf92075d91f7025"' :
                                        'id="xs-injectables-links-module-RiskAssessmentModule-643c2b561d81c21e65c257110bc70bbb3b3494b3eb7db3b9dd14364485093290d6a328576400279beff0751b3eff7753284c9254bbf3f749ebf92075d91f7025"' }>
                                        <li class="link">
                                            <a href="injectables/FacilityRiskCalculatorService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FacilityRiskCalculatorService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/FacilityRiskMapperService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FacilityRiskMapperService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/FacilityRiskService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FacilityRiskService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/RiskAssessmentService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RiskAssessmentService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/RoleAttributeModule.html" data-type="entity-link" >RoleAttributeModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-RoleAttributeModule-9188253f600686769fe02e1a1692285340e8f1d5f4bd9ea2de23e797158e7690013581c5ede8e5427f224c2e6eec3309f5d2b060979c8541a1489f1cdbdd5a4b"' : 'data-bs-target="#xs-controllers-links-module-RoleAttributeModule-9188253f600686769fe02e1a1692285340e8f1d5f4bd9ea2de23e797158e7690013581c5ede8e5427f224c2e6eec3309f5d2b060979c8541a1489f1cdbdd5a4b"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-RoleAttributeModule-9188253f600686769fe02e1a1692285340e8f1d5f4bd9ea2de23e797158e7690013581c5ede8e5427f224c2e6eec3309f5d2b060979c8541a1489f1cdbdd5a4b"' :
                                            'id="xs-controllers-links-module-RoleAttributeModule-9188253f600686769fe02e1a1692285340e8f1d5f4bd9ea2de23e797158e7690013581c5ede8e5427f224c2e6eec3309f5d2b060979c8541a1489f1cdbdd5a4b"' }>
                                            <li class="link">
                                                <a href="controllers/IdentifierSystemAttributeController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >IdentifierSystemAttributeController</a>
                                            </li>
                                            <li class="link">
                                                <a href="controllers/RoleAttributeController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RoleAttributeController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-RoleAttributeModule-9188253f600686769fe02e1a1692285340e8f1d5f4bd9ea2de23e797158e7690013581c5ede8e5427f224c2e6eec3309f5d2b060979c8541a1489f1cdbdd5a4b"' : 'data-bs-target="#xs-injectables-links-module-RoleAttributeModule-9188253f600686769fe02e1a1692285340e8f1d5f4bd9ea2de23e797158e7690013581c5ede8e5427f224c2e6eec3309f5d2b060979c8541a1489f1cdbdd5a4b"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-RoleAttributeModule-9188253f600686769fe02e1a1692285340e8f1d5f4bd9ea2de23e797158e7690013581c5ede8e5427f224c2e6eec3309f5d2b060979c8541a1489f1cdbdd5a4b"' :
                                        'id="xs-injectables-links-module-RoleAttributeModule-9188253f600686769fe02e1a1692285340e8f1d5f4bd9ea2de23e797158e7690013581c5ede8e5427f224c2e6eec3309f5d2b060979c8541a1489f1cdbdd5a4b"' }>
                                        <li class="link">
                                            <a href="injectables/FacilityRoleAttributeService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FacilityRoleAttributeService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/RoleAttributeService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RoleAttributeService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/ValidateRoleAttributeService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ValidateRoleAttributeService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/RolePermissionModule.html" data-type="entity-link" >RolePermissionModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-RolePermissionModule-e89d4d63a26b003ced7b9a9b8c852b87b8a79eadd6f49afb8029e7c50140e104eab7f12994195c70c6945577beffe526fabea143761902be68a1caa0b4932e50"' : 'data-bs-target="#xs-controllers-links-module-RolePermissionModule-e89d4d63a26b003ced7b9a9b8c852b87b8a79eadd6f49afb8029e7c50140e104eab7f12994195c70c6945577beffe526fabea143761902be68a1caa0b4932e50"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-RolePermissionModule-e89d4d63a26b003ced7b9a9b8c852b87b8a79eadd6f49afb8029e7c50140e104eab7f12994195c70c6945577beffe526fabea143761902be68a1caa0b4932e50"' :
                                            'id="xs-controllers-links-module-RolePermissionModule-e89d4d63a26b003ced7b9a9b8c852b87b8a79eadd6f49afb8029e7c50140e104eab7f12994195c70c6945577beffe526fabea143761902be68a1caa0b4932e50"' }>
                                            <li class="link">
                                                <a href="controllers/PermissionController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PermissionController</a>
                                            </li>
                                            <li class="link">
                                                <a href="controllers/RoleController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RoleController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-RolePermissionModule-e89d4d63a26b003ced7b9a9b8c852b87b8a79eadd6f49afb8029e7c50140e104eab7f12994195c70c6945577beffe526fabea143761902be68a1caa0b4932e50"' : 'data-bs-target="#xs-injectables-links-module-RolePermissionModule-e89d4d63a26b003ced7b9a9b8c852b87b8a79eadd6f49afb8029e7c50140e104eab7f12994195c70c6945577beffe526fabea143761902be68a1caa0b4932e50"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-RolePermissionModule-e89d4d63a26b003ced7b9a9b8c852b87b8a79eadd6f49afb8029e7c50140e104eab7f12994195c70c6945577beffe526fabea143761902be68a1caa0b4932e50"' :
                                        'id="xs-injectables-links-module-RolePermissionModule-e89d4d63a26b003ced7b9a9b8c852b87b8a79eadd6f49afb8029e7c50140e104eab7f12994195c70c6945577beffe526fabea143761902be68a1caa0b4932e50"' }>
                                        <li class="link">
                                            <a href="injectables/HarvestSeasonService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HarvestSeasonService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/PermissionService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PermissionService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/RolePermissionService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RolePermissionService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/RoleService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RoleService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/UserPermissionService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserPermissionService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/SelfAssessmentModule.html" data-type="entity-link" >SelfAssessmentModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-SelfAssessmentModule-42a6c7c335191e27c99f22d209b42cc6295328a877bd48c9c045491f518fab11aacc9b20d786535ed1f21c10caf5c97a42094214120b1cd5719c65b0739505d7"' : 'data-bs-target="#xs-controllers-links-module-SelfAssessmentModule-42a6c7c335191e27c99f22d209b42cc6295328a877bd48c9c045491f518fab11aacc9b20d786535ed1f21c10caf5c97a42094214120b1cd5719c65b0739505d7"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-SelfAssessmentModule-42a6c7c335191e27c99f22d209b42cc6295328a877bd48c9c045491f518fab11aacc9b20d786535ed1f21c10caf5c97a42094214120b1cd5719c65b0739505d7"' :
                                            'id="xs-controllers-links-module-SelfAssessmentModule-42a6c7c335191e27c99f22d209b42cc6295328a877bd48c9c045491f518fab11aacc9b20d786535ed1f21c10caf5c97a42094214120b1cd5719c65b0739505d7"' }>
                                            <li class="link">
                                                <a href="controllers/SelfAssessmentController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SelfAssessmentController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-SelfAssessmentModule-42a6c7c335191e27c99f22d209b42cc6295328a877bd48c9c045491f518fab11aacc9b20d786535ed1f21c10caf5c97a42094214120b1cd5719c65b0739505d7"' : 'data-bs-target="#xs-injectables-links-module-SelfAssessmentModule-42a6c7c335191e27c99f22d209b42cc6295328a877bd48c9c045491f518fab11aacc9b20d786535ed1f21c10caf5c97a42094214120b1cd5719c65b0739505d7"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-SelfAssessmentModule-42a6c7c335191e27c99f22d209b42cc6295328a877bd48c9c045491f518fab11aacc9b20d786535ed1f21c10caf5c97a42094214120b1cd5719c65b0739505d7"' :
                                        'id="xs-injectables-links-module-SelfAssessmentModule-42a6c7c335191e27c99f22d209b42cc6295328a877bd48c9c045491f518fab11aacc9b20d786535ed1f21c10caf5c97a42094214120b1cd5719c65b0739505d7"' }>
                                        <li class="link">
                                            <a href="injectables/ImportGroupQuestionService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ImportGroupQuestionService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/ImportSaqExcelService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ImportSaqExcelService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/ImportSelfAssessmentService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ImportSelfAssessmentService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/SelfAssessmentAnswerService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SelfAssessmentAnswerService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/SelfAssessmentGroupService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SelfAssessmentGroupService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/SelfAssessmentQuestionResponseService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SelfAssessmentQuestionResponseService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/SelfAssessmentQuestionRiskService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SelfAssessmentQuestionRiskService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/SelfAssessmentQuestionService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SelfAssessmentQuestionService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/SelfAssessmentService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SelfAssessmentService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/SelfAssessmentTranslationFileService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SelfAssessmentTranslationFileService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/SelfAssessmentUploadFileService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SelfAssessmentUploadFileService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/ValidateImportSaqService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ValidateImportSaqService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/ValidateSelfAssessmentService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ValidateSelfAssessmentService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/ValidateUploadFacilityGroupTemplateService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ValidateUploadFacilityGroupTemplateService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/SiteDetailModule.html" data-type="entity-link" >SiteDetailModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-SiteDetailModule-8930a24b2a727995a6a0eb55920dd7fc0479a6931e05ac4b7fd75b8e4b07b08624f94fefd6522dd1be52565da2a46cc476e8f83de3e2a3ddd863b225b2167e6c"' : 'data-bs-target="#xs-controllers-links-module-SiteDetailModule-8930a24b2a727995a6a0eb55920dd7fc0479a6931e05ac4b7fd75b8e4b07b08624f94fefd6522dd1be52565da2a46cc476e8f83de3e2a3ddd863b225b2167e6c"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-SiteDetailModule-8930a24b2a727995a6a0eb55920dd7fc0479a6931e05ac4b7fd75b8e4b07b08624f94fefd6522dd1be52565da2a46cc476e8f83de3e2a3ddd863b225b2167e6c"' :
                                            'id="xs-controllers-links-module-SiteDetailModule-8930a24b2a727995a6a0eb55920dd7fc0479a6931e05ac4b7fd75b8e4b07b08624f94fefd6522dd1be52565da2a46cc476e8f83de3e2a3ddd863b225b2167e6c"' }>
                                            <li class="link">
                                                <a href="controllers/AppLogoController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppLogoController</a>
                                            </li>
                                            <li class="link">
                                                <a href="controllers/BusinessDetailController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BusinessDetailController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-SiteDetailModule-8930a24b2a727995a6a0eb55920dd7fc0479a6931e05ac4b7fd75b8e4b07b08624f94fefd6522dd1be52565da2a46cc476e8f83de3e2a3ddd863b225b2167e6c"' : 'data-bs-target="#xs-injectables-links-module-SiteDetailModule-8930a24b2a727995a6a0eb55920dd7fc0479a6931e05ac4b7fd75b8e4b07b08624f94fefd6522dd1be52565da2a46cc476e8f83de3e2a3ddd863b225b2167e6c"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-SiteDetailModule-8930a24b2a727995a6a0eb55920dd7fc0479a6931e05ac4b7fd75b8e4b07b08624f94fefd6522dd1be52565da2a46cc476e8f83de3e2a3ddd863b225b2167e6c"' :
                                        'id="xs-injectables-links-module-SiteDetailModule-8930a24b2a727995a6a0eb55920dd7fc0479a6931e05ac4b7fd75b8e4b07b08624f94fefd6522dd1be52565da2a46cc476e8f83de3e2a3ddd863b225b2167e6c"' }>
                                        <li class="link">
                                            <a href="injectables/BusinessDetailService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BusinessDetailService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/SupplyChainModule.html" data-type="entity-link" >SupplyChainModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-SupplyChainModule-a027c9d78e6058d23d289b03f28b4cdbe5f1e54fa6e383d7d4c88a910d53239ad8824daa7697ee765f78414e5d648bb25c4d2e948c0fd94f4eada4f6536ef81c"' : 'data-bs-target="#xs-controllers-links-module-SupplyChainModule-a027c9d78e6058d23d289b03f28b4cdbe5f1e54fa6e383d7d4c88a910d53239ad8824daa7697ee765f78414e5d648bb25c4d2e948c0fd94f4eada4f6536ef81c"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-SupplyChainModule-a027c9d78e6058d23d289b03f28b4cdbe5f1e54fa6e383d7d4c88a910d53239ad8824daa7697ee765f78414e5d648bb25c4d2e948c0fd94f4eada4f6536ef81c"' :
                                            'id="xs-controllers-links-module-SupplyChainModule-a027c9d78e6058d23d289b03f28b4cdbe5f1e54fa6e383d7d4c88a910d53239ad8824daa7697ee765f78414e5d648bb25c4d2e948c0fd94f4eada4f6536ef81c"' }>
                                            <li class="link">
                                                <a href="controllers/SupplyChainController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SupplyChainController</a>
                                            </li>
                                            <li class="link">
                                                <a href="controllers/SupplyChainNodeController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SupplyChainNodeController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-SupplyChainModule-a027c9d78e6058d23d289b03f28b4cdbe5f1e54fa6e383d7d4c88a910d53239ad8824daa7697ee765f78414e5d648bb25c4d2e948c0fd94f4eada4f6536ef81c"' : 'data-bs-target="#xs-injectables-links-module-SupplyChainModule-a027c9d78e6058d23d289b03f28b4cdbe5f1e54fa6e383d7d4c88a910d53239ad8824daa7697ee765f78414e5d648bb25c4d2e948c0fd94f4eada4f6536ef81c"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-SupplyChainModule-a027c9d78e6058d23d289b03f28b4cdbe5f1e54fa6e383d7d4c88a910d53239ad8824daa7697ee765f78414e5d648bb25c4d2e948c0fd94f4eada4f6536ef81c"' :
                                        'id="xs-injectables-links-module-SupplyChainModule-a027c9d78e6058d23d289b03f28b4cdbe5f1e54fa6e383d7d4c88a910d53239ad8824daa7697ee765f78414e5d648bb25c4d2e948c0fd94f4eada4f6536ef81c"' }>
                                        <li class="link">
                                            <a href="injectables/SupplyChainMetaDataService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SupplyChainMetaDataService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/SupplyChainNodeService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SupplyChainNodeService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/SupplyChainService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SupplyChainService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/SupplyChainTierService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SupplyChainTierService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/TaxonomyExploitationModule.html" data-type="entity-link" >TaxonomyExploitationModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-TaxonomyExploitationModule-889e8c6a85436eaef858cfc2e8d6f0c014f6fae023bf21481027d19c4348687139ce051b04b288ebfa1429cf489b173c655e0656cdcb3282003ac048b59cd780"' : 'data-bs-target="#xs-controllers-links-module-TaxonomyExploitationModule-889e8c6a85436eaef858cfc2e8d6f0c014f6fae023bf21481027d19c4348687139ce051b04b288ebfa1429cf489b173c655e0656cdcb3282003ac048b59cd780"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-TaxonomyExploitationModule-889e8c6a85436eaef858cfc2e8d6f0c014f6fae023bf21481027d19c4348687139ce051b04b288ebfa1429cf489b173c655e0656cdcb3282003ac048b59cd780"' :
                                            'id="xs-controllers-links-module-TaxonomyExploitationModule-889e8c6a85436eaef858cfc2e8d6f0c014f6fae023bf21481027d19c4348687139ce051b04b288ebfa1429cf489b173c655e0656cdcb3282003ac048b59cd780"' }>
                                            <li class="link">
                                                <a href="controllers/TaxonomyExploitationController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TaxonomyExploitationController</a>
                                            </li>
                                            <li class="link">
                                                <a href="controllers/TaxonomyTranslationController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TaxonomyTranslationController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-TaxonomyExploitationModule-889e8c6a85436eaef858cfc2e8d6f0c014f6fae023bf21481027d19c4348687139ce051b04b288ebfa1429cf489b173c655e0656cdcb3282003ac048b59cd780"' : 'data-bs-target="#xs-injectables-links-module-TaxonomyExploitationModule-889e8c6a85436eaef858cfc2e8d6f0c014f6fae023bf21481027d19c4348687139ce051b04b288ebfa1429cf489b173c655e0656cdcb3282003ac048b59cd780"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-TaxonomyExploitationModule-889e8c6a85436eaef858cfc2e8d6f0c014f6fae023bf21481027d19c4348687139ce051b04b288ebfa1429cf489b173c655e0656cdcb3282003ac048b59cd780"' :
                                        'id="xs-injectables-links-module-TaxonomyExploitationModule-889e8c6a85436eaef858cfc2e8d6f0c014f6fae023bf21481027d19c4348687139ce051b04b288ebfa1429cf489b173c655e0656cdcb3282003ac048b59cd780"' }>
                                        <li class="link">
                                            <a href="injectables/TaxonomyExploitationService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TaxonomyExploitationService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/TaxonomyExploitationTemplateService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TaxonomyExploitationTemplateService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/TaxonomyExploitationUploadService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TaxonomyExploitationUploadService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/TranslateModule.html" data-type="entity-link" >TranslateModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-TranslateModule-319d8209eea997b4a06fe5098d4145203163bd7311e030bb0a4233aec97feacd4183c0e6155713f59afd7817c9f3be62cff1a1d97384d84f176b7ac08ad4ce4b"' : 'data-bs-target="#xs-injectables-links-module-TranslateModule-319d8209eea997b4a06fe5098d4145203163bd7311e030bb0a4233aec97feacd4183c0e6155713f59afd7817c9f3be62cff1a1d97384d84f176b7ac08ad4ce4b"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-TranslateModule-319d8209eea997b4a06fe5098d4145203163bd7311e030bb0a4233aec97feacd4183c0e6155713f59afd7817c9f3be62cff1a1d97384d84f176b7ac08ad4ce4b"' :
                                        'id="xs-injectables-links-module-TranslateModule-319d8209eea997b4a06fe5098d4145203163bd7311e030bb0a4233aec97feacd4183c0e6155713f59afd7817c9f3be62cff1a1d97384d84f176b7ac08ad4ce4b"' }>
                                        <li class="link">
                                            <a href="injectables/GoogleTranslateService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >GoogleTranslateService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UploadModule.html" data-type="entity-link" >UploadModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-UploadModule-c33e115ca01d06f6b8556d9f309b10aba5ddafeb1839b5954a258f159eb6a29bff4580d09c1ba9eaabab7e430e16be7cba86393ef0868322831bcf262368cfc5"' : 'data-bs-target="#xs-controllers-links-module-UploadModule-c33e115ca01d06f6b8556d9f309b10aba5ddafeb1839b5954a258f159eb6a29bff4580d09c1ba9eaabab7e430e16be7cba86393ef0868322831bcf262368cfc5"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UploadModule-c33e115ca01d06f6b8556d9f309b10aba5ddafeb1839b5954a258f159eb6a29bff4580d09c1ba9eaabab7e430e16be7cba86393ef0868322831bcf262368cfc5"' :
                                            'id="xs-controllers-links-module-UploadModule-c33e115ca01d06f6b8556d9f309b10aba5ddafeb1839b5954a258f159eb6a29bff4580d09c1ba9eaabab7e430e16be7cba86393ef0868322831bcf262368cfc5"' }>
                                            <li class="link">
                                                <a href="controllers/UploadController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UploadController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-UploadModule-c33e115ca01d06f6b8556d9f309b10aba5ddafeb1839b5954a258f159eb6a29bff4580d09c1ba9eaabab7e430e16be7cba86393ef0868322831bcf262368cfc5"' : 'data-bs-target="#xs-injectables-links-module-UploadModule-c33e115ca01d06f6b8556d9f309b10aba5ddafeb1839b5954a258f159eb6a29bff4580d09c1ba9eaabab7e430e16be7cba86393ef0868322831bcf262368cfc5"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UploadModule-c33e115ca01d06f6b8556d9f309b10aba5ddafeb1839b5954a258f159eb6a29bff4580d09c1ba9eaabab7e430e16be7cba86393ef0868322831bcf262368cfc5"' :
                                        'id="xs-injectables-links-module-UploadModule-c33e115ca01d06f6b8556d9f309b10aba5ddafeb1839b5954a258f159eb6a29bff4580d09c1ba9eaabab7e430e16be7cba86393ef0868322831bcf262368cfc5"' }>
                                        <li class="link">
                                            <a href="injectables/UploadService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UploadService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UserApiLimitModule.html" data-type="entity-link" >UserApiLimitModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-UserApiLimitModule-02ff11814c2158b499930534aa13ee796296925a53a057ca31031616c19defd15ee6f00f87c6f9f92ff90beaeb712cc9ee99d01198162aca9459376580a97866"' : 'data-bs-target="#xs-injectables-links-module-UserApiLimitModule-02ff11814c2158b499930534aa13ee796296925a53a057ca31031616c19defd15ee6f00f87c6f9f92ff90beaeb712cc9ee99d01198162aca9459376580a97866"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UserApiLimitModule-02ff11814c2158b499930534aa13ee796296925a53a057ca31031616c19defd15ee6f00f87c6f9f92ff90beaeb712cc9ee99d01198162aca9459376580a97866"' :
                                        'id="xs-injectables-links-module-UserApiLimitModule-02ff11814c2158b499930534aa13ee796296925a53a057ca31031616c19defd15ee6f00f87c6f9f92ff90beaeb712cc9ee99d01198162aca9459376580a97866"' }>
                                        <li class="link">
                                            <a href="injectables/UserApiLimitService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserApiLimitService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UserModule.html" data-type="entity-link" >UserModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-UserModule-3b6c14d02ffc6088d54cbdf04c65757883bdbc80e5d4a4e417207073f8568ccce6d294d7254a074206c055ced629b2f300eb188208e92c4a60f09a21f8ea42ab"' : 'data-bs-target="#xs-controllers-links-module-UserModule-3b6c14d02ffc6088d54cbdf04c65757883bdbc80e5d4a4e417207073f8568ccce6d294d7254a074206c055ced629b2f300eb188208e92c4a60f09a21f8ea42ab"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UserModule-3b6c14d02ffc6088d54cbdf04c65757883bdbc80e5d4a4e417207073f8568ccce6d294d7254a074206c055ced629b2f300eb188208e92c4a60f09a21f8ea42ab"' :
                                            'id="xs-controllers-links-module-UserModule-3b6c14d02ffc6088d54cbdf04c65757883bdbc80e5d4a4e417207073f8568ccce6d294d7254a074206c055ced629b2f300eb188208e92c4a60f09a21f8ea42ab"' }>
                                            <li class="link">
                                                <a href="controllers/AuthController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthController</a>
                                            </li>
                                            <li class="link">
                                                <a href="controllers/PartnerController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PartnerController</a>
                                            </li>
                                            <li class="link">
                                                <a href="controllers/ResetPasswordController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ResetPasswordController</a>
                                            </li>
                                            <li class="link">
                                                <a href="controllers/UserController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserController</a>
                                            </li>
                                            <li class="link">
                                                <a href="controllers/UserManagementController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserManagementController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-UserModule-3b6c14d02ffc6088d54cbdf04c65757883bdbc80e5d4a4e417207073f8568ccce6d294d7254a074206c055ced629b2f300eb188208e92c4a60f09a21f8ea42ab"' : 'data-bs-target="#xs-injectables-links-module-UserModule-3b6c14d02ffc6088d54cbdf04c65757883bdbc80e5d4a4e417207073f8568ccce6d294d7254a074206c055ced629b2f300eb188208e92c4a60f09a21f8ea42ab"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UserModule-3b6c14d02ffc6088d54cbdf04c65757883bdbc80e5d4a4e417207073f8568ccce6d294d7254a074206c055ced629b2f300eb188208e92c4a60f09a21f8ea42ab"' :
                                        'id="xs-injectables-links-module-UserModule-3b6c14d02ffc6088d54cbdf04c65757883bdbc80e5d4a4e417207073f8568ccce6d294d7254a074206c055ced629b2f300eb188208e92c4a60f09a21f8ea42ab"' }>
                                        <li class="link">
                                            <a href="injectables/ActorService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ActorService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/AdminService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AdminService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/AuthService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/JwtStrategy.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >JwtStrategy</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/OtpService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >OtpService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/PartnerService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PartnerService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/ResetPasswordService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ResetPasswordService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/UpdateUserTypeCommand.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UpdateUserTypeCommand</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/UserService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#controllers-links"' :
                                'data-bs-target="#xs-controllers-links"' }>
                                <span class="icon ion-md-swap"></span>
                                <span>Controllers</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="controllers-links"' : 'id="xs-controllers-links"' }>
                                <li class="link">
                                    <a href="controllers/AppController.html" data-type="entity-link" >AppController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/BrandController.html" data-type="entity-link" >BrandController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/DnaTestingController.html" data-type="entity-link" >DnaTestingController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/DownloadQrCodeBatchController.html" data-type="entity-link" >DownloadQrCodeBatchController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/OrderController.html" data-type="entity-link" >OrderController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/RequestController.html" data-type="entity-link" >RequestController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/SelfAssessmentController.html" data-type="entity-link" >SelfAssessmentController</a>
                                </li>
                            </ul>
                        </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#entities-links"' :
                                'data-bs-target="#xs-entities-links"' }>
                                <span class="icon ion-ios-apps"></span>
                                <span>Entities</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="entities-links"' : 'id="xs-entities-links"' }>
                                <li class="link">
                                    <a href="entities/AttributeEntity.html" data-type="entity-link" >AttributeEntity</a>
                                </li>
                                <li class="link">
                                    <a href="entities/AttributeFileEntity.html" data-type="entity-link" >AttributeFileEntity</a>
                                </li>
                                <li class="link">
                                    <a href="entities/BusinessDetailEntity.html" data-type="entity-link" >BusinessDetailEntity</a>
                                </li>
                                <li class="link">
                                    <a href="entities/CalculateFieldEntity.html" data-type="entity-link" >CalculateFieldEntity</a>
                                </li>
                                <li class="link">
                                    <a href="entities/CapCommentEntity.html" data-type="entity-link" >CapCommentEntity</a>
                                </li>
                                <li class="link">
                                    <a href="entities/CapEntity.html" data-type="entity-link" >CapEntity</a>
                                </li>
                                <li class="link">
                                    <a href="entities/CategoryEntity.html" data-type="entity-link" >CategoryEntity</a>
                                </li>
                                <li class="link">
                                    <a href="entities/CommodityEntity.html" data-type="entity-link" >CommodityEntity</a>
                                </li>
                                <li class="link">
                                    <a href="entities/CommodityRiskEntity.html" data-type="entity-link" >CommodityRiskEntity</a>
                                </li>
                                <li class="link">
                                    <a href="entities/CountryEntity.html" data-type="entity-link" >CountryEntity</a>
                                </li>
                                <li class="link">
                                    <a href="entities/DistrictEntity.html" data-type="entity-link" >DistrictEntity</a>
                                </li>
                                <li class="link">
                                    <a href="entities/DnaTestingEntity.html" data-type="entity-link" >DnaTestingEntity</a>
                                </li>
                                <li class="link">
                                    <a href="entities/EventEntity.html" data-type="entity-link" >EventEntity</a>
                                </li>
                                <li class="link">
                                    <a href="entities/FacilityEntity.html" data-type="entity-link" >FacilityEntity</a>
                                </li>
                                <li class="link">
                                    <a href="entities/FacilityItemEntity.html" data-type="entity-link" >FacilityItemEntity</a>
                                </li>
                                <li class="link">
                                    <a href="entities/FacilityPartnerEntity.html" data-type="entity-link" >FacilityPartnerEntity</a>
                                </li>
                                <li class="link">
                                    <a href="entities/FacilityRoleAttributeEntity.html" data-type="entity-link" >FacilityRoleAttributeEntity</a>
                                </li>
                                <li class="link">
                                    <a href="entities/FileEntity.html" data-type="entity-link" >FileEntity</a>
                                </li>
                                <li class="link">
                                    <a href="entities/GeographicalRiskLevelEntity.html" data-type="entity-link" >GeographicalRiskLevelEntity</a>
                                </li>
                                <li class="link">
                                    <a href="entities/GrievanceReportEntity.html" data-type="entity-link" >GrievanceReportEntity</a>
                                </li>
                                <li class="link">
                                    <a href="entities/GrievanceReportResponseEntity.html" data-type="entity-link" >GrievanceReportResponseEntity</a>
                                </li>
                                <li class="link">
                                    <a href="entities/LaborRiskEntity.html" data-type="entity-link" >LaborRiskEntity</a>
                                </li>
                                <li class="link">
                                    <a href="entities/OrderEntity.html" data-type="entity-link" >OrderEntity</a>
                                </li>
                                <li class="link">
                                    <a href="entities/OrderSupplierEntity.html" data-type="entity-link" >OrderSupplierEntity</a>
                                </li>
                                <li class="link">
                                    <a href="entities/OtpEntity.html" data-type="entity-link" >OtpEntity</a>
                                </li>
                                <li class="link">
                                    <a href="entities/PermissionEntity.html" data-type="entity-link" >PermissionEntity</a>
                                </li>
                                <li class="link">
                                    <a href="entities/ProductDefinitionAttributeEntity.html" data-type="entity-link" >ProductDefinitionAttributeEntity</a>
                                </li>
                                <li class="link">
                                    <a href="entities/ProductDefinitionEntity.html" data-type="entity-link" >ProductDefinitionEntity</a>
                                </li>
                                <li class="link">
                                    <a href="entities/ProductDefinitionFileEntity.html" data-type="entity-link" >ProductDefinitionFileEntity</a>
                                </li>
                                <li class="link">
                                    <a href="entities/ProductEntity.html" data-type="entity-link" >ProductEntity</a>
                                </li>
                                <li class="link">
                                    <a href="entities/ProvinceEntity.html" data-type="entity-link" >ProvinceEntity</a>
                                </li>
                                <li class="link">
                                    <a href="entities/QrCodeBatchEntity.html" data-type="entity-link" >QrCodeBatchEntity</a>
                                </li>
                                <li class="link">
                                    <a href="entities/QrCodeEntity.html" data-type="entity-link" >QrCodeEntity</a>
                                </li>
                                <li class="link">
                                    <a href="entities/RecordProductEntity.html" data-type="entity-link" >RecordProductEntity</a>
                                </li>
                                <li class="link">
                                    <a href="entities/RequestCapExtensionEntity.html" data-type="entity-link" >RequestCapExtensionEntity</a>
                                </li>
                                <li class="link">
                                    <a href="entities/RiskAssessmentEntity.html" data-type="entity-link" >RiskAssessmentEntity</a>
                                </li>
                                <li class="link">
                                    <a href="entities/RoleAttributeEntity.html" data-type="entity-link" >RoleAttributeEntity</a>
                                </li>
                                <li class="link">
                                    <a href="entities/RoleEntity.html" data-type="entity-link" >RoleEntity</a>
                                </li>
                                <li class="link">
                                    <a href="entities/RoleHasPermissionEntity.html" data-type="entity-link" >RoleHasPermissionEntity</a>
                                </li>
                                <li class="link">
                                    <a href="entities/SelfAssessmentAnswerEntity.html" data-type="entity-link" >SelfAssessmentAnswerEntity</a>
                                </li>
                                <li class="link">
                                    <a href="entities/SelfAssessmentEntity.html" data-type="entity-link" >SelfAssessmentEntity</a>
                                </li>
                                <li class="link">
                                    <a href="entities/SelfAssessmentGroupEntity.html" data-type="entity-link" >SelfAssessmentGroupEntity</a>
                                </li>
                                <li class="link">
                                    <a href="entities/SelfAssessmentQuestionEntity.html" data-type="entity-link" >SelfAssessmentQuestionEntity</a>
                                </li>
                                <li class="link">
                                    <a href="entities/SelfAssessmentQuestionResponseEntity.html" data-type="entity-link" >SelfAssessmentQuestionResponseEntity</a>
                                </li>
                                <li class="link">
                                    <a href="entities/SelfAssessmentTranslationFileEntity.html" data-type="entity-link" >SelfAssessmentTranslationFileEntity</a>
                                </li>
                                <li class="link">
                                    <a href="entities/SelfAssessmentUploadFileEntity.html" data-type="entity-link" >SelfAssessmentUploadFileEntity</a>
                                </li>
                                <li class="link">
                                    <a href="entities/SupplyChainNodeEntity.html" data-type="entity-link" >SupplyChainNodeEntity</a>
                                </li>
                                <li class="link">
                                    <a href="entities/SupplyChainNodeMetadataEntity.html" data-type="entity-link" >SupplyChainNodeMetadataEntity</a>
                                </li>
                                <li class="link">
                                    <a href="entities/TaxonomyExploitationFileEntity.html" data-type="entity-link" >TaxonomyExploitationFileEntity</a>
                                </li>
                                <li class="link">
                                    <a href="entities/TransactionEntity.html" data-type="entity-link" >TransactionEntity</a>
                                </li>
                                <li class="link">
                                    <a href="entities/TransactionItemEntity.html" data-type="entity-link" >TransactionItemEntity</a>
                                </li>
                                <li class="link">
                                    <a href="entities/TransformationEntity.html" data-type="entity-link" >TransformationEntity</a>
                                </li>
                                <li class="link">
                                    <a href="entities/TransformationItemEntity.html" data-type="entity-link" >TransformationItemEntity</a>
                                </li>
                                <li class="link">
                                    <a href="entities/UserApiLimitEntity.html" data-type="entity-link" >UserApiLimitEntity</a>
                                </li>
                                <li class="link">
                                    <a href="entities/UserEntity.html" data-type="entity-link" >UserEntity</a>
                                </li>
                                <li class="link">
                                    <a href="entities/UserHasPermissionEntity.html" data-type="entity-link" >UserHasPermissionEntity</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#classes-links"' :
                            'data-bs-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/AddAndUpdateColumnRiskAssessments1653989523827.html" data-type="entity-link" >AddAndUpdateColumnRiskAssessments1653989523827</a>
                            </li>
                            <li class="link">
                                <a href="classes/AddAnsweredSaqAtAndAddedPartnerAtColumnFacilityTable1713849678836.html" data-type="entity-link" >AddAnsweredSaqAtAndAddedPartnerAtColumnFacilityTable1713849678836</a>
                            </li>
                            <li class="link">
                                <a href="classes/AddAssignCapPermissionsTable1723449585056.html" data-type="entity-link" >AddAssignCapPermissionsTable1723449585056</a>
                            </li>
                            <li class="link">
                                <a href="classes/AddBrandSupplierPartnerInversedSide1652846466788.html" data-type="entity-link" >AddBrandSupplierPartnerInversedSide1652846466788</a>
                            </li>
                            <li class="link">
                                <a href="classes/AddBrokerPartnerDto.html" data-type="entity-link" >AddBrokerPartnerDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/AddCalculateFieldDto.html" data-type="entity-link" >AddCalculateFieldDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/AddCalculateFieldToSupplyChainNodeTable1716804279545.html" data-type="entity-link" >AddCalculateFieldToSupplyChainNodeTable1716804279545</a>
                            </li>
                            <li class="link">
                                <a href="classes/AddCapPermissionsTable1714100550108.html" data-type="entity-link" >AddCapPermissionsTable1714100550108</a>
                            </li>
                            <li class="link">
                                <a href="classes/AddCategoryIdColumnToCategoryTable1701073770653.html" data-type="entity-link" >AddCategoryIdColumnToCategoryTable1701073770653</a>
                            </li>
                            <li class="link">
                                <a href="classes/AddColumnAdditionalRoleToFacilityTable1686799193897.html" data-type="entity-link" >AddColumnAdditionalRoleToFacilityTable1686799193897</a>
                            </li>
                            <li class="link">
                                <a href="classes/AddColumnAffectedRoleTableRoleHasPermission1683828181486.html" data-type="entity-link" >AddColumnAffectedRoleTableRoleHasPermission1683828181486</a>
                            </li>
                            <li class="link">
                                <a href="classes/AddColumnAuditReportNumberToGrievanceReportTable1700124585800.html" data-type="entity-link" >AddColumnAuditReportNumberToGrievanceReportTable1700124585800</a>
                            </li>
                            <li class="link">
                                <a href="classes/AddColumnBrandIdToCapTable1718850279785.html" data-type="entity-link" >AddColumnBrandIdToCapTable1718850279785</a>
                            </li>
                            <li class="link">
                                <a href="classes/AddColumnCalculateFieldIdToSupplyChainNodeTable1728381354545.html" data-type="entity-link" >AddColumnCalculateFieldIdToSupplyChainNodeTable1728381354545</a>
                            </li>
                            <li class="link">
                                <a href="classes/AddColumnCapWeightToRiskAssessmentTable1714105630395.html" data-type="entity-link" >AddColumnCapWeightToRiskAssessmentTable1714105630395</a>
                            </li>
                            <li class="link">
                                <a href="classes/AddColumnCategoryRiskSeverityTableCategory1690306942772.html" data-type="entity-link" >AddColumnCategoryRiskSeverityTableCategory1690306942772</a>
                            </li>
                            <li class="link">
                                <a href="classes/AddColumnChainIdToSupplyChainNodeMetadataTable1728034062546.html" data-type="entity-link" >AddColumnChainIdToSupplyChainNodeMetadataTable1728034062546</a>
                            </li>
                            <li class="link">
                                <a href="classes/AddColumnChainIdToSupplyChainNodeTable1728034062545.html" data-type="entity-link" >AddColumnChainIdToSupplyChainNodeTable1728034062545</a>
                            </li>
                            <li class="link">
                                <a href="classes/AddColumnChainOfCustonyTableRole1693193496497.html" data-type="entity-link" >AddColumnChainOfCustonyTableRole1693193496497</a>
                            </li>
                            <li class="link">
                                <a href="classes/AddColumnCommunityRiskToFarmGroupProfileTable1653896330765.html" data-type="entity-link" >AddColumnCommunityRiskToFarmGroupProfileTable1653896330765</a>
                            </li>
                            <li class="link">
                                <a href="classes/AddColumnCompletedAtToQrCodeBatchTable1647481896275.html" data-type="entity-link" >AddColumnCompletedAtToQrCodeBatchTable1647481896275</a>
                            </li>
                            <li class="link">
                                <a href="classes/AddColumnCompletedConfiguringSystemAtTableBusinessDetail1701847868649.html" data-type="entity-link" >AddColumnCompletedConfiguringSystemAtTableBusinessDetail1701847868649</a>
                            </li>
                            <li class="link">
                                <a href="classes/AddColumnContactPhoneNumberTableFarmProfile1653993605800.html" data-type="entity-link" >AddColumnContactPhoneNumberTableFarmProfile1653993605800</a>
                            </li>
                            <li class="link">
                                <a href="classes/AddColumnCreatedFacilityIdToLotTable1646829973397.html" data-type="entity-link" >AddColumnCreatedFacilityIdToLotTable1646829973397</a>
                            </li>
                            <li class="link">
                                <a href="classes/AddColumnCreatorIdToCapTable1718155325391.html" data-type="entity-link" >AddColumnCreatorIdToCapTable1718155325391</a>
                            </li>
                            <li class="link">
                                <a href="classes/AddColumnCreatorIdToGrievanceReportTable1648782807179.html" data-type="entity-link" >AddColumnCreatorIdToGrievanceReportTable1648782807179</a>
                            </li>
                            <li class="link">
                                <a href="classes/AddColumnDeletedAtToRoleTable1687925253800.html" data-type="entity-link" >AddColumnDeletedAtToRoleTable1687925253800</a>
                            </li>
                            <li class="link">
                                <a href="classes/AddColumnFacilityIdToTransactionTable1648135199379.html" data-type="entity-link" >AddColumnFacilityIdToTransactionTable1648135199379</a>
                            </li>
                            <li class="link">
                                <a href="classes/AddColumnFinishedGuidanceAtUserTable1648717389615.html" data-type="entity-link" >AddColumnFinishedGuidanceAtUserTable1648717389615</a>
                            </li>
                            <li class="link">
                                <a href="classes/AddColumnGroupTableRole1683827897196.html" data-type="entity-link" >AddColumnGroupTableRole1683827897196</a>
                            </li>
                            <li class="link">
                                <a href="classes/AddColumnHotlineAndAuditorToRiskAssessmentTable1702363833162.html" data-type="entity-link" >AddColumnHotlineAndAuditorToRiskAssessmentTable1702363833162</a>
                            </li>
                            <li class="link">
                                <a href="classes/AddColumnInputProductDefinitionIdCalculateFieldTable1720859847576.html" data-type="entity-link" >AddColumnInputProductDefinitionIdCalculateFieldTable1720859847576</a>
                            </li>
                            <li class="link">
                                <a href="classes/AddColumnInputProductDefinitionIdsCalculateFieldTable1728378995576.html" data-type="entity-link" >AddColumnInputProductDefinitionIdsCalculateFieldTable1728378995576</a>
                            </li>
                            <li class="link">
                                <a href="classes/AddColumnIsArchivedTableCap1713934803043.html" data-type="entity-link" >AddColumnIsArchivedTableCap1713934803043</a>
                            </li>
                            <li class="link">
                                <a href="classes/AddColumnIsDetectedToDnaTestingTable1705569060507.html" data-type="entity-link" >AddColumnIsDetectedToDnaTestingTable1705569060507</a>
                            </li>
                            <li class="link">
                                <a href="classes/AddColumnIsGpsEnabledFieldToBusinessDetailTable1722586098037.html" data-type="entity-link" >AddColumnIsGpsEnabledFieldToBusinessDetailTable1722586098037</a>
                            </li>
                            <li class="link">
                                <a href="classes/AddColumnIsManualAddedTableProduct1696212463178.html" data-type="entity-link" >AddColumnIsManualAddedTableProduct1696212463178</a>
                            </li>
                            <li class="link">
                                <a href="classes/AddColumnIsOptionalToSelfAssessmentQuestionTable1720175225228.html" data-type="entity-link" >AddColumnIsOptionalToSelfAssessmentQuestionTable1720175225228</a>
                            </li>
                            <li class="link">
                                <a href="classes/AddColumnIsRequestExtensionFieldToCapTable1721291831552.html" data-type="entity-link" >AddColumnIsRequestExtensionFieldToCapTable1721291831552</a>
                            </li>
                            <li class="link">
                                <a href="classes/AddColumnIsSupplierToUserTable1649212078248.html" data-type="entity-link" >AddColumnIsSupplierToUserTable1649212078248</a>
                            </li>
                            <li class="link">
                                <a href="classes/AddColumnLatestActivityAtToGrievanceReportTable1662523883978.html" data-type="entity-link" >AddColumnLatestActivityAtToGrievanceReportTable1662523883978</a>
                            </li>
                            <li class="link">
                                <a href="classes/AddColumnLevelTableRiskScore1655265027444.html" data-type="entity-link" >AddColumnLevelTableRiskScore1655265027444</a>
                            </li>
                            <li class="link">
                                <a href="classes/AddColumnLinkedFacilityIdsToTransformationTable1646798783284.html" data-type="entity-link" >AddColumnLinkedFacilityIdsToTransformationTable1646798783284</a>
                            </li>
                            <li class="link">
                                <a href="classes/AddColumnParentIdOrderSupplierTable1652026704250.html" data-type="entity-link" >AddColumnParentIdOrderSupplierTable1652026704250</a>
                            </li>
                            <li class="link">
                                <a href="classes/AddColumnParentIdToCapTable1717639207616.html" data-type="entity-link" >AddColumnParentIdToCapTable1717639207616</a>
                            </li>
                            <li class="link">
                                <a href="classes/AddColumnProductIdTableQrCode1696165602147.html" data-type="entity-link" >AddColumnProductIdTableQrCode1696165602147</a>
                            </li>
                            <li class="link">
                                <a href="classes/AddColumnQualityToLotTable1647226213362.html" data-type="entity-link" >AddColumnQualityToLotTable1647226213362</a>
                            </li>
                            <li class="link">
                                <a href="classes/AddColumnQuantityQuantityUnitTableProduct1697774554953.html" data-type="entity-link" >AddColumnQuantityQuantityUnitTableProduct1697774554953</a>
                            </li>
                            <li class="link">
                                <a href="classes/AddColumnRiskDataToFacilityTable1701229698725.html" data-type="entity-link" >AddColumnRiskDataToFacilityTable1701229698725</a>
                            </li>
                            <li class="link">
                                <a href="classes/AddColumnRiskScoreLevelCapTable1713863678188.html" data-type="entity-link" >AddColumnRiskScoreLevelCapTable1713863678188</a>
                            </li>
                            <li class="link">
                                <a href="classes/AddColumnRoleIdCalculateFieldTable1727773365839.html" data-type="entity-link" >AddColumnRoleIdCalculateFieldTable1727773365839</a>
                            </li>
                            <li class="link">
                                <a href="classes/AddColumnRoleIdTableUser1695307387495.html" data-type="entity-link" >AddColumnRoleIdTableUser1695307387495</a>
                            </li>
                            <li class="link">
                                <a href="classes/AddColumnsJoinedAtStatusTableUser1645515071458.html" data-type="entity-link" >AddColumnsJoinedAtStatusTableUser1645515071458</a>
                            </li>
                            <li class="link">
                                <a href="classes/AddColumnsManualPurchaseToLotTable1648612687651.html" data-type="entity-link" >AddColumnsManualPurchaseToLotTable1648612687651</a>
                            </li>
                            <li class="link">
                                <a href="classes/AddColumnStatusAndPriorityToGrievanceReportResponseTable1680254775872.html" data-type="entity-link" >AddColumnStatusAndPriorityToGrievanceReportResponseTable1680254775872</a>
                            </li>
                            <li class="link">
                                <a href="classes/AddColumnStatusAndPriorityToGrievanceReportTable1680232771825.html" data-type="entity-link" >AddColumnStatusAndPriorityToGrievanceReportTable1680232771825</a>
                            </li>
                            <li class="link">
                                <a href="classes/AddColumnSupplyChainNodeMetadataIdToCalculateFieldTable1728387585576.html" data-type="entity-link" >AddColumnSupplyChainNodeMetadataIdToCalculateFieldTable1728387585576</a>
                            </li>
                            <li class="link">
                                <a href="classes/AddColumnTier1648450967764.html" data-type="entity-link" >AddColumnTier1648450967764</a>
                            </li>
                            <li class="link">
                                <a href="classes/AddColumnTranslationToCategoryTable1690443790629.html" data-type="entity-link" >AddColumnTranslationToCategoryTable1690443790629</a>
                            </li>
                            <li class="link">
                                <a href="classes/AddColumnTranslationToCountryTable1690187230069.html" data-type="entity-link" >AddColumnTranslationToCountryTable1690187230069</a>
                            </li>
                            <li class="link">
                                <a href="classes/AddColumnTranslationToDistrictTable1690187302148.html" data-type="entity-link" >AddColumnTranslationToDistrictTable1690187302148</a>
                            </li>
                            <li class="link">
                                <a href="classes/AddColumnTranslationToProvinceTable1690187274520.html" data-type="entity-link" >AddColumnTranslationToProvinceTable1690187274520</a>
                            </li>
                            <li class="link">
                                <a href="classes/AddColumnTypeToSelfAssessmentUploadFileTable1698047110345.html" data-type="entity-link" >AddColumnTypeToSelfAssessmentUploadFileTable1698047110345</a>
                            </li>
                            <li class="link">
                                <a href="classes/AddColumnTypeToTransactionTable1648450465338.html" data-type="entity-link" >AddColumnTypeToTransactionTable1648450465338</a>
                            </li>
                            <li class="link">
                                <a href="classes/AddColumnUpdatedAtCreatedAtTablePermission1683876342297.html" data-type="entity-link" >AddColumnUpdatedAtCreatedAtTablePermission1683876342297</a>
                            </li>
                            <li class="link">
                                <a href="classes/AddColumnUploadProofsToFabricTable1681201065124.html" data-type="entity-link" >AddColumnUploadProofsToFabricTable1681201065124</a>
                            </li>
                            <li class="link">
                                <a href="classes/AddColumnUploadProofsToYarnTable1681200936707.html" data-type="entity-link" >AddColumnUploadProofsToYarnTable1681200936707</a>
                            </li>
                            <li class="link">
                                <a href="classes/AddColumnUserInterfaceLayoutTableRole1687141204893.html" data-type="entity-link" >AddColumnUserInterfaceLayoutTableRole1687141204893</a>
                            </li>
                            <li class="link">
                                <a href="classes/AddColumnVerifiedPercentageToFabricTable1655539038904.html" data-type="entity-link" >AddColumnVerifiedPercentageToFabricTable1655539038904</a>
                            </li>
                            <li class="link">
                                <a href="classes/AddColumnVerifiedPercentageToLotTable1655538853131.html" data-type="entity-link" >AddColumnVerifiedPercentageToLotTable1655538853131</a>
                            </li>
                            <li class="link">
                                <a href="classes/AddColumnVerifiedPercentageToYarnTable1655538958623.html" data-type="entity-link" >AddColumnVerifiedPercentageToYarnTable1655538958623</a>
                            </li>
                            <li class="link">
                                <a href="classes/AddCommoditiesFieldToBusinessDetailTable1698679454245.html" data-type="entity-link" >AddCommoditiesFieldToBusinessDetailTable1698679454245</a>
                            </li>
                            <li class="link">
                                <a href="classes/AddCompletedColumnIntoSelfAssessment1656133624849.html" data-type="entity-link" >AddCompletedColumnIntoSelfAssessment1656133624849</a>
                            </li>
                            <li class="link">
                                <a href="classes/AddConditionsColumnBySelfAssessmentQuestionEntity1654687474453.html" data-type="entity-link" >AddConditionsColumnBySelfAssessmentQuestionEntity1654687474453</a>
                            </li>
                            <li class="link">
                                <a href="classes/AddConstraintUniqueLotCode1646754919355.html" data-type="entity-link" >AddConstraintUniqueLotCode1646754919355</a>
                            </li>
                            <li class="link">
                                <a href="classes/AddConstraintUniqueToFacilityUserTable1645143184156.html" data-type="entity-link" >AddConstraintUniqueToFacilityUserTable1645143184156</a>
                            </li>
                            <li class="link">
                                <a href="classes/AddConstraintUniqueToRolePermissionsTables1645143674674.html" data-type="entity-link" >AddConstraintUniqueToRolePermissionsTables1645143674674</a>
                            </li>
                            <li class="link">
                                <a href="classes/AddConstraintUniqueToTransactionTable1646760594467.html" data-type="entity-link" >AddConstraintUniqueToTransactionTable1646760594467</a>
                            </li>
                            <li class="link">
                                <a href="classes/AddConstrainUniqToFacilityPartnerTable1646115932604.html" data-type="entity-link" >AddConstrainUniqToFacilityPartnerTable1646115932604</a>
                            </li>
                            <li class="link">
                                <a href="classes/AddConstrainUniqueCountryProvinceCode1646145998263.html" data-type="entity-link" >AddConstrainUniqueCountryProvinceCode1646145998263</a>
                            </li>
                            <li class="link">
                                <a href="classes/AddConstrainUniqueProvinceDistrict1646146220179.html" data-type="entity-link" >AddConstrainUniqueProvinceDistrict1646146220179</a>
                            </li>
                            <li class="link">
                                <a href="classes/AddCreatorIdColumnCategoryTable1723041811286.html" data-type="entity-link" >AddCreatorIdColumnCategoryTable1723041811286</a>
                            </li>
                            <li class="link">
                                <a href="classes/AddCreatorIdColunmLaborRiskTable1700124585839.html" data-type="entity-link" >AddCreatorIdColunmLaborRiskTable1700124585839</a>
                            </li>
                            <li class="link">
                                <a href="classes/AddCreatorIdFieldToDnaTestingTable1697686691342.html" data-type="entity-link" >AddCreatorIdFieldToDnaTestingTable1697686691342</a>
                            </li>
                            <li class="link">
                                <a href="classes/AddDefaultAttributes1693195942989.html" data-type="entity-link" >AddDefaultAttributes1693195942989</a>
                            </li>
                            <li class="link">
                                <a href="classes/AddDefaultIndetifierSystemToAttributeTable1710830951307.html" data-type="entity-link" >AddDefaultIndetifierSystemToAttributeTable1710830951307</a>
                            </li>
                            <li class="link">
                                <a href="classes/AddDescriptionColunmCommodityRiskTable1716864509932.html" data-type="entity-link" >AddDescriptionColunmCommodityRiskTable1716864509932</a>
                            </li>
                            <li class="link">
                                <a href="classes/AddEnTranslationForCategories1699592158158.html" data-type="entity-link" >AddEnTranslationForCategories1699592158158</a>
                            </li>
                            <li class="link">
                                <a href="classes/AddFacilityOarIdDto.html" data-type="entity-link" >AddFacilityOarIdDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/AddFacilityRiskCalculationProcessor.html" data-type="entity-link" >AddFacilityRiskCalculationProcessor</a>
                            </li>
                            <li class="link">
                                <a href="classes/AddFieldGoodsToFacilityTable1699597332329.html" data-type="entity-link" >AddFieldGoodsToFacilityTable1699597332329</a>
                            </li>
                            <li class="link">
                                <a href="classes/AddFieldIsPurchasedFabricTable1652435389851.html" data-type="entity-link" >AddFieldIsPurchasedFabricTable1652435389851</a>
                            </li>
                            <li class="link">
                                <a href="classes/AddFieldIsPurchasedYarnTable1652428088709.html" data-type="entity-link" >AddFieldIsPurchasedYarnTable1652428088709</a>
                            </li>
                            <li class="link">
                                <a href="classes/AddFieldIsSoldLotTable1652428040493.html" data-type="entity-link" >AddFieldIsSoldLotTable1652428040493</a>
                            </li>
                            <li class="link">
                                <a href="classes/AddFieldRoleWeightsToRiskAssessmentTable1700043497707.html" data-type="entity-link" >AddFieldRoleWeightsToRiskAssessmentTable1700043497707</a>
                            </li>
                            <li class="link">
                                <a href="classes/AddFileIdColumnIntoFarmGroupProfile1655958652017.html" data-type="entity-link" >AddFileIdColumnIntoFarmGroupProfile1655958652017</a>
                            </li>
                            <li class="link">
                                <a href="classes/AddFinalProductAssemblyRoleForUser1650360445604.html" data-type="entity-link" >AddFinalProductAssemblyRoleForUser1650360445604</a>
                            </li>
                            <li class="link">
                                <a href="classes/AddFullAddressOfCid1719989895842.html" data-type="entity-link" >AddFullAddressOfCid1719989895842</a>
                            </li>
                            <li class="link">
                                <a href="classes/AddFullTextSearchFacilityTable1646195171912.html" data-type="entity-link" >AddFullTextSearchFacilityTable1646195171912</a>
                            </li>
                            <li class="link">
                                <a href="classes/AddGoodsColumnProductDefinitionTable1711426561624.html" data-type="entity-link" >AddGoodsColumnProductDefinitionTable1711426561624</a>
                            </li>
                            <li class="link">
                                <a href="classes/AddGoToTypeColumnToSelfAssessmentQuestionResponseTable1725862445662.html" data-type="entity-link" >AddGoToTypeColumnToSelfAssessmentQuestionResponseTable1725862445662</a>
                            </li>
                            <li class="link">
                                <a href="classes/AddIconColumnRoleTable1722571116721.html" data-type="entity-link" >AddIconColumnRoleTable1722571116721</a>
                            </li>
                            <li class="link">
                                <a href="classes/AddIconColunmCategoryTable1711033835015.html" data-type="entity-link" >AddIconColunmCategoryTable1711033835015</a>
                            </li>
                            <li class="link">
                                <a href="classes/AddIndicatorsUrduTranslation1691050669098.html" data-type="entity-link" >AddIndicatorsUrduTranslation1691050669098</a>
                            </li>
                            <li class="link">
                                <a href="classes/AddInviteSupplierPermission1648441716735.html" data-type="entity-link" >AddInviteSupplierPermission1648441716735</a>
                            </li>
                            <li class="link">
                                <a href="classes/AddInviteSupplierRolePermission1648442882708.html" data-type="entity-link" >AddInviteSupplierRolePermission1648442882708</a>
                            </li>
                            <li class="link">
                                <a href="classes/AddIsDefaultExternalRiskIndexColumnCategoryTable1721742893677.html" data-type="entity-link" >AddIsDefaultExternalRiskIndexColumnCategoryTable1721742893677</a>
                            </li>
                            <li class="link">
                                <a href="classes/AddNewDataToCategoryTable1725856145487.html" data-type="entity-link" >AddNewDataToCategoryTable1725856145487</a>
                            </li>
                            <li class="link">
                                <a href="classes/AddNewFieldDnaFabricTable1655971800263.html" data-type="entity-link" >AddNewFieldDnaFabricTable1655971800263</a>
                            </li>
                            <li class="link">
                                <a href="classes/AddNewFieldDnaTable1655969189662.html" data-type="entity-link" >AddNewFieldDnaTable1655969189662</a>
                            </li>
                            <li class="link">
                                <a href="classes/AddNewFieldDnaYarnTable1655969348454.html" data-type="entity-link" >AddNewFieldDnaYarnTable1655969348454</a>
                            </li>
                            <li class="link">
                                <a href="classes/AddNewPermissions1687317751847.html" data-type="entity-link" >AddNewPermissions1687317751847</a>
                            </li>
                            <li class="link">
                                <a href="classes/AddOnboardingStatusColumnsTableUser1646881111617.html" data-type="entity-link" >AddOnboardingStatusColumnsTableUser1646881111617</a>
                            </li>
                            <li class="link">
                                <a href="classes/AddOrderSupplierDto.html" data-type="entity-link" >AddOrderSupplierDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/AddOwnerFacilityColumnInFacilityPartnerTable1649903681705.html" data-type="entity-link" >AddOwnerFacilityColumnInFacilityPartnerTable1649903681705</a>
                            </li>
                            <li class="link">
                                <a href="classes/AddPermissionForTheApiUserRole1721634606484.html" data-type="entity-link" >AddPermissionForTheApiUserRole1721634606484</a>
                            </li>
                            <li class="link">
                                <a href="classes/AddPermissionSiteSettingsForAdmin1689008341456.html" data-type="entity-link" >AddPermissionSiteSettingsForAdmin1689008341456</a>
                            </li>
                            <li class="link">
                                <a href="classes/AddProvinceDataToAttributeTable1719453874075.html" data-type="entity-link" >AddProvinceDataToAttributeTable1719453874075</a>
                            </li>
                            <li class="link">
                                <a href="classes/AddRoleFarmMonitorWeb1679971997289.html" data-type="entity-link" >AddRoleFarmMonitorWeb1679971997289</a>
                            </li>
                            <li class="link">
                                <a href="classes/AddRoleIdToSelfAssessmentGroupTable1696318036807.html" data-type="entity-link" >AddRoleIdToSelfAssessmentGroupTable1696318036807</a>
                            </li>
                            <li class="link">
                                <a href="classes/AddRoleIdToSelfAssessmentUploadFileTable1697204786209.html" data-type="entity-link" >AddRoleIdToSelfAssessmentUploadFileTable1697204786209</a>
                            </li>
                            <li class="link">
                                <a href="classes/AddRoleSuperAdmin1680753760816.html" data-type="entity-link" >AddRoleSuperAdmin1680753760816</a>
                            </li>
                            <li class="link">
                                <a href="classes/AddSaqRiskScoreCalculatingColumns1660098938217.html" data-type="entity-link" >AddSaqRiskScoreCalculatingColumns1660098938217</a>
                            </li>
                            <li class="link">
                                <a href="classes/AddSeasonDateToRoleTable1705032389307.html" data-type="entity-link" >AddSeasonDateToRoleTable1705032389307</a>
                            </li>
                            <li class="link">
                                <a href="classes/AddSelfAssessmentQuestionMillRole1655301829247.html" data-type="entity-link" >AddSelfAssessmentQuestionMillRole1655301829247</a>
                            </li>
                            <li class="link">
                                <a href="classes/AddSelfAssessmentQuestionResponseIdAndValueColumnSelfAssessmentAnswerTable1698768551574.html" data-type="entity-link" >AddSelfAssessmentQuestionResponseIdAndValueColumnSelfAssessmentAnswerTable1698768551574</a>
                            </li>
                            <li class="link">
                                <a href="classes/AddSelfAssessmentQuestionSpinnerRole1655299801982.html" data-type="entity-link" >AddSelfAssessmentQuestionSpinnerRole1655299801982</a>
                            </li>
                            <li class="link">
                                <a href="classes/AddSelfAssessmentsGinnerRole1654689678233.html" data-type="entity-link" >AddSelfAssessmentsGinnerRole1654689678233</a>
                            </li>
                            <li class="link">
                                <a href="classes/AddSessionDurationFieldToBusinessDetailTable1698119116860.html" data-type="entity-link" >AddSessionDurationFieldToBusinessDetailTable1698119116860</a>
                            </li>
                            <li class="link">
                                <a href="classes/AddSomeColumnToDnaTestingTable1721789121118.html" data-type="entity-link" >AddSomeColumnToDnaTestingTable1721789121118</a>
                            </li>
                            <li class="link">
                                <a href="classes/AddSomeFieldToRiskAssessmentTable1698394655449.html" data-type="entity-link" >AddSomeFieldToRiskAssessmentTable1698394655449</a>
                            </li>
                            <li class="link">
                                <a href="classes/AddStateColumnsOfSelfAssessmentTable1654802179300.html" data-type="entity-link" >AddStateColumnsOfSelfAssessmentTable1654802179300</a>
                            </li>
                            <li class="link">
                                <a href="classes/AddStatusToGrievanceReportTable1699950715583.html" data-type="entity-link" >AddStatusToGrievanceReportTable1699950715583</a>
                            </li>
                            <li class="link">
                                <a href="classes/AddSubPermissionTablePermission1693193020341.html" data-type="entity-link" >AddSubPermissionTablePermission1693193020341</a>
                            </li>
                            <li class="link">
                                <a href="classes/AddSupplierDto.html" data-type="entity-link" >AddSupplierDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/AddSupplyChainNodeDto.html" data-type="entity-link" >AddSupplyChainNodeDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/AddSupplyChainNodesDto.html" data-type="entity-link" >AddSupplyChainNodesDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/AddTopIssuesAndExternalRiskIndicatorsColumnFacilityTable1712645541018.html" data-type="entity-link" >AddTopIssuesAndExternalRiskIndicatorsColumnFacilityTable1712645541018</a>
                            </li>
                            <li class="link">
                                <a href="classes/AddTranslationColumnSelfAssessmentQuestionResponseTable1699548916078.html" data-type="entity-link" >AddTranslationColumnSelfAssessmentQuestionResponseTable1699548916078</a>
                            </li>
                            <li class="link">
                                <a href="classes/AddUniqueConstrainFarmIdAndFarmProfileId1658474137007.html" data-type="entity-link" >AddUniqueConstrainFarmIdAndFarmProfileId1658474137007</a>
                            </li>
                            <li class="link">
                                <a href="classes/AddUniqueConstrainTableRiskScore1655266724495.html" data-type="entity-link" >AddUniqueConstrainTableRiskScore1655266724495</a>
                            </li>
                            <li class="link">
                                <a href="classes/AddUniqueConstraintToSelfAssessmentGroupTable1734491946662.html" data-type="entity-link" >AddUniqueConstraintToSelfAssessmentGroupTable1734491946662</a>
                            </li>
                            <li class="link">
                                <a href="classes/AddUniqueIndexToUserEmail1650535965064.html" data-type="entity-link" >AddUniqueIndexToUserEmail1650535965064</a>
                            </li>
                            <li class="link">
                                <a href="classes/AddUrlsAndDescriptionColumnCategoryTable1721233376540.html" data-type="entity-link" >AddUrlsAndDescriptionColumnCategoryTable1721233376540</a>
                            </li>
                            <li class="link">
                                <a href="classes/AddUserIdColumnFacilityRoleAttributeTable1714719979187.html" data-type="entity-link" >AddUserIdColumnFacilityRoleAttributeTable1714719979187</a>
                            </li>
                            <li class="link">
                                <a href="classes/AddUserTypeColumnUserTable1711960567472.html" data-type="entity-link" >AddUserTypeColumnUserTable1711960567472</a>
                            </li>
                            <li class="link">
                                <a href="classes/AdminGetAndSearchSupplierQuery.html" data-type="entity-link" >AdminGetAndSearchSupplierQuery</a>
                            </li>
                            <li class="link">
                                <a href="classes/AdminUpdateUserDto.html" data-type="entity-link" >AdminUpdateUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/AllowNullableColumnNameTableFacility1646642064555.html" data-type="entity-link" >AllowNullableColumnNameTableFacility1646642064555</a>
                            </li>
                            <li class="link">
                                <a href="classes/AllowNullCertificationsTableProduct1701107297844.html" data-type="entity-link" >AllowNullCertificationsTableProduct1701107297844</a>
                            </li>
                            <li class="link">
                                <a href="classes/AllowNullVerifiedPercentageTableProduct1700552428974.html" data-type="entity-link" >AllowNullVerifiedPercentageTableProduct1700552428974</a>
                            </li>
                            <li class="link">
                                <a href="classes/AlterBusinessDetailTable1693369311126.html" data-type="entity-link" >AlterBusinessDetailTable1693369311126</a>
                            </li>
                            <li class="link">
                                <a href="classes/AlterChainOfCustodyFieldToFacilityTable1698226780429.html" data-type="entity-link" >AlterChainOfCustodyFieldToFacilityTable1698226780429</a>
                            </li>
                            <li class="link">
                                <a href="classes/AlterColumnCertificationExpiredDateNullable1658383647476.html" data-type="entity-link" >AlterColumnCertificationExpiredDateNullable1658383647476</a>
                            </li>
                            <li class="link">
                                <a href="classes/AlterColumnCottonCertificationRawCottonTable1649738250403.html" data-type="entity-link" >AlterColumnCottonCertificationRawCottonTable1649738250403</a>
                            </li>
                            <li class="link">
                                <a href="classes/AlterColumnFacilityTypeNullable1649901142057.html" data-type="entity-link" >AlterColumnFacilityTypeNullable1649901142057</a>
                            </li>
                            <li class="link">
                                <a href="classes/AlterColumnOptionNullableTableSaqResponse1699417511654.html" data-type="entity-link" >AlterColumnOptionNullableTableSaqResponse1699417511654</a>
                            </li>
                            <li class="link">
                                <a href="classes/AlterColumnSetAndGroupTablePermission1687076223455.html" data-type="entity-link" >AlterColumnSetAndGroupTablePermission1687076223455</a>
                            </li>
                            <li class="link">
                                <a href="classes/AlterColumnTypeTableFacility1686106947525.html" data-type="entity-link" >AlterColumnTypeTableFacility1686106947525</a>
                            </li>
                            <li class="link">
                                <a href="classes/AlterColumnTypeTableFacilityPartner1686108574778.html" data-type="entity-link" >AlterColumnTypeTableFacilityPartner1686108574778</a>
                            </li>
                            <li class="link">
                                <a href="classes/AlterConstraintUniqueFromTransformationTable1646727912978.html" data-type="entity-link" >AlterConstraintUniqueFromTransformationTable1646727912978</a>
                            </li>
                            <li class="link">
                                <a href="classes/AlterCountryIdToCountryIdsToBusinessDetailTable1698910800743.html" data-type="entity-link" >AlterCountryIdToCountryIdsToBusinessDetailTable1698910800743</a>
                            </li>
                            <li class="link">
                                <a href="classes/AlterGeographicalRiskLevelTable1698742962850.html" data-type="entity-link" >AlterGeographicalRiskLevelTable1698742962850</a>
                            </li>
                            <li class="link">
                                <a href="classes/AlterPermissionAdministerUsersOfAdmin1687493419597.html" data-type="entity-link" >AlterPermissionAdministerUsersOfAdmin1687493419597</a>
                            </li>
                            <li class="link">
                                <a href="classes/AlterQuantityPrecisionTableProduct1701310759624.html" data-type="entity-link" >AlterQuantityPrecisionTableProduct1701310759624</a>
                            </li>
                            <li class="link">
                                <a href="classes/AlterSupplyChainNodeMetadataTableDropOutputProductDefinitionIdsColumn1730394812426.html" data-type="entity-link" >AlterSupplyChainNodeMetadataTableDropOutputProductDefinitionIdsColumn1730394812426</a>
                            </li>
                            <li class="link">
                                <a href="classes/AlterSupplyChainNodeTableAddOutputProductDefinitionIdsColumn1730394611123.html" data-type="entity-link" >AlterSupplyChainNodeTableAddOutputProductDefinitionIdsColumn1730394611123</a>
                            </li>
                            <li class="link">
                                <a href="classes/AlterSupplyChainNodeTableRemoveCalculateFieldIdColumn1730394536342.html" data-type="entity-link" >AlterSupplyChainNodeTableRemoveCalculateFieldIdColumn1730394536342</a>
                            </li>
                            <li class="link">
                                <a href="classes/AlterTableGrievanceReportDropLatestActivityAtNotNull1686544902785.html" data-type="entity-link" >AlterTableGrievanceReportDropLatestActivityAtNotNull1686544902785</a>
                            </li>
                            <li class="link">
                                <a href="classes/AlterTotalWeightPrecisionFabricTable1682047855402.html" data-type="entity-link" >AlterTotalWeightPrecisionFabricTable1682047855402</a>
                            </li>
                            <li class="link">
                                <a href="classes/AlterTotalWeightPrecisionLotTable1682047806589.html" data-type="entity-link" >AlterTotalWeightPrecisionLotTable1682047806589</a>
                            </li>
                            <li class="link">
                                <a href="classes/AlterTotalWeightPrecisionTransactionTable1681968833096.html" data-type="entity-link" >AlterTotalWeightPrecisionTransactionTable1681968833096</a>
                            </li>
                            <li class="link">
                                <a href="classes/AlterTotalWeightPrecisionYarnTable1682047750845.html" data-type="entity-link" >AlterTotalWeightPrecisionYarnTable1682047750845</a>
                            </li>
                            <li class="link">
                                <a href="classes/AnswerAssessmentDto.html" data-type="entity-link" >AnswerAssessmentDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/AnswerDto.html" data-type="entity-link" >AnswerDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/AnswerDto-1.html" data-type="entity-link" >AnswerDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/AnswerResponse.html" data-type="entity-link" >AnswerResponse</a>
                            </li>
                            <li class="link">
                                <a href="classes/AnswerSelfAssessmentDto.html" data-type="entity-link" >AnswerSelfAssessmentDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/AnswerValueDto.html" data-type="entity-link" >AnswerValueDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/AnswerValueDto-1.html" data-type="entity-link" >AnswerValueDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/AssessmentValidateAnswerException.html" data-type="entity-link" >AssessmentValidateAnswerException</a>
                            </li>
                            <li class="link">
                                <a href="classes/AssessmentValidateException.html" data-type="entity-link" >AssessmentValidateException</a>
                            </li>
                            <li class="link">
                                <a href="classes/AssignCapDto.html" data-type="entity-link" >AssignCapDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/AssignPermissionCalculationRoleMill1649389820723.html" data-type="entity-link" >AssignPermissionCalculationRoleMill1649389820723</a>
                            </li>
                            <li class="link">
                                <a href="classes/AssignPermissionsToRoleFarmMonitorWeb1679979584507.html" data-type="entity-link" >AssignPermissionsToRoleFarmMonitorWeb1679979584507</a>
                            </li>
                            <li class="link">
                                <a href="classes/AssignProductDto.html" data-type="entity-link" >AssignProductDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/AttributeFileRepository.html" data-type="entity-link" >AttributeFileRepository</a>
                            </li>
                            <li class="link">
                                <a href="classes/AttributeOptionDto.html" data-type="entity-link" >AttributeOptionDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/AttributeOptionResponse.html" data-type="entity-link" >AttributeOptionResponse</a>
                            </li>
                            <li class="link">
                                <a href="classes/AttributeRepository.html" data-type="entity-link" >AttributeRepository</a>
                            </li>
                            <li class="link">
                                <a href="classes/AttributeResponse.html" data-type="entity-link" >AttributeResponse</a>
                            </li>
                            <li class="link">
                                <a href="classes/BadDataRequestException.html" data-type="entity-link" >BadDataRequestException</a>
                            </li>
                            <li class="link">
                                <a href="classes/BaseController.html" data-type="entity-link" >BaseController</a>
                            </li>
                            <li class="link">
                                <a href="classes/BaseEntity.html" data-type="entity-link" >BaseEntity</a>
                            </li>
                            <li class="link">
                                <a href="classes/BaseEntityResponse.html" data-type="entity-link" >BaseEntityResponse</a>
                            </li>
                            <li class="link">
                                <a href="classes/BaseGuard.html" data-type="entity-link" >BaseGuard</a>
                            </li>
                            <li class="link">
                                <a href="classes/BaseMicroservice.html" data-type="entity-link" >BaseMicroservice</a>
                            </li>
                            <li class="link">
                                <a href="classes/BaseRepository.html" data-type="entity-link" >BaseRepository</a>
                            </li>
                            <li class="link">
                                <a href="classes/BaseSeeder.html" data-type="entity-link" >BaseSeeder</a>
                            </li>
                            <li class="link">
                                <a href="classes/BaseSelfAssessmentValidator.html" data-type="entity-link" >BaseSelfAssessmentValidator</a>
                            </li>
                            <li class="link">
                                <a href="classes/Bootstrap.html" data-type="entity-link" >Bootstrap</a>
                            </li>
                            <li class="link">
                                <a href="classes/BrandAddSuppliersResponse.html" data-type="entity-link" >BrandAddSuppliersResponse</a>
                            </li>
                            <li class="link">
                                <a href="classes/BrandGetAndSearchSupplierQuery.html" data-type="entity-link" >BrandGetAndSearchSupplierQuery</a>
                            </li>
                            <li class="link">
                                <a href="classes/BrandGetSupplierListResponse.html" data-type="entity-link" >BrandGetSupplierListResponse</a>
                            </li>
                            <li class="link">
                                <a href="classes/BrandInformationDto.html" data-type="entity-link" >BrandInformationDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/BrandSupplierPaginationResponse.html" data-type="entity-link" >BrandSupplierPaginationResponse</a>
                            </li>
                            <li class="link">
                                <a href="classes/BrokerGetInvitablePartnersResponse.html" data-type="entity-link" >BrokerGetInvitablePartnersResponse</a>
                            </li>
                            <li class="link">
                                <a href="classes/BrokerInformationDto.html" data-type="entity-link" >BrokerInformationDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/BrokerPartnerDto.html" data-type="entity-link" >BrokerPartnerDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/BrokerPartnerInformationDto.html" data-type="entity-link" >BrokerPartnerInformationDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/BusinessDetailRepository.html" data-type="entity-link" >BusinessDetailRepository</a>
                            </li>
                            <li class="link">
                                <a href="classes/BusinessDetailResponse.html" data-type="entity-link" >BusinessDetailResponse</a>
                            </li>
                            <li class="link">
                                <a href="classes/BusinessDetailTestHelper.html" data-type="entity-link" >BusinessDetailTestHelper</a>
                            </li>
                            <li class="link">
                                <a href="classes/CalculateFieldInputDto.html" data-type="entity-link" >CalculateFieldInputDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CalculateFieldRepository.html" data-type="entity-link" >CalculateFieldRepository</a>
                            </li>
                            <li class="link">
                                <a href="classes/CalculationItemResponse.html" data-type="entity-link" >CalculationItemResponse</a>
                            </li>
                            <li class="link">
                                <a href="classes/CalculationResponse.html" data-type="entity-link" >CalculationResponse</a>
                            </li>
                            <li class="link">
                                <a href="classes/CapCommentRepository.html" data-type="entity-link" >CapCommentRepository</a>
                            </li>
                            <li class="link">
                                <a href="classes/CapCommentResponse.html" data-type="entity-link" >CapCommentResponse</a>
                            </li>
                            <li class="link">
                                <a href="classes/CapCommentTestHelper.html" data-type="entity-link" >CapCommentTestHelper</a>
                            </li>
                            <li class="link">
                                <a href="classes/CapitalizeFirstLetterTransform.html" data-type="entity-link" >CapitalizeFirstLetterTransform</a>
                            </li>
                            <li class="link">
                                <a href="classes/CapRepository.html" data-type="entity-link" >CapRepository</a>
                            </li>
                            <li class="link">
                                <a href="classes/CapResponse.html" data-type="entity-link" >CapResponse</a>
                            </li>
                            <li class="link">
                                <a href="classes/CapTestHelper.html" data-type="entity-link" >CapTestHelper</a>
                            </li>
                            <li class="link">
                                <a href="classes/CategoryFilterDto.html" data-type="entity-link" >CategoryFilterDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CategoryRepository.html" data-type="entity-link" >CategoryRepository</a>
                            </li>
                            <li class="link">
                                <a href="classes/CategoryResponse.html" data-type="entity-link" >CategoryResponse</a>
                            </li>
                            <li class="link">
                                <a href="classes/CategoryRiskDetailResponse.html" data-type="entity-link" >CategoryRiskDetailResponse</a>
                            </li>
                            <li class="link">
                                <a href="classes/CategoryRiskResponse.html" data-type="entity-link" >CategoryRiskResponse</a>
                            </li>
                            <li class="link">
                                <a href="classes/CategoryTestHelper.html" data-type="entity-link" >CategoryTestHelper</a>
                            </li>
                            <li class="link">
                                <a href="classes/ChangePasswordDto.html" data-type="entity-link" >ChangePasswordDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/ChangeSomeFieldTableCap1715054389728.html" data-type="entity-link" >ChangeSomeFieldTableCap1715054389728</a>
                            </li>
                            <li class="link">
                                <a href="classes/ChangeSomeFieldTableCapComment1715053986372.html" data-type="entity-link" >ChangeSomeFieldTableCapComment1715053986372</a>
                            </li>
                            <li class="link">
                                <a href="classes/ChangeTypeFieldsOrdersTable1649928649950.html" data-type="entity-link" >ChangeTypeFieldsOrdersTable1649928649950</a>
                            </li>
                            <li class="link">
                                <a href="classes/ChangeTypeMoistureLevelLotTable1657093822205.html" data-type="entity-link" >ChangeTypeMoistureLevelLotTable1657093822205</a>
                            </li>
                            <li class="link">
                                <a href="classes/ChangeTypeMoistureLevelRawCottonTable1657081781898.html" data-type="entity-link" >ChangeTypeMoistureLevelRawCottonTable1657081781898</a>
                            </li>
                            <li class="link">
                                <a href="classes/ChangeTypeValueUploadFieldsRecordProductTable1698050686891.html" data-type="entity-link" >ChangeTypeValueUploadFieldsRecordProductTable1698050686891</a>
                            </li>
                            <li class="link">
                                <a href="classes/ChangeTypeValueUploadFieldsTransactionTable1698044599821.html" data-type="entity-link" >ChangeTypeValueUploadFieldsTransactionTable1698044599821</a>
                            </li>
                            <li class="link">
                                <a href="classes/CheckOarIdDto.html" data-type="entity-link" >CheckOarIdDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CheckOarIdResponse.html" data-type="entity-link" >CheckOarIdResponse</a>
                            </li>
                            <li class="link">
                                <a href="classes/CheckResetTokenDto.html" data-type="entity-link" >CheckResetTokenDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/ChoiceSelfAssessmentValidator.html" data-type="entity-link" >ChoiceSelfAssessmentValidator</a>
                            </li>
                            <li class="link">
                                <a href="classes/CommentCapDto.html" data-type="entity-link" >CommentCapDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CommoditiesResponse.html" data-type="entity-link" >CommoditiesResponse</a>
                            </li>
                            <li class="link">
                                <a href="classes/CommodityRepository.html" data-type="entity-link" >CommodityRepository</a>
                            </li>
                            <li class="link">
                                <a href="classes/CommodityRiskRepository.html" data-type="entity-link" >CommodityRiskRepository</a>
                            </li>
                            <li class="link">
                                <a href="classes/ConditionQuestionResponse.html" data-type="entity-link" >ConditionQuestionResponse</a>
                            </li>
                            <li class="link">
                                <a href="classes/ConvertCountryNameToCountryId1718877760264.html" data-type="entity-link" >ConvertCountryNameToCountryId1718877760264</a>
                            </li>
                            <li class="link">
                                <a href="classes/ConvertObjectToArrayToTransactionTable1701232070691.html" data-type="entity-link" >ConvertObjectToArrayToTransactionTable1701232070691</a>
                            </li>
                            <li class="link">
                                <a href="classes/CoordinateDto.html" data-type="entity-link" >CoordinateDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CoordinateTypeResponse.html" data-type="entity-link" >CoordinateTypeResponse</a>
                            </li>
                            <li class="link">
                                <a href="classes/CopyDataFromFacilityTableToFacilityRoleAttributeTable1719054268268.html" data-type="entity-link" >CopyDataFromFacilityTableToFacilityRoleAttributeTable1719054268268</a>
                            </li>
                            <li class="link">
                                <a href="classes/CorrectTypoPercentageSaq1658131884062.html" data-type="entity-link" >CorrectTypoPercentageSaq1658131884062</a>
                            </li>
                            <li class="link">
                                <a href="classes/CountRiskLevelResponse.html" data-type="entity-link" >CountRiskLevelResponse</a>
                            </li>
                            <li class="link">
                                <a href="classes/CountryRepository.html" data-type="entity-link" >CountryRepository</a>
                            </li>
                            <li class="link">
                                <a href="classes/CountryResponse.html" data-type="entity-link" >CountryResponse</a>
                            </li>
                            <li class="link">
                                <a href="classes/CrawlLocationsProcessor.html" data-type="entity-link" >CrawlLocationsProcessor</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateAdditionalAttributeDto.html" data-type="entity-link" >CreateAdditionalAttributeDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateAndInsertDataCommodityTable1721564483957.html" data-type="entity-link" >CreateAndInsertDataCommodityTable1721564483957</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateAttributeDto.html" data-type="entity-link" >CreateAttributeDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateAttributeTable1692690144082.html" data-type="entity-link" >CreateAttributeTable1692690144082</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateAuditorFacilityData1648486161554.html" data-type="entity-link" >CreateAuditorFacilityData1648486161554</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateBaleTable1646397471754.html" data-type="entity-link" >CreateBaleTable1646397471754</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateBrandFacilityForDefaultBrandUser1649979122443.html" data-type="entity-link" >CreateBrandFacilityForDefaultBrandUser1649979122443</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateCalculateFieldTable1716803976476.html" data-type="entity-link" >CreateCalculateFieldTable1716803976476</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateCapCommentTable1713172758514.html" data-type="entity-link" >CreateCapCommentTable1713172758514</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateCapRequestExtensionTable1722832814341.html" data-type="entity-link" >CreateCapRequestExtensionTable1722832814341</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateCapTable1713169811836.html" data-type="entity-link" >CreateCapTable1713169811836</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateCategoryTable1680161744598.html" data-type="entity-link" >CreateCategoryTable1680161744598</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateCommodityRiskDto.html" data-type="entity-link" >CreateCommodityRiskDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateCommodityRiskTable1716363585404.html" data-type="entity-link" >CreateCommodityRiskTable1716363585404</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateCommunityRiskScanReportDto.html" data-type="entity-link" >CreateCommunityRiskScanReportDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateDistrictTable1646029026168.html" data-type="entity-link" >CreateDistrictTable1646029026168</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateDnaIsotopicTestingDto.html" data-type="entity-link" >CreateDnaIsotopicTestingDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateDnaTestingDto.html" data-type="entity-link" >CreateDnaTestingDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateDnaTestTable1659424363320.html" data-type="entity-link" >CreateDnaTestTable1659424363320</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateEventTable1649047840601.html" data-type="entity-link" >CreateEventTable1649047840601</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateExternalRiskIndexDto.html" data-type="entity-link" >CreateExternalRiskIndexDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateFabricTable1647416142558.html" data-type="entity-link" >CreateFabricTable1647416142558</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateFacilityForDefaultSystemUsers1646385390054.html" data-type="entity-link" >CreateFacilityForDefaultSystemUsers1646385390054</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateFacilityItemTable1646367293950.html" data-type="entity-link" >CreateFacilityItemTable1646367293950</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateFacilityRoleAttributeTable1710813318931.html" data-type="entity-link" >CreateFacilityRoleAttributeTable1710813318931</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateFacilityTable1645027019065.html" data-type="entity-link" >CreateFacilityTable1645027019065</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateFacilityUserTable1645067442134.html" data-type="entity-link" >CreateFacilityUserTable1645067442134</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateFarmGroupAndFarmRelationship1653619914184.html" data-type="entity-link" >CreateFarmGroupAndFarmRelationship1653619914184</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateFarmGroupProfileForExistingFarmGroup1653552612926.html" data-type="entity-link" >CreateFarmGroupProfileForExistingFarmGroup1653552612926</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateFarmGroupProfileTableMigration1653551639655.html" data-type="entity-link" >CreateFarmGroupProfileTableMigration1653551639655</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateFarmMonitorFacilityData1648487756658.html" data-type="entity-link" >CreateFarmMonitorFacilityData1648487756658</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateFarmProfileTableMigration1653619577282.html" data-type="entity-link" >CreateFarmProfileTableMigration1653619577282</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateFarmTableMigration1653552222241.html" data-type="entity-link" >CreateFarmTableMigration1653552222241</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateFileTable1650414705838.html" data-type="entity-link" >CreateFileTable1650414705838</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateGeographicalRiskLevelTable1695956785609.html" data-type="entity-link" >CreateGeographicalRiskLevelTable1695956785609</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateGrievanceReportDto.html" data-type="entity-link" >CreateGrievanceReportDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateGrievanceReportResponseTable1649048573030.html" data-type="entity-link" >CreateGrievanceReportResponseTable1649048573030</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateGrievanceReportTable1648463744390.html" data-type="entity-link" >CreateGrievanceReportTable1648463744390</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateIncidentReportDto.html" data-type="entity-link" >CreateIncidentReportDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateIndicator.html" data-type="entity-link" >CreateIndicator</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateLaborRiskTable1680166698432.html" data-type="entity-link" >CreateLaborRiskTable1680166698432</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateLotTable1646370993710.html" data-type="entity-link" >CreateLotTable1646370993710</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateNestedCategories.html" data-type="entity-link" >CreateNestedCategories</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateNestedCategory.html" data-type="entity-link" >CreateNestedCategory</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateNewUserDto.html" data-type="entity-link" >CreateNewUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateOrderDto.html" data-type="entity-link" >CreateOrderDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateOrderSupplierTable1650877222077.html" data-type="entity-link" >CreateOrderSupplierTable1650877222077</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateOtpTable1622781467603.html" data-type="entity-link" >CreateOtpTable1622781467603</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreatePermissionData1645454032980.html" data-type="entity-link" >CreatePermissionData1645454032980</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreatePermissionGroupTable1687075852389.html" data-type="entity-link" >CreatePermissionGroupTable1687075852389</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreatePermissionTable1644920212441.html" data-type="entity-link" >CreatePermissionTable1644920212441</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateProductDefinitionAttributeDto.html" data-type="entity-link" >CreateProductDefinitionAttributeDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateProductDefinitionAttributeTable1692690319517.html" data-type="entity-link" >CreateProductDefinitionAttributeTable1692690319517</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateProductDefinitionDto.html" data-type="entity-link" >CreateProductDefinitionDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateProductDefinitionTable1692330661117.html" data-type="entity-link" >CreateProductDefinitionTable1692330661117</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateProductTable1692332721048.html" data-type="entity-link" >CreateProductTable1692332721048</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateQrCodeBatchTable1647327749468.html" data-type="entity-link" >CreateQrCodeBatchTable1647327749468</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateQrCodeTable1647327779975.html" data-type="entity-link" >CreateQrCodeTable1647327779975</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateRawCottonTable1646378196395.html" data-type="entity-link" >CreateRawCottonTable1646378196395</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateRecordProductTable1647569890873.html" data-type="entity-link" >CreateRecordProductTable1647569890873</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateRoleAttributeDto.html" data-type="entity-link" >CreateRoleAttributeDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateRoleAttributeTable1710812918007.html" data-type="entity-link" >CreateRoleAttributeTable1710812918007</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateRoleData1645453870551.html" data-type="entity-link" >CreateRoleData1645453870551</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateRoleDto.html" data-type="entity-link" >CreateRoleDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateRoleHasPermissionTable1644920398136.html" data-type="entity-link" >CreateRoleHasPermissionTable1644920398136</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateRoleTable1644919103465.html" data-type="entity-link" >CreateRoleTable1644919103465</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateSelfAssessmentAnswerMappingTable1700052799217.html" data-type="entity-link" >CreateSelfAssessmentAnswerMappingTable1700052799217</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateSelfAssessmentQuestionResponseTable1695979960028.html" data-type="entity-link" >CreateSelfAssessmentQuestionResponseTable1695979960028</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateSelfAssessmentTranslationFile1699948816922.html" data-type="entity-link" >CreateSelfAssessmentTranslationFile1699948816922</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateSelfAssessmentUploadFileTable1696475483427.html" data-type="entity-link" >CreateSelfAssessmentUploadFileTable1696475483427</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateShortTokenResponse.html" data-type="entity-link" >CreateShortTokenResponse</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateSubIndicator.html" data-type="entity-link" >CreateSubIndicator</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateSupplyChainNodeMetadataTable1726462180223.html" data-type="entity-link" >CreateSupplyChainNodeMetadataTable1726462180223</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateSystemRolePermissionData1645457490446.html" data-type="entity-link" >CreateSystemRolePermissionData1645457490446</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateSystemUserData1645455208400.html" data-type="entity-link" >CreateSystemUserData1645455208400</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateTableAttributeFile1694960829117.html" data-type="entity-link" >CreateTableAttributeFile1694960829117</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateTableBusinessDetail1689007513027.html" data-type="entity-link" >CreateTableBusinessDetail1689007513027</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateTableCountry1627409606398.html" data-type="entity-link" >CreateTableCountry1627409606398</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateTableFacilityPartner1646040915690.html" data-type="entity-link" >CreateTableFacilityPartner1646040915690</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateTableProductDefinitionFile1694960861658.html" data-type="entity-link" >CreateTableProductDefinitionFile1694960861658</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateTableProvince1646026855805.html" data-type="entity-link" >CreateTableProvince1646026855805</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateTableRiskAssessment1694417598522.html" data-type="entity-link" >CreateTableRiskAssessment1694417598522</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateTableRiskScore1655195425752.html" data-type="entity-link" >CreateTableRiskScore1655195425752</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateTableSelfAssessment1654643956581.html" data-type="entity-link" >CreateTableSelfAssessment1654643956581</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateTableSelfAssessmentAnswer1654647697436.html" data-type="entity-link" >CreateTableSelfAssessmentAnswer1654647697436</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateTableSelfAssessmentGroup1654643625380.html" data-type="entity-link" >CreateTableSelfAssessmentGroup1654643625380</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateTableSelfAssessmentQuestion1654646040339.html" data-type="entity-link" >CreateTableSelfAssessmentQuestion1654646040339</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateTableSupplyChainNode1693838413993.html" data-type="entity-link" >CreateTableSupplyChainNode1693838413993</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateTableTaxonomyExploitationFile1690306830811.html" data-type="entity-link" >CreateTableTaxonomyExploitationFile1690306830811</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateTransactionItemTable1646370888875.html" data-type="entity-link" >CreateTransactionItemTable1646370888875</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateTransactionTable1646367332075.html" data-type="entity-link" >CreateTransactionTable1646367332075</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateTransformationItemTable1646386677711.html" data-type="entity-link" >CreateTransformationItemTable1646386677711</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateTransformationTable1646386594956.html" data-type="entity-link" >CreateTransformationTable1646386594956</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateUserApiLimitTable1723042462990.html" data-type="entity-link" >CreateUserApiLimitTable1723042462990</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateUserHasPermissionTable1644979090920.html" data-type="entity-link" >CreateUserHasPermissionTable1644979090920</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateUserHasRoleTable1644979036929.html" data-type="entity-link" >CreateUserHasRoleTable1644979036929</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateUserTable1622781431279.html" data-type="entity-link" >CreateUserTable1622781431279</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateYarnTable1646837692202.html" data-type="entity-link" >CreateYarnTable1646837692202</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreatOrderTable1649236695309.html" data-type="entity-link" >CreatOrderTable1649236695309</a>
                            </li>
                            <li class="link">
                                <a href="classes/DatabaseHelper.html" data-type="entity-link" >DatabaseHelper</a>
                            </li>
                            <li class="link">
                                <a href="classes/DateTransformer.html" data-type="entity-link" >DateTransformer</a>
                            </li>
                            <li class="link">
                                <a href="classes/DeleteColumnIsArchivedTableCap1714984441651.html" data-type="entity-link" >DeleteColumnIsArchivedTableCap1714984441651</a>
                            </li>
                            <li class="link">
                                <a href="classes/DeleteColumnTierTableOrderSupplier1700111511106.html" data-type="entity-link" >DeleteColumnTierTableOrderSupplier1700111511106</a>
                            </li>
                            <li class="link">
                                <a href="classes/DeleteDataAttributeTable1712214034643.html" data-type="entity-link" >DeleteDataAttributeTable1712214034643</a>
                            </li>
                            <li class="link">
                                <a href="classes/DeleteIsSupplierColumnToUserTable1695963529514.html" data-type="entity-link" >DeleteIsSupplierColumnToUserTable1695963529514</a>
                            </li>
                            <li class="link">
                                <a href="classes/DeleteSupplyChainNodesDto.html" data-type="entity-link" >DeleteSupplyChainNodesDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/DistrictRepository.html" data-type="entity-link" >DistrictRepository</a>
                            </li>
                            <li class="link">
                                <a href="classes/DistrictResponse.html" data-type="entity-link" >DistrictResponse</a>
                            </li>
                            <li class="link">
                                <a href="classes/DnaTestingPaginationResponse.html" data-type="entity-link" >DnaTestingPaginationResponse</a>
                            </li>
                            <li class="link">
                                <a href="classes/DnaTestingRepository.html" data-type="entity-link" >DnaTestingRepository</a>
                            </li>
                            <li class="link">
                                <a href="classes/DnaTestingResponse.html" data-type="entity-link" >DnaTestingResponse</a>
                            </li>
                            <li class="link">
                                <a href="classes/DnaTestProofUploadTypeResponse.html" data-type="entity-link" >DnaTestProofUploadTypeResponse</a>
                            </li>
                            <li class="link">
                                <a href="classes/DropColumnEntityTypeTableFacilityItem1700637286408.html" data-type="entity-link" >DropColumnEntityTypeTableFacilityItem1700637286408</a>
                            </li>
                            <li class="link">
                                <a href="classes/DropColumnEntityTypeTableTransactionItem1700636569722.html" data-type="entity-link" >DropColumnEntityTypeTableTransactionItem1700636569722</a>
                            </li>
                            <li class="link">
                                <a href="classes/DropColumnEntityTypeTableTransformationItem1701140182085.html" data-type="entity-link" >DropColumnEntityTypeTableTransformationItem1701140182085</a>
                            </li>
                            <li class="link">
                                <a href="classes/DropColumnGrievanceReportTable1651047556646.html" data-type="entity-link" >DropColumnGrievanceReportTable1651047556646</a>
                            </li>
                            <li class="link">
                                <a href="classes/DropColumnIsRequestExtensionCapTable1722842309669.html" data-type="entity-link" >DropColumnIsRequestExtensionCapTable1722842309669</a>
                            </li>
                            <li class="link">
                                <a href="classes/DropColumnSourceToGrievanceReportTable1701678262507.html" data-type="entity-link" >DropColumnSourceToGrievanceReportTable1701678262507</a>
                            </li>
                            <li class="link">
                                <a href="classes/DropColumnTierTableFacility1701748677114.html" data-type="entity-link" >DropColumnTierTableFacility1701748677114</a>
                            </li>
                            <li class="link">
                                <a href="classes/DropCountryIdsAndCommoditiesColumnBusinessDetailTable1711426395422.html" data-type="entity-link" >DropCountryIdsAndCommoditiesColumnBusinessDetailTable1711426395422</a>
                            </li>
                            <li class="link">
                                <a href="classes/DropFarmRiskAssessmentColumnTableFarmProfile1655978972385.html" data-type="entity-link" >DropFarmRiskAssessmentColumnTableFarmProfile1655978972385</a>
                            </li>
                            <li class="link">
                                <a href="classes/DropNotNullColumnOutputProductDefinitionId1726545811871.html" data-type="entity-link" >DropNotNullColumnOutputProductDefinitionId1726545811871</a>
                            </li>
                            <li class="link">
                                <a href="classes/DropNotNullFromFacilityIdTransactionTable1646902966050.html" data-type="entity-link" >DropNotNullFromFacilityIdTransactionTable1646902966050</a>
                            </li>
                            <li class="link">
                                <a href="classes/DropRawCottonYarnLotFabric1701748807313.html" data-type="entity-link" >DropRawCottonYarnLotFabric1701748807313</a>
                            </li>
                            <li class="link">
                                <a href="classes/DropStatusOfGrievanceReport1681714049140.html" data-type="entity-link" >DropStatusOfGrievanceReport1681714049140</a>
                            </li>
                            <li class="link">
                                <a href="classes/DropStatusOfGrievanceReportResponse1681721722025.html" data-type="entity-link" >DropStatusOfGrievanceReportResponse1681721722025</a>
                            </li>
                            <li class="link">
                                <a href="classes/DropTableSelfAssessmentAnswerMapping1704269424033.html" data-type="entity-link" >DropTableSelfAssessmentAnswerMapping1704269424033</a>
                            </li>
                            <li class="link">
                                <a href="classes/DropUrlAndDescriptionColumnCommodityRiskTable1721232554907.html" data-type="entity-link" >DropUrlAndDescriptionColumnCommodityRiskTable1721232554907</a>
                            </li>
                            <li class="link">
                                <a href="classes/EditCalculateFieldDto.html" data-type="entity-link" >EditCalculateFieldDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/EditGrievanceReportDto.html" data-type="entity-link" >EditGrievanceReportDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/EditOrderDto.html" data-type="entity-link" >EditOrderDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/EditOrderSupplierDto.html" data-type="entity-link" >EditOrderSupplierDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/EditSupplierDto.html" data-type="entity-link" >EditSupplierDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/EnumToListResponse.html" data-type="entity-link" >EnumToListResponse</a>
                            </li>
                            <li class="link">
                                <a href="classes/EventRepository.html" data-type="entity-link" >EventRepository</a>
                            </li>
                            <li class="link">
                                <a href="classes/EventResponse.html" data-type="entity-link" >EventResponse</a>
                            </li>
                            <li class="link">
                                <a href="classes/ExistsValidator.html" data-type="entity-link" >ExistsValidator</a>
                            </li>
                            <li class="link">
                                <a href="classes/ExpressionItemDto.html" data-type="entity-link" >ExpressionItemDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/ExternalRiskIndicatorResponse.html" data-type="entity-link" >ExternalRiskIndicatorResponse</a>
                            </li>
                            <li class="link">
                                <a href="classes/FacilityGroupPaginationResponse.html" data-type="entity-link" >FacilityGroupPaginationResponse</a>
                            </li>
                            <li class="link">
                                <a href="classes/FacilityInformationDto.html" data-type="entity-link" >FacilityInformationDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/FacilityItemRepository.html" data-type="entity-link" >FacilityItemRepository</a>
                            </li>
                            <li class="link">
                                <a href="classes/FacilityNoneAttributeResponse.html" data-type="entity-link" >FacilityNoneAttributeResponse</a>
                            </li>
                            <li class="link">
                                <a href="classes/FacilityPartnerRepository.html" data-type="entity-link" >FacilityPartnerRepository</a>
                            </li>
                            <li class="link">
                                <a href="classes/FacilityPartnerResponse.html" data-type="entity-link" >FacilityPartnerResponse</a>
                            </li>
                            <li class="link">
                                <a href="classes/FacilityRepository.html" data-type="entity-link" >FacilityRepository</a>
                            </li>
                            <li class="link">
                                <a href="classes/FacilityResponse.html" data-type="entity-link" >FacilityResponse</a>
                            </li>
                            <li class="link">
                                <a href="classes/FacilityRiskCalculationProcessor.html" data-type="entity-link" >FacilityRiskCalculationProcessor</a>
                            </li>
                            <li class="link">
                                <a href="classes/FacilityRiskFilterDto.html" data-type="entity-link" >FacilityRiskFilterDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/FacilityRiskResponse.html" data-type="entity-link" >FacilityRiskResponse</a>
                            </li>
                            <li class="link">
                                <a href="classes/FacilityRoleAttributeDto.html" data-type="entity-link" >FacilityRoleAttributeDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/FacilityRoleAttributeRepository.html" data-type="entity-link" >FacilityRoleAttributeRepository</a>
                            </li>
                            <li class="link">
                                <a href="classes/FacilityRoleAttributeResponse.html" data-type="entity-link" >FacilityRoleAttributeResponse</a>
                            </li>
                            <li class="link">
                                <a href="classes/FacilitySearchResponse.html" data-type="entity-link" >FacilitySearchResponse</a>
                            </li>
                            <li class="link">
                                <a href="classes/FacilitySubscriber.html" data-type="entity-link" >FacilitySubscriber</a>
                            </li>
                            <li class="link">
                                <a href="classes/FacilityTestHelper.html" data-type="entity-link" >FacilityTestHelper</a>
                            </li>
                            <li class="link">
                                <a href="classes/FacilityWithUsersResponse.html" data-type="entity-link" >FacilityWithUsersResponse</a>
                            </li>
                            <li class="link">
                                <a href="classes/FarmGroupAdditionalInformationResponse.html" data-type="entity-link" >FarmGroupAdditionalInformationResponse</a>
                            </li>
                            <li class="link">
                                <a href="classes/FarmGroupInformationDto.html" data-type="entity-link" >FarmGroupInformationDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/FarmResponse.html" data-type="entity-link" >FarmResponse</a>
                            </li>
                            <li class="link">
                                <a href="classes/FileDataValidationTypeResponse.html" data-type="entity-link" >FileDataValidationTypeResponse</a>
                            </li>
                            <li class="link">
                                <a href="classes/FileProofDto.html" data-type="entity-link" >FileProofDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/FileRepository.html" data-type="entity-link" >FileRepository</a>
                            </li>
                            <li class="link">
                                <a href="classes/FileResponse.html" data-type="entity-link" >FileResponse</a>
                            </li>
                            <li class="link">
                                <a href="classes/FileResponse-1.html" data-type="entity-link" >FileResponse</a>
                            </li>
                            <li class="link">
                                <a href="classes/FileValidationErrorResponse.html" data-type="entity-link" >FileValidationErrorResponse</a>
                            </li>
                            <li class="link">
                                <a href="classes/FilterTaxonomyExploitationDto.html" data-type="entity-link" >FilterTaxonomyExploitationDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/FindOperatorWithExtras.html" data-type="entity-link" >FindOperatorWithExtras</a>
                            </li>
                            <li class="link">
                                <a href="classes/FloatTransformer.html" data-type="entity-link" >FloatTransformer</a>
                            </li>
                            <li class="link">
                                <a href="classes/GenerateQrCodesDto.html" data-type="entity-link" >GenerateQrCodesDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/GeographicalRiskLevelRepository.html" data-type="entity-link" >GeographicalRiskLevelRepository</a>
                            </li>
                            <li class="link">
                                <a href="classes/GetAddressDto.html" data-type="entity-link" >GetAddressDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/GetAllBusinessPartnerResponse.html" data-type="entity-link" >GetAllBusinessPartnerResponse</a>
                            </li>
                            <li class="link">
                                <a href="classes/GetAllRolesResponse.html" data-type="entity-link" >GetAllRolesResponse</a>
                            </li>
                            <li class="link">
                                <a href="classes/GetAndSearchAssigneeQuery.html" data-type="entity-link" >GetAndSearchAssigneeQuery</a>
                            </li>
                            <li class="link">
                                <a href="classes/GetAndSearchFacilityQuery.html" data-type="entity-link" >GetAndSearchFacilityQuery</a>
                            </li>
                            <li class="link">
                                <a href="classes/GetAndSearchPartnerSupplierQuery.html" data-type="entity-link" >GetAndSearchPartnerSupplierQuery</a>
                            </li>
                            <li class="link">
                                <a href="classes/GetAndSearchPermissionQuery.html" data-type="entity-link" >GetAndSearchPermissionQuery</a>
                            </li>
                            <li class="link">
                                <a href="classes/GetAndSearchQrCodeBatchQuery.html" data-type="entity-link" >GetAndSearchQrCodeBatchQuery</a>
                            </li>
                            <li class="link">
                                <a href="classes/GetAndSearchRoleQuery.html" data-type="entity-link" >GetAndSearchRoleQuery</a>
                            </li>
                            <li class="link">
                                <a href="classes/GetAndSearchSupplierBusinessPartnerQuery.html" data-type="entity-link" >GetAndSearchSupplierBusinessPartnerQuery</a>
                            </li>
                            <li class="link">
                                <a href="classes/GetAndSearchTaxonomyExploitationQuery.html" data-type="entity-link" >GetAndSearchTaxonomyExploitationQuery</a>
                            </li>
                            <li class="link">
                                <a href="classes/GetAndSearchUserQuery.html" data-type="entity-link" >GetAndSearchUserQuery</a>
                            </li>
                            <li class="link">
                                <a href="classes/GetBrandSuppliersQuery.html" data-type="entity-link" >GetBrandSuppliersQuery</a>
                            </li>
                            <li class="link">
                                <a href="classes/GetBusinessPartnerResponse.html" data-type="entity-link" >GetBusinessPartnerResponse</a>
                            </li>
                            <li class="link">
                                <a href="classes/GetBusinessPartnersByFacilityIdQuery.html" data-type="entity-link" >GetBusinessPartnersByFacilityIdQuery</a>
                            </li>
                            <li class="link">
                                <a href="classes/GetCapsDto.html" data-type="entity-link" >GetCapsDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/GetDataExcelService.html" data-type="entity-link" >GetDataExcelService</a>
                            </li>
                            <li class="link">
                                <a href="classes/GetDnaTestingListResponse.html" data-type="entity-link" >GetDnaTestingListResponse</a>
                            </li>
                            <li class="link">
                                <a href="classes/GetEventsQuery.html" data-type="entity-link" >GetEventsQuery</a>
                            </li>
                            <li class="link">
                                <a href="classes/GetFacilitiesByIdQuery.html" data-type="entity-link" >GetFacilitiesByIdQuery</a>
                            </li>
                            <li class="link">
                                <a href="classes/GetFacilityBusinessBrokerPartnerQuery.html" data-type="entity-link" >GetFacilityBusinessBrokerPartnerQuery</a>
                            </li>
                            <li class="link">
                                <a href="classes/GetFacilityGroupByIdResponse.html" data-type="entity-link" >GetFacilityGroupByIdResponse</a>
                            </li>
                            <li class="link">
                                <a href="classes/GetFacilityGroupListResponse.html" data-type="entity-link" >GetFacilityGroupListResponse</a>
                            </li>
                            <li class="link">
                                <a href="classes/GetFacilityResponse.html" data-type="entity-link" >GetFacilityResponse</a>
                            </li>
                            <li class="link">
                                <a href="classes/GetFacilityWithLocationRelationsBaseQuery.html" data-type="entity-link" >GetFacilityWithLocationRelationsBaseQuery</a>
                            </li>
                            <li class="link">
                                <a href="classes/GetFarmAndFarmGroupBaseQuery.html" data-type="entity-link" >GetFarmAndFarmGroupBaseQuery</a>
                            </li>
                            <li class="link">
                                <a href="classes/GetFarmGroupByIdResponse.html" data-type="entity-link" >GetFarmGroupByIdResponse</a>
                            </li>
                            <li class="link">
                                <a href="classes/GetGrievanceReportByIdResponse.html" data-type="entity-link" >GetGrievanceReportByIdResponse</a>
                            </li>
                            <li class="link">
                                <a href="classes/GetHistoryResponse.html" data-type="entity-link" >GetHistoryResponse</a>
                            </li>
                            <li class="link">
                                <a href="classes/GetHistoryTransactionItemResponse.html" data-type="entity-link" >GetHistoryTransactionItemResponse</a>
                            </li>
                            <li class="link">
                                <a href="classes/GetHistoryTransactionQuery.html" data-type="entity-link" >GetHistoryTransactionQuery</a>
                            </li>
                            <li class="link">
                                <a href="classes/GetHistoryTransactionResponse.html" data-type="entity-link" >GetHistoryTransactionResponse</a>
                            </li>
                            <li class="link">
                                <a href="classes/GetHistoryTransformationQuery.html" data-type="entity-link" >GetHistoryTransformationQuery</a>
                            </li>
                            <li class="link">
                                <a href="classes/GetInformationSupplierByIdResponse.html" data-type="entity-link" >GetInformationSupplierByIdResponse</a>
                            </li>
                            <li class="link">
                                <a href="classes/GetInviteInformationResponse.html" data-type="entity-link" >GetInviteInformationResponse</a>
                            </li>
                            <li class="link">
                                <a href="classes/GetListCapQuery.html" data-type="entity-link" >GetListCapQuery</a>
                            </li>
                            <li class="link">
                                <a href="classes/GetListDnaTestQuery.html" data-type="entity-link" >GetListDnaTestQuery</a>
                            </li>
                            <li class="link">
                                <a href="classes/GetListFarmGroupQuery.html" data-type="entity-link" >GetListFarmGroupQuery</a>
                            </li>
                            <li class="link">
                                <a href="classes/GetListGrievanceReportQuery.html" data-type="entity-link" >GetListGrievanceReportQuery</a>
                            </li>
                            <li class="link">
                                <a href="classes/GetListOfAllSuppliersQuery.html" data-type="entity-link" >GetListOfAllSuppliersQuery</a>
                            </li>
                            <li class="link">
                                <a href="classes/GetListOrderQuery.html" data-type="entity-link" >GetListOrderQuery</a>
                            </li>
                            <li class="link">
                                <a href="classes/GetListUserQuery.html" data-type="entity-link" >GetListUserQuery</a>
                            </li>
                            <li class="link">
                                <a href="classes/GetMeResponse.html" data-type="entity-link" >GetMeResponse</a>
                            </li>
                            <li class="link">
                                <a href="classes/GetPartnerResponse.html" data-type="entity-link" >GetPartnerResponse</a>
                            </li>
                            <li class="link">
                                <a href="classes/GetRoleQuery.html" data-type="entity-link" >GetRoleQuery</a>
                            </li>
                            <li class="link">
                                <a href="classes/GetSelfAssessmentListResponse.html" data-type="entity-link" >GetSelfAssessmentListResponse</a>
                            </li>
                            <li class="link">
                                <a href="classes/GetSupplierDetailQuery.html" data-type="entity-link" >GetSupplierDetailQuery</a>
                            </li>
                            <li class="link">
                                <a href="classes/GetTraceResultListResponse.html" data-type="entity-link" >GetTraceResultListResponse</a>
                            </li>
                            <li class="link">
                                <a href="classes/GetUserListResponse.html" data-type="entity-link" >GetUserListResponse</a>
                            </li>
                            <li class="link">
                                <a href="classes/GrievanceReportRepository.html" data-type="entity-link" >GrievanceReportRepository</a>
                            </li>
                            <li class="link">
                                <a href="classes/GrievanceReportResponse.html" data-type="entity-link" >GrievanceReportResponse</a>
                            </li>
                            <li class="link">
                                <a href="classes/GrievanceReportResponseEntityResponse.html" data-type="entity-link" >GrievanceReportResponseEntityResponse</a>
                            </li>
                            <li class="link">
                                <a href="classes/GrievanceReportResponseRepository.html" data-type="entity-link" >GrievanceReportResponseRepository</a>
                            </li>
                            <li class="link">
                                <a href="classes/GrievanceReportTestHelper.html" data-type="entity-link" >GrievanceReportTestHelper</a>
                            </li>
                            <li class="link">
                                <a href="classes/GrievanceReportWithResponsesResponse.html" data-type="entity-link" >GrievanceReportWithResponsesResponse</a>
                            </li>
                            <li class="link">
                                <a href="classes/HistoryPagination.html" data-type="entity-link" >HistoryPagination</a>
                            </li>
                            <li class="link">
                                <a href="classes/HttpBaseService.html" data-type="entity-link" >HttpBaseService</a>
                            </li>
                            <li class="link">
                                <a href="classes/HttpClientException.html" data-type="entity-link" >HttpClientException</a>
                            </li>
                            <li class="link">
                                <a href="classes/HttpExceptionFilter.html" data-type="entity-link" >HttpExceptionFilter</a>
                            </li>
                            <li class="link">
                                <a href="classes/I18nHelper.html" data-type="entity-link" >I18nHelper</a>
                            </li>
                            <li class="link">
                                <a href="classes/ImportDataToGeographicalRiskLevelTable1698743682881.html" data-type="entity-link" >ImportDataToGeographicalRiskLevelTable1698743682881</a>
                            </li>
                            <li class="link">
                                <a href="classes/ImportFacilityGroupDto.html" data-type="entity-link" >ImportFacilityGroupDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/ImportSelfAssessmentFileDto.html" data-type="entity-link" >ImportSelfAssessmentFileDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/ImportSuppliersDto.html" data-type="entity-link" >ImportSuppliersDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/ImportTaxonomyExploitationDto.html" data-type="entity-link" >ImportTaxonomyExploitationDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/ImportUtil.html" data-type="entity-link" >ImportUtil</a>
                            </li>
                            <li class="link">
                                <a href="classes/IncidentReportPaginationResponse.html" data-type="entity-link" >IncidentReportPaginationResponse</a>
                            </li>
                            <li class="link">
                                <a href="classes/IndicatorRiskDetailResponse.html" data-type="entity-link" >IndicatorRiskDetailResponse</a>
                            </li>
                            <li class="link">
                                <a href="classes/IndicatorRiskResponse.html" data-type="entity-link" >IndicatorRiskResponse</a>
                            </li>
                            <li class="link">
                                <a href="classes/InsertCategoryValues1680168286840.html" data-type="entity-link" >InsertCategoryValues1680168286840</a>
                            </li>
                            <li class="link">
                                <a href="classes/InsertCountriesTable1690274398662.html" data-type="entity-link" >InsertCountriesTable1690274398662</a>
                            </li>
                            <li class="link">
                                <a href="classes/InsertDataCommodityRiskTable1718175113243.html" data-type="entity-link" >InsertDataCommodityRiskTable1718175113243</a>
                            </li>
                            <li class="link">
                                <a href="classes/InsertDistrictsTable1690274507414.html" data-type="entity-link" >InsertDistrictsTable1690274507414</a>
                            </li>
                            <li class="link">
                                <a href="classes/InsertExternalRiskIndicatorDataToCategoryTable1711034142086.html" data-type="entity-link" >InsertExternalRiskIndicatorDataToCategoryTable1711034142086</a>
                            </li>
                            <li class="link">
                                <a href="classes/InsertNewDataCommodityRiskTable1725876740591.html" data-type="entity-link" >InsertNewDataCommodityRiskTable1725876740591</a>
                            </li>
                            <li class="link">
                                <a href="classes/InsertProvincesTable1690274469860.html" data-type="entity-link" >InsertProvincesTable1690274469860</a>
                            </li>
                            <li class="link">
                                <a href="classes/InviteBrokerPartnerDto.html" data-type="entity-link" >InviteBrokerPartnerDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/InvitePartnerDto.html" data-type="entity-link" >InvitePartnerDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/InvitePartnerMetadataResponse.html" data-type="entity-link" >InvitePartnerMetadataResponse</a>
                            </li>
                            <li class="link">
                                <a href="classes/InviteProductPartnerDto.html" data-type="entity-link" >InviteProductPartnerDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/InviteTransporterPartnerDto.html" data-type="entity-link" >InviteTransporterPartnerDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/InviteUserDto.html" data-type="entity-link" >InviteUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/InviteUserMail.html" data-type="entity-link" >InviteUserMail</a>
                            </li>
                            <li class="link">
                                <a href="classes/InviteUserResponse.html" data-type="entity-link" >InviteUserResponse</a>
                            </li>
                            <li class="link">
                                <a href="classes/IsEqualOrLessThanValidator.html" data-type="entity-link" >IsEqualOrLessThanValidator</a>
                            </li>
                            <li class="link">
                                <a href="classes/IsEqualOrLongerThanValidator.html" data-type="entity-link" >IsEqualOrLongerThanValidator</a>
                            </li>
                            <li class="link">
                                <a href="classes/IsInWithoutTypeValidator.html" data-type="entity-link" >IsInWithoutTypeValidator</a>
                            </li>
                            <li class="link">
                                <a href="classes/IssueResponse.html" data-type="entity-link" >IssueResponse</a>
                            </li>
                            <li class="link">
                                <a href="classes/IsTimestampValidator.html" data-type="entity-link" >IsTimestampValidator</a>
                            </li>
                            <li class="link">
                                <a href="classes/IsTimezoneValidator.html" data-type="entity-link" >IsTimezoneValidator</a>
                            </li>
                            <li class="link">
                                <a href="classes/LaborRiskDto.html" data-type="entity-link" >LaborRiskDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/LaborRiskRepository.html" data-type="entity-link" >LaborRiskRepository</a>
                            </li>
                            <li class="link">
                                <a href="classes/LaborRiskResponse.html" data-type="entity-link" >LaborRiskResponse</a>
                            </li>
                            <li class="link">
                                <a href="classes/ListTemplateFileResponse.html" data-type="entity-link" >ListTemplateFileResponse</a>
                            </li>
                            <li class="link">
                                <a href="classes/LocationTestHelper.html" data-type="entity-link" >LocationTestHelper</a>
                            </li>
                            <li class="link">
                                <a href="classes/LoginDto.html" data-type="entity-link" >LoginDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/LoginResponse.html" data-type="entity-link" >LoginResponse</a>
                            </li>
                            <li class="link">
                                <a href="classes/LoginUserResponse.html" data-type="entity-link" >LoginUserResponse</a>
                            </li>
                            <li class="link">
                                <a href="classes/LowerTransformer.html" data-type="entity-link" >LowerTransformer</a>
                            </li>
                            <li class="link">
                                <a href="classes/ManualAddedAttributeDto.html" data-type="entity-link" >ManualAddedAttributeDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/ManualAddedDataDto.html" data-type="entity-link" >ManualAddedDataDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/ManualAddedProductDto.html" data-type="entity-link" >ManualAddedProductDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/MappingSupplierResponse.html" data-type="entity-link" >MappingSupplierResponse</a>
                            </li>
                            <li class="link">
                                <a href="classes/MarginOfErrorResponse.html" data-type="entity-link" >MarginOfErrorResponse</a>
                            </li>
                            <li class="link">
                                <a href="classes/MassBalanceResponse.html" data-type="entity-link" >MassBalanceResponse</a>
                            </li>
                            <li class="link">
                                <a href="classes/MergeFarmProfileTableToFacility1698220447139.html" data-type="entity-link" >MergeFarmProfileTableToFacility1698220447139</a>
                            </li>
                            <li class="link">
                                <a href="classes/MicroserviceExceptionFilter.html" data-type="entity-link" >MicroserviceExceptionFilter</a>
                            </li>
                            <li class="link">
                                <a href="classes/MicroserviceHelper.html" data-type="entity-link" >MicroserviceHelper</a>
                            </li>
                            <li class="link">
                                <a href="classes/MigrateDataEventTable1649238267661.html" data-type="entity-link" >MigrateDataEventTable1649238267661</a>
                            </li>
                            <li class="link">
                                <a href="classes/MigrateFacilityForAdminUser1702288750940.html" data-type="entity-link" >MigrateFacilityForAdminUser1702288750940</a>
                            </li>
                            <li class="link">
                                <a href="classes/MigrateProduct1701109326999.html" data-type="entity-link" >MigrateProduct1701109326999</a>
                            </li>
                            <li class="link">
                                <a href="classes/MigrateUserRole1695307567791.html" data-type="entity-link" >MigrateUserRole1695307567791</a>
                            </li>
                            <li class="link">
                                <a href="classes/MigrationSupplyChainNodeToMetadataTable1726462871482.html" data-type="entity-link" >MigrationSupplyChainNodeToMetadataTable1726462871482</a>
                            </li>
                            <li class="link">
                                <a href="classes/MigrationUpdateRoleAttributeTypeValue1730271836073.html" data-type="entity-link" >MigrationUpdateRoleAttributeTypeValue1730271836073</a>
                            </li>
                            <li class="link">
                                <a href="classes/MockDynamicLinkService.html" data-type="entity-link" >MockDynamicLinkService</a>
                            </li>
                            <li class="link">
                                <a href="classes/MultipleIdDto.html" data-type="entity-link" >MultipleIdDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/NewTransportDto.html" data-type="entity-link" >NewTransportDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/NumberInputAssessmentValidator.html" data-type="entity-link" >NumberInputAssessmentValidator</a>
                            </li>
                            <li class="link">
                                <a href="classes/NumericValidator.html" data-type="entity-link" >NumericValidator</a>
                            </li>
                            <li class="link">
                                <a href="classes/OrderPaginationResponse.html" data-type="entity-link" >OrderPaginationResponse</a>
                            </li>
                            <li class="link">
                                <a href="classes/OrderRepository.html" data-type="entity-link" >OrderRepository</a>
                            </li>
                            <li class="link">
                                <a href="classes/OrderResponse.html" data-type="entity-link" >OrderResponse</a>
                            </li>
                            <li class="link">
                                <a href="classes/OrderSupplierRepository.html" data-type="entity-link" >OrderSupplierRepository</a>
                            </li>
                            <li class="link">
                                <a href="classes/OrderSupplierResponse.html" data-type="entity-link" >OrderSupplierResponse</a>
                            </li>
                            <li class="link">
                                <a href="classes/OrderTestHelper.html" data-type="entity-link" >OrderTestHelper</a>
                            </li>
                            <li class="link">
                                <a href="classes/OrderWithSupplierResponse.html" data-type="entity-link" >OrderWithSupplierResponse</a>
                            </li>
                            <li class="link">
                                <a href="classes/OtpRepository.html" data-type="entity-link" >OtpRepository</a>
                            </li>
                            <li class="link">
                                <a href="classes/OutputProductDataDto.html" data-type="entity-link" >OutputProductDataDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/OutputProductDto.html" data-type="entity-link" >OutputProductDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/PaginationResponse.html" data-type="entity-link" >PaginationResponse</a>
                            </li>
                            <li class="link">
                                <a href="classes/ParentDto.html" data-type="entity-link" >ParentDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/PartnerResponse.html" data-type="entity-link" >PartnerResponse</a>
                            </li>
                            <li class="link">
                                <a href="classes/PasswordValidator.html" data-type="entity-link" >PasswordValidator</a>
                            </li>
                            <li class="link">
                                <a href="classes/PermissionRepository.html" data-type="entity-link" >PermissionRepository</a>
                            </li>
                            <li class="link">
                                <a href="classes/PermissionResponse.html" data-type="entity-link" >PermissionResponse</a>
                            </li>
                            <li class="link">
                                <a href="classes/PermissionSeed.html" data-type="entity-link" >PermissionSeed</a>
                            </li>
                            <li class="link">
                                <a href="classes/PermissionWithSubPermissionsResponse.html" data-type="entity-link" >PermissionWithSubPermissionsResponse</a>
                            </li>
                            <li class="link">
                                <a href="classes/PositionDto.html" data-type="entity-link" >PositionDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/ProcessingFacilityDto.html" data-type="entity-link" >ProcessingFacilityDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/ProductCertificationResponse.html" data-type="entity-link" >ProductCertificationResponse</a>
                            </li>
                            <li class="link">
                                <a href="classes/ProductDefinitionAttributeRepository.html" data-type="entity-link" >ProductDefinitionAttributeRepository</a>
                            </li>
                            <li class="link">
                                <a href="classes/ProductDefinitionAttributeResponse.html" data-type="entity-link" >ProductDefinitionAttributeResponse</a>
                            </li>
                            <li class="link">
                                <a href="classes/ProductDefinitionFileRepository.html" data-type="entity-link" >ProductDefinitionFileRepository</a>
                            </li>
                            <li class="link">
                                <a href="classes/ProductDefinitionRepository.html" data-type="entity-link" >ProductDefinitionRepository</a>
                            </li>
                            <li class="link">
                                <a href="classes/ProductDefinitionResponse.html" data-type="entity-link" >ProductDefinitionResponse</a>
                            </li>
                            <li class="link">
                                <a href="classes/ProductDefinitionTestHelper.html" data-type="entity-link" >ProductDefinitionTestHelper</a>
                            </li>
                            <li class="link">
                                <a href="classes/ProductRepository.html" data-type="entity-link" >ProductRepository</a>
                            </li>
                            <li class="link">
                                <a href="classes/ProductResponse.html" data-type="entity-link" >ProductResponse</a>
                            </li>
                            <li class="link">
                                <a href="classes/ProductTestHelper.html" data-type="entity-link" >ProductTestHelper</a>
                            </li>
                            <li class="link">
                                <a href="classes/ProvinceRepository.html" data-type="entity-link" >ProvinceRepository</a>
                            </li>
                            <li class="link">
                                <a href="classes/ProvinceResponse.html" data-type="entity-link" >ProvinceResponse</a>
                            </li>
                            <li class="link">
                                <a href="classes/PurchasedProductDto.html" data-type="entity-link" >PurchasedProductDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/QrCodeBatchPaginationResponse.html" data-type="entity-link" >QrCodeBatchPaginationResponse</a>
                            </li>
                            <li class="link">
                                <a href="classes/QrCodeBatchRepository.html" data-type="entity-link" >QrCodeBatchRepository</a>
                            </li>
                            <li class="link">
                                <a href="classes/QrCodeBatchResponse.html" data-type="entity-link" >QrCodeBatchResponse</a>
                            </li>
                            <li class="link">
                                <a href="classes/QrCodeBatchWithCreatorResponse.html" data-type="entity-link" >QrCodeBatchWithCreatorResponse</a>
                            </li>
                            <li class="link">
                                <a href="classes/QrCodeRepository.html" data-type="entity-link" >QrCodeRepository</a>
                            </li>
                            <li class="link">
                                <a href="classes/QrCodeResponse.html" data-type="entity-link" >QrCodeResponse</a>
                            </li>
                            <li class="link">
                                <a href="classes/QrCodeTestHelper.html" data-type="entity-link" >QrCodeTestHelper</a>
                            </li>
                            <li class="link">
                                <a href="classes/QuestionResponse.html" data-type="entity-link" >QuestionResponse</a>
                            </li>
                            <li class="link">
                                <a href="classes/RapidApiBaseService.html" data-type="entity-link" >RapidApiBaseService</a>
                            </li>
                            <li class="link">
                                <a href="classes/ReasonOfAuditResponse.html" data-type="entity-link" >ReasonOfAuditResponse</a>
                            </li>
                            <li class="link">
                                <a href="classes/RecordProductDto.html" data-type="entity-link" >RecordProductDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/RecordProductRepository.html" data-type="entity-link" >RecordProductRepository</a>
                            </li>
                            <li class="link">
                                <a href="classes/RecordProductResponse.html" data-type="entity-link" >RecordProductResponse</a>
                            </li>
                            <li class="link">
                                <a href="classes/RefreshTokenDto.html" data-type="entity-link" >RefreshTokenDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/RegisterOarIdConfirmMatchResponse.html" data-type="entity-link" >RegisterOarIdConfirmMatchResponse</a>
                            </li>
                            <li class="link">
                                <a href="classes/RegisterOarIdDto.html" data-type="entity-link" >RegisterOarIdDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/RelatedPartnerDto.html" data-type="entity-link" >RelatedPartnerDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/RelocatePermissionSetsTablePermission1688955053483.html" data-type="entity-link" >RelocatePermissionSetsTablePermission1688955053483</a>
                            </li>
                            <li class="link">
                                <a href="classes/RelocateProductTracingPermissionSet1686545150283.html" data-type="entity-link" >RelocateProductTracingPermissionSet1686545150283</a>
                            </li>
                            <li class="link">
                                <a href="classes/RemoveBaleTable1647225891499.html" data-type="entity-link" >RemoveBaleTable1647225891499</a>
                            </li>
                            <li class="link">
                                <a href="classes/RemoveConstraintUniqueLotCode1648540585993.html" data-type="entity-link" >RemoveConstraintUniqueLotCode1648540585993</a>
                            </li>
                            <li class="link">
                                <a href="classes/RemoveFieldDnaTransformationTable1655969545728.html" data-type="entity-link" >RemoveFieldDnaTransformationTable1655969545728</a>
                            </li>
                            <li class="link">
                                <a href="classes/RemoveFieldHotlineAndAuditorToRiskAssessmentTable1700106752595.html" data-type="entity-link" >RemoveFieldHotlineAndAuditorToRiskAssessmentTable1700106752595</a>
                            </li>
                            <li class="link">
                                <a href="classes/RemoveFieldIsResponseToGrievanceReportTable1699954030265.html" data-type="entity-link" >RemoveFieldIsResponseToGrievanceReportTable1699954030265</a>
                            </li>
                            <li class="link">
                                <a href="classes/RemoveForeignKeysFromSupplyChains1731916214978.html" data-type="entity-link" >RemoveForeignKeysFromSupplyChains1731916214978</a>
                            </li>
                            <li class="link">
                                <a href="classes/RemoveInvalidDataFacilityRoleAttributeTable1721655203683.html" data-type="entity-link" >RemoveInvalidDataFacilityRoleAttributeTable1721655203683</a>
                            </li>
                            <li class="link">
                                <a href="classes/RemoveMetadataFromTableRoleHasPermission1693192888070.html" data-type="entity-link" >RemoveMetadataFromTableRoleHasPermission1693192888070</a>
                            </li>
                            <li class="link">
                                <a href="classes/RemoveMillSaqQuestionMechanization1658478360036.html" data-type="entity-link" >RemoveMillSaqQuestionMechanization1658478360036</a>
                            </li>
                            <li class="link">
                                <a href="classes/RemoveOldSelfAssessmentGroup1703735343064.html" data-type="entity-link" >RemoveOldSelfAssessmentGroup1703735343064</a>
                            </li>
                            <li class="link">
                                <a href="classes/RemoveParentGroupIdColumnAndAddDefaultTotalDrafQuestionValueColumn1654790973210.html" data-type="entity-link" >RemoveParentGroupIdColumnAndAddDefaultTotalDrafQuestionValueColumn1654790973210</a>
                            </li>
                            <li class="link">
                                <a href="classes/RemovePermissionSellFromUserMill1649669236137.html" data-type="entity-link" >RemovePermissionSellFromUserMill1649669236137</a>
                            </li>
                            <li class="link">
                                <a href="classes/RemovePositionFromSupplyChainNodeTable1726464159519.html" data-type="entity-link" >RemovePositionFromSupplyChainNodeTable1726464159519</a>
                            </li>
                            <li class="link">
                                <a href="classes/RemoveRedundantColumnsFromTableTransformation1703836696867.html" data-type="entity-link" >RemoveRedundantColumnsFromTableTransformation1703836696867</a>
                            </li>
                            <li class="link">
                                <a href="classes/RemoveReportsWeightFromRiskAssessmentTable1698402000733.html" data-type="entity-link" >RemoveReportsWeightFromRiskAssessmentTable1698402000733</a>
                            </li>
                            <li class="link">
                                <a href="classes/RemoveSeasonDateFromBusinessDetailTable1705033977275.html" data-type="entity-link" >RemoveSeasonDateFromBusinessDetailTable1705033977275</a>
                            </li>
                            <li class="link">
                                <a href="classes/RemoveSomeFieldsFromSupplyChainNodeTable1727779941157.html" data-type="entity-link" >RemoveSomeFieldsFromSupplyChainNodeTable1727779941157</a>
                            </li>
                            <li class="link">
                                <a href="classes/RemoveSuffixDistrict1667359760379.html" data-type="entity-link" >RemoveSuffixDistrict1667359760379</a>
                            </li>
                            <li class="link">
                                <a href="classes/RemoveSuperadminPermissions1702367049227.html" data-type="entity-link" >RemoveSuperadminPermissions1702367049227</a>
                            </li>
                            <li class="link">
                                <a href="classes/RenameColumnBrandIdInCapTable1723449917009.html" data-type="entity-link" >RenameColumnBrandIdInCapTable1723449917009</a>
                            </li>
                            <li class="link">
                                <a href="classes/RenameColumnsInCalculateFieldTable1720859710324.html" data-type="entity-link" >RenameColumnsInCalculateFieldTable1720859710324</a>
                            </li>
                            <li class="link">
                                <a href="classes/RequestCapExtensionResponse.html" data-type="entity-link" >RequestCapExtensionResponse</a>
                            </li>
                            <li class="link">
                                <a href="classes/RequestDto.html" data-type="entity-link" >RequestDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/RequestExtensionCapDto.html" data-type="entity-link" >RequestExtensionCapDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/RequestExtensionRepository.html" data-type="entity-link" >RequestExtensionRepository</a>
                            </li>
                            <li class="link">
                                <a href="classes/RequestExtensionTestHelper.html" data-type="entity-link" >RequestExtensionTestHelper</a>
                            </li>
                            <li class="link">
                                <a href="classes/RequestNewTokenDto.html" data-type="entity-link" >RequestNewTokenDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/RequiredSellerResponse.html" data-type="entity-link" >RequiredSellerResponse</a>
                            </li>
                            <li class="link">
                                <a href="classes/ResetFacilitiesRiskData1701920963100.html" data-type="entity-link" >ResetFacilitiesRiskData1701920963100</a>
                            </li>
                            <li class="link">
                                <a href="classes/ResetPasswordDto.html" data-type="entity-link" >ResetPasswordDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/ResetPasswordMail.html" data-type="entity-link" >ResetPasswordMail</a>
                            </li>
                            <li class="link">
                                <a href="classes/ResultRiskItemResponse.html" data-type="entity-link" >ResultRiskItemResponse</a>
                            </li>
                            <li class="link">
                                <a href="classes/RiskAssessmentPropertiesResponse.html" data-type="entity-link" >RiskAssessmentPropertiesResponse</a>
                            </li>
                            <li class="link">
                                <a href="classes/RiskAssessmentRepository.html" data-type="entity-link" >RiskAssessmentRepository</a>
                            </li>
                            <li class="link">
                                <a href="classes/RiskAssessmentResponse.html" data-type="entity-link" >RiskAssessmentResponse</a>
                            </li>
                            <li class="link">
                                <a href="classes/RiskLevelTypeResponse.html" data-type="entity-link" >RiskLevelTypeResponse</a>
                            </li>
                            <li class="link">
                                <a href="classes/RiskResponse.html" data-type="entity-link" >RiskResponse</a>
                            </li>
                            <li class="link">
                                <a href="classes/RiskScoreResponse.html" data-type="entity-link" >RiskScoreResponse</a>
                            </li>
                            <li class="link">
                                <a href="classes/RiskScoreWithGroupResponse.html" data-type="entity-link" >RiskScoreWithGroupResponse</a>
                            </li>
                            <li class="link">
                                <a href="classes/RoleAttributeRepository.html" data-type="entity-link" >RoleAttributeRepository</a>
                            </li>
                            <li class="link">
                                <a href="classes/RoleAttributeResponse.html" data-type="entity-link" >RoleAttributeResponse</a>
                            </li>
                            <li class="link">
                                <a href="classes/RoleAttributeTestHelper.html" data-type="entity-link" >RoleAttributeTestHelper</a>
                            </li>
                            <li class="link">
                                <a href="classes/RoleHasPermissionRepository.html" data-type="entity-link" >RoleHasPermissionRepository</a>
                            </li>
                            <li class="link">
                                <a href="classes/RoleInformationDto.html" data-type="entity-link" >RoleInformationDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/RoleMapNodeResponse.html" data-type="entity-link" >RoleMapNodeResponse</a>
                            </li>
                            <li class="link">
                                <a href="classes/RoleMapResponse.html" data-type="entity-link" >RoleMapResponse</a>
                            </li>
                            <li class="link">
                                <a href="classes/RolePaginationResponse.html" data-type="entity-link" >RolePaginationResponse</a>
                            </li>
                            <li class="link">
                                <a href="classes/RolePermissionMetadataResponse.html" data-type="entity-link" >RolePermissionMetadataResponse</a>
                            </li>
                            <li class="link">
                                <a href="classes/RolePermissionSeed.html" data-type="entity-link" >RolePermissionSeed</a>
                            </li>
                            <li class="link">
                                <a href="classes/RolePermissionTestHelper.html" data-type="entity-link" >RolePermissionTestHelper</a>
                            </li>
                            <li class="link">
                                <a href="classes/RoleRepository.html" data-type="entity-link" >RoleRepository</a>
                            </li>
                            <li class="link">
                                <a href="classes/RoleResponse.html" data-type="entity-link" >RoleResponse</a>
                            </li>
                            <li class="link">
                                <a href="classes/RoleSeed.html" data-type="entity-link" >RoleSeed</a>
                            </li>
                            <li class="link">
                                <a href="classes/RoleWeightsDto.html" data-type="entity-link" >RoleWeightsDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/RoleWeightsResponse.html" data-type="entity-link" >RoleWeightsResponse</a>
                            </li>
                            <li class="link">
                                <a href="classes/RoleWithPermissionsResponse.html" data-type="entity-link" >RoleWithPermissionsResponse</a>
                            </li>
                            <li class="link">
                                <a href="classes/SearchCommodityRiskDto.html" data-type="entity-link" >SearchCommodityRiskDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/SearchExistingFacilitiesQuery.html" data-type="entity-link" >SearchExistingFacilitiesQuery</a>
                            </li>
                            <li class="link">
                                <a href="classes/SearchFacilitiesByNameQuery.html" data-type="entity-link" >SearchFacilitiesByNameQuery</a>
                            </li>
                            <li class="link">
                                <a href="classes/SeedBusinessDetail1689007998020.html" data-type="entity-link" >SeedBusinessDetail1689007998020</a>
                            </li>
                            <li class="link">
                                <a href="classes/SeedNewRolePermission1684696193081.html" data-type="entity-link" >SeedNewRolePermission1684696193081</a>
                            </li>
                            <li class="link">
                                <a href="classes/SeedPermissions101020231696922761123.html" data-type="entity-link" >SeedPermissions101020231696922761123</a>
                            </li>
                            <li class="link">
                                <a href="classes/SeedPermissions101220231697303079847.html" data-type="entity-link" >SeedPermissions101220231697303079847</a>
                            </li>
                            <li class="link">
                                <a href="classes/SeedPermissions112120231700557226192.html" data-type="entity-link" >SeedPermissions112120231700557226192</a>
                            </li>
                            <li class="link">
                                <a href="classes/SeedPermissions121420231702547216973.html" data-type="entity-link" >SeedPermissions121420231702547216973</a>
                            </li>
                            <li class="link">
                                <a href="classes/SelfAssessmentAnswerRepository.html" data-type="entity-link" >SelfAssessmentAnswerRepository</a>
                            </li>
                            <li class="link">
                                <a href="classes/SelfAssessmentAnswerResponse.html" data-type="entity-link" >SelfAssessmentAnswerResponse</a>
                            </li>
                            <li class="link">
                                <a href="classes/SelfAssessmentGroupRepository.html" data-type="entity-link" >SelfAssessmentGroupRepository</a>
                            </li>
                            <li class="link">
                                <a href="classes/SelfAssessmentGroupResponse.html" data-type="entity-link" >SelfAssessmentGroupResponse</a>
                            </li>
                            <li class="link">
                                <a href="classes/SelfAssessmentGroupWithQuestionsResponse.html" data-type="entity-link" >SelfAssessmentGroupWithQuestionsResponse</a>
                            </li>
                            <li class="link">
                                <a href="classes/SelfAssessmentQuestionRepository.html" data-type="entity-link" >SelfAssessmentQuestionRepository</a>
                            </li>
                            <li class="link">
                                <a href="classes/SelfAssessmentQuestionResponse.html" data-type="entity-link" >SelfAssessmentQuestionResponse</a>
                            </li>
                            <li class="link">
                                <a href="classes/SelfAssessmentQuestionResponseRepository.html" data-type="entity-link" >SelfAssessmentQuestionResponseRepository</a>
                            </li>
                            <li class="link">
                                <a href="classes/SelfAssessmentRepository.html" data-type="entity-link" >SelfAssessmentRepository</a>
                            </li>
                            <li class="link">
                                <a href="classes/SelfAssessmentResponse.html" data-type="entity-link" >SelfAssessmentResponse</a>
                            </li>
                            <li class="link">
                                <a href="classes/SelfAssessmentTestHelper.html" data-type="entity-link" >SelfAssessmentTestHelper</a>
                            </li>
                            <li class="link">
                                <a href="classes/SelfAssessmentTranslationFileRepository.html" data-type="entity-link" >SelfAssessmentTranslationFileRepository</a>
                            </li>
                            <li class="link">
                                <a href="classes/SelfAssessmentTranslationResponse.html" data-type="entity-link" >SelfAssessmentTranslationResponse</a>
                            </li>
                            <li class="link">
                                <a href="classes/SelfAssessmentTranslationValidator.html" data-type="entity-link" >SelfAssessmentTranslationValidator</a>
                            </li>
                            <li class="link">
                                <a href="classes/SelfAssessmentUploadFileRepository.html" data-type="entity-link" >SelfAssessmentUploadFileRepository</a>
                            </li>
                            <li class="link">
                                <a href="classes/SelfAssessmentWithIncompleteQuestionsResponse.html" data-type="entity-link" >SelfAssessmentWithIncompleteQuestionsResponse</a>
                            </li>
                            <li class="link">
                                <a href="classes/SelfAssessmentWithRiskScoresGroupResponse.html" data-type="entity-link" >SelfAssessmentWithRiskScoresGroupResponse</a>
                            </li>
                            <li class="link">
                                <a href="classes/SelfAssessmentWithRiskScoresResponse.html" data-type="entity-link" >SelfAssessmentWithRiskScoresResponse</a>
                            </li>
                            <li class="link">
                                <a href="classes/SetNotNullColumnOwnerFacilityTableFacilityPartner1649920018919.html" data-type="entity-link" >SetNotNullColumnOwnerFacilityTableFacilityPartner1649920018919</a>
                            </li>
                            <li class="link">
                                <a href="classes/SettingIconCategoriesDto.html" data-type="entity-link" >SettingIconCategoriesDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/SettingIconCategoryDto.html" data-type="entity-link" >SettingIconCategoryDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/SignUpResponse.html" data-type="entity-link" >SignUpResponse</a>
                            </li>
                            <li class="link">
                                <a href="classes/SignUpUserDto.html" data-type="entity-link" >SignUpUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/SoldProductDto.html" data-type="entity-link" >SoldProductDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/SourceRiskResponse.html" data-type="entity-link" >SourceRiskResponse</a>
                            </li>
                            <li class="link">
                                <a href="classes/SubIndicatorRiskResponse.html" data-type="entity-link" >SubIndicatorRiskResponse</a>
                            </li>
                            <li class="link">
                                <a href="classes/SubmitGrievanceReportResponseDto.html" data-type="entity-link" >SubmitGrievanceReportResponseDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/SubmitIncidentReportResponseDto.html" data-type="entity-link" >SubmitIncidentReportResponseDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/SupplierInformationDto.html" data-type="entity-link" >SupplierInformationDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/SupplyChainNodeMetadataRepository.html" data-type="entity-link" >SupplyChainNodeMetadataRepository</a>
                            </li>
                            <li class="link">
                                <a href="classes/SupplyChainNodeRepository.html" data-type="entity-link" >SupplyChainNodeRepository</a>
                            </li>
                            <li class="link">
                                <a href="classes/SupplyChainTestHelper.html" data-type="entity-link" >SupplyChainTestHelper</a>
                            </li>
                            <li class="link">
                                <a href="classes/TargetResponse.html" data-type="entity-link" >TargetResponse</a>
                            </li>
                            <li class="link">
                                <a href="classes/TaxonomyExploitationFileRepository.html" data-type="entity-link" >TaxonomyExploitationFileRepository</a>
                            </li>
                            <li class="link">
                                <a href="classes/TaxonomyExploitationPaginationResponse.html" data-type="entity-link" >TaxonomyExploitationPaginationResponse</a>
                            </li>
                            <li class="link">
                                <a href="classes/TaxonomyExploitationResponse.html" data-type="entity-link" >TaxonomyExploitationResponse</a>
                            </li>
                            <li class="link">
                                <a href="classes/TaxonomyExploitationTestHelper.html" data-type="entity-link" >TaxonomyExploitationTestHelper</a>
                            </li>
                            <li class="link">
                                <a href="classes/TaxonomyExploitationUploadFileDto.html" data-type="entity-link" >TaxonomyExploitationUploadFileDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/TaxonomyTranslationResponse.html" data-type="entity-link" >TaxonomyTranslationResponse</a>
                            </li>
                            <li class="link">
                                <a href="classes/TestHelper.html" data-type="entity-link" >TestHelper</a>
                            </li>
                            <li class="link">
                                <a href="classes/TextInputAssessmentValidator.html" data-type="entity-link" >TextInputAssessmentValidator</a>
                            </li>
                            <li class="link">
                                <a href="classes/TimestampTransformer.html" data-type="entity-link" >TimestampTransformer</a>
                            </li>
                            <li class="link">
                                <a href="classes/TraceResultMappingResponse.html" data-type="entity-link" >TraceResultMappingResponse</a>
                            </li>
                            <li class="link">
                                <a href="classes/TracingSupplierDocumentResponse.html" data-type="entity-link" >TracingSupplierDocumentResponse</a>
                            </li>
                            <li class="link">
                                <a href="classes/TracingSupplierTransactionInfoResponse.html" data-type="entity-link" >TracingSupplierTransactionInfoResponse</a>
                            </li>
                            <li class="link">
                                <a href="classes/TransactedProductResponse.html" data-type="entity-link" >TransactedProductResponse</a>
                            </li>
                            <li class="link">
                                <a href="classes/TransactionEntity.html" data-type="entity-link" >TransactionEntity</a>
                            </li>
                            <li class="link">
                                <a href="classes/TransactionItemRepository.html" data-type="entity-link" >TransactionItemRepository</a>
                            </li>
                            <li class="link">
                                <a href="classes/TransactionItemResponse.html" data-type="entity-link" >TransactionItemResponse</a>
                            </li>
                            <li class="link">
                                <a href="classes/TransactionRepository.html" data-type="entity-link" >TransactionRepository</a>
                            </li>
                            <li class="link">
                                <a href="classes/TransactionResponse.html" data-type="entity-link" >TransactionResponse</a>
                            </li>
                            <li class="link">
                                <a href="classes/TransformationEntity.html" data-type="entity-link" >TransformationEntity</a>
                            </li>
                            <li class="link">
                                <a href="classes/TransformationItemRepository.html" data-type="entity-link" >TransformationItemRepository</a>
                            </li>
                            <li class="link">
                                <a href="classes/TransformationItemResponse.html" data-type="entity-link" >TransformationItemResponse</a>
                            </li>
                            <li class="link">
                                <a href="classes/TransformationItemWithProductResponse.html" data-type="entity-link" >TransformationItemWithProductResponse</a>
                            </li>
                            <li class="link">
                                <a href="classes/TransformationRepository.html" data-type="entity-link" >TransformationRepository</a>
                            </li>
                            <li class="link">
                                <a href="classes/TransformationResponse.html" data-type="entity-link" >TransformationResponse</a>
                            </li>
                            <li class="link">
                                <a href="classes/TransformationWithTransformationItemsResponse.html" data-type="entity-link" >TransformationWithTransformationItemsResponse</a>
                            </li>
                            <li class="link">
                                <a href="classes/TranslateSaqQuestionsToUrdu1695883124700.html" data-type="entity-link" >TranslateSaqQuestionsToUrdu1695883124700</a>
                            </li>
                            <li class="link">
                                <a href="classes/TranslateTaxonomyResponse.html" data-type="entity-link" >TranslateTaxonomyResponse</a>
                            </li>
                            <li class="link">
                                <a href="classes/TranslationStatusResponse.html" data-type="entity-link" >TranslationStatusResponse</a>
                            </li>
                            <li class="link">
                                <a href="classes/TransporterInformationDto.html" data-type="entity-link" >TransporterInformationDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/TruncateTableSelfAssessment1655366853173.html" data-type="entity-link" >TruncateTableSelfAssessment1655366853173</a>
                            </li>
                            <li class="link">
                                <a href="classes/TypeAttributeQueryDto.html" data-type="entity-link" >TypeAttributeQueryDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UniqueValidator.html" data-type="entity-link" >UniqueValidator</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateAddAuditReportNumberToGrievanceReportResponseTable1649129264211.html" data-type="entity-link" >UpdateAddAuditReportNumberToGrievanceReportResponseTable1649129264211</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateAttributeTypeValue1730188858074.html" data-type="entity-link" >UpdateAttributeTypeValue1730188858074</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateBusinessDetailDto.html" data-type="entity-link" >UpdateBusinessDetailDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateCapDto.html" data-type="entity-link" >UpdateCapDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateCategoryAndRiskSeverityTableCategory1694160635518.html" data-type="entity-link" >UpdateCategoryAndRiskSeverityTableCategory1694160635518</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateCategoryDto.html" data-type="entity-link" >UpdateCategoryDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateColumnsCountryProvinceDistrictOfFacilityTable1690276469471.html" data-type="entity-link" >UpdateColumnsCountryProvinceDistrictOfFacilityTable1690276469471</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateColumnsCountryProvinceDistrictOfFacilityTable1690276502748.html" data-type="entity-link" >UpdateColumnsCountryProvinceDistrictOfFacilityTable1690276502748</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateColumnSetTablePermission1686215549904.html" data-type="entity-link" >UpdateColumnSetTablePermission1686215549904</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateCommentCapDto.html" data-type="entity-link" >UpdateCommentCapDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateConstraintUniqueFacilityPartnerTable1649994525978.html" data-type="entity-link" >UpdateConstraintUniqueFacilityPartnerTable1649994525978</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateCountryNameFollowingByOarList1652888168731.html" data-type="entity-link" >UpdateCountryNameFollowingByOarList1652888168731</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateCountryNameFollowingByOarList1653016446225.html" data-type="entity-link" >UpdateCountryNameFollowingByOarList1653016446225</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateDataColumnProductIdTableQrCode1701139625677.html" data-type="entity-link" >UpdateDataColumnProductIdTableQrCode1701139625677</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateDataOfGroupsColumnPermissionTable1711631958982.html" data-type="entity-link" >UpdateDataOfGroupsColumnPermissionTable1711631958982</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateDataOfGroupsColumnPermissionTable1722930492575.html" data-type="entity-link" >UpdateDataOfGroupsColumnPermissionTable1722930492575</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateDataOfTypeColumnRoleTable1711470428638.html" data-type="entity-link" >UpdateDataOfTypeColumnRoleTable1711470428638</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateDataOfTypeColumnRoleTable1722929866493.html" data-type="entity-link" >UpdateDataOfTypeColumnRoleTable1722929866493</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateDataPermissionTable1713942545481.html" data-type="entity-link" >UpdateDataPermissionTable1713942545481</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateDefaultLogPurchaseOfGinner1686557075037.html" data-type="entity-link" >UpdateDefaultLogPurchaseOfGinner1686557075037</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateDefaultObjectToArrayToTransactionTable1701250331333.html" data-type="entity-link" >UpdateDefaultObjectToArrayToTransactionTable1701250331333</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateDefaultRoleType1686215233651.html" data-type="entity-link" >UpdateDefaultRoleType1686215233651</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateExpiredCapStatusToCapTable1721352138114.html" data-type="entity-link" >UpdateExpiredCapStatusToCapTable1721352138114</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateExternalRiskIndexDto.html" data-type="entity-link" >UpdateExternalRiskIndexDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateFacilityAddUploadLogoFieldTable1649151821489.html" data-type="entity-link" >UpdateFacilityAddUploadLogoFieldTable1649151821489</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateFacilityCountryNameLocationFollowingByOarCountryName1652889501126.html" data-type="entity-link" >UpdateFacilityCountryNameLocationFollowingByOarCountryName1652889501126</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateFacilityDto.html" data-type="entity-link" >UpdateFacilityDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateFarmSaqPartFour1661740367784.html" data-type="entity-link" >UpdateFarmSaqPartFour1661740367784</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateFarmSizeColumnTypeTableFarmProfile1654485660014.html" data-type="entity-link" >UpdateFarmSizeColumnTypeTableFarmProfile1654485660014</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateFieldCertificationTable1654844166028.html" data-type="entity-link" >UpdateFieldCertificationTable1654844166028</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateFieldDnaTestingTable1659670219118.html" data-type="entity-link" >UpdateFieldDnaTestingTable1659670219118</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateFieldIsNoFollowUpGrievanceReportTable1653367540455.html" data-type="entity-link" >UpdateFieldIsNoFollowUpGrievanceReportTable1653367540455</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateFullTextSearchTableFacility1646902593684.html" data-type="entity-link" >UpdateFullTextSearchTableFacility1646902593684</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateFullTextSearchTableFacility1647846722829.html" data-type="entity-link" >UpdateFullTextSearchTableFacility1647846722829</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateGrievanceReportTable1648626181890.html" data-type="entity-link" >UpdateGrievanceReportTable1648626181890</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateGrievanceReportTableSupportCommunityRiskScanReport1648804999786.html" data-type="entity-link" >UpdateGrievanceReportTableSupportCommunityRiskScanReport1648804999786</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateGroupTypeCapPermissionsTable1714983376098.html" data-type="entity-link" >UpdateGroupTypeCapPermissionsTable1714983376098</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateGroupTypeForUserApiPermission1723609809073.html" data-type="entity-link" >UpdateGroupTypeForUserApiPermission1723609809073</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateImportFacilityGroupDto.html" data-type="entity-link" >UpdateImportFacilityGroupDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateIndicatorsAndSubIndicators1688977467630.html" data-type="entity-link" >UpdateIndicatorsAndSubIndicators1688977467630</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateIndicatorsSubIndicators1691037553806.html" data-type="entity-link" >UpdateIndicatorsSubIndicators1691037553806</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateIsTransformedTable1654082313775.html" data-type="entity-link" >UpdateIsTransformedTable1654082313775</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateIsTransformedTable1654082697942.html" data-type="entity-link" >UpdateIsTransformedTable1654082697942</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateIsTransportedLotTable1654136847327.html" data-type="entity-link" >UpdateIsTransportedLotTable1654136847327</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateJoinedAtAndStatusForCurrentUsers1645516546456.html" data-type="entity-link" >UpdateJoinedAtAndStatusForCurrentUsers1645516546456</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateLogSaleOfMill1686297868371.html" data-type="entity-link" >UpdateLogSaleOfMill1686297868371</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateMultiChoiceTypeOfQuestionMc51660059358754.html" data-type="entity-link" >UpdateMultiChoiceTypeOfQuestionMc51660059358754</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateOutputProductRelationInTableSupplyChainNode1696054079046.html" data-type="entity-link" >UpdateOutputProductRelationInTableSupplyChainNode1696054079046</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateOwnerFacilityForFacilityPartner1649920018918.html" data-type="entity-link" >UpdateOwnerFacilityForFacilityPartner1649920018918</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdatePermissionGroupLabor1695805670648.html" data-type="entity-link" >UpdatePermissionGroupLabor1695805670648</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdatePermissionName1706069823901.html" data-type="entity-link" >UpdatePermissionName1706069823901</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdatePermissionName1729674498073.html" data-type="entity-link" >UpdatePermissionName1729674498073</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdatePermissionNameCap1730779326073.html" data-type="entity-link" >UpdatePermissionNameCap1730779326073</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdatePermissions101720231697513429454.html" data-type="entity-link" >UpdatePermissions101720231697513429454</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdatePermissions102720231698382821532.html" data-type="entity-link" >UpdatePermissions102720231698382821532</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdatePermissions103020231698639121794.html" data-type="entity-link" >UpdatePermissions103020231698639121794</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdatePermissions1687400312458.html" data-type="entity-link" >UpdatePermissions1687400312458</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdatePermissionsForRoleSupplier1649212078247.html" data-type="entity-link" >UpdatePermissionsForRoleSupplier1649212078247</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateProfileBrandDto.html" data-type="entity-link" >UpdateProfileBrandDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateProvinceTable1653359341154.html" data-type="entity-link" >UpdateProvinceTable1653359341154</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateQuestionText1658300753536.html" data-type="entity-link" >UpdateQuestionText1658300753536</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateRecordedAtColumnValueOfGrievanceReportTable1705897410367.html" data-type="entity-link" >UpdateRecordedAtColumnValueOfGrievanceReportTable1705897410367</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateRiskAssessmentDto.html" data-type="entity-link" >UpdateRiskAssessmentDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateRiskLevelValueSelfAssessmentQuestionResponse1701096625510.html" data-type="entity-link" >UpdateRiskLevelValueSelfAssessmentQuestionResponse1701096625510</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateRoleAttributeTypeValue1730188858073.html" data-type="entity-link" >UpdateRoleAttributeTypeValue1730188858073</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateRoleDto.html" data-type="entity-link" >UpdateRoleDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateRoleNameFarmToFarmGroup1653556820483.html" data-type="entity-link" >UpdateRoleNameFarmToFarmGroup1653556820483</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateRolePermissionByAdminTable1652331700621.html" data-type="entity-link" >UpdateRolePermissionByAdminTable1652331700621</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateSaqFarm1658820295971.html" data-type="entity-link" >UpdateSaqFarm1658820295971</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateSaqFarmChangeQuestionType1659675670957.html" data-type="entity-link" >UpdateSaqFarmChangeQuestionType1659675670957</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateSelfAssessmentAllRole1657015164877.html" data-type="entity-link" >UpdateSelfAssessmentAllRole1657015164877</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateSelfAssessmentAllRole1657774594054.html" data-type="entity-link" >UpdateSelfAssessmentAllRole1657774594054</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateSelfAssessmentAllRole1658379996416.html" data-type="entity-link" >UpdateSelfAssessmentAllRole1658379996416</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateSelfAssessmentGinner1658372274205.html" data-type="entity-link" >UpdateSelfAssessmentGinner1658372274205</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateSelfAssessmentSpinnerMill1657686732688.html" data-type="entity-link" >UpdateSelfAssessmentSpinnerMill1657686732688</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateSupplyChainNodeDto.html" data-type="entity-link" >UpdateSupplyChainNodeDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateSupplyChainNodeMetadataDto.html" data-type="entity-link" >UpdateSupplyChainNodeMetadataDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateTaxonomyExploitationDto.html" data-type="entity-link" >UpdateTaxonomyExploitationDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateTierForExistingFalicities1649923021381.html" data-type="entity-link" >UpdateTierForExistingFalicities1649923021381</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateTypeFieldQuantityTable1649903781221.html" data-type="entity-link" >UpdateTypeFieldQuantityTable1649903781221</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateTypoWeightUnit1648105391463.html" data-type="entity-link" >UpdateTypoWeightUnit1648105391463</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateUniqueGinnerPackingListNumberTransportTable1652773985457.html" data-type="entity-link" >UpdateUniqueGinnerPackingListNumberTransportTable1652773985457</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateUserDto.html" data-type="entity-link" >UpdateUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateUserDto-1.html" data-type="entity-link" >UpdateUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateUserFacilityDto.html" data-type="entity-link" >UpdateUserFacilityDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateUserInformationDto.html" data-type="entity-link" >UpdateUserInformationDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateUserProfileDto.html" data-type="entity-link" >UpdateUserProfileDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateUserTable1648609123106.html" data-type="entity-link" >UpdateUserTable1648609123106</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateUserTypeForSupplierUser1649212078249.html" data-type="entity-link" >UpdateUserTypeForSupplierUser1649212078249</a>
                            </li>
                            <li class="link">
                                <a href="classes/UploadFileDto.html" data-type="entity-link" >UploadFileDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UploadFilesDto.html" data-type="entity-link" >UploadFilesDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UploadFilesResponse.html" data-type="entity-link" >UploadFilesResponse</a>
                            </li>
                            <li class="link">
                                <a href="classes/UploadProductTranslationErrorResponse.html" data-type="entity-link" >UploadProductTranslationErrorResponse</a>
                            </li>
                            <li class="link">
                                <a href="classes/UploadProductTranslationFileDto.html" data-type="entity-link" >UploadProductTranslationFileDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UploadProductTranslationFileResponse.html" data-type="entity-link" >UploadProductTranslationFileResponse</a>
                            </li>
                            <li class="link">
                                <a href="classes/UploadProductTranslationResponse.html" data-type="entity-link" >UploadProductTranslationResponse</a>
                            </li>
                            <li class="link">
                                <a href="classes/UploadProductTranslationValidationResponse.html" data-type="entity-link" >UploadProductTranslationValidationResponse</a>
                            </li>
                            <li class="link">
                                <a href="classes/UploadSelfAssessmentTranslationsDto.html" data-type="entity-link" >UploadSelfAssessmentTranslationsDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UploadTaxonomyExploitationTranslationFileDto.html" data-type="entity-link" >UploadTaxonomyExploitationTranslationFileDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UploadTemplateResponse.html" data-type="entity-link" >UploadTemplateResponse</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpsertGeographicalRiskLevelDto.html" data-type="entity-link" >UpsertGeographicalRiskLevelDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpsertGeographicalRiskLevelsDto.html" data-type="entity-link" >UpsertGeographicalRiskLevelsDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserApiLimitDto.html" data-type="entity-link" >UserApiLimitDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserApiLimitRepository.html" data-type="entity-link" >UserApiLimitRepository</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserApiLimitResponse.html" data-type="entity-link" >UserApiLimitResponse</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserHasPermissionRepository.html" data-type="entity-link" >UserHasPermissionRepository</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserInfoDto.html" data-type="entity-link" >UserInfoDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserPaginationResponse.html" data-type="entity-link" >UserPaginationResponse</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserRepository.html" data-type="entity-link" >UserRepository</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserResponse.html" data-type="entity-link" >UserResponse</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserSeed.html" data-type="entity-link" >UserSeed</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserTestHelper.html" data-type="entity-link" >UserTestHelper</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserWithRoleAndPermissionsResponse.html" data-type="entity-link" >UserWithRoleAndPermissionsResponse</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserWithRoleResponse.html" data-type="entity-link" >UserWithRoleResponse</a>
                            </li>
                            <li class="link">
                                <a href="classes/ValidateAssignCapDto.html" data-type="entity-link" >ValidateAssignCapDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/ValidateCalculateFieldDto.html" data-type="entity-link" >ValidateCalculateFieldDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/ValidateExistedProductDto.html" data-type="entity-link" >ValidateExistedProductDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/ValidateRoleDto.html" data-type="entity-link" >ValidateRoleDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/ValueRoleAttributeResponse.html" data-type="entity-link" >ValueRoleAttributeResponse</a>
                            </li>
                            <li class="link">
                                <a href="classes/WelcomeUserMail.html" data-type="entity-link" >WelcomeUserMail</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/ActorService.html" data-type="entity-link" >ActorService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AddRequestToBodyInterceptor.html" data-type="entity-link" >AddRequestToBodyInterceptor</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CanAccessIncidentReportGuard.html" data-type="entity-link" >CanAccessIncidentReportGuard</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CrawlLocationCommand.html" data-type="entity-link" >CrawlLocationCommand</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DnaTestingService.html" data-type="entity-link" >DnaTestingService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DynamicLinkService.html" data-type="entity-link" >DynamicLinkService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ExportTemplateService.html" data-type="entity-link" >ExportTemplateService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/FacilityGroupExcelService.html" data-type="entity-link" >FacilityGroupExcelService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/FacilityItemService.html" data-type="entity-link" >FacilityItemService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/FacilityOperationService.html" data-type="entity-link" >FacilityOperationService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/FileService.html" data-type="entity-link" >FileService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/GoogleMapApiService.html" data-type="entity-link" >GoogleMapApiService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/GrievanceReportService.html" data-type="entity-link" >GrievanceReportService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ImportFacilityGroupService.html" data-type="entity-link" >ImportFacilityGroupService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ImportGroupQuestionService.html" data-type="entity-link" >ImportGroupQuestionService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ImportSaqExcelService.html" data-type="entity-link" >ImportSaqExcelService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ImportSelfAssessmentService.html" data-type="entity-link" >ImportSelfAssessmentService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/JwtAuthGuard.html" data-type="entity-link" >JwtAuthGuard</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/OpenApparelRegistryService.html" data-type="entity-link" >OpenApparelRegistryService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/OrderService.html" data-type="entity-link" >OrderService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PdfService.html" data-type="entity-link" >PdfService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PermissionService.html" data-type="entity-link" >PermissionService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/QrCodeBatchService.html" data-type="entity-link" >QrCodeBatchService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/RapidApiGeoDbBaseService.html" data-type="entity-link" >RapidApiGeoDbBaseService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SelfAssessmentQuestionResponseService.html" data-type="entity-link" >SelfAssessmentQuestionResponseService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SelfAssessmentQuestionService.html" data-type="entity-link" >SelfAssessmentQuestionService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SelfAssessmentService.html" data-type="entity-link" >SelfAssessmentService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SelfAssessmentUploadFileService.html" data-type="entity-link" >SelfAssessmentUploadFileService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ShortTokenGuard.html" data-type="entity-link" >ShortTokenGuard</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ShortTokenStrategy.html" data-type="entity-link" >ShortTokenStrategy</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TransactionHistoryService.html" data-type="entity-link" >TransactionHistoryService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TransactionItemService.html" data-type="entity-link" >TransactionItemService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TransformationItemService.html" data-type="entity-link" >TransformationItemService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TranslateByKeyInterceptor.html" data-type="entity-link" >TranslateByKeyInterceptor</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TrimDataPipe.html" data-type="entity-link" >TrimDataPipe</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UploadProofService.html" data-type="entity-link" >UploadProofService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ValidateFacilityGroupService.html" data-type="entity-link" >ValidateFacilityGroupService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ValidateImportSaqService.html" data-type="entity-link" >ValidateImportSaqService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ValidateSelfAssessmentService.html" data-type="entity-link" >ValidateSelfAssessmentService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ValidateUploadFacilityGroupTemplateService.html" data-type="entity-link" >ValidateUploadFacilityGroupTemplateService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ValidationPipe.html" data-type="entity-link" >ValidationPipe</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#guards-links"' :
                            'data-bs-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/AdminGuard.html" data-type="entity-link" >AdminGuard</a>
                            </li>
                            <li class="link">
                                <a href="guards/BrandGuard.html" data-type="entity-link" >BrandGuard</a>
                            </li>
                            <li class="link">
                                <a href="guards/CanCreateExternalRiskIndexGuard.html" data-type="entity-link" >CanCreateExternalRiskIndexGuard</a>
                            </li>
                            <li class="link">
                                <a href="guards/CanEditExternalRiskIndexGuard.html" data-type="entity-link" >CanEditExternalRiskIndexGuard</a>
                            </li>
                            <li class="link">
                                <a href="guards/PartnerGuard.html" data-type="entity-link" >PartnerGuard</a>
                            </li>
                            <li class="link">
                                <a href="guards/RefreshTokenAuthGuard.html" data-type="entity-link" >RefreshTokenAuthGuard</a>
                            </li>
                            <li class="link">
                                <a href="guards/SuperAdminGuard.html" data-type="entity-link" >SuperAdminGuard</a>
                            </li>
                            <li class="link">
                                <a href="guards/TransformationPartnerGuard.html" data-type="entity-link" >TransformationPartnerGuard</a>
                            </li>
                            <li class="link">
                                <a href="guards/UserManagementGuard.html" data-type="entity-link" >UserManagementGuard</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#interfaces-links"' :
                            'data-bs-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/AndWhereQuery.html" data-type="entity-link" >AndWhereQuery</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/AnswerValueItemInterface.html" data-type="entity-link" >AnswerValueItemInterface</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/BaseFormInputMetadata.html" data-type="entity-link" >BaseFormInputMetadata</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/BaseGroupAnswer.html" data-type="entity-link" >BaseGroupAnswer</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/BaseSaqAnswer.html" data-type="entity-link" >BaseSaqAnswer</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/BaseSaqLogic.html" data-type="entity-link" >BaseSaqLogic</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/BaseSaqMetadata.html" data-type="entity-link" >BaseSaqMetadata</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/BaseSaqSetting.html" data-type="entity-link" >BaseSaqSetting</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ChoiceQuestionMetadata.html" data-type="entity-link" >ChoiceQuestionMetadata</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CountryItemInterface.html" data-type="entity-link" >CountryItemInterface</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CountryItemsInterface.html" data-type="entity-link" >CountryItemsInterface</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CountryResponseInterface.html" data-type="entity-link" >CountryResponseInterface</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CustomCheckDateFromTo.html" data-type="entity-link" >CustomCheckDateFromTo</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CustomCondition.html" data-type="entity-link" >CustomCondition</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DistrictItemInterface.html" data-type="entity-link" >DistrictItemInterface</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DistrictResponseInterface.html" data-type="entity-link" >DistrictResponseInterface</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ExportDataInterface.html" data-type="entity-link" >ExportDataInterface</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/FormInputMetadata.html" data-type="entity-link" >FormInputMetadata</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/FreeInputValueMetadata.html" data-type="entity-link" >FreeInputValueMetadata</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/GeodbCountryPaginationInterface.html" data-type="entity-link" >GeodbCountryPaginationInterface</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/GeodbCountryResponseInterface.html" data-type="entity-link" >GeodbCountryResponseInterface</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/GeodbDistrictPaginationInterface.html" data-type="entity-link" >GeodbDistrictPaginationInterface</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/GeodbDistrictResponseInterface.html" data-type="entity-link" >GeodbDistrictResponseInterface</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/InputRuleMetadata.html" data-type="entity-link" >InputRuleMetadata</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/LocationItemInterface.html" data-type="entity-link" >LocationItemInterface</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/MetadataAnswerInterface.html" data-type="entity-link" >MetadataAnswerInterface</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/MultipleChoiceAnswer.html" data-type="entity-link" >MultipleChoiceAnswer</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/MultipleChoiceMetadata.html" data-type="entity-link" >MultipleChoiceMetadata</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/MultipleChoiceSetting.html" data-type="entity-link" >MultipleChoiceSetting</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/NumberMetadata.html" data-type="entity-link" >NumberMetadata</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/PaginationResponse.html" data-type="entity-link" >PaginationResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/PdfPrinterInterface.html" data-type="entity-link" >PdfPrinterInterface</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ProvinceItemInterface.html" data-type="entity-link" >ProvinceItemInterface</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/RapidApiGeoDbBaseInterface.html" data-type="entity-link" >RapidApiGeoDbBaseInterface</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/RapidPaginationParam.html" data-type="entity-link" >RapidPaginationParam</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/RapidResponseInterface.html" data-type="entity-link" >RapidResponseInterface</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/RapidResponseLinkInterface.html" data-type="entity-link" >RapidResponseLinkInterface</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/RapidSearchCountryParamInterface.html" data-type="entity-link" >RapidSearchCountryParamInterface</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/RapidSearchDistrictParam.html" data-type="entity-link" >RapidSearchDistrictParam</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SelectableCell.html" data-type="entity-link" >SelectableCell</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SelfAssessmentValidatorInterface.html" data-type="entity-link" >SelfAssessmentValidatorInterface</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ShortTextAnswer.html" data-type="entity-link" >ShortTextAnswer</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ShortTextMetadata.html" data-type="entity-link" >ShortTextMetadata</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ShortTextSetting.html" data-type="entity-link" >ShortTextSetting</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SingleChoiceAnswer.html" data-type="entity-link" >SingleChoiceAnswer</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SingleChoiceMetadata.html" data-type="entity-link" >SingleChoiceMetadata</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SingleChoiceSetting.html" data-type="entity-link" >SingleChoiceSetting</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SpecificListMetadata.html" data-type="entity-link" >SpecificListMetadata</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/TemplateInterface.html" data-type="entity-link" >TemplateInterface</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Test.html" data-type="entity-link" >Test</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/UploadProductTranslationItem.html" data-type="entity-link" >UploadProductTranslationItem</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/UploadTaxonomyExploitationInterface.html" data-type="entity-link" >UploadTaxonomyExploitationInterface</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/YesNoMetadata.html" data-type="entity-link" >YesNoMetadata</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/typealiases.html" data-type="entity-link">Type aliases</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});