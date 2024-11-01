import { displayTerminalCalc } from './components/apps/calc';
import { displayChrome } from './components/apps/chrome';
import { displayGedit } from './components/apps/gedit';
import { displayAboutManish } from './components/apps/manish';
import { displaySettings } from './components/apps/settings';
import displaySpotify from './components/apps/spotify';
import { displayTerminal } from './components/apps/terminal';
import { displayTrash } from './components/apps/trash';
import displayVsCode from './components/apps/vscode';

const apps = [
    {
        id: "chrome",
        title: "Google Chrome",
        icon: './themes/Yaru/apps/chrome.png',
        disabled: false,
        favourite: true,
        desktop_shortcut: true,
        screen: displayChrome,
    },
    {
        id: "calc",
        title: "Calc",
        icon: './themes/Yaru/apps/calc.png',
        disabled: false,
        favourite: true,
        desktop_shortcut: false,
        screen: displayTerminalCalc,
    },
    {
        id: "about-Manish",
        title: "About Manish",
        icon: './themes/Yaru/system/user-home.png',
        disabled: false,
        favourite: true,
        desktop_shortcut: true,
        screen: displayAboutManish,
    },
    {
        id: "vscode",
        title: "Manish Health ChatAI",
        icon: './themes/Yaru/apps/health.png',
        disabled: false,
        favourite: true,
        desktop_shortcut: false,
        screen: displayVsCode,
    },
    {
        id: "terminal",
        title: "Terminal",
        icon: './themes/Yaru/apps/bash.png',
        disabled: false,
        favourite: true,
        desktop_shortcut: false,
        screen: displayTerminal,
    },
    {
        id: "spotify",
        title: "Arkoweb",
        icon: './themes/Yaru/apps/spotify1.png',
        disabled: false,
        favourite: true,
        desktop_shortcut: false,
        screen: displaySpotify, //  
    },
    {
        id: "settings",
        title: "Settings",
        icon: './themes/Yaru/apps/gnome-control-center.png',
        disabled: false,
        favourite: true,
        desktop_shortcut: false,
        screen: displaySettings,
    },
    {
        id: "trash",
        title: "Trash",
        icon: './themes/Yaru/system/user-trash-full.png',
        disabled: false,
        favourite: false,
        desktop_shortcut: true,
        screen: displayTrash,
    },
    {
        id: "gedit",
        title: "Contact Me",
        icon: './themes/Yaru/apps/gedit.png',
        disabled: false,
        favourite: false,
        desktop_shortcut: true,
        screen: displayGedit,
    },
]

export default apps;