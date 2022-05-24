let item, carb, addCarb, corFac, inToC, calcIn, curGlu, tarGlu, finCorFac, finInToC, finCurGlu, finTarGlu;
let nc = 1;
let ni = 1;
let carbarr = [];
let itemarr = [];
let unit = 0;
function setup() {


    createCanvas(windowWidth, windowHeight);
    item = createInput();
    item.position(10, 65);

    carb = createInput();
    carb.position(200, 65);

    corFac = createInput();
    corFac.position(400, 65);
    // corFac.value(finCorFac);

    inToC = createInput();
    inToC.position(600, 65);
    // inToC.value(finInToC);

    curGlu = createInput();
    curGlu.position(400, 125);

    tarGlu = createInput();
    tarGlu.position(600, 125);
    // tarGlu.value(finTarGlu);
    
    addCarb = createButton("ADD CARB");
    addCarb.mousePressed(moreCarb);
    addCarb.position(10, 17);

    calcIn = createButton("CALCULATE INSULIN");
    calcIn.mousePressed(calcIns);
    calcIn.position(110, 17);

}


  function draw() {
    background(255, 255, 255);
    fill(0, 0, 0, 40);
    noStroke();
    rect(300, 10, 150, 20);
    fill(0);
    text("YOU NEED  "+unit+" UNITS", 315, 25);
    part1();
    // summarysetup();
  }

  // function summarysetup(){
  //   text("SUMMARY", 15, 350);
  //   text("ITEMS:", 20, 370);
  //   for(let i = 0; i<itemarr.length; i++){
  //     text(itemarr[i], 25, 395+(15*i));
  //     if(i == itemarr.length - 1){
  //       text("+", 20, 395+(15*i));
  //     }
  //   }
  //   // text("Total Carb = "+totalCarb, 25, itemarr.length*15);
  //   // text(totalCarb+"/"+inToC+" = "+totalCarb/inToC, 25, 420+itemarr.length*15);
  //   // text("("+curGlu+" - "+tarGlu+")"+" / "+corFac+" = "+(curGlu-tarGlu)/corFac, 25, 445+itemarr.length*15);
  //   // text("= "+(totalCarb/inToC)+" + "+(curGlu-tarGlu)/corFac+" = "+(totalCarb/inToC)+(curGlu-tarGlu)/corFac, 25, 470+itemarr.length*15);
  // }

  function part1(){
    //   console.log("hello");
    
    text("Item", 10, 50);
    text("Carb", 200, 50);
    text("Correction Factor", 400, 50);
    text("Insulin to Carb Ratio", 600, 50);
    text("Current Glucose", 400, 110);
    text("Target Glucose", 600, 110);
  }
  

  function calcIns(){
    getCarbVal();
    setupVal();
    console.log(carbarr);
    console.log("Calculating");
    let cor = 0;
    let totalCarb = 0;
    // carbarr.push();

    for(let i = 0; i<carbarr.length; i++){
      totalCarb += carbarr[i];
    } // uncomment
    console.log("total Carb: "+totalCarb);
    
    console.log("current Glucose = " + finCurGlu);
    console.log("correctioni Factor = " + finCorFac); 
    if(finCurGlu > finTarGlu){
      cor = finCurGlu - finTarGlu;
      cor = cor/finCorFac;
      unit = (totalCarb/finInToC) + (round(cor * 100))/100;
    }else{
      unit = totalCarb/finInToC;
    }
    // unit = totalCarb/inToC; //else
    console.log("Unit: "+unit);
    
    corFac.value(finCorFac);
    inToC.value(finInToC);
    tarGlu.value(finTarGlu);

    // summarysetup();
  }
  
  function setupVal(){
    // let finCorFac = parseInt(corFac.value());
    finCorFac = corFac.value();
    // corFac.attribute('placeholder', finCorFac);
    // attribute(corFac, finCorFac);
    // tarGlu.attribute('placeholder', finCorFac.toString());
    console.log("correction factor: "+finCorFac);

    finInToC =  inToC.value();
    // inToC.attribute('placeholder', finInToC);
    // attribute(inToC, finInToC);
    // let finInToC =  parseInt(inToC.value());
    // tarGlu.attribute('placeholder', finInToC.toString());
    
    console.log("Insulin to carb ratio: "+finInToC);

    finCurGlu = curGlu.value();
    // let finCurGlu = parseInt(curGlu.value());
  
    console.log("current glucose: "+finCurGlu);

    finTarGlu = tarGlu.value();
    tarGlu.attribute('placeholder', finTarGlu.toString());
    // attribute(tarGlu, finTarGlu);
    // let finTarGlu = parseInt(tarGlu.value());
    console.log("Target glucose: "+finTarGlu);

  }

  function getCarbVal(){
    let finalItem = item.value();
    console.log("item: "+finalItem);
    itemarr.push(finalItem);

    let finalCarb = parseInt(carb.value());
    console.log("carb: "+finalCarb);
    carbarr.push(finalCarb);
  

  }


  function moreCarb(){
    if((item.value() != "" && carb.value() != "")){
      getCarbVal();
      // setupVal();

      item = createInput('');
      item.position(10, 65+(ni*30));

7
      carb = createInput('');
      carb.position(200, 65+(nc*30));

      ni++;
      nc++;
      console.log("Added carb");
    }else{
      console.log("Add carb first");
    }
    // getCarbVal();
    // setupVal();

    // item = createInput('');
    // item.position(10, 65+(ni*30));


    // carb = createInput('');
    // carb.position(200, 65+(nc*30));

    // ni++;
    // nc++;
    // console.log("Added carb");
     
  }

  // Add reset button 
  // Add delete carb button