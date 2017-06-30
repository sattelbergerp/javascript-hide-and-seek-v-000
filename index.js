function getFirstSelector(selector){
  return document.querySelector(selector);
}

function nestedTarget(){
  return document.querySelector('#nested .target');
}

function deepestChild(){
  var target = document.querySelector('#grand-node');
  while(target.children.length > 0)target = target.children[0];
  return target;
}

function increaseRankBy(n){
  document.querySelectorAll('.ranked-list li').forEach((element)=>{
    element.innerHTML = parseInt(element.innerHTML)+n
  });
}
