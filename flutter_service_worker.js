'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "index.html": "6c40e6c33c38c1973484a4cbd71ed17a",
"/": "6c40e6c33c38c1973484a4cbd71ed17a",
"main.dart.js": "efd099e956536f5ba07cd492d9268dd9",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "868ade4c680632e0657f89e99152c7eb",
"assets/AssetManifest.json": "b7d70fa0ed83e752d65acd7f38996098",
"assets/NOTICES": "5e5c8e1f7ef3e1b79ddfb377170b298d",
"assets/FontManifest.json": "01700ba55b08a6141f33e168c4a6c22f",
"assets/packages/country_pickers/assets/tg.png": "a0f14f046b0356221c6923203bd43373",
"assets/packages/country_pickers/assets/me.png": "a2ca2c8d5567775b6f00634bcdb7a6f9",
"assets/packages/country_pickers/assets/la.png": "ab542ca6e9c4e1911e70cb6178dd64a6",
"assets/packages/country_pickers/assets/mr.png": "253fc7fdd3d3360dfd2e8d726a3c27f7",
"assets/packages/country_pickers/assets/ni.png": "41e2831687e9997fa4d5f4eb0700cc84",
"assets/packages/country_pickers/assets/lv.png": "4370f6f09eecc21db000bd09191f3ff3",
"assets/packages/country_pickers/assets/om.png": "b16ebc34417eb7a6ad7ed0e3c79a71c0",
"assets/packages/country_pickers/assets/af.png": "4b0f402972e53c96146b67d621682070",
"assets/packages/country_pickers/assets/cy.png": "f63fce2edfbc2aac831d6934e82a336f",
"assets/packages/country_pickers/assets/bj.png": "04f9872301a332efdd91735631f3d438",
"assets/packages/country_pickers/assets/aq.png": "947030b9fb778b63ab28954c545ea4c7",
"assets/packages/country_pickers/assets/cn.png": "26c512b86a77d796629adf61862475ac",
"assets/packages/country_pickers/assets/gb-sct.png": "d55a9a9d41e9dc61cbeef059519d5618",
"assets/packages/country_pickers/assets/co.png": "37dbdf7ef835ea7ee2c1bdcf91e9a2bb",
"assets/packages/country_pickers/assets/cx.png": "d5a6ca51e490d03b06a647d652d3fdb0",
"assets/packages/country_pickers/assets/ag.png": "45b17f619e8d2d3321fe031c4a90691e",
"assets/packages/country_pickers/assets/ms.png": "438b3ae48465543239a679ef915378de",
"assets/packages/country_pickers/assets/md.png": "d579fff3f3b7644d54cdad3fbcdd501e",
"assets/packages/country_pickers/assets/zm.png": "e918e6d9756449e9e9fefd52faa0da80",
"assets/packages/country_pickers/assets/vn.png": "32ff65ccbf31a707a195be2a5141a89b",
"assets/packages/country_pickers/assets/tf.png": "cc0d9468b31855b29f38ca53eb522067",
"assets/packages/country_pickers/assets/td.png": "343a6c8ad0d15e0a7f44e075dd02082a",
"assets/packages/country_pickers/assets/yt.png": "4fa81d3430e630527b8c6987619e85dc",
"assets/packages/country_pickers/assets/lb.png": "30e7e0ee297d535bed953d7ad3321c6f",
"assets/packages/country_pickers/assets/mf.png": "4fa81d3430e630527b8c6987619e85dc",
"assets/packages/country_pickers/assets/lu.png": "31349218e6c2a6e900a3a83baa8f61d2",
"assets/packages/country_pickers/assets/mq.png": "394a6076943d6eb57ee10c7f2e044e1c",
"assets/packages/country_pickers/assets/cz.png": "9e16a631c6e170d3415c005061b1e5da",
"assets/packages/country_pickers/assets/ae.png": "7ff210c9d922e6047b30241b5176948b",
"assets/packages/country_pickers/assets/cm.png": "12c2c677c148caa9f6464050ea5647eb",
"assets/packages/country_pickers/assets/bi.png": "2c1d426f4b941b9638303c34145ba672",
"assets/packages/country_pickers/assets/ar.png": "b8a60b09d7db59ca8e34d0c391f7cf47",
"assets/packages/country_pickers/assets/as.png": "d3ee7d8aeade5f87a5ab6ea1c53c1181",
"assets/packages/country_pickers/assets/bh.png": "7533d290739c20bd2d0250414a74c19d",
"assets/packages/country_pickers/assets/cl.png": "6735e0e2d88c119e9ed1533be5249ef1",
"assets/packages/country_pickers/assets/ad.png": "8312ea200df9dd539e27c116939db42c",
"assets/packages/country_pickers/assets/mp.png": "895e2aea9e8a9fb4a3db09ba75b2ae11",
"assets/packages/country_pickers/assets/lt.png": "d79eb564dd857c66ddd65a41f4cdfe4e",
"assets/packages/country_pickers/assets/mg.png": "0ef6271ad284ebc0069ff0aeb5a3ad1e",
"assets/packages/country_pickers/assets/lc.png": "32e5433954c7a99cd53c1e67f2ac604a",
"assets/packages/country_pickers/assets/tr.png": "0a832c3bc7481e6b285dabbf1a119e22",
"assets/packages/country_pickers/assets/ua.png": "b4b10d893611470661b079cb30473871",
"assets/packages/country_pickers/assets/tv.png": "d45cf6c6f6ec53ae9b52f77848dc6bf9",
"assets/packages/country_pickers/assets/vi.png": "bfe5691810c27983346bf52eb5149bb4",
"assets/packages/country_pickers/assets/mt.png": "2c20ed4b1721ad71677d7e26f95425cd",
"assets/packages/country_pickers/assets/no.png": "ae5d87669104732f61cca68d6bd10cbf",
"assets/packages/country_pickers/assets/mc.png": "6375a336b1fd53d0e918ae945523078c",
"assets/packages/country_pickers/assets/ch.png": "fe8519b23bed3b2e8669dac779c3cb55",
"assets/packages/country_pickers/assets/bl.png": "536f99fa693e6b52a21c67e983632092",
"assets/packages/country_pickers/assets/aw.png": "01f11f497399c715de5f2561b93b8ef8",
"assets/packages/country_pickers/assets/bz.png": "3b84100ca29a0bc77474677e9da6fc0f",
"assets/packages/country_pickers/assets/bm.png": "72e7fff10d3168e4c62bad5465598db0",
"assets/packages/country_pickers/assets/ci.png": "a490576a22f2c67f1d331cbc5098f5f1",
"assets/packages/country_pickers/assets/mu.png": "f00d3c927769eaf3bbc4d2c249ea3418",
"assets/packages/country_pickers/assets/us.png": "b2b35d5b34ba0d66fda92e2003cd6b10",
"assets/packages/country_pickers/assets/tw.png": "079535fcbc6e855a85c508c9d1b5615a",
"assets/packages/country_pickers/assets/ye.png": "4cf73209d90e9f02ead1565c8fdf59e5",
"assets/packages/country_pickers/assets/mw.png": "47fb9232df51b3a1de93fda80a795163",
"assets/packages/country_pickers/assets/nl.png": "3649c177693bfee9c2fcc63c191a51f1",
"assets/packages/country_pickers/assets/ls.png": "2bca756f9313957347404557acb532b0",
"assets/packages/country_pickers/assets/bo.png": "74bac15d186993c09eecdde11876b401",
"assets/packages/country_pickers/assets/at.png": "3d36c83a3d671b11f755c891bd8de687",
"assets/packages/country_pickers/assets/ck.png": "882bc3896cdd040757972bcbbf75e4bb",
"assets/packages/country_pickers/assets/by.png": "c5d14943250d54b4a630794c5648c687",
"assets/packages/country_pickers/assets/au.png": "63084e9484c0b6db451a1d68ad5adeb9",
"assets/packages/country_pickers/assets/bn.png": "1f1c5a29f9a6fd77963f7bb3de5946c2",
"assets/packages/country_pickers/assets/ma.png": "2302b44a7fe96ca595ea9528271a1ad9",
"assets/packages/country_pickers/assets/nz.png": "d22c137d0038c20c1fa98ae2ed3729b0",
"assets/packages/country_pickers/assets/lr.png": "ef37f094c6b37fbd2343bc800b2a35e5",
"assets/packages/country_pickers/assets/mv.png": "8468c7f25a4b5dc7403146da72bd8126",
"assets/packages/country_pickers/assets/tc.png": "0faabda1411738e572144aaeed24aadd",
"assets/packages/country_pickers/assets/ug.png": "3a85e25a9797f7923a898007b727216a",
"assets/packages/country_pickers/assets/tt.png": "2633904bd4718afeecfa0503057a7f65",
"assets/packages/country_pickers/assets/pl.png": "e8714e9460929665055f1c93dce1bf61",
"assets/packages/country_pickers/assets/rs.png": "0a4c07a0ac5523d6328ab7d162d79d1e",
"assets/packages/country_pickers/assets/in.png": "0f1b94cf838fa1b86c172da4ab3db7e1",
"assets/packages/country_pickers/assets/ge.png": "3fb1b71b32fb6bbd4e757adba06ce216",
"assets/packages/country_pickers/assets/gr.png": "ed1304c7d8e6a64f31e7b65c4beea944",
"assets/packages/country_pickers/assets/gs.png": "191d4b79605c08effa5b3def9834c9d6",
"assets/packages/country_pickers/assets/gd.png": "7d4b72f73674133acb00c0ea3959e16b",
"assets/packages/country_pickers/assets/io.png": "d4910e28f0164bc879999c17024d543c",
"assets/packages/country_pickers/assets/hk.png": "69a77d8a25952f39fe6aadafb6f7efc2",
"assets/packages/country_pickers/assets/kp.png": "8fcc8f2fc646b484b4a47cdc0ff21cab",
"assets/packages/country_pickers/assets/gb-nir.png": "09af1c5f1433c02e97a95286ce24f4d4",
"assets/packages/country_pickers/assets/kg.png": "e0eab32f37a96e43df134e70db49482a",
"assets/packages/country_pickers/assets/pm.png": "4fa81d3430e630527b8c6987619e85dc",
"assets/packages/country_pickers/assets/sv.png": "abe677facaeee030a10987f87831ee53",
"assets/packages/country_pickers/assets/re.png": "4fa81d3430e630527b8c6987619e85dc",
"assets/packages/country_pickers/assets/sa.png": "60851afd0246c77b57f76f32e853c130",
"assets/packages/country_pickers/assets/sc.png": "fce9893562cbe99d2e62a46b03e42007",
"assets/packages/country_pickers/assets/st.png": "5abecf1202ef9f7b33bdb9d0e3913f80",
"assets/packages/country_pickers/assets/ke.png": "3e54059985907a758bb0531a711522fb",
"assets/packages/country_pickers/assets/im.png": "d3da8affefefe4ec55770c9f3f43f117",
"assets/packages/country_pickers/assets/kr.png": "f36e020411beb5d89c1accce5acb1dd1",
"assets/packages/country_pickers/assets/gf.png": "4004b2e3ec6c151fe4cb43e902280952",
"assets/packages/country_pickers/assets/dj.png": "6816bcba85e0179c4c1fafb76f35cd93",
"assets/packages/country_pickers/assets/gq.png": "de93250a1de5e482f88bc5309ce21ac0",
"assets/packages/country_pickers/assets/gp.png": "4fa81d3430e630527b8c6987619e85dc",
"assets/packages/country_pickers/assets/dk.png": "2f452388777897cd70a25b1295582938",
"assets/packages/country_pickers/assets/gg.png": "0a697b4266f87119aeb8a2ffe3b15498",
"assets/packages/country_pickers/assets/il.png": "ee933479696b8c80d2ade96ee344a89c",
"assets/packages/country_pickers/assets/pn.png": "0205d0644f1207674c80eef7719db270",
"assets/packages/country_pickers/assets/sb.png": "12cccb421defca5c7a4d19661f98f06f",
"assets/packages/country_pickers/assets/py.png": "4dca66b598604fb3af9dee2fd9622ac4",
"assets/packages/country_pickers/assets/ru.png": "6974dcb42ad7eb3add1009ea0c6003e3",
"assets/packages/country_pickers/assets/kw.png": "cac0e665bc61366ffeb1cb08c24b609b",
"assets/packages/country_pickers/assets/do.png": "e625b779a26a0130150b0a5bafe24380",
"assets/packages/country_pickers/assets/gt.png": "2791b68757cd31e89af8817817e589f0",
"assets/packages/country_pickers/assets/gb.png": "09af1c5f1433c02e97a95286ce24f4d4",
"assets/packages/country_pickers/assets/gu.png": "7e51aa7e3adaf526a8722350e0477192",
"assets/packages/country_pickers/assets/je.png": "6fcdb123f8bf3cafea5537542018b151",
"assets/packages/country_pickers/assets/hm.png": "63084e9484c0b6db451a1d68ad5adeb9",
"assets/packages/country_pickers/assets/sg.png": "fd3e4861be787cfde6338870e2c8d60a",
"assets/packages/country_pickers/assets/pk.png": "c341fe3cf9392ed6a3b178269c1d9f0c",
"assets/packages/country_pickers/assets/sr.png": "b9e4b7fff662b655ce2b41324a04526b",
"assets/packages/country_pickers/assets/se.png": "775da17dccf0768a1f10f21d47942985",
"assets/packages/country_pickers/assets/jp.png": "fc7c3eb4c199252dc35730939ca4384d",
"assets/packages/country_pickers/assets/gw.png": "806f63c256bddd4f1680529f054f4043",
"assets/packages/country_pickers/assets/eh.png": "f91039d93b511ab8baba3a6242f21359",
"assets/packages/country_pickers/assets/dz.png": "7372cc9383ca55804d35ca60d09f2ab9",
"assets/packages/country_pickers/assets/ga.png": "7a9bd1b751a4c92c4a00897dbb973214",
"assets/packages/country_pickers/assets/fr.png": "4fa81d3430e630527b8c6987619e85dc",
"assets/packages/country_pickers/assets/dm.png": "013b44702a8fb5773a0983085b0dc076",
"assets/packages/country_pickers/assets/hn.png": "5fcf2451994a42af2bba0c17717ed13f",
"assets/packages/country_pickers/assets/sd.png": "40572a05b7cd8ea53cee59c6be331588",
"assets/packages/country_pickers/assets/rw.png": "f6602a0993265061713f34e8a86c42cf",
"assets/packages/country_pickers/assets/ph.png": "158bd50b6f2d18f398e8600f6663b488",
"assets/packages/country_pickers/assets/ss.png": "bfc79aa44e6d2b026717f7aae4431639",
"assets/packages/country_pickers/assets/qa.png": "3ed06ed4f403488dd34a747d2869204d",
"assets/packages/country_pickers/assets/pe.png": "b722a28a444000bab6cd03e859112e42",
"assets/packages/country_pickers/assets/pr.png": "b496188f51424a776d7ce5d8e28fd022",
"assets/packages/country_pickers/assets/si.png": "9fa57dc95640bcd67051d7ff63caa828",
"assets/packages/country_pickers/assets/ht.png": "a49a27479ed8be33d962898febc049f1",
"assets/packages/country_pickers/assets/es.png": "a290e5120fe89e60d72009815478d0d3",
"assets/packages/country_pickers/assets/gl.png": "fb536122819fd1d3fc18c02c7df93865",
"assets/packages/country_pickers/assets/gm.png": "be81263dd47ca1f99936f78f6b5dfc4a",
"assets/packages/country_pickers/assets/er.png": "300cbfb7dda5e2eea87e9b03660a6077",
"assets/packages/country_pickers/assets/fi.png": "3ccd69a842e55183415b7ea2c04b15c8",
"assets/packages/country_pickers/assets/ee.png": "69e0ffbab999ade674a9b07db0ee3941",
"assets/packages/country_pickers/assets/kn.png": "11889e3432a57b8327eaeb5f34951db5",
"assets/packages/country_pickers/assets/hu.png": "ff1d0e2bc549da022f2312c4ac7ca109",
"assets/packages/country_pickers/assets/iq.png": "9434c17a6d4653df965e3276137764a1",
"assets/packages/country_pickers/assets/ky.png": "bacc27cd23c1e359244533ecb9043de6",
"assets/packages/country_pickers/assets/sh.png": "09af1c5f1433c02e97a95286ce24f4d4",
"assets/packages/country_pickers/assets/ps.png": "e3e006d28f6b72169c717c1dba49b4d5",
"assets/packages/country_pickers/assets/pf.png": "33211a88528a8f7369d4bf92766131b2",
"assets/packages/country_pickers/assets/sj.png": "ae5d87669104732f61cca68d6bd10cbf",
"assets/packages/country_pickers/assets/id.png": "80bb82d11d5bc144a21042e77972bca9",
"assets/packages/country_pickers/assets/is.png": "9fce179e688579504fb8210c51aed66d",
"assets/packages/country_pickers/assets/eg.png": "97843ac1dffee8cf3b3e7b341a38893e",
"assets/packages/country_pickers/assets/fk.png": "d599200dd54a121ac54e4895f97f19b1",
"assets/packages/country_pickers/assets/fj.png": "7970a279e5034d20c73b904388df7cba",
"assets/packages/country_pickers/assets/gn.png": "30b014c10d88f166e4bfd46bbc235ebe",
"assets/packages/country_pickers/assets/gy.png": "64f3007da6bdc84a25d8ad6b5d7f3094",
"assets/packages/country_pickers/assets/ir.png": "5d8864e2235f7acb3063a9f32684c80e",
"assets/packages/country_pickers/assets/km.png": "c631326a464f21c51fbfd767be9bcf39",
"assets/packages/country_pickers/assets/ie.png": "1d91912afc591dd120b47b56ea78cdbf",
"assets/packages/country_pickers/assets/kz.png": "caba66830ed539d3f86431ddf4006e72",
"assets/packages/country_pickers/assets/ro.png": "50ada15f78e9828d9886505e0087cbfd",
"assets/packages/country_pickers/assets/sk.png": "207097f7d7d1ab9c7c88d16129cdba39",
"assets/packages/country_pickers/assets/pg.png": "96c8233f13b1f4e7200d6ac4173de697",
"assets/packages/country_pickers/assets/pt.png": "1fe8c12d96a7536b0aa25a9ca7d3c701",
"assets/packages/country_pickers/assets/so.png": "2a29df9dfbfbe10d886f1f6157557147",
"assets/packages/country_pickers/assets/sx.png": "aee87f6ff085fccd57c234f10a6d6052",
"assets/packages/country_pickers/assets/hr.png": "3175463c3e7e42116d5b59bc1da19a3f",
"assets/packages/country_pickers/assets/ki.png": "a93bda4f0f004d9c865f93d25c81ce18",
"assets/packages/country_pickers/assets/jm.png": "87dbf861e528586787fdf8b6617e2f61",
"assets/packages/country_pickers/assets/eu.png": "38336a6139fea0f3e2daa5a135e70d1d",
"assets/packages/country_pickers/assets/ec.png": "746ed5202fb98b28f7031393c2b479da",
"assets/packages/country_pickers/assets/et.png": "7bc0f7bd7b4c252b375fc5bd94fe6a3f",
"assets/packages/country_pickers/assets/fo.png": "ccd988f6309e4245cfa36478e103fb9b",
"assets/packages/country_pickers/assets/kh.png": "25e4099457402866cc1fabcd4506c6cc",
"assets/packages/country_pickers/assets/sy.png": "f415bf216f4c08b9a224b83165decc11",
"assets/packages/country_pickers/assets/sn.png": "1e8f55378ddd44cdc9868a7d35bda2fe",
"assets/packages/country_pickers/assets/pw.png": "5216b69d6d8cb4e50962f8a6531231e8",
"assets/packages/country_pickers/assets/sl.png": "61b9d992c8a6a83abc4d432069617811",
"assets/packages/country_pickers/assets/gb-eng.png": "0d9f2a6775fd52b79e1d78eb1dda10cf",
"assets/packages/country_pickers/assets/fm.png": "03c6a315c3acedae9a51cb444c99be5e",
"assets/packages/country_pickers/assets/gi.png": "987d065705257febe56bdbe05a294749",
"assets/packages/country_pickers/assets/de.png": "e2227152ece494eabbb6b184dfb9f9a9",
"assets/packages/country_pickers/assets/gh.png": "b35464dca793fa33e51bf890b5f3d92b",
"assets/packages/country_pickers/assets/jo.png": "79a73b63a1e0d78a08da882b146a2224",
"assets/packages/country_pickers/assets/it.png": "ff7064f6e37512ff41e665f3a4987e70",
"assets/packages/country_pickers/assets/pa.png": "3215dc6016afeb373faacc38ee34b3d4",
"assets/packages/country_pickers/assets/sz.png": "a06f0fa489d9c9faf0690673242005d2",
"assets/packages/country_pickers/assets/sm.png": "8615f3e38ee216e53895ac9acd31a56b",
"assets/packages/country_pickers/assets/tn.png": "c375381bbdb31c4e80af18210d196d30",
"assets/packages/country_pickers/assets/ml.png": "82bf0ca0c67d2371207a540b40c320fc",
"assets/packages/country_pickers/assets/cg.png": "502df6404e41cb76d033af895f34eb2c",
"assets/packages/country_pickers/assets/ax.png": "adc1e135fd79d41a3d968de5ec048d8a",
"assets/packages/country_pickers/assets/ao.png": "eec240bde52c32770eeacd027b193347",
"assets/packages/country_pickers/assets/bt.png": "43e973113f8c57a5cd303a49b5f371da",
"assets/packages/country_pickers/assets/an.png": "2aaab4636955c0e2609ad551e8e938cf",
"assets/packages/country_pickers/assets/bb.png": "8679327e664edb5e050982e7ee0c7828",
"assets/packages/country_pickers/assets/cf.png": "acb28ea1b07b24c3e4984a6698faef24",
"assets/packages/country_pickers/assets/mm.png": "0073e71d8d7d5c7f6ee70c828be1b7c8",
"assets/packages/country_pickers/assets/li.png": "1abb7f4421487e6f40007c97ccf98c3d",
"assets/packages/country_pickers/assets/na.png": "2431d5e2158f15bbcbad8e57bb78f25d",
"assets/packages/country_pickers/assets/mz.png": "3bce789f6780525f09212b677239f2d5",
"assets/packages/country_pickers/assets/to.png": "1cdd716b5b5502f85d6161dac6ee6c5b",
"assets/packages/country_pickers/assets/vg.png": "420edc09fba1878f87336f8ebcdcee66",
"assets/packages/country_pickers/assets/ve.png": "c177b253feaa781aae0368ae9d55d702",
"assets/packages/country_pickers/assets/tz.png": "f8da3c6c3c64726ba9cb58ccfb373de2",
"assets/packages/country_pickers/assets/tm.png": "9b27cae273a82e046c82a94f380826a6",
"assets/packages/country_pickers/assets/mx.png": "7e557bb1bf47d52b6f3820e647fa5f98",
"assets/packages/country_pickers/assets/nc.png": "b94385d139bf8b82b5b3f20559feece5",
"assets/packages/country_pickers/assets/mo.png": "08f0124b030743d010253d0108ef3b7f",
"assets/packages/country_pickers/assets/lk.png": "b7ab4259e284bb6f4f30cb8ec5e9b1b6",
"assets/packages/country_pickers/assets/cd.png": "f0b60b807ec62ebfc391ff50c79ec30e",
"assets/packages/country_pickers/assets/al.png": "675265e7b86d00e3aa6f25bf64a4dab9",
"assets/packages/country_pickers/assets/bw.png": "d50ac293dc1f0534aedb989c8ded82c0",
"assets/packages/country_pickers/assets/cr.png": "40dc5bc52eb9391bd6d1bf895b107a65",
"assets/packages/country_pickers/assets/bv.png": "ae5d87669104732f61cca68d6bd10cbf",
"assets/packages/country_pickers/assets/am.png": "55d71092c291a382a8fb4e0dae4b76a0",
"assets/packages/country_pickers/assets/az.png": "98833fec449ef8d633ef934e63080891",
"assets/packages/country_pickers/assets/ba.png": "4b5ad282e533a2e75d8b6ce8cff43db0",
"assets/packages/country_pickers/assets/mn.png": "22d7616bc740394c5ae5b384bf2ef225",
"assets/packages/country_pickers/assets/nu.png": "146c66c2ede3bd38ec680f76ef6525a0",
"assets/packages/country_pickers/assets/my.png": "e7fc1cb576089cfed2e7fa8071af4cd8",
"assets/packages/country_pickers/assets/tl.png": "5519f1e7173e1f345d1580bab1b34d51",
"assets/packages/country_pickers/assets/ws.png": "d8e4ad3af401330e3f11db4be39dbf32",
"assets/packages/country_pickers/assets/th.png": "aa978ab62657076b0fa36ef0514d4dcf",
"assets/packages/country_pickers/assets/xk.png": "6781f6c7e81d5617769900576c85917e",
"assets/packages/country_pickers/assets/nf.png": "4a9944f819ff0fc923f619184ae3c6df",
"assets/packages/country_pickers/assets/ly.png": "c6d7280c521faa563e07b1f8bec1d9b7",
"assets/packages/country_pickers/assets/ai.png": "7112379111bbf96dae31e0b13a62b926",
"assets/packages/country_pickers/assets/br.png": "4d47e5b273c0043e76bfd6ac76c3e035",
"assets/packages/country_pickers/assets/cv.png": "a5193806962944dad9ee6c9c91f5cf10",
"assets/packages/country_pickers/assets/be.png": "6c7022eda06794dc916358268cb08d50",
"assets/packages/country_pickers/assets/ca.png": "e20a51380b2da69353e3755edead340d",
"assets/packages/country_pickers/assets/bd.png": "0ca802e7f67045161047607b20c6490e",
"assets/packages/country_pickers/assets/cw.png": "7132ff340c5f3fef7f163b60f2c841e2",
"assets/packages/country_pickers/assets/bs.png": "0b6796dfa9a54bf9c6473a005cc7f687",
"assets/packages/country_pickers/assets/ng.png": "eeb857562b3dfcd105aef9ec371a916f",
"assets/packages/country_pickers/assets/mk.png": "b84591fe5860ed7accf9ff7e7307f099",
"assets/packages/country_pickers/assets/np.png": "99ba0ec8de01de3bc62146b2ffd1f96e",
"assets/packages/country_pickers/assets/va.png": "e84a6f9dc08930a11d1e4b9d25b6234f",
"assets/packages/country_pickers/assets/uz.png": "475189379e4a67b29e9ab9a1d71f3cdd",
"assets/packages/country_pickers/assets/um.png": "b2b35d5b34ba0d66fda92e2003cd6b10",
"assets/packages/country_pickers/assets/tk.png": "fcbceb6da21d71232ad719d05b6bb71b",
"assets/packages/country_pickers/assets/vc.png": "e6cead4282ee9e362c624b46752aa3d5",
"assets/packages/country_pickers/assets/zw.png": "6245bb368a8a37c49f2e87331424c1fa",
"assets/packages/country_pickers/assets/nr.png": "c96262cfab530f60649c118ad21ab65f",
"assets/packages/country_pickers/assets/ne.png": "89c2cbd76d15ae5c43f814b5ef5010dd",
"assets/packages/country_pickers/assets/cu.png": "82ec98ab8b9832e6a182367a5dd16f93",
"assets/packages/country_pickers/assets/bq.png": "3649c177693bfee9c2fcc63c191a51f1",
"assets/packages/country_pickers/assets/bf.png": "5746b4e7bb2c86e7a2dc5077226b9952",
"assets/packages/country_pickers/assets/bg.png": "6b473783a5c5b427e668a2048022663e",
"assets/packages/country_pickers/assets/cc.png": "5d1c266d4620dc7203023882a7b647e5",
"assets/packages/country_pickers/assets/gb-wls.png": "74e73d030683c21d2183d92025d11be9",
"assets/packages/country_pickers/assets/mh.png": "575772c6fb22f9d6e470c627cacb737e",
"assets/packages/country_pickers/assets/za.png": "6c93cf2398f55956549f241ef9f32e15",
"assets/packages/country_pickers/assets/uy.png": "2579723aba2ee05a8d68c9084eaf5588",
"assets/packages/country_pickers/assets/wf.png": "6214b3091dbe62c7a6c9991ee6466859",
"assets/packages/country_pickers/assets/vu.png": "47ba92e2fe9961be0991dc76520dade9",
"assets/packages/country_pickers/assets/tj.png": "a9e427318b756c0c03bec3f3ff976fa3",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/assets/images/order/icon_search.png": "5ee82fb17b9bb2bcef3d27d387903c85",
"assets/assets/images/order/icon_phone.png": "08bfbacd78ede9b6c223c23531e901b2",
"assets/assets/images/order/ic_check.png": "43d861315969a5ef289b710ee3cd181d",
"assets/assets/images/order/icon_avatar.png": "56e957f63624d11da0daece33f5138a7",
"assets/assets/images/order/icon_address.png": "ba0ba3098ce4bdd70b9284acc7a55f03",
"assets/assets/images/home/icon_statistics.png": "f4383be759de80d02b4ec9502698bc2f",
"assets/assets/images/home/icon_shop.png": "7fd29b808df8a639d1a65026075d65ba",
"assets/assets/images/home/icon_order.png": "7c73bf5a8c6227f13f5a1abb70779177",
"assets/assets/images/ic_arrow_right.png": "4c4083af1f6f6094e692617e90cacd0d",
"assets/assets/images/shop/xztm.png": "13c6d2fc2bfde448f4d6fa08df4bb5dc",
"assets/assets/images/shop/zybq.png": "07288cd0dfc08423ebb1766a161bb824",
"assets/assets/images/shop/wxzyf.png": "1eb08c294cfebf8fe0290037854af9c3",
"assets/assets/images/shop/zhls.png": "926734ccf70def19c867a57389aa8412",
"assets/assets/images/shop/xz.png": "d72af6672c77d3997a89e7e078be6f1e",
"assets/assets/images/shop/txzh.png": "0e85fa3432721f2b10c59dc76c90954b",
"assets/assets/images/shop/xzyf.png": "71a4be5f046c02706c296a568fd6e9dc",
"assets/assets/images/shop/tx.png": "59a859c6fb56e703f04935088feb2f4f",
"assets/assets/images/shop/dpgl.png": "f28e37663ff940fabc4d24b22c24537e",
"assets/assets/images/shop/zjgl.png": "76159d540a4611bf3095f0d34bc3b244",
"assets/assets/images/shop/dpsz.png": "ab5b891878d9bc31240c17de222dfa95",
"assets/assets/images/shop/message.png": "b00a57a08273ce341788a1086b460934",
"assets/assets/images/shop/setting.png": "e1a96fff95e7a9d262a03cb15a76fc44",
"assets/assets/images/shop/tj.png": "d18e7966a27795a6d613fa2020bebe9d",
"assets/assets/images/ic_back_black.png": "1effe43c51129c0cb4d81d6dae6bec43",
"assets/assets/images/state/zwsp.png": "ec8675baa5ebdc992148c6d22b2a2c7e",
"assets/assets/images/state/zwwl.png": "5d36bf6253e965e54168c620a1476b50",
"assets/assets/images/state/zwxx.png": "97f8fa3f8a415ca82cecc37b8933ce4b",
"assets/assets/images/state/zwdd.png": "37a7d5968b84eddd9994a8969c16f020",
"assets/assets/images/app_start_3.png": "4ff7dcba3f86a3e8442d003b7885be66",
"assets/assets/images/app_start_2.png": "9485b8f5a58c66cdabcbfe99b7251a7c",
"assets/assets/images/update_head.jpg": "670e412faeda9a6481cdf95a1a3e3ea7",
"assets/assets/images/app_start_1.png": "248485dc2201f7e17ee73f85db61c0dc",
"assets/assets/images/goods/scanning.png": "fffc867509854ac7f7839a11d9c44abb",
"assets/assets/images/statistic/sptj.png": "418ef6095bb8c53db2ebdbad197f1518",
"assets/assets/images/statistic/thirdplace.png": "9e499402cf4c5f06dd2e0f118194caef",
"assets/assets/images/statistic/xdd.png": "a6e3f1509bfe17977724f49a9bca7d0b",
"assets/assets/images/statistic/jyetj.png": "d5dabdce75687fe50757cd61d24b404a",
"assets/assets/images/statistic/runnerup.png": "b9f5caa8f5c866be9efe53a80adf3e79",
"assets/assets/images/statistic/up.png": "ee8d4b5233673da37a8bb9b90be99ddc",
"assets/assets/images/statistic/statistic_bg1.png": "afeaaefb46d0422f81d7d1942491ff5d",
"assets/assets/images/statistic/down.png": "15a03a54893ff18b14f7fd42def41a66",
"assets/assets/images/statistic/chart_fg.png": "37f3a099057550e725fee53a44a54adf",
"assets/assets/images/statistic/dps.png": "a46706228921522a14acd759a61f32f2",
"assets/assets/images/statistic/statistic_bg.png": "cb93568d87bc93638267445d347f80b6",
"assets/assets/images/statistic/sjzs.png": "8f3749bc702da7dfaa26a6301ccf4eca",
"assets/assets/images/statistic/icon_selected.png": "ac879982327893af154047678ab0d903",
"assets/assets/images/statistic/jrjye.png": "52a95ba4c3932d6525dada27bbf23f69",
"assets/assets/images/statistic/champion.png": "f3c19eed099a1a19520d20796333b506",
"assets/assets/images/account/txxz.png": "360b93dcc93ce0a481080a5fa744ec30",
"assets/assets/images/account/rmb.png": "0366dc9401c86f54cb534d75f4da87dc",
"assets/assets/images/account/sqcg.png": "f86118a462472bc8fc7a447dd6f1f4e7",
"assets/assets/images/account/txwxz.png": "298a50abc95f8ff3308c0450395c1905",
"assets/assets/images/account/selected.png": "c6745c841d23c38bf93649225c9fa99d",
"assets/assets/images/account/del.png": "8b59f8728620f6027629ac9d2c05a1cd",
"assets/assets/images/account/yhk.png": "db3f10387894edb1d696e2b6c929e8b3",
"assets/assets/images/account/sm.png": "ae57139304afdb606e2284c928290962",
"assets/assets/images/account/xingye.png": "d7f0eda1fe671612d175611ff72e2c98",
"assets/assets/images/account/wechat.png": "1ff267fcb38e680ce4603a20ed1db300",
"assets/assets/images/account/sqsb.png": "a32631a509d9ae736d66c37a0249bc3d",
"assets/assets/images/account/bg.png": "c2f0020e08cf8e8c6e78228861079e0f",
"assets/assets/images/login/qyg_shop_icon_display.png": "56cff51e28d7e10f12f605aa281986d4",
"assets/assets/images/login/qyg_shop_icon_hide.png": "bc8a2bf2f7790ee16cae9a839896bafd",
"assets/assets/images/login/qyg_shop_icon_delete.png": "90f2e8c7f5296a7b696411fbf4c04503",
"assets/assets/data/bank.json": "b6de98140f9889da70760eeefc5d476d",
"assets/assets/data/bank_2.json": "b3b8c25f5c70c6527ea853db12d59e8a",
"assets/assets/data/sort_0.json": "84991cd78d13adca922e531bc85ac697",
"assets/assets/data/city.json": "e8f7263ff0b6e335b61b2287c77d7067",
"assets/assets/data/sort_1.json": "522adb0dfc666c103dd966266859c3fa",
"assets/assets/data/sort_2.json": "762a4a595de0c8e82c266fc703961108"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      // Provide a no-cache param to ensure the latest version is downloaded.
      return cache.addAll(CORE.map((value) => new Request(value, {'cache': 'no-cache'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');

      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }

      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#')) {
    key = '/';
  }
  // If the URL is not the the RESOURCE list, skip the cache.
  if (!RESOURCES[key]) {
    return event.respondWith(fetch(event.request));
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache. Ensure the resources are not cached
        // by the browser for longer than the service worker expects.
        var modifiedRequest = new Request(event.request, {'cache': 'no-cache'});
        return response || fetch(modifiedRequest).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data == 'skipWaiting') {
    return self.skipWaiting();
  }

  if (event.message = 'downloadOffline') {
    downloadOffline();
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey in Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
