# Engine: Devre

Author: Ömer Faruk Tutkun

Home: https://github.com/OmerFarukTutkun/Devre

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 7.0 | 2026-08-07 | 3420<sub>(+257) | 3341<sub>(-124) | 3459<sub>(-73) |  |
| 6.0 | 2024-08-10 | 3163 | 3465 | 3532 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 7.0 | 2026-08-07 | 3221<sub>(-122) | 3168<sub>(-424) | 2828<sub>(-813) |  |
| 6.0 | 2024-08-10 | 3343 | 3592 | 3641 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 7.0 | 2026-08-07 | 3386<sub>(+186) | 3532<sub>(+121) | 3559<sub>(+107) |  |
| 6.0 | 2024-08-10 | 3200 | 3411 | 3452 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Devre+<version>&body=###%20Engine%20name%0ADevre%0A%0A###%20Version%0A7.0" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU for P1: Intel(R) Core(TM) Ultra 7 265T (1.50 GHz) - P-Core<br>
CPU for E1: Intel(R) Core(TM) Ultra 7 265T (1.50 GHz) - E-Core<br>
CPU for T1: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-11-12 05:37:38

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["6.0", "7.0"]
  y-axis "Elo Rating" 2800 --> 3700
  line "E1: STC (8.0+0.08s)" [3163, 3420]
  line "E1: LTC (60.0+0.60s)" [3465, 3341]
  line "E1: VLTC (2m24s+1.12s)" [3532, 3459]
  line "P1: STC (8.0+0.08s)" [3343, 3221]
  line "P1: LTC (60.0+0.60s)" [3592, 3168]
  line "P1: VLTC (2m24s+1.12s)" [3641, 2828]
```



## Ratings Verlauf T1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["6.0", "7.0"]
  y-axis "Elo Rating" 3200 --> 3600
  line "T1: STC (8.0+0.08s)" [3200, 3386]
  line "T1: LTC (60.0+0.60s)" [3411, 3532]
  line "T1: VLTC (2m24s+1.12s)" [3452, 3559]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 7.0 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3459 | 254 | 16 | 100% | 2722 | 0% |
|  |  | T1 | 3559 | 30 | 258 | 51% | 3545 | 84% |
|  |  | P1 | 2828 | 198 | 4 | 50% | 2828 | 100% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 3341 | 178 | 16 | 91% | 2823 | 19% |
|  |  | T1 | 3532 | 26 | 346 | 51% | 3511 | 81% |
|  |  | P1 | 3168 | 230 | 8 | 94% | 2773 | 13% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 3420 | 136 | 16 | 66% | 3266 | 44% |
|  |  | T1 | 3386 | 26 | 378 | 54% | 3339 | 70% |
|  |  | P1 | 3221 | 152 | 8 | 63% | 3162 | 75% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 6.0 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3532 | 25 | 382 | 50% | 3534 | 73% |
|  |  | T1 | 3452 | 32 | 244 | 49% | 3456 | 76% |
|  |  | P1 | 3641 | 35 | 196 | 49% | 3648 | 75% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3411 | 30 | 286 | 50% | 3411 | 71% |
|  |  | P1 | 3592 | 32 | 242 | 49% | 3600 | 75% |
|  |  | E1 | 3465 | 26 | 378 | 48% | 3478 | 74% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 3200 | 32 | 268 | 48% | 3213 | 61% |
|  |  | P1 | 3343 | 31 | 276 | 49% | 3352 | 62% |
|  |  | E1 | 3163 | 25 | 444 | 45% | 3204 | 52% |