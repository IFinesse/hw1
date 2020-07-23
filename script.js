let container = document.getElementById("container");

let width = prompt("enter width");
let height = prompt("enter height");

// const width = 20;
// const height = 15;

let arr = [];
arr.length = height;

for(let i=0;i<arr.length;i++) {
    arr[i]=[];
    arr[i].length=width;
}

    let c = 1;
    let i=0;
    let j=0;

    let w2 = width;
    let h2 = height-1;
    let w1=0;
    let h1=1;
    let flag1 = true;
    let flag2 = true;

    while (c<width*height+1) {
    if (j< w2 && flag1==true) {
        
        arr[i][j++] = c;

        if (j==w2) {
            w2--;
            --j;
            flag2=true;
        }
        

    } else if (i<h2 && flag2==true) {
        
        arr[++i][j] = c;

        if (i==h2) {
            h2--;
            flag1=false;
        }
        

    } else if (j>w1 && flag1==false) {
        
        arr[i][--j] = c;

        if (j==w1) {
            w1++;
            flag2=false;
        }
        
    }
      else if (i>h1 && flag2==false) {

        arr[--i][j] = c;

        if (i==h1) {
            h1++;
            flag1=true;
            j++;
        }
      }

      c++;

}

console.log(arr);

let rows = '';
for(let i = 0; i < height; i++) {
    let cells="";
    for(let j = 0; j < width; j++) {
        cells+= `<div class="block">${arr[i][j]}</div>`;
}
    rows+="<div class='rows'>" + cells + "</div>"
}


container.innerHTML=rows;