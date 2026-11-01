# Engine: Sturddle2

Author: Cristian Vlasceanu

Home: https://github.com/cristivlas/sturddle-2

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.7.0 | 2026-10-04 | 2885<sub>(+136) | 3217<sub>(+84) | 3310<sub>(+48) |  |
| 2.6.0 | 2026-08-09 | 2749 | 3133 | 3262 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.7.0 | 2026-10-04 | 2855<sub>(+25) | 3248<sub>(+1) | 3362<sub>(+53) |  |
| 2.6.0 | 2026-08-09 | 2830 | 3247 | 3309 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.6.0 | 2026-08-09 | 2799<sub>(+95) | 3109<sub>(+76) | 3158<sub>(-16) |  |
| 2.5.0 | 2026-02-04 | 2704<sub>(+77) | 3033<sub>(+18) | 3174<sub>(+74) |  |
| 2.4.0 | 2025-12-06 | 2627 | 3015 | 3100 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Sturddle2+<version>&body=###%20Engine%20name%0ASturddle2%0A%0A###%20Version%0A2.6.0" target="_blank">Submit new version</a>

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

Generated: 2026-11-01 05:43:21

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.6.0", "2.7.0"]
  y-axis "Elo Rating" 2700 --> 3400
  line "E1: STC (8.0+0.08s)" [2749, 2885]
  line "E1: LTC (60.0+0.60s)" [3133, 3217]
  line "E1: VLTC (2m24s+1.12s)" [3262, 3310]
  line "P1: STC (8.0+0.08s)" [2830, 2855]
  line "P1: LTC (60.0+0.60s)" [3247, 3248]
  line "P1: VLTC (2m24s+1.12s)" [3309, 3362]
```



## Ratings Verlauf T1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.4.0", "2.5.0", "2.6.0"]
  y-axis "Elo Rating" 2600 --> 3200
  line "T1: STC (8.0+0.08s)" [2627, 2704, 2799]
  line "T1: LTC (60.0+0.60s)" [3015, 3033, 3109]
  line "T1: VLTC (2m24s+1.12s)" [3100, 3174, 3158]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.7.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3362 | 34 | 234 | 51% | 3348 | 55% |
|  |  | E1 | 3310 | 33 | 264 | 50% | 3310 | 53% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3248 | 40 | 174 | 50% | 3248 | 57% |
|  |  | E1 | 3217 | 33 | 252 | 51% | 3204 | 54% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2855 | 43 | 174 | 50% | 2851 | 34% |
|  |  | E1 | 2885 | 34 | 262 | 51% | 2878 | 39% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.6.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3309 | 41 | 168 | 48% | 3329 | 54% |
|  |  | E1 | 3262 | 31 | 304 | 51% | 3255 | 52% |
|  |  | T1 | 3158 | 30 | 296 | 50% | 3160 | 56% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3247 | 40 | 174 | 48% | 3263 | 52% |
|  |  | E1 | 3133 | 30 | 316 | 46% | 3168 | 51% |
|  |  | T1 | 3109 | 29 | 332 | 50% | 3110 | 52% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2830 | 39 | 216 | 48% | 2839 | 30% |
|  |  | E1 | 2749 | 33 | 302 | 44% | 2808 | 35% |
|  |  | T1 | 2799 | 32 | 312 | 51% | 2790 | 35% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.5.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3174 | 23 | 514 | 52% | 3155 | 52% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3033 | 25 | 478 | 49% | 3044 | 45% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2704 | 23 | 626 | 50% | 2700 | 33% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.4.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3100 | 34 | 236 | 49% | 3105 | 53% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3015 | 37 | 224 | 51% | 2996 | 45% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2627 | 36 | 248 | 50% | 2623 | 30% |