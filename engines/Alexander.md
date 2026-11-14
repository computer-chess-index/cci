# Engine: Alexander

Author: Andrea Manzo

Home: https://github.com/amchess/Alexander

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 8.3 | 2026-04-01 | 2921<sub>(-46) | 3187<sub>(-11) | 3287<sub>(+168) |  |
| 8.2 | 2026-03-23 | 2967 | 3198 | 3119 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 8.3 | 2026-04-01 | 2912<sub>(+18) | 3128<sub>(+115) | 3183<sub>(+194) |  |
| 8.2 | 2026-03-23 | 2894 | 3013 | 2989 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 8.3 | 2026-04-01 | 3163<sub>(+3) | 3389<sub>(+17) | 3444<sub>(+16) |  |
| 8.2 | 2026-03-23 | 3160<sub>(-26) | 3372<sub>(-8) | 3428<sub>(-12) |  |
| 8.1 | 2026-03-16 | 3186<sub>(+39) | 3380<sub>(-11) | 3440<sub>(+11) |  |
| 8.0 | 2026-03-10 | 3147 | 3391 | 3429 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Alexander+<version>&body=###%20Engine%20name%0AAlexander%0A%0A###%20Version%0A8.3" target="_blank">Submit new version</a>

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

Generated: 2026-11-14 05:35:24

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["8.2", "8.3"]
  y-axis "Elo Rating" 2800 --> 3300
  line "E1: STC (8.0+0.08s)" [2967, 2921]
  line "E1: LTC (60.0+0.60s)" [3198, 3187]
  line "E1: VLTC (2m24s+1.12s)" [3119, 3287]
  line "P1: STC (8.0+0.08s)" [2894, 2912]
  line "P1: LTC (60.0+0.60s)" [3013, 3128]
  line "P1: VLTC (2m24s+1.12s)" [2989, 3183]
```



## Ratings Verlauf T1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["8.0", "8.1", "8.2", "8.3"]
  y-axis "Elo Rating" 3100 --> 3500
  line "T1: STC (8.0+0.08s)" [3147, 3186, 3160, 3163]
  line "T1: LTC (60.0+0.60s)" [3391, 3380, 3372, 3389]
  line "T1: VLTC (2m24s+1.12s)" [3429, 3440, 3428, 3444]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 8.3 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3444 | 22 | 534 | 50% | 3447 | 68% |
|  |  | P1 | 3183 | 26 | 486 | 58% | 3108 | 33% |
|  |  | E1 | 3287 | 28 | 418 | 50% | 3271 | 35% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3389 | 22 | 514 | 48% | 3403 | 66% |
|  |  | P1 | 3128 | 34 | 298 | 52% | 3067 | 34% |
|  |  | E1 | 3187 | 27 | 448 | 53% | 3137 | 32% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2912 | 30 | 372 | 41% | 2994 | 30% |
|  |  | E1 | 2921 | 28 | 450 | 42% | 3001 | 27% |
|  |  | T1 | 3163 | 24 | 500 | 52% | 3148 | 48% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 8.2 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2989 | 110 | 30 | 75% | 2723 | 30% |
|  |  | E1 | 3119 | 107 | 36 | 58% | 2998 | 11% |
|  |  | T1 | 3428 | 26 | 380 | 49% | 3436 | 70% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 3198 | 108 | 32 | 64% | 2917 | 28% |
|  |  | T1 | 3372 | 31 | 284 | 50% | 3371 | 62% |
|  |  | P1 | 3013 | 126 | 24 | 60% | 2836 | 21% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 2967 | 98 | 54 | 69% | 2611 | 13% |
|  |  | T1 | 3160 | 27 | 396 | 48% | 3174 | 44% |
|  |  | P1 | 2894 | 120 | 28 | 50% | 2893 | 21% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 8.1 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3440 | 28 | 324 | 49% | 3445 | 64% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3380 | 30 | 290 | 51% | 3374 | 66% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 3186 | 31 | 302 | 49% | 3194 | 44% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 8.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3429 | 28 | 308 | 50% | 3426 | 72% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3391 | 28 | 332 | 50% | 3390 | 63% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 3147 | 31 | 300 | 49% | 3152 | 47% |