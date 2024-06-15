/* progress bar */

document.addEventListener('DOMContentLoaded',function(){
    const progressbars=document.querySelectorAll('.progress');
    progressbars.forEach(progress=>{
        const targetwidth = progress.getAttribute('data-target-width');
        progress.style.setProperty('--target-width',targetwidth);
    });
    const progresscircles = document.querySelectorAll('.progress-circle');
    progresscircles.forEach(circle=>{
        const progress =circle.getAttribute('data-progress');
        const offset = 283 - (283 * progress)/ 100;
        circle.querySelector('.progress').style.strokeDashoffset = offset;
    });
    const projectscrollbarenter = document.querySelector('project-containetr').addEventListener('mouseenter',function(){
        this.querySelector('project-list-content').style.overflow='auto';
    });
    const projectscrollbarleave = document.querySelector('project-containetr').addEventListener('mouseleave',function(){
        this.querySelector('project-list-content').style.overflow='hidden';
    });
});
