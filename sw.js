if(!self.define){let e,s={};const n=(n,r)=>(n=new URL(n+".js",r).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(r,i)=>{const l=e||("document"in self?document.currentScript.src:"")||location.href;if(s[l])return;let a={};const t=e=>n(e,l),c={module:{uri:l},exports:a,require:t};s[l]=Promise.all(r.map((e=>c[e]||t(e)))).then((e=>(i(...e),a)))}}define(["./workbox-4c5a43f1"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"404.html",revision:"50fa40b50feb42b2863e4af48e6133b5"},{url:"about/index.html",revision:"c8bdd6ef9f15640ad724bcd9ee1b8b57"},{url:"archive/code-smells/primitive-obsession/index.html",revision:"9f841b4f107fde3fb6f77c59d16f36b2"},{url:"archive/concepts-definitions/abstraction/index.html",revision:"6449249ad2126761b97ad468afdeadbc"},{url:"archive/concepts-definitions/domain-model/index.html",revision:"aa69fcdc3cab68deb65c5ede95918e58"},{url:"archive/concepts-definitions/encapsulation/index.html",revision:"91eed51787b0f3259a1ff9dbf04220e4"},{url:"archive/concepts-definitions/index.html",revision:"ceeeef4398c26f33b325dd737364ff84"},{url:"archive/index.html",revision:"153cf5184880f70a092a3d0c1c492908"},{url:"archive/patterns/criteria/index.html",revision:"4062950c1c285c3c7f808d6eaf342de4"},{url:"archive/patterns/visitor/index.html",revision:"94e603259f7dffc6d2780e462067f589"},{url:"archive/refactoring/index.html",revision:"25499d8c35f7ec114551dbd5010df9f2"},{url:"assets/about_index.md.eadfa96d.js",revision:null},{url:"assets/about_index.md.eadfa96d.lean.js",revision:null},{url:"assets/abstractRecursiveSet.b7b24fbd.png",revision:null},{url:"assets/activityKlondike.2f0d0357.png",revision:null},{url:"assets/app.1377345a.js",revision:null},{url:"assets/archive_code-smells_primitive-obsession_index.md.53d638bc.js",revision:null},{url:"assets/archive_code-smells_primitive-obsession_index.md.53d638bc.lean.js",revision:null},{url:"assets/archive_concepts-definitions_abstraction_index.md.2a87c620.js",revision:null},{url:"assets/archive_concepts-definitions_abstraction_index.md.2a87c620.lean.js",revision:null},{url:"assets/archive_concepts-definitions_domain-model_index.md.499682dc.js",revision:null},{url:"assets/archive_concepts-definitions_domain-model_index.md.499682dc.lean.js",revision:null},{url:"assets/archive_concepts-definitions_encapsulation_index.md.19901c52.js",revision:null},{url:"assets/archive_concepts-definitions_encapsulation_index.md.19901c52.lean.js",revision:null},{url:"assets/archive_concepts-definitions_index.md.072e7580.js",revision:null},{url:"assets/archive_concepts-definitions_index.md.072e7580.lean.js",revision:null},{url:"assets/archive_index.md.fafbb2d8.js",revision:null},{url:"assets/archive_index.md.fafbb2d8.lean.js",revision:null},{url:"assets/archive_patterns_criteria_index.md.976a2d8a.js",revision:null},{url:"assets/archive_patterns_criteria_index.md.976a2d8a.lean.js",revision:null},{url:"assets/archive_patterns_visitor_index.md.dfd24035.js",revision:null},{url:"assets/archive_patterns_visitor_index.md.dfd24035.lean.js",revision:null},{url:"assets/archive_refactoring_index.md.1ccdf4ca.js",revision:null},{url:"assets/archive_refactoring_index.md.1ccdf4ca.lean.js",revision:null},{url:"assets/circulo.4529406e.png",revision:null},{url:"assets/classesKlondike.6b63ed26.png",revision:null},{url:"assets/collaborationUniversidad.71523299.png",revision:null},{url:"assets/dikw-pyramid.e627fe34.png",revision:null},{url:"assets/familyTree.5e9909c6.png",revision:null},{url:"assets/graph.b446170d.png",revision:null},{url:"assets/hierarchy.3636160c.png",revision:null},{url:"assets/hierarchyWindow.56e43bdd.png",revision:null},{url:"assets/index.md.8215e209.js",revision:null},{url:"assets/index.md.8215e209.lean.js",revision:null},{url:"assets/inter-cyrillic-ext.0877b0d9.woff2",revision:null},{url:"assets/inter-cyrillic.f8750142.woff2",revision:null},{url:"assets/inter-greek-ext.3e6f6728.woff2",revision:null},{url:"assets/inter-greek.117e1956.woff2",revision:null},{url:"assets/inter-italic-cyrillic-ext.33bd5a8e.woff2",revision:null},{url:"assets/inter-italic-cyrillic.ea42a392.woff2",revision:null},{url:"assets/inter-italic-greek-ext.4fbe9427.woff2",revision:null},{url:"assets/inter-italic-greek.8f4463c4.woff2",revision:null},{url:"assets/inter-italic-latin-ext.bd8920cc.woff2",revision:null},{url:"assets/inter-italic-latin.bd3b6f56.woff2",revision:null},{url:"assets/inter-italic-vietnamese.6ce511fb.woff2",revision:null},{url:"assets/inter-latin-ext.7cc429bc.woff2",revision:null},{url:"assets/inter-latin.4fe6132f.woff2",revision:null},{url:"assets/inter-roman-cyrillic-ext.e75737ce.woff2",revision:null},{url:"assets/inter-roman-cyrillic.5f2c6c8c.woff2",revision:null},{url:"assets/inter-roman-greek-ext.ab0619bc.woff2",revision:null},{url:"assets/inter-roman-greek.d5a6d92a.woff2",revision:null},{url:"assets/inter-roman-latin-ext.0030eebd.woff2",revision:null},{url:"assets/inter-roman-latin.2ed14f66.woff2",revision:null},{url:"assets/inter-roman-vietnamese.14ce25a6.woff2",revision:null},{url:"assets/inter-vietnamese.2c644a25.woff2",revision:null},{url:"assets/learn_agile_index.md.07824965.js",revision:null},{url:"assets/learn_agile_index.md.07824965.lean.js",revision:null},{url:"assets/learn_index.md.c544cef3.js",revision:null},{url:"assets/learn_index.md.c544cef3.lean.js",revision:null},{url:"assets/learn_ood_index.md.a320a9a4.js",revision:null},{url:"assets/learn_ood_index.md.a320a9a4.lean.js",revision:null},{url:"assets/learn_oop_index.md.6f1a4b33.js",revision:null},{url:"assets/learn_oop_index.md.6f1a4b33.lean.js",revision:null},{url:"assets/learn_patterns_index.md.9825fe52.js",revision:null},{url:"assets/learn_patterns_index.md.9825fe52.lean.js",revision:null},{url:"assets/learn_recurrence_complexity_index.md.e19c680c.js",revision:null},{url:"assets/learn_recurrence_complexity_index.md.e19c680c.lean.js",revision:null},{url:"assets/learn_recurrence_index.md.5e9978a2.js",revision:null},{url:"assets/learn_recurrence_index.md.5e9978a2.lean.js",revision:null},{url:"assets/learn_recurrence_knowledge_index.md.af85a4af.js",revision:null},{url:"assets/learn_recurrence_knowledge_index.md.af85a4af.lean.js",revision:null},{url:"assets/learn_recurrence_patterns_index.md.17f2682a.js",revision:null},{url:"assets/learn_recurrence_patterns_index.md.17f2682a.lean.js",revision:null},{url:"assets/learn_recurrence_patterns_prettier-ignore_AlternantCode.md.0ccecee8.js",revision:null},{url:"assets/learn_recurrence_patterns_prettier-ignore_AlternantCode.md.0ccecee8.lean.js",revision:null},{url:"assets/learn_recurrence_patterns_prettier-ignore_IterativeCode.md.8f8d9445.js",revision:null},{url:"assets/learn_recurrence_patterns_prettier-ignore_IterativeCode.md.8f8d9445.lean.js",revision:null},{url:"assets/learn_recurrence_patterns_prettier-ignore_SequenceCode.md.42fc2d72.js",revision:null},{url:"assets/learn_recurrence_patterns_prettier-ignore_SequenceCode.md.42fc2d72.lean.js",revision:null},{url:"assets/learn_recurrence_software_index.md.1a1fa601.js",revision:null},{url:"assets/learn_recurrence_software_index.md.1a1fa601.lean.js",revision:null},{url:"assets/learn_recurrence_software-disciplines_index.md.44319bd0.js",revision:null},{url:"assets/learn_recurrence_software-disciplines_index.md.44319bd0.lean.js",revision:null},{url:"assets/learn_recurrence_software-evolution_index.md.3a57f5d5.js",revision:null},{url:"assets/learn_recurrence_software-evolution_index.md.3a57f5d5.lean.js",revision:null},{url:"assets/learn_software-architecture_index.md.24f22e69.js",revision:null},{url:"assets/learn_software-architecture_index.md.24f22e69.lean.js",revision:null},{url:"assets/learn_unified-process_index.md.a2866df0.js",revision:null},{url:"assets/learn_unified-process_index.md.a2866df0.lean.js",revision:null},{url:"assets/objectsKlondike.59dad021.png",revision:null},{url:"assets/recursiveSet.02034807.png",revision:null},{url:"assets/sequence.0d7ceb36.png",revision:null},{url:"assets/sequenceKlondike.baecfde2.png",revision:null},{url:"assets/set.fb2e8bab.png",revision:null},{url:"assets/setClass.a8901f5e.png",revision:null},{url:"assets/statesKlondike.4c2d911d.png",revision:null},{url:"assets/style.3302fc11.css",revision:null},{url:"assets/welcome.md.767fb8e8.js",revision:null},{url:"assets/welcome.md.767fb8e8.lean.js",revision:null},{url:"assets/woman.37175c11.png",revision:null},{url:"assets/xp.25414e8e.png",revision:null},{url:"assets/you.e99b394f.png",revision:null},{url:"index.html",revision:"e095334f74d7161188fc0c70c769abc8"},{url:"learn/agile/index.html",revision:"031e43fa0a05a133b6ff8871d32804e2"},{url:"learn/index.html",revision:"77077ad202e9836ed01e7f07c9e90983"},{url:"learn/ood/index.html",revision:"2d2c57547292edbdd273714865039749"},{url:"learn/oop/index.html",revision:"145f32549e579c63d16ed8552563a92c"},{url:"learn/patterns/index.html",revision:"720bd70e9220bd70cc9cebfb391cebc8"},{url:"learn/recurrence/complexity/index.html",revision:"c8ee4df53f1386484b20252cb3a54772"},{url:"learn/recurrence/index.html",revision:"90a909bd4cca06b3871ebba832e2fb6f"},{url:"learn/recurrence/knowledge/index.html",revision:"c2b89b150797f523129594b5243d6b0f"},{url:"learn/recurrence/patterns/index.html",revision:"77b3ef36ed17b2d9eae3731fb3c0ba19"},{url:"learn/recurrence/patterns/prettier-ignore/AlternantCode.html",revision:"38c718f503a189e9d56880b7d9a37957"},{url:"learn/recurrence/patterns/prettier-ignore/IterativeCode.html",revision:"96f9997996200b9aed86f8b4bdc180f5"},{url:"learn/recurrence/patterns/prettier-ignore/SequenceCode.html",revision:"40fa12f72732a149ac50bc5bf9d16e14"},{url:"learn/recurrence/software-disciplines/index.html",revision:"ec73f510990f101ddb03e7eda662744c"},{url:"learn/recurrence/software-evolution/index.html",revision:"54ae8ce9c21361e5eb7d5bc3404b4c2d"},{url:"learn/recurrence/software/index.html",revision:"8fa50044ad3c8116729857e95ed43590"},{url:"learn/software-architecture/index.html",revision:"6e85e9f50d0122268b54000a46836030"},{url:"learn/unified-process/index.html",revision:"1631dba14251ce62f068724b7173b6fe"},{url:"recurrence/patterns/universo.svg",revision:"8e10d3486e80d0485ca4f88d7d2c052a"},{url:"registerSW.js",revision:"bab97b5b4ce65dd2bfe514326370a9fc"},{url:"welcome.html",revision:"2bdcb91d552e392141ffd5967d1e8850"},{url:"manifest.webmanifest",revision:"115c2a1d4aeb2c487188e0ca1108fcc2"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"))),e.registerRoute(/^https:\/\/fonts\.googleapis\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-cache",plugins:[new e.ExpirationPlugin({maxEntries:10,maxAgeSeconds:31536e3}),new e.CacheableResponsePlugin({statuses:[0,200]})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.gstatic\.com\/.*/i,new e.CacheFirst({cacheName:"gstatic-fonts-cache",plugins:[new e.ExpirationPlugin({maxEntries:10,maxAgeSeconds:31536e3}),new e.CacheableResponsePlugin({statuses:[0,200]})]}),"GET"),e.registerRoute(/^https:\/\/cdn\.jsdelivr\.net\/.*/i,new e.NetworkFirst({cacheName:"jsdelivr-images-cache",plugins:[new e.ExpirationPlugin({maxEntries:10,maxAgeSeconds:604800}),new e.CacheableResponsePlugin({statuses:[0,200]})]}),"GET")}));