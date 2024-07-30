function createPoster(words, fontColor, fontSize, bgColor, orientation, fontFamily) {
  var slideId = '1wjDxsf3xPc1xb9MEGKITs5crBHOCZaObX8R9SaM4QiM'; 
  var presentation = SlidesApp.openById(slideId);
  var slide = presentation.getSlides()[0];

  var elements = slide.getPageElements();
  elements.forEach(function(element) {
    element.remove();
  });

  slide.getBackground().setSolidFill(bgColor);

  var yOffset = 0;

  words.forEach(function(word) {
    var textBox = slide.insertTextBox(word.trim(), 50, yOffset, 400, 50);
    textBox.getText().getTextStyle()
      .setForegroundColor(fontColor)
      .setFontSize(parseInt(fontSize))
      .setFontFamily(fontFamily);
    yOffset += 60; 
  });

  return 'https://docs.google.com/presentation/d/' + slideId;
}

