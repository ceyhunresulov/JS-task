// 1.verilen saniye deyerinin nece deqiqe ve saniye oldugun hesablayan proqram yaz
// meselen:1200 ---20deq 0san

// let san=1567
// a=san/60
// deq=parseInt(a)
// c=san-deq*60
// console.log(`${deq} deq ${c} san`)

// optimal
// let sanString=prompt("saniye daxil edin")
// let san=parseInt(sanString)
// let deq=parseInt(san/60)
// let qaliq=san%60
// alert(`${deq} deq,${qaliq} san`)


// 2. 
// let f=100;
// let c=5/9*(f-32)
// console.log(c)



// 3. kicik bir loterereya oyunu yaz.istifadeciden ikireqemli tesadufu ededi tapmasi teleb olunur
// sertler:
// eger istifadeci ikireqemli ededi tam bilerse 1000 manat qazansin:
// ededin reqemlerinin her ikisini bilerse mes: 75 yerine 57 yazarsa 500 manat qazansin:
// ededin reqemlerinden birini duz bilerse 100 manat qazansin:

// while(true){
//     let num=Math.floor(Math.random()*100)
//     let user=prompt("size tesadufu verilmis ikireqemli ededi tapin:")
//     let numString=num.toString()
//     let userReverse=user[1]+user[0]
//     if(num<10){ 
//     num+=10
//     }
//     if(num==user){
//         alert("tebrikler siz tam dogru cavabi taparaq 1000 Azn qazandiniz")
//         break
//     }else if(num==userReverse){
//         alert("tebrikler siz verilen ededin her iki reqemini istifade etdiniz ve 500 Azn qazandiniz")
//         break
//     }else if(numString[0]==user[0] || numString[0]==user[1] || numString[1]==user[0] || numString[1]==user[1]){
//         alert("tebrikler siz verilen ededin reqemlerinde birini qeyd ederek 100 azn qazandiniz")
//         break
//     }else{
//         alert("YANLIS CAVAB.HEC BIR SERT ODENMIR")
//     }
// }




// 4.butun donguler ile adinizi ekrana 5 defe yazdirin


// let ad="Ceyhun"


// i.
// for(let i=0; i < 5; i++){
//     console.log(ad)
// }

// ii.
// let i=0
// while(i<5){
//     console.log(ad)
//     i++
// }


// iii.
// let i=0
// do{
//     console.log(ad)
//     i++
// }while(i<5);


// 4.  1 den 100 e  qeder olan butun ededlerin cemini tapan proqram yaz
// let sum = 0
// for(let i=0; i<5; i++){
//     console.log(`${sum} + ${i} = ${sum+i}`)
//     sum+=i
    
// }


// 5. 1 den 10-a qeder ededleri for dongusu ile bir sirada aralarinda "," olacag sekilde yazin
// let num=""
// for(let i=1; i<=10; i++){
//     if(i!=10){
//         num+=i + ", "
//     }else{
//         num+=i
//     }
// }
// console.log(num)




// 6.daxil edilen ededin faktorialini hesablayan proqram yazin

// let num=parseInt(prompt("eded daxil edin"))
// let fackt=1
// for(let i=1; i <= num; i++){
//     fackt = fackt * i
    

// }
// alert(fackt)




// 7.asagdaki f(x, y) funksiyasini daxil edilen x ve y ededleri ucun hesablayan proqram yazin
// x>0, y<0 olarsa f(x,y)=4x+2y+4
// x>0, y=0 olarsa f(x,y)=2x-y+3
// x<0, y>0 olarsa f(x,y)=3x+4y+3


// let x = parseInt(prompt("x"))
// let y= parseInt(prompt("y"))
// if(x>0 && y<0){
//     let f1=4 * x + 2 * y + 4
//     alert(`f1(${x},${y})=4x+2y+4=${f1}`)
// }else if(x>0 && y==0){
//     let f2=2 * x - y + 3
//     alert(`f2(${x},${y})=2x-y+3=${f2}`)
// }else if(x<0 && y>0){
//     let f3=3 * x + 4 * y + 3
//     alert(`f3(${x},${y})=3x+4y+3=${f3}`)
// }




// 8.vurma cedvelini gosteren bir proqram yaz

// let vurmaCedveli=""
// for(let i=1; i<=10; i++){
//     for(let j=1; j<=10; j++){
//         vurmaCedveli+= + i + "*" + j + "=" + (i*j) + "\t"
//     }
//     console.log(vurmaCedveli)
//     vurmaCedveli=""
// }





// 9. sistem 100-e  qeder tesadufu bir eded verir.istifadeci bu ededi tapmaga calisir ve proqram istifadeciye daxil etdiyi cavbi
// azalt ve ya artir  deyerek komek edir.cavabi tapdigda ise nece defe cehd etdikden sonra tapdigini gosterir

// let num=Math.floor(Math.random()*100);
// alert(num);
// let user=parseInt(prompt("eded daxil edin:"));
// let cehd=1
// while(true){
//     if(num>user){
//         alert("artirin")
//         user=parseInt(prompt("yeniden eded daxil edin:"));
//         cehd+=1
//     }else if(num<user){
//         alert("azaldin")
//         user=parseInt(prompt("yeniden eded daxil edin:"));
//         cehd+=1
//     }else if(num==user){
//         alert("tebrikler dogru cavabi tapdiniz")
//         alert(cehd)
//         break
// }
// }



// 10. istifadeci muxtelif ededler daxil edir ve 0 daxil etdikde daxil edilen ededlerin hasilini gosterir(0  hasili hesabalnan ededlere daxil deyil).

let hasil=1
while(true){
    let num=parseInt(prompt("eded daxil edin:"))
    if(num != 0){
        hasil=hasil*num
    }else if(num==0){
        alert(hasil)
        break
    }
}





     