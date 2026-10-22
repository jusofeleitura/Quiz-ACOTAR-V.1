const fs=require('fs'),vm=require('vm'),assert=require('assert');
const path=require('path');
const script=fs.readFileSync(path.join(__dirname,'../assets/quiz.js'),'utf8');
const app={innerHTML:'',classList:{remove(){},add(){}},querySelector(){return {style:{},focus(){}}}};
const ctx=vm.createContext({document:{body:{style:{}},querySelector(){return app},documentElement:{style:{setProperty(){}}}},window:{scrollTo(){}}});
vm.runInContext(script,ctx);
vm.runInContext(`
const seen=new Set();const stages=new Set();
let seed=123456;
function random(){seed=(1664525*seed+1013904223)>>>0;return seed/4294967296}
for(let k=0;k<100000;k++){
 const a=Array.from({length:10},()=>Math.floor(random()*5));
 const totals=Array(7).fill(0),twos=Array(7).fill(0);
 a.forEach((v,n)=>Object.entries(questions[n].options[v].scores).forEach(([c,p])=>{totals[c]+=p;if(p===2)twos[c]++}));
 let pool=totals.map((_,c)=>c).filter(c=>totals[c]===Math.max(...totals));
 let stage='total';
 if(pool.length>1){const s=questions[7].options[a[7]].scores;const m=Math.max(...pool.map(c=>s[c]||0));pool=pool.filter(c=>(s[c]||0)===m);stage='pergunta 8'}
 if(pool.length>1){const m=Math.max(...pool.map(c=>twos[c]));pool=pool.filter(c=>twos[c]===m);stage='contagem +2'}
 if(pool.length>1)stage='pergunta especial';
 if(JSON.stringify(pool)!==JSON.stringify(resolve(a)))throw Error('Cálculo divergente');
 stages.add(stage);if(pool.length===1)seen.add(pool[0]);
}
if(seen.size!==7||stages.size!==4)throw Error('Cobertura incompleta');
for(let c=0;c<7;c++)showResult(c);
restart();if(answers.some(x=>x!==null))throw Error('Reinício incorreto');
`,ctx);
console.log('PASS: sintaxe JavaScript, 100.000 combinações comparadas com cálculo independente, sete resultados alcançáveis, quatro etapas de decisão cobertas e reinício.');


vm.runInContext(`tied=[0,2,6];tieChoice=null;showTie();if(JSON.stringify(tied)!=="[2,6,0]")throw Error("Ordem incorreta");if(app.innerHTML.includes("Corte Outonal")||app.innerHTML.includes("Corte Noturna"))throw Error("Associação exposta");if(!app.innerHTML.includes("sacrifício mais doloroso"))throw Error("Pergunta ausente");if(app.innerHTML.includes(tieTexts[1]))throw Error("Alternativa não empatada exibida");`,ctx); console.log("PASS: pergunta especial, ordem e filtro das alternativas; nomes das Cortes ocultos.");
