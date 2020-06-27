## Branch 2.X ##

### 2.3.0 ###

* Added: css element selector token `x16`

### 2.2.0 ###

* Added: option to customize the raw code pane
* Added: option to set the token base styles inlcuding font-size - feature requested [on GitHub](https://github.com/EnlighterJS/Plugin.ThemeCustomizer/issues/6)
* Added: option to set button background-color and line-height
* Added: tab `defaults` to change global settings
* Changed: moved button related settings to tab `buttons`
* Changed: moved line-number settings to tab `lines`
* Changed: removed tab "fonts"
* Bugfix: highlighted-line hover selector was invalid -> selection of `background-color:hover` was not possible - thanks to [ajtruckle on GitHub](https://github.com/EnlighterJS/Plugin.ThemeCustomizer/issues/4) #4

### 2.1.0 ###

* Added: `wp-skltn` component wrapper around the settings elements
* Added: additional description to the base theme settings
* Changed: empty values within customizer take presendence over base theme (empty values cause the css rule to be deleted if exist)

### 2.0.0 ###

* Re-created from scratch as standalone component

## Branch 1.X ##

Legacy ThemeCustomizer as part of the Enlighter WordPress Plugin `<= v3`