import { 
    Directive, 
    ElementRef, 
    OnInit, 
    Renderer2,
    HostListener,
    HostBinding, } from '@angular/core';

@Directive({
    selector: '[appBackground]'
})

export class BackgroundDirective implements OnInit {

    @HostBinding('style.backgroundColor') background: String;

    constructor(private element: ElementRef,
        private renderer: Renderer2){}

    ngOnInit(){
        // const {nativeElement} = this.element
        // this.renderer.setStyle(nativeElement,'background-color', 'red');
        // this.renderer.addClass(nativeElement,'white-text')
        // this.element.nativeElement.style.backgroundColor = 'red';
    }

    // @HostListener('mouseenter', ['$event']) mouseEnter(event: Event){
    //     console.log(event);
    // }


    // @HostListener('mouseenter') mouseEnter(){
    //     const {nativeElement} = this.element
    //     this.renderer.setStyle(nativeElement,'background-color', 'red');
    //     this.renderer.addClass(nativeElement,'white-text');
    // }


    // @HostListener('mouseleave') mouseLeave(){
    //     const {nativeElement} = this.element
    //     this.renderer.setStyle(nativeElement,'background-color', 'transparent');
    //     this.renderer.removeClass(nativeElement,'white-text');
    // }


    // Сокращение
    @HostListener('mouseenter') mouseEnter(){
        // this.renderer.setStyle(this.element.nativeElement,'background-color', 'red');
        this.background = 'green';
    }


    @HostListener('mouseleave') mouseLeave(){
        // this.renderer.setStyle(this.element.nativeElement,'background-color', 'transparent');
        this.background = 'transparent';
    }
}