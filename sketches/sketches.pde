void setup(){
    size(500,500);
    //noLoop();
}
int id =0;
int x = 300;
int y = 300;
int SPEED = 15;
void draw() {
    background(0);
    fill(255);
    rect(x,y,10,10);
}

void setXY(int newX, int newY){
    x = newX;
    y = newY;
}

void keyPressed(){
  if(keyCode== UP){
    y-=SPEED;
  }  
  if(keyCode== DOWN){
    y+=SPEED;
  }
  if(keyCode== LEFT){
    x-=SPEED;
  }
  if(keyCode== RIGHT){
    x+=SPEED;
  }
  
  //fireKeyEvent();
}

void setId(int newId){
  id = newId;
}

int[] getPosition() {
    int[] result = new int[2];
    result[0]=x;
    result[1]=y;
    return result;
}

void startLoop(){
  loop();
}
