import { ComponentFixture, fakeAsync, flush, TestBed, tick, waitForAsync } from '@angular/core/testing';
import { of } from 'rxjs';
import IPost from 'src/app/models/post.model';
import { ServiceTestingService } from '../service-testing/service-testing.service';

import { ComponentTestingComponent } from './component-testing.component';

describe('ComponentTestingComponent', () => {
  let component: ComponentTestingComponent;
  let fixture: ComponentFixture<ComponentTestingComponent>;

  describe('Testing component when posts are present', () => {

    let serviceStub;
    const posts: IPost[] = [{
      id: 1,
      userId: 2,
      title: 'My first post',
      body: 'Some description'
     }]

    beforeEach(async () => {

      serviceStub = {
        getAllPosts: () => of(posts)
      }

      await TestBed.configureTestingModule({
        declarations: [ ComponentTestingComponent ],
        providers: [{ provide: ServiceTestingService, useValue: serviceStub }]
      })
      .compileComponents();

      fixture = TestBed.createComponent(ComponentTestingComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });

    it('should add two numbers if a is not greater than b', () => {
      const result = component.addOrSubtract(2, 3);
      expect(result).toEqual(5);
    });

    it('should subtract two numbers if a is greater than b', () => {
      const result = component.addOrSubtract(10, 5);
      expect(result).toEqual(5);
    });

    it('should initialize serviceData as undefined', () => {
      expect(component.serviceData).toBeUndefined();
    });

    it('should set value for serviceData on init when timer is over', fakeAsync(() => {
      component.ngOnInit();
      tick(500)
      expect(component.serviceData).not.toBeUndefined();
      flush();
    }));

    // alternative to fakeAsync
    it('should set value for serviceData on init when timer is over with waitForAsync', waitForAsync(async () => {
      component.ngOnInit();
      await fixture.whenStable();
      expect(component.serviceData).not.toBeUndefined();
    }));

    it('should unsubscribe from the observable when directive is destroyed', () => {
      const unsubscriberSpy = spyOn(component.unsubscriber$, 'complete');
      component.ngOnDestroy();
      expect(unsubscriberSpy).toHaveBeenCalled();
    });

  })

  describe('Testing component when there are no posts', () => {

    let serviceStub;

    beforeEach(async () => {

      serviceStub = {
        getAllPosts: () => of([])
      }

      await TestBed.configureTestingModule({
        declarations: [ ComponentTestingComponent ],
        providers: [{ provide: ServiceTestingService, useValue: serviceStub }]
      })
      .compileComponents();

      fixture = TestBed.createComponent(ComponentTestingComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should not set value for serviceData if posts array is empty', fakeAsync(() => {
      component.ngOnInit();
      tick(500)
      expect(component.serviceData).toBeUndefined();
      flush();
    }));

  })

});
