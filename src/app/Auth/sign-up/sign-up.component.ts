import { Component, OnInit } from '@angular/core';
import {MdbModalService} from "mdb-angular-ui-kit/modal";
import {FormBuilder, FormControl, FormGroup, Validator, Validators} from "@angular/forms";
import {RegisterUserDto} from "../shared/registerUser.dto";
import {AuthService} from "../shared/auth.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit{
  RegForm: FormGroup;
  nameList = ['Time','Past','Future','Dev', 'Fly','Flying','Soar','Soaring','Power','Falling', 'Fall','Jump','Cliff','Mountain','Rend','Red','Blue', 'Green','Yellow','Gold','Demon','Demonic','Panda','Cat', 'Kitty','Kitten','Zero','Memory','Trooper','XX','Bandit', 'Fear','Light','Glow','Tread','Deep','Deeper','Deepest', 'Mine','Your','Worst','Enemy','Hostile','Force','Video', 'Game','Donkey','Mule','Colt','Cult','Cultist','Magnum', 'Gun','Assault','Recon','Trap','Trapper','Redeem','Code', 'Script','Writer','Near','Close','Open','Cube','Circle', 'Geo','Genome','Germ','Spaz','Shot','Echo','Beta','Alpha', 'Gamma','Omega','Seal','Squid','Money','Cash','Lord','King', 'Duke','Rest','Fire','Flame','Morrow','Break','Breaker','Numb', 'Ice','Cold','Rotten','Sick','Sickly','Janitor','Camel','Rooster', 'Sand','Desert','Dessert','Hurdle','Racer','Eraser','Erase','Big', 'Small','Short','Tall','Sith','Bounty','Hunter','Cracked','Broken', 'Sad','Happy','Joy','Joyful','Crimson','Destiny','Deceit','Lies', 'Lie','Honest','Destined','Bloxxer','Hawk','Eagle','Hawker','Walker', 'Zombie','Sarge','Capt','Captain','Punch','One','Two','Uno','Slice','Slash','Melt','Melted','Melting','Fell','Wolf','Hound','Legacy','Sharp','Dead','Mew','Chuckle','Bubba','Bubble','Sandwich','Smasher','Extreme','Multi','Universe','Ultimate','Death','Ready','Monkey','Elevator','Wrench','Grease','Head','Theme','Grand','Cool','Kid','Boy','Girl','Vortex','Paradox'];
  finalName = "";
  constructor(private fb : FormBuilder, private _auth: AuthService, private router: Router) {
    this.RegForm = this.fb.group({
      email: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.minLength(8), Validators.required]],
      password2: ['', [Validators.minLength(8), Validators.required]],
      tos: ['', [Validators.requiredTrue]]
    });
  }

  ngOnInit(): void {

  }

  onSubmit() {
    if(this.RegForm.get('password')?.value == this.RegForm.get('password2')?.value) {
      const username = this.randName();
      const userdto = {username: username,
                       email: this.RegForm.get('email')?.value,
                       password: this.RegForm.get('password')?.value} as RegisterUserDto;
      console.log(username);
      this._auth.register(userdto);
      //this.router.navigate(['/auth/sign-up/success']);
    }
  }

  randName() : string{
    this.finalName = this.nameList[Math.floor( Math.random() * this.nameList.length )];
    this.finalName += this.nameList[Math.floor( Math.random() * this.nameList.length )];
    if ( Math.random() > 0.5 ) {
      this.finalName += this.nameList[Math.floor( Math.random() * this.nameList.length )];
    }
    return this.finalName;
  }
}
