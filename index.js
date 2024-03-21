const Tile = new Object(x, y, z);
const tileA = new Tile(0,0,0);
const tileB = new Tile(3,3,3);

function Tile(x,y,z) {
    this.x = x;
    this.y = y;
    this.z = z;
}

function LineOfSight(Tile a, Tile b) {
    /*
    *A simplified version of the function
    *params:
    * A: tile Player stands on
    * B: Tile target stands on
    * */
   if (HeightCase(a.y, b.y) == true) return true;
   else {
    return HypotenuseCase(a, b);
   }
}
function HeightCase(int a, int b){
    /* currently, just checks if one tile is higher than the other.
    broke out into a separate function because I'm still deciding if I want 
    to call x-z obstructions here or elsewhere
    
    edge case: Because players have variable heights, some players may still be 
    able to make ranged attacks at a height one lower than their targets. Not 
    factored in to current iteration. 
    */
    if (a >= b) return true;
    else return false;
}
function HypotenuseCase(Tile a, Tile b) {
    /*if the distance on the XZ plane between the two tiles is >= the height
    Difference between the two tiles
    */
    let heightDifference = b.y - a.y;
    let lateralDifference = Math.sqrt(
    (Math.pow((b.x - a.x), 2) + Math.pow((b.z - a.z, 2)))
    );
    if (heightDifference > lateralDifference) return false;
    else return true;
}