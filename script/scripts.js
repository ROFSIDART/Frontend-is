// get both pupils
const pupils = document.querySelectorAll(".eye .pupil");
window.addEventListener("mousemove", (e) => {
  pupils.forEach((pupil) => {
    // get x and y postion of cursor
    var rect = pupil.getBoundingClientRect();
    var x = (e.pageX - rect.left) / 20 + "px";
    var y = (e.pageY - rect.top) / 40 + "px";
    pupil.style.transform =
      "translate3d(" + x + "," + y + ", 0px) rotate(45deg)";
  });
});
// этот кусок кода я пока не понимаю плностью, но частично вникла. Тоже ctrl c ctrl v 

const testimonials = document.querySelector(".testimonials");
const scroller = testimonials.querySelector(".scroller");
const nextBtn = testimonials.querySelector(".btn.next");
const prevBtn = testimonials.querySelector(".btn.prev");
const itemWidth = testimonials.querySelector(".block").clientWidth;

nextBtn.addEventListener("click", scrollToNextItem);
prevBtn.addEventListener("click", scrollToPrevItem);

function scrollToNextItem() {
  scroller.scrollBy({ left: itemWidth, top: 0, behavior: "smooth" });
}
function scrollToPrevItem() {
  scroller.scrollBy({ left: -itemWidth, top: 0, behavior: "smooth" });
}

/* function scrollToNextItem() {
   if(scroller.scrollLeft < (scroller.scrollWidth - itemWidth))
       // Позиция прокрутки расположена не в начале последнего элемента
       scroller.scrollBy({left: itemWidth, top: 0, behavior:'smooth'});
   else
       // Достигнут последний элемент. Возвращаемся к первому элементу, установив для позиции прокрутки 0
       scroller.scrollTo({left: 0, top: 0, behavior:'smooth'});
}
function scrollToPrevItem() {
   if(scroller.scrollLeft != 0)
       // Позиция прокрутки расположена не в начале последнего элемента
       scroller.scrollBy({left: -itemWidth, top: 0, behavior:'smooth'});
   else
       // Это первый элемент. Переходим к последнему элементу, установив для позиции прокрутки ширину скроллера
        scroller.scrollTo({left: scroller.scrollWidth, top: 0, behavior:'smooth'});
} */
// не работает, а должно делать вечную прокрутку