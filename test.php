<?php
Class Car{
    public $color = "green";
    protected $make = "Ford";
    
}


Class Car1 extends Car{

}

$car = new Car1();
echo $car->color;
echo $car->make;
?>
