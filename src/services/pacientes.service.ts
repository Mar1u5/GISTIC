import { Injectable } from '@angular/core';

@Injectable()
export class pacientesService{
    pacientes = ["paciente 1", "paciente 2", "paciente 3","paciente 4","paciente 5","paciente 6","paciente 7","paciente 8","paciente 9", "paciente 10"];

    public getPacientes(){
        return this.pacientes;
    }
    public addPaciente(paciente){
        this.pacientes.push(paciente);
    }
    public deletePaciente(paciente){
        for(let i=0; i < this.pacientes.length; i++){
            console.log(this.pacientes[i]);
            if(this.pacientes[i] == paciente){
                this.pacientes.splice(i, 1);
            }
        }
    }

}