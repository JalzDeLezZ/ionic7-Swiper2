startSlideAutoPlayTimer() {
  this.autoPlaySubscription = this.isPaused$
    .pipe(
      switchMap((isPaused) => {
        return isPaused
          ? EMPTY
          : interval(1000).pipe(
              takeUntil(this.onDestroy$),
              takeWhile(() => this.progress < 1),
              filter(() => this.progress < 1),
              skipWhile(() => this.isPaused$.value),
              skipUntil(this.isPaused$.pipe(filter((paused) => !paused)))
            );
      })
    )
    .subscribe(() => {
      this.progress += 0.01;

      // Reset the progress bar when it reaches 100%
      // to continuously show the demo
      if (this.progress > 1) {
        setTimeout(() => {
          // this.progress = 0;
          this.swiper.slideNext();
        }, 1000);
      }
    });
}