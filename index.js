'use strict';

const autocannon = require('autocannon');
const faker = require('faker');
const querystring = require('querystring');
const path = require('path');
const url = require('url');

const memoize = require('memoizee');
const shuffle = require('lodash/shuffle');
const pick = require('lodash/pick');
const sampleSize = require('lodash/sampleSize');
const sample = require('lodash/sample');

// Weird addresses
// Ref: android-app://org.telegram.messenger
const internet = faker.internet;
const num = 980;

const getFakePath = memoize(
  () => {
    if (Math.random() > 0.5) {
      return '/';
    }
    const s = path.format({
      base: faker.fake('{{random.words}}').replace(/ /g, '/').toLowerCase(),
    });
    return `/${s}`;
  },
  { maxAge: 300, max: 300 }
);

const getReferrer = memoize(
  s => {
    if (Math.random() > 0.5) {
      return sample(common);
    }
    return `${internet.url()}${getFakePath(s)}`;
  },
  { maxAge: 300, max: 300 }
);

const getIp = memoize(
  () => {
    return internet.ip();
  },
  { maxAge: 40, max: 300 }
);

const getUA = memoize(
  () => {
    return internet.userAgent();
  },
  { maxAge: 100, max: 300 }
);

// Weird addresses
// Ref: android-app://org.telegram.messenger

const common = [
  'httpsL://google.com',
  'httpsL://yahoo.com',
  'httpsL://yandex.ru',
  'https://www.google.co.uk',
  'https://www.google.com/url',
  'https://www.google.it',
  'https://www.bing.com/search',
  'https://duckduckgo.com',
  'https://getpocket.com',
  'https://www.pinterest.com',
  'https://blog.hubspot.com',
  'https://www.inc.com/',
  'https://github.com',
  'https://www.reddit.com',
  'https://www.quora.com',
  'https://www.bit.ly',
  'https://t.co',
  'https://t.co',
];

const urlsAndSids = [
  ['https://buffer.com', 'lkvowbwe'],
  ['https://transistor.fm', 'DJZHRVBX'],
  ['https://death-to-ie11.com', 'HOYZGGOF'],
  ['https://tr.af', 'WVLJSXGZ'],
  ['https://super.so', 'JWSUHSWN'],
  ['https://www.lawjobresources.com', 'aythnhsx'],
  ['https://efedorenko.com/', 'xussuuyk'],
  ['https://vr.josh.earth', 'GISNV'],
  ['https://www.inboxzeroftw.com', 'BOBZKZMV'],
  ['https://vonx.io', 'ikjnvhai'],
  ['https://ohseemedia.com', 'QEDYG'],
  ['https://reporemover.xyz', 'vmsgxqrs'],
  ['https://carbondesignsystem.com', 'VMSGXQRS'],
  ['https://readjuststop.com', 'nophtzsw'],
  ['https://www.cryptovoxels.com/', 'AGDDHJCW'],
  ['https://convertingcolors.com', 'IVOBHOFD'],
  ['https://pjrvs.com', 'LSQYV'],
  ['https://andymci.ca', 'DVILJHUD'],
  ['https://convertingcolors.com', 'KWJDZQGY'],
  ['https://app.usefathom.com', 'HQKAUWYI'],
  ['https://woutr.co', 'KKIRLGNS'],
  ['https://opencagedata.com', 'UMKIX'],
  ['https://luckyshot.money', 'FMZRVNYM'],
  ['https://eldonyoder.com', 'JMVOBTIJ'],
  ['https://postduif.me', 'FUDEIKQU'],
  ['https://statamic.com', 'LQOVXDOL'],
  ['https://mappd.io', 'XPXKBGLI'],
  ['https://davidalindahl.com', 'xsgzohcd'],
  ['https://smeriwether.com', 'ivobhofd'],
  ['https://html2pdf.guru', 'jggxgdmd'],
  ['https://chimpessentials.com', 'SQQVO'],
  ['https://ideas42ventures.com', 'alohvaqx'],
  ['https://sync.ubclaunchpad.com', 'lpvlowxe'],
  ['https://ubclaunchpad.com', 'poauyjmq'],
  ['https://readjuststop.com', 'GKQJEIVE'],
  ['https://jonblankenship.github.io', 'VHYCR'],
  ['https://www.justiceforrickieslaughter.com', 'ftsspsgr'],
  ['https://nomadashispanos.com', 'hjmks'],
  ['https://notes.technomancy.dev', 'ajxotbma'],
  ['https://www.recoon.fm', 'RCLTYBVO'],
  ['https://www.community-finder.co', 'KVREGYUZ'],
  ['https://www.deleteyourdata.com', 'aokzddgf'],
  ['https://codeforfoco.org', 'oemmhhle'],
  ['https://docs.ubclaunchpad.com', 'tordmssm'],
  ['https://gatsby-starter-business.com', 'ajxotbma'],
  ['https://devopsish.com', 'acmuyzfw'],
  ['https://radicaldesigncourse.com', 'kypifaol'],
  ['https://smeriwether.com', 'xsgzohcd'],
  ['https://vole.wtf', 'RBWKC'],
  ['https://mattround.com', 'PIKWX'],
  ['https://2ality.com', 'FDLHMKBU'],
  ['https://www.battleforthenet.com', 'FNXMXLYY'],
  ['https://restdb.io', 'XNOYAFDM'],
  ['https://covisitor.app', 'IOHOPAKJ'],

  ['https://www.frontendmentor.io', 'VHCRKCXI'],
  ['https://10glo.com', 'GPVRVQYQ'],
  ['https://ntag.fr', 'DTIPWFLH'],
  ['https://nodlestudios.com', 'HZCOTBKR'],
  ['https://wearesublime.com', 'XEZQZUJPA'],
  ['https://european-seed.com', 'VRJLVPXI'],
  ['https://summerofcode.be', 'OMFXPMNP'],
  ['https://campmaldives.com', 'TDDJJ'],
  ['https://timeblocks.co', 'AIBQU'],
  ['https://www.artiesonthego.com', 'VDIDZPOB'],
  ['https://thebrowser.com', 'JSMTGRJI'],
  ['https://oauth.net', 'KKZQTOODnp'],
  ['https://taskflow.io', 'OCSVINVR'],
  ['https://scottspence.com', 'CVQDNYUX'],
  ['https://pauljardine.co.uk', 'QVWZGNQL'],
  ['https://webgems.io', 'WPOPEOXL'],
  ['https://coywolf.pro', 'ZAXHNJVJ'],
  ['https://carlcassar.com', 'ISFHFHGE'],
  ['https://kiakamgar.com', 'SKEEJRUH'],
  ['https://convertingcolors.com', 'MWMITLCA'],
  ['https://lionsmouth.digital', 'ABFXHTQX'],
  ['https://app.onedone.golf', 'CXGTLIAQ'],
  ['https://blog.helpspace.com', 'MNHBHSBU'],
  ['https://jeffgeerling.com', 'UROTN'],
  ['https://riotandrebel.com', 'JYUJYEHG'],
  ['https://breen.tech/', 'OOGFNFEQ'],
];

const get = () => {
  const us = shuffle(sampleSize(urlsAndSids, Math.round(Math.random() * urlsAndSids.length))).map(
    ([mapUrl, sid]) => {
      return `https://collect.usefathom.com/collector/pageview?p=${getFakePath(
        sid
      )}&h=${mapUrl}&r=${getReferrer(sid)}&sid=${sid}&res=${faker.random.number(
        num
      )}x${faker.random.number(num)}&tz=${faker.address.timeZone()}`;
    }
  );

  return us;
};

const domains = Array(700)
  .fill('')
  .reduce((prev, curr) => {
    return [...prev, ...get()];
  }, []);

console.log(domains.length);
const instance = autocannon(
  {
    url: domains,
    amount: domains.length * 2,
    timeout: 100,
    duration: 350,
    connections: Math.round(domains.length / 10),
    headers: {
      [`X-Forwarded-For`]: getIp(),
      'user-agent': getUA(),
      [`pragma`]: 'no-cache',
    },
  },
  finishedBench
);

instance.on('response', function (client, statusCode, returnBytes, responseTime) {
  var newHeaders = {};
  newHeaders[`Referer`] = getReferrer(responseTime);
  newHeaders[`X-Forwarded-For`] = getIp(responseTime);
  newHeaders[`pragma`] = 'no-cache';
  newHeaders['user-agent'] = getUA(responseTime);
  client.setHeaders(newHeaders);
});

process.once('SIGINT', () => {
  instance.stop();
});

// autocannon.track(instance, { renderProgressBar: false });
function finishedBench(err, res) {
  console.log('finished bench', err, res);
}
