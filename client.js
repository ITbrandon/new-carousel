class Carousel {
  constructor(carouselContainer, carouselContent, prevBtn, nextBtn ){
    this.carouselContainer = carouselContainer;
    this.carouselContent = carouselContent;
    this.prevBtn = prevBtn;
    this.nextBtn = nextBtn;
    this.carouselCollection = ["Bard", "Rogue", "Paladin", "Thief"];
    this.last = this.carouselCollection.length - 1;
    this.currentSlide = 0;
    this.timeInterval = null;
    this.time = 5000;
    this.init();
  }

  init = () => {
    this.carouselContent.innerHTML = `<h2>${this.carouselCollection[this.currentSlide]}</h2>`;
    this.prevBtn.addEventListener('click', this.previousSlide);
    this.nextBtn.addEventListener('click', this.nextSlide);
    this.slideChange();
  }

  nextSlide = () => {
     this.resetTimer();
      if(this.currentSlide === this.last)
      {
        this.currentSlide = 0;
        this.carouselContent.innerHTML = `<h2>${this.carouselCollection[this.currentSlide]}</h2>`;
      }
      else
      {
        this.currentSlide++
        this.carouselContent.innerHTML = `<h2>${this.carouselCollection[this.currentSlide]}</h2>`;
      }
  }

  previousSlide = () => {
    this.resetTimer();
    if(this.currentSlide === 0)
    {
      this.currentSlide = this.last;
      this.carouselContent.innerHTML = `<h2>${this.carouselCollection[this.currentSlide]}</h2>`;
    }
    else
    {
    this.currentSlide--;
    this.carouselContent.innerHTML = `<h2>${this.carouselCollection[this.currentSlide]}</h2>`;
    }

  }

  slideChange = () => {
    this.timeInterval = setInterval(() => {
      if(this.currentSlide === this.last)
      {
        this.currentSlide = 0;
        this.carouselContent.innerHTML = `<h2>${this.carouselCollection[this.currentSlide]}</h2>`
      }
      else
      {
      this.currentSlide++
      this.carouselContent.innerHTML = `<h2>${this.carouselCollection[this.currentSlide]}</h2>`
      }
    },this.time)
    
  }

  resetTimer = () => {
    clearInterval(this.timeInterval)
    this.slideChange();
  }
}

const action = new Carousel(
  document.querySelector('#container'), 
  document.querySelector('#content'), 
  document.querySelector('#prev'), 
  document.querySelector('#next'));