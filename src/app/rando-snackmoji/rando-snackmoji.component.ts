import { Component, OnInit } from '@angular/core';
import { trigger, state, group, query, style, animate, transition } from '@angular/animations';


@Component({
  selector: 'app-rando-snackmoji',
  templateUrl: './rando-snackmoji.component.html',
  styleUrls: ['./rando-snackmoji.component.scss'],
  animations: [      
    trigger('toggleClick', [     // trigger block
    state('true', style({      // final CSS following animation
      transform: 'scale(1.05)'
    })),
    state('false', style({
      transform: 'scale(1)'
    })),
    transition('true => false', animate('500ms linear')),  // animation timing
    transition('false => true', animate('500ms linear'))
    ])
  ]
})
export class RandoSnackmojiComponent implements OnInit {

  snackmojies: string[] = [
    '🥨',
    '🍪',
    '🍔',
    '🌯',
    '🍑',
    '🍇',
    '🍩',
    '🥗',
    '🍕',
    '🍣',
    '🥙',
    '🥓',
    '🥕',
    '🍒',
    '🫐',
    '🥑',
    '🥪',
    '🥞',
    '🥯',
    '🥖',
  ]

  isScaled: string = 'true'

  lastrand: number

  snackmoji = this.snackmojies[0]

  constructor() { }

  ngOnInit(): void {
  }

  randoSnack() {

    let random: number = Math.floor(Math.random() * this.snackmojies.length);

    if ( random != this.lastrand ) {
      this.lastrand = random
      this.snackmoji = this.snackmojies[random]
    } else if ( random >= 0 && random < this.snackmojies.length - 1 ) {
      this.lastrand = random + 1
      this.snackmoji = this.snackmojies[random + 1]
    } else {
      this.lastrand = random - 1
      this.snackmoji = this.snackmojies[random - 1]
    }

    this.isScaled = this.isScaled === 'true' ? 'false' : 'true';
    
  }
  

}
