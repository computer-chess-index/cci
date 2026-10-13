# Engine: Sturddle2

Author: Cristian Vlasceanu

Home: https://github.com/cristivlas/sturddle-2

## Elo Ratings E1

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.7.0 | 2026-10-04 | 2762<sub>(+135) | 3093<sub>(+85) | 3182<sub>(+47) |  |
| 2.6.0 | 2026-08-09 | 2627 | 3008 | 3135 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.7.0 | 2026-10-04 | 2870<sub>(+62) | 3210<sub>(-3) | 3301<sub>(+26) |  |
| 2.6.0 | 2026-08-09 | 2808 | 3213 | 3275 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1

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

Generated: 2026-10-13 04:43:54

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.6.0", "2.7.0"]
  y-axis "Elo Rating" 2600 --> 3400
  line "E1: STC (8.0+0.08s)" [2627, 2762]
  line "E1: LTC (60.0+0.60s)" [3008, 3093]
  line "E1: VLTC (2m24s+1.12s)" [3135, 3182]
  line "P1: STC (8.0+0.08s)" [2808, 2870]
  line "P1: LTC (60.0+0.60s)" [3213, 3210]
  line "P1: VLTC (2m24s+1.12s)" [3275, 3301]
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

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.7.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3301 | 71 | 58 | 57% | 3240 | 45% |
| 2.7.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3182 | 50 | 116 | 50% | 3182 | 49% |
| 2.7.0 | LTC <sub>(60.0+0.60s)</sub> | 3210 | 72 | 52 | 48% | 3221 | 54% |
| 2.7.0 | LTC <sub>(60.0+0.60s)</sub> | 3093 | 47 | 130 | 54% | 3059 | 48% |
| 2.7.0 | STC <sub>(8.0+0.08s)</sub> | 2870 | 69 | 66 | 52% | 2846 | 32% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.7.0 | STC <sub>(8.0+0.08s)</sub> | 2762 | 60 | 84 | 55% | 2712 | 39% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.6.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3158 | 30 | 296 | 50% | 3160 | 56% |
| 2.6.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3275 | 41 | 168 | 48% | 3295 | 54% |
| 2.6.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3135 | 31 | 304 | 51% | 3129 | 52% |
| 2.6.0 | LTC <sub>(60.0+0.60s)</sub> | 3109 | 29 | 332 | 50% | 3110 | 52% |
| 2.6.0 | LTC <sub>(60.0+0.60s)</sub> | 3213 | 40 | 174 | 48% | 3229 | 52% |
| 2.6.0 | LTC <sub>(60.0+0.60s)</sub> | 3008 | 31 | 308 | 46% | 3044 | 50% |
| 2.6.0 | STC <sub>(8.0+0.08s)</sub> | 2799 | 32 | 312 | 51% | 2790 | 35% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.6.0 | STC <sub>(8.0+0.08s)</sub> | 2808 | 40 | 208 | 48% | 2820 | 31% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.6.0 | STC <sub>(8.0+0.08s)</sub> | 2627 | 33 | 302 | 44% | 2687 | 35% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.5.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3174 | 23 | 514 | 52% | 3155 | 52% |
| 2.5.0 | LTC <sub>(60.0+0.60s)</sub> | 3033 | 25 | 478 | 49% | 3044 | 45% |
| 2.5.0 | STC <sub>(8.0+0.08s)</sub> | 2704 | 23 | 626 | 50% | 2700 | 33% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.4.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3100 | 34 | 236 | 49% | 3105 | 53% |
| 2.4.0 | LTC <sub>(60.0+0.60s)</sub> | 3015 | 37 | 224 | 51% | 2996 | 45% |
| 2.4.0 | STC <sub>(8.0+0.08s)</sub> | 2627 | 36 | 248 | 50% | 2623 | 30% |
| --- | --- | --- | --- | --- | --- | --- | --- |