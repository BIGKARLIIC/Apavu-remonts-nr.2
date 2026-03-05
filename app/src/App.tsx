import { useEffect, useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Phone, Mail, MapPin, Clock, ArrowRight, Menu, X } from 'lucide-react';
import './App.css';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const mainRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  // Navigation scroll behavior
  useEffect(() => {
    const handleScroll = () => {
      if (navRef.current) {
        if (window.scrollY > 100) {
          navRef.current.classList.add('bg-paper/95', 'backdrop-blur-sm', 'shadow-sm');
        } else {
          navRef.current.classList.remove('bg-paper/95', 'backdrop-blur-sm', 'shadow-sm');
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // GSAP ScrollTrigger Setup
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Hero Section Animations
      const heroTl = gsap.timeline({
        scrollTrigger: {
          trigger: '#hero',
          start: 'top top',
          end: '+=130%',
          pin: true,
          scrub: 0.5,
        }
      });

      heroTl
        .fromTo('#hero-panel', 
          { x: 0, opacity: 1 },
          { x: '-55vw', opacity: 0, ease: 'power2.in' },
          0.7
        )
        .fromTo('#hero-bg',
          { scale: 1 },
          { scale: 1.06, y: '-2vh', ease: 'none' },
          0.7
        )
        .fromTo('#hero-cta',
          { y: 0, opacity: 1 },
          { y: '10vh', opacity: 0, ease: 'power2.in' },
          0.7
        );

      // Section 2: Labots ar Pieredzi
      const section2Tl = gsap.timeline({
        scrollTrigger: {
          trigger: '#section2',
          start: 'top top',
          end: '+=130%',
          pin: true,
          scrub: 0.5,
        }
      });

      section2Tl
        .fromTo('#s2-headline',
          { x: '-60vw', opacity: 0 },
          { x: 0, opacity: 1, ease: 'power2.out' },
          0
        )
        .fromTo('#s2-card1',
          { x: '60vw', rotation: 6, opacity: 0 },
          { x: 0, rotation: 0, opacity: 1, ease: 'power2.out' },
          0.05
        )
        .fromTo('#s2-card2',
          { x: '60vw', rotation: 10, y: '4vh', opacity: 0 },
          { x: '2vw', rotation: 2, y: 0, opacity: 1, ease: 'power2.out' },
          0.08
        )
        .fromTo('#s2-card3',
          { x: '60vw', rotation: 14, y: '8vh', opacity: 0 },
          { x: '4vw', rotation: 4, y: 0, opacity: 0.6, ease: 'power2.out' },
          0.1
        )
        .to('#s2-headline', { x: '-55vw', opacity: 0, ease: 'power2.in' }, 0.7)
        .to('#s2-card1', { x: '55vw', opacity: 0, ease: 'power2.in' }, 0.7)
        .to('#s2-card2', { opacity: 0, ease: 'power2.in' }, 0.75)
        .to('#s2-card3', { opacity: 0, ease: 'power2.in' }, 0.78);

      // Section 3: Pakalpojumi
      const section3Tl = gsap.timeline({
        scrollTrigger: {
          trigger: '#section3',
          start: 'top top',
          end: '+=130%',
          pin: true,
          scrub: 0.5,
        }
      });

      section3Tl
        .fromTo('#s3-title',
          { y: '-12vh', opacity: 0 },
          { y: 0, opacity: 1, ease: 'power2.out' },
          0
        )
        .fromTo('#s3-card1',
          { x: '-55vw', opacity: 0 },
          { x: 0, opacity: 1, ease: 'power2.out' },
          0.08
        )
        .fromTo('#s3-card2',
          { x: '55vw', opacity: 0 },
          { x: 0, opacity: 1, ease: 'power2.out' },
          0.12
        )
        .fromTo('#s3-card3',
          { x: '-55vw', opacity: 0 },
          { x: 0, opacity: 1, ease: 'power2.out' },
          0.16
        )
        .fromTo('#s3-card4',
          { x: '55vw', opacity: 0 },
          { x: 0, opacity: 1, ease: 'power2.out' },
          0.2
        )
        .to('#s3-title', { y: '-6vh', opacity: 0, ease: 'power2.in' }, 0.7)
        .to('#s3-card1', { x: '-14vw', opacity: 0, ease: 'power2.in' }, 0.7)
        .to('#s3-card2', { x: '14vw', opacity: 0, ease: 'power2.in' }, 0.72)
        .to('#s3-card3', { x: '-14vw', opacity: 0, ease: 'power2.in' }, 0.74)
        .to('#s3-card4', { x: '14vw', opacity: 0, ease: 'power2.in' }, 0.76);

      // Section 4: Mēs Labojam Somas
      const section4Tl = gsap.timeline({
        scrollTrigger: {
          trigger: '#section4',
          start: 'top top',
          end: '+=130%',
          pin: true,
          scrub: 0.5,
        }
      });

      section4Tl
        .fromTo('#s4-image',
          { x: '-60vw', opacity: 0 },
          { x: 0, opacity: 1, ease: 'power2.out' },
          0
        )
        .fromTo('#s4-panel',
          { x: '60vw', opacity: 0 },
          { x: 0, opacity: 1, ease: 'power2.out' },
          0
        )
        .fromTo('#s4-headline',
          { y: '10vh', opacity: 0 },
          { y: 0, opacity: 1, ease: 'power2.out' },
          0.1
        )
        .fromTo('#s4-body',
          { y: '6vh', opacity: 0 },
          { y: 0, opacity: 1, ease: 'power2.out' },
          0.14
        )
        .fromTo('#s4-cta',
          { y: '6vh', opacity: 0 },
          { y: 0, opacity: 1, ease: 'power2.out' },
          0.18
        )
        .to('#s4-image', { x: '-55vw', opacity: 0, ease: 'power2.in' }, 0.7)
        .to('#s4-panel', { x: '55vw', opacity: 0, ease: 'power2.in' }, 0.7);

      // Section 5: Apavu Remonts
      const section5Tl = gsap.timeline({
        scrollTrigger: {
          trigger: '#section5',
          start: 'top top',
          end: '+=130%',
          pin: true,
          scrub: 0.5,
        }
      });

      section5Tl
        .fromTo('#s5-image',
          { x: '60vw', opacity: 0 },
          { x: 0, opacity: 1, ease: 'power2.out' },
          0
        )
        .fromTo('#s5-panel',
          { x: '-60vw', opacity: 0 },
          { x: 0, opacity: 1, ease: 'power2.out' },
          0
        )
        .fromTo('#s5-headline',
          { y: '10vh', opacity: 0 },
          { y: 0, opacity: 1, ease: 'power2.out' },
          0.1
        )
        .fromTo('#s5-body',
          { y: '6vh', opacity: 0 },
          { y: 0, opacity: 1, ease: 'power2.out' },
          0.14
        )
        .fromTo('#s5-cta',
          { y: '6vh', opacity: 0 },
          { y: 0, opacity: 1, ease: 'power2.out' },
          0.18
        )
        .to('#s5-image', { x: '55vw', opacity: 0, ease: 'power2.in' }, 0.7)
        .to('#s5-panel', { x: '-55vw', opacity: 0, ease: 'power2.in' }, 0.7);

      // Section 6: Ātrs Remonts
      const section6Tl = gsap.timeline({
        scrollTrigger: {
          trigger: '#section6',
          start: 'top top',
          end: '+=130%',
          pin: true,
          scrub: 0.5,
        }
      });

      section6Tl
        .fromTo('#s6-image',
          { x: '-60vw', opacity: 0 },
          { x: 0, opacity: 1, ease: 'power2.out' },
          0
        )
        .fromTo('#s6-panel',
          { x: '60vw', opacity: 0 },
          { x: 0, opacity: 1, ease: 'power2.out' },
          0
        )
        .fromTo('#s6-headline',
          { y: '10vh', opacity: 0 },
          { y: 0, opacity: 1, ease: 'power2.out' },
          0.1
        )
        .fromTo('#s6-body',
          { y: '6vh', opacity: 0 },
          { y: 0, opacity: 1, ease: 'power2.out' },
          0.14
        )
        .fromTo('#s6-cta',
          { y: '6vh', opacity: 0 },
          { y: 0, opacity: 1, ease: 'power2.out' },
          0.18
        )
        .to('#s6-image', { x: '-55vw', opacity: 0, ease: 'power2.in' }, 0.7)
        .to('#s6-panel', { x: '55vw', opacity: 0, ease: 'power2.in' }, 0.7);

      // Section 7: Kvalitāte
      const section7Tl = gsap.timeline({
        scrollTrigger: {
          trigger: '#section7',
          start: 'top top',
          end: '+=130%',
          pin: true,
          scrub: 0.5,
        }
      });

      section7Tl
        .fromTo('#s7-image',
          { x: '60vw', opacity: 0 },
          { x: 0, opacity: 1, ease: 'power2.out' },
          0
        )
        .fromTo('#s7-panel',
          { x: '-60vw', opacity: 0 },
          { x: 0, opacity: 1, ease: 'power2.out' },
          0
        )
        .fromTo('#s7-headline',
          { y: '10vh', opacity: 0 },
          { y: 0, opacity: 1, ease: 'power2.out' },
          0.1
        )
        .fromTo('#s7-body',
          { y: '6vh', opacity: 0 },
          { y: 0, opacity: 1, ease: 'power2.out' },
          0.14
        )
        .fromTo('#s7-cta',
          { y: '6vh', opacity: 0 },
          { y: 0, opacity: 1, ease: 'power2.out' },
          0.18
        )
        .to('#s7-image', { x: '55vw', opacity: 0, ease: 'power2.in' }, 0.7)
        .to('#s7-panel', { x: '-55vw', opacity: 0, ease: 'power2.in' }, 0.7);

      // Section 8: Closing Panel
      const section8Tl = gsap.timeline({
        scrollTrigger: {
          trigger: '#section8',
          start: 'top top',
          end: '+=130%',
          pin: true,
          scrub: 0.5,
        }
      });

      section8Tl
        .fromTo('#s8-bg',
          { scale: 1.08, opacity: 0.6 },
          { scale: 1, opacity: 1, ease: 'power2.out' },
          0
        )
        .fromTo('#s8-panel',
          { y: '40vh', scale: 0.96, opacity: 0 },
          { y: 0, scale: 1, opacity: 1, ease: 'power2.out' },
          0
        )
        .fromTo('#s8-headline',
          { y: '6vh', opacity: 0 },
          { y: 0, opacity: 1, ease: 'power2.out' },
          0.1
        )
        .fromTo('#s8-cta1',
          { y: '4vh', opacity: 0 },
          { y: 0, opacity: 1, ease: 'power2.out' },
          0.18
        )
        .fromTo('#s8-cta2',
          { y: '4vh', opacity: 0 },
          { y: 0, opacity: 1, ease: 'power2.out' },
          0.22
        )
        .to('#s8-bg', { opacity: 0.35, ease: 'power2.in' }, 0.7)
        .to('#s8-panel', { y: '-18vh', opacity: 0, ease: 'power2.in' }, 0.7);

      // Flowing sections reveal
      gsap.utils.toArray<HTMLElement>('.flowing-reveal').forEach((el) => {
        gsap.fromTo(el,
          { y: 24, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            }
          }
        );
      });

      // Global snap for pinned sections
      const pinned = ScrollTrigger.getAll()
        .filter(st => st.vars.pin)
        .sort((a, b) => a.start - b.start);
      
      const maxScroll = ScrollTrigger.maxScroll(window);
      if (!maxScroll || pinned.length === 0) return;

      const pinnedRanges = pinned.map(st => ({
        start: st.start / maxScroll,
        end: (st.end ?? st.start) / maxScroll,
        center: (st.start + ((st.end ?? st.start) - st.start) * 0.5) / maxScroll,
      }));

      ScrollTrigger.create({
        snap: {
          snapTo: (value: number) => {
            const inPinned = pinnedRanges.some(r => value >= r.start - 0.02 && value <= r.end + 0.02);
            if (!inPinned) return value;
            
            const target = pinnedRanges.reduce((closest, r) =>
              Math.abs(r.center - value) < Math.abs(closest - value) ? r.center : closest,
              pinnedRanges[0]?.center ?? 0
            );
            return target;
          },
          duration: { min: 0.15, max: 0.35 },
          delay: 0,
          ease: 'power2.out',
        }
      });

    }, mainRef);

    return () => ctx.revert();
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    if (mobileMenuRef.current) {
      mobileMenuRef.current.classList.add('hidden');
    }
  };

  const toggleMobileMenu = () => {
    if (mobileMenuRef.current) {
      mobileMenuRef.current.classList.toggle('hidden');
    }
  };

  return (
    <div ref={mainRef} className="relative">
      {/* Grain Overlay */}
      <div className="grain-overlay" />

      {/* Navigation */}
      <nav ref={navRef} className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
        <div className="flex items-center justify-between px-6 lg:px-12 py-4">
          <button 
            onClick={() => scrollToSection('hero')}
            className="text-micro text-text-primary hover:text-ochre transition-colors"
          >
            APAVU DARBNĪCA NR. 1
          </button>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection('section3')} className="text-micro text-text-primary hover:text-ochre transition-colors">
              Pakalpojumi
            </button>
            <button onClick={() => scrollToSection('section9')} className="text-micro text-text-primary hover:text-ochre transition-colors">
              Cenas
            </button>
            <button onClick={() => scrollToSection('section10')} className="text-micro text-text-primary hover:text-ochre transition-colors">
              Kontakti
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={toggleMobileMenu} className="md:hidden p-2">
            <Menu className="w-5 h-5" />
          </button>
        </div>

        {/* Mobile Menu */}
        <div ref={mobileMenuRef} className="hidden md:hidden bg-paper/98 border-t border-black/5">
          <div className="flex flex-col p-6 gap-4">
            <button onClick={() => scrollToSection('section3')} className="text-left text-micro text-text-primary">
              Pakalpojumi
            </button>
            <button onClick={() => scrollToSection('section9')} className="text-left text-micro text-text-primary">
              Cenas
            </button>
            <button onClick={() => scrollToSection('section10')} className="text-left text-micro text-text-primary">
              Kontakti
            </button>
            <button onClick={toggleMobileMenu} className="flex items-center gap-2 text-micro text-text-secondary">
              <X className="w-4 h-4" /> Aizvērt
            </button>
          </div>
        </div>
      </nav>

      {/* Section 1: Hero */}
      <section id="hero" className="section-pinned z-10">
        <div id="hero-bg" className="absolute inset-0">
          <img 
            src="/images/hero_workshop_bg.jpg" 
            alt="Shoe repair workshop" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/20" />
        </div>
        
        <div 
          id="hero-panel" 
          className="absolute left-[6vw] top-[18vh] w-[62vw] lg:w-[48vw] paper-panel p-6 lg:p-8"
        >
          <h1 className="text-headline uppercase font-display font-bold text-text-primary leading-none">
            <span className="block">Apavu un</span>
            <span className="block">Somu</span>
            <span className="block">Darbnīca</span>
          </h1>
          
          <div className="ochre-rule w-[18%] mt-6" />
          
          <p className="text-body text-text-secondary mt-4">
            Remonts Rīgā · Tērbatas iela 57
          </p>
          
          <div id="hero-cta" className="flex flex-wrap gap-4 mt-8">
            <button 
              onClick={() => scrollToSection('section9')}
              className="btn-primary"
            >
              Uzzināt cenu
            </button>
            <a 
              href="tel:+37126826119"
              className="btn-secondary flex items-center gap-2"
            >
              <Phone className="w-4 h-4" />
              Zvanīt
            </a>
          </div>
        </div>
      </section>

      {/* Section 2: Labots ar Pieredzi */}
      <section id="section2" className="section-pinned bg-paper z-20">
        <div className="absolute inset-0 flex items-center">
          {/* Left Content */}
          <div className="w-full lg:w-1/2 px-6 lg:px-[6vw]">
            <div id="s2-headline">
              <span className="text-micro text-text-secondary block mb-4">DARBNĪCA</span>
              <h2 className="text-section uppercase font-display font-bold text-text-primary">
                Labots ar<br />Pieredzi
              </h2>
              <p className="text-body text-text-secondary mt-6 max-w-md">
                No zolēm līdz rāvējslēdzējiem — salabosim to, kas šķita neiespējams. 
                Precīzi, izturīgi, ar garantiju.
              </p>
            </div>
          </div>

          {/* Right Photo Stack */}
          <div className="hidden lg:block w-1/2 relative h-full">
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <div id="s2-card3" className="absolute w-[20vw] h-[28vh] -left-[4vw] -top-[6vh]">
                <img 
                  src="/images/stack_tools.jpg" 
                  alt="Tools" 
                  className="w-full h-full object-cover shadow-card"
                />
              </div>
              <div id="s2-card2" className="absolute w-[22vw] h-[30vh] -left-[2vw] -top-[3vh]">
                <img 
                  src="/images/stack_boot_detail.jpg" 
                  alt="Boot detail" 
                  className="w-full h-full object-cover shadow-card"
                />
              </div>
              <div id="s2-card1" className="relative w-[24vw] h-[32vh] animate-micro-float">
                <img 
                  src="/images/stack_shoe_closeup.jpg" 
                  alt="Shoe repair" 
                  className="w-full h-full object-cover shadow-card"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Pakalpojumi */}
      <section id="section3" className="section-pinned bg-paper z-30">
        <div className="absolute inset-0 px-6 lg:px-[6vw] py-[10vh]">
          <h2 id="s3-title" className="text-section uppercase font-display font-bold text-text-primary mb-8">
            Pakalpojumi
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 h-[70vh]">
            {/* Card 1 */}
            <div id="s3-card1" className="bg-white/70 p-4 lg:p-6 flex gap-4 items-start">
              <img 
                src="/images/svc_heel_thumb.jpg" 
                alt="Heel replacement" 
                className="w-24 h-24 lg:w-32 lg:h-32 object-cover flex-shrink-0"
              />
              <div>
                <h3 className="font-display font-bold text-lg lg:text-xl text-text-primary">Zoļu maiņa</h3>
                <div className="ochre-rule w-12 mt-2" />
                <p className="text-sm text-text-secondary mt-3">
                  Noņemam nodilušo zoli un uzliksim jaunu — līdzīgu vai labāku.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div id="s3-card2" className="bg-white/70 p-4 lg:p-6 flex gap-4 items-start">
              <img 
                src="/images/svc_sole_thumb.jpg" 
                alt="Sole repair" 
                className="w-24 h-24 lg:w-32 lg:h-32 object-cover flex-shrink-0"
              />
              <div>
                <h3 className="font-display font-bold text-lg lg:text-xl text-text-primary">Papēžu remonts</h3>
                <div className="ochre-rule w-12 mt-2" />
                <p className="text-sm text-text-secondary mt-3">
                  Mainām papēžus un papēžu uzgaļus, līdzsvarojam gaitu.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div id="s3-card3" className="bg-white/70 p-4 lg:p-6 flex gap-4 items-start">
              <img 
                src="/images/svc_stitch_thumb.jpg" 
                alt="Stitching repair" 
                className="w-24 h-24 lg:w-32 lg:h-32 object-cover flex-shrink-0"
              />
              <div>
                <h3 className="font-display font-bold text-lg lg:text-xl text-text-primary">Šuvju labošana</h3>
                <div className="ochre-rule w-12 mt-2" />
                <p className="text-sm text-text-secondary mt-3">
                  Izsprāgušas šuves? Pārsiesim droši un tīri.
                </p>
              </div>
            </div>

            {/* Card 4 */}
            <div id="s3-card4" className="bg-white/70 p-4 lg:p-6 flex gap-4 items-start">
              <img 
                src="/images/svc_zipper_thumb.jpg" 
                alt="Zipper repair" 
                className="w-24 h-24 lg:w-32 lg:h-32 object-cover flex-shrink-0"
              />
              <div>
                <h3 className="font-display font-bold text-lg lg:text-xl text-text-primary">Rāvējslēdzēji</h3>
                <div className="ochre-rule w-12 mt-2" />
                <p className="text-sm text-text-secondary mt-3">
                  Aizstāsim bojātu rāvējslēdzēju somās un apavos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Mēs Labojam Somas */}
      <section id="section4" className="section-pinned z-40">
        <div id="s4-image" className="absolute left-0 top-0 w-full lg:w-[46vw] h-full">
          <img 
            src="/images/bag_sewing_machine.jpg" 
            alt="Bag sewing" 
            className="w-full h-full object-cover"
          />
        </div>
        <div id="s4-panel" className="absolute right-0 top-0 w-full lg:w-[54vw] h-full bg-white/55 flex items-center">
          <div className="px-6 lg:px-[4vw] py-[8vh]">
            <h2 id="s4-headline" className="text-section uppercase font-display font-bold text-text-primary">
              Mēs Labojam<br />Somas
            </h2>
            <div className="ochre-rule w-16 mt-4" />
            <p id="s4-body" className="text-body text-text-secondary mt-6 max-w-md">
              Somas rokturi, šuves, oderes un rāvējslēdzēji — salabosim tā, lai kalpo vēl gadiem. 
              Strādājam ar ādu, tekstilu un sintētiku.
            </p>
            <button id="s4-cta" className="btn-primary mt-8 flex items-center gap-2">
              <Mail className="w-4 h-4" />
              Sūtīt foto
            </button>
          </div>
        </div>
      </section>

      {/* Section 5: Apavu Remonts */}
      <section id="section5" className="section-pinned z-50">
        <div id="s5-panel" className="absolute left-0 top-0 w-full lg:w-[54vw] h-full bg-white/55 flex items-center">
          <div className="px-6 lg:px-[4vw] py-[8vh]">
            <h2 id="s5-headline" className="text-section uppercase font-display font-bold text-text-primary">
              Apavu<br />Remonts
            </h2>
            <div className="ochre-rule w-16 mt-4" />
            <p id="s5-body" className="text-body text-text-secondary mt-6 max-w-md">
              Zoles, papēži, šuves, stiprinājumi, iekšzoles. Strādājam ar sieviešu un vīriešu apaviem, 
              klasiku un sporta stilu.
            </p>
            <button 
              id="s5-cta" 
              onClick={() => scrollToSection('section9')}
              className="btn-primary mt-8 flex items-center gap-2"
            >
              Apskatīt cenas
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
        <div id="s5-image" className="absolute right-0 top-0 w-full lg:w-[46vw] h-full">
          <img 
            src="/images/shoe_repair_closeup.jpg" 
            alt="Shoe repair" 
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* Section 6: Ātrs Remonts */}
      <section id="section6" className="section-pinned z-[60]">
        <div id="s6-image" className="absolute left-0 top-0 w-full lg:w-[46vw] h-full">
          <img 
            src="/images/fast_repair_tools.jpg" 
            alt="Fast repair" 
            className="w-full h-full object-cover"
          />
        </div>
        <div id="s6-panel" className="absolute right-0 top-0 w-full lg:w-[54vw] h-full bg-white/55 flex items-center">
          <div className="px-6 lg:px-[4vw] py-[8vh]">
            <h2 id="s6-headline" className="text-section uppercase font-display font-bold text-text-primary">
              Ātrs<br />Remonts
            </h2>
            <div className="ochre-rule w-16 mt-4" />
            <p id="s6-body" className="text-body text-text-secondary mt-6 max-w-md">
              Nepieciešams steidzami? Vienkārši salabojamie darbi — tajā pašā dienā. 
              Bez rindas, bez kavēšanās.
            </p>
            <a 
              id="s6-cta" 
              href="tel:+37126826119"
              className="btn-primary mt-8 flex items-center gap-2 inline-flex"
            >
              <Phone className="w-4 h-4" />
              Zvanīt
            </a>
          </div>
        </div>
      </section>

      {/* Section 7: Kvalitāte */}
      <section id="section7" className="section-pinned z-[70]">
        <div id="s7-panel" className="absolute left-0 top-0 w-full lg:w-[54vw] h-full bg-white/55 flex items-center">
          <div className="px-6 lg:px-[4vw] py-[8vh]">
            <h2 id="s7-headline" className="text-section uppercase font-display font-bold text-text-primary">
              Kvalitāte
            </h2>
            <div className="ochre-rule w-16 mt-4" />
            <p id="s7-body" className="text-body text-text-secondary mt-6 max-w-md">
              Mēs izvēlamies izturīgas zoles un kvalitatīvus materiālus. 
              Katrs darbs tiek pārbaudīts pirms atdošanas.
            </p>
            <button 
              id="s7-cta" 
              onClick={() => scrollToSection('section10')}
              className="btn-primary mt-8 flex items-center gap-2"
            >
              Uzzināt vairāk
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
        <div id="s7-image" className="absolute right-0 top-0 w-full lg:w-[46vw] h-full">
          <img 
            src="/images/quality_materials.jpg" 
            alt="Quality materials" 
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* Section 8: Closing Panel */}
      <section id="section8" className="section-pinned z-[80]">
        <div id="s8-bg" className="absolute inset-0">
          <img 
            src="/images/closing_workshop_wide.jpg" 
            alt="Workshop" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>
        
        <div className="absolute inset-0 flex items-center justify-center">
          <div id="s8-panel" className="bg-paper/95 p-8 lg:p-12 max-w-[min(72vw,920px)] w-full mx-6 text-center">
            <h2 id="s8-headline" className="text-section uppercase font-display font-bold text-text-primary">
              Tava Apavu<br />Darbnīca
            </h2>
            <p className="text-body text-text-secondary mt-4">
              Tērbatas iela 57 · Rīga
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <button 
                id="s8-cta1"
                onClick={() => scrollToSection('section10')}
                className="btn-primary"
              >
                Sūtīt ziņu
              </button>
              <a 
                id="s8-cta2"
                href="tel:+37126826119"
                className="btn-secondary flex items-center gap-2"
              >
                <Phone className="w-4 h-4" />
                Zvanīt
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Section 9: Pricing Details (Flowing) */}
      <section id="section9" className="relative bg-paper z-[90] py-16 lg:py-24 px-6 lg:px-[6vw]">
        <div className="max-w-6xl mx-auto">
          <div className="flowing-reveal">
            <span className="text-micro text-text-secondary block mb-4">CENAS</span>
            <h2 className="text-section uppercase font-display font-bold text-text-primary">
              Kas ietilpst remontā
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
            {/* Left Column - Sticky on desktop */}
            <div className="flowing-reveal lg:sticky lg:top-24 lg:self-start">
              <p className="text-body text-text-secondary mb-6">
                Katrs remontdarbs tiek vērtēts individuāli atkarībā no bojājuma apjoma un materiāliem. 
                Zemāk norādītas orientējošas cenas.
              </p>
              <img 
                src="/images/stack_shoe_closeup.jpg" 
                alt="Workshop" 
                className="w-full h-48 lg:h-64 object-cover"
              />
            </div>

            {/* Right Column - Service List */}
            <div className="space-y-6">
              {/* Service Group 1 */}
              <div className="flowing-reveal bg-white/50 p-6">
                <h3 className="font-display font-bold text-xl text-text-primary flex items-center justify-between">
                  Zoļu maiņa
                  <span className="text-ochre font-mono text-lg">no 18 €</span>
                </h3>
                <div className="ochre-rule w-full mt-3" />
                <ul className="mt-4 space-y-2 text-sm text-text-secondary">
                  <li>• Veikala zoles (gumijas, poliuretāna)</li>
                  <li>• Vibram zoles ( premium kvalitāte)</li>
                  <li>• Ādas zoles</li>
                  <li>• Zoles līmēšana un šūšana</li>
                </ul>
              </div>

              {/* Service Group 2 */}
              <div className="flowing-reveal bg-white/50 p-6">
                <h3 className="font-display font-bold text-xl text-text-primary flex items-center justify-between">
                  Papēžu remonts
                  <span className="text-ochre font-mono text-lg">no 8 €</span>
                </h3>
                <div className="ochre-rule w-full mt-3" />
                <ul className="mt-4 space-y-2 text-sm text-text-secondary">
                  <li>• Papēžu uzgaļu maiņa</li>
                  <li>• Papēžu pacelšana</li>
                  <li>• Papēžu līmēšana</li>
                </ul>
              </div>

              {/* Service Group 3 */}
              <div className="flowing-reveal bg-white/50 p-6">
                <h3 className="font-display font-bold text-xl text-text-primary flex items-center justify-between">
                  Rāvējslēdzēji
                  <span className="text-ochre font-mono text-lg">no 12 €</span>
                </h3>
                <div className="ochre-rule w-full mt-3" />
                <ul className="mt-4 space-y-2 text-sm text-text-secondary">
                  <li>• Rāvējslēdzēju maiņa somās</li>
                  <li>• Rāvējslēdzēju maiņa apavos</li>
                  <li>• Slīdņu nomaiņa</li>
                </ul>
              </div>

              {/* Service Group 4 */}
              <div className="flowing-reveal bg-white/50 p-6">
                <h3 className="font-display font-bold text-xl text-text-primary flex items-center justify-between">
                  Šuvju labošana
                  <span className="text-ochre font-mono text-lg">no 6 €</span>
                </h3>
                <div className="ochre-rule w-full mt-3" />
                <ul className="mt-4 space-y-2 text-sm text-text-secondary">
                  <li>• Izsprāgušu šuvju pāršūšana</li>
                  <li>• Jaunu šuvju izveide</li>
                  <li>• Dekoratīvās šuves</li>
                </ul>
              </div>

              {/* Service Group 5 */}
              <div className="flowing-reveal bg-white/50 p-6">
                <h3 className="font-display font-bold text-xl text-text-primary flex items-center justify-between">
                  Somas
                  <span className="text-ochre font-mono text-lg">pēc foto</span>
                </h3>
                <div className="ochre-rule w-full mt-3" />
                <ul className="mt-4 space-y-2 text-sm text-text-secondary">
                  <li>• Rokturu remonts</li>
                  <li>• Šuvju labošana</li>
                  <li>• Oderes maiņa</li>
                  <li>• Rāvējslēdzēju maiņa</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 10: Contact + Footer */}
      <section id="section10" className="relative bg-ink z-[100] py-16 lg:py-24 px-6 lg:px-[6vw]">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="flowing-reveal">
              <span className="text-micro text-paper-dark block mb-4">KONTAKTI</span>
              <h2 className="text-section uppercase font-display font-bold text-white mb-8">
                Sazinies ar mums
              </h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="w-5 h-5 text-ochre flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-white font-medium">Adrese</p>
                    <p className="text-paper-dark">Tērbatas iela 57, Rīga, LV-1001</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="w-5 h-5 text-ochre flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-white font-medium">Telefons</p>
                    <a href="tel:+37126826119" className="text-paper-dark hover:text-ochre transition-colors">
                      +371 26 826 119
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Clock className="w-5 h-5 text-ochre flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-white font-medium">Darba laiks</p>
                    <p className="text-paper-dark">Pr–Pk: 10:00–18:00</p>
                    <p className="text-paper-dark">Se: 10:00–14:00</p>
                  </div>
                </div>
              </div>

              <a 
                href="https://maps.google.com/?q=Tērbatas+iela+57+Rīga"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary mt-8 inline-flex items-center gap-2"
              >
                <MapPin className="w-4 h-4" />
                Atvērt kartē
              </a>
            </div>

            {/* Map */}
            <div className="flowing-reveal">
              <div className="w-full h-64 lg:h-full min-h-[300px] border-2 border-ochre">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2175.757!2d24.1287071!3d56.9572637!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46eecfcc9f6c62b5%3A0x8a101bbc47893956!2sApavu%20Darbnica%20Nr.%201.!5e0!3m2!1sen!2slv!4v1709900000000!5m2!1sen!2slv"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: 'grayscale(100%) contrast(1.1)' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Apavu Darbnīca Nr. 1 Location"
                />
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="border-t border-white/10 mt-16 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-micro text-paper-dark">
                © 2025 APAVU DARBNĪCA NR. 1
              </p>
              <div className="flex gap-6">
                <button onClick={() => scrollToSection('section3')} className="text-micro text-paper-dark hover:text-ochre transition-colors">
                  Pakalpojumi
                </button>
                <button onClick={() => scrollToSection('section9')} className="text-micro text-paper-dark hover:text-ochre transition-colors">
                  Cenas
                </button>
                <button onClick={() => scrollToSection('section10')} className="text-micro text-paper-dark hover:text-ochre transition-colors">
                  Kontakti
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
