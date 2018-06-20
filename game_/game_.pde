//varables (to help make it move)
int right= 800;
int left= 800;
int up= 800;
int down= 800;
int speed=-4;
//varables (to help make the score)
int rightscore= 0;
int leftscore= 0;
int upscore= 0;
int downscore= 0;

void setup(){
//help make the envirment 
size(800,800);   
}

void draw(){
  //call for a function  
  plasement();
  fourscore();
  //make the envirment black
background(0);
// call for a function 
hitbox();
up();
down();
left();
right();
score();
}
void up(){
fill(210);
rect(100,up,50,50);
}
void down(){
fill(25);
rect(500,down ,50,50);
}
void right(){
fill(55);
rect(700,right ,50,50);
  
}
void left(){
fill(20);
rect(300,left ,50,50);
}
void hitbox(){
fill(255);
rect(0,0,800,75);
//help with debuging and also keep tarck of very thing
if(up>0 && up<75){
       println("hi i am up.i am in the hitbox",upscore); 
}
if(down>0 && down<75){
       println("hi i am down.i am in the hitbox",downscore); 
}
if(left>0 && left<75){
       println("hi i am left.i am in the hitbox",leftscore);
}
if(right>0 && right<75){
       println("hi i am right.i am in the hitbox",rightscore);
}
}
void plasement(){ 
  //help make the box move
  up +=speed;
  if (up  < 0) {
        up =700;
      }
  down +=speed;
  if (down  < 0) {
        down =700;
      }
  right +=speed;
  if (right  < 0) {
        right =700;
      }
  left +=speed;
  if (left  < 0) {
        left =700;
      }
}
void fourscore(){
  // make the 4 scores
  if(keyCode == UP && up>0 && up<75){
       upscore++; 
}

if(keyCode == DOWN && down>0 && down<75){
       downscore++; 
}

if(keyCode == LEFT && left>0 && left<75){
       leftscore++;
}
if(keyCode == RIGHT && right>0 && right<75){
       rightscore++;
}
  
}
void score(){
  // add up the 4 score and display them
  float first=rightscore+leftscore+upscore+downscore;
  println(first);
}
