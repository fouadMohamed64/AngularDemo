import { Component } from '@angular/core';
import { PormotionAdsService } from '../../Services/pormotion-ads.service';
import { filter, retry, skip, Subscription, take } from 'rxjs';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css'
})
export class AboutUsComponent {

  adsSubscription!: Subscription

  constructor(private pormotionAdsService: PormotionAdsService) { }

  ngOnInit() {
    // this.adsSubscription = this.pormotionAdsService.getAds().subscribe({
    //   next: (data) => console.log(data),
    //   error: (error) => console.log(error),
    //   complete: () => console.log('Compoleted...')
    // })
    // this.pormotionAdsService.getAds().subscribe((data)=>{})

    // this.pormotionAdsService.getMoreAds().pipe(skip(1), take(1)).subscribe((data)=>{
    // this.pormotionAdsService.getMoreAds().pipe(filter((ele) => ele.includes('Four'))).subscribe((data)=>{
    this.pormotionAdsService.getMoreAds().pipe(retry(4)).subscribe((data) => {
      console.log(data);
    })

  }

  // ngOnDestroy(){
  //   this.adsSubscription.unsubscribe()
  // }

}
