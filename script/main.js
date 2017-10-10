(function(){
  var theImages = document.querySelectorAll('.image-holder'),
      thisHeading = document.querySelector('.heading'),
      thisSubhead = document.querySelector('.main-copy h2'),
      thisSeasonText = document.querySelector('.main-copy p'),
      appliedClass;

  function changeElements() {
    //make sure event handling is working
    //debugger;
    let objectIndex = dynamicContent[this.id]; //grab the object that corresponds to the ID of the element clicked on
    let subImages = document.querySelector('.subImagesContainer');

    //remove all subImages
    while(subImages.firstChild){
      subImages.removeChild(subImages.firstChild);
    }

    objectIndex.images.forEach(function(image, index) {
      //create a new image element
      let newSubImg = document.createElement('img');
      //add a css class to it
      newSubImg.classList.add('thumb');
      //add a source
      newSubImg.src = "images/" + objectIndex.images[index];
      //add it to the page
      subImages.appendChild(newSubImg);
    })

    thisSubhead.classList.remove(appliedClass);
    thisHeading.classList.remove(appliedClass);

    //changes colour
    thisSubhead.classList.add(this.id);
    thisHeading.classList.add(this.id);

    thisSubhead.firstChild.nodeValue = objectIndex.headline;
    thisSeasonText.firstChild.nodeValue = objectIndex.text;

    appliedClass = this.id;
  }

    theImages.forEach(function(element, index){
      //Loop through the images and add event handling to each one
      element.addEventListener('click', changeElements, false);
    });

    //thisSubhead.firstChild.nodeValue = dynamicContent['spring'].headline;
    //thisSeasonText.firstChild.nodeValue = dynamicContent['spring'].text;
    //thisHeading.classList.add('spring');

    document.querySelector('#spring').click();

    //more programmy type way to do same thisHeading

    changeElements.call(document.querySelector('#spring'));

})();
