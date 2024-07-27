https://stackoverflow.com/questions/78046972/how-to-remove-that-tree-structure-at-the-top-on-visual-studio

You need to disable stickyScroll. To disable it you can right click on the Sticky Scroll tree and click the Sticky Scroll selection from the open popup. As another solution way, you can apply the following steps:

Open Settings panel from File > Preferences > Settings or the Manage icon at left bottom
Open the settings.json file from the right top corner file icon (Displays this overlay on hover: Open Settings JSON) in the Settings panel
Use this command: "editor.stickyScroll.enabled": false to disable it. If you would like to enable it again, then you can change false to true or remove this command from the JSON file since its default value is already true
