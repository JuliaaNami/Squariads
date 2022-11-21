var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var pino1 = createSprite(200,300,20,20)
pino1.shapeColor = "red"
var pino2 = createSprite(180,320,20,20)
pino2.shapeColor = "blue"
var pino3 = createSprite(220,320,20,20)
pino3.shapeColor = "green"
var pino4 = createSprite(160,340,20,20)
pino4.shapeColor = "black"
var pino5 = createSprite(200,340,20,20)
pino5.shapeColor = "purple"
var pino6 = createSprite(240,340,20,20)
pino6.shapeColor = "yellow"
var squariad = createSprite (200,241,20,20)
squariad.shapeColor = "white"
var edges = createEdgeSprites()

squariad.velocityX = 4
squariad.velocityY = 5

function draw() {
background("lightgrey")

pino1.bounceOff (edges)
pino1.bounceOff (pino2)
pino1.bounceOff (pino3)
pino1.bounceOff (pino4)
pino1.bounceOff (pino5)
pino1.bounceOff (pino6)
pino1.bounceOff (squariad)

pino2.bounceOff (edges)
pino2.bounceOff (pino3)
pino2.bounceOff (pino4)
pino2.bounceOff (pino5)
pino2.bounceOff (pino6)
pino2.bounceOff (squariad)

pino3.bounceOff (edges)
pino3.bounceOff (pino4)
pino3.bounceOff (pino5)
pino3.bounceOff (pino6)
pino3.bounceOff (squariad)

pino4.bounceOff (edges)
pino4.bounceOff (pino5)
pino4.bounceOff (pino6)
pino4.bounceOff (squariad)

pino5.bounceOff (edges)
pino5.bounceOff (pino6)
pino5.bounceOff (squariad)

pino6.bounceOff (edges)
pino6.bounceOff (squariad)

squariad.bounceOff (edges)
drawSprites()  
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
