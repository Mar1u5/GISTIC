import { Injectable } from '@angular/core';

@Injectable()
export class pacientesService{
    //pacientes = ["paciente 1", "paciente 2", "paciente 3","paciente 4","paciente 5","paciente 6","paciente 7","paciente 8","paciente 9", "paciente 10"];
    pacientes = [
        {nombre: 'Paciente1', pastillas:[ 
            {nombre:'Omeprazol', color:'Verde', cantidad:'1', dia: '', franja:'' },
            {nombre:'Paracetamol', color:'Rojo', cantidad:'0.5', dia: '', franja:'' }
        ] },
        {nombre: 'Paciente2', pastillas:[ 
            {nombre:'Omeprazol', color:'Verde', cantidad:'1', dia: '', franja:'' },
            {nombre:'Paracetamol', color:'Rojo', cantidad:'0.5', dia: '', franja:'' }
        ] }
    ];
    
    
    public getPacientes(){
        return this.pacientes;
    }
    public addPaciente(paciente){
        this.pacientes.push({nombre: paciente, pastillas:[ {nombre:'', color:'', cantidad:'', dia: '', franja:'' }]});
    }
    public deletePaciente(paciente){
        for(let i=0; i < this.pacientes.length; i++){
            if(this.pacientes[i].nombre == paciente.nombre){
                this.pacientes.splice(i, 1);
            }
        }
    }
    public addPastillas(paciente,pastilla){
        for(let i=0; i < this.pacientes.length; i++){
            if(this.pacientes[i].nombre == paciente.nombre){
                this.pacientes[i].pastillas.push(pastilla);
            }
        }
    }
    public deletePastilla(paciente, pastilla){
        for(let i=0; i < this.pacientes.length; i++){
            if(this.pacientes[i].nombre == paciente.nombre){
                for(let j=0; j < this.pacientes[i].pastillas.length; j++){
                    if(this.pacientes[i].pastillas[j].nombre == pastilla.nombre){
                        this.pacientes[i].pastillas.splice(j, 1);
                    }
                }
            }
        }
    }

}