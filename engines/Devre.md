# Engine: Devre

Author: Ömer Faruk Tutkun

Home: https://github.com/OmerFarukTutkun/Devre

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 7.0 | 2026-08-07 | 3382<sub>(+270) | 3521<sub>(+114) | 3630<sub>(+156) |  |
| 6.0 | 2024-08-10 | 3112 | 3407 | 3474 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 7.0 | 2026-08-07 | 3355<sub>(+226) | 3490<sub>(+112) | 3445<sub>(+19) |  |
| 6.0 | 2024-08-10 | 3129 | 3378 | 3426 |  |
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

Generated: 2026-11-15 05:37:46

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["6.0", "7.0"]
  y-axis "Elo Rating" 3100 --> 3700
  line "E1: STC (8.0+0.08s)" [3112, 3382]
  line "E1: LTC (60.0+0.60s)" [3407, 3521]
  line "E1: VLTC (2m24s+1.12s)" [3474, 3630]
  line "P1: STC (8.0+0.08s)" [3129, 3355]
  line "P1: LTC (60.0+0.60s)" [3378, 3490]
  line "P1: VLTC (2m24s+1.12s)" [3426, 3445]
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
| 7.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3559 | 30 | 258 | 51% | 3545 | 84% |
|  |  | P1 | 3445 | 136 | 20 | 83% | 3097 | 35% |
|  |  | E1 | 3630 | 108 | 36 | 69% | 3173 | 33% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3532 | 26 | 346 | 51% | 3511 | 81% |
|  |  | P1 | 3490 | 231 | 16 | 97% | 2861 | 6% |
|  |  | E1 | 3521 | 106 | 36 | 81% | 3089 | 39% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 3386 | 26 | 378 | 54% | 3339 | 70% |
|  |  | P1 | 3355 | 124 | 18 | 69% | 3204 | 50% |
|  |  | E1 | 3382 | 69 | 56 | 58% | 3303 | 63% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 6.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3452 | 32 | 244 | 49% | 3456 | 76% |
|  |  | P1 | 3426 | 35 | 196 | 49% | 3433 | 75% |
|  |  | E1 | 3474 | 25 | 390 | 50% | 3475 | 73% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3411 | 30 | 286 | 50% | 3411 | 71% |
|  |  | P1 | 3378 | 32 | 242 | 49% | 3386 | 75% |
|  |  | E1 | 3407 | 25 | 390 | 49% | 3418 | 74% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 3200 | 32 | 268 | 48% | 3213 | 61% |
|  |  | P1 | 3129 | 31 | 280 | 49% | 3137 | 62% |
|  |  | E1 | 3112 | 25 | 452 | 44% | 3154 | 52% |