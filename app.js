function IMC()
{
    const Nome = document.getElementById('Nome').value;
    const Peso = document.getElementById('Peso').value;
    const Altura = document.getElementById('Altura').value;

    var sexoMasculino = document.getElementById('sexoMasculino');
    var sexoFeminino = document.getElementById('sexoFeminino');
    var sexo;

    let resultado;

    if(sexoMasculino.Checked)
    {
        sexo = "M";
    }
    
    else if (sexoFeminino.Checked)
    {
        sexo = "F";
    }

    //calculo imc com base no sexo do usuario

    if(sexo = "M")
    {
        var imcM = Peso / ( Altura * Altura);

        if(imcM <= 20.7)
        {
            document.getElementById('imcH').innerHTML = ("O Senhor " +Nome+ " está abaixo do peso");
        }
        else if (imcM > 20.7 & imcM <= 26.4)
        {
            document.getElementById('imcH').innerHTML = ("O Senhor " +Nome+ " está no peso ideal");
        }
        else if (imcM > 26.4 & imcM < 27.8)
        {
            document.getElementById('imcH').innerHTML = ("O Senhor " +Nome+ " está marginalmente acima do peso");
        }
        else if (imcM > 27.8 & imcM < 31.1)
        {
            document.getElementById('imcH').innerHTML = ("O Senhor " +Nome+ " está acima do peso ideal");
        }
        else if (imcM > 31.1)
        {
            document.getElementById('imcH').innerHTML = ("O Senhor " +Nome+ " está no estágio de obsidade");
        }      
    }

    if ( sexo = "F")
    {
        var imcF = Peso / (Altura * Altura);

        if(imcF <=19.1)
        {
            document.getElementById('imchF').innerHTML = ("A Senhora " +Nome+ " está abaixo do peso");
        }
        else if (imcF > 19.1 & imcF <= 25.8)
        {
            document.getElementById('imchF').innerHTML = ("A Senhora " +Nome+ " está no peso ideal");
        }
        else if (imcF > 25.8 & imcF <=27.3)
        {
            document.getElementById('imchF').innerHTML = ("A Senhora " +Nome+ " está marginalmente acima do peso");
        }
        else if (imcF > 27.3 & imcF <= 32.3)
        {
            document.getElementById('imchF').innerHTML = ("A Senhora " +Nome+ " está acima do peso ideal");
        }
        else if (imcF > 32.3)
        {
            document.getElementById('imchF').innerHTML = ("A Senhora " +Nome+ " está no estágio de obsidade");
        } 
    }

    function calcularIMC(peso, altura) {
        const imc = peso / (altura * altura);
        return imc.toFixed(2);
    }
    
    function pesoIdeal(altura) {
        
        const pesoMinimoM = 18.5 * (altura * altura);
        const pesoMaximoM = 24.9 * (altura * altura);
        return { pesoMinimoM: pesoMinimoM.toFixed(2), pesoMaximoM: pesoMaximoM.toFixed(2) };
    }
    
    function analisarIMC(peso, altura) {
        const imc = calcularIMC(peso, altura);
        const { pesoMinimo, pesoMaximo } = pesoIdeal(altura);
    
        if (imc < 18.5) {
            const pesoNecessario = (pesoMinimo - peso).toFixed(2);
            console.log(`Seu IMC é ${imc}. Você está abaixo do peso. Precisa ganhar aproximadamente ${pesoNecessario} Kg para atingir o peso ideal.`);
        } else if (imc > 24.9) {
            const pesoNecessario = (peso - pesoMaximo).toFixed(2);
            console.log(`Seu IMC é ${imc}. Você está acima do peso. Precisa perder aproximadamente ${pesoNecessario} Kg para atingir o peso ideal.`);
        } else {
            console.log(`Seu IMC é ${imc}. Você está no peso ideal.`);
        }
    }
    
}