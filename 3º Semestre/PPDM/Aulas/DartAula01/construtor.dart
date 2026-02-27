class Animal{
    // Atributos
    int id = 0;
    String nome = '';
    String especie = '';
    String raca = '';
    double peso = 0.0;
    // Métodos
    Animal(this.id, this.nome, this.especie, this.raca, this.peso);
    String tudoJunto(){
        return "$id, $nome, $especie, $raca, $peso";
    }
}

void main(){
    Animal boi = new Animal(1, "Bandido", "Bovino", "Nelore", 499.99);
    Animal cavalo = new Animal(2, "Trovão", "Equino", "Mangalarga", 420.50);
    Animal cachorro = new Animal(3, "Rex", "Canino", "Pastor Alemão", 35.80);
    Animal gato = new Animal(4, "Mimi", "Felino", "Siamês", 4.30);
    Animal porco = new Animal(5, "Bacon", "Suíno", "Large White", 150.00);
    Animal galinha = new Animal(6, "Carijó", "Ave", "Caipira", 2.50);
    Animal cabra = new Animal(7, "Luna", "Caprino", "Saanen", 65.40);
    Animal ovelha = new Animal(8, "Nuvem", "Ovino", "Dorper", 80.75);
    Animal pato = new Animal(9, "Donald", "Ave", "Pekin", 3.20);
    Animal coelho = new Animal(10, "Bolinha", "Lagomorfo", "Angorá", 2.10);

    print(boi.tudoJunto());
    print(cavalo.tudoJunto());
    print(cachorro.tudoJunto());
    print(gato.tudoJunto());
    print(porco.tudoJunto());
    print(galinha.tudoJunto());
    print(cabra.tudoJunto());
    print(ovelha.tudoJunto());
    print(pato.tudoJunto());
    print(coelho.tudoJunto());
}

