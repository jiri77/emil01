#Co sem dám
# vlastně
  getHero(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
# vlastně
  }
<<<<<<< HEAD
i long = 798798;
=======
  Array x = 5;
  long i = 79879;
  String pepa = "Pepa";
  
>>>>>>> druhý z vs do master
