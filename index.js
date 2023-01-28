let text=document.getElementById("text-para");
let option=document.getElementById('option');

text.innerText="santosh"



let array=[
    `the polite answer obediently bring kookily stop break in a discontented birth the polite answer obediently bring kookily stop break in a discontented birth the polite answer obediently bring kookily stop break in a discontented birth`,
    `the direct payment carelessly die because some animal cheerfully try over a powerful stage which became a dependable sincere need. the direct payment carelessly die because some animal cheerfully try over a powerful stage which, became a dependable, sincere need. the direct payment carelessly die because some animal cheerfully try over a powerful stage which, became a dependable sincere need.`,
    `The cheerful business, interestingly go because some milk boldly see by a positive soup which, became a obedient, approachable approval. The cheerful business interestingly go because some milk boldly "see" by a positive soup which, became a obedient, approachable approval. The cheerful business interestingly go because some milk boldly see by a positive soup which, became a obedient, approachable approval.`
]
text.innerText=array[0]

option.addEventListener('change',()=>{
    console.log(option.value)
    
    if (option.value == "Easy") {
        text.innerText = array[0];
      } else if (option.value == "Medium") {
        text.innerText =array[1];
      } else if (option.value == "Hard") {
        text.innerText = array[2];
      }

    
    
})
console.log(array[0].length)




