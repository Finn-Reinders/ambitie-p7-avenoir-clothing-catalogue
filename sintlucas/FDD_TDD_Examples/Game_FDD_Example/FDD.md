# Functional Design Document (FDD)

## General description
This will be a 2D topdown shooter game. This game is an assignment for Specialization.

## Functional requirements
* The player will move up, down, left, right with the WSAD keys.
![Alt text](Imgs/1.jpg)

* The player can shoot a projectile by clicking. The player looks at the cursor and the bullets fly towards the cursor position.
![Alt text](Imgs/2.jpg)

* Bullets should be destroyed on collision and should deal damage to enemies and breakable objects.
![Alt text](Imgs/3.jpg)

* There should be a turret that only shoots at the player if it can see the player.
![Alt text](Imgs/4.jpg)

* There should be an enemy that runs towards the player and deals damage by touching.
![Alt text](Imgs/5.jpg)

* The player can do an area of effect melee attack.
![Alt text](Imgs/6.jpg)

* There should be a locked door that the player can open by collecting a key and touching the door.
![Alt text](Imgs/7.jpg)

* Each enemy killed should display score on screen.
![Alt text](Imgs/8.jpg)

* There should be simple sound effects.

* Enemies can damage the player. If the player is out of health, he dies and the game resets.
![Alt text](Imgs/9.jpg)

## Non-functional requirements

### Performance
* The game should not lag or reduce below 60 frames per second, even while the player and enemies are shooting.

### Security
* Not relevant.