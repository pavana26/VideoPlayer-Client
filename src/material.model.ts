import { NgModule } from "@angular/core";
import {MatInputModule} from '@angular/material/input'
import {MatSelectModule} from '@angular/material/select'
import {MatCardModule} from '@angular/material/card'
import {MatButtonModule} from '@angular/material/button'

@NgModule({
    exports: [
        MatInputModule,
        MatSelectModule,
        MatCardModule,
        MatButtonModule
    ]
})

export class MaterialModule {}