function a0_0x4bf4(_0x5418d2,_0x49772b){const _0x531927=a0_0x5319();return a0_0x4bf4=function(_0x4bf448,_0x2c41c0){_0x4bf448=_0x4bf448-0x13e;let _0x5232a2=_0x531927[_0x4bf448];return _0x5232a2;},a0_0x4bf4(_0x5418d2,_0x49772b);}const a0_0x4a3e4e=a0_0x4bf4;(function(_0x19af9f,_0x2c26b9){const _0x2f4ade=a0_0x4bf4,_0x3eb840=_0x19af9f();while(!![]){try{const _0x45f79d=-parseInt(_0x2f4ade(0x1a2))/0x1+-parseInt(_0x2f4ade(0x164))/0x2*(parseInt(_0x2f4ade(0x158))/0x3)+parseInt(_0x2f4ade(0x16b))/0x4+-parseInt(_0x2f4ade(0x179))/0x5*(parseInt(_0x2f4ade(0x1d0))/0x6)+-parseInt(_0x2f4ade(0x199))/0x7+-parseInt(_0x2f4ade(0x1d3))/0x8+parseInt(_0x2f4ade(0x185))/0x9*(parseInt(_0x2f4ade(0x1a6))/0xa);if(_0x45f79d===_0x2c26b9)break;else _0x3eb840['push'](_0x3eb840['shift']());}catch(_0x428e57){_0x3eb840['push'](_0x3eb840['shift']());}}}(a0_0x5319,0xbc74e));import{resolveDNS,isDomain}from'../helpers/helpers';import{getConfigAddresses,extractWireguardParams,base64ToDecimal,generateRemark,randomUpperCase,getRandomPath}from'./helpers';import{getDataset}from'../kv/handlers';async function buildXrayDNS(_0x336ce2,_0x39d5b5,_0x42968b,_0x2871db,_0x31ec3c){const _0x1521ea=a0_0x4bf4,{remoteDNS:_0x22a125,resolvedRemoteDNS:_0x4bc250,localDNS:_0x3442f5,vlessTrojanFakeDNS:_0x3149c3,enableIPv6:_0x3f2f83,warpFakeDNS:_0x17f15f,warpEnableIPv6:_0x2e388f,blockAds:_0x50d67f,bypassIran:_0x3750f0,bypassChina:_0x8be086,blockPorn:_0x54b25b,bypassRussia:_0x510dd1,customBypassRules:_0x2b600b,customBlockRules:_0x38e0ee}=_0x336ce2,_0x1188a7=[{'rule':_0x3750f0,'domain':'geosite:category-ir','ip':_0x1521ea(0x1bf)},{'rule':_0x8be086,'domain':_0x1521ea(0x167),'ip':_0x1521ea(0x16d)},{'rule':_0x510dd1,'domain':_0x1521ea(0x161),'ip':_0x1521ea(0x150)}],_0x2a291b=[{'rule':_0x50d67f,'host':_0x1521ea(0x1e3)},{'rule':_0x50d67f,'host':'geosite:category-ads-ir'},{'rule':_0x54b25b,'host':_0x1521ea(0x17a)}],_0x1cfec7=_0x3149c3&&!_0x31ec3c||_0x17f15f&&_0x31ec3c,_0x265540=_0x3f2f83&&!_0x31ec3c||_0x2e388f&&_0x31ec3c,_0x31cabd=_0x39d5b5[_0x1521ea(0x1aa)](_0x5b912f=>isDomain(_0x5b912f)),_0x1b112e=_0x2b600b[_0x1521ea(0x1bd)](',')[_0x1521ea(0x1aa)](_0x5820aa=>isDomain(_0x5820aa)),_0x22e3b7=_0x38e0ee[_0x1521ea(0x1bd)](',')['filter'](_0x118932=>isDomain(_0x118932)),_0x51b743=[...new Set(_0x31cabd)],_0x4f5801=[..._0x51b743,..._0x1b112e][_0x1521ea(0x1da)]>0x0,_0x39035f=_0x3750f0||_0x8be086||_0x510dd1,_0x2df440=_0x50d67f||_0x54b25b||_0x22e3b7[_0x1521ea(0x1da)]>0x0,_0x483d2d=_0x2871db?[_0x1521ea(0x1c6)]:_0x31ec3c?_0x2e388f?[_0x1521ea(0x152),_0x1521ea(0x18e),_0x1521ea(0x1a0),_0x1521ea(0x1d6)]:[_0x1521ea(0x152),_0x1521ea(0x18e)]:[_0x22a125],_0x1b51c4={};_0x2df440&&(_0x2a291b[_0x1521ea(0x196)](({rule:_0x17159c,host:_0x236200})=>{if(_0x17159c)_0x1b51c4[_0x236200]=['127.0.0.1'];}),_0x22e3b7[_0x1521ea(0x196)](_0x181a3f=>{_0x1b51c4['domain:'+_0x181a3f]=['127.0.0.1'];}));const _0x3b0343=_0x42968b?await resolveDNS(_0x42968b):undefined;if(_0x3b0343)_0x1b51c4[_0x42968b]=_0x3f2f83?[..._0x3b0343[_0x1521ea(0x193)],..._0x3b0343['ipv6']]:_0x3b0343['ipv4'];if(_0x4bc250['server']&&!_0x2871db&&!_0x31ec3c)_0x1b51c4[_0x4bc250['server']]=_0x4bc250[_0x1521ea(0x1cb)];if(_0x2871db){const _0x33e052=['cloudflare-dns.com',_0x1521ea(0x1ba),_0x1521ea(0x151)],_0x366f8f=await Promise[_0x1521ea(0x14c)](_0x33e052['map'](resolveDNS)),_0xb0d698=_0x366f8f['flatMap'](_0x165a6b=>_0x165a6b[_0x1521ea(0x193)]),_0xe5ef71=_0x3f2f83?_0x366f8f['flatMap'](_0x18c7ed=>_0x18c7ed['ipv6']):[];_0x1b51c4[_0x1521ea(0x1a1)]=[..._0xb0d698,..._0xe5ef71];}const _0x587e3d=Object[_0x1521ea(0x184)](_0x1b51c4)['length']?{'hosts':_0x1b51c4}:{},_0x320bac={..._0x587e3d,'servers':_0x483d2d,'queryStrategy':_0x265540?_0x1521ea(0x16c):'UseIPv4','tag':_0x1521ea(0x1cf)};if(_0x4f5801){const _0x2823a1=_0x51b743[_0x1521ea(0x1d4)](_0x42e381=>_0x1521ea(0x159)+_0x42e381),_0x5d56ff=_0x1b112e['map'](_0x2357b0=>_0x1521ea(0x155)+_0x2357b0);_0x320bac[_0x1521ea(0x19b)][_0x1521ea(0x186)]({'address':_0x3442f5,'domains':[..._0x2823a1,..._0x5d56ff],'skipFallback':!![]});}const _0x1cfb09={'address':_0x3442f5,'domains':[],'expectIPs':[],'skipFallback':!![]};!_0x2871db&&_0x39035f&&(_0x1188a7[_0x1521ea(0x196)](({rule:_0x2ac485,domain:_0x23905b,ip:_0x361c9f})=>{const _0x25b2b5=_0x1521ea;_0x2ac485&&(_0x1cfb09[_0x25b2b5(0x15e)][_0x25b2b5(0x186)](_0x23905b),_0x1cfb09['expectIPs'][_0x25b2b5(0x186)](_0x361c9f));}),_0x320bac[_0x1521ea(0x19b)][_0x1521ea(0x186)](_0x1cfb09));if(_0x1cfec7){const _0x4071b9=_0x39035f&&!_0x2871db?{'address':'fakedns','domains':_0x1cfb09[_0x1521ea(0x15e)]}:_0x1521ea(0x157);_0x320bac[_0x1521ea(0x19b)][_0x1521ea(0x166)](_0x4071b9);}return _0x320bac;}function buildXrayRoutingRules(_0x180959,_0x4c4655,_0x1bfd48,_0x4a7b3f,_0x42a11b,_0x3f9460){const _0x41427e=a0_0x4bf4,{remoteDNS:_0x2ee693,localDNS:_0x3c9dec,bypassLAN:_0x323897,bypassIran:_0x506450,bypassChina:_0x1e8b14,bypassRussia:_0x38d166,blockAds:_0x39dad7,blockPorn:_0x14720e,blockUDP443:_0x3c7feb,customBypassRules:_0xa6459d,customBlockRules:_0x5d93c1}=_0x180959,_0x52ebd9=[{'rule':_0x323897,'type':'direct','domain':_0x41427e(0x1c1),'ip':_0x41427e(0x182)},{'rule':_0x506450,'type':'direct','domain':'geosite:category-ir','ip':_0x41427e(0x1bf)},{'rule':_0x1e8b14,'type':_0x41427e(0x170),'domain':_0x41427e(0x167),'ip':_0x41427e(0x16d)},{'rule':_0x39dad7,'type':'block','domain':_0x41427e(0x1e3)},{'rule':_0x39dad7,'type':_0x41427e(0x1ce),'domain':'geosite:category-ads-ir'},{'rule':_0x14720e,'type':_0x41427e(0x1ce),'domain':'geosite:category-porn'}],_0x12d0c0=_0x4c4655[_0x41427e(0x1aa)](_0x52714d=>isDomain(_0x52714d)),_0x5d6354=_0xa6459d?_0xa6459d[_0x41427e(0x1bd)](','):[],_0x515f18=_0x5d93c1?_0x5d93c1[_0x41427e(0x1bd)](','):[],_0x59b60a=_0x5d6354[_0x41427e(0x1aa)](_0x4db509=>isDomain(_0x4db509)),_0x4ce728=[..._0x12d0c0,..._0x59b60a][_0x41427e(0x1da)]>0x0,_0x5df8ab=_0x39dad7||_0x14720e||_0x515f18['length']>0x0,_0x4b46d9=_0x506450||_0x1e8b14||_0x38d166||_0x5d6354[_0x41427e(0x1da)]>0x0,_0x1f0e56=[{'inboundTag':['dns-in'],'outboundTag':_0x41427e(0x15b),'type':'field'},{'inboundTag':[_0x41427e(0x142),'http-in'],'port':'53','outboundTag':'dns-out','type':_0x41427e(0x146)}];if(!_0x42a11b&&(_0x4ce728||_0x4b46d9))_0x1f0e56[_0x41427e(0x186)]({'ip':[_0x3c9dec],'port':'53','network':_0x41427e(0x1a9),'outboundTag':_0x41427e(0x170),'type':_0x41427e(0x146)});if(_0x4b46d9||_0x5df8ab){const _0x45dbfc=(_0xd89353,_0x3af6c6)=>({[_0xd89353]:[],'outboundTag':_0x3af6c6,'type':_0x41427e(0x146)});let _0x8d327e,_0x4ade8c;!_0x42a11b&&(_0x8d327e=_0x45dbfc(_0x41427e(0x1ca),_0x41427e(0x170)),_0x4ade8c=_0x45dbfc('ip',_0x41427e(0x170)));let _0x24e57d=_0x45dbfc('domain','block'),_0x286d7e=_0x45dbfc('ip',_0x41427e(0x1ce));_0x52ebd9['forEach'](({rule:_0x3526fc,type:_0x547849,domain:_0x791a82,ip:_0x5f9c93})=>{const _0x62f272=_0x41427e;_0x3526fc&&(_0x547849===_0x62f272(0x170)?(_0x8d327e?.[_0x62f272(0x1ca)][_0x62f272(0x186)](_0x791a82),_0x4ade8c?.['ip']?.['push'](_0x5f9c93)):_0x24e57d[_0x62f272(0x1ca)]['push'](_0x791a82));}),_0x5d6354['forEach'](_0x490069=>{const _0x4aa0d0=_0x41427e;isDomain(_0x490069)?_0x8d327e?.[_0x4aa0d0(0x1ca)]['push']('domain:'+_0x490069):_0x4ade8c?.['ip']['push'](_0x490069);}),_0x515f18[_0x41427e(0x196)](_0x170d74=>{const _0x59fa26=_0x41427e;isDomain(_0x170d74)?_0x24e57d[_0x59fa26(0x1ca)]['push'](_0x59fa26(0x155)+_0x170d74):_0x286d7e['ip'][_0x59fa26(0x186)](_0x170d74);}),!_0x42a11b&&(_0x8d327e['domain'][_0x41427e(0x1da)]&&_0x1f0e56[_0x41427e(0x186)](_0x8d327e),_0x4ade8c['ip'][_0x41427e(0x1da)]&&_0x1f0e56[_0x41427e(0x186)](_0x4ade8c)),_0x24e57d[_0x41427e(0x1ca)][_0x41427e(0x1da)]&&_0x1f0e56[_0x41427e(0x186)](_0x24e57d),_0x286d7e['ip'][_0x41427e(0x1da)]&&_0x1f0e56[_0x41427e(0x186)](_0x286d7e);}_0x3c7feb&&_0x1f0e56[_0x41427e(0x186)]({'network':_0x41427e(0x1a9),'port':_0x41427e(0x165),'outboundTag':_0x41427e(0x1ce),'type':_0x41427e(0x146)});if(_0x1bfd48){const _0x49a7c2={[_0x4a7b3f?_0x41427e(0x1d8):_0x41427e(0x1e2)]:_0x4a7b3f?_0x41427e(0x17c):_0x41427e(0x1d2),'type':_0x41427e(0x146)};if(!_0x3f9460){const _0x41833a=new URL(_0x2ee693),_0x3ad2f6=_0x41833a[_0x41427e(0x19e)];_0x1f0e56[_0x41427e(0x186)]({[isDomain(_0x3ad2f6)?'domain':'ip']:[_0x3ad2f6],'network':_0x41427e(0x195),..._0x49a7c2});}else _0x1f0e56[_0x41427e(0x186)]({'network':_0x41427e(0x1a9),'port':'53',..._0x49a7c2});}return _0x4a7b3f?_0x1f0e56[_0x41427e(0x186)]({'network':_0x41427e(0x1dd),'balancerTag':_0x41427e(0x14c),'type':_0x41427e(0x146)}):_0x1f0e56[_0x41427e(0x186)]({'network':'tcp,udp','outboundTag':_0x1bfd48?_0x41427e(0x1c4):_0x42a11b?'fragment':_0x41427e(0x1d2),'type':_0x41427e(0x146)}),_0x1f0e56;}function buildXrayVLESSOutbound(_0x3142a0,_0x115e3d,_0x84ae56,_0x3a3e4c,_0x407ac7,_0x5647be,_0x5a82ad,_0x4b31ac,_0x54d654){const _0x529ab0=a0_0x4bf4,_0x54b1be={'protocol':'vless','settings':{'vnext':[{'address':_0x115e3d,'port':+_0x84ae56,'users':[{'id':globalThis[_0x529ab0(0x15a)],'encryption':'none','level':0x8}]}]},'streamSettings':{'network':'ws','security':_0x529ab0(0x190),'sockopt':{},'wsSettings':{'headers':{'Host':_0x3a3e4c,'User-Agent':_0x529ab0(0x1d1)},'path':'/'+getRandomPath(0x10)+(_0x5647be?'/'+btoa(_0x5647be):'')+'?ed=2560'}},'tag':_0x3142a0};globalThis['defaultHttpsPorts'][_0x529ab0(0x160)](_0x84ae56)&&(_0x54b1be[_0x529ab0(0x1b4)][_0x529ab0(0x1c3)]=_0x529ab0(0x180),_0x54b1be[_0x529ab0(0x1b4)][_0x529ab0(0x14f)]={'allowInsecure':_0x4b31ac,'fingerprint':_0x529ab0(0x1be),'alpn':['h2',_0x529ab0(0x1b2)],'serverName':_0x407ac7});const _0x1b8986=_0x54b1be[_0x529ab0(0x1b4)][_0x529ab0(0x1c5)];return _0x5a82ad?_0x1b8986['dialerProxy']='fragment':(_0x1b8986[_0x529ab0(0x1d5)]=0x1e,_0x1b8986[_0x529ab0(0x173)]=!![],_0x1b8986[_0x529ab0(0x1a8)]=_0x54d654?_0x529ab0(0x1cc):_0x529ab0(0x1df)),_0x54b1be;}function buildXrayTrojanOutbound(_0x78b128,_0x3c667b,_0x79cf50,_0x113c09,_0xbec9e0,_0x2a5dd0,_0x205292,_0x1d64e4,_0xffb362){const _0x88d645=a0_0x4bf4,_0x317427={'protocol':'trojan','settings':{'servers':[{'address':_0x3c667b,'port':+_0x79cf50,'password':globalThis[_0x88d645(0x16a)],'level':0x8}]},'streamSettings':{'network':'ws','security':_0x88d645(0x190),'sockopt':{},'wsSettings':{'headers':{'Host':_0x113c09},'path':_0x88d645(0x18a)+getRandomPath(0x10)+(_0x2a5dd0?'/'+btoa(_0x2a5dd0):'')+_0x88d645(0x1a7)}},'tag':_0x78b128};globalThis['defaultHttpsPorts'][_0x88d645(0x160)](_0x79cf50)&&(_0x317427[_0x88d645(0x1b4)][_0x88d645(0x1c3)]=_0x88d645(0x180),_0x317427[_0x88d645(0x1b4)][_0x88d645(0x14f)]={'allowInsecure':_0x1d64e4,'fingerprint':_0x88d645(0x1be),'alpn':['h2',_0x88d645(0x1b2)],'serverName':_0xbec9e0});const _0x3fe007=_0x317427['streamSettings'][_0x88d645(0x1c5)];return _0x205292?_0x3fe007[_0x88d645(0x1b9)]=_0x88d645(0x1a4):(_0x3fe007[_0x88d645(0x1d5)]=0x1e,_0x3fe007[_0x88d645(0x173)]=!![],_0x3fe007[_0x88d645(0x1a8)]=_0xffb362?_0x88d645(0x1cc):_0x88d645(0x1df)),_0x317427;}function buildXrayWarpOutbound(_0x5da23c,_0x2c119f,_0x58da9a,_0x579c92,_0x5b7165){const _0x313b38=a0_0x4bf4,{warpEnableIPv6:_0x41cf3e,nikaNGNoiseMode:_0x2cf48f,noiseCountMin:_0x5bfdad,noiseCountMax:_0x5312bb,noiseSizeMin:_0x1b65c7,noiseSizeMax:_0xc45634,noiseDelayMin:_0x3e91a5,noiseDelayMax:_0x539643}=_0x5da23c,{warpIPv6:_0x4333a6,reserved:_0x4012bc,publicKey:_0x25b114,privateKey:_0x51fef8}=extractWireguardParams(_0x2c119f,_0x579c92),_0x32b7db={'protocol':_0x313b38(0x168),'settings':{'address':[_0x313b38(0x16f),_0x4333a6],'mtu':0x500,'peers':[{'endpoint':_0x58da9a,'publicKey':_0x25b114,'keepAlive':0x5}],'reserved':base64ToDecimal(_0x4012bc),'secretKey':_0x51fef8},'streamSettings':{'sockopt':{'dialerProxy':_0x313b38(0x1d2),'domainStrategy':_0x41cf3e?_0x313b38(0x1cc):_0x313b38(0x1df)}},'tag':_0x579c92?'chain':_0x313b38(0x1d2)};return!_0x579c92&&delete _0x32b7db[_0x313b38(0x1b4)],_0x5b7165==='nikang'&&!_0x579c92&&Object[_0x313b38(0x174)](_0x32b7db[_0x313b38(0x14e)],{'wnoise':_0x2cf48f,'wnoisecount':_0x5bfdad===_0x5312bb?_0x5bfdad:_0x5bfdad+'-'+_0x5312bb,'wpayloadsize':_0x1b65c7===_0xc45634?_0x1b65c7:_0x1b65c7+'-'+_0xc45634,'wnoisedelay':_0x3e91a5===_0x539643?_0x3e91a5:_0x3e91a5+'-'+_0x539643}),_0x32b7db;}function buildXrayChainOutbound(_0x2d7cbc,_0x3676c4){const _0x343226=a0_0x4bf4;if(['socks','http'][_0x343226(0x160)](_0x2d7cbc[_0x343226(0x194)])){const {protocol:_0x36b430,server:_0x4ef492,port:_0x2f5d79,user:_0x489b61,pass:_0x347f4b}=_0x2d7cbc;return{'protocol':_0x36b430,'settings':{'servers':[{'address':_0x4ef492,'port':+_0x2f5d79,'users':[{'user':_0x489b61,'pass':_0x347f4b,'level':0x8}]}]},'streamSettings':{'network':_0x343226(0x195),'sockopt':{'dialerProxy':_0x343226(0x1d2),'domainStrategy':_0x3676c4?'UseIPv4v6':_0x343226(0x1df),'tcpNoDelay':!![]}},'mux':{'enabled':!![],'concurrency':0x8,'xudpConcurrency':0x10,'xudpProxyUDP443':_0x343226(0x1a5)},'tag':'chain'};}const {server:_0x542e62,port:_0x172ef1,uuid:_0x56b904,flow:_0x38f204,security:_0x101682,type:_0x3fbe88,sni:_0x59a3ce,fp:_0x3060c0,alpn:_0x26be65,pbk:_0x5b61fe,sid:_0x258d0a,spx:_0xcf6484,headerType:_0x31ba3b,host:_0x29e3fa,path:_0x33cb54,authority:_0x2ffc55,serviceName:_0x2a47ce,mode:_0x2696a9}=_0x2d7cbc,_0x44b676={'mux':{'concurrency':0x8,'enabled':!![],'xudpConcurrency':0x10,'xudpProxyUDP443':_0x343226(0x1a5)},'protocol':_0x343226(0x191),'settings':{'vnext':[{'address':_0x542e62,'port':+_0x172ef1,'users':[{'encryption':_0x343226(0x190),'flow':_0x38f204,'id':_0x56b904,'level':0x8,'security':_0x343226(0x147)}]}]},'streamSettings':{'network':_0x3fbe88,'security':_0x101682,'sockopt':{'dialerProxy':_0x343226(0x1d2),'domainStrategy':_0x3676c4?'UseIPv4v6':_0x343226(0x1df),'tcpNoDelay':!![]}},'tag':'chain'};if(_0x101682===_0x343226(0x180)){const _0x1f33fd=_0x26be65?_0x26be65?.[_0x343226(0x1bd)](','):[];_0x44b676[_0x343226(0x1b4)][_0x343226(0x14f)]={'allowInsecure':![],'fingerprint':_0x3060c0,'alpn':_0x1f33fd,'serverName':_0x59a3ce};}_0x101682===_0x343226(0x192)&&(delete _0x44b676[_0x343226(0x178)],_0x44b676['streamSettings'][_0x343226(0x175)]={'fingerprint':_0x3060c0,'publicKey':_0x5b61fe,'serverName':_0x59a3ce,'shortId':_0x258d0a,'spiderX':_0xcf6484});if(_0x31ba3b==='http'){const _0x5b4c8f=_0x33cb54?.['split'](','),_0x57acfd=_0x29e3fa?.[_0x343226(0x1bd)](',');_0x44b676[_0x343226(0x1b4)][_0x343226(0x13f)]={'header':{'request':{'headers':{'Host':_0x57acfd},'method':'GET','path':_0x5b4c8f,'version':'1.1'},'response':{'headers':{'Content-Type':[_0x343226(0x183)]},'reason':'OK','status':_0x343226(0x144),'version':'1.1'},'type':'http'}};}if(_0x3fbe88===_0x343226(0x195)&&_0x101682!==_0x343226(0x192)&&!_0x31ba3b)_0x44b676[_0x343226(0x1b4)][_0x343226(0x13f)]={'header':{'type':'none'}};if(_0x3fbe88==='ws')_0x44b676[_0x343226(0x1b4)][_0x343226(0x172)]={'headers':{'Host':_0x29e3fa},'path':_0x33cb54};return _0x3fbe88===_0x343226(0x17d)&&(delete _0x44b676[_0x343226(0x178)],_0x44b676[_0x343226(0x1b4)][_0x343226(0x1ac)]={'authority':_0x2ffc55,'multiMode':_0x2696a9===_0x343226(0x141),'serviceName':_0x2a47ce}),_0x44b676;}function buildXrayConfig(_0x1e9c20,_0x2c5e30,_0x5a3ab0,_0x5408f6,_0x2e1fd8,_0x3ecc41,_0x443080){const _0x5f4d9a=a0_0x4bf4,{vlessTrojanFakeDNS:_0xaf74cd,enableIPv6:_0x357706,warpFakeDNS:_0x22680c,bestVLESSTrojanInterval:_0x14ee9d,bestWarpInterval:_0x28064d,lengthMin:_0x50009a,lengthMax:_0x3c3158,intervalMin:_0x1712e5,intervalMax:_0x2910f6,fragmentPackets:_0x4b7ed4}=_0x1e9c20,_0x3eb48e=_0xaf74cd&&!_0x443080||_0x22680c&&_0x443080,_0xdcc661=structuredClone(xrayConfigTemp);_0xdcc661[_0x5f4d9a(0x15f)]=_0x2c5e30;_0x3eb48e&&(_0xdcc661[_0x5f4d9a(0x1ae)][0x0][_0x5f4d9a(0x1de)][_0x5f4d9a(0x19f)]['push'](_0x5f4d9a(0x157)),_0xdcc661[_0x5f4d9a(0x1ae)][0x1][_0x5f4d9a(0x1de)][_0x5f4d9a(0x19f)]['push'](_0x5f4d9a(0x157)));if(_0x5a3ab0){const _0x5676fc=_0xdcc661[_0x5f4d9a(0x14a)][0x0][_0x5f4d9a(0x14e)][_0x5f4d9a(0x1a4)];_0x5676fc[_0x5f4d9a(0x1da)]=_0x50009a+'-'+_0x3c3158,_0x5676fc[_0x5f4d9a(0x143)]=_0x1712e5+'-'+_0x2910f6,_0x5676fc[_0x5f4d9a(0x1c9)]=_0x4b7ed4,_0xdcc661[_0x5f4d9a(0x14a)][0x0]['settings'][_0x5f4d9a(0x1a8)]=_0x357706?_0x5f4d9a(0x1cc):_0x5f4d9a(0x1df);}else _0xdcc661[_0x5f4d9a(0x14a)][_0x5f4d9a(0x177)]();if(_0x5408f6){const _0x59ab4c=_0x443080?_0x28064d:_0x14ee9d;_0xdcc661[_0x5f4d9a(0x14d)][_0x5f4d9a(0x1b1)]=_0x59ab4c+'s';if(_0x3ecc41)_0xdcc661['routing'][_0x5f4d9a(0x18d)][0x0][_0x5f4d9a(0x1af)]='prox-2';if(_0x2e1fd8){_0xdcc661[_0x5f4d9a(0x14d)]['subjectSelector'][_0x5f4d9a(0x186)](_0x5f4d9a(0x1c4));const _0x3dc05b=structuredClone(_0xdcc661[_0x5f4d9a(0x17b)][_0x5f4d9a(0x18d)][0x0]);if(_0x3ecc41)_0x3dc05b[_0x5f4d9a(0x1af)]='chain-2';_0xdcc661[_0x5f4d9a(0x17b)][_0x5f4d9a(0x18d)][_0x5f4d9a(0x186)]({..._0x3dc05b,'selector':[_0x5f4d9a(0x1c4)]}),_0xdcc661['routing']['balancers'][0x0]['tag']=_0x5f4d9a(0x17c);}}else delete _0xdcc661[_0x5f4d9a(0x14d)],delete _0xdcc661['routing'][_0x5f4d9a(0x18d)];return _0xdcc661;}async function buildXrayBestPingConfig(_0x388d85,_0x5fdcfe,_0x557632,_0x244b15,_0x527169){const _0x4c708e=a0_0x4bf4,_0x237ce3=_0x527169?'💦\x20BPB\x20F\x20-\x20Best\x20Ping\x20💥':'💦\x20BPB\x20-\x20Best\x20Ping\x20💥',_0x2fb4b0=buildXrayConfig(_0x388d85,_0x237ce3,_0x527169,!![],_0x557632,!![]);return _0x2fb4b0[_0x4c708e(0x1cf)]=await buildXrayDNS(_0x388d85,_0x5fdcfe,undefined,![],![]),_0x2fb4b0['routing'][_0x4c708e(0x169)]=buildXrayRoutingRules(_0x388d85,_0x5fdcfe,_0x557632,!![],![],![]),_0x2fb4b0[_0x4c708e(0x14a)][_0x4c708e(0x166)](..._0x244b15),_0x2fb4b0;}async function buildXrayBestFragmentConfig(_0x4b473a,_0x4f3cd4,_0x16feb3,_0x1adf50){const _0x1f76f2=a0_0x4bf4,_0x58f345=[_0x1f76f2(0x1e5),_0x1f76f2(0x1b7),'30-40',_0x1f76f2(0x171),'50-60',_0x1f76f2(0x1db),_0x1f76f2(0x19c),_0x1f76f2(0x1c8),'90-100',_0x1f76f2(0x197),_0x1f76f2(0x1a3),'30-50',_0x1f76f2(0x1ad),_0x1f76f2(0x17f),_0x1f76f2(0x187),_0x1f76f2(0x1cd),'80-100',_0x1f76f2(0x1e1)],_0x1d1e12=buildXrayConfig(_0x4b473a,_0x1f76f2(0x1ab),!![],!![],_0x16feb3,![],![]);_0x1d1e12[_0x1f76f2(0x1cf)]=await buildXrayDNS(_0x4b473a,[],_0x4f3cd4,![],![]),_0x1d1e12[_0x1f76f2(0x17b)]['rules']=buildXrayRoutingRules(_0x4b473a,[],_0x16feb3,!![],![],![]);const _0x22cf16=_0x1d1e12['outbounds'][_0x1f76f2(0x177)](),_0xbbf0a3=[];return _0x58f345[_0x1f76f2(0x196)]((_0x3be7fb,_0x272dfd)=>{const _0x9b134d=_0x1f76f2;if(_0x16feb3){const _0x386aab=structuredClone(_0x16feb3);_0x386aab[_0x9b134d(0x181)]='chain-'+(_0x272dfd+0x1),_0x386aab[_0x9b134d(0x1b4)][_0x9b134d(0x1c5)][_0x9b134d(0x1b9)]=_0x9b134d(0x162)+(_0x272dfd+0x1),_0xbbf0a3[_0x9b134d(0x186)](_0x386aab);}const _0x20ee4b=structuredClone(_0x1adf50[_0x16feb3?0x1:0x0]);_0x20ee4b[_0x9b134d(0x181)]=_0x9b134d(0x162)+(_0x272dfd+0x1),_0x20ee4b['streamSettings'][_0x9b134d(0x1c5)]['dialerProxy']=_0x9b134d(0x145)+(_0x272dfd+0x1);const _0x150603=structuredClone(_0x22cf16);_0x150603['tag']=_0x9b134d(0x145)+(_0x272dfd+0x1),_0x150603[_0x9b134d(0x14e)]['fragment'][_0x9b134d(0x1da)]=_0x3be7fb,_0x150603[_0x9b134d(0x14e)]['fragment'][_0x9b134d(0x143)]=_0x9b134d(0x18f),_0xbbf0a3[_0x9b134d(0x186)](_0x20ee4b,_0x150603);}),_0x1d1e12['outbounds'][_0x1f76f2(0x166)](..._0xbbf0a3),_0x1d1e12;}function a0_0x5319(){const _0x5e8a93=['tlsSettings','geoip:ru','dash.cloudflare.com','1.1.1.1','leastPing','🇮🇷','domain:','💦\x20','fakedns','25044Apunqz','full:','userID','dns-out','noauth','no-store','domains','remarks','includes','geosite:category-ru','prox-','\x20-\x20WoW','230QLwzBc','443','unshift','geosite:cn','wireguard','rules','trojanPassword','6020eFukYU','UseIP','geoip:cn','defaultHttpsPorts','172.16.0.2/32','direct','40-50','wsSettings','tcpNoDelay','assign','realitySettings','bpb','shift','mux','35IbfpfW','geosite:category-porn','routing','all-proxy','grpc','proxySettings','50-70','tls','tag','geoip:private','application/octet-stream','keys','1089fRtirg','push','60-80','💦\x20BPB\x20F\x20-\x20WorkerLess\x20⭐','log','/tr','stringify','blackhole','balancers','1.0.0.1','1-1','none','vless','reality','ipv4','protocol','tcp','forEach','10-30','put','2192729cNrrIn','fake-outbound','servers','70-80','path','hostname','destOverride','2606:4700:4700::1111','cloudflare-dns.com','1041503AHgmLG','20-40','fragment','reject','419290oknqlE','?ed=2560','domainStrategy','udp','filter','💦\x20BPB\x20F\x20-\x20Best\x20Fragment\x20😎','grpcSettings','40-60','inbounds','fallbackTag','http-in','probeInterval','http/1.1','VLESS','streamSettings','http','freedom','20-30','127.0.0.1','dialerProxy','cloudflare.com','nikang','\x20-\x20Warp','split','randomized','geoip:ir','dokodemo-door','geosite:private','IPIfNonMatch','security','chain','sockopt','https://cloudflare-dns.com/dns-query','Trojan','80-90','packets','domain','staticIPs','UseIPv4v6','70-90','block','dns','451236DFrVfE','Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/127.0.0.0\x20Safari/537.36','proxy','11694272aByjfe','map','tcpKeepAliveIdle','2606:4700:4700::1001','google.com','balancerTag','warning','length','60-70','text/plain;charset=utf-8','tcp,udp','sniffing','UseIPv4','no-store,\x20no-cache,\x20must-revalidate,\x20proxy-revalidate','100-200','outboundTag','geosite:category-ads-all','-\x20Best\x20Ping\x20🚀','10-20','chain-','\x20Pro\x20','tcpSettings','prox','multi','socks-in','interval','200','frag-','field','auto','An\x20error\x20occured\x20while\x20parsing\x20chain\x20proxy:\x20','hostName','outbounds','socks','all','observatory','settings'];a0_0x5319=function(){return _0x5e8a93;};return a0_0x5319();}async function buildXrayWorkerLessConfig(_0x1dd0de){const _0x1df7b1=a0_0x4bf4,_0x424ec4=buildXrayConfig(_0x1dd0de,_0x1df7b1(0x188),!![],![],![],![],![]);_0x424ec4['dns']=await buildXrayDNS(_0x1dd0de,[],undefined,!![]),_0x424ec4[_0x1df7b1(0x17b)][_0x1df7b1(0x169)]=buildXrayRoutingRules(_0x1dd0de,[],![],![],!![],![]);const _0x49f587=buildXrayVLESSOutbound(_0x1df7b1(0x19a),_0x1df7b1(0x1d7),_0x1df7b1(0x165),globalThis[_0x1df7b1(0x15a)],'google.com',_0x1df7b1(0x1d7),'',!![],![]);return delete _0x49f587[_0x1df7b1(0x1b4)][_0x1df7b1(0x1c5)],_0x49f587['streamSettings']['wsSettings'][_0x1df7b1(0x19d)]='/',_0x424ec4[_0x1df7b1(0x14a)]['push'](_0x49f587),_0x424ec4;}export async function getXrayCustomConfigs(_0x223dc7,_0x2dd77e,_0x42eaef){const _0x172cc0=a0_0x4bf4,{proxySettings:_0x3b6151}=await getDataset(_0x223dc7,_0x2dd77e);let _0x1350af=[],_0x37e0b0=[],_0x5f1df0=[],_0x567dc7;const {proxyIP:_0x56abbf,outProxy:_0x3ef0ca,outProxyParams:_0x410291,cleanIPs:_0x196682,enableIPv6:_0x3e6e4f,customCdnAddrs:_0x14e9cb,customCdnHost:_0x530185,customCdnSni:_0x906cb2,vlessConfigs:_0x2ca782,trojanConfigs:_0x4f53b0,ports:_0x505f7c}=_0x3b6151;if(_0x3ef0ca){const _0x12bb19=JSON['parse'](_0x410291);try{_0x567dc7=buildXrayChainOutbound(_0x12bb19,_0x3e6e4f);}catch(_0x2cf05d){console[_0x172cc0(0x189)](_0x172cc0(0x148),_0x2cf05d),_0x567dc7=undefined,await _0x2dd77e[_0x172cc0(0x176)][_0x172cc0(0x198)](_0x172cc0(0x17e),JSON[_0x172cc0(0x18b)]({..._0x3b6151,'outProxy':'','outProxyParams':{}}));}}const _0x114142=await getConfigAddresses(_0x196682,_0x3e6e4f),_0x2376ea=_0x14e9cb?_0x14e9cb[_0x172cc0(0x1bd)](','):[],_0x1bec49=_0x42eaef?[..._0x114142]:[..._0x114142,..._0x2376ea],_0x4bb224=_0x505f7c[_0x172cc0(0x1aa)](_0x357f52=>_0x42eaef?globalThis[_0x172cc0(0x16e)]['includes'](_0x357f52):!![]);_0x2ca782&&_0x5f1df0[_0x172cc0(0x186)](_0x172cc0(0x1b3)),_0x4f53b0&&_0x5f1df0[_0x172cc0(0x186)](_0x172cc0(0x1c7));let _0x4df07b=0x1;for(const _0x2f8538 of _0x5f1df0){let _0x316a0a=0x1;for(const _0x2eec7e of _0x4bb224){for(const _0x33b1e8 of _0x1bec49){const _0x332f60=_0x2376ea[_0x172cc0(0x160)](_0x33b1e8),_0xabd0e7=_0x332f60?'C':_0x42eaef?'F':'',_0x48890d=_0x332f60?_0x906cb2:randomUpperCase(globalThis['hostName']),_0x8a4031=_0x332f60?_0x530185:globalThis[_0x172cc0(0x149)],_0x4aa184=generateRemark(_0x316a0a,_0x2eec7e,_0x33b1e8,_0x196682,_0x2f8538,_0xabd0e7),_0x15a137=buildXrayConfig(_0x3b6151,_0x4aa184,_0x42eaef,![],_0x567dc7,![],![]);_0x15a137[_0x172cc0(0x1cf)]=await buildXrayDNS(_0x3b6151,[_0x33b1e8],undefined),_0x15a137['routing']['rules']=buildXrayRoutingRules(_0x3b6151,[_0x33b1e8],_0x567dc7,![],![],![]);const _0x540217=_0x2f8538==='VLESS'?buildXrayVLESSOutbound(_0x172cc0(0x1d2),_0x33b1e8,_0x2eec7e,_0x8a4031,_0x48890d,_0x56abbf,_0x42eaef,_0x332f60,_0x3e6e4f):buildXrayTrojanOutbound(_0x172cc0(0x1d2),_0x33b1e8,_0x2eec7e,_0x8a4031,_0x48890d,_0x56abbf,_0x42eaef,_0x332f60,_0x3e6e4f);_0x15a137['outbounds']['unshift']({..._0x540217}),_0x540217['tag']=_0x172cc0(0x162)+_0x4df07b;if(_0x567dc7){_0x15a137[_0x172cc0(0x14a)][_0x172cc0(0x166)](_0x567dc7);const _0x1d1c7b=structuredClone(_0x567dc7);_0x1d1c7b[_0x172cc0(0x181)]=_0x172cc0(0x1e6)+_0x4df07b,_0x1d1c7b[_0x172cc0(0x1b4)]['sockopt'][_0x172cc0(0x1b9)]='prox-'+_0x4df07b,_0x37e0b0[_0x172cc0(0x186)](_0x1d1c7b);}_0x37e0b0[_0x172cc0(0x186)](_0x540217),_0x1350af[_0x172cc0(0x186)](_0x15a137),_0x4df07b++,_0x316a0a++;}}}const _0x36cfef=await buildXrayBestPingConfig(_0x3b6151,_0x1bec49,_0x567dc7,_0x37e0b0,_0x42eaef),_0x57d7bc=[..._0x1350af,_0x36cfef];if(_0x42eaef){const _0x516a1c=await buildXrayBestFragmentConfig(_0x3b6151,globalThis['hostName'],_0x567dc7,_0x37e0b0),_0x166801=await buildXrayWorkerLessConfig(_0x3b6151);_0x57d7bc[_0x172cc0(0x186)](_0x516a1c,_0x166801);}return new Response(JSON[_0x172cc0(0x18b)](_0x57d7bc,null,0x4),{'status':0xc8,'headers':{'Content-Type':_0x172cc0(0x1dc),'Cache-Control':_0x172cc0(0x1e0),'CDN-Cache-Control':_0x172cc0(0x15d)}});}export async function getXrayWarpConfigs(_0x3b7d88,_0x104d4b,_0x2fc875){const _0x531df0=a0_0x4bf4,{proxySettings:_0x584cb3,warpConfigs:_0x2adfb2}=await getDataset(_0x3b7d88,_0x104d4b),_0x10acda=[],_0x92f01=[],_0x4c00f5=[],_0x193dd8=[],{warpEndpoints:_0x109a43}=_0x584cb3,_0x3c4f73=_0x109a43[_0x531df0(0x1bd)](',')[_0x531df0(0x1d4)](_0xef26d2=>_0xef26d2[_0x531df0(0x1bd)](':')[0x0])[_0x531df0(0x1aa)](_0x492c94=>isDomain(_0x492c94)),_0x43d55d=_0x2fc875===_0x531df0(0x1bb)?_0x531df0(0x13e):'\x20';for(const [_0x2f76b3,_0x521726]of _0x109a43[_0x531df0(0x1bd)](',')['entries']()){const _0x3afda9=_0x521726[_0x531df0(0x1bd)](':')[0x0],_0x24ce15=buildXrayConfig(_0x584cb3,_0x531df0(0x156)+(_0x2f76b3+0x1)+_0x531df0(0x1bc)+_0x43d55d+_0x531df0(0x154),![],![],![],![],!![]),_0x33e665=buildXrayConfig(_0x584cb3,_0x531df0(0x156)+(_0x2f76b3+0x1)+_0x531df0(0x163)+_0x43d55d+'🌍',![],![],!![],![],!![]);_0x24ce15[_0x531df0(0x1cf)]=_0x33e665['dns']=await buildXrayDNS(_0x584cb3,[_0x3afda9],undefined,![],!![]),_0x24ce15[_0x531df0(0x17b)][_0x531df0(0x169)]=buildXrayRoutingRules(_0x584cb3,[_0x3afda9],![],![],![],!![]),_0x33e665[_0x531df0(0x17b)][_0x531df0(0x169)]=buildXrayRoutingRules(_0x584cb3,[_0x3afda9],!![],![],![],!![]);const _0x447f6b=buildXrayWarpOutbound(_0x584cb3,_0x2adfb2,_0x521726,![],_0x2fc875),_0x474448=buildXrayWarpOutbound(_0x584cb3,_0x2adfb2,_0x521726,!![],_0x2fc875);_0x24ce15['outbounds']['unshift'](_0x447f6b),_0x33e665['outbounds'][_0x531df0(0x166)](_0x474448,_0x447f6b),_0x10acda[_0x531df0(0x186)](_0x24ce15),_0x92f01[_0x531df0(0x186)](_0x33e665);const _0x3b0cfb=structuredClone(_0x447f6b);_0x3b0cfb['tag']=_0x531df0(0x162)+(_0x2f76b3+0x1);const _0xb4db8b=structuredClone(_0x474448);_0xb4db8b['tag']=_0x531df0(0x1e6)+(_0x2f76b3+0x1),_0xb4db8b[_0x531df0(0x1b4)][_0x531df0(0x1c5)][_0x531df0(0x1b9)]=_0x531df0(0x162)+(_0x2f76b3+0x1),_0x4c00f5['push'](_0x3b0cfb),_0x193dd8[_0x531df0(0x186)](_0xb4db8b);}const _0x1a843a=await buildXrayDNS(_0x584cb3,_0x3c4f73,undefined,![],!![]),_0x4c0c29=buildXrayConfig(_0x584cb3,'💦\x20Warp'+_0x43d55d+'-\x20Best\x20Ping\x20🚀',![],!![],![],![],!![]);_0x4c0c29[_0x531df0(0x1cf)]=_0x1a843a,_0x4c0c29[_0x531df0(0x17b)][_0x531df0(0x169)]=buildXrayRoutingRules(_0x584cb3,_0x3c4f73,![],!![],![],!![]),_0x4c0c29[_0x531df0(0x14a)]['unshift'](..._0x4c00f5);const _0xc6a3aa=buildXrayConfig(_0x584cb3,'💦\x20WoW'+_0x43d55d+_0x531df0(0x1e4),![],!![],!![],![],!![]);_0xc6a3aa[_0x531df0(0x1cf)]=_0x1a843a,_0xc6a3aa[_0x531df0(0x17b)][_0x531df0(0x169)]=buildXrayRoutingRules(_0x584cb3,_0x3c4f73,!![],!![],![],!![]),_0xc6a3aa[_0x531df0(0x14a)][_0x531df0(0x166)](..._0x193dd8,..._0x4c00f5);const _0x26e159=[..._0x10acda,..._0x92f01,_0x4c0c29,_0xc6a3aa];return new Response(JSON['stringify'](_0x26e159,null,0x4),{'status':0xc8,'headers':{'Content-Type':_0x531df0(0x1dc),'Cache-Control':_0x531df0(0x1e0),'CDN-Cache-Control':_0x531df0(0x15d)}});}const xrayConfigTemp={'remarks':'','log':{'loglevel':a0_0x4a3e4e(0x1d9)},'dns':{},'inbounds':[{'port':0x2a38,'protocol':a0_0x4a3e4e(0x14b),'settings':{'auth':a0_0x4a3e4e(0x15c),'udp':!![],'userLevel':0x8},'sniffing':{'destOverride':['http',a0_0x4a3e4e(0x180)],'enabled':!![],'routeOnly':!![]},'tag':a0_0x4a3e4e(0x142)},{'port':0x2a39,'protocol':a0_0x4a3e4e(0x1b5),'settings':{'auth':a0_0x4a3e4e(0x15c),'udp':!![],'userLevel':0x8},'sniffing':{'destOverride':[a0_0x4a3e4e(0x1b5),'tls'],'enabled':!![],'routeOnly':!![]},'tag':a0_0x4a3e4e(0x1b0)},{'listen':a0_0x4a3e4e(0x1b8),'port':0x2a65,'protocol':a0_0x4a3e4e(0x1c0),'settings':{'address':a0_0x4a3e4e(0x152),'network':a0_0x4a3e4e(0x1dd),'port':0x35},'tag':'dns-in'}],'outbounds':[{'tag':a0_0x4a3e4e(0x1a4),'protocol':a0_0x4a3e4e(0x1b6),'settings':{'fragment':{'packets':'tlshello','length':'','interval':''},'domainStrategy':a0_0x4a3e4e(0x16c)},'streamSettings':{'sockopt':{'tcpKeepAliveIdle':0x1e,'tcpNoDelay':!![]}}},{'protocol':'dns','tag':'dns-out'},{'protocol':a0_0x4a3e4e(0x1b6),'settings':{},'tag':a0_0x4a3e4e(0x170)},{'protocol':a0_0x4a3e4e(0x18c),'settings':{'response':{'type':a0_0x4a3e4e(0x1b5)}},'tag':a0_0x4a3e4e(0x1ce)}],'policy':{'levels':{0x8:{'connIdle':0x12c,'downlinkOnly':0x1,'handshake':0x4,'uplinkOnly':0x1}},'system':{'statsOutboundUplink':!![],'statsOutboundDownlink':!![]}},'routing':{'domainStrategy':a0_0x4a3e4e(0x1c2),'rules':[],'balancers':[{'tag':a0_0x4a3e4e(0x14c),'selector':[a0_0x4a3e4e(0x140)],'strategy':{'type':a0_0x4a3e4e(0x153)}}]},'observatory':{'probeInterval':'30s','probeURL':'https://www.gstatic.com/generate_204','subjectSelector':[a0_0x4a3e4e(0x140)],'EnableConcurrency':!![]},'stats':{}};