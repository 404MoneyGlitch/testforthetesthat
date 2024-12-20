import { GifTV } from './GifTV.js';
import { gifTVURLs } from './constants/channels.js';
import { TrippyPage } from './js/trippyPage.js';

const gifTV = new GifTV(gifTVURLs);
gifTV.init();

// Initialize trippy page
new TrippyPage();