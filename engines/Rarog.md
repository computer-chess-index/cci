# Engine: Rarog

Author: Miloslav Macůrek

Home: https://github.com/maelic13/rarog

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.6.0 | 2026-10-22 | 2971<sub>(+98) | 3283<sub>(+120) | 3437<sub>(+158) |  |
| 2.5.0 | 2026-10-05 | 2873<sub>(+354) | 3163<sub>(+267) | 3279<sub>(+240) |  |
| 2.4.0 | 2026-09-11 | 2519 | 2896 | 3039 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.6.0 | 2026-10-22 | 3160<sub>(+243) | 3267<sub>(-8) | 3461<sub>(+90) |  |
| 2.5.0 | 2026-10-05 | 2917<sub>(+290) | 3275<sub>(+269) | 3371<sub>(+301) |  |
| 2.4.0 | 2026-09-11 | 2627 | 3006 | 3070 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.4.0 | 2026-09-11 | 2614 | 2930 | 3015 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Rarog+<version>&body=###%20Engine%20name%0ARarog%0A%0A###%20Version%0A2.4.0" target="_blank">Submit new version</a>

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

Generated: 2026-10-23 04:42:16

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.4.0", "2.5.0", "2.6.0"]
  y-axis "Elo Rating" 2500 --> 3500
  line "E1: STC (8.0+0.08s)" [2519, 2873, 2971]
  line "E1: LTC (60.0+0.60s)" [2896, 3163, 3283]
  line "E1: VLTC (2m24s+1.12s)" [3039, 3279, 3437]
  line "P1: STC (8.0+0.08s)" [2627, 2917, 3160]
  line "P1: LTC (60.0+0.60s)" [3006, 3275, 3267]
  line "P1: VLTC (2m24s+1.12s)" [3070, 3371, 3461]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.6.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3461 | 89 | 30 | 50% | 3461 | 73% |
|  |  | E1 | 3437 | 91 | 32 | 56% | 3386 | 56% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3267 | 108 | 24 | 48% | 3286 | 46% |
|  |  | E1 | 3283 | 92 | 32 | 55% | 3247 | 53% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3160 | 102 | 32 | 59% | 3066 | 25% |
|  |  | E1 | 2971 | 97 | 32 | 53% | 2942 | 38% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.5.0 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3279 | 30 | 308 | 54% | 3251 | 56% |
|  |  | P1 | 3371 | 36 | 206 | 53% | 3349 | 61% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 3163 | 33 | 264 | 53% | 3136 | 55% |
|  |  | P1 | 3275 | 35 | 230 | 48% | 3287 | 52% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2917 | 45 | 150 | 51% | 2904 | 40% |
|  |  | E1 | 2873 | 32 | 308 | 56% | 2822 | 38% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.4.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3015 | 35 | 256 | 53% | 2984 | 40% |
|  |  | P1 | 3070 | 39 | 198 | 51% | 3062 | 42% |
|  |  | E1 | 3039 | 29 | 367 | 52% | 3028 | 41% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2930 | 33 | 292 | 57% | 2861 | 38% |
|  |  | P1 | 3006 | 42 | 168 | 53% | 2973 | 43% |
|  |  | E1 | 2896 | 32 | 310 | 47% | 2927 | 38% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2614 | 36 | 266 | 52% | 2564 | 29% |
|  |  | P1 | 2627 | 46 | 156 | 46% | 2664 | 31% |
|  |  | E1 | 2519 | 36 | 252 | 41% | 2614 | 33% |