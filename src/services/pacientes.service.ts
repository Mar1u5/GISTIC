import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class pacientesService{

    constructor(public afDB: AngularFireDatabase){}
    //pacientes = ["paciente 1", "paciente 2", "paciente 3","paciente 4","paciente 5","paciente 6","paciente 7","paciente 8","paciente 9", "paciente 10"];
    
    pacientes = [{id: 123 ,nombre: 'Paciente1', pastillas:[
        {nombre_p: 'Omeprazol', color: 'Verde', cantidad: '2', dia:[
            {nombre_d: 'Lunes', franja: [
                {nombre_f: 'Desayuno', tomado: false}
            ]}
        ]}
    ]}];
    
    
    
    /*pacientes = [
        {id: 123 ,nombre: 'Paciente1', pastillas:[ 
            {id_pastilla: 1, tomas: [
                {id_tomado: 345}
            ]}
        ] }
    ];*/

    pastillas = [
        {nombre:'Omeprazol'},
        {nombre:'Nolotil'},
        {nombre:'Diazepan'},
        {nombre:'Aspirina'},
        {nombre:'Dalsi'},
        {nombre:'Ibuprofeno'}
    ];

    tomas = [
        {id_tomado: 345, cantidad: 1,dia: 'Miercoles', franja: 'Desayuno', tomado: false}
    ];

    //public pacientes;
    
    
    public getPacientes(){
        
        return this.pacientes;

        //return this.afDB.list('pacientes').valueChanges();
        
    }

    public getPastillas(){
        return this.pastillas;
    }


    public addPaciente(paciente){
        //this.afDB.database.ref('pacientes/'+paciente.id).set(paciente);
        this.pacientes.push(paciente);
    }
    public deletePaciente(paciente){
        for(let i=0; i < this.pacientes.length; i++){
            if(this.pacientes[i].id == paciente.id){
                this.pacientes.splice(i, 1);
            }
        }
    }
    public addPastillas(paciente,pastilla){
              
        for(let i=0; i < this.pacientes.length; i++){
            if(this.pacientes[i].id == paciente.id){
                        this.pacientes[i].pastillas.push(pastilla);
                        
                    
            }
        }
    }
    public deletePastilla(paciente, pastilla){
        for(let i=0; i < this.pacientes.length; i++){
            if(this.pacientes[i].nombre == paciente.nombre){
                for(let j=0; j < this.pacientes[i].pastillas.length; j++){
                    if(this.pacientes[i].pastillas[j].nombre_p == pastilla.nombre_p){
                        this.pacientes[i].pastillas.splice(j, 1);
                    }
                }
            }
        }
    }

    public tomado(paciente, pastilla, dia, franja){

        for(let i=0; i < this.pacientes.length; i++){
            if(this.pacientes[i].id == paciente.id){
                for(let j=0; j < this.pacientes[i].pastillas.length; j++){
                    
                    if(this.pacientes[i].pastillas[j].nombre_p == pastilla.nombre_p){
                        for(let k=0; k < this.pacientes[i].pastillas[j].dia.length; k++){
                            if(this.pacientes[i].pastillas[j].dia[k].nombre_d == dia.nombre_d){
                                for(let t=0; t < this.pacientes[i].pastillas[j].dia[k].franja.length; t++){
                                    if(this.pacientes[i].pastillas[j].dia[k].franja[t].nombre_f == franja.nombre_f){
                                        this.pacientes[i].pastillas[j].dia[k].franja[t].tomado = !this.pacientes[i].pastillas[j].dia[k].franja[t].tomado;
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }

}