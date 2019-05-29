import { 
    Directive, 
    ElementRef, 
    OnInit, 
    Renderer2,
    HostListener,
    HostBinding,
    Input, } from '@angular/core';

@Directive({
    selector: '[appBackground]'
})

export class BackgroundDirective implements OnInit {
    
    @Input('appBackground') hoverColor: string = 'green';
    @Input() defultColor: string = 'transparent';
    @HostBinding('style.backgroundColor') background: String;

    constructor(private element: ElementRef,
        private renderer: Renderer2){}

    ngOnInit(){
        this.background = this.defultColor;
    }

    @HostListener('mouseenter') mouseEnter(){
        this.background = this.hoverColor;
    }


    @HostListener('mouseleave') mouseLeave(){
        this.background = this.defultColor;
    }
}