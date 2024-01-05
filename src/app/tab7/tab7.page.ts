import { Component, OnInit } from '@angular/core';
import {
  Container,
  MoveDirection,
  OutMode,
  // ClickMode,
  // HoverMode,
} from '@tsparticles/engine';
import { loadFull } from 'tsparticles'; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from '@tsparticles/slim'; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.
import { NgParticlesService } from '@tsparticles/angular';
import { confetti } from '@tsparticles/confetti';

@Component({
  selector: 'app-tab7',
  templateUrl: './tab7.page.html',
  styleUrls: ['./tab7.page.scss'],
})
export class Tab7Page implements OnInit {
  id = 'tsparticles';

  /* Starting from 1.19.0 you can use a remote url (AJAX request) to a JSON with the configuration */
  particlesUrl = 'http://foo.bar/particles.json';

  /* or the classic JavaScript object */
  particlesOptions: any = {
    background: {
      color: {
        value: '#0d47a1',
      },
    },
    fpsLimit: 120,
    interactivity: {
      events: {
        onClick: {
          enable: true,
          // mode: ClickMode.push,
        },
        onHover: {
          enable: true,
          // mode: HoverMode.repulse,
        },
        resize: true,
      },
      modes: {
        push: {
          quantity: 4,
        },
        repulse: {
          distance: 200,
          duration: 0.4,
        },
      },
    },
    particles: {
      color: {
        value: '#ffffff',
      },
      links: {
        color: '#ffffff',
        distance: 150,
        enable: true,
        opacity: 0.5,
        width: 1,
      },
      move: {
        direction: MoveDirection.none,
        enable: true,
        outModes: {
          default: OutMode.bounce,
        },
        random: false,
        speed: 6,
        straight: false,
      },
      number: {
        density: {
          enable: true,
          area: 800,
        },
        value: 80,
      },
      opacity: {
        value: 0.5,
      },
      shape: {
        type: 'circle',
      },
      size: {
        value: { min: 1, max: 5 },
      },
    },
    detectRetina: true,
  };

  constructor(private readonly ngParticlesService: NgParticlesService) {}

  ngOnInit(): void {
    this.ngParticlesService.init(async (engine) => {
      console.log(engine);

      // Starting from 1.19.0 you can add custom presets or shape here, using the current tsParticles instance (main)
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // starting from v2 you can add only the features you need reducing the bundle size
      //await loadFull(engine);
      await loadSlim(engine);
    });
  }

  particlesLoaded(container: Container): void {
    console.log(container);
  }

  async onConfetti() {
    const defaults = {
      spread: 360,
      ticks: 100,
      gravity: 0,
      decay: 0.94,
      startVelocity: 30,
      shapes: ['heart'],
      colors: ['FFC0CB', 'FF69B4', 'FF1493', 'C71585'],
    };

    await confetti({
      ...defaults,
      particleCount: 50,
      scalar: 2,
    });

    await confetti({
      ...defaults,
      particleCount: 25,
      scalar: 3,
    });

    await confetti({
      ...defaults,
      particleCount: 10,
      scalar: 4,
    });
    // await confetti({
    //   particleCount: 100,
    //   startVelocity: 30,
    //   spread: 360,
    //   origin: {
    //     x: Math.random(),
    //     // since they fall down, start a bit higher than random
    //     y: Math.random() - 0.2,
    //   },
    // });
  }
}

//? CONFETTI EFFECT
