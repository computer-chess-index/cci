# Engine: Devre

Author: Ömer Faruk Tutkun

Home: https://github.com/OmerFarukTutkun/Devre

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 7.0 | 2026-08-07 | 3382<sub>(+261) | 3537<sub>(+117) | 3629<sub>(+145) |  |
| 6.0 | 2024-08-10 | 3121 | 3420 | 3484 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 7.0 | 2026-08-07 | 3347<sub>(+218) | 3502<sub>(+127) | 3534<sub>(+108) |  |
| 6.0 | 2024-08-10 | 3129 | 3375 | 3426 |  |
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

Generated: 2026-11-17 05:37:54

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["6.0", "7.0"]
  y-axis "Elo Rating" 3100 --> 3700
  line "E1: STC (8.0+0.08s)" [3121, 3382]
  line "E1: LTC (60.0+0.60s)" [3420, 3537]
  line "E1: VLTC (2m24s+1.12s)" [3484, 3629]
  line "P1: STC (8.0+0.08s)" [3129, 3347]
  line "P1: LTC (60.0+0.60s)" [3375, 3502]
  line "P1: VLTC (2m24s+1.12s)" [3426, 3534]
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
|  |  | P1 | 3534 | 109 | 28 | 77% | 3237 | 46% |
|  |  | E1 | 3629 | 73 | 60 | 61% | 3357 | 52% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3532 | 26 | 346 | 51% | 3511 | 81% |
|  |  | P1 | 3502 | 133 | 24 | 81% | 3083 | 38% |
|  |  | E1 | 3537 | 66 | 68 | 65% | 3310 | 60% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 3386 | 26 | 378 | 54% | 3339 | 70% |
|  |  | P1 | 3347 | 101 | 26 | 60% | 3266 | 58% |
|  |  | E1 | 3382 | 54 | 88 | 53% | 3344 | 68% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 6.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3452 | 32 | 244 | 49% | 3456 | 76% |
|  |  | P1 | 3426 | 35 | 200 | 49% | 3432 | 76% |
|  |  | E1 | 3484 | 25 | 394 | 50% | 3487 | 73% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3411 | 30 | 286 | 50% | 3411 | 71% |
|  |  | P1 | 3375 | 32 | 242 | 49% | 3383 | 75% |
|  |  | E1 | 3420 | 25 | 402 | 49% | 3430 | 74% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 3200 | 32 | 268 | 48% | 3213 | 61% |
|  |  | P1 | 3129 | 30 | 288 | 49% | 3139 | 62% |
|  |  | E1 | 3121 | 25 | 460 | 45% | 3162 | 52% |