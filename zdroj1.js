#Co sem dám
# vlastně
  getHero(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
  }
  Array x = 5;
  long i = 79879;
  String pepa = "Pepa";
<<<<<<< develop
  
=======
  String model1 = "vůbec neomotal";
>>>>>>> local
