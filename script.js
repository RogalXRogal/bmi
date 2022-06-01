function Witaj(){
    let imie = document.getElementById("imie").value;
    //alert(imie);
    document.getElementById("wybor").innerHTML = "Wybierz kolor tła" + " " + imie;

}

function ZmienKolor(){
    let kol = document.getElementById("kol").value;
    alert(kol);
    document.getElementById("blok1").style.backgroundColor = kol;


}

function Oblicz(){
    let wzrost = parseFloat(document.getElementById("pwzrost").value);
    let waga = parseFloat(document.getElementById("pwaga").value);
    //alert(wzrost + typeof(wzrost));
    if (isNaN(wzrost) || isNaN(waga)){
        alert("Błędne dane");
        return;
    }

    let bmi = waga/(wzrost*wzrost);
    bmi = Math.round(bmi*10)/10;
    document.getElementById("wynik").innerHTML = "<h2>Twoje BMI wynosi" + " " + bmi + "</h2>";
    
    
    if(bmi < 16){
        document.getElementById("wynik").innerHTML += "Jesteś wygłodzony!";
        document.getElementById("rady").innerHTML += "Zaleca się, by początkowo menu było niskoenergetyczne, a pokarmy miały postać płynno-papkową. Stopniowo do jadłospisu wprowadza się produkty zawierające większe ilości kalorii, bogate w białko (najlepiej pochodzenia zwierzęcego) i węglowodany.";
        document.getElementById("oblicz").disabled = true;
        document.getElementById("przycisk_reset").disabled = false;
    }

    if(bmi>=16 && bmi<=16.99){
        document.getElementById("wynik").innerHTML += "Jesteś wychudzony!";
        document.getElementById("rady").innerHTML += "Walka z wychudzeniem polega na usunięciu jego przyczyn i stosowaniu odpowiedniego odżywiania, w którym powinno być więcej kalorii i pełnowartościowego białka, witamin i składników mineralnych.";
        document.getElementById("oblicz").disabled = true;
        document.getElementById("przycisk_reset").disabled = false;
    }

    if(bmi>=17.0 && bmi<=18.49){
        document.getElementById("wynik").innerHTML += "Masz niedowage!";
        document.getElementById("rady").innerHTML += "Dostarczaj więcej energii niż potrzebuje organizm. Należy stopniowo zwiększać ilość kalorii w diecie, aby układ pokarmowy powoli przyzwyczaił się do zwiększonej ilości pokarmu. W zależności od dotychczasowego żywienia może to być dodatkowe 300–500 kcal na dzień.";
        document.getElementById("oblicz").disabled = true;
        document.getElementById("przycisk_reset").disabled = false;
    }

    if(bmi>=18.5 && bmi<=24.99){
        document.getElementById("wynik").innerHTML += "Jesteś w optymalnym zagresie! Oby tak dalej!";
        document.getElementById("rady").innerHTML += "Utrzymuj ten zakres dalej, dobra robota.";
        document.getElementById("oblicz").disabled = true;
        document.getElementById("przycisk_reset").disabled = false;
    }

    if(bmi>=25 && bmi<=29.99){
        document.getElementById("wynik").innerHTML += "Masz nadwagę! Uważaj!";
        document.getElementById("rady").innerHTML += "Staraj się jeść dobre kalorie i unikaniu złych kalorii. Dobre kalorie to takie, które hamują tworzenie tłuszczu i likwidują uczucie głodu. Powinny mieć niski indeks glikemiczny. Złe kalorie to te, które przyśpieszają odkładanie się tkanki tłuszczowej. Dodatkowo więcej się ruszaj.";
        document.getElementById("oblicz").disabled = true;
        document.getElementById("przycisk_reset").disabled = false;
    }

    if(bmi>=30 && bmi<=34.99){
        document.getElementById("wynik").innerHTML += "Otyłość I stopnia";
        document.getElementById("rady").innerHTML += "Leczenia otyłości związane jest przede wszystkim z wprowadzeniem odpowiedniej diety, która jest uboga energetycznie. Celem jest wytworzenie bilansu energetycznego o wartości ujemnej, należy także zadbać, aby w diecie ograniczone zostały cukry i tłuszcze.";
        document.getElementById("oblicz").disabled = true;
        document.getElementById("przycisk_reset").disabled = false;
    }

    if(bmi>=35 && bmi<=39.99){
        document.getElementById("wynik").innerHTML += "Otyłość II stopnia";
        document.getElementById("rady").innerHTML += "Jeżeli forma leczenia w postaci restrykcyjnych diet i ćwiczeń zawodzi w okresie dłuższym niż 3-6 miesięcy to pacjentom rekomenduje się przeprowadzenie zabiegu operacyjnego, którego wybór poprzedzony jest wnikliwą analizą badań i zrealizowanych konsultacji specjalistycznych.";
        document.getElementById("oblicz").disabled = true;
        document.getElementById("przycisk_reset").disabled = false;

    }

    if(bmi>=40){
        document.getElementById("wynik").innerHTML += "Otyłość III stopnia";
        document.getElementById("rady").innerHTML += "Ten stopień otyłości zawsze wymaga interwencji chirurgicznej. Leczenie operacyjne jest zalecane u pacjentów z 3 stopniem otyłości nawet bez chorób współistniejących.";
        document.getElementById("oblicz").disabled = true; 
        document.getElementById("przycisk_reset").disabled = false;
    }
}