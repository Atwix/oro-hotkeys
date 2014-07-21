# Atwix Hotkeys #
Atwix Hotkeys extension provides an ability to use single key for accessing to different UI elements.

Base hotkeys are:

* 's' - Open search dialog.
* 'c' - Open shortcuts dialog.
* 'r' - Return to home page.
* 'f' - Open favourites tab.
* 'h' - Open history tab.
* 'm' - Open most viewed tab.
* 'p' - Open pinbar tab.

## Installation
* Put the folder contents in `src/Atwix/Bundle/HotkeysBundle/`
* Run the following command from the root of OroCRM installation:

```Bash
php app/console assets:install
```

## Custom hotkeys
You are able to map your own keys and maps by passing parameters to the `hotkeysHandler()` object.
Just override `src/Atwix/Bundle/HotkeysBundle/Resources/views/Js/hotkeys.js.twig` and pass your own
settings to the object.

Example: open user menu by pressing 'u' button

```JavaScript
{% if true == isDesktopVersion() and true == oro_config_value('atwix_hotkeys.hotkeys_enabled') %}
<script type="text/javascript">
    require(['jquery', 'atwixhotkeys/js/hotkeys'], function($) {
        $(function() {
            var customKeys = {
                usermenu: ['85', '.user-menu .dropdown-toggle', 'click']
            }
            var oroHotkeys = new hotkeysHandler(customKeys);
        });
    });
</script>
{% endif %}
```