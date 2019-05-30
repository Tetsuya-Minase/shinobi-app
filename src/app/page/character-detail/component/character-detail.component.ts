import {Component, OnDestroy, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import {CharacterDetailService} from '../service/character-detail.service';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';


@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.scss']
})
export class CharacterDetailComponent implements OnInit, OnDestroy {
  public ryuha = '';
  public selectList: Array<string> = ['流派を選択', '斜歯忍軍', '鞍馬神流', 'ハグレモノ', '比良坂機関', '私立御斎学園', '隠忍の血統'];

  // formGroup
  public basicInfoGroup = new FormGroup({
    playerName: new FormControl('', [
      Validators.required
    ]),
    characterName: new FormControl('', [
      Validators.required
    ]),
    kana: new FormControl('', [
      // Validators.required
    ]),
    regulation: new FormControl('', [
      // Validators.required
    ]),
    type: new FormControl('', [
      // Validators.required
    ]),
    kairyuha: new FormControl('', [
      // Validators.required
    ]),
    enemy: new FormControl('', [
      // Validators.required
    ]),
    rank: new FormControl('', [
      // Validators.required
    ]),
    achievement: new FormControl('', [
      // Validators.required
    ]),
    age: new FormControl('', [
      // Validators.required
    ]),
    gender: new FormControl('', [
      // Validators.required
    ]),
    face: new FormControl('', [
      // Validators.required
    ]),
    ryugi: new FormControl('', [
      // Validators.required
    ]),
    belief: new FormControl('', [
      // Validators.required
    ])
  });

  public characterData;
  // public displayArtsList;
  // public backgroundList;
  // public secretsList;
  // public gridList;
  private characterData$ = this.characterDetailService.characterData$;
  private displayArtsList$ = this.characterDetailService.displayArtsList$;
  private backgroundList$ = this.characterDetailService.backgroundList$;
  private secretsList$ = this.characterDetailService.secretsList$;
  private gridList$ = this.characterDetailService.selectedSkillList$;
  private onDestroy$ = new Subject();

  constructor(
    private characterDetailService: CharacterDetailService
  ) {
    this.characterData$
      .pipe(takeUntil(this.onDestroy$))
      .subscribe(c => this.characterData = c);
    // this.displayArtsList$
    //   .pipe(takeUntil(this.onDestroy$))
    //   .subscribe(dl => this.characterData.dispArtsArray = dl);
    // this.backgroundList$
    //   .pipe(takeUntil(this.onDestroy$))
    //   .subscribe(bl => this.characterData.background = bl);
    // this.secretsList$
    //   .pipe(takeUntil(this.onDestroy$))
    //   .subscribe(sl => this.characterData.secrets = sl);
    // this.gridList$
    //   .pipe(takeUntil(this.onDestroy$))
    //   .subscribe(gl => this.characterData.selectedSkillList = gl);
  }

  public ngOnInit() {
  }

  public changeRyuha(target: string) {
    this.ryuha = target;
  }

  /**
   * キャラクターデータ登録
   */
  public registerCharacter(): void {
    this.characterDetailService.updateCharacterData(this.basicInfoGroup.value);
    this.characterDetailService.registerCharacter()
      .then(() => window.alert('登録しました。'))
      .catch(e => '登録に失敗しました。');
  }

  /**
   * フォームから対象取得
   * @param name キー名
   */
  public getForm(name: string): AbstractControl {
    return this.basicInfoGroup.get(name);
  }

  ngOnDestroy(): void {
    this.onDestroy$.next();
  }
}
