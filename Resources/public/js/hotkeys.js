var hotkeysHandler = function(options) {
    var parent = this;

    /**
     * Shortcuts to observe. The structure is following:
     * 'custom_shortcut_name': [<keycode>, <selector>, <click|pinbar>]
     * The third element <click|pinbar> allows to choose between click on
     * the DOM element directly ('click') or click on an element in the
     *  OroCRM pull down menu ('pinbar') in upper right corner
     */
    var shortcuts = {
        /* 's' button opens search dialog */
        search: ['83', '.header-dropdown-search .icon-search', 'click'],
        /* 'c' button opens shortcuts dialog */
        shorts: ['67', '.header-dropdown-shortcut .icon-share-sign', 'click'],
        /* 'r' button returns to home page */
        home: ['82', 'h1.logo a', 'click'],
        /* 'f' button opens favourites tab */
        pinbarFavourites: ['70', '#favorite-tab a', 'pinbar'],
        /* 'h' button opens history tab */
        pinbarHistory: ['72', '#history-tab a', 'pinbar'],
        /* 'm' button opens most viewed tab */
        pinbarMostviewed: ['77', '#mostviewed-tab a', 'pinbar'],
        /* 'p' button opens pinbar tab */
        pinbarPinbar: ['80', '#pinbar-tab a', 'pinbar']
    }

    this.construct = function(options) {
        jQuery.extend(shortcuts , options);
        parent.clickAction();
    }

    /**
     * Observes key presses and processes the corresponding action
     */
    this.clickAction = function() {
        $('html').delegate('body', 'keyup', function(event) {
            if (true === parent.checkIsActionAllowed()) {
                $.each(shortcuts, function(index, value) {
                    if (value[0] == event.which && value[2] == 'click') {
                        parent.openBySelector(value[1]);
                    } else if (value[0] == event.which && value[2] == 'pinbar') {
                        parent.openBySelector(value[1], true)
                    }
                })
            }
        });
    }

    /**
     * Clicks on the clickSelector
     * @param clickSelector
     * @param pinMenu - true if selector is inside the pinbar dropdown
     */
    this.openBySelector = function(clickSelector, pinMenu) {
        if (typeof $(clickSelector) !== 'undefined') {
            if (pinMenu === true) {
                if (false == $('.pin-menus .dropdown-menu').is(':visible')) {
                    $('.pin-menus .oro-dropdown-toggle').click();
                }
            }
            $(clickSelector).click();
        }
    }

    /**
     * Returns FALSE if user is focused on some input.
     * @returns {boolean}
     */
    this.checkIsActionAllowed = function() {
        var focused = $(':focus');
        if ($("input:focus").length || $("textarea:focus").length) {
            return false;
        }

        return true;
    }

    this.construct(options)
}