void main(){
    String texto = "Alô mundo!";
    int numero = 999999999999999888;
    double n = 3.14;
    bool ativo = true;
    var coisa = "Texto";
    dynamic tudo = "oi";

    print(texto);
    print(numero);
    print("Real = "+n.toString());
    print(ativo?"Oi":"Tchau");
    print(coisa);
    print(tudo);
    tudo = 500;
    print(tudo);
}