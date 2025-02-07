namespace PostulacionDocente.Services;
public class AritmeticaService{
    public double Suma(double a, double b){
        if(a < 0 || b < 0){
            System.Console.WriteLine("NO");
            return 0;
        }
        return a + b;
    }
}