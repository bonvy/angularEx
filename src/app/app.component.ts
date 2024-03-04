import {Component, OnInit} from '@angular/core';
import {LoadInfoService} from "./load-info.service";
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";
import {debounceTime, filter} from "rxjs";
import {Router, RouterOutlet} from "@angular/router";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.less'
})
export class AppComponent {




}
