/**
 * eje
 */
public class Ejemplo {
    public static void main(String[] args) {
        int salary = 1000;

        salary = salary + 200;
        System.out.println(salary);

        salary = salary - 50;
        System.out.println(salary);

        salary = salary + (30 * 2) - 45;
        System.out.println(salary);

        // actualizando cadenas de texto
        String employeeName = "Iwinser";
        employeeName = employeeName + " Sanchez";
        System.out.println("tu nombre es: " + employeeName);

        //camel case
        String fullName = "Iwinser Aljadys Sanchez";
        int sizeInCentimeters = 50;
        System.out.println(fullName + sizeInCentimeters);

        //char
        //utiliza comilllas simples al final

        var salario = 1000;
        var pension = salario*0.03;

        System.out.println(salario);
        System.out.println(pension);
        
    }
}
