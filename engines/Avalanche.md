# Engine: Avalanche

Author: Yinuo Huang

Home: https://github.com/SnowballSH/Avalanche

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 5.0.0 | 2026-10-11 | 3329<sub>(+140) | 3560<sub>(+61) | 3626<sub>(+74) |  |
| 4.0.0 | 2026-08-08 | 3189 | 3499 | 3552 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 5.0.0 | 2026-10-11 | 3440<sub>(+132) | 3644<sub>(+80) | 3708<sub>(+101) |  |
| 4.0.0 | 2026-08-08 | 3308 | 3564 | 3607 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 4.0.0 | 2026-08-08 | 3194<sub>(+289) | 3395<sub>(+194) | 3448<sub>(+211) |  |
| 3.0.0 | 2026-06-25 | 2905 | 3201 | 3237 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Avalanche+<version>&body=###%20Engine%20name%0AAvalanche%0A%0A###%20Version%0A4.0.0" target="_blank">Submit new version</a>

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

Generated: 2026-11-10 05:36:11

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["4.0.0", "5.0.0"]
  y-axis "Elo Rating" 3100 --> 3800
  line "E1: STC (8.0+0.08s)" [3189, 3329]
  line "E1: LTC (60.0+0.60s)" [3499, 3560]
  line "E1: VLTC (2m24s+1.12s)" [3552, 3626]
  line "P1: STC (8.0+0.08s)" [3308, 3440]
  line "P1: LTC (60.0+0.60s)" [3564, 3644]
  line "P1: VLTC (2m24s+1.12s)" [3607, 3708]
```



## Ratings Verlauf T1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["3.0.0", "4.0.0"]
  y-axis "Elo Rating" 2900 --> 3500
  line "T1: STC (8.0+0.08s)" [2905, 3194]
  line "T1: LTC (60.0+0.60s)" [3201, 3395]
  line "T1: VLTC (2m24s+1.12s)" [3237, 3448]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 5.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3708 | 37 | 174 | 49% | 3717 | 80% |
|  |  | E1 | 3626 | 33 | 216 | 51% | 3617 | 79% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3644 | 38 | 166 | 52% | 3630 | 77% |
|  |  | E1 | 3560 | 27 | 350 | 53% | 3540 | 71% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3440 | 33 | 232 | 49% | 3445 | 66% |
|  |  | E1 | 3329 | 29 | 306 | 51% | 3321 | 66% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 4.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3448 | 26 | 370 | 52% | 3432 | 79% |
|  |  | P1 | 3607 | 36 | 178 | 48% | 3617 | 81% |
|  |  | E1 | 3552 | 31 | 252 | 50% | 3555 | 75% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3395 | 28 | 304 | 51% | 3384 | 75% |
|  |  | P1 | 3564 | 39 | 164 | 50% | 3560 | 73% |
|  |  | E1 | 3499 | 33 | 244 | 50% | 3501 | 64% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 3194 | 29 | 312 | 49% | 3204 | 63% |
|  |  | P1 | 3308 | 37 | 204 | 47% | 3332 | 55% |
|  |  | E1 | 3189 | 30 | 304 | 44% | 3233 | 59% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 3.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3237 | 32 | 262 | 53% | 3208 | 59% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3201 | 34 | 240 | 53% | 3164 | 56% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2905 | 31 | 320 | 51% | 2894 | 41% |