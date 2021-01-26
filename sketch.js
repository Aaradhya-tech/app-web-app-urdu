
var child,school,flag;
var backgroundImg, happyImg, sadImg, schoolImg, flagImg;

function preload(){
  backgroundImg = loadImage("background.jpg");
  happyImg  = loadImage("happy emoji.png");
  sadImg = loadImage("sad emoji.png");
  schoolImg = loadImage("school.png");
}

function setup() {
  createCanvas(displayWidth,displayHeight);
  school = createSprite(displayWidth/2,50,10,10);
  school.addImage(schoolImg);


  child = createSprite(displayWidth/2,displayHeight/2,10,10);
  child.addImage(happyImg);
  child.scale = 0.16;

}



function draw() {
  background(backgroundImg);

  
  camera.y = child.y;
  camera.x = child.x; 

  allOldText();
  allNewText();

  if(keyDown(LEFT_ARROW)){
    child.x = child.x-2;
  }

  if(keyDown(RIGHT_ARROW)){
    child.x = child.x+2;
  }

  if(keyDown(UP_ARROW)){
    child.y = child.y-2;
  }

  if(keyDown(DOWN_ARROW)){
    child.y = child.y+2;
  }

  if(child.x < displayWidth/2){
    child.addImage(sadImg)
  }

  if(child.x > displayWidth/2){
    child.addImage(happyImg)
  }

  
  line(displayWidth/2,-20000,displayWidth/2,displayHeight+20000)
  textSize(32);
  textFont("Georgia");
  fill(255);
  text("پرانی تعلیم کی پالیسی",100,50)
  text("ایجوکیشن کی نئی پالیسی",displayWidth/2 + 250,50)
  drawSprites();
}

function allOldText(){
  textSize(28);
  textFont("Alatsi");
  fill(255);

  text("10 + 2 ", displayWidth/2 - 300,displayHeight/2);
  text("سکولنگ سسٹم", displayWidth/2 - 300,displayHeight/2 + 50);

  text("اس پالیسی میں صرف نمبروں اور ماہرین تعلیم پر توجہ دی گئی ہے", displayWidth/2 - 700,displayHeight/2 - 200);

  text("یہ پالیسی طلبا کو اپنی زبان میں تعلیم حاصل کرنے کی اجازت نہیں دیتی ہے", displayWidth/2 - 1300,displayHeight/2 - 100);
  
  text("ہمیں اپنی کسی بھی مہارت میں انٹرنشپ نہیں مل رہا ہے", displayWidth/2 - 1000,displayHeight/2 + 200);

  text("صرف انگریزی اور ہندی میں امتحانات ہوتے ہیں", displayWidth/2 - 1000,displayHeight/2 + 70);

  text("اساتذہ کو صرف طالب علم کی درجہ بندی کرنے کا حق حاصل ہے", displayWidth/2 -700, displayHeight/2 +300);

  text("طلباء کو صرف تعلیمی کارکردگی کے اڈوں پر درجہ دیا جاتا ہے", displayWidth/2 - 1500,displayHeight/2 - 270);

  text("طلبا کو کوڈنگ ، مٹی کے برتنوں وغیرہ کی کوئی مہارت نہیں سکھائی جاتی ہے", displayWidth/2 - 1200,displayHeight/2  + 400);

  text("بورڈ کے امتحانات سالانہ ہوتے ہیں", displayWidth/2 - 1400,displayHeight/2 + 10);

  text("کوئی ثقافتی مطالعہ فراہم نہیں کیا جاتا ہے", displayWidth/2 - 1400,displayHeight/2 +300);

  text("اہلیت صرف کورس مکمل کرنے کے بعد فراہم کی جاتی ہے", displayWidth/2 - 1600,displayHeight/2 + 140);

  text("کالج میں داخلے کے لئے 12 نمبر اہم ہیں", displayWidth/2 - 1800,displayHeight/2 - 200);

  text("فیسوں پر پابندی نہیں ہے", displayWidth/2 - 1400,displayHeight/2 + 480);

  text("طلباء صرف مضامین تک ہی محدود ہیں", displayWidth/2 - 1750,displayHeight/2 + 350);
  
}

function allNewText(){
  textSize(28);
  textFont("Alatsi");
  fill(255);

  text(" 5 + 3 + 3 + 4 ", displayWidth/2 + 50,displayHeight/2);
  text("سکولنگ سسٹم", displayWidth/2 + 50,displayHeight/2 + 50);

  text("اس پالیسی میں صرف نمبروں اور ماہرین تعلیم پر ہی فوکس نہیں کیا گیا ہے ، بلکہ اس میں ہنر اور غیر تعلیمی سرگرمیوں پر بھی توجہ دی گئی ہے", displayWidth/2 + 200,displayHeight/2 - 250);

  text("طلباء اب اپنی علاقائی زبان میں تعلیم حاصل کرسکتے ہیں", displayWidth/2 + 300,displayHeight/2 - 100);
  
  text("ہم اپنے اسکول کی عمر میں اپنی صلاحیتوں میں انٹرنشپ حاصل کرسکتے ہیں", displayWidth/2 + 500,displayHeight/2 + 200);

  text("اب امتحانات علاقائی زبانوں میں دستیاب ہیں", displayWidth/2 + 250,displayHeight/2 + 120);

  text("اساتذہ اور طلبہ ایک بچے کو درجہ دیتے ہیں", displayWidth/2 +250, displayHeight/2 +300);

  text("طلباء کو تعلیمی کارکردگی اور تخلیقی صلاحیتوں کی بنیاد پر بھی درجہ دیا جاتا ہے", displayWidth/2 + 1000,displayHeight/2 - 310);

  text("طلباء کو کوڈنگ ، مٹی کے برتن وغیرہ جیسے بہت سے ہنر سکھائے جاتے ہیں", displayWidth/2 + 700,displayHeight/2  + 400);

  text("اب بورڈ کے امتحانات دو سمسٹروں میں ہوتے ہیں", displayWidth/2 + 900,displayHeight/2 + 10);

  text("اسکول میں ہندوستانی ثقافت کی تعلیم دی جاتی ہے", displayWidth/2 + 900,displayHeight/2 +300);

  text("اہلیت مکمل کورس کے بعد فراہم کی جاتی ہے اور کورسز کے مابین سرٹیفکیٹ اور ڈپلوما فراہم کیا جاتا ہے", displayWidth/2 + 1100,displayHeight/2 + 140);

  text("کالج میں داخلے کے لئے 12 نمبر اہم نہیں ہیں ، طلباء داخلہ کا امتحان دے سکتے ہیں", displayWidth/2 + 800,displayHeight/2 - 200);

  text("فیسوں پر پابندی ہے", displayWidth/2 + 300,displayHeight/2 + 400);

  text("طلباء اپنی مرضی کے مطابق کوئی بھی مضمون لے سکتے ہیں", displayWidth/2 + 1250,displayHeight/2 + 350);
  
}