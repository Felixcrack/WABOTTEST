const fun = (prefix, botName, ownerName) => {
        return `
┏ *〈 ${botName} 〉*
╿
┯ *〈 𝑰𝑵𝑭𝑶𝑹𝑴𝑨𝑪𝑰𝑶𝑵 𝑫𝑬𝑳 𝑩𝑶𝑻 〉*
   ╽
   ┠≽ *𝑃𝑟𝑒𝑓𝑖𝑗𝑜* : 「  ${prefix}  」
   ┠≽ *𝐶𝑟𝑒𝑎𝑑𝑜𝑟* : ${ownerName}
   ┠≽ *𝑉𝑒𝑟𝑠𝑖𝑜𝑛* : 0.0.5
   ╿
┯┷ *〈 𝑰𝑵𝑭𝑶𝑹𝑴𝑨𝑪𝑰𝑶𝑵 〉*
╽
┠≽ *${prefix}info* (error)
┃ *Desc* : 𝑀𝑜𝑠𝑡𝑟𝑎𝑟 𝑑𝑒𝑡𝑎𝑙𝑙𝑒𝑠 𝑑𝑒𝑙 𝑏𝑜𝑡
┠──────────────╼
┠≽ *${prefix}blocklist*
┃ *Desc* : 𝑀𝑜𝑠𝑡𝑟𝑎𝑟 𝑢𝑠𝑢𝑎𝑟𝑖𝑜𝑠 𝑏𝑙𝑜𝑞𝑢𝑒𝑎𝑑𝑜𝑠
┠──────────────╼
┠≽ *${prefix}chatlist* (error)
┃ *Desc* : 𝑀𝑜𝑠𝑡𝑟𝑎𝑟 𝑡𝑜𝑑𝑜𝑠 𝑙𝑜𝑠 𝑢𝑠𝑢𝑎𝑟𝑖𝑜𝑠 𝑑𝑒𝑙 𝑐ℎ𝑎𝑡
┠──────────────╼
┠≽ *${prefix}ping*
┃ *Desc* : 𝑀𝑜𝑠𝑡𝑟𝑎𝑟 𝑣𝑒𝑙𝑜𝑐𝑖𝑑𝑎𝑑 𝑑𝑒𝑙 𝑏𝑜𝑡
┠──────────────╼
┠≽ *${prefix}bugreport* <text>
┃ *Desc* : 𝑅𝑒𝑝𝑜𝑟𝑡𝑎𝑟 𝑏𝑢𝑔 𝑜 𝑒𝑟𝑟𝑜𝑟
╿
╿
┷┯ *〈 𝐷𝐼𝑉𝐸𝑅𝑆𝐼𝑂𝑁 〉*
   ╽
   ┠≽ *${prefix}alay* <text>
   ┃ *Desc* : 𝐶𝑎𝑚𝑏𝑖𝑜 𝑑𝑒 𝑝𝑎𝑙𝑎𝑏𝑟𝑎𝑠 𝑎 𝑎𝑙𝑎𝑦
   ┠──────────────╼
   ┠≽ *${prefix}bucin*
   ┃ *Desc* : 𝐸𝑛𝑣𝑖𝑎𝑟 𝑢𝑛 𝑒𝑠𝑐𝑙𝑎𝑣𝑜 𝑑𝑒 𝑎𝑚𝑜𝑟 𝑎𝑙 𝑎𝑧𝑎𝑟
   ┠──────────────╼
   ┠≽ *${prefix}trust*
   ┃ *Desc* : 𝐸𝑛𝑣𝑖𝑎 𝑢𝑛𝑎 𝑣𝑒𝑟𝑑𝑎𝑑 𝑎𝑙𝑒𝑎𝑡𝑜𝑟𝑖𝑎
   ┠──────────────╼
   ┠≽ *${prefix}dare*
   ┃ *Desc* : 𝐸𝑛𝑣𝑖𝑎 𝑢𝑛 𝑑𝑒𝑠𝑎𝑓𝑖𝑜 𝑎𝑙𝑒𝑎𝑡𝑜𝑟𝑖𝑜
   ┠──────────────╼
   ┠≽ *${prefix}simi* <text>
   ┃ *Desc* : 𝐻𝑎𝑏𝑙𝑎 𝑐𝑜𝑛 𝑠𝑖𝑚𝑖ℎ
   ┠──────────────╼
   ┠≽ *${prefix}say* <text>
   ┃ *Desc* : 𝐷𝑖𝑐𝑖𝑒𝑛𝑑𝑜:𝑣
   ╿ *${ownerName}*,
   ╰╼≽ *𝐶𝑟𝑒𝑎𝑑𝑜𝑟: © ${botName}`
}
exports.fun = fun
