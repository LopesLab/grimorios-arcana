import { TestBed } from '@angular/core/testing';
import { App } from './app';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render the character creation heading', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Desperte o seu mago');
  });

  it('starts empty and swaps occupied attribute values intelligently', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app.attributes()).toEqual({ power: 0, control: 0, dexterity: 0, will: 0, vitality: 0 });

    const change = (value: number) => ({ target: { value: String(value) } }) as unknown as Event;
    app.setAttribute('power', change(16));
    app.setAttribute('control', change(14));
    app.setAttribute('control', change(16));

    expect(app.attributes()).toEqual({ power: 14, control: 16, dexterity: 0, will: 0, vitality: 0 });
  });
});
